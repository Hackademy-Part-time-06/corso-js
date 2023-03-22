//Scrivi una funzione che prenda in input una stringa e la restituisca capovolta
function morningstar(parola = "") {
    let parolaContr = ""
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaContr = parolaContr + parola.charAt(i)
    }
    return parolaContr
}
let parolaAcaso = morningstar(prompt("Inserisci una parola e ti restituirò il suo contrario"))
let contrarioParol = morningstar(console.log(parolaAcaso))