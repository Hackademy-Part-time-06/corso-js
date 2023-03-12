"use strict"

console.log("I tipi primitivi");

/**
 *
 * typeof
 *
 */

var x = "sono una stringa";
typeof x; // ritorna il tipo di variabile (numeber, string, ecc..)


/**
 *
 * STRINGHE
 *
 */

let nome = "Gino";
let cognome = "Ginoli";

let stringaSingoliApici = 'sono una stringa'; // ""
let stringaDoppiApici = "sono una stringa"; // ''

let caratteriEscapati = 'correva l\'anno 2022'; // usando lo \ posso escapare i caratteri speciali rendendoli semplici stringhe

let templateLiteral = `Ehi ciao ${nome} come stai?`;

let stringaAttraversoCostruttore = new String("sono stata generate tramite il costruttore String");

let lunghezzaDellaStringa = stringaAttraversoCostruttore.length // ritorna un numero intero

let nomeCompleto = nome + " " + cognome;

/**
 *
 * Alcuni metodo propri delle stringhe
 *
 */

// SPLIT - crea un array da un stringa attraverso una discrimante che gli viene passat
let arrayDaStringa = stringaAttraversoCostruttore.split(" ");

// CHARAT - ritorna il valore di uno specifico carattare specificando la sua posizione - partono a 0
let primoCarattere = stringaAttraversoCostruttore.charAt(0); // sarà uguale ad "s"

// sostituire uno o più caratteri
let replaceDiUnaParola = templateLiteral.replace("Gino", "Luca");

// sostituire tutte le occorrenze di una determinata sequenza di caratteri
let sostituiscoTutteLeOPresenti = stringaSingoliApici.replaceAll("o", "_");

// estrarre una porzione di una stringa passandogli la posizione di partenza e fine
let nuovaStringa = templateLiteral.slice(4, 8); // nuovaStringa = ciao


/**
 *
 * Recuperare l'ultimo carattere  di una stringa 
 *
 */

// valore dinamico 
//let nomeDinamico = prompt("Chi sei?");
let nomeDinamico = "Giangino";

// dichiaro la mia variabile
let ultimoCarattere;

// numero totale dei caratteri all'interno della stringa
let lunghezzaNomeDinamico = nomeDinamico.length;

// le posizioni dei caratteri partono sempore da 0 -> quindi per avere
// l'ultimo devo sottrarre 1 alla lunghezza totale
let posizioneUltimoCarattere = lunghezzaNomeDinamico - 1;

// prendo lo specifico carattere passando la posizione
ultimoCarattere = nomeDinamico.charAt(posizioneUltimoCarattere);






/**
 *
 * NUMERI
 *
 */


let interoNegativo = -10;
let zero = 0;
let interoPositivo = 123;
let numeroDecimale = 0.52;
let numeroDaCostruttore = new Number(123);


// Castare ad intero
let numeroComeStringa = '10';
console.log(numeroComeStringa + 10); // -> 1010

// trasformo un tipo "string" in un tipo "number"
let numeroComeStringaCastatoAdIntero = Number(numeroComeStringa);
let altraPossibilitaDiCasting = +numeroComeStringa;

/**
 *
 * Alcuni metodo propri dei numeri
 *
 */

// isNaN -> controlla che un valora sia NaN (not a number)
isNaN(123); // false
isNaN(-1.23); // false
isNaN('123'); // false
isNaN("asd"); // true


// parseInt/parseFloat - ritorna il numero presente nella stringa
parseInt("10"); // 10
parseInt("asd 10"); // NaN







/**
 *
 * BOOLEANI
 *
 */


let sonoVero = true;
let sonoFalso = false;

/**
 *
 * convertire valori in booleani: tutto ciò che ha valore è true, ciò che è vuoto è false;
 *
 */

Boolean(23); // true
Boolean(1); // true
Boolean("Sono una stringa"); // true
Boolean(0); // false
Boolean(""); // false
Boolean(null); // false





/**
 *
 * NULL
 *
 */


let sonoNull = null;





/**
 *
 * UNDEFINED
 *
 */


let sonoUndefined = undefined;


