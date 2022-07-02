import {Request,Response,NextFunction} from 'express';
import ElectronicDocument from '../services/ElectronicDocument';

const create = (request:Request,response:Response,next:NextFunction)=>{

    console.log(request.body)
    const electronicDocument = new ElectronicDocument(request.body.taxpayer,request.body.billable);
    electronicDocument.toXml().then(xml=>{
        response.send(xml);
    }).catch(error=>{
        response.send(error,500)
    });

}   

export default { create }