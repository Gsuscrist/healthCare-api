import {Schema, model} from "mongoose";

const diagnosisQuestionSchema = new Schema({
    patientId:String,
    headache: Boolean,
    earBuzz:Boolean,
    epigastricPain: Boolean,
    swelling:Boolean
},{
    timestamps:true,
    versionKey:false
})

export default model('DiagnosisQuestions', diagnosisQuestionSchema);
