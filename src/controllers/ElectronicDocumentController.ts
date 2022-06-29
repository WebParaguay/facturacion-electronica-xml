import {Request,Response,NextFunction} from 'express';
import xmlgen from 'facturacionelectronicapy-xmlgen';
const create = (request:Request,response:Response,next:NextFunction)=>{
    console.log(request.body)
    return response.send(request.body);
}   

export default { create }