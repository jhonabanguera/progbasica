var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);

var n = 3.8;
var w = 2.1;

Math.floor(n);
Math.floor(w);

Math.ceil(n);
Math.ceil(w);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

//Intento dibujo por Mouse

var estado = 0; // estado del click
var colorLinea = "blue"; // color a la linea
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;


document.addEventListener("mousedown", presionarMouse); //Presionar clic
document.addEventListener("mouseup", soltarMouse); // Sueltas clic
document.addEventListener("mousemove", dibujarMouse); // Mueves mouse

function dibujarMouse(evento) {
 if (estado == 1) {
     dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
 }
 x = evento.layerX;
 y = evento.layerY;
}

function soltarMouse(evento) {
 estado = 0; // click suelto
 x = evento.layerX;
 y = evento.layerY;

}

function presionarMouse(evento) {
    estado = 1; //click presionado
    x = evento.layerX;
    y = evento.layerY;
}
// Final intento

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {

    var colorcito = "green";
    var movimiento = 1;
    switch(evento.keyCode) {

        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
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
