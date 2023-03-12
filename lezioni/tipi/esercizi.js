"use strict"

/**
 * Esercizio 8

    Scrivi un programma che dati i seguenti numeri; 10, 20, 35, 50, 70; restituisca in output la somma e la media.

 */

    
let n1 = 10;
let n2 = 20;
let n3 = 35;
let n4 = 50;
let n5 = 70;

let somma = n1 + n2 + n3 + n4 + n5;

let media = somma / 5;

console.log("Es 8 | somma:", somma);
console.log("Es 8 | media:", media);





/**
 * Esercizio 9

    Riscrivi un programma come l’esercizio precedente ma che utilizzi 5 numeri inseriti manualmente dall’utente tramite il comando prompt. 

 */

/*    
let n_1 = prompt("1 inserisci un numero");
let n_2 = prompt("2 inserisci un numero");
let n_3 = prompt("3 inserisci un numero");
let n_4 = prompt("4 inserisci un numero");
let n_5 = prompt("5 inserisci un numero");

let _somma = +n_1 + +n_2 + +n_3 + +n_4 + +n_5;

let _media = _somma / 5;

console.log("Es 9 | somma:", _somma);
console.log("Es 9 | media:", _media);

*/


/**
 * Esercizio 10
    Scrivi un programma che dato l'anno corrente e un anno di nascita determini: 

    - l'età della persona
    - quanti anni sono necessari per raggiungere i 100
    - restituisca in output (console.log o alert) entrambi i risultati.

 */

let annoCorrente = 2023;
let annoDiNascita = 1984;
let eta = annoCorrente - annoDiNascita;
let anniMancantiPer100 = 100 - eta;

console.log("Es 10 | età:", eta);
console.log("Es 10 | anni mancanti per 100:", anniMancantiPer100);




/**
 * Esercizio 11

    Scrivi un programma che dato un nome in input, converta solo la prima lettera in maiuscolo
 
*/

let nomeCasuale = "gino";
nomeCasuale = nomeCasuale.charAt(0).toUpperCase() + nomeCasuale.slice(1);

console.log("Es 11 | nome capitalized:", nomeCasuale);




/**
 * Esercizio 12
 
    Scrivi un programma che dato un numero di telefono (di 10 cifre) in input, offuschi tutte le cifre, sostituendole con l'asterisco (*), e lasci visibili solo le ultime 3.
 
*/

let numeroDiTelefono = "3400000123";
numeroDiTelefono = "*******" + numeroDiTelefono.slice(-3);

console.log("Es 12 | numero di telefono offuscato:", numeroDiTelefono);



/**
 * Esercizio 13 - BONUS 

    Scrivi un programma che dati 5 numeri restituisca in output il numero minore ed il numero maggiore
 
*/

let n__1 = 123;
let n__2 = 34;
let n__3 = 3;
let n__4 = 12765;
let n__5 = 1435;

let min = Math.min(n__1, n__2, n__3, n__4, n__5);
let max = Math.max(n__1, n__2, n__3, n__4, n__5);

console.log("Es 13 | valore minimo", min);
console.log("Es 13 | valore massimo", max);



/**
 * Esercizio 14 - BONUS 

    Scrivi un programma che sommati i seguenti 2 numeri: 0.1   0.2 restituisca il risultato corretto, ossia:  0.3

 */

let f1 = 0.1;
let f2 = 0.2;
let fResult = f1 + f2;
fResult = fResult.toFixed(1);

console.log("Es 14 | somma", fResult);




/**
 * Esercizio 15 - BONUS 

    Scrivi un programma che generi un numero intero randomico da 1 a 6

*/

let numeroRandomico = Math.floor(Math.random() * 6) + 1;

console.log("Es 15 | numero randomico", numeroRandomico);





/**
 * Esercizio 16 - BONUS 

    Scrivi un programma che dato: 

    - Un numero totale di gatti 
    - Il numero dei gatti presenti in ogni fila 

    Restituisca in output: 

    - Il numero di gatti totali
    - il numero di gatti mancanti per completare una nuova fila

 */


let gattiTotali = 44;
let gattiPerFila = 6;

let fileTotali = Math.floor(gattiTotali / gattiPerFila);
let gattiSenzaFila = gattiTotali % fileTotali;

console.log("Es 16 | file di gatti totali", fileTotali);
console.log("Es 16 | gatti senza fila", gattiSenzaFila);

