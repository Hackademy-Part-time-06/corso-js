//Crea un programma che stampi lo scontrino del cinema!

function biglietti(numBiglietti, costo, day) {
    let tot = numBiglietti * costo
    let scontrino = 0
    if (day === "lunedì" || day === "martedì") {
        let prezzo1 = tot * 10 / 100
        scontrino = tot - prezzo1
    }
    else if (day === "mercoledì") {
        let prezzo2 = tot * 20 / 100
        scontrino = tot - prezzo2
    }
    else {
        scontrino = tot
    }
    console.log(`Costo totale per ${numBiglietti} biglietti: ${tot}`)
    console.log(`Prezzo scontato: ${scontrino}. Sconto valido solo il ${day}`)
}
let persona1 = biglietti(1, 20, "mercoledì")
let persona2 = biglietti(1, 5, "mercoledì")
let persona3 = biglietti(1, 15, "lunedì")