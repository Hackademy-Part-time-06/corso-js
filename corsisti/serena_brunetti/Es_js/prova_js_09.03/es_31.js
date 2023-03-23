//Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.

function input(argom1, argom2) {
    let boolean = false
    if (argom1 === argom2) {
        boolean = true
    }
    else {
        boolean = false
    }
   return boolean
}

let result = input(10, 10)
console.log(result)
result = input(2, 8)
console.log(result)