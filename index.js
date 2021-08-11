// 'use strict'  //uso de javascript estricto para evitar fllas en la sintaxis

////////////////////////
//// importar librerias

//const functions = require("firebase-functions");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


/////////////////49
//Variables globales 
global.listaPersonajes = require("./personajes.json");
global.imagenes = "https://cbbh.herokuapp.com/curso/imagenes/"  ///// esta url es de firebase

///////////////////////////41
// Guia de uso de Express https://expressjs.com/es/guide/routing.html
const server =express();
server.use(bodyParser.urlencoded({   //body parser nos permite analizar la url cuando el contenhod sea json   (desimos que utilice bodyparser)
  extended:true                     // true/false   extended nos permite leer objetos json
}));
server.use(bodyParser.json());// utilice body parser para la lectura d earchivpos json

//para cargar imagenes que etan enuna crapeta
server.use("/imagenes",express.static(path.join(__dirname,'/imagenes')));   // cuando s enecuntre /iamgens  que lea de form statica la url 

///si alguen accede dedsde un navegaror 
server.get('/',(req,res)=>{         // server.get= detecta cuando intenta ingresar por un navegador // '/',(req,res= regresamos repsueta
  return res.json("hola soy un bot pero por aqui no puedes hablar conmigo")   // regresa uh mensaje 
});

// server.post("/curso", (req, res) => {
//   let resultado='recibida peticion post correcta';
//   res.json(resultado)
// });

/////////////////43
const DBVDialogLib=require('./DBVDialogLib');

// ////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

