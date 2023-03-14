    //Eserc 17

/* console.group("VOTO")

let votoParlante = ""

let voto =  prompt("Che voto hai preso?");
voto = +voto;

if (voto < 18) {
    votoParlante = "insufficiente"
}
else if (voto >= 18 && voto < 21) {
    votoParlante = "sufficiente"
}
else if (voto >= 21 && voto < 24) {
    votoParlante = "buono"
}
else if (voto >= 24 && voto < 27) {
    votoParlante = "distinto"
}
else if (voto >= 27 && voto <= 29) {
    votoParlante = "ottimo"
}
else if (voto === 30){
    votoParlante = "eccellente"
}
else {
    votoParlante = "non valido"
}
console.log(`Il voto corrispondente a: ${voto} ed è ${votoParlante.toUpperCase()}`);

console.groupEnd()
*/


    //Eserc 18

/*console.group("TABELLINA")

let numeroDiPartenza = prompt("Tabbellina del:")
numeroDiPartenza = +numeroDiPartenza

console.log(`Il numero inserito dall'utente è: ${numeroDiPartenza}`)

for (let i = 0; i <= 10; i++) {
    let risultato = numeroDiPartenza * i;
    console.log(risultato)
    console.log(`Numero di partenza: ${numeroDiPartenza} * iteratore ${i} = ${risultato}`)
}
console.groupEnd()
*/

    //Eserc 19
/*
console.group("PASSWORD")

let password = prompt("Inserisci la tua password:")
console.log("La password inserita è ", password)
console.log("Lunghezza password:", password.length)


console.log("Controllo lunghezza minima")
let lunghezzaMinimaRispettata = true
if (password.length < 6) {
    lunghezzaMinimaRispettata = false
}

console.log("Lunghezza minima rispettata:", lunghezzaMinimaRispettata)


console.log("Controllo lunghezza massima")
let lunghezzaMassimaRispettata = true
if (password.length > 20) {
    lunghezzaMassimaRispettata = false
}

console.log("Lunghezza masisma rispettata:", lunghezzaMassimaRispettata)


console.log("Controllo presenza caratteri speciali")
let caratteriSpecialiPresenti = false
let stringaCaratteriSpeciali = "!_-"

for (let i = 0; i < password.length; i++) {
    let singoloCarattere = password.charAt(i)
    console.log("Carattere da analizzare: ", singoloCarattere)
    
    
    if (singoloCarattere === "!" || singoloCarattere === "_" || singoloCarattere === "-") {
        caratteriSpecialiPresenti = true
    }
    

    if (stringaCaratteriSpeciali.includes(singoloCarattere)) {
        caratteriSpecialiPresenti = true

    }
}

console.log("Controllo presenza caratteri speciali rispettato?", caratteriSpecialiPresenti)


console.log("Controllo presenza numeri")
let numeriPresenti = false
let stringaNumeri = "0123456789"

for (let i = 0; i < password.length; i++) {
    let singoloCarattere = password.charAt(i)
    console.log("Carattere da analizzare: ", singoloCarattere)
    
    
    if (stringaNumeri.includes(singoloCarattere)) {
        numeriPresenti = true
    }
    

    if (!isNaN(singoloCarattere)) {
        numeriPresenti = true
    }
}

console.log("Controllo presenza numeri rispettato?", numeriPresenti)

if (lunghezzaMinimaRispettata && lunghezzaMassimaRispettata && caratteriSpecialiPresenti && numeriPresenti) {
    console.log("PASSWORD CORRETTAMENTE INSERITA!")
}
else {
    console.error("PASSWORD SCORRETTAMENTE INSERITA")
}

console.groupEnd

*/


    //Eserc 20

console.group("NUMERODITELEFONO")

let numeroDiTelefono
let numeroDiTelefonoValido = false

while (!numeroDiTelefonoValido) {

    numeroDiTelefono = prompt("Numero di telefono:")
    let caratteriConsentiti = "0123456789 +"
    let caratteriNonConsentitiPresenti = false

    for (let i = 0; i < numeroDiTelefono.length; i++) {
        let carattereSingolo = numeroDiTelefono.charAt(i)

        if (!caratteriConsentiti.includes(carattereSingolo)) {
            caratteriNonConsentitiPresenti = true

            alert("Hai inserito dei caratteri errati, riprova!")
        }
    }

    if (caratteriNonConsentitiPresenti) {
        numeroDiTelefonoValido = false
    }
    else {
        numeroDiTelefonoValido = true
    }
    console.log("Numero di telefono valido:", !caratteriNonConsentitiPresenti)
}


let parteDiNumeroVisibile = numeroDiTelefono.slice(-3)
let numeroCaratteriDaSostituire = numeroDiTelefono.length - 3
let numeriOffuscati = ""

for (let i = 0; i < numeroCaratteriDaSostituire; i++) {
    let carattereSingolo = numeroDiTelefono.charAt(i)

    if (carattereSingolo === " ") {
        numeriOffuscati += " "
    }
    else {
        numeriOffuscati += "*"
}
    }

numeriOffuscati = numeriOffuscati + parteDiNumeroVisibile

alert("Numero inserito = " + numeriOffuscati)

console.log("Esco dal while ")

console.groupEnd


    //Eserc 21 + o -

let numeroLanci = 5
let punteggioTotaleGiocatore1 = 0
let punteggioTotaleGiocatore2 = 0

for (let i = 0; i < numeroLanci; i++) {
    let valoreDado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    let valoreDado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    console.log("Dado lanciato! *SWING*")
    console.log("Dado giocatore 1: ",valoreDado1)
    console.log("Dado giocatore 2: ",valoreDado2)

    punteggioTotaleGiocatore1 = punteggioTotaleGiocatore1 + valoreDado1
    punteggioTotaleGiocatore2 = punteggioTotaleGiocatore2 + valoreDado2
}

console.log("Punteggi totali")
console.log("Totale giocatore 1: ", punteggioTotaleGiocatore1)
console.log("Totale giocatore 1: ", punteggioTotaleGiocatore2)

if (punteggioTotaleGiocatore1 === punteggioTotaleGiocatore2) {
    alert("Patta.")
}
else if (punteggioTotaleGiocatore1 > punteggioTotaleGiocatore2) {
    alert("Giocatore 1 VINCE!")
}
else {
    alert("Giocatore 2 VINCE!")
}