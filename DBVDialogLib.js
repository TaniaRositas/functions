
//////////////////// 43 libreria de prueba
// function hola(nombre) {
//     console.log("Encantado de conocerte " + nombre);
// }
// module.exports={
//     hola:hola
// }


// /////////////////44
/**
 * crea una respuesta basica a partir de un texto
 * @param {*} textoEnviar 
 * @return la cadena JSON de respuesta
 */
function respuestaBasica(textoEnviar) {    // vamos a generar para la contestaciones en dialogflow
    let respuesta = {
        "fulfillmentText": textoEnviar,        // el codigo se extrjo de itens en dialogflow hola // eliminamos los saludos y agregamos la variable textoEnviar
        "fulfillmentMessages": [
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "simpleResponses": {
                    "simpleResponses": [
                        {
                            "textToSpeech": textoEnviar    // la cambiamos por la variable 
                        }
                    ]
                }
            },
            {
                "text": {
                    "text": [
                        textoEnviar                        // la cambiamos po la variable 
                    ]
                }
            }
        ]

    }
    return respuesta;
}

//////////////////46
// ///// añadir sugerencias 
/**
 *               // para documentar los metodos
 * @param {*} res Añade a uno respuesta basica la lista de sugerencias 
 * @param {*} opciones Es lalkista de sugerencias  a  aladir  a respuesta con el formato
 *                     ["opcion1","opcion2",...,"opcionn"]
 */
function addSugerencias(res,opciones){    // res=respuesta de las sugerencias      opciones=lista de opciones con un array 
    res.fulfillmentMessages.push({
        "platform": "ACTIONS_ON_GOOGLE",
        "suggestions": {
          "suggestions": listaOpcionesGoogle(opciones)
            
        }
        });
}
/////////////////////////48
/**
 * 
 * @param {*} res Añade a una respuesta básica un card
 * @param {*} titulo Titulo del card
 * @param {*} texto Texto principal
 * @param {*} imagen Imagen asociada
 * @param {*} url URL a la que se redirecciona
 */
 function addCard(res, titulo, texto, imagen, url) {
    res.fulfillmentMessages.push(
        {
            "platform": "ACTIONS_ON_GOOGLE",
            "basicCard": {
                "title": titulo,
                "subtitle": titulo,
                "formattedText": texto,
                "image": {
                    "imageUri": imagen,
                    "accessibilityText": titulo
                },
                "buttons": [
                    {
                        "title": `Más informacion de : ${titulo}`,
                        "openUriAction": {
                            "uri": url
                        }
                    }
                ]
            }
        });
}









/**
 * 
 * @param {*} opciones recibe la lista de opciones
 * @returns Devuelve la lista en formato suggestions de google
 *         [{"title":"valor"},...]
 */
 function listaOpcionesGoogle(opciones) {
    let res = [];
    for (let i = 0; i < opciones.length; i++) {
        res.push({ "title": opciones[i] })
    }
    return res;
}




//////////53
/**
 * Recibe una lista de opciones y devuelve una lista de 8 elementos o menos seleccioandos 
 * de forma aleatoria
 * @param {*} opciones lista de opciones con formato: ["opcion1", "opcion2", "opcion3"]
 */
 function reducirAOcho(opciones) {
    let res = []; // array resultado con 8 opciones ordenadas de forma aleatoria
    let i=0; // contador bucle
    let pos; // posición seleccionada
    while (i<8 && opciones.length>0) {
        pos=Math.floor(Math.random()*opciones.length); 
        res.push(opciones[pos]);
        opciones.splice(pos,1);
        i++;
    }
    return res;
}

////////////////55
/**
 * esta funcion añade un enlace en la conversacion
 * @param {*} res respúesta a la que se añade el enlace
 * @param {*} texto texto a añadir en el aenlace
 * @param {*} url direccion a la que apuntara el enlace
 */
// añadir enlaces
function addEnlace(res,texto,url){
    res.fulfillmentMessages.push(
        {
            "platform": "ACTIONS_ON_GOOGLE",
            "linkOutSuggestion":{
                "destiationName": texto,
                "uri": url
            }
        }
    );
}


// /**
// {
//     "platform": "ACTIONS_ON_GOOGLE",
//     "linkOutSuggestion": {
//       "destinationName": "Ver ordenador portatiles con disco duro de 1-tb, 8-gb-ram y de la marca msi",
//       "uri": "https://www.pccomponentes.com/portatiles/1-tb/8-gb-ram/msi"
//     }
//   }
// */
// /**
//  * Esta función añade un enlace en la conversación
//  * @param {*} res respuesta a la que se añade el enlace
//  * @param {*} texto texto a añadir en el enlace
//  * @param {*} url dirección a la que apuntará el enlace.
//  */
//  function addEnlace(res,texto,url) {
//     res.fulfillmentMessages.push(
//     {
//         "platform": "ACTIONS_ON_GOOGLE",
//         "linkOutSuggestion": {
//           "destinationName": texto,
//           "uri": url
//         }
//       }    
//     );
// }


///////////////////////61 
const http = require('http');

/**
 * Esta funcion recibe una direccion y cre una promesza que si es correcta devuelve la respuesat como parametro y si no genera un error
 * 
 * @param {*} reqUrl  url de la que se va a leer la informacion 
 */
 function leerUrlpromise(reqUrl) {
    return new Promise((resolve,reject) => {
        let textoEnviar = "";
        http.get(reqUrl, (respuestaDeAPI) => {
            let respuestaCompleta = "";
            let respuestaJSON = "";

            respuestaDeAPI.on('data', (chunk) => {
                respuestaCompleta+=chunk;
            });
            respuestaDeAPI.on('end',()=>{
                try {
                    respuestaJSON = JSON.parse(respuestaCompleta);
                    resolve = (respuestaJSON);
                } catch (error) {
                    // en este caso defdevolvera una cadena vacia
                    console.log("Erroe al  cragar el segvidor ecterno " + error);
                    reject(new Error("error al cargar datos externos "));

                }
            })
        }) .on('error', (error) =>{
            //se ejecutara cuando una peticion no es valida 
            console.log("Error al cargar los datos del servicio externo ", error);
            reject(new Error("error al cargar los datos externo"));
        })
        console.log("leer URL promise texto a enviar " + JSON.stringify(textoEnviar));
    })
}















 






// ///////para gaurdadr la biblioteca //////

module.exports = {     //para exportarla comomlibreria 
    respuestaBasica: respuestaBasica,
    addSugerencias: addSugerencias,
    addCard:addCard,
    reducirAOcho:reducirAOcho,
    addEnlace:addEnlace,
    leerUrlpromise:leerUrlpromise

}





