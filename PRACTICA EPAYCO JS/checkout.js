
function pagarEpayco(){

    var nombre = document.getElementById("nombre").value
    var direccion= document.getElementById("direccion").value;
    var tipoDocumento= document.getElementById("cc").value;
    var telefono= document.getElementById("telefono").value;
    var documento= document.getElementById("documento").value;

    console.log("nombre:", nombre);
    console.log("direccion:", direccion);
    console.log("tipoDocumento", tipoDocumento);
    console.log("telefono", telefono);
    console.log("documento", documento);

    var handler = ePayco.checkout.configure({
        key: '0c24073fad4dc54344376123a9f9d078',
        test: false
    });

    var data={
        //Parametros compra (obligatorio)
        name: "paleta de sombras too faced",
        description: "paleta de sombras too faced",
        invoice: "1234",
        currency: "cop",
        amount: "145000",
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "en",

        //Onpage="false" - Standard="true"
        external: "false",


        //Atributos opcionales
        extra1: "extra1",
        extra2: "extra2",
        extra3: "extra3",
        confirmation: "http://secure2.payco.co/prueba_curl.php",
        response: "http://secure2.payco.co/prueba_curl.php",

        //Atributos cliente
        name_billing: nombre,
        address_billing: direccion,
        type_doc_billing: tipoDocumento,
        mobilephone_billing: telefono,
        number_doc_billing: documento,

    //atributo deshabilitación metodo de pago
        methodsDisable: ["CASH","DP"]

    }

    handler.open(data)
}

