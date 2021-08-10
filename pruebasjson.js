'user strict'
//creación de JSON o objetos
let valor = { "nombre": "David", "apellido": "perez" };   // para crear un objeto tipo persona 
console.log("valor" + valor);                        //para visualizarlo (todo lo que esta dentro de {})
console.log("valor str=" + JSON.stringify(valor));   // para visualizarlo en forma de cadena (todo lo que esta dentro de {})
console.log("valor=" + valor.nombre + " " + valor.apellido); //para visualizar cada uno de sus parametro ( David perez)

//otra forma de crear objetos (como cadnas "stri")
let valor2 = '{"nombre":"David", "apellido":"perez"}';   // utlizamos las comillas invertidas 
let valor2json = JSON.parse(valor2);              // utilizamos JSON.parse para convertir a objeto creando una nueva variable 
console.log("valor2=" + valor2json);              // para visualizarlo 
console.log("valor=" + valor2json.nombre + " " + valor2json.apellido);    //para visualizar cada uno de sus parametro ( David perez)

//utilizando array []
let nombres = [{ "nombre": "David", "apellido": "perez" }, { "nombre": "antonio lopez", "apellido": "lopez" }];  // con array 
console.log(nombres);                                  // visualizacion del array
for (let i = 0; i < nombres.length; 1++) {                     //length nos dice el tamaño(2) del array    // va de 0 a 1  
    console.log(nombres[i].nombre + " " + nombres[i].apellido);  // de nombres(variable) toma la posicion 0 y anexa nombre " " de nombres(variables)toma la posicon 0 y anexa apellido .Asi hasta terminar el array
}


///////////////////////////////////////////////////////////////////////////////////////////

// let req = {
//     {
//     "responseId"; "c4b863dd-aafe-41ad-a115-91736b665cb9",
//         "queryResult"; {
//         "queryText"; "GOOGLE_ASSISTANT_WELCOME",
//             "action"; "input.welcome",
//                 "parameters"; { },
//         "allRequiredParamsPresent"; true,
//             "fulfillmentText"; "",
//                 "fulfillmentMessages";[],
//                     "outputContexts";[
//                         {
//                             "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/google_assistant_welcome"
//                         },
//                         {
//                             "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/actions_capability_screen_output"
//                         },
//                         {
//                             "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/google_assistant_input_type_voice"
//                         },
//                         {
//                             "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/actions_capability_audio_output"
//                         },
//                         {
//                             "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/actions_capability_web_browser"
//                         },
//                         {
//                             "name": "projects/${PROJECTID}/agent/sessions/${SESSIONID}/contexts/actions_capability_media_response_audio"
//                         }
//                     ],
//                         "intent": {
//             "name": "projects/${PROJECTID}/agent/intents/8b006880-0af7-4ec9-a4c3-1cc503ea8260",
//                 "displayName": "Default Welcome Intent"
//         },
//         "intentDetectionConfidence": 1,
//             "diagnosticInfo": { },
//         "languageCode": "en-us"
//     },
//     "originalDetectIntentRequest": {
//         "source": "google",
//             "version": "2",
//                 "payload": {
//             "isInSandbox": true,
//                 "surface": {
//                 "capabilities": [
//                     {
//                         "name": "actions.capability.SCREEN_OUTPUT"
//                     },
//                     {
//                         "name": "actions.capability.AUDIO_OUTPUT"
//                     },
//                     {
//                         "name": "actions.capability.WEB_BROWSER"
//                     },
//                     {
//                         "name": "actions.capability.MEDIA_RESPONSE_AUDIO"
//                     }
//                 ]
//             },
//             "inputs": [
//                 {
//                     "rawInputs": [
//                         {
//                             "query": "Talk to my test app",
//                             "inputType": "VOICE"
//                         }
//                     ],
//                     "intent": "actions.intent.MAIN"
//                 }
//             ],
//                 "user": {
//                 "lastSeen": "2018-03-16T22:08:48Z",
//                     "permissions": [
//                         "UPDATE"
//                     ],
//                         "locale": "en-US",
//                             "userId": "ABwppHEvwoXs18xBNzumk18p5h02bhRDp_riW0kTZKYdxB6-LfP3BJRjgPjHf1xqy1lxqS2uL8Z36gT6JLXSrSCZ"
//             },
//             "conversation": {
//                 "conversationId": "${SESSIONID}",
//                     "type": "NEW"
//             },
//             "availableSurfaces": [
//                 {
//                     "capabilities": [
//                         {
//                             "name": "actions.capability.SCREEN_OUTPUT"
//                         },
//                         {
//                             "name": "actions.capability.AUDIO_OUTPUT"
//                         }
//                     ]
//                 }
//             ]
//         }
//     },
//     "session": "projects/${PROJECTID}/agent/sessions/${SESSIONID}"
// }

// console.log(req.query.action);
// console.log(req.queryResult.parameters);
// console.log(req.responseId);


// una respuesta que hay que generar

