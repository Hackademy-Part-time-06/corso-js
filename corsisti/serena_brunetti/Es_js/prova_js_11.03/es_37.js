//Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente. Dopo averli ordinati in ordine decrescente ordinali in ordine crescente

let numeri = [3, 7, -2, 8, 1, 2, 5, 6, -4]

function ordineCrescente (a, b) {
    return a-b
}
console.log(numeri.sort(ordineCrescente))

function ordineDecrescente (a, b) {
    return b-a
}
console.log(numeri.sort(ordineDecrescente))