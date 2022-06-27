import {Express} from 'express';

import ElectronicDocumentController from './controllers/electronic_document.controller';
import verifyApiKey from './middlewares/verifyApiKey';


const routes = (app:Express)=>{
    
    app.use(verifyApiKey)

    app.post('/api/electronic-document/create',ElectronicDocumentController.create)

}


export default routes