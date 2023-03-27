"use strict"
console.log("Esercizio 31")
console.log("File JS caricato correttamente")
/*
Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.


        Esempi:
        Input: n = 2, m = 3
        Output: FALSE
        Input: n = 2, m = '2'
        Output: FALSE
        Input: n = 2, m = 2
        Output: TRUE
*/


let n1 =prompt("Inserisci il primo valore:")
let n2 =prompt("Inserisci il secondo valore:")

function verificaValore(){
    if (n1 === n2)
    alert("TRUE")

    else
    alert("FALSE")
    
}

verificaValore();