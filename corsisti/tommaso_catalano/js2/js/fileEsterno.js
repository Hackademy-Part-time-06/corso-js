/* Esercizio 8
let numero1 = 10
let numero2 = 20
let numero3 = 35
let numero4 = 50
let numero5 = 70
let somma = numero1 + numero2 + numero3 + numero4 + numero5
let media = somma / 5
console.log ("La somma è " + somma);
console.log ("La media è " + media);
*/

/* Esercizio 9

let numero1 = prompt("Digita il primo numero");
let numero2 = prompt("Digita il secondo numero");
let numero3 = prompt("Digita il terzo numero");
let numero4 = prompt("Digita il quarto numero");
let numero5 = prompt("Digita il quinto numero");
numero1 = Number (numero1);
numero2 = Number (numero2);
numero3 = Number (numero3);
numero4 = Number (numero4);
numero5 = Number (numero5);
let somma = numero1 + numero2 + numero3 + numero4 + numero5
let media = somma / 5
console.log ("La somma è " + somma);
console.log ("La media è " + media);
*/

/* Esercizio 10

let annoCorrente = prompt("In che anno siamo?");
let annoDiNascita = prompt("In che anno sei nato?");
annoCorrente = Number (annoCorrente);
annoDiNascita = Number (annoDiNascita);
let eta = annoCorrente - annoDiNascita;
let cento = 100 - eta;
console.log ("La tua età è: " + eta);
console.log ("Per arrivare a 100 anni ti mancano: " + cento + " anni");
*/

/*Esercizio 11
let text = prompt("inserisci il tuo nome")
let primalettera = text.charAt(0).toUpperCase()+text.slice(1);
console.log(primalettera)
let result = primalettera.toUpperCase
*/

/* Esercizio 12

let numeroDiTelefono = prompt("Inserisci il tuo numero di telefono");
let numeroNascosto = ("*******" + numeroDiTelefono.slice(7,10));
console.log(numeroNascosto);

*/

/* Esercizio 13

let numero1 = prompt("inserisci il primo numero");
let numero2 = prompt("inserisci il secondo numero");
let numero3 = prompt("inserisci il terzo numero");
let numero4 = prompt("inserisci il quarto numero");
let numero5 = prompt("inserisci il quinto numero");

numero1 = Number (numero1);
numero2 = Number (numero2);
numero3 = Number (numero3);
numero4 = Number (numero4);
numero5 = Number (numero5);

let maggiore = Math.max(numero1,numero2,numero3,numero4,numero5);
let minore = Math.min(numero1,numero2,numero3,numero4,numero5);
console.log("Il numero maggiore è " + maggiore);
console.log("Il numero minore è " + minore);

*/

/*Esercizio 14

let numero1 = 0.1
let numero2 = 0.2
let somma = numero1 + numero2
let sommaArr = somma.toPrecision(1); 
console.log(sommaArr);

*/

/*Esercizio 15

let numeroRandom = Math.random()*6;
console.log("Il numero random è " + numeroRandom);

*/

/*Esercizio 16

let totaleGatti = prompt("inserisci il numero di gatti");
let gattiPresenti = prompt("inserisci il numero di gatti per fila");
totaleGatti = Number (totaleGatti);
gattiPresenti = Number (gattiPresenti);
let totaleFile = Math.round(totaleGatti/gattiPresenti);
console.log("Il numero di file è "+ totaleFile);
let differenza = totaleGatti%gattiPresenti;
let gattimancanti = gattiPresenti-differenza;
console.log("Il numero di gatti mancanti per completare una nuova fila:" + gattimancanti);

*/