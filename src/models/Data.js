import {Schema, model} from "mongoose";

const dataSchema = new Schema({
    heartBeat: Number,
    patientId: String,
},{
    timestamps:true,
    versionKey:false
})

export default model('Data', dataSchema)
