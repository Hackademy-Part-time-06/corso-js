//Scrivi un programma che sommati i seguenti 2 numeri: 0.1   0.2 restituisca il risultato corretto, ossia:  0.3

let decimalNumber = [0.1, 0.2]
let sum = decimalNumber[0] + decimalNumber[1]
console.log("La somma è: ", sum)

let sum2 = sum.toFixed(1)
console.log("La somma è ", sum2)