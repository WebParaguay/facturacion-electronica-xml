import Integer from "../Integer"
import VatType from "./VatType"
import Vat from "./Vat"
type Product = {
    name:string,
    quantity:Integer,
    unit_price:Number,
    change:Number,
    discount:Number,
    advancement:Number,
    vat_type:VatType,
    vat_base:Number,
    vat:Vat
}

export default Product;