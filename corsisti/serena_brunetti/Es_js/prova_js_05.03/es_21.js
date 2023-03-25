/*Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N), simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti.
Supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore                                                                 
// Usiamo questa formula per generare un numero random
Math.floor(Math.random() * (max - min + 1) + min);*/

let numeroLanci = 3;
let totalePunteggioPrimo = 0;
let totalePunteggioSecondo = 0;
for (let i = 0; i < numeroLanci; i++) {
    let valoreDadoPrimo = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let valoreDadoSecondo = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log("Hai lanciato il dado! Il primo giocatore ha totalizzato: ", valoreDadoPrimo)
    console.log("Hai lanciato il dado! Il secondo giocatore ha totalizzato: ", valoreDadoSecondo)
    totalePunteggioPrimo = totalePunteggioPrimo + valoreDadoPrimo;
    totalePunteggioSecondo = totalePunteggioSecondo + valoreDadoSecondo;
}

if (totalePunteggioPrimo > totalePunteggioSecondo) {
    console.log("Il primo giocatore ha totalizzato: ", totalePunteggioPrimo, "ed ha vito!")
}
if (totalePunteggioSecondo > totalePunteggioPrimo) {
    console.log("Il secondo giocatore ha totalizzato: ", totalePunteggioSecondo, "ed ha vito!")
}