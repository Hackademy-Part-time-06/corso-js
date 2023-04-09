console.log("script.js caricato!")

// ! Esercizio 17
console.group("VOTO")

let voto = +"29"
let votoParlante = ""

if (voto < 18) {
    votoParlante = "Insufficiente"
}
else if (voto >= 18 && voto < 21) {
    votoParlante = "Sufficiente"
}
else if (voto >= 21 && voto < 24) {
    votoParlante = "Buono"
}
else if (voto >= 24 && voto < 27) {
    votoParlante = "Distinto"
}
else if (voto >= 27 && voto <= 29) {
    votoParlante = "Ottimo"
}
else if (voto === 30) {
    votoParlante = "Eccellente"
}
else {
    votoParlante = "Voto non valido"
}

console.log(`Il voto corrispondente a ${voto} è uguale a "${votoParlante.toUpperCase()}"`)

console.groupEnd()


// ! Esercizio 18
console.group("TABELLINA")

let numeroInserito = +"2"

let stringa = ""

for (let i = 0; i <= 10; i++) {
    let risultatoTabellina = numeroInserito * i
    stringa = stringa + risultatoTabellina + " "
}

console.log(`Tabellina del ${numeroInserito}: ${stringa}`)

console.groupEnd()


// ! Esercizio 19
console.group("PASSWORD")

let password = "Alberto2000!"

let lunghezzaMinimaRispettata = false
let lunghezzaMassimaRispettata = false

if (password.length < 6 && password.length > 20) {
    lunghezzaMinimaRispettata = true
    lunghezzaMassimaRispettata = true
}
else {
    console.log(`ATTENZIONE: Inserisci una password di almeno 6 caratteri e non più di 20 caratteri.`)
}

let caratteriSpecialiPresenti = false

for (let i = 0; i < password.length; i++) {
    let singoloCarattere = password.charAt(i)

    if (singoloCarattere === "!" || singoloCarattere === "_" || singoloCarattere === "-") {
        let caratteriSpecialiPresenti = true
    }
    else {
        console.log(`ATTENZIONE: Inserisci una password con almeno uno dei seguenti carattere speciale: "!", "_", "-"`)
    }
}


let stringaNumeri = "0123456789"
let numeriPresenti = false


for (let i = 0; i < password.length; i++) {
    let singoloCarattereNumerico = password.charAt(i)

    if (stringaNumeri.includes(singoloCarattereNumerico)) {
        let numeriPresenti = true
    }
    else {
        console.log(`ATTENZIONE: Inserisci una password con almeno un numero`)
    }
}


if (lunghezzaMinimaRispettata && lunghezzaMassimaRispettata && carattereSpecialiPresenti && numeriPresenti) {
    console.log("PASSWORD CORRETTAMENTE INSERITA")
}
else {
    console.error("Password non correttamente inserita")
}

console.groupEnd()


// ! Esercizio 20
console.group("NUMERO DI TELEFONO OFFUSCATO")

let numeroDiTelefono
let numeroDiTelefonoValido = false
let caratteriConsentiti = "0123456789 +"

while(!numeroDiTelefonoValido) {
    numeroDiTelefono = "+39 345 92 92 993"

    let caratteriNonConsentitiPresenti = false

    for(let i = 0; i < numeroDiTelefono.length; i++) {
        let carattereSingolo = numeroDiTelefono.charAt(i)

        if(!caratteriConsentiti.includes(carattereSingolo)) {
            caratteriNonConsentitiPresenti = true
        }
    }

    if(caratteriNonConsentitiPresenti) {
        numeroDiTelefonoValido = false

        console.error("Hai inserito dei caratteri non validi! Riprova")
    }
    else {
        numeroDiTelefonoValido = true
    }

    console.log("Numero di telefono valido:", !caratteriNonConsentitiPresenti)
}

let parteDiNumeroVisibile = numeroDiTelefono.slice(-3)
let numeroCaratteriDaSostituire = numeroDiTelefono.length - 3
let numeriOffuscati = ""

for(let i = 0; i < numeroCaratteriDaSostituire; i++) {
    let carattereSingolo = numeroDiTelefono.charAt(i)

    if(carattereSingolo === " ") {
        numeriOffuscati += " "
    }
    else {
        numeriOffuscati += "*"
    }
}

numeriOffuscati = numeriOffuscati + parteDiNumeroVisibile

console.log("Numero inserito =", numeriOffuscati)

console.groupEnd()


// ! Esercizio 21
console.group("PARTITA A DADI")

let numeroTiri = 7
let totaleGiocatore1 = 0
let totaleGiocatore2 = 0

for (let i = 0; i < numeroTiri; i++) {
    let tiroGiocatore1 =  Math.floor(Math.random() * 6) + 1
    let tiroGiocatore2 =  Math.floor(Math.random() * 6) + 1

    totaleGiocatore1 = totaleGiocatore1 + tiroGiocatore1
    totaleGiocatore2 = totaleGiocatore2 + tiroGiocatore2
}

if (totaleGiocatore1 > totaleGiocatore2) {
    console.log(`Ha vinto il Giocatore 1 col punteggio di ${totaleGiocatore1} a ${totaleGiocatore2}`)
}
else if (totaleGiocatore1 === totaleGiocatore2) {
    console.log(`Pareggio col punteggio di ${totaleGiocatore1}`)
}
else {
    console.log(`Ha vinto il Giocatore 2 col punteggio di ${totaleGiocatore2} a ${totaleGiocatore1}`)
}

console.groupEnd()

// ! Esercizio 22

console.group("PARTITA A D&D")

let facceDado = 5
let giocatore1numMigliore = 0
let giocatore2numMigliore = 0

let lanciTotali = 5
let vincitore

for (let i = 0; i < lanciTotali; i++) {
    let num1 = Math.floor(Math.random() * facceDado) + 1
    let num2 = Math.floor(Math.random() * facceDado) + 1

    console.log(`Lancio n°${i + 1} - risultato "Giocatore 1": ${num1}, risultato "Giocatore 2": ${num2}`)

    if (num1 > giocatore1numMigliore) {
        giocatore1numMigliore = num1
    }

    if (num2 > giocatore2numMigliore) {
        giocatore2numMigliore = num2
    }
}

console.log(`Risultato migliore "Giocatore 1": ${giocatore1numMigliore}, risultato migliore "Giocatore 2": ${giocatore2numMigliore}`)


if (giocatore1numMigliore === giocatore2numMigliore) {
    let rilancia = true
    while (rilancia) {
        console.log('Risultato pari! Si rilancia')

        let num1 = Math.floor(Math.random() * facceDado) + 1
        let num2 = Math.floor(Math.random() * facceDado) + 1

        console.log(`Nuovo lancio - risultato giocatore 1: ${num1}, risultato giocatore 2: ${num2}`)

        if (num1 !== num2) {
            if (num1 > num2) {
                vincitore = 1
            }
            else {
                vincitore = 2
            }

            rilancia = false
        }
    }
}
else {
    if (giocatore1numMigliore > giocatore2numMigliore) {
        vincitore = 1
    }
    else {
        vincitore = 2
    }
}

console.log("Il vincitore è il giocatore numero:", vincitore);

console.groupEnd()