import {Express} from 'express';

import ElectronicDocumentController from './controllers/ElectronicDocumentController';
import CreateElectronicDocumentRequest from "./requests/CreateElectronicDocumentRequest"
import verifyApiKey from './middlewares/verifyApiKey';


const routes = (app:Express)=>{
    
    app.use(verifyApiKey)

    app.post(
                '/api/electronic-document/create',
                CreateElectronicDocumentRequest, 
                ElectronicDocumentController.create
            )

}


export default routes