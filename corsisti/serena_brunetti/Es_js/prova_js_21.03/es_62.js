/*Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) il giorno della settimana. 
In base al giorno applica le seguenti scontistiche:
- lunedi e martedi: - 10 % sul totale
- mercoledi: - 20%*/

function biglietti(numBiglietti, costo, day) {
    let tot = numBiglietti * costo
    if (day === "lunedì" || day === "martedì") {
        let prezzo1 = tot * 10 / 100
        return tot - prezzo1
    }
    else if (day === "mercoledì") {
        let prezzo2 = tot * 20 / 100
        return tot - prezzo2
    }
    else {
        return tot
    }
}
let costoFinale = biglietti(5, 20, "mercoledì")
console.log(costoFinale)
