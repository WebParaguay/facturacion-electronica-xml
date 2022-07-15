
import xmlgen from "facturacionelectronicapy-xmlgen"
import TaxPayer from "../types/TaxPayer";
import Sale from "../types/Sale"
import PaymentCondition from "../types/Sale/Payment/Condition";
import Payment from "../types/Sale/Payment/Payment";
import Product from "../types/Sale/Product/Product";
class ElectronicDocument {

    protected taxpayer:TaxPayer;
    protected billable;

    constructor(taxpayer: TaxPayer, billable: Sale) {
        this.taxpayer = taxpayer;
        this.billable = billable;
    }

    protected formatTaxPayer(): Object {
        return {
            "version" : 150,
            "fechaFirmaDigital" : "2021-08-13T00:00:00",
            "ruc" : this.taxpayer.ruc,
            "razonSocial" : this.taxpayer.name,
            "nombreFantasia" : this.taxpayer.name,
            "actividadesEconomicas" : [
                {
                    "codigo": "1254",
                    "descripcion": "Desarrollo de Software",
                }
            ],   
            "timbradoNumero" : "12558946",
            "timbradoFecha" : "2021-08-25T00:00:00",
            "tipoContribuyente" : 2, 
            "tipoRegimen" : 8, 
            "establecimientos" : [{
              "codigo" : "001",
              "direccion" : this.taxpayer.address, 
              "departamento" : 11,
              "distrito" : 145,
              "ciudad" : 3432,
              "ciudadDescripcion" :this.taxpayer.city,
              "telefono" : this.taxpayer.phone,
              "email" : this.taxpayer.email,
            }]
        }
    }

    protected formatBillable(): Object {
        return {
            "tipoDocumento" : Number(this.billable.document_type),
            "establecimiento" : "001",
            "descripcion" : "Aparece en el documento",
            "observacion" : "Cualquier informacion de marketing, publicidad, sorteos, promociones para el Receptor",
            "tipoContribuyente" : 1,
            "fecha" : "2020-09-14T10:11:00",
            "tipoEmision" : Number(this.billable.emission_type),
            "tipoTransaccion" : Number(this.billable.transaction_type),
            "tipoImpuesto" : 1,
            "moneda" : this.billable.currency,
            "condicionAnticipo" : 1,
            "condicionTipoCambio": 1,
            "cambio": 6700,
            "cliente" : this.formatClient(this.billable.client),
            "factura" : {
                "presencia" : 1,
                "fechaEnvio" : "2021-10-21",
                "dncp" : {
                    "modalidad" : "ABC",
                    "entidad" : 1,
                    "año" : 2021,
                    "secuencia" : 3377,
                    "fecha" : "2020-09-14T10:11:00"
                }
            },
            "condicion" : {
                "tipo" : Number(this.billable.payment.condition),
                ...this.formatPayment(this.billable.payment.condition,this.billable.payment)
            },
            "items" : this.billable.products.map(this.formatProduct),
        }
    }

    protected formatProduct( product: Product) : Object
    {
        return {
                "descripcion": product.name, 
                "observacion": product.name,
                "cantidad": product.quantity,
                "precioUnitario": product.unit_price,
                "cambio": product.change,
                "descuento": product.discount,
                "anticipo": product.advancement,
                "ivaTipo" : parseInt(product.vat_type),
                "ivaBase" : product.vat_base,
                "iva" : product.vat,
            }
    }

    protected formatPayment(condition :PaymentCondition,payment:Payment) : Object
    {
        if(condition==PaymentCondition.Counted)
        {
            return  { 
                        "entregas":[{
                            "tipo" : Number(payment.method),
                            "monto" : payment.amount,
                            "moneda" : payment.currency,
                            "cambio" : payment.currency_exchange
                        }]
                    }
        }
        
            
        return {

        }
    }

    protected formatClient(client:TaxPayer) : Object
    {
        return {
            "contribuyente" : true,
            "ruc" : client.ruc,
            "razonSocial" : client.name,
            "nombreFantasia" : client.name,
            "tipoOperacion" : 1,
            "direccion" : client.address,
            "numeroCasa" : "1515",
            "departamento" : 11,
            "distrito" : 143,
            "ciudad" : 3344,
            "ciudadDescripcion" :client.city,
            "pais" : "PRY",
            "telefono" :  client.phone,
            "celular" : client.phone,
            "email" : client.email,
        }
    }

    toXml() : Promise<any>
    {
        return xmlgen.generateXMLDE(this.formatTaxPayer(), this.formatBillable());
    }


}

export default ElectronicDocument