//Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi. Se non c'è nulla da sommare, la somma è predefinita a 0.

function positiveN(a) {
    let sumPositive = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            sumPositive = sumPositive + a[i]
        }
    }
    return sumPositive
}
let sumPositiveOK = positiveN([-4, -5, -6, -2])
console.log(`La somma dei numeri positivi è ${sumPositiveOK}`)

//

function positiveNumbers(a) {
    let sommaTot = 0
    let numeriPos = a.filter((element, index) => {
        return element >= 0
    })
    let sommaNum = numeriPos.reduce((result, element) => {
        return result = result + element
    }, 0)
    if (numeriPos === undefined) {
        sommaTot = 0
    }
    else {
        return sommaTot = sommaNum
    }
}
console.log(positiveNumbers([-3, -2, 7, -2, -1]))