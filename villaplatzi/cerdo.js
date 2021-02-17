//[ ] Mover un cerdo con las flechas del teclado

//Traer por Id Canvas
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

//Declarar objetos
var fondo = {
    url: "tile.png",
    cargaOK: false
}

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}


//definir objetos
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

//Funciones
function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if(fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(cerdo.cargaOK) {
            var x = 250;
            var y = 250;
            papel.drawImage(cerdo.imagen, x, y); 
        
    }
}

//Objetos teclas
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);

//Funcion teclas
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    
    lienzo.beginPath();
    lienzo.drawImage = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.closePath();
}

function dibujarTeclado(evento) {

    var colorcito = cerdo.imagen;
    var movimiento = 10;
    var x = 250;
    var y = 250;
    switch(evento.keyCode) {
 
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            console.log(evento.keyCode);
        break;

        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento; 
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento; 
        break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento; 
        break;

        default:
            console.log("Otra tecla");
        break;
    }
}




