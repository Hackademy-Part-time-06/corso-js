//Riscrivi un programma come l’esercizio precedente ma che utilizzi 5 numeri inseriti manualmente dall’utente tramite il comando prompt. 

let number1 = prompt("Inserisco il primo numero");
let n1 = Number(number1);
let number2 = prompt("Inserisco il secondo numero");
let n2 = Number(number2);
let number3 = prompt("Inserisco il terzo numero");
let n3 = Number(number3);
let number4 = prompt("Inserisco il quarto numero");
let n4 = Number(number4);
let number5 = prompt("Inserisco il quinto numero");
let n5 = Number(number5);
let sum = n1 + n2 + n3 + n4 + n5;
let media = sum/5;
alert("La somma dei numeri inseriti è: " + sum);
alert("La media dei numeri inseriti è: " + media);