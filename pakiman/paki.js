//Esto es un array asociativo, este es un obejto literal
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//Es lo mismo que poner:
//var imagenes = {
//    Cauchin: "vaca.png",
//    Pokacho: "pollo.png",
//    Tocinauro: "cerdo.png"
//}

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//Ciclo especial que recorre la cantidad de veces que un objeto existe
//in muestra la posición en el arreglo a menos que se especifique otra cosa
//of muestar directamente la instancia en vez del indice
for(var pakin of coleccion) {

   pakin.mostrar();
}

//in itera en el indice
//of itera sobre el objeto
for (var x in coleccion[0]) {
   console.log(x);
}
