import {Request,Response,NextFunction} from 'express';

export default  (req:Request,res:Response,next:NextFunction)=>{
    console.log('verifyApiKey');
    console.log(process.env.API_KEY)
    if(req.headers['x-api-key']===process.env.API_KEY){
        next();
    }
    res.status(401)
    return res.json({message:'Unauthorized'})
}