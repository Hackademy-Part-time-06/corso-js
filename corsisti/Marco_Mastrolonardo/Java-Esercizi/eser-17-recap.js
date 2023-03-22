/*
//ESERCIZIO 60
function importo(numerobiglietti, costosingolo){
    let totale = numerobiglietti * costosingolo
    return totale
}
console.log(importo(2, 5))
*/
/*
//ESERCIZIO 61

function importo(numBiglietti, costoSingolo, sconto){
let totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * sconto)
return totale
}
console.log(importo(2, 10, 10))
*/
/*
ESERCIZIO 62

function importo(numBiglietti, costoSingolo, giornosettimana){
    let totale
    switch (giornosettimana) {
        case "lunedi":
        case "martedi":
            totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * 10)
            break;
        case "mercoledi":
            totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * 20)
            break;
    }
    return totale
}
    console.log(importo(2, 10, "lunedi"))
*/
/*
//ESERCIZIO 63
*/
function scontoulteriore(totaledamodificare){
    let risultato = totaledamodificare - (totaledamodificare / 100 * 20)
    
    return risultato
}
function prezzototale(numBiglietti, costoSingolo, giornosettimana, callback) {
    let totale
    switch (giornosettimana) {
        case "lunedi":
        case "martedi":
            totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * 10)
            break;
        case "mercoledi":
            totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * 20)
            break;
    }
    if (typeof callback === "function" && numBiglietti >=3){
        totale = callback(totale);
    }
    
    return totale
}
console.log("prezzo ulteriormente scontato del 20% solo se si hanno numBiglietti >= 3", prezzototale(3, 10, "lunedi", scontoulteriore))

console.log("prezzo senza secondo sconto",prezzototale(3, 10, "lunedi"))