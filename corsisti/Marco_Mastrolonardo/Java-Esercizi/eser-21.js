"use strict"
//Esercizio 72
let dado = document.getElementById("dado")
let lanciodeldado = document.getElementById("lancia-dado")

lanciodeldado.addEventListener("click", function(event) {
    console.log("Lancio Effettuato")
    let numerorandom = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    dado.innerText = numerorandom
})

//ESERCIZIO 73
let anchor = document.querySelector("a")
let pressione = 0 
anchor.addEventListener("click", function(event) {
    pressione++
    if(pressione <= 3){
        event.preventDefault()
        alert("clicca ancora")
    }
})

//ESERCIZIO 74
function creolista(){
    const libri = [
        {
            titolo: "Il Signore degli Anelli",
            autore: "Tolkien",
            categoria: "fantasy"
        },
        {
            titolo: "Harry Potter",
            autore: "Rowling",
            categoria: "fantasy"
        },
        {
            titolo: "Il Conte di Montecristo",
            autore: "Dumas",
            categoria: "narrativa classica"
        },
        {
            titolo: "Dune",
            autore: "Herbert",
            categoria: "fantascienza"
        },
        {
            titolo: "Fight Club",
            autore: "Palahniuk",
            categoria: "narrativa moderna"
        }
    ]
    //Creo un contenitore per la lista, mi servirà per tenere traccia del target dell'evento "click"
    let contenitorelista = document.getElementById("contenitorelista")
    document.body.append(contenitorelista)

    //Creo la lista
    let lista = document.createElement("ul")
    lista.innerText = "Lista libri"
    contenitorelista.append(lista)

    //Per ogni "libro" presente nell'array "libri", creo un elemento listitem e bottone che avranno rispettivamente, come innerText il titolo del libro "libro.titolo" e "aggiungi a preferiti" 
    libri.forEach(libro => {
        let titololibro = document.createElement("li")
        let bottone = document.createElement("button")

        titololibro.innerText = libro.titolo
        bottone.innerText = "Aggiungi a preferiti"

        lista.append(titololibro)
        titololibro.append(bottone)

        //Aggiungo un evento al contenitore della lista, se il target dell'evento è il bottone mostrerà un alert
        contenitorelista.addEventListener("click", function(event) {
            if(event.target === bottone){
                alert(`Il libro "${libro.titolo}" è stato aggiunto ai preferiti`)
            }
        })
    })
}
creolista()

//ESERCIZIO 75
//Creo una funzione che mi permetta di impostare attributi più velocemente perchè sono pigro
function aggiungoattributi(elemento, attributi){
    for(let key in attributi){
        elemento.setAttribute(key, attributi[key])
    }
}

//Creo la funzione operatore
function calcolatrice(){

    //Creo un contenitore div per i tag input
    let divcalcolatrice = document.getElementById("calcolatrice")
    document.body.append(divcalcolatrice)

    /*
    let label = document.createElement("label")
    label.setAttribute("for", "input1")
    label.innerText = "inserisci un numero"
    document.body.append(label)
    */

    let input1 = document.createElement("input")
    aggiungoattributi(input1, {"type":"number", "id":"input1","min":"0","max":"100","placeholder":"numero"})
    divcalcolatrice.append(input1)

    let input2 = document.createElement("input")
    aggiungoattributi(input2, {"type":"number", "id":"input2","min":"0","max":"100","placeholder":"numero"})
    divcalcolatrice.append(input2)

    //creo un contenitore div per i tag button
    let divoperatori = document.createElement("div")
    divcalcolatrice.append(divoperatori)

    let operazioni = ["+","-","*","/"]

    //creo un bottone per ogni segno con un ciclo sull'array "operazioni"
    operazioni.forEach(operatore => {
        let ButtOperazione = document.createElement("button")
        aggiungoattributi(ButtOperazione, {"class":"bottone"})
        ButtOperazione.innerText = operatore
        divoperatori.append(ButtOperazione)

        //Aggiungo un EventListener al div "divoperatori"
        divoperatori.addEventListener("click", function(event){
             //Casto i valori degli input come numeri per poter fare le operazioni matematiche.
            let valore1 = +input1.value
            let valore2 = Number(input2.value)
            let risultato
            if(event.target === ButtOperazione){
                switch(ButtOperazione.innerText){
                    case "+":
                        risultato = valore1 + valore2
                        alert(`Il risultato è ${risultato}`)
                        break;
                    case "-":
                        risultato = valore1 - valore2
                        alert(`Il risultato è ${risultato}`)
                        break;
                    case "/":
                        risultato = valore1 / valore2
                        alert(`Il risultato è ${risultato}`)
                        break
                    case "*":
                        risultato = valore1 * valore2
                        alert(`Il risultato è ${risultato}`)
                        break;
                }
            } 
        })
    })
}
calcolatrice()
