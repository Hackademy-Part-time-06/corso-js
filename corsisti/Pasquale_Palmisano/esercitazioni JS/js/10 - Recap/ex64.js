/*Esercizio 64

Crea un programma che stampi lo scontrino del cinema!
Questo programma dovrà mostrare il totale dei biglietti calcolato negli esercizi precedenti e qualsiasi altra informazione tu voglia mostrare.*/

let ticket = prompt("Quanti biglietti desidera?")
let price = 3
let day = prompt("Che giorno è?")
let sale = new Number
let total = (biglietto(ticket, price, sconto(day, ticket)) * ticket).toFixed(2)

console.log(`CINEMA PIZZE MARINE\n\n`)
for(let i = 0; i < ticket; i++) {
    console.log(`Biglietto ${i + 1}: ${biglietto(ticket, price, sconto(day, ticket))}€`);
}
console.log(`\nTotale: ${total}€`);

function biglietto(ticket, price, sale) {
    return (price * (1 - (sale / 100))).toFixed(2)
}

function sconto(day, ticket) {
    
    let sconto = 0

    switch(day) {
        case "lunedi":
        case "martedi":
            sconto += 10
            break
        case "mercoledi":
            sconto += 20
            break
        default:
            break
    }

    if (ticket == 3 || ticket == 4) {sconto += 10}
    else if (ticket >= 5) {sconto += 20}

    return sconto
}