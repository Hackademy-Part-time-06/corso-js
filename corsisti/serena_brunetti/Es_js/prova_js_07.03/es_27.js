/*Calcolatrice!!
Crea un programma che simuli una calcolatrice!!
Chiedi all’utente di inserire 2 numeri ed un simbolo matematico ed esegui l’operazione corrispondente
        es: 
          input1: 10
          input2: 20
          input3: +
          risultato: 10 + 20 = 30*/

let inputFirst = prompt("Inserisci il primo numero")
inputFirst = Number(inputFirst)
let inputSecond = prompt("Inserisci il secondo numero")
inputSecond = Number(inputSecond)
let inputSymbol = prompt ("Inserisci il simbolo matematico")
let result


if (inputSymbol == "+") {
    result = inputFirst + inputSecond
    console.log("Il risultato è " + result)
}
if (inputSymbol == "-") {
    result = inputFirst - inputSecond
    console.log("Il risultato è " + result)
}
if (inputSymbol == "*") {
    result = inputFirst * inputSecond
    console.log("Il risultato è " + result)
}
if (inputSymbol == "/") {
    result = inputFirst / inputSecond
    console.log("Il risultato è " + result)
}
