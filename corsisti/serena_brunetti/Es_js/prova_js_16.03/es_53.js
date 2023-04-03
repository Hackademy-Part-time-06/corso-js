//Scrivi una funzione che conti le occorrenze dei singoli elementi presenti in array annidati

let listeAnnidate = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"]
]

let occorrenze = {}
function calcolaOccorrenze(lista) {
    console.log("Lista da calcolare: ", lista)
    let listaUnica = lista.reduce(function (tot, listaAnnidata) {
        return tot.concat(listaAnnidata)
    }, [])

    listaUnica.forEach(elemento => {
        if (occorrenze.hasOwnProperty(elemento)) {
            occorrenze[elemento] = occorrenze[elemento] + 1
        }
        else {
            occorrenze[elemento] = 1
        }
    })
    return occorrenze
}
let stampaOccorrenze = calcolaOccorrenze(listeAnnidate)
console.log(occorrenze)
