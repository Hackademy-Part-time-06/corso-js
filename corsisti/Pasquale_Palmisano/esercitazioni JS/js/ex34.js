/*Esercizio 34

Simula una partita a dadi:
Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) un numero di volte che verrà definito tramite parametro passato in input.
Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto).*/

let tiri = prompt("Quante volte tiriamo i dadi?")

console.log(dice(tiri));

function dice(p) {
    let player1 = 0
    let player2 = 0

    for (i = 0; i < p; i++) {
        let lancio1 = Math.floor(Math.random() * 10) + 2
        let lancio2 = Math.floor(Math.random() * 10) + 2

        if (lancio1 > player1) {player1 = lancio1}
        if (lancio2 > player2) {player2 = lancio2}

        console.log(`Il Player 1 ha tirato un ${lancio1}`);
        console.log(`Il Player 2 ha tirato un ${lancio2}`);
    }

    if (player1 > player2) {return `Vince il Player 1 con il tiro da ${player1} punti`}
    else if (player2 > player1) {return `Vince il Player 2 con il tiro da ${player2} punti`}
    else {return "PAREGGIO"}
}