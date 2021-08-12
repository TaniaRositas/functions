'user strict'

//////////////////43
const DBVDialogLib = require('./DBVDialogLib');
// DBVDialogLib.hola('David');
// DBVDialogLib.hola('nhhbkgh');


// //////////////44
// // vamos a imprimir con el codigo de hola que dialogflow
let respuesta = DBVDialogLib.respuestaBasica("bienvenido a Dialogflow");
console.log(respuesta);
console.log(JSON.stringify(respuesta));      //para que nos imprima en forma de cadena 


// // //////////////46
////añadiendo sugerencias
let opciones=["opcion1","opcion2","opcion3"];
DBVDialogLib.addSugerencias(respuesta,opciones);
DBVDialogLib.addCard(respuesta,"Antonio Banderas", "es un actor","antoniobanderas.jpg","https://www.google.com/search?q=Antonio Banderas")
console.log(respuesta);
console.log(JSON.stringify(respuesta));
/////////48
DBVDialogLib.addCard(respuesta,"Antonio Banderas", "es un actor","antoniobanderas.jpg","https://www.google.com/search?q=Antonio Banderas")
let personaje;
try {
    personaje = req.body.queryResult.parameters.personaje;
} catch (error) {
    console.log("error personaje no leido:" + error);
}
console.log("personaje=" + personaje);

if (typeof (personaje) !== 'undefined') {
    console.log("existe");
} else {
    console.log("no existe");

}
global.listaPersonajes = require("./personajes.json");
// si no existe un elemento de un array es undefined
console.log(global.listaPersonajes["Antonio Banderas"]);
if (global.listaPersonajes["Antonio Banderas"]) {
    console.log("Personaje Existe");
} else {
    console.log("Personaje no existe");

}

///////////53
opciones=["opcion1","opcion2","opcion3","opcion4","opcion5","opcion6","opcion7","opcion8","opcion9","opcion10","opcion11","opcion12"];
function reducirAOcho(opciones) {
    let res = []; // array resultado con 8 opciones ordenadas de forma aleatoria
    let i = 0; // contador bucle
    let pos; // posición seleccionada
    while (i < 8 && opciones.length > 0) {
        pos = Math.floor(Math.random() * opciones.length);
        res.push(opciones[pos]);
        opciones.splice(pos, 1);
        i++;
    }
    return res;
}
console.log(reducirAOcho(opciones));

// ////////////55 slotfilling
// let tipopc = "sobremesa";
// let memoria;
// let discoduro = "1 Tb";
// let marcapc = "HP";
// console.log((tipopc) ? "hola" : "adios");
// console.log(((tipopc) ? "/" + tipopc : "") + ((discoduro) ? "/" + discoduro : "") + ((memoria) ? "/" + memoria : "") + ((marcapc) ? "/" + marcapc : ""));
// let url = 'https://www.pccomponentes.com' + ((tipopc) ? "/" + tipopc : "") + ((discoduro) ? "/" + discoduro : "") + ((memoria) ? "/" + memoria : "") + ((marcapc) ? "/" + marcapc : "");
// console.log(url);



// // ////////////////////////60
// const http = require('http');

// // guardamos la url como una constante
// const reqUrl = encodeURI('http://datosabiertos.malaga.eu/api/3/action/datastore_search_sql?sql=SELECT count(*) from "0dcf7abd-26b4-42c8-af19-4992f1ee60c6"')
// //definir qu eaccion se va a ejecutar 
// function accionPromise(respuesta){
//     let textoEnviar;
//     console.log("respuesta recibida "+JSON.stringify(respuesta));
//     if (respuesta){
//         textoEnviar=respuesta.respuestaCompleta,records[0].count + "aparcamientos ";
//         console.log("en malaga hay "+ textoEnviar);
        
//     }   
// }
// /**
//  * Esta funcion recibe una direccion y cre una promesza que si es correcta devuelve la respuesat como parametro y si no genera un error
//  * 
//  * @param {*} reqUrl  url de la que se va a leer la informacion 
//  */
// function leerUrlpromise(reqUrl) {
//     return new Promise((resolve,reject) => {
//         let textoEnviar = "";
//         http.get(reqUrl, (respuestaDeAPI) => {
//             let respuestaCompleta = "";
//             let respuestaJSON = "";

//             respuestaDeAPI.on('data', (chunk) => {
//                 respuestaCompleta+=chunk;
//             });
//             respuestaDeAPI.on('end',()=>{
//                 try {
//                     respuestaJSON = JSON.parse(respuestaCompleta);
//                     resolve = (respuestaJSON);
//                 } catch (error) {
//                     // en este caso defdevolvera una cadena vacia
//                     console.log("Erroe al  cragar el segvidor ecterno " + error);
//                     reject(new Error("error al cargar datos externos "));

//                 }
//             })
//         }) .on('error', (error) =>{
//             //se ejecutara cuando una peticion no es valida 
//             console.log("Error al cargar los datos del servicio externo ", error);
//             reject(newError("error al cargar los datos externo"));
//         })
//         console.log("leer URL promise texto a enviar " + JSON.stringify(textoEnviar));
//     })
// }
// leerUrlpromise(reqUrl).then(accionPromise).catch((error)=>{
//     console.log("error capturado en promise "+error);
    
// })

// /////////////////61
// DBVDialogLib.leerUrlpromise(require).then(accionPromise).catch((error)=>{
//     console.log("error capturado");
    
// })
