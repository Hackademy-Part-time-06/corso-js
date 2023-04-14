"use strict"
console.log("script.js caricato!")


// ! Esercizio 60
console.group("BIGLIETTI DEL CINEMA")

function costoBigliettiCinema(numeroBiglietti, costoSingolo) {
    let totale = numeroBiglietti * costoSingolo
    return totale
}

console.log(`Il costo totale dei biglietti è: €${costoBigliettiCinema(2, 10)}`)

console.groupEnd()


// ! Esercizio 61
console.group("BIGLIETTI DEL CINEMA SCONTATI")

function costoBigliettiCinemaConSconto(numeroBiglietti, costoSingolo, sconto) {
    let totaleScontato = ((numeroBiglietti * costoSingolo) / 100) * (100 - sconto)
    return totaleScontato
}

console.log(`Il costo totale, già scontato, dei biglietti è: €${costoBigliettiCinemaConSconto(2, 10, 10)}`)

console.groupEnd()


// ! Esercizio 62
console.group("BIGLIETTI DEL CINEMA SETTIMANALI")

function costoBigliettiCinemaConScontoSettimanale(numeroBiglietti, costoSingolo, giornoSettimana) {
    switch(giornoSettimana.toLowerCase()) {
        case "lunedì":
        case "martedì":
        case "mercoledì":
        case "giovedì":
        case "venerdì":
            return console.log(`Il costo totale, già scontato, dei biglietti per ${giornoSettimana} è: €${costoBigliettiCinemaConSconto(numeroBiglietti, costoSingolo, 10)}`)
        case "sabato":
        case "domenica":
            return console.log(`Il costo totale, già scontato, dei biglietti per ${giornoSettimana} è: €${costoBigliettiCinemaConSconto(numeroBiglietti, costoSingolo, 5)}`)
    }
}

costoBigliettiCinemaConScontoSettimanale(2, 10, "Lunedì")

console.groupEnd()


// ! Esercizio 63   BOHHHHHH!!!!!
console.group("PACCHETTO BIGLIETTI DEL CINEMA")

function scontoPacchettoBigliettiCinema(numeroBiglietti, costoSingolo) {
    let scontoPacchetto
    if (numeroBiglietti >= 3) {
        scontoPacchetto = ((numeroBiglietti * costoSingolo) / 100) * (100 - 5)
        return scontoPacchetto
    }
    else if (numeroBiglietti >= 50) {
        scontoPacchetto = ((numeroBiglietti * costoSingolo) / 100) * (100 - 10)
        return scontoPacchetto
    }

    return scontoPacchetto
}

console.log(`Il costo totale, già scontato, del pacchetto di biglietti è: €${scontoPacchettoBigliettiCinema(5, 10)}`)

console.groupEnd()


// ! Esercizio 64
console.group("STAMPA SCONTRINO CINEMA")

function stampaScontrinoCinema(biglietti, giornoFilm) {
    console.log(`N° BIGLIETTI: ${biglietti} \nGIORNO: ${giornoFilm}`)
}

stampaScontrinoCinema(2, "Lunedì")

console.groupEnd()


// ! Esercizio 65
console.group("URL LIBRO")

function libro(titolo, autore) {
    return [titolo, autore]
}

let libroInserito = libro("Il Signore degli Anelli", "Tolkien")
console.log(libroInserito)

let url = `www.lamiasuperlibreria.aulab/${libroInserito[1].toLowerCase().replaceAll(" ", "-")}/${libroInserito[0].toLowerCase().replaceAll(" ", "-")}.html`
console.log(url)

let tagAnchor = `<a href="${url}"`
console.log(tagAnchor)

console.groupEnd()


// ! Esercizio 66
console.group("SASSO CARTA FORBICE")

function sceltaCasuale() {
    let scelta = ["sasso", "carta", "forbice"];
    scelta.sort(() => Math.random() - 0.5);
    let risultatoScelta = scelta[0]
    return risultatoScelta
}

function sassoCartaForbice(numeroPartite) {
    for (let i = 0; i < numeroPartite; i++) {
        let mano1 = sceltaCasuale()
        console.log("Giocatore 1:", mano1)
        let mano2 = sceltaCasuale()
        console.log("Giocatore 2:", mano2)

        if (mano1 === "carta" && mano2 === "sasso") {
            console.log("Giocatore1 ha vinto questa giocata!")
        }

        else if (mano1 === "sasso" && mano2 === "forbice") {
            console.log("Giocatore1 ha vinto questa giocata!")
        }

        else if (mano1 === "forbice" && mano2 === "carta") {
            console.log("Giocatore1 ha vinto questa giocata!")
        }

        else if (mano1 === "carta" && mano2 === "forbice") {
            console.log("Giocatore2 ha vinto questa giocata!")
        }

        else if (mano1 === "forbice" && mano2 === "sasso") {
            console.log("Giocatore2 ha vinto questa giocata!")
        }

        else if (mano1 === "sasso" && mano2 === "carta") {
            console.log("Giocatore2 ha vinto questa giocata!")
        }

        else if (mano1 === mano2) {
            console.log("Questa giocata è finita in Pareggio!")
        }
    }
}

