console.log("script.js caricato!")

// ! Esercizio 37
console.group("ORDINE CRESCENTE E DECRESCENTE")

let numeriDaOrdinare = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

let numeriDecrescenti = numeriDaOrdinare.sort(function(a, b) {return b - a})
console.log(`Numeri Decrescenti: ${numeriDecrescenti}`)

let numeriCrescenti = numeriDaOrdinare.sort(function(a, b) {return a - b})
console.log(`Numeri Crescenti: ${numeriCrescenti}`)


// function ordinamento(listaNumeri, decres=false) {

//     listaNumeri.sort(function(a, b) {
//         if (decres) {
//             return b - a
//         }
//         else {
//             return a - b
//         }
//     })

//     return listaNumeri
// }

// console.log(`Ordinamento Crescente con Function: ${numeriDaOrdinare}`)
// console.log(`Ordinamento Decrescente con Function: ${numeriDaOrdinare, true}`)

console.groupEnd()


// ! Esercizio 38
console.group("OPERAZIONE ARITMETICA")

function operazioneAritmeticaTraArray(lista1, lista2, operazione) {
    let risultato = []

    for (let i = 0; i < lista1.length; i++) {
        let risultatoOperazione

        switch (operazione) {
            case "addizione":
                risultatoOperazione = lista1[i] + lista2[i]
                break
            case "sottrazione":
                risultatoOperazione = lista1[i] - lista2[i]
                break
            case "moltiplicazione":
                risultatoOperazione = lista1[i] * lista2[i]
                break
            case "divisione":
                risultatoOperazione = lista1[i] / lista2[i]
                break
        }
        risultato.push(risultatoOperazione)
    }
    return risultato
}

let totale = operazioneAritmeticaTraArray(
    [3, 7, 2, 5 ,8],
    [9, 3, 1, 4, 7],
    "addizione"
)

console.log(totale)

console.groupEnd()


// ! Esercizio 39
console.group("MEDIA E VALORI MINORI")

function mediaEValoriMinori(listaNumerica) {
    let totale = 0
    let media
    let valoriMinoriDellaMedia = []

    for (let i = 0; i < listaNumerica.length; i++) {
        totale = totale + listaNumerica[i]
    }

    media = totale / listaNumerica.length

    for (let i = 0; i < listaNumerica.length; i++) {
        if (listaNumerica[i] < media) {
            valoriMinoriDellaMedia.push(listaNumerica[i])
        }
    }

    console.log(`Lista analizzata: ${listaNumerica}`)
    console.log(`Media: ${media}`)
    console.log(`Valori minori della media: ${valoriMinoriDellaMedia}`)

}

mediaEValoriMinori([3, 5, 10, 2, 8])

console.groupEnd()


// ! Esercizio 40
console.group("NUMERI DIVISIBILI PER...")

function numeriDivisibiliPerDivisore(listaNumeri, divisore) {
    let risultato = []

    for (let i = 0; i < listaNumeri.length; i++) {
        let numeroSingolo = listaNumeri[i]

        if(numeroSingolo % divisore === 0) {
            risultato.push(numeroSingolo)
        }
    }
    return risultato
}

console.log(numeriDivisibiliPerDivisore([1, 2, 3, 4, 5, 6], 2))

console.groupEnd()


// ! Esercizio 41
console.group("X CONTIENE Y?")

function checkSeContieneValore(listaValori, valoreDaControllare) {
    return listaValori.includes(valoreDaControllare)
}

console.log(checkSeContieneValore([66, 101], 66))
console.log(checkSeContieneValore([66, 101], 60))

console.groupEnd()


// ! Esercizio 42
console.group("SOMMA NUMERI POSITIVI")

function sommaPositivi(listaNumeri) {
    let risultato = 0
    for (let i = 0; i < listaNumeri.length; i++) {
        if (listaNumeri[i] > 0) {
            risultato += listaNumeri[i]
        }
    }

    return risultato
}

console.log(sommaPositivi([1,-4, 7 ,12]))

console.groupEnd()


// ! Esercizio 43
console.group("NUOVA ARRAY RADDOPPIATA")

function raddoppiaArray(listaElementi) {
    console.log("Lista Elementi:", listaElementi)

    let risultato = []
    listaElementi.forEach((elemento) => {
        risultato.push(elemento * 2)
    })

    return risultato
}

console.log(raddoppiaArray([1, -4, 7, 12]))

console.groupEnd()


// ! Esercizio 44
console.group("PUNTI PARTITE CAMPIONATO")

function calculatePoints(risultatoPartite=[]) {
    console.log(`Risultati partite: ${risultatoPartite}`)

    let punteggioTotale = 0

    for (let i = 0; i < risultatoPartite.length; i++) {
        let risultatoSingolo = risultatoPartite[i].split(":")

        console.log(`Risultati singolo: ${risultatoSingolo}`)

        let punteggioSquadraA = Number(risultatoSingolo[0])
        let punteggioSquadraB = Number(risultatoSingolo[1])
        
        if (punteggioSquadraA > punteggioSquadraB) {
            punteggioTotale = punteggioTotale + 3
        }

        else if (punteggioSquadraA < punteggioSquadraB) {
            punteggioTotale = punteggioTotale + 0
        }

        else {
            punteggioTotale = punteggioTotale + 1
        }
    }

    return punteggioTotale
}

console.log(calculatePoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(calculatePoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
console.log(calculatePoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
console.log(calculatePoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))



// let risultati = [];

// for (let i = 0; i < 10; i++) {
//     let risultatoSingolo = generaNumeroRandomico(5) + ":" + generaNumeroRandomico(5);
//     risultati.push(risultatoSingolo)
// }


console.groupEnd()