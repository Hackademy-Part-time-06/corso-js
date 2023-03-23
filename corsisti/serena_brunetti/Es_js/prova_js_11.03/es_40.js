//Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore.

function divisione(a, b) {
    let numDivisibili = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] % b === 0) {
            numDivisibili.push(a[i])
        }
    }
    return numDivisibili
}

let numDivisibiliOK = divisione([10, 5, 6, 9, 11], 5)
console.log(`I numeri divisibili sono ${numDivisibiliOK}`)

//

function divisione1(a, b) {
    let numDivisibili1 = a.filter((element, index) => {
        return element % b === 0
    })
    return numDivisibili1
}
console.log(divisione1([10, 5, 6, 9, 11], 5))