sassoCartaForbice(1)

console.groupEnd()


// ! Esercizio 67
console.group("SASSO CARTA FORBICE - NO PAREGGIO")

function sassoCartaForbiceNoPareggio(numeroPartite) {
    let condizioneVera = true

    while(condizioneVera) {
        let mano1 = prompt("Sasso, Carta o Forbice?").toLowerCase()
        console.log("Giocatore 1:", mano1)
        let mano2 = sceltaCasuale()
        console.log("Giocatore 2:", mano2)

        if (mano1 === "carta" && mano2 === "sasso") {
            console.log("Giocatore1 ha vinto questa giocata!")
            condizioneVera = false
        }

        else if (mano1 === "sasso" && mano2 === "forbice") {
            console.log("Giocatore1 ha vinto questa giocata!")
            condizioneVera = false
        }

        else if (mano1 === "forbice" && mano2 === "carta") {
            console.log("Giocatore1 ha vinto questa giocata!")
            condizioneVera = false
        }

        else if (mano1 === "carta" && mano2 === "forbice") {
            console.log("Giocatore2 ha vinto questa giocata!")
            condizioneVera = false
        }

        else if (mano1 === "forbice" && mano2 === "sasso") {
            console.log("Giocatore2 ha vinto questa giocata!")
            condizioneVera = false
        }

        else if (mano1 === "sasso" && mano2 === "carta") {
            console.log("Giocatore2 ha vinto questa giocata!")
            condizioneVera = false
        }

        else if (mano1 === mano2) {
            console.log("Questa giocata è finita in Pareggio!")
        }
    }

}

sassoCartaForbiceNoPareggio(1)

console.groupEnd()


// ! Esercizio 68
console.group("SASSO CARTA FORBICE - MOLTI ROUND")

let totalePunteggioGiocatore1 = 0
let totalePunteggioGiocatore2 = 0

function sassoCartaForbiceRound(numeroPartite) {
    for (let i = 0; i < numeroPartite; i++) {
        let mano1 = sceltaCasuale()
        console.log("Giocatore 1:", mano1)
        let mano2 = sceltaCasuale()
        console.log("Giocatore 2:", mano2)

        if (mano1 === "carta" && mano2 === "sasso") {
            totalePunteggioGiocatore1 = totalePunteggioGiocatore1 + 1
            console.log("Giocatore1 ha vinto questa giocata!")
        }

        else if (mano1 === "sasso" && mano2 === "forbice") {
            totalePunteggioGiocatore1 = totalePunteggioGiocatore1 + 1
            console.log("Giocatore1 ha vinto questa giocata!")
        }

        else if (mano1 === "forbice" && mano2 === "carta") {
            totalePunteggioGiocatore1 = totalePunteggioGiocatore1 + 1
            console.log("Giocatore1 ha vinto questa giocata!")
        }

        else if (mano1 === "carta" && mano2 === "forbice") {
            totalePunteggioGiocatore2 = totalePunteggioGiocatore2 + 1
            console.log("Giocatore2 ha vinto questa giocata!")
        }

        else if (mano1 === "forbice" && mano2 === "sasso") {
            totalePunteggioGiocatore2 = totalePunteggioGiocatore2 + 1
            console.log("Giocatore2 ha vinto questa giocata!")
        }

        else if (mano1 === "sasso" && mano2 === "carta") {
            totalePunteggioGiocatore2 = totalePunteggioGiocatore2 + 1
            console.log("Giocatore2 ha vinto questa giocata!")
        }

        else if (mano1 === mano2) {
            console.log("Questa giocata è finita in Pareggio!")
        }
    }
}

sassoCartaForbiceRound(3)

if (totalePunteggioGiocatore1 > totalePunteggioGiocatore2) {
    console.log(`Il Giocatore1 ha vinto questa partita a Sasso, Carta, Forbice! ${totalePunteggioGiocatore1} a ${totalePunteggioGiocatore2}`)
}

else if (totalePunteggioGiocatore1 < totalePunteggioGiocatore2) {
    console.log(`Il Giocatore2 ha vinto questa partita a Sasso, Carta, Forbice! ${totalePunteggioGiocatore2} a ${totalePunteggioGiocatore1}`)
}

else if (totalePunteggioGiocatore1 == totalePunteggioGiocatore2) {
    console.log(`Questa partita è finita in pareggio! ${totalePunteggioGiocatore1} a ${totalePunteggioGiocatore2}`)
}

console.groupEnd()