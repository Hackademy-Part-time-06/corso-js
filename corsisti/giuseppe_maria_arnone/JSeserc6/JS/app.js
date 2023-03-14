console.group("Eserc_37")
    //Eserc 37


let listaDiNumeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

console.log(`Lista numeri: ${listaDiNumeri}`)

console.log (`Ordine crescente: ${listaDiNumeri.sort(
    function(a,b) {
        return a-b
    })}`)

console.log (`Ordine decrescente: ${listaDiNumeri.sort(
    function(a,b) {
        return b-a
    }
    )}`)

console.groupEnd()


console.group("Eserc_38")
    //Eserc 38

let a = []

let b = []

function numeroACaso(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

for ( i = 0; i < 5; i++ ) {
    a.push(numeroACaso(1, 10))
}

for ( i = 0; i < 5; i++ ) {
    b.push(numeroACaso(1, 10))
}

console.log(`A=[${a}] / B=[${b}]`)

let contenitoreSomme = []
let contenitoreSottrazioni = []
let contenitoreProdotti = []
let contenitoreRapporti = []

for ( x = 0; x < a.length; x++ ) {
    contenitoreSomme.push(a[x]+b[x])
}
console.log(`somme varie: ${contenitoreSomme}`)

for ( x = 0; x < a.length; x++ ) {
    contenitoreSottrazioni.push(a[x]-b[x])
}
console.log(`sottrazioni varie: ${contenitoreSottrazioni}`)

for ( x = 0; x < a.length; x++ ) {
    contenitoreProdotti.push(a[x]*b[x])
}
console.log(`prodotti varie: ${contenitoreProdotti}`)

for ( x = 0; x < a.length; x++ ) {
    contenitoreRapporti.push(a[x]/b[x])
}
console.log(`rapporti varie: ${contenitoreRapporti}`)

//OPPURE

function operazioneArimteticaTraArray(lista1, lista2, operazione) {
    let risultato = []

    for (let i = 0; i < lista1.length; i++) {
        let risultatoOperazione;
    
    switch (operazione) {
        case "addizione":
            risultatoOperazione = lista1[i] + lista2[i]
            break;
        case "sottrazione":
            risultatoOperazione = lista1[i] - lista2[i]
            break;
        case "moltiplicazione":
            risultatoOperazione = lista1[i] * lista2[i]
            break;
        case "divisione":
            risultatoOperazione = lista1[i] / lista2[i]
            break;
        }
        risultato.push(risultatoOperazione)
    }
    return risultato
}

let totale = operazioneArimteticaTraArray(
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 0],

)

console.groupEnd()

console.group("Eserc_39")
    //Eserc_39

let c = []
let sommaPerMedia = 0

function numeroACaso(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

for ( i = 0; i < 5; i++ ) {
    c.push(numeroACaso(1, 10))
}

for ( y = 0; y < c.length; y++ ) {
    sommaPerMedia += c[y]
}

console.log(`La somma tra 5 numeri è: ${sommaPerMedia}`)

let media = sommaPerMedia / c.length

console.log(`La media tra quei 5 numeri è: ${media}`)

let arrayPerValoriInferioriMedia = []

for ( y = 0; y < c.length; y++ ) {
    if (c[y] < media) {
        arrayPerValoriInferioriMedia.push(c[y])
    }
}

console.log(`I valori inferori al valore medio sono: ${arrayPerValoriInferioriMedia.sort()}`)

//OPPURE

function mediaEValoriMinori(listaNumerica) {
    let totali = 0
    let medii 
    let valoriMinoriDellaMedia = []

    for (let i = 0; i < listaNumerica.length; i++) {
        totali = totali + listaNumerica[i];
    }
    medii = totali / listaNumerica.length

    for (let i = 0; i < listaNumerica.length; i++) {
        if (listaNumerica[i] < media) {
            valoriMinoriDellaMedia.push(listaNumerica[i])
        }
    }

    console.log(``)
    console.log(``)
    console.log(``)

}

console.groupEnd()

console.group("Eserc_40")
    //Eserc 40

function numeroACaso(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let numeriDIvisibili = []
let numeriIndivisibili = []
let numeroPrimo = 0

function chiEIlNumeroPrimo (arr, divisore) {
    numeroPrimo = divisore
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] % divisore === 0) {
            numeriDIvisibili.push(arr[i])
        }
        else {
            numeriIndivisibili.push(arr[i])
        }
    }
}

chiEIlNumeroPrimo([1, 2, 3, 4, 5, 6, 7, 8, 9],numeroACaso(1,3))

console.log(`I numeri divisibili per ${numeroPrimo} sono: ${numeriDIvisibili}, invece quelli indivisibili sono: ${numeriIndivisibili}`)

console.groupEnd()

console.group("Eserc_41")
    //Eserc 41

    function checkSeContieneValore(listaValori, valoreDaControllare) {
    return listaValori.includes(valoreDaControllare)
}

console.log(checkSeContieneValore([60, 101], 66))

console.groupEnd()

console.group("Eserc_42")
    //Eserc 42

function sommaPositiv(listaNumeri) {
    let risultat = 0;
    for (let i = 0; i < listaNumeri.length; i++) {
        risultat += listaNumeri[i]
    }
    return risultat
}

console.log()




console.group("Eserc_44")
    //Eserc 44

let goalPerPartitaSquadraUno = []
let goalPerPartitaSquadraDue = []
let punteggi = []

function numeroACaso(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

for ( i = 0; i < 10; i++ ) {
    goalPerPartitaSquadraUno.push(numeroACaso(0, 5))
}

for ( i = 0; i < 10; i++ ) {
    goalPerPartitaSquadraDue.push(numeroACaso(0, 5))
}

function conteggioPunti (punteggioUno = 0, punteggioDue = 0) {
    if (punteggioUno > punteggioDue) {

    }
    else if (punteggioUno === punteggioDue) {

    }
    else {

    }
}




let risultati = [];

for (let i = 0; i < 10; i++) {
    let risultatoSingolo = numeroACaso(0, 5) + ":" + numeroACaso(0, 5);
    risultati.push(risultatoSingolo)
}