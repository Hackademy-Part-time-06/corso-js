/*Scrivi un programma che dati:
- 2 array di 10 elementi interi casuali compresi tra 1 e 10,
- il tipo di operazione aritmetica da effettuar tra una delle seguenti:
- addizione
- sottrazione
- moltiplicazione
- divisione
Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
    Esempio:
    Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15]*/

function numbersArrays(a, b, c) {
    let result = []
    if (c === "+") {
        for (let i = 0; i < a.length; i++)
            result.push(a[i] + b[i])
    }
    else if (c === "-") {
        for (let i = 0; i < a.length; i++)
            result.push(a[i] - b[i])
    }
    else if (c === "*") {
        for (let i = 0; i < a.length; i++)
            result.push(a[i] * b[i])
    }
    else if (c === "/") {
        for (let i = 0; i < a.length; i++)
            result.push(a[i] / b[i])
    }
    return result
}
let operazione = numbersArrays([3, 5, 3, 2, 1], [1, 5, 3, 6, 2], "*")
console.log(operazione)

//

function numbersArrays2(a1, b1, c1) {
    let risultato = a1.map(function (elemento, index) {
        let risultatoElemento = 0
        if (c1 === "+") {
            risultatoElemento = elemento + b1[index]
        }
        else if (c1 === "-") {
            risultatoElemento = elemento - b1[index]
        }
        else if (c1 === "*") {
            risultatoElemento = elemento * b1[index]
        }
        else if (c1 === "/") {
            risultatoElemento = elemento * b1[index]
        }
        return risultatoElemento
    })
    return risultato
}

let operazione2 = numbersArrays2([3, 5, 3, 2, 1], [1, 5, 3, 6, 2], "+")
console.log(operazione2)