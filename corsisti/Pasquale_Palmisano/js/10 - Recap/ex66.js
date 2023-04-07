/*Esercizio 66

Crea un programma che simuli una partita a carta forbici e sasso!
Lo scopo è sconfiggere l'avversario scegliendo un segno in grado di battere quello dell'altro, secondo le seguenti regole:


1. Il sasso spezza le forbici (vince il sasso)
2. Le forbici tagliano la carta (vincono le forbici)
3. La carta avvolge il sasso (vince la carta)

Il programma dovrà essere una funzione che si occupi generare casualmente un segno per 2 giocatori.
Una volta generati i segni per ogni giocatore bisognerà valutare il risultato seguendo la logica come sopra.
E’ ammesso il pareggio!
Un volta calcolato il risultato mostrarlo in console o tramite un alert.*/

function game() {
    let player1 = tiro()
    let player2 = tiro()

    console.log(`Il giocatore 1 ha tirato ${player1}`);
    console.log(`Il giocatore 2 ha tirato ${player2}`);

    switch(player1) {
        case "Carta":
            switch (player2) {
                case "Carta":
                    console.log("PAREGGIO");
                    break;
                case "Sasso":
                    console.log("VINCE IL GIOCATORE 1");
                    break;
                case "Forbice":
                    console.log("VINCE IL GIOCATORE 2");
                    break;
            }
            break
        case "Sasso":
            switch (player2) {
                case "Carta":
                    console.log("VINCE IL GIOCATORE 2");
                    break;
                case "Sasso":
                    console.log("PAREGGIO");
                    break;
                case "Forbice":
                    console.log("VINCE IL GIOCATORE 1");
                    break;
            }
            break
        case "Forbice":
            switch (player2) {
                case "Carta":
                    console.log("VINCE IL GIOCATORE 1");
                    break;
                case "Sasso":
                    console.log("VINCE IL GIOCATORE 2");
                    break;
                case "Forbice":
                    console.log("PAREGGIO");
                    break;
            }
            break
    }
}

function tiro() {
    let segno = ["Sasso", "Carta", "Forbice"]
    return segno[Math.floor(Math.random() * (segno.length))]
}