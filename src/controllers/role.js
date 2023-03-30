import Role from "../models/Role";

export const getRole = async (req,res)=>{
    const role =await Role.findById(req.params.id);
    res.status(200).json(role);
}
