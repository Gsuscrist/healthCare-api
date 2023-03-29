import DiagnosisQuestion from '../models/DiagnosisQuestion'

export const createDiagnosis = async (req,res)=>{
    const {patientId, headache, earBuzz, epigastricPain, swelling} = req.body;

    const newDiagnosis = new DiagnosisQuestion({
    patientId, headache, earBuzz, epigastricPain, swelling
    });

    const diagnosisSaved = await newDiagnosis.save();
    res.status(200).json(diagnosisSaved);
}

export const getDiagnosisOf = async (req,res)=>{
    const patientId = req.params.patientId;

    const diagnosis = await DiagnosisQuestion.find({patientId});
    res.status(200).json(diagnosis);
}

export const updateDiagnosis = async (req,res)=>{
    const updatedDiagnosis = await DiagnosisQuestion.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedDiagnosis);

}

export const deleteDiagnosis = async (req,res)=>{
    await DiagnosisQuestion.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'diagnosis deleted'})
}
