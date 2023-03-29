import express from 'express';
const fileUpload = require('express-fileupload');
import pkg from '../package.json'

import {createRoles} from './libs/initialSetUp'

import patientRoutes from "./routes/patient.routes";
import dataRoutes from "./routes/data.routes";
import authRoutes from "./routes/auth.routes";
import doctorRoutes from "./routes/doctor.routes";
import diagnosisQuestionsRoutes from "./routes/diagnosisQuestions.routes";
import snsRoutes from "./routes/sns.routes";
import s3Routes from "./routes/s3.routes";
import cors from 'cors';
import multer from "multer";

const app =express();
createRoles();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.set('pkg',pkg);
app.get('/',(req, res)=>{
    res.json(app.get('pkg'));
});


 // var whitelist =['url']
 // var corsOptions = {
 // origin: function (origin,cb){
 //       if(whitelist.indexOf(origin !==1)) {
 //           cb(null,true);
 //       }
 //           else
 //               { cb(new Error('not allowed by CORS'));}
 //       }
 // }



app.use('/patient', patientRoutes);
app.use('/data', dataRoutes);
app.use('/doctor', doctorRoutes);
app.use('/auth', authRoutes);
app.use('/diagnosis', diagnosisQuestionsRoutes);
app.use('/sns', snsRoutes);
app.use('/upload',s3Routes);
export default app;
