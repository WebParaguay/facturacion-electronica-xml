import DocumentType from './Sale/DocumentType';
import EmissionType from "./Sale/EmissionType";
import Currency from "./Sale/Currency";
import Integer from "./Sale/Integer"
type TaxPayer = {
    document_type:DocumentType,
    emission_type:EmissionType,
    transaction_type:TransactionType,
    currency:Currency,
    establishment_id:Integer,
    expedition_point_id:Integer,
    currency_exchange:Number,
    client:any,
    description:String,
    payment_method:String,
    products:any[],
}

export default TaxPayer