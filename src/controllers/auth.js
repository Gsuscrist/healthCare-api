import Patient from "../models/Patient";
import jwt from "jsonwebtoken";
import config from '../config'
import Role from "../models/Role";
import * as secureCrypt from "../libs/secureCrypt";
import amqplib from "amqplib";
import Doctor from "../models/Doctor";


export const signUp = async (req, res) => {
    const {name, lastName, gender, dateOfBirth, weight, height, phoneNumber, email, password, photoURL, role, primaryDoctorId}  = req.body;
    const {contactName, contactPhoneNumber, contactEmail} = req.body.emergencyContact;


    const newPatient= new Patient({
        name, lastName, gender, dateOfBirth, weight, height, phoneNumber, email,
        password:await secureCrypt.encryptPassword(password),
        photoURL,primaryDoctorId,
        emergencyContact:
            { contactName, contactPhoneNumber, contactEmail},
    });

    if (role){
        const foundedRol = await Role.find({name: {$in: role}});
        newPatient.role = foundedRol.map(role => role._id)
    }else {
        const role = await Role.findOne({name: "patient"})
        newPatient.role = [role._id];
    }

    const patientSaved = await newPatient.save();
    //llamada ala cola con rabbitMQ
    const queue = 'subscription';
    const connection = amqplib.connect('amqp://healthCare:secureHealth@44.206.223.169:5672');
    console.log('connection successful');
    const channelSubscribe = (await connection).createChannel();
    console.log('chanel created');
    const token = jwt.sign({id: patientSaved._id}, config.SECRET_PT, {
        expiresIn: 172800 //48hrs
    })
    let status = (await channelSubscribe).sendToQueue(queue, Buffer.from(JSON.stringify({
        email: patientSaved.email,
        emergencyEmail: patientSaved.emergencyContact.contactEmail,
    })))

    res.status(200).json({token});

}

export const signIn = async (req, res) => {

    const {email, password} = req.body;

    const patient = await Patient.findOne({email}).populate("role")


    if (!patient) {
     const doctor = await Doctor.findOne({email}).populate("role")
     const matchpss = await secureCrypt.comparePassword(password, doctor.password)
        if (!matchpss)return res.status(401).json({token: null, message: 'invalid password'})
        const token = jwt.sign({id: patient._id}, config.SECRET_PT, {
            expiresIn: 86400 //24hrs
        })
        const rol = doctor.role.map(role => role.id)
        res.json({token, id:patient._id, role:rol[0]})

    }else {
        const matchPassword = await secureCrypt.comparePassword(password, patient.password)

        if (!matchPassword)return res.status(401).json({token: null, message: 'invalid password'})

        // console.log(patient);
        const token = jwt.sign({id: patient._id}, config.SECRET_PT, {
            expiresIn: 86400 //24hrs
        })
        const rol = patient.role.map(role => role.id)
        res.json({token, id:patient._id, role:rol[0]})
        
        return res.status(400).json({message: "user not founded"})
    }


}




