import {check} from "express-validator"
const request = [
    check('data').isNumeric().withMessage('Not object'),
    check('params').isNumeric().withMessage('Not object'),
];


export default request;