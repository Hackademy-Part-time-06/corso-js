/*
Esercizio 27
Calcolatrice!!
Crea un programma che simuli una calcolatrice!!
Chiedi all’utente di inserire 2 numeri ed un simbolo matematico ed esegui l’operazione corrispondente
        es: 

          input1: 10
          input2: 20
          input3: +

        
          risultato: 10 + 20 = 30
*/

let x = Number(prompt("Inserire primo numero"))
let op = prompt ("Inserire operatore (+,-,*,/)")
let y = Number(prompt("Inserire secondo numero"))
let result

switch (op) {
    case "+":
        result = Number(x + y)
        console.log(`${x} + ${y} = ${result}`);
        break;
    
    case "-":
        result = Number(x - y)
        console.log(`${x} - ${y} = ${result}`);
        break;

    case "*":
        result = Number(x * y)
        console.log(`${x} * ${y} = ${result}`);
        break;

    case "/":
        result = Number(x / y)
        console.log(`${x} / ${y} = ${Math.floor(result)} con il resto di ${x % y}`);
        break;
    
    default:
        console.log("Errore di inserimento");
        break;
}