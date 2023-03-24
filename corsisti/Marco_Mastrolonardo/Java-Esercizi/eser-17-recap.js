/*
//ESERCIZIO 60
function importo(numerobiglietti, costosingolo){
    let totale = numerobiglietti * costosingolo
    return totale
}
console.log(importo(2, 5))
*/
/*
//ESERCIZIO 61

function importo(numBiglietti, costoSingolo, sconto){
let totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * sconto)
return totale
}
console.log(importo(2, 10, 10))
*/
/*
ESERCIZIO 62

function importo(numBiglietti, costoSingolo, giornosettimana){
    let totale
    switch (giornosettimana) {
        case "lunedi":
        case "martedi":
            totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * 10)
            break;
        case "mercoledi":
            totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * 20)
            break;
    }
    return totale
}
    console.log(importo(2, 10, "lunedi"))
*/
/*
//ESERCIZIO 63

//Test1

function scontoulteriore(totaledamodificare){
    let risultato = totaledamodificare - (totaledamodificare / 100 * 20)
    
    return risultato
}
function prezzototale(numBiglietti, costoSingolo, giornosettimana, callback) {
    let totale
    switch (giornosettimana) {
        case "lunedi":
        case "martedi":
            totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * 10)
            break;
        case "mercoledi":
            totale = numBiglietti * costoSingolo - (numBiglietti * costoSingolo / 100 * 20)
            break;
    }
    if (typeof callback === "function" && numBiglietti >=3){
        totale = callback(totale);
    }
    return totale
}
console.log("prezzo ulteriormente scontato del 20% solo se si hanno numBiglietti >= 3", prezzototale(3, 10, "lunedi", scontoulteriore))

console.log("prezzo senza secondo sconto",prezzototale(3, 10, "lunedi"))
*/

/*
//Test2

function calcolosconto(totale, percentualesconto){
        
    let valoresconto = (totale / 100) * percentualesconto;
    let prezzofinale = totale - valoresconto;
        
    return prezzofinale
}
//sconto del 10% se numBiglietti>=3 del 20% se numBiglietti>=6
function scontoperbiglietto(totale, nunBiglietti){
    if(nunBiglietti>=3){
        totale = calcolosconto(totale, 10)
    }
    else if (nunBiglietti>= 6){
        totale = calcolosconto(totale, 20)
    }
    return totale
}
function prezzototale(numBiglietti, costoSingolo, giornosettimana, callback) {
    let prezzofinale = numBiglietti * costoSingolo
    console.log("prezzo non scontato", prezzofinale)
    switch (giornosettimana) {
        case "lunedi":
        case "martedi":
            prezzofinale = calcolosconto(prezzofinale, 10)
            console.log("totale scontato in base al giorno", prezzofinale)
            break;
        case "mercoledi":
            prezzofinale = calcolosconto(prezzofinale, 20)
            console.log("totale scontato in base al giorno", prezzofinale)
            break;
    }
    if (typeof callback === "function"){
        prezzofinale = callback(prezzofinale, numBiglietti);
    }
    return prezzofinale
}
let prima = prezzototale(3, 10, "lunedi", scontoperbiglietto)

let seconda = prezzototale(6, 10, "martedi", scontoperbiglietto)

let terza = prezzototale(2, 10, "mercoledi", scontoperbiglietto)
*/
//ESERCIZIO 64
/*
function scontrino(totale) {
    console.log("Totale da pagare con sconto per numeri biglietti è: " + totale + "€");
}
scontrino(prima)
scontrino(seconda)
scontrino(terza)
*/
/*
//ESERCIZIO 65

function stringa(titolo, autore){
    let base = "www.lamiasuperlibreria.aulab/"
    autore = autore.toLowerCase()
    titolo = titolo.toLowerCase().replaceAll(" ","-")
    let Url = `${base}${autore}/${titolo}.html`
    let tag = `<a href="${Url}"></a>`
    return tag
}
console.log(stringa("Il Signore Degli Anelli", "Tolkien"))
*/
//ESERCIZIO 66-67-68
/*
function numerorandom(){
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1
}
function simbolo(){
    let numero = numerorandom()
    let result = ""
    switch (numero){
        case 1:
            result = "Carta"
            break;
        case 2:
            result = "Sasso"
            break;
        case 3:
            result = "Forbice"
            break;
    }
    return result
}
function chièilvincitore(mano1, mano2){
    let vincitore
    switch(mano1){
        case "Carta":
            switch(mano2){
                case "Carta":
                    vincitore = "Pareggio"
                    break;
                case "Sasso":
                    vincitore = "Giocatore1"
                    break;
                case "Forbici":
                    vincitore = "Giocatore2"
                    break;
            }
            break;
        case "Sasso":
            switch(mano2){
                case "Carta":
                    vincitore = "Giocatore2"
                    break;
                case "Sasso":
                    vincitore = "Pareggio"
                    break;
                case "Forbici":
                    vincitore = "Giocatore1"
                    break;
            }
            break;
        case "Forbice":
            switch(mano2){
                case "Carta":
                    vincitore = "Giocatore1"
                    break;
                case "Sasso":
                    vincitore = "Giocatore2"
                    break;
                case "Forbici":
                    vincitore = "Pareggio"
                    break;
            }
            break;
    }
    return vincitore
}
function Morra(){
    let vincitore
    let pareggio = true
    do{
        let mano1 = simbolo()
        let mano2 = simbolo()
        console.log(mano1)
        console.log(mano2)
    
        let vincitore = chièilvincitore(mano1, mano2)
        if(vincitore !== "Pareggio"){
            pareggio = false
        }
        console.log("Vincitore: ", vincitore)
    }
    while (pareggio);

    return vincitore
}
function piupartite(){
    let vittorie1 = 0
    let vittorie2 = 0
    let continua = true 
    while (continua){
        let vincitore = Morra()
        if(vincitore === "Giocatore1"){
            vittorie1++
        }
        else{
            vittorie2++
        }

        if(vittorie1 === 3 || vittorie2 === 3){
            continua = false
        }
    }
    console.log("vittorie1", vittorie1)
    console.log("vittorie2", vittorie2)
}
piupartite()
*/






    

