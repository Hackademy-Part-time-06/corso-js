/*Esercizio 62

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) il giorno della settimana. 
In base al giorno applica le seguenti scontistiche:

- lunedi e martedi: - 10 % sul totale
- mercoledi: - 20%*/

let ticket = prompt("Quanti biglietti desidera?")
let price = 3
let day = prompt("Che giorno è?")
let sale = new Number

switch(day) {
    case "lunedi":
    case "martedi":
        sale = 10
        break
    case "mercoledi":
        sale = 20
        break
    case "giovedi":
    case "venerdi":
    case "sabato":
    case "domenica":
        sale = 0
        break
    default:
        console.log("Non ho capito.");
        break
}

console.log(biglietti(ticket, price, sale));

function biglietti(n, price, sale) {
    let scontato = price * (1 - (sale / 100))

    return (`Sono ${n} biglietti a ${scontato.toFixed(2)}€ per un totale di ${(n*scontato).toFixed(2)}€, grazie.`)
}