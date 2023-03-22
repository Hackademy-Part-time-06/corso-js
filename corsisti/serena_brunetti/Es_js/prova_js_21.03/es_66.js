/*Crea un programma che simuli una partita a carta forbici e sasso!
Lo scopo è sconfiggere l'avversario scegliendo un segno in grado di battere quello dell'altro, secondo le seguenti regole:
1. Il sasso spezza le forbici (vince il sasso)
2. Le forbici tagliano la carta (vincono le forbici)
3. La carta avvolge il sasso (vince la carta)
Il programma dovrà essere una funzione che si occupi generare casualmente un segno per 2 giocatori.
Una volta generati i segni per ogni giocatore bisognerà valutare il risultato seguendo la logica come sopra.
E’ ammesso il pareggio!
Un volta calcolato il risultato mostrarlo in console o tramite un alert.*/

let legenda = ["carta", "forbice", "sasso"]
function partita() {
    let punt1 = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    let segnoGiocatore1 = legenda[punt1]
    let punt2 = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    let segnoGiocatore2 = legenda[punt2]
    if (segnoGiocatore1 === legenda[2] && segnoGiocatore2 === legenda[1]) {
        console.log(`Il vincitore è il Giocatore 1 con ${segnoGiocatore1}`)
        return
    }
    else if (segnoGiocatore1 === legenda[1] && segnoGiocatore2 === legenda[0]) {
        console.log(`Il vincitore è il Giocatore 1 con ${segnoGiocatore1}`)
        return
    }
    else if (segnoGiocatore1 === legenda[0] && segnoGiocatore2 === legenda[2]) {
        console.log(`Il vincitore è il Giocatore 1 con ${segnoGiocatore1}`)
        return
    }
    else {
        console.log(`Non vince nessuno perché non so che altro fare`)
        return
    }
}
partita()
