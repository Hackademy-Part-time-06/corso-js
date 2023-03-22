//Scrivi una funzione che, dato un array di numeri, ritorni la somma dei numeri divisibili per 2

function risultatoCorretto(input) {
    let numDivisibili = input.filter(function (risultato1, elemento1) {
        return risultato1 % 2 === 0
    })
    let sommaNumPari = numDivisibili.reduce(function (risultato, elemento) {
        risultato = risultato + elemento
        return risultato
    })
    return sommaNumPari
}

function risultatoCorretto2(input) {
    let sommaNumPari1 = input.reduce(function(result, element){
        if (element % 2 === 0) {
            result = result + element
        }
        return result
    }, 0)
    return sommaNumPari1
}

let input = console.log(risultatoCorretto2([1, 2, 3, 4, 5, 6, 7, 8, 9]))



/*let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let inputFiltrato = input.filter(function(numero){
    return numero % 2 === 0
})

console.log (inputFiltrato);

let totale = inputFiltrato.reduce(function(risultatoFinale,numero){
    return risultatoFinale + numero;

})

console.log(totale);*/
