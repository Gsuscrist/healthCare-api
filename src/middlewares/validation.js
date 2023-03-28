import {ROLES} from '../models/Role'
import Patient from "../models/Patient";
import Doctor from "../models/Doctor";
export const checkedRolesExisted = (req, res, next) =>{
    if (req.body.role){
        for (let i=0; i<req.body.role.length; i++){
            if(!ROLES.includes(req.body.role[i])){
                return res.status(400).json({
                    message: "invalid data"
                })
            }

        }
    }
    next();
}

export const checkDuplicateEmail = async (req, res, next) =>{
 const {email} = req.body;
    const user = await Patient.findOne({email});
    const user2 = await Doctor.findOne({email});
    if (user || user2) return res.status(400).json({
        message: 'email already assigned'
    })

    next();

}
