const AWS = require('aws-sdk');
const fs = require('fs');
import config from '../config'

const s3 = new AWS.S3({
    region: config.AWS_REGION,
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY
});

exports.uploadFileToS3 = async (req, res) => {
    if (!req.files || !req.files.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.files.file;
    const s3Params = {
        Bucket: config.AWS_BUCKET,
        Key: file.name,
        Body: file.data,
        ContentType: file.mimetype,
        ACL: 'public-read'
    };

    s3.upload(s3Params, (err, data) => {
        if (err) {
            console.log('Error uploading file:', err);
            return res.status(500).json({ error: 'Error uploading file to S3' });
        }
        console.log('File uploaded successfully. URL:', data.Location);
        return res.status(200).json({ url: data.Location });
    });
};
