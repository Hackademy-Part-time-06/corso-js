/*Esercizio 31

Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.
        Esempi:
        Input: n = 2, m = 3
        Output: FALSE
        Input: n = 2, m = '2'
        Output: FALSE
        Input: n = 2, m = 2
        Output: TRUE*/

function is_equal(p1, p2) {
    if (p1 === p2) {
        return true;
    }

    return false;
}

let x = prompt("Inserire primo valore")
let y = prompt("Inserire secondo valore")

if (is_equal(x, y)) {
    console.log("Hai inserito due valori uguali");
}

else {
    console.log("Hai inserito due valori diversi");
}