// let respuesta = {   // creamos la variable de respuesta 
//     "responseId": "7ca4df9a-edb8-449c-b8c0-a5ddc44c3377-07153d3d",
//     "queryResult": {
//         "queryText": "hola",   // lo que introduce el usuario
//         "action": "saludo",
//         "parameters": {},
//         "allRequiredParamsPresent": true,
//         "fulfillmentText": "Que tal!",   //la respuesta por el chatbot
//         "fulfillmentMessages": [
//             {
//                 "text": {
//                     "text": [
//                         "Que tal!"
//                     ]
//                 }
//             }
//         ],
//         "intent": {
//             "name": "projects/curso1-gacb/agent/intents/72286cb8-29bc-490a-b883-252f21546e33",
//             "displayName": "Saludo"  // el intents
//         },

//     }

//     console.log(respuesta);
//     respuesta.queryResult.fulfillmentText = "Buenos dias"   // se cambia esta respuesta por la de "Quetal! que proporciona el chatbot"
//     console.log(despuess del cambio);                     // agrega este texto para nostar el cambio
//     console.log(respuesta);                              //para imprimirlo 



//     // para agregar mas elementos 
//     console.log(respuestas);
//     respuesta.queryResult.fulfillmentMessages.push(       // sirve para introducir elementos   "push=agregar al final "
//         {
//             "platform": "ACTIONS_ON_GOOGLE",
//             "suggestions": {
//                 "suggestions": [
//                     {
//                         "title": "Chiste"
//                     },
//                     {
//                         "title": "Consejo"
//                     },
//                     {
//                         "title": "Noticias"
//                     },
//                     {
//                         "title": "Mi equipo"
//                     }
//                 ]
//             }
//         }
//     )

//     console.log("respuestas despues de suggestion");   // texto para indetificar el menu
//     console.log(respuesta);          // inprimir el codigo ya con el menu        no lo va imprimir por que es un menu, hay que hacerlo en forma de text
//     console.log(JSON.stringify(respueta));    // lo imprime en forma de texto 



//     //////////////////////////////////////////////////

//     // TIPOS DE ARVHIVOS JSON A TRATAR

//     // Personajes 
//     let personajes={
//         "Antonio Bandera​": " es un actor, cantante, actor de voz, productor, director y empresario español.",
//         "Pablo Ruiz Picasso": " fue un pintor y escultor español, creador, junto con Georges Braque, del cubismo.",
//         "Harry Styles": " es un cantante, compositor y actor británico. Inició su carrera como cantante en 2010 como integrante de la boy band One Direction, con la que participó en el programa The X Factor y quedó en tercer lugar",
//         "Chavo del 8": "Una de las series de situaciones cómicas más vistas en los países hispanohablantes, la cual ha sido muy popular entre grandes y chicos."
//     }

//     console.log(personajes["Antonio Banderas"]);    // para imprimir cada personaje
//     console.log(personajes["Pablo Ruiz Picasso"]);
//     console.log(personajes["Harry Styles"]);
//     console.log(personajes["Chavo del 8"]);

//     let arIndicePersonajes=Object.keys(personajes), slice();    // las claves de un objeto
//                                                                // slice=forma correcta de copíar un array
//     console.log(arIndicePersonajes);                           // para ver el array completo

//     for(let i = 0; i<arIndicePersonajes.length; i++) {
//         console.log(arIndicePersonajes[i] + " " + personajes[arIndicePersonajes[i]]);    
//         }


// ///////////////////////////////////////////////////////////////////////

// //SMAIL TALK

// let respuestasST = {
//     "input.welcome": [
//         "jncldfkjnolfkdnmlgmklvk",
//         "bbbbbbbbbbbbbbbbbbbbbb",
//         "cccccccccccccccccccccccc"
//     ],
//     "input.unknows": [
//         "dddddddddddddddd",
//         "eeeeeeeeeeeeeeee",
//         "fffffffffffffff"
//     ],
//     "ContarChistes": [
//         "gggggggggggggg",
//         "hhhhhhhhhhhhhh",
//         "iiiiiiiiiiiiiii"
//     ],
//     "Consejo": [
//         "jjjjjjjjjjjj",
//         "kkkkkkk",
//         "llllllllllll"
//     ]

// };

// let contexto = "ContarChistes";    // variable
// console.log(respuesta[contexto]);  // del st nos imprime los chistes que contenga
// console.log("Respuesta 1" + respuesta[contexto[1]]);   // imprime el 2 chiste 



//     /// FUNCIONES ALEATORIAS 

//     function frasesAleatorias(listaFrases) {
//         return listaFrases[Math.floor(Math.random()*listaFrases.length)];  //* devuelve de la la lista frases una posicion de manera aletorio Math.floor=genera entreros    Math.random()*listaFrases.length)= numeros random del tamaño de la lista 
//     }
//     console.log("frases aleatorias:"+frasesAleatorias(respsuestas[contexto]));
    





















