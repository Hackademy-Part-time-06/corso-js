"use strict"

console.log("Le variabili");


/**
 *
 * keyword utilizzabili:
 *
 *  - var
 *  - let
 *  - const
 */

var variabileConVar = 'variabile dichiarata con "var"';

let variabileConLet = 'variabile dichiarata con let"';

// il valore è "costante" - ossia non può ossere modificato
const variabileConConst = 'variabile dichiarata con "const"';


/**
 *
 *  Dichiarazione vs Inizializzazione
 *
 */

// dichiaro solo l'esistenza della variabile col relativo nome
let dichiarazioneVsInizializzazione;

// inizializzo assegnando un valore
dichiarazioneVsInizializzazione = "ho appena inizializzato la variabile assegnandole un valore";

/**
 *
 * Keyword proibite:
 *
 *    - tutte le reserved keyword proprie di Javascript (es: var, let, for, function, ecc...)
 *    - tutti i caratteri speciali tranne: $ e _
 *    - i numeri non sono ammessi come primo carattere
 *
 */

let _asd; // corretta
let $asd; // corretta
let Asd; // corretta
let camelCase; // corretta
let con_underscore; // corretta
let TUTTO_MAIUSCOLO; // corretta

/**
 *
 * NB: js è key sensitive. Quindi _
 *
 *    var asd;
 *    var ASD;
 *
 *    asd e ASD  son 2 variabili diverse
 *
 */