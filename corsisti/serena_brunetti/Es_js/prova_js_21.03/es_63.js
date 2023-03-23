//Amplia il programma scritto nell’esercizio precedente. Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) una logica ad hoc per un altro sconto (callback). A questa callback dovrai passare in input tutti i parametri che ti vengono passati nella funzione principale. Crea tu una nuova logica di sconto ed applicalo al totale, dopo averlo calcolato seguendo le logiche usate fino ad ora. 

function scontoOk(numBiglietti, costo, day) {
    let tot = numBiglietti * costo
    let prezzo3 = tot * 30 / 100
    return tot - prezzo3
}

function biglietti(numBiglietti, costo, day, callbackSconto) {
    let tot = numBiglietti * costo
    if (day === "lunedì" || day === "martedì") {
        let prezzo1 = tot * 10 / 100
        return tot - prezzo1
    }
    else if (day === "mercoledì") {
        let prezzo2 = tot * 20 / 100
        return tot - prezzo2
    }
    else if (numBiglietti > 3) {
        return callbackSconto(numBiglietti, costo, day)
    }
    else {
        return tot
    }
}
let costoFinale = biglietti(5, 20, "venerdì", scontoOk)
console.log(costoFinale)