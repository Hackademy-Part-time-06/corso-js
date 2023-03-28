"use strict"
console.log("File JS caricato correttamente");

/*
Simula una login: 

- dichiara 2 variabili chiamate username e password e falle valorizzare dall'utente tramite il comando prompt. 
- Dopo aver ricevuto i valori mostra con un alert un messaggio con scritto:
        
        Benvenuto "valore-username" nell'area personale.
*/

let username =prompt("Username:");
let password =prompt("Password");

alert("Benvenuto " + username+ " nell'area personale.")