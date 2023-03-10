//Eser 31
function funzione(n1, n2){
    if (n1 === n2){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
funzione(2, 3)
funzione(2, "2")
funzione(2, 2)

/*Esercizio 32
function stringacapovolta(stringa){
    //Tramite stringa.split dividiamo la stringa in ogni suo carattere. Ogni carattere diventerà un elemento di un array.Per esempio richiamo la funzione: stringacapovolta("hello") = ['h', 'e', 'l', 'l', 'o']
    let stringaDivisa = stringa.split("")
    console.log(stringaDivisa)
    //Tramite stringaDivisa.reverse() inverto l'ordine degli elementi dell'array
    let caratteriReverse = stringaDivisa.reverse()
    console.log(caratteriReverse)
    //Tramite caratteriReverse.join("") unisco tutti gli elementi dell'array
    let uniscoCaratteri = caratteriReverse.join("")
    console.log(uniscoCaratteri)
    //Ritorno la stringa capovolta
    return uniscoCaratteri
}
stringacapovolta("hello")

//In maniera abbreviata
function stringacapovolta(stringa) {
    let stringaReverse = stringa.split("").reverse().join("")
    console.log(stringaReverse)
}
stringacapovolta("faccia")
*/

/*
ESERCIZIO 33 Generare un numero random fra 1 e numero

function numeroRandom(numero){
    let numeroran = Math.floor(Math.random() * (numero - 1 + 1)+ 1)
    console.log(numeroran)
}
numeroRandom(6)
*/

/*
ESERCIZIO 34 Creare una funzione che simuli n tiri di dadi. n deve essere definito tramite parametro passato in input. Vince il giocatore con il punteggio più alto

let faccedeldado = 6
punteggioPiuAlto1 = 0
punteggioPiuAlto2 = 0
function partitaDandD(numeroTiriaTesta){
    for (let i = 0;i < numeroTiriaTesta;i++) {
        let punteggio1 = Math.floor(Math.random() * (faccedeldado - 1 + 1)+ 1)
        console.log("punteggio1", punteggio1)
        let punteggio2 = Math.floor(Math.random() * (faccedeldado - 1 + 1)+ 1)
        console.log("punteggio2",punteggio2)
        if (punteggio1 > punteggioPiuAlto1) {
            punteggioPiuAlto1 = punteggio1
        }
        else if (punteggio2 > punteggioPiuAlto2) {
            punteggioPiuAlto2 = punteggio2
        }
    }
    console.log("punteggio piu alto giocatore 1", punteggioPiuAlto1)
    console.log("punteggio piu alto giocatore 2", punteggioPiuAlto2)
    if (punteggioPiuAlto1 > punteggioPiuAlto2) {
        console.log(`Giocatore 1 ha vinto, poiche ha effettuato un tiro con punteggio ${punteggioPiuAlto1} piu alto di ${punteggioPiuAlto2}`)
    }
    else {
        console.log(`Giocatore 2 ha vinto, poiche ha effettuato un tiro con punteggio ${punteggioPiuAlto2} piu alto di ${punteggioPiuAlto1}`)
    }
}
partitaDandD(5)
*/
/*
ESERCIZIO 35 Bisogna fare una funzione che tenga conto dei valori in input.

function votoGiocatore(baseVoto, golFatti, assistEffettuati, autogol, ammonizione, esplusione) {
 let votoGol = 3
 let votoAssist = 1
 let votoAutogol = -2
 let votoAmmonizione = -1
 let votoEspulsione = -2
 let Totale = baseVoto+votoGol*golFatti+votoAssist*assistEffettuati+votoAutogol*autogol+votoAmmonizione*ammonizione+votoEspulsione*esplusione
 console.log(Totale)
}
votoGiocatore(8, 3, 2, 1, 2, 2)
//Base voto 8, gol 3, assit 2, autogol 1, ammonizione 2, espulsione 2: 8+3*3+2*1-2-2*2-2*2=11
*/

console.log("%c this text is red!", 'color: red')
function myLog(titolo, sottotitolo, highlight, disastro){
    console.log( `%c${titolo}`,"color: white; background-color: blue; font-size: 30px")
    console.log(`%c${sottotitolo}`, "font-size: 50px; color: blue")
}
myLog("TITOLO", "sottotitolo", "Highlight", "DiSaTrO")

console.log("-------------------------------------------------")
function titolo(testo) {
    console.log( `%c${testo}`,"color: white; background-color: blue; font-size: 30px")
  }
function sottotitolo(testo) {
    console.log(`%c${testo}`, "font-size: 50px; color: blue")
  }
function highlight(testo) {
    console.log(`%c${testo}`, "background-color: orange")
}
function disastro(testo) {
    console.log(`%c${testo}`,"background-color: red; font-size: 50px; color: white")
}
function stampaStringa(stringa, funzionePerModificareStringa) {
    let risultato = funzionePerModificareStringa(stringa)
  }
stampaStringa("CI4O", titolo)
stampaStringa("QUESTO", sottotitolo)
stampaStringa("N0N è", highlight)
stampaStringa("carino", disastro)
  /*
- titolo: 

        background-color: blue; 
        font-size: 30px; 
        color: white
        

- sottotitolo:

        font-size: 20px;
        color: blue;
        

- highlight:

        background-color: orange;
        

-  disastro:

        background-color: red; 
        font-size: 50px; 
        color: white
*/
