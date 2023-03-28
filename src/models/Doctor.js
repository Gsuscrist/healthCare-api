import {Schema, model} from 'mongoose';

const doctorSchema = new Schema({
    name: String,
    lastName: String,
    gender: String,
    dateOfBirth: Date,
    phoneNumber: Number,
    email: String,
    password: String,
    photoURL: String,
    medicalCardId: String,
    role: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false,
});

export default model('Doctor', doctorSchema);
