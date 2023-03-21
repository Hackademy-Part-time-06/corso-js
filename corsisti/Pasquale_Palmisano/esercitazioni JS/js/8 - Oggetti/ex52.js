/*Esercizio 52

Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere una lista di giocatori che saranno formati dalle proprietà, nome e punteggi

Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita */

let sala = {
    players: [
        {name: "Pasquale", punti: [10,8,6,2,0,7,10,6,3,9]},
        {name: "Alberto", punti: [10,10,10,4,9,2,5,6,7,4]},
        {name: "Emanuele", punti: [7,5,6,3,10,3,5,6,10,1]}
    ],

    winner: function() {
        let miglior_punteggio = 0
        let miglior_giocatore = new String()

        for (let i = 0; i < this.players.length; i++) {
            if (sala.players[i].punti.reduce((total, num) => total + num) > miglior_punteggio) {
                miglior_punteggio = sala.players[i].punti.reduce((total, num) => total + num)
                miglior_giocatore = sala.players[i].name
            }
        }

        console.log(`Il vincitore è ${miglior_giocatore} con un punteggio di ${miglior_punteggio}`);
    }
}
