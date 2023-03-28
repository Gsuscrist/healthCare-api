import jwt from "jsonwebtoken";
import config from "../config";
import Patient from "../models/Patient";
import Doctor from "../models/Doctor";
import Role from "../models/Role";
export const verifyToken = async (req, res, next) =>{
try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({message: 'no token provided'})

    const decode = jwt.verify(token,config.SECRET_PT);
    req.id = decode.id;
    const user = await Patient.findById(req.id, {password:0})
    if (!user) return res.status(404).json({message: 'invalid token'});

    next();

}catch (e) {
    console.error(e)
    return res.status(401).json({message: 'unauthorized'})
}
}

export const isDoctor = async (req,res, next) =>{
const doctor = await Doctor.findById(req.id)

    if (!doctor) return res.status(401).json({message: 'unauthorized'})

    next();
}

export const isAdmin = async (req,res, next) =>{
    const user = await Patient.findById(req.id)
    const roles = await Role.find({_id:{$in: user.role}})

    for (let i=0;i<roles.length; i++){
        if (roles[i].name === "admin"){
            next()
        }
    }

    return res.status(401).json({message: 'unauthorized'})
}
