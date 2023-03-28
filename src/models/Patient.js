import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'
const patientSchema = new Schema({
    name: String,
    lastName: String,
    gender: String,
    dateOfBirth: Date,
    weight: Number,
    height: Number,
    phoneNumber: Number,
    password: String,
    primaryDoctorId:String,
    email: {
        type: String,
        unique: true
    },
    photoURL: String,
    emergencyContact:{
        contactName:String,
        contactPhoneNumber: Number,
        contactEmail: String,
    },
    role: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false,
});



export default model('Patient', patientSchema);
