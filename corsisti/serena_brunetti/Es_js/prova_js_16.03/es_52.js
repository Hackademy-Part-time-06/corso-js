//Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere una lista di giocatori che saranno formati dalle proprietà, nome e punteggi. Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita 

let bowling = {
    listaGiocatori: [{
        nome: "Gino",
        punteggio: [3, 7, 6, 1],
    },
    {
        nome: "Pino",
        punteggio: [9, 1, 6, 8],
    },
    {
        nome: "Rocco",
        punteggio: [1, 5, 7, 0]
    },
    ]
}
function calcoloVincitore(partita) {
    let totali = partita.listaGiocatori.map(function (element, index) {
        let totale = element.punteggio.reduce(function (tot, punteggio) {
            tot = tot + punteggio
            return tot
        }, 0)
        return { nome: element.nome, punteggioTotale: totale }
    })
    console.log("array di punteggi totali: ", totali)
    totali.sort((a, b) => b.punteggioTotale - a.punteggioTotale)
    console.log("array di punteggi totali ordinati: ", totali)

    const vincitore = totali[0]
    return vincitore.nome
}

let vincitore = calcoloVincitore(bowling)
console.log("Il vincitore è " + vincitore)
