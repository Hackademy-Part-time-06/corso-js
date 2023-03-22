//Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

function media(a) {
    let medium = []
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i]
    }
    medium = sum / a.length
    let valMin = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] < medium) {
            valMin.push(a[i])
        }
    }
    console.log(`I valori minori della media sono: ${valMin}`)
    return medium
}
let mediaNumbers = media([5, 3, 9])
console.log(`La media è: ${mediaNumbers}`)

//

let numbers = [3, 5, 9, 8]
let sommaArray = numbers.reduce(function(risultatoSomma, num) {
    risultatoSomma = risultatoSomma + num
    return risultatoSomma
})
let media2 = sommaArray / numbers.length
console.log(`La media è ${media2}`)

let numeriMinori = numbers.filter(function(numero, index){
    return numero < media2
})
console.log(numeriMinori)
