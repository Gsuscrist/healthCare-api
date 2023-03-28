import Patient from "../models/Patient";

    export const getPatient = async (req, res) => {
        const patient = await Patient.findById(req.params.id);
        res.status(200).json(patient);
   }

   export const getPatientWith = async (req,res) =>{
       console.log(req.body.primaryDoctorId)
        const patient = await Patient.findById({primaryDoctorId: req.body.primaryDoctorId});
        res.status(200).json(patient);
   }

    export const updatePatient = async (req, res) => {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json(updatedPatient);
   }


    export const deletePatient = async (req, res) => {
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'patient deleted'});
   }

   export const getDoctorOf = async (req,res) =>{
        const primaryDoctorId =req.body.primaryDoctorId;
       const patients = await Patient.find({primaryDoctorId})
       res.status(200).json(patients);
   }





