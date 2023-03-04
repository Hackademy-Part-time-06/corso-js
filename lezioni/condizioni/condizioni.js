"use strict"

console.log("Le condizioni");

let age = 19;

if (age >= 18) {
  console.log("sei maggiorenne");
}

// forma contratta su una sola riga
if (age >= 18) console.log("sei maggiorenne");


/**
 *
 * else: alternativa alla condizione di IF
 *
 */

if (age >= 18) {
  console.log("sei maggiorenne");
}
else {
  console.log("sei minorenne");
}


/**
 *
 * else if
 *
 */

if (age > 18) {
  console.log("Puoi guidare");
}
else if (age === 18) {
  console.log("Puoi guidare ma con l'adesivo della P");
}
else {
  console.log("Sei minorenne");
}


// multipli if else if
if (age >= 90) {
  console.log("Basta con sta patente!");
}
else if (age > 18 && age < 90) {
  console.log("Puoi guidare");
}
else if (age === 18) {
  console.log("Puoi guidare ma con l'adesivo della P");
}
else {
  console.log("Sei minorenne");
}








/**
 *
 * Operatore ternario
 *
 */
let maggiorenne_o_minorenne = age >= 18 ? "Maggiorenne" : "Minorenne";







/**
 *
 * Switch
 *
 */

//let giornoDellaSettimana = prompt("Giorno della settimana corrente");
let giornoDellaSettimana = "giovedi";

let giornoDellaSettimanaRaw = giornoDellaSettimana.toLowerCase();

switch (giornoDellaSettimanaRaw) {
    case "lunedi":    
        console.log("lunedi")
        break;

    case "martedi":
        console.log("martedi")
        break;

    case "mercoledi":
        console.log("mercoledi")
        break;
    
    case "giovedi":
        console.log("giovedi")
        break;

    case "venerdi":
        console.log("venerdi")
        break;

    case "sabato":
        console.log("sabato")
        break;

    case "domenica":
        console.log("domenica")
        break;

    default:
        console.log("Occhio che hai scritto qualcosa di sbagliato!");
        break;
}