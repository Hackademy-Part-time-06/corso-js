/*Partita a D&D
Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N), simuli un gioco di dadi (i dadi hanno 20 facce) tra due utenti, stampando il punteggio più alto raggiunto da ogni giocatore sul singolo lancio. 
Vince chi fa il numero più alto. 
NB: in caso di punteggio pari, continua a farli giocare finché uno dei 2 vince.*/

let numeroLanci = prompt("Quante volte vuoi lanciare il tuo dado?")
numeroLanci = Number(numeroLanci)
let totalePunteggioPrimo = 0;
let totalePunteggioSecondo = 0;
let valoreDadoPrimo = 0
let valoreDadoSecondo = 0
for (let i = 0; i < numeroLanci; i++) {
    valoreDadoPrimo = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    valoreDadoSecondo = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    console.log(`Avete lanciato i dadi! Il primo giocatore ha totalizzato: ${valoreDadoPrimo}, mentre il secondo ${valoreDadoSecondo}`)

    if (valoreDadoPrimo > valoreDadoSecondo) {
        console.log("Il punteggio più alto raggiunto dal primo giocatore su singolo lancio è: ", valoreDadoPrimo)
    }
    else if (valoreDadoPrimo < valoreDadoSecondo) {
        console.log("Il punteggio più alto raggiunto dal secondo giocatore su singolo lancio è: ", valoreDadoSecondo)
    }

    totalePunteggioPrimo = totalePunteggioPrimo + valoreDadoPrimo;
    console.log("Il primo giocatore ha totalizzato: " + totalePunteggioPrimo)
    totalePunteggioSecondo = totalePunteggioSecondo + valoreDadoSecondo;
    console.log("Il secondo giocatore ha totalizzato: " + totalePunteggioSecondo)
}

if (totalePunteggioPrimo === totalePunteggioSecondo) {
    let rilancia = true;
    while (rilancia) {
        console.log("Avete pareggiato! Rilanciate i dadi!")
        let valoreSpareggioPrim = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        let valoreSpareggioSec = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        console.log(`Nuovo lancio - Primo giocatore totalizza: ${valoreSpareggioPrim}. Secondo giocatore totalizza: ${valoreSpareggioSec}`)

        if (valoreSpareggioPrim > valoreSpareggioSec) {
            console.log(`Il punteggio più alto raggiunto allo spareggio dal primo giocatore è: ${valoreSpareggioPrim} e vince!!`)
        }
        else if (valoreSpareggioPrim < valoreSpareggioSec) {
            console.log(`Il punteggio più alto raggiunto allo spareggio dal primo giocatore è: ${valoreSpareggioSec} e vince!!`)
        }

        if (valoreSpareggioPrim !== valoreSpareggioSec) {
            rilancia = false
        }

    }
}
