//Clase constructora del obejto Pakiman
 class Pakiman {
     constructor(n, v, a) {
         //This se refiere a las variables dentro de la clase, este se vuelve
         //un indicador de la instancia de la clase
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
   
       
     }
   
     //Dentro de las clases no hay que escribir function porque se entiende de
     //manera implicita que todo codigo dentro de una clase es una funcion
     hablar() {
            alert(this.nombre);
     }
   
     //Agrega al body un hijo que será la imagen del pakiman
     mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br/>");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<hr />");

     }
    }

