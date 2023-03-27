console.log("File caricato");

/*
Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere una lista di giocatori che saranno formati dalle proprietà, nome e punteggi

Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita 
*/


let partitaBowling = {
    Giocatore_1 : {
        Nome : "Gino",
        Punteggio_1 : +prompt("Giocatore 1 " + "Punteggio 1 : "),
        Punteggio_2 : +prompt("Giocatore 1 " + "Punteggio 2 : "),
        
    },

    Giocatore_2 : {
        Nome : "Pino",
        Punteggio_1 : +prompt("Giocatore 2 " + "Punteggio 1 : "),
        Punteggio_2 : +prompt("Giocatore 2 " + "Punteggio 2 : "),
        
    },
    
}


function calcoloPartita(){
    let punteggioGiocatore1 = partitaBowling.Giocatore_1.Punteggio_1 + partitaBowling.Giocatore_1.Punteggio_2
    let punteggioGiocatore2 = partitaBowling.Giocatore_2.Punteggio_1 + partitaBowling.Giocatore_2.Punteggio_2

    if (punteggioGiocatore1 > punteggioGiocatore2)

    console.log("Il giocatore vincitore è: ", partitaBowling.Giocatore_1.Nome, "\n Con un totale di : " + punteggioGiocatore1)
    /*
    console.log("Con un totale di :" + punteggioGiocatore1)
    console.log(partitaBowling.Giocatore_1)
    */
    
    else if (punteggioGiocatore1 < punteggioGiocatore2)
    console.log("Il giocatore vincitore è: ", partitaBowling.Giocatore_2.Nome, "\n Con un totale di : " + punteggioGiocatore2)

}

calcoloPartita();

