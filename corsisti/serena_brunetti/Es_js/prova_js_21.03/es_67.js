let legenda = ["carta", "forbice", "sasso"]
let pareggio = true
function partita() {
    while (pareggio) {
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
        else if (legenda[punt1] === legenda[punt2]) {
            console.log("Punteggio pari! Rilancia!")
            pareggio = true
        }
        else {
            console.log(`Non vince nessuno perché non so che altro fare`)
            return
        }
    }
}
partita()