/*Esercizio 40

Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore.-
([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]*/

let n = [1,2,3,4,5,6,7,8,9,10]

console.log(find_divisible_numbers(n, 2));

function find_divisible_numbers(array, div) {
    let divisibles = new Array
    
    divisibles = array.filter(x => {return !(x % div)})

    return divisibles
}