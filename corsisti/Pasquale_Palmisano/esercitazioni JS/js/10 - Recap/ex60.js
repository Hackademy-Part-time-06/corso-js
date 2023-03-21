/*Esercizio 60

Scrivi un programma (funzione) che calcoli l’importo da pagare per i biglietti del cinema. Il programma dovrà prendere in input i seguenti dati:


- numero dei biglietti
- costo del singolo biglietto

Una volta avuti i dati bisognerà calcolare il totale e restituirlo*/

let ticket = prompt("Quanti biglietti desidera?")
let price = 3

console.log(biglietti(ticket, price));

function biglietti(n, price) {
    return (`Sono ${n} biglietti a ${price}€ per un totale di ${n*price}€, grazie.`)
}