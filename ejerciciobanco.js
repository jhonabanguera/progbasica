// Banco cliente [x]
// Cuenta Cliente [x]
// Saldo cliente [x]
// Banco destino [x]
// Cuenta destino [x]
// Hora transferencia [0 - 24]
// Transferir 1M USD

//Condiciones obligatorias de transferecia:
// Cliente verificado (verdadero o falso)
// Destino verificado (verdadero o falso)
// Saldo mayor al monto a transferir mas costo de transaccion

// Parametros del costo de transaccion:
// Si el banco destino es el mismo del cliente el costo de transaccion es 0 USD
// Si el banco destino es diferente al banco del cliente el costo de transaccion es 100 USD

// Solo se pueden hacer transferencias en hora de 9 a 12 o de 15 a 20

cliente1 = {
    banco: "BBVA",
    cuenta: "verificada",
    saldo: 10000
}

cliente2 = {
    banco: "Colpatria",
    cuenta: "verificada",
    saldo: 500
}

var hora;
var costoTransaccion;


function transferir(cliente1, cliente2, hora) {
if (cliente1.cuenta && cliente2.cuenta == "verificada") {
 if (cliente1.banco == cliente2.banco) {
     costoTransaccion = 0;
 } else {
     costoTransaccion = 100;
 }

 if (hora >= 9 || hora <= 12) {
    console.log("Te encuentras en un horario valido para realizar transacciones");
 } else if (hora >= 15 || hora <= 20) {
    console.log("Te encuentras en un horario valido para realizar transacciones");
 } else {
     console.log("No puedes realizar la transacción a esta hora");
 }

 var transferencia = parseInt(prompt("¿cuanto deseas transferir?"));

 if (cliente1.saldo >= transferencia + costoTransaccion) {
    console.log("Puedes transferir dinero");
 } else {
     console.log("Asegurate de tener el saldo a transferir mas el costo de la transacción");
 }
}
}