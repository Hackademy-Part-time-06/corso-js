/* esercizio 60

function biglietteria (numero, costo) {
    totale = numero * costo
    console.log(totale)
}

biglietteria(2, 10)
*/

/*  esercizio 61

function biglietteria (numero, costo, sconto) {
    totale = numero * costo
    totaleSconto = totale * sconto/100
    console.log(totale - totaleSconto)
}

biglietteria(2, 10, 10)
*/

/* esercizio 62 e 64

function biglietteria (numero, costo, giorno) {
    totale = numero * costo
    if (giorno === "lunedi" || giorno === "martedi") {
        totaleSconto = totale * 10/100
        console.log(totale - totaleSconto)
    }
    else if (giorno === "mercoledi") {
        totaleSconto = totale * 20/100
        console.log(totale - totaleSconto)
    }
    else {
        totaleSconto = totale
        console.log(totaleSconto)
    }
    console.log(`Persone: ${numero} - prezzo singolo: ${costo}euro - totale: ${totale} - Totale scontato: ${totaleSconto}`)
}

biglietteria(2, 10, "mercoledi")
*/


// esercizio 63
function scontoExtra (numero) {
    let sconto = 0
    if (numero >= 4 && numero < 7) {
        sconto = 5
    }
    else if (numero >= 7) {
        sconto = 10
    }
    return sconto
}
function biglietteria (numero, costo, giorno) {
    sconto = scontoExtra(numero)
    totale = numero * costo
    if (giorno === "lunedi" || giorno === "martedi") {
        totaleSconto = totale * (sconto + 10)/100 
        console.log(totale - totaleSconto)
    }
    else if (giorno === "mercoledi") {
        totaleSconto = totale * (sconto + 20)/100
        console.log(totale - totaleSconto)
    }
    else {
        totaleSconto = totale
        console.log(totaleSconto)
    }
    console.log(`MULTISALA MARGHERITA \nPersone: ${numero} \nPrezzo singolo biglietto: ${costo}euro \nTotale: ${totale} \nSconto applicato: ${totaleSconto}euro \nBUONA VISIONE! \nGodetevi i pop corn <3`)
}

biglietteria(6, 10, "mercoledi")

/* esercizio 65

function libreria (titolo, autore) {
    console.log(`www.lamiasuperlibreria/aulab/${autore.toLowerCase().replaceAll(" ", "-")}/${titolo.toLowerCase().replaceAll(" ", "-")}.html`)
}

libreria("Il Signore degli anelli", "Tolkien")
*/


/* esercizio 66

function numeroRandom (){
    let array = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * array.length)
    return array[random]
}

function partita () {
    let giocatore1 = numeroRandom()
    let giocatore2 = numeroRandom()
    console.log(giocatore1, giocatore2)
    if (giocatore1=="forbice" && giocatore2=="carta" || giocatore1=="sasso" && giocatore2 == "forbice" || giocatore1=="carta" && giocatore2=="sasso"){
        console.log("GIOCATORE1 VINCE!")
    }
    else if (giocatore2=="forbice" && giocatore1=="carta" || giocatore2=="sasso" && giocatore1 == "forbice" || giocatore2=="carta" && giocatore1=="sasso"){
        console.log("GIOCATORE2 VINCE!")
    }
    else if (giocatore1==giocatore2) {
        console.log("PAREGGIO")
    }
}

partita()
*/

/* esercizio 67

function numeroRandom (){
    let array = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * array.length)
    return array[random]
}

function partita () {
    let giocatore1 = numeroRandom()
    let giocatore2 = numeroRandom()
    console.log(giocatore1, giocatore2)
    while (giocatore1===giocatore2){
            giocatore1 = numeroRandom()
            giocatore2 = numeroRandom()
            console.log("Tira di nuovo: ", giocatore1, giocatore2)
    }
    if (giocatore1=="forbice" && giocatore2=="carta" || giocatore1=="sasso" && giocatore2 == "forbice" || giocatore1=="carta" && giocatore2=="sasso"){
        console.log("GIOCATORE1 VINCE!")
    }
    else if (giocatore2=="forbice" && giocatore1=="carta" || giocatore2=="sasso" && giocatore1 == "forbice" || giocatore2=="carta" && giocatore1=="sasso"){
        console.log("GIOCATORE2 VINCE!")
    }
    
}

partita()
*/


/* esercizio 68

function numeroRandom (){
    let array = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * array.length)
    return array[random]
}

function partita () {
    let tot1 = 0
    let tot2 = 0
    while (tot1<3 && tot2<3) {
        giocatore1 = numeroRandom()
        giocatore2 = numeroRandom()
        while (giocatore1 === giocatore2) {
            giocatore1 = numeroRandom()
            giocatore2 = numeroRandom()
            console.log("Tira di nuovo: ", giocatore1, giocatore2)
        }
        if (giocatore1=="forbice" && giocatore2=="carta" || giocatore1=="sasso" && giocatore2 == "forbice" || giocatore1=="carta" && giocatore2=="sasso"){
            tot1+=1
            console.log("GIOCATORE1 VINCE!", tot1)
        }
        else if (giocatore2=="forbice" && giocatore1=="carta" || giocatore2=="sasso" && giocatore1 == "forbice" || giocatore2=="carta" && giocatore1=="sasso"){
            tot2+=1
            console.log("GIOCATORE2 VINCE!", tot2)
        }
    }
    if (tot1==3) {
        console.log("GIOCATORE1 VINCE TUTTO")
    }
    else if(tot2==3) {
        console.log("GIOCATORE2 VINCE TUTTO")
    }
}
partita()
*/