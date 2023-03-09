"use strict"

console.log("Le funzioni");

/**
 * Definizione
 */
function saluta() {
  console.log("Ciao");
}

/**
 * Richiamo
 */
saluta;

/**
 * Esecuzione
 */
saluta();




/**
 * Return - termina la funzione e rende disponibile esternamente il valore ritornato
 */

// Ritorno un valore
function somma() {
  let risultato = 10 + 10;
  return risultato;
}
let risultatoSomma = somma();
console.log("la variabile risultatoSomma è valorizzata dal valore ritornato dopo l'esecuzione della funzione somma. 'risultatoSomma' = ", risultatoSomma)

// Ritorno un valore e interrompo l'esecuzione
function moltiplico() {
  let risultato = 10 + 10;
  return risultato;
  console.log("Questo console.log non verrà mai eseguito perchè dopo il 'return'");
}
let risultatoMoltiplicazione = moltiplico();




/**
 *
 * Parametri
 *
 * @param x
 * @param y
 * @returns {number}
 */
function sottraggo(x, y) {
  return x - y;
}

// passo 2 valori a sottraggo() che diventeranno x e y una volta eseguita
sottraggo(10, 30);

/**
 * Parametri con valore di default - questi se non son passati nel momento dell'esecuzione assumono il valore di default
 */
function divido(x=10, y=2) {
  return x / y;
}
divido(100); // x -> 100 , y -> 2


/**
 * keyword "arguments" per accedere a tutti i parametri passati anceh se non dichiarati
 */
function argomentiGenerici() {
  console.log("Recupero gli argomenti che mi son stati passati, anche se non ne ho dichiarato nessuno", arguments);
}
argomentiGenerici("a", "b", "c");


/**
 *
 * Callback - altre funzioni passare come parametri
 *
 */
function tuttoInMinuscolo(stringaDaFormattare) {
  return stringaDaFormattare.toLowerCase();
}

function stampaUnaStringa(stringa, funzionePerFormattareLaStringa) {
  let risultato = funzionePerFormattareLaStringa(stringa); // funzionePerFormattareLaStringa è una callback. Ossia una funzione passata come parametro
  console.log(risultato);
}
stampaUnaStringa("CIAO", tuttoInMinuscolo);


/**
 *
 * Scope
 *
 */

let variabileGlobale = "variabile globale";

function esempioScope() {

  // accedo alle variabili globali
  console.log(variabileGlobale);

  let variabileIntera = "varibiale interna"; // non è accessibile fuori dalla funzione

}

esempioScope()

function esempioScopeAnnidato() {

  // accedo alle variabili globali
  console.log(variabileGlobale);

  let variabileIntera = "varibiale interna"; // non è accessibile fuori dalla funzione ma solo dentro di essa o dentro altri contesti annidati

  function funzioneInterna() {
    console.log(variabileIntera)
  }

  funzioneInterna();
}

esempioScopeAnnidato();


/**
 *
 * CLOSURE
 * varabile interna sopravvive dopo che la funzione che l'ha definita è stata eseguita perchè
 * fa parte dello scope della funzione ritornata
 *
 */
function contatore() {
  let c = 0;
  return function() {
    c++;
    console.log("Closure", c);
  }
}
let incrementa = contatore();
incrementa(); // 1
incrementa(); // 2
incrementa(); // 3




/**
 *
 * Funzioni anonime ed IFEE
 *
 */
(function () {
  console.log("Vengo eseguita immediatamente e non ho un nome - sono anonima");
})()




/**
 *
 * Arrow function
 *
 */
let sommaConArrowFunctionContratta = (x, y) => x + y; // forma contratta - return implicito
let x = sommaConArrowFunctionContratta(10, 20);

console.log(x);

// forma senza return implicito
let sommaConArrowFunction = (x, y) => {
  return x + y;
}
let y = sommaConArrowFunction(110, 20);

console.log(y);


