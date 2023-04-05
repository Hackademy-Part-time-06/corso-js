/*Esercizio 61

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) uno sconto espresso come numero. Questa sarà la percentuale di sconto da applicare al totale.

Esempio: 

- 2 biglietti
- 10 euro a biglietto
- 10 % sconto

risultato 18€*/

let ticket = prompt("Quanti biglietti desidera?")
let price = 3
let sale = prompt("Vuole uno sconto? (In percentuale)")

console.log(biglietti(ticket, price, sale));

function biglietti(n, price, sale) {
    let scontato = Math.round(price * (1 - (sale / 100)))

    return (`Sono ${n} biglietti a ${scontato.toFixed(2)}€ per un totale di ${(n*scontato).toFixed(2)}€, grazie.`)
}