console.log("Esercizio 31")
console.log("Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.")


let n1 =prompt("Inserisci il primo valore:")
let n2 =prompt("Inserisci il secondo valore:")

function verificaValore(){
    if (n1 === n2)
    alert("TRUE")

    else
    alert("FALSE")
    
}

verificaValore();