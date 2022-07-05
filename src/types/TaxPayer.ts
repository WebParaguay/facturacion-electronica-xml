import TaxPayerType from "./TaxPayer/TaxPayerType"

type TaxPayer = {
    name:String
    type:TaxPayerType
    ruc:String
    address:String
    city:String
    phone:String
    email:String
}

export default TaxPayer