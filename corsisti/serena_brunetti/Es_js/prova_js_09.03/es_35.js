function voto (baseVoto, golFatti, assistEffettuati, autogol, ammonizione, espulsione) {
    let baseVoto1 = baseVoto
    console.log(`La base del voto è ${baseVoto1}`);
    let golFatti1 = 3*golFatti
    console.log(`Il punteggio dei gol fatti è ${golFatti1}`);
    let assistEffettuati1 = assistEffettuati
    console.log(`Il punteggio degli assist effettuati è ${assistEffettuati1}`)
    let autogol1 = -2*autogol
    console.log(`Il punteggio degli autogol effettuati è ${autogol1}`)
    let ammonizione1 = -1*ammonizione
    console.log(`Il punteggio delle ammonizioni è ${ammonizione1}`)
    let espulsione1 = -2*espulsione
    console.log(`Il punteggio delle espulsioni è ${espulsione1}`)
    let votoTotale = baseVoto1 + golFatti1 + assistEffettuati1 + autogol1 + ammonizione1 + espulsione1

    return votoTotale
}

/*let totale = voto(8, 2, 1, 0, 1, 0)
console.log(`Il voto totale è ${totale}`)*/
let baseVoto = Number(prompt("Inserire base voto"))
let golFatti = Number(prompt("Inserire il numrro dei gol fatti"))
let assistEffettuati = Number(prompt("Inserire il numero di assist effettuati"))
let autogol = Number(prompt("Inserire il numero degli autogol"))
let ammonizioni = Number(prompt("Inserire il numero delle ammonizioni"))
let espulsioni = Number(prompt("Inserire il numero di espulsioni subite"))
let totale = voto(baseVoto, golFatti, assistEffettuati, autogol, ammonizioni, espulsioni)
console.log(`Il voto totale è ${totale}`)