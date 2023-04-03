//Simula una partita a dadi: Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) un numero di volte che verrà definito tramite parametro passato in input. Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto).

function random(num) {
    let numeroRandom
    numeroRandom = Math.floor(Math.random() * (num - 1 + 1) + 1);
    return numeroRandom
}

function lanci(num) {
    let tiroRandomPrimoG
    let tiroRandomSecondoG
    let totalePunteggioPrimo = 0
    let totalePunteggioSecondo = 0

    for (let i = 0; i < num; i++) {
        tiroRandomPrimoG = random(6);
        tiroRandomSecondoG = random(6);
        totalePunteggioPrimo = totalePunteggioPrimo + tiroRandomPrimoG
        console.log("Il primo giocatore ha totalizzato: " + tiroRandomPrimoG)
        totalePunteggioSecondo = totalePunteggioSecondo + tiroRandomSecondoG
        console.log("Il secondo giocatore ha totalizzato: " + tiroRandomSecondoG)
    }
    if (totalePunteggioPrimo > totalePunteggioSecondo) {
        console.log(`Ha vinto il primo giocatore totalizzando ${totalePunteggioPrimo} punti!`)
    }
    else if (totalePunteggioSecondo > totalePunteggioPrimo) {
        console.log(`Ha vinto il secondo giocatore totalizzando ${totalePunteggioSecondo} punti!`)
    }

    return;
}

let input = prompt("Quante volte vuoi lanciare il dado?")
lanci(Number(input))
