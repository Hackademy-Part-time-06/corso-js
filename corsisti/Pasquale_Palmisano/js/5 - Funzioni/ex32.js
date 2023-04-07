/* Esercizio 32

Scrivi una funzione che prenda in input una stringa e la restituisca capovolta*/

let x = prompt("Inserire frase da girare:")

console.log(reverse(x));

function reverse(p) {
    let girata = ""

    for (i = (p.length - 1); i >= 0; i--) {
        girata = girata + p.charAt(i)
    }

    return girata
}