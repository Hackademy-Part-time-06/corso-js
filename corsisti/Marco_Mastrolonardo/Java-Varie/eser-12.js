//Oggetti 
let nome = "Gino"
let cognome = "Gini"
let anni = 32

//si inizializzano gli oggetti con le graffe {}. "nome", "cognome" ed "anni" sono chiamate proprietà. Possono essere numeri, stringhe, array.

let persona = {
    nome: "Gino",
    cognome:"Gini",
    anni: 32,
    passioni: ["videogame", "manga", "anime"],
//o anche un altro oggetto annidato
    indirizzo: {
        via: "Via Angiuli",
        numeroCivico: 16,
        città: "Triggiano"
    },
//posso passare una funzione semplice
    saluta: function(nome=""){
        console.log("Ciao! " + nome)
    },
//un arrow function
    mangia: () => {
        console.log("Gnamm che buona la", this.piattoPreferito)
    },
    presentati: function() {
        let mioNome = this.nome
        console.log(`Ciao sono ${mioNome}`)
    }
}
persona.saluta("Pino")
//Ciao! Pino
//Per accedere ad una proprietà degli oggetti utilizziamo il nome dell'oggetto seguito da .nomeProprietà "persona.nome"
console.log("Nome persona =", persona.nome)
console.log("Cognome persona =", persona.cognome)

//non ci possono essere piu proprietà con nomi uguali

//un alto modo per accedere alla proprietà
console.log("Anni persona =", persona["anni"])

/*
//casistica1 per accedere dinamicamente ad una proprietà. Per esempio se lasciamo scegliere ad un etente tramite un prompt quale proprietà vuole. Ricordare che il prompr passa una stringa.
let proprietà = prompt("che proprietà vuoi")

console.log("Anni persona:", persona[proprietà])
*/
//casistica2 utilizziamo un ciclo per ciclare fra le proprietà dell'oggetto di persona. Mentre utilizziamo persona[key(nome arbitrario)] per ottenerne il valore.
for(let key in persona) {
    console.log("Chiave (proprietà/attributo)", key)
    console.log("Valore", persona[key])
}
console.log("-------------------------------------")

console.log("Passione preferita =", persona.passioni[0])

console.log("Seconda passione =", persona.passioni[1])

console.log("Terza passione =", persona["passioni"][2])

console.log("Via =", persona.indirizzo["via"])

console.log("Numero Civico =", persona["indirizzo"]["numeroCivico"])

console.log("Città =", persona["indirizzo"]["città"])

//il valore persona.anni era 32. Può essere sovrascritto
persona.anni = 33
console.log("Anni posto compleanno =", persona["anni"])

//Posso assegnare un booleano ad una proprietà di un oggetto
persona["HaLaPatente"] = false
console.log(persona.HaLaPatente)

//e posso rimuoverla
delete persona.HaLaPatente
console.log(persona.HaLaPatente)

//controllare se un oggetto ha una proprietà. In questo caso ritorna false perche l'abbiamo eliminata.
console.log("La proprietà 'HaLaPatente' esiste?", persona.hasOwnProperty())
console.log("----------------------------------------")
let nome1 = "Marco"

//sto copiando il valore di nome1 su nome2
let nome2 = nome1

console.log("Nome 1", nome1)
console.log("Nome 2", nome2)
//Con le variabili primitive posso cambiare il valore di nome2, poichè nome1 ha un valore distinto.
nome2 = "Pinuccia"

console.log("Nome 1", nome1)
console.log("Nome 2", nome2)

console.log("----------------------------------------")
//In questo caso faccio la stessa cosa con due oggetti.
let persona2 = persona

console.log("Nome persona 1", persona.nome)
console.log("Nome persona 2", persona2.nome)

//Se cambio il valore di una proprietà di oggetto"persona2" cambierà anche il valore della proprietà di oggetto"persona", poichè condividono lo stesso riferimento.
persona2.nome = "Luca"

console.log("Nome persona 1", persona.nome)
console.log("Nome persona 2", persona2.nome)

//
persona.nome = "Rivoglio chiamarmi Gino"

pippo.nome = "Pippo"

//Spezzare una referenza
let zioPaperone = Object.assign({}, persona)

zioPaperone.nome = "Zio Paperone"
