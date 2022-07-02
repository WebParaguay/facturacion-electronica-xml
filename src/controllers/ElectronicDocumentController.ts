import {Request,Response,NextFunction} from 'express';


const create = (request:Request,response:Response,next:NextFunction)=>{

    console.log(request.body)
    return response.send(request.body);

}   

export default { create }