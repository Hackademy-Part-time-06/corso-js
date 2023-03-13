/* Esercizio 37

Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

    Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

Variante:
Dopo averli ordinati in ordine decrescente ordinali in ordine crescente */

let numeri = [5,9,7,1,3,4,6,8,2,0]

numeri.sort(function(a, b){return b-a})

console.log(numeri);

numeri.reverse()

console.log(numeri);