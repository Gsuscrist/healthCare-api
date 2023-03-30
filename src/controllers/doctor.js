import Doctor from "../models/Doctor";
import * as secureCrypt from '../libs/secureCrypt'
import {re} from "@babel/core/lib/vendor/import-meta-resolve";
import Role from "../models/Role";
export const createDoctor= async (req,res)=>{
const {name, lastName, gender, dateOfBirth, phoneNumber, email, password,photoURL,
medicalCardId, role} = req.body

    const newDoctor = new Doctor({
        name, lastName, gender, dateOfBirth, phoneNumber, email,
        password: await secureCrypt.encryptPassword(password),photoURL,
        medicalCardId, role
    })

    if (role){
        const foundedRol = await Role.find({name: {$in: role}});
        newDoctor.role = foundedRol.map(role => role._id)
    }else {
        const role = await Role.findOne({name: "doctor"})
        newDoctor.role = [role._id];
    }

    const doctorSaved = await newDoctor.save();
    res.status(200).json(doctorSaved)

}

export const getAll =async (req,res)=>{
     const doctors = await Doctor.find()
    res.status(200).json(doctors)
}

export const getDoctor = async (req,res) =>{
    const doctor = await Doctor.findById(req.params.id)
    res.status(200).json(doctor);
}

export const updateDoctor = async (req,res) =>{
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedDoctor);
}

export const deleteDoctor = async (req,res) =>{
    await Doctor.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'doctor deleted'})
}
