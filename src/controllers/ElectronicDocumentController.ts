import {Request,Response,NextFunction} from 'express';
import ElectronicDocument from '../services/ElectronicDocument';

const create = (request:Request,response:Response,next:NextFunction)=>{
    const electronicDocument = new ElectronicDocument(request.body.taxpayer,request.body.billable);
    electronicDocument.toXml().then(xml=>{
        response.send(xml);
    }).catch(error=>{
        console.log(error)
        response.status(500).send(error)
    });

}   

export default { create }