import AWS from 'aws-sdk'
import config from "../config";

const sns = new AWS.SNS({
    profile: 'sns_profile',
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    region: config.AWS_REGION,
});

export const status= async (req, res)=>{
    res.status(200).json({message:'connection working'})
}

export const subscribe = async (req,res)=>{
    let params = {
        Protocol: 'EMAIL',
        TopicArn: config.AWS_SNS_TOPIC,
        Endpoint: req.body.email
    };

    await sns.subscribe(params, (err, data) => {
        if (err) {
            res.status(400).json({message:err})
        } else {
            console.log(data);
            res.status(200).json(data);
        }
    });
}

export const sendNotification = async (req,res)=>{
    let now = new Date().toString();
    let email = `${req.body.message} \n \n Enviado: ${now}`;
    let params = {
        Message: email,
        Subject: req.body.subject,
        TopicArn: config.AWS_SNS_TOPIC,
        endpoint:req.body.email
    };

   await sns.publish(params, function(err, data) {
        if (err)  res.status(400).json({error: err, errorStack: err.stack});
        else  res.status(200).json(data);
    });
}


