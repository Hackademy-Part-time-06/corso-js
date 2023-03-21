/*Esercizio 63 - DIFFICILE

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) una logica ad hoc per un altro sconto (callback).
A questa callback dovrai passare in input tutti i parametri che ti vengono passati nella funzione principale.
Crea tu una nuova logica di sconto ed applicalo al totale, dopo averlo calcolato seguendo le logiche usate fino ad ora. 
Hai la massima libertà riguardo a che tipologia di sconto applicare.

Esempio:
posso creare uno sconto in base al numero dei biglietti comprato: se compri 3 biglietti hai un ulteriore 5% di sconto, se ne prendi 5 invece sale al 10%.*/

let ticket = prompt("Quanti biglietti desidera?")
let price = 3
let day = prompt("Che giorno è?")
let sale = new Number

console.log(biglietti(ticket, price, sconto(day, ticket)))

function biglietti(ticket, price, sale) {
    let scontato = price * (1 - (sale / 100))

    return (`Sono ${ticket} biglietti a ${scontato.toFixed(2)}€ per un totale di ${(ticket*scontato).toFixed(2)}€, grazie.`)
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