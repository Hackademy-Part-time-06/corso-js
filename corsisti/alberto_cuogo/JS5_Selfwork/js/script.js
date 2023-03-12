console.log("script.js caricato!")

// ! Esercizio 31
console.group("VALORI IDENTICI")

function comparazione(n, m) {

    let comparazioneOutput = false 

    if (n === m) {
        comparazioneOutput = true
    }

    return comparazioneOutput
}

let test1 = comparazione(2, 3)         // Come dargli un .toUpperCase???
let test2 = comparazione(2, "2")
let test3 = comparazione(2, 2)

console.log(`I valori nel Test 1 sono identici? ${test1}`)
console.log(`I valori nel Test 2 sono identici? ${test2}`)
console.log(`I valori nel Test 3 sono identici? ${test3}`)

console.groupEnd()


// ! Esercizio 32
console.group("STRINGA CAPOVOLTA")

function toCapovolta(stringaDaModificare) {
    let risultato = stringaDaModificare.split("").reverse().join("")

    return risultato
}

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }  

console.log(`Riconosci questa parola capovolta? ${toCapovolta("Ciccio Pasticcio")}`)
console.log(`Questa è fatta con un for quindi senza Array: ${reverseString("Ciccio Pasticcio")}`)

console.groupEnd()


// ! Esercizio 33
console.group("NUMERO RANDOMICO")

function numeroRandomico(n=1) {
    let numeroRandom = Math.floor(Math.random() * (n - 1 + 1) + 1)

    return numeroRandom
}

console.log(`Ecco un numero randomico: ${numeroRandomico(10)}`)

console.groupEnd()

// ! Esercizio 34
console.group("PARTITA A DADI")

let totalePunteggioGiocatore1 = 0
let totalePunteggioGiocatore2 = 0

function partitaDadi(numeroLanci) {
    for (let i = 0; i < numeroLanci; i++) {
        let dado1 = numeroRandomico(6)
        console.log(`Giocatore1 = ${dado1}`)
        let dado2 = numeroRandomico(6)
        console.log(`Giocatore2 = ${dado2}`)

        if (dado1 > dado2) {
            totalePunteggioGiocatore1 = totalePunteggioGiocatore1 + 1
            console.log("Giocatore1 ha vinto questa giocata!")
        }

        else if (dado2 > dado1) {
            totalePunteggioGiocatore2 = totalePunteggioGiocatore2 + 1
            console.log("Giocatore2 ha vinto questa giocata!")
        }

        else if (dado1 == dado2) {
            console.log("Pareggio!")
        }
    }
}

partitaDadi(2)

if (totalePunteggioGiocatore1 > totalePunteggioGiocatore2) {
    console.log(`Il Giocatore1 ha vinto la partita! ${totalePunteggioGiocatore1} a ${totalePunteggioGiocatore2}`)
}

else if (totalePunteggioGiocatore1 < totalePunteggioGiocatore2) {
    console.log(`Il Giocatore2 ha vinto la partita! ${totalePunteggioGiocatore2} a ${totalePunteggioGiocatore1}`)
}

else if (totalePunteggioGiocatore1 == totalePunteggioGiocatore2) {
    console.log(`Questa partita è finita in pareggio! ${totalePunteggioGiocatore1} a ${totalePunteggioGiocatore2}`)
}

console.groupEnd()

// ! Esercizio 35
console.group("VOTO FANTACALCIO")

function votoFantacalcio(baseVoto, golFatti, assistEffettuati, autogol, ammonizione, espulsione) {

    let risultatoFantacalcio = baseVoto + (golFatti * 3) + (assistEffettuati * 1) + (autogol * -2) + (ammonizione * -1) + (espulsione * - 2)

    return risultatoFantacalcio
}

console.log(`Il risultato è: ${votoFantacalcio(8, 2, 1, 0, 1, 0)}`)

console.groupEnd()


// ! Esercizio 36
console.group("STYLE")

function myLog(messaggio="", categoria="") {

    categoria = categoria.toLowerCase()

    switch(categoria){
        case "titolo":
            console.log('%c' + messaggio, 'background-color: blue;  font-size: 30px; color: white;');
            break
        case "sottotitolo":
            console.log('%c' + messaggio, 'font-size: 20px; color: blue;');
            break
        case "highlight":
            console.log('%c' + messaggio, 'background-color: orange;');
            break
        case "disastro":
            console.log('%c' + messaggio, 'background-color: red;  font-size: 50px; color: white;');
            break
    }
}

myLog("Questo è un TITOLO", "titolo");
myLog("Questo è un SOTTOTITOLO", "sottotitolo");
myLog("Questo è un HIGHLIGHT", "highlight");
myLog("Questo è un DISASTRO", "disastro");

console.groupEnd()

