//Clase constructora del obejto billete
class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

//Agarra todos los elementos que tengo en la caja, y situarlos en bi
//en cada uno de los ciclos
function entregarDinero() {

    //Trae el valor puesto en la caja de texto del html
    var t = document.getElementById("dinero");
    //Lo convierte a numero y lo asigna a la variable dinero
    dinero = parseInt(t.value);

    for(var bi of caja) {

        if(dinero > 0) {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }

            //entregado es un array que le empujo nuevas instancias del objeto
            //billete que tienen el valor del billete y los papeles que entregare
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if(dinero > 0) {

        //InnerHTML es un atributo o propiedad, es una variable
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
    } else {

        //of significa que obtendre una instancia de cada uno de los objetos
        //dentro de la e
        for(var e of entregado) {
             
            if(e.cantidad > 0) {

                resultado.innerHTML +=  + e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
    
}

//Billetes que tengo en la caja
var caja = [];
//Billetes que entrego al usuario
var entregado = [];
//Empujar al arreglo caja tres objetos billete con los valores y cantidades
//seleccionados
caja.push(new Billete(125, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

var dinero = 0;
var div = 0;
var papeles = 0;

//Obtengo la etiqueta p en html
var resultado = document.getElementById("resultado");
//Boton en html
var b = document.getElementById("extraer");
//Al dar clic al boton extraer se dispara la funcion extraer dinero
b.addEventListener("click", entregarDinero);