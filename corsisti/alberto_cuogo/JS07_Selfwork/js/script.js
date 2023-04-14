console.log("script.js caricato!")

// ! Esercizio 45
console.group("ESERCIZIO 38: OPERAZIONE ARITMETICA")

let lista1 = [2, 4, 6]
let lista2 = [1, 3, 5]
let operazione = "sottrazione"

let risultatoOperazioneAritmetica = lista1.map(function(elemento, index) {
    let risultatoOperazione
    
    switch (operazione) {
        case "addizione":
            risultatoOperazione = elemento + lista2[index]
            break
        case "sottrazione":
            risultatoOperazione = elemento - lista2[index]
            break
        case "moltiplicazione":
            risultatoOperazione = elemento * lista2[index]
            break
        case "divisione":
            risultatoOperazione = elemento / lista2[index]
            break
    }

    return risultatoOperazione
})

console.log(risultatoOperazioneAritmetica)


console.groupEnd()


console.group("ESERCIZIO 39: MEDIA E VALORI MINORI")

function mediaEValoriMinori(listaNumeri) {
    console.log(`Lista: ${listaNumeri}`)

    let somma = listaNumeri.reduce(function(totale, elemento) {
        console.log(`REDUCE`)
        console.log(`Totale: ${totale}`)
        console.log(`Elemento: ${elemento}`)
        totale = totale + elemento

        return totale
    }, 0)

    console.log(`Somma: ${somma}`)

    let media = somma / listaNumeri.length

    console.log(`Media: ${media}`)

    let listaValoriMinori = listaNumeri.filter(function(numero) {
        if (numero < media) {
            return true
        }
        else {
            return false
        }
    })

    // STRINGATO: let listaValoriMinori = listaNumeri.filter(numero => numero < media)

    console.log(`Lista valori minori di ${media}: ${listaValoriMinori}`)
}

mediaEValoriMinori([3, 5, 10, 2, 8])

console.groupEnd()


console.group("ESERCIZIO 40: NUMERI DIVISIBILI PER...")

function numeriPerDivisore(listaNumerica, divisore) {
    let risultato = listaNumerica.filter(function(numero) {
        return numero % divisore === 0
        // return !(numero % divisore)
    })
    return risultato
}

let risultatoNumeriPerDivisore = numeriPerDivisore([1, 2, 3, 4, 5, 6], 2)

console.log(risultatoNumeriPerDivisore)

console.groupEnd()


console.group("ESERCIZIO 42: SOMMA NUMERI POSITIVI")

function sommaNumeriPositivi(listaNumerica) {
    console.log(`Lista non filtrata: ${listaNumerica}`)
    let listaFiltrata = listaNumerica.filter((numero => {
        return numero > 0
    }))

    console.log(`Lista filtrata: ${listaFiltrata}`)

    let risultato = listaFiltrata.reduce(function(totale, numero) {
        return totale += numero
    }, 0)

    return risultato
}

let risultatoSommaPositivi = sommaNumeriPositivi([1,-4,7,12])

console.log(`Somma positivi: ${risultatoSommaPositivi}`)

console.groupEnd()


// ! Esercizio 46

console.group("STAMPA PRIMA LETTERA DI OGNI PAROLA DELLA FRASE")

let frase = "Ciao sono un esercizio sui metodi avanzati degli array"

function stampaSoloPrimeLettere(frase) {
    return frase.split(" ").reduce(function(str, elementoArray) {
        return str += elementoArray.charAt(0)
    }, "")
}

console.log("Risultato esercizio:", stampaSoloPrimeLettere(frase))

console.groupEnd()


// ! Esercizio 47

console.group("CONCATENA ARRAY DI UN OGGETTO")

let listaArray = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"]
    ]

  
    function concatenaArray(lista) {
        let listaUnica = lista.reduce(function(totale, listaInterna) {
            totale = totale.concat(listaInterna);
    
            return totale
        }, [])

        return listaUnica
    }
        
    console.log(concatenaArray(listaArray))

console.groupEnd()


// ! Esercizio 48

console.group("SOMMA DIVISIBILI")

function sommaNumeriDivisibili(listaNumeri, divisore) {
    console.log("Lista Numeri:", listaNumeri)
    console.log("Divisore:", divisore)

    let risultato = listaNumeri.reduce((totale, elemento) => {
        if (elemento % divisore === 0) {
            totale += elemento
        }

        return totale
    }, 0)

    return risultato
}

console.log(sommaNumeriDivisibili([1, 2, 3, 4, 5, 6], 2))

console.groupEnd()