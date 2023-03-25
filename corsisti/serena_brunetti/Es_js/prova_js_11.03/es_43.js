//Dato un array di numeri interi, creare una funzione che restituisca un nuovo array con ogni valore raddoppiato.

function double(a) {
    let doubleN = []
    for (let i = 0; i < a.length; i++) {
        doubleN.push(a[i] * 2)
    }
    return doubleN
}
let doubleNumber = double([3, 5, 7, 9])
console.log(`Il doppio dei numeri inseriti è: ${doubleNumber}`)

//

let arrayNum = [2, 3, 5, 9]
let numDoppio = arrayNum.map((valore, index) => {
    return valore = valore * 2
})
console.log(numDoppio)