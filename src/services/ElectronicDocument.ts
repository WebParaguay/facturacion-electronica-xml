
import xmlgen from "facturacionelectronicapy-xmlgen"
class ElectronicDocument {

    protected taxpayer;
    protected billable;

    constructor(
        taxpayer: any,
        billable: any,
    ) {
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
            "actividadesEconomicas" : [{
              "codigo": "1254",
              "descripcion": "Desarrollo de Software",
            }],   
            "timbradoNumero" : "12558946",
            "timbradoFecha" : "2021-08-25T00:00:00",
            "tipoContribuyente" : 2, 
            "tipoRegimen" : 8, 
            "establecimientos" : [{
              "codigo" : "001",
              "direccion" : this.taxpayer.address, 
              "numeroCasa" : "0", 
              "complementoDireccion1" : "Entre calle 2", 
              "complementoDireccion2" : "y Calle 7",
              "departamento" : 11,
              "departamentoDescripcion" : "ALTO PARANA",
              "distrito" : 145,
              "distritoDescripcion" : this.taxpayer.city,
              "ciudad" : 3432,
              "ciudadDescripcion" : "PUERTO PTE.STROESSNER (MUNIC)",
              "telefono" : this.taxpayer.phone,
              "email" : this.taxpayer.email,
              "denominacion" : "Sucursal 1",
            }]
        }
    }

    protected formatBillable(): Object {
        return {
            "tipoDocumento" : this.billable.document_type,
            "establecimiento" : "001",
            "codigoSeguridadAleatorio" : "298398",
            "punto" : "001",
            "numero" : "0000001", 
            "descripcion" : "Aparece en el documento",
            "observacion" : "Cualquier informacion de marketing, publicidad, sorteos, promociones para el Receptor",
            "tipoContribuyente" : 1,
            "fecha" : "2020-09-14T10:11:00",
            "tipoEmision" : this.billable.emission_type,
            "tipoTransaccion" : this.billable.transaction_type,
            "tipoImpuesto" : 1,
            "moneda" : this.billable.currency,
            "condicionAnticipo" : 1,
            "condicionTipoCambio": 1,
            "cambio": 6700,
            "cliente" : {
                "contribuyente" : true,
                "ruc" : this.billable.client.ruc,
                "razonSocial" : this.billable.client.name,
                "nombreFantasia" : this.billable.client.name,
                "tipoOperacion" : 1,
                "direccion" : this.billable.client.address,
                "numeroCasa" : "1515",
                "departamento" : 11,
                "departamentoDescripcion" : "ALTO PARANA",
                "distrito" : 143,
                "distritoDescripcion" : "DOMINGO MARTINEZ DE IRALA",
                "ciudad" : 3344,
                "ciudadDescripcion" : this.billable.client.city,
                "pais" : "PRY",
                "paisDescripcion" : "Paraguay",
                "tipoContribuyente" : 1,
                "documentoTipo" : 1,
                "documentoNumero" : "2324234",
                "telefono" :  this.billable.client.phone,
                "celular" : this.billable.client.phone,
                "email" : this.billable.client.email,
                "codigo" : "1548"
            },
            "usuario" : {
                "documentoTipo" : 1,
                "documentoNumero" : "157264",
                "nombre" : "Marcos Jara",
                "cargo" : "Vendedor"
            },
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
            "autoFactura" : {
                "tipoVendedor" : 1,
                "documentoTipo" : 1,
                "documentoNumero" : 1,
                "nombre" : "Vendedor autofactura",
                "direccion" : "Vendedor autofactura",
                "numeroCasa" : "Vendedor autofactura",
                "departamento" : 11,
                "departamentoDescripcion" : "ALTO PARANA",
                "distrito" : 143,
                "distritoDescripcion" : "DOMINGO MARTINEZ DE IRALA",
                "ciudad" : 3344,
                "ciudadDescripcion" : "PASO ITA (INDIGENA)",
                "transaccion" : {
                    "lugar" : "Donde se realiza la transaccion",
                    "departamento" : 11,
                    "departamentoDescripcion" : "ALTO PARANA",
                    "distrito" : 143,
                    "distritoDescripcion" : "DOMINGO MARTINEZ DE IRALA",
                    "ciudad" : 3344,
                    "ciudadDescripcion" : "PASO ITA (INDIGENA)"
                }
            },
            "notaCreditoDebito" : {
                "motivo" : 1
            },
            "remision" : {
                "motivo" : 1,
                "tipoResponsable" : 1, 
                "kms" : 150,
                "fechaFactura" : "2021-10-21"
            },
            "condicion" : {
                "tipo" : 1,
                "entregas" : [{ 
                    "tipo" : 1,
                    "monto" : "150000",
                    "moneda" : "PYG",
                    "cambio" : 0
                }, { 
                    "tipo" : 3,
                    "monto" : "150000",
                    "moneda" : "PYG",
                    "cambio" : 0,
                    "infoTarjeta" : {
                        "tipo" : 1,
                        "tipoDescripcion" : "Dinelco",
                        "numeroTarjeta": 3232,
                        "titular" : "Marcos Jara",
                        "ruc" : "6969549654-1",
                        "razonSocial" : "Bancard",
                        "medioPago" : 1,
                        "codigoAutorizacion" : 232524234
                    }
                }, { 
                    "tipo" : 2,
                    "monto" : "150000",
                    "moneda" : "PYG",
                    "cambio" : 0,
                    "infoCheque" : {
                        "numeroCheque": "32323232",
                        "banco" : "Sudameris"
                    }
                }],
                "credito" : {
                    "tipo" : 1,
                    "plazo" : "30 días",
                    "cuotas" : 2,
                    "montoEntrega" : 1500000.00,
                    "infoCuotas" : [{
                        "moneda" : "PYG",
                        "monto" : 800000.00,
                        "vencimiento" : "2021-10-30"
                    }, {
                        "moneda" : "PYG",
                        "monto" : 800000.00,
                        "vencimiento" : "2021-11-30"
                    }]
                }
            },
            "items" : this.billable.products.map(( product: any)=>{
                return {
                    "codigo" : "A-001",
                    "descripcion": product.name, 
                    "observacion": product.name, 
                    "partidaArancelaria" : 4444,
                    "ncm": "ABCD1234",
                    "unidadMedida": 77,
                    "cantidad": product.quantity,
                    "precioUnitario": product.unit_price,
                    "cambio": product.change,
                    "descuento": product.discount,
                    "anticipo": product.advancement,
                    "pais" : "PRY",
                    "paisDescripcion" : "Paraguay",
                    "tolerancia" : 1,
                    "toleranciaCantidad" : 1,
                    "toleranciaPorcentaje" : 1,
                    "cdcAnticipo" : "44digitos",
                    "dncp" : {
                        "codigoNivelGeneral" : "12345678",
                        "codigoNivelEspecifico" : "1234",
                        "codigoGtinProducto" : "12345678",
                        "codigoNivelPaquete" : "12345678"
                    },
                    "ivaTipo" : product.vat_type,
                    "ivaBase" : product.vat_base,
                    "iva" : product.vat,
                    "lote" : "A-001",
                    "vencimiento" : "2022-10-30",
                    "numeroSerie" : "",
                    "numeroPedido" : "",
                    "numeroSeguimiento" : "",
                    "importador" : {
                        "nombre" : "Importadora Parana S.A.",
                        "direccion" : "Importadora Parana S.A.",
                        "registroImportador" : "Importadora Parana S.A."
                    },
                    "registroSenave" : "323223",
                    "registroEntidadComercial" : "RI-32/22",
                    "sectorAutomotor" : {
                        "tipo" : 1,
                        "chasis" : "45252345235423532",
                        "color" : "Rojo",
                        "potencia" : 1500,
                        "capacidadMotor" : 5,
                        "capacidadPasajeros" : 5,
                        "pesoBruto" : 10000,
                        "pesoNeto" : 8000,
                        "tipoCombustible" : 9,
                        "tipoCombustibleDescripcion" : "Vapor",
                        "numeroMotor" : "323234234234234234",
                        "capacidadTraccion" : 151.01,
                        "año" : 2009,
                        "tipoVehiculo" : "Camioneta",
                        "cilindradas" : "3500"
                    }
                }
            }),
            "sectorEnergiaElectrica" : {
                "numeroMedidor" : "132423424235425",
                "codigoActividad" : 125,
                "codigoCategoria" : "001",
                "lecturaAnterior" : 4,
                "lecturaActual" : 5
            },
            "sectorSeguros" : {
                "codigoAseguradora" : "",
                "codigoPoliza" : "AAAA",
                "numeroPoliza" : "BBBB",
                "vigencia" : 1,
                "vigenciaUnidad" : "año",
                "inicioVigencia" : "2021-10-01",
                "finVigencia" : "2022-10-01",
                "codigoInternoItem" : "A-001"
            },
            "sectorSupermercados" : {
                "nombreCajero" : "Juan Antonio Caceres",
                "efectivo" : 150000,
                "vuelto" : 30000,
                "donacion" : 1000,
                "donacionDescripcion" : "Donado para la caridad"
            },
            "sectorAdicional" : {
                "ciclo" : "Mensualidad",
                "inicioCiclo" : "2021-09-01",
                "finCiclo" : "2021-10-01",
                "vencimientoPago" : "2021-11-01",
                "numeroContrato" : "AF-2541",
                "saldoAnterior" : 1550000
            },
            "detalleTransporte" : {
                "tipo" : 1,
                "modalidad" : 1,
                "tipoResponsable" : 1,
                "condicionNegociacion" : "CFR",
                "numeroManifiesto" : "AF-2541",
                "numeroDespachoImportacion" : "153223232332",
                "inicioEstimadoTranslado" : "2021-11-01",
                "finEstimadoTranslado" : "2021-11-01",
                "paisDestino" : "PRY", 
                "paisDestinoNombre" : "Paraguay",
                "salida" : {
                    "direccion" : "Paraguay",
                    "numeroCasa" : "Paraguay",
                    "complementoDireccion1" : "Entre calle 2", 
                    "complementoDireccion2" : "y Calle 7",
                    "departamento" : 11,
                    "departamentoDescripcion" : "ALTO PARANA",
                    "distrito" : 143,
                    "distritoDescripcion" : "DOMINGO MARTINEZ DE IRALA",
                    "ciudad" : 3344,
                    "ciudadDescripcion" : "PASO ITA (INDIGENA)",
                    "pais" : "PRY",
                    "paisDescripcion" : "Paraguay",
                    "telefonoContacto" : "097x"
                },
                "entrega" : {
                    "direccion" : "Paraguay",
                    "numeroCasa" : "Paraguay",
                    "complementoDireccion1" : "Entre calle 2", 
                    "complementoDireccion2" : "y Calle 7",
                    "departamento" : 11,
                    "departamentoDescripcion" : "ALTO PARANA",
                    "distrito" : 143,
                    "distritoDescripcion" : "DOMINGO MARTINEZ DE IRALA",
                    "ciudad" : 3344,
                    "ciudadDescripcion" : "PASO ITA (INDIGENA)",
                    "pais" : "PRY",
                    "paisDescripcion" : "Paraguay",
                    "telefonoContacto" : "097x"
                },
                "vehiculo" : {
                    "tipo" : 1,
                    "marca" : "Nissan",
                    "documentoTipo" : 1, 
                    "documentoNumero" : "232323-1",
                    "obs" : "",
                    "numeroMatricula" : "ADS895",
                    "numeroVuelo" : 143
                },
                "transportista" : {
                    "contribuyente" : true,
                    "nombre" : "Paraguay",
                    "ruc" : "80068684-1", 
                    "documentoTipo" : 1,
                    "documentoNumero" : "99714584",
                    "direccion" : "y Calle 7",
                    "obs" : 11,
                    "pais" : "PRY",
                    "paisDescripcion" : "Paraguay",
                    "chofer" : {
                        "documentoNumero" : "",
                        "nombre" : "Jose Benitez",
                        "direccion" : "Jose Benitez"
                    },
                    "agente" : {
                        "nombre" : "Jose Benitez",
                        "ruc" : "515415-1",
                        "direccion" : "Jose Benitez"
                    }
                }
            },
            "complementarios" : {
                "ordenCompra" : "",
                "ordenVenta" : "",
                "numeroAsiento" : "",
                "carga" : {
                    "ordenCompra" : "",
                    "ordenVenta" : "",
                    "numeroAsiento" : ""
                }
            },
            "documentoAsociado" : {
                "formato" : 1,
                "cdc" : "01800695631001001000000612021112917595714694",
                "tipo" : 1,
                "timbrado" : "32323",
                "establecimiento" : "001",
                "punto" : "001",
                "numero" : "00278211",
                "fecha" : "2020-09-14",
                "numeroRetencion" : "32323232",
                "resolucionCreditoFiscal" : "32323",
                "constanciaTipo" : 1,
                "constanciaNumero" : 32323,
                "constanciaControl" : "33232323"
        
            }
        }
    }

    toXml()
    {
        return xmlgen.generateXMLDE(this.formatTaxPayer(), this.formatBillable());
    }


}

export default ElectronicDocument