//Se crea una variable donde este la libreria express
//require es una opcion que existe en el javascript que corre en el backend
//usando nodejs, require es una funcion que busca los frameworks o librerias instaladas
//en el computador o en el projecto y las trae para guardarlas en una variable
var express = require("express");

//Significa que crearemos una aplicacion y crearemos una instancia de la libreria express
var aplicacion = express();

//Es como addeventlistener solo que colocamos la url que se va a abrir
aplicacion.get("/", inicio)
aplicacion.get("/cursos", cursos)

//req y res son request y response, request es como peticion, lo que el navegador
//le esta pidiendo al servidor y luego response es el resultado, lo que el servidor
//le quiere mandar al navegador
function inicio(peticion, resultado) {
    resultado.send("Este es el <strong>home</strong> genial");
}

function cursos(peticion, resultado) {
    resultado.send("Estos son los <strong>cursos</strong>");
}

//Ponemos a correr el servidor con un metodo llamado listen
aplicacion.listen(8989);