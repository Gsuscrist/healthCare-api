import amqplib from 'amqplib'

import Data from '../models/Data';

    export const createData = async (req, res) => {
    const {heartBeat, patientId} = req.body;

    const newData = new Data({
        heartBeat,patientId
    });

        const dataSaved = await newData.save();

        const minuteData = await Data.find({patientId}).sort({$natural:-1}).limit(12).lean();
        console.log(minuteData);

        const totalBeats = minuteData.reduce((sum,value)=>(
            typeof value.heartBeat == "number" ? sum + value.heartBeat : sum ),0);
        const bpm=totalBeats/12;

        if(bpm>100 || bpm<60){
            const queue = 'event-initialize';
            const connection = await amqplib.connect('amqp://healthCare:secureHealth@44.206.223.169:5672');
            console.log('connection successful')
            const channelEventInitialize = await connection.createChannel();
            console.log('Chanel created')

            let status = await channelEventInitialize.sendToQueue(queue, Buffer.from(JSON.stringify({
               patientId, bpm
            })))
                await channelEventInitialize.close();
            console.log('channel closed')
            res.status(200).json({message:'notification sent'})
        }else {

            res.status(201).json(dataSaved);
        }


   }

    export const getDataOf = async (req, res) => {
    const patientId = req.params.patientId;
       const patientData = await Data.find({patientId});
       res.status(200).json(patientData);
   }

    export const updateData = async (req, res) => {
        const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(updatedData);
   }

    export const deleteData = async (req, res) => {
        await Data.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'data deleted'});
   }

