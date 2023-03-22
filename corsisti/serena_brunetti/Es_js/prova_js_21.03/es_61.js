//Amplia il programma scritto nell’esercizio precedente. Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) uno sconto espresso come numero. Questa sarà la percentuale di sconto da applicare al totale.

function biglietti(numBiglietti, costo, sconto) {
    let tot = numBiglietti * costo
    let valSconto = tot * sconto / 100
    return tot - valSconto
}
let costoBigl = biglietti(3, 15, 10)
console.log(costoBigl)
