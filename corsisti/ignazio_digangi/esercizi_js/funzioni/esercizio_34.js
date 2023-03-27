"use strict"
console.log("Esercizio 34")
console.log("File JS caricato correttamente")
/*
Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) un numero di volte che verrà definito tramite parametro passato in input.
Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto).
*/

let numeroLanci =prompt("Quanti sono i lanci:");
let numero;

function lanciaDadi(){
    let giocatore1 = 0;
    let giocatore2 = 0;

    for (let i = 1; i <= numeroLanci; i++){
        giocatore1 += Math.round(Math.random() * 6);
        giocatore2 += Math.round(Math.random() * 6);
        
    }
    console.log();
    console.log();
}

lanciaDadi();