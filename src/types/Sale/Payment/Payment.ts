import Condition from "./Condition"
import Method from "./Method"
import Currency  from "./Currency"
type Payment = {
    condition: Condition,
    method: Method,
    currency: Currency,
    currency_exchange: number,
    amount: number,
}

export default Payment