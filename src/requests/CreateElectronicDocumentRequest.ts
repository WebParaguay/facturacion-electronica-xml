
import {check} from "express-validator"
import ValidationChainHandler from "../handlers/ValidationChainHandler"

export default ValidationChainHandler([

    check('taxpayer').isObject(),
    check('taxpayer.name').isString(),
    check('taxpayer.type').isIn(['person','commerce']),
    check('taxpayer.ruc').isString().matches(/^(\d{1,10})(\-\d)?$/),
    check('taxpayer.address').isString(),
    check('taxpayer.city').isString(),
    check('taxpayer.phone').isString(),
    check('taxpayer.email').isEmail(),

    check('billable').isObject(),
    check('billable.document_type').isIn([1]),
    check('billable.emission_type').isIn([1]),
    check('billable.transaction_type').isIn([1,2,3,4,5,6,7,8,9,10,11,12,13]),
    check('billable.establishment_id').isInt({min:1}),
    check('billable.expedition_point_id').isInt({min:1}),
    check('billable.currency_exchange').isNumeric(),
    check('billable.currency').isIn(['PYG']),
    check('billable.description').isString(),
    check('billable.payment_method').isString(),

    check('billable.client').isObject(),
    check('billable.client.name').isString(),
    check('billable.client.type').isIn(['person','commerce']),
    check('billable.client.ruc').isString().matches(/^(\d{1,10})(\-\d)?$/),
    check('billable.client.address').isString(),
    check('billable.client.city').isString(),
    check('billable.client.phone').isString(),
    check('billable.client.email').isEmail(),

    check('billable.products').isArray(),
    check('billable.products.*').isObject(),
    check('billable.products.*.name').isString(),
    check('billable.products.*.unit_price').isFloat(),
    check('billable.products.*.quantity').isInt({min:1}),
    check('billable.products.*.change').isFloat(),
    check('billable.products.*.discount').isFloat(),
    check('billable.products.*.advancement').isFloat(),
    check('billable.products.*.vat_type').isIn(['1','2','3','4']),
    check('billable.products.*.vat_base').isFloat(),
    check('billable.products.*.vat').isIn(['0','5','10']),

]);