/////////////////42
server.post("/curso", (req, res) => {
  let contexto = "nada";
  let resultado ;
  let respuestaEnviada = false;
  let textoEnviar = 'recibida petición post incorrecta';
  ////////46
  let opciones = ["Chiste", "Consejo", "Noticias", "Mi Equipo", "Personaje"];
  //let opciones = DBVDialogLib.reducirAOcho(["Chiste", "Consejo", "Noticias", "Mi Equipo", "Personaje"]);
  try {
    contexto = req.body.queryResult.action;
    textoEnviar = `recibida petición de accion  ${contexto}`;
  } catch (error) {
    console.log("Error contexto vacio:" + error);
  }
  res.json(resultado);
if (req.body.queryResult.parameters) {
    console.log("parámetros:" + req.body.queryResult.parameters);
  } else {
     console.log("Sin parámetros");
///////////////////45
  }
  if (contexto === "input.welcome") {
    /*********** input.welcome  ***********/
    textoEnviar = "Hola, soy el primer webhook";
    resultado = DBVDialogLib.respuestaBasica(textoEnviar);
  
  //////46
  // DBVDialogLib.addSugerencias(resultado,opciones);
  // res.json(resultado);
// });

////////////////49
  } else if (contexto === "personaje") {
    /*********** personaje  ***********/
    let personaje;
    try {
      personaje = req.body.queryResult.parameters.personaje;
    } catch (error) {
      console.log("error personaje no leido:" + error);
    }
    if (personaje) {
      let arListaPersonajes = Object.keys(global.listaPersonajes).slice();
      // Vamos a personalizar las opciones para que aparezcan como sugerencias otros personajes y el menú
      opciones = arListaPersonajes.slice();
      opciones.unshift("Menú");
      // si ha llegado parametro personaje y está en la lista
      if (global.listaPersonajes[personaje]) {
        textoEnviar = global.listaPersonajes[personaje];
        let imagen = encodeURI(global.imagenes + personaje + ".jpg");
        let url = "https://www.google.com/search?q=" + personaje;
        resultado = DBVDialogLib.respuestaBasica(`Me encanta ${personaje}`);
        DBVDialogLib.addCard(resultado, personaje, textoEnviar, imagen, url);
      } else {
        // Si el presonaje recibido no está en la base de datos listaPersonajes
        resultado = DBVDialogLib.respuestaBasica(`Lo siento, todavía no he aprendido nada de ${personaje}. Seguiré estudiando.`);
      }
    } else {
      // Personaje vacio
      resultado = DBVDialogLib.respuestaBasica("No conozco a ese personaje");
    }
///////////50
  } else if (contexto === "lista_personajes") {
    /********** lista_personajes  **********/
    let arListaPersonajes = Object.keys(global.listaPersonajes).slice();
    // Vamos a personalizar las opciones para que aparezcan como sugerencias otros personajes y el menú
    opciones = arListaPersonajes.slice();
    opciones.unshift("Menú");
    resultado = DBVDialogLib.respuestaBasica("Te muestro algunos personajes que conozco...");
///////////52
  } else if (contexto === "menu") {
    /************** menu  ************/
    resultado = DBVDialogLib.respuestaBasica("Te muestro algunas cosas que se hacer:");
/////////55
  } else if (contexto === "recomendar_ordenador") {
    let tipopc;
    let memoria;
    let discoduro;
    let marcapc;
    try {
      tipopc = req.body.queryResult.parameters.tipopc;
      memoria = req.body.queryResult.parameters.memoria;
      marcapc = req.body.queryResult.parameters.marcapc;
      discoduro = req.body.queryResult.parameters.discoduro;
    } catch (error) {
      console.log("cargando variables:" + error);
    }
    if (!tipopc) {
      textoEnviar = 'Que tipo de dispositivo te gustaría elegir:';
      opciones = ["sobremesa", "portatiles"];
      resultado = DBVDialogLib.respuestaBasica(textoEnviar);
    } else if (!memoria) {
      textoEnviar = 'Es necesario elegir el tamaño de la memoria:';
      opciones = ["4 Gb", "8 Gb", "16 Gb", "32 Gb"];
      resultado = DBVDialogLib.respuestaBasica(textoEnviar);
    } else if (!discoduro) {
      textoEnviar = 'Ahora veremos el almacenamiento en disco:';
      opciones = ["1 Tb", "2 Tb", "4 Tb"];
      resultado = DBVDialogLib.respuestaBasica(textoEnviar);
    } else if (!marcapc) {
      textoEnviar = "Vamos a ver que marca te gustaría consultar:";
      opciones = ["hp", "lenovo", "msi", "acer", "dell"];
      resultado = DBVDialogLib.respuestaBasica(textoEnviar);
    } else {
      // Se tienen los 4 parametros y se puede realizar la búsqueda del PC
      resultado = DBVDialogLib.respuestaBasica("Te ayudaré a encontrar un ordenador con esas características");
      let url = 'https://www.pccomponentes.com' + ((tipopc) ? "/" + tipopc : "") + ((discoduro) ? "/" + discoduro : "") + ((memoria) ? "/" + memoria : "") + ((marcapc) ? "/" + marcapc : "");
      DBVDialogLib.addEnlace(resultado, `Ver recomendación`, url);
      opciones = ["Menú"];
    }
    ///////////////////////////////////61  APIs
  } else if (contexto === "aparcamientos_contar") {
    respuestaEnviada = true;
    const reqUrl = 'http://datosabiertos.malaga.eu/api/3/action/datastore_search_sql?sql=SELECT count (*) from "0dcf7abd-26b4-42c8-af19-4992f1ee60c6"';
    DBVDialogLib.leerURLpromise(reqUrl).then((respuesta) => {
      let resultado;
      textoEnviar = respuesta.result.records[0].count + " aparcamientos";
      console.log(("En Málaga hay " + textoEnviar));
      resultado = DBVDialogLib.respuestaBasica(textoEnviar);
      DBVDialogLib.addSugerencias(resultado, opciones);
      res.json(resultado);
      return true;

    }).catch((error) => {
      console.log("error capturado en promise:" + error);
      res.json(DBVDialogLib.respuestaBasica("Lo siento. No puedo contactar con servidor externo"));

    });
    ////////////////////////////62
  } else if (contexto === "aparcamientos_ocupacion") {
    const aparcBuscado = req.body.queryResult.parameters.nombre; ///el nombre se leee con req.body........parameter
    console.log("aparcBuscado=" + aparcBuscado);

    const reqUrl = encodeURI(`http://datosabiertos.malaga.eu/api/3/action/datastore_search_sql?sql=SELECT * from "0dcf7abd-26b4-42c8-af19-4992f1ee60c6" WHERE upper(nombre) LIKE upper('%${aparcBuscado}%')`);
    console.log(reqUrl);
    
    respuestaEnviada = true;
    DBVDialogLib.leerURLpromise(reqUrl).then((respuesta) => {
      let resultado;
      textoEnviar;
      console.log("leerURLpromise:" + JSON.stringify(respuesta));
      const aparcamiento = respuesta.result.records[0];
      console.log("leerURLpromise-aparcamiento:" + aparcamiento);
      if (aparcamiento.libres > 0) {
        textoEnviar += `${aparcamiento.nombre} situado en ${aparcamiento.direccion} dispone de ${aparcamiento.capacidad} plazas y ahora tiene ${aparcamiento.libres} libres. Corre y no pierdas tu sitio`;
      } else {
        textoEnviar += 'aparcamiento lleno'
      }
      console.log("Resultado aparcamientos: " + textoEnviar);
      //lo enviamos a dialogflow
      resultado=DBVDialogLib.respuestaBasica(textoEnviar);
      DBVDialogLib.addSugerencias(resultado,opciones);
      res.json(resultado);
      return true;
  }).catch((error)=> {
    console.log("error capturado en promise:"+error);
    res.json(DBVDialogLib.respuestaBasica("Lo siento. No encuentro ese aparcamiento"));
    
  });

  } else {
  // Se recibe un action desconocido (contexto)
  resultado = DBVDialogLib.respuestaBasica(`Todavía no he aprendido a gestionar:${contexto}`);

}
if (!respuestaEnviada) {
  DBVDialogLib.addSugerencias(resultado, opciones);
  res.json(resultado);
}
});   

//////////////////////////////////////////   codigo para fire base 
/////////////////////////////////////////
// const local = false;    // para ejecuatr el servidor local= true     ///para firebase=false 
// if (local) {
//   server.listen((process.env.PORT || 8000), () => {
//     console.log("Servidor funcionando...");         // si se ve en la terminal funciona 
//   })
// } else {
//   exports.curso = functions.https.onRequest(server);
// }
////////////////////////////////////////////////////
////////////////////////////////////////////////

server.listen((process.env.PORT || 3000), () => {
  console.log("Servidor funcionando...");         // si se ve en la terminal funciona 
})

























;
