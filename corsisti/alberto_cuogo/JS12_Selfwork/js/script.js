"use strict"

// ! Esercizio 72
console.group("LANCIO DADO")

let dado = document.getElementById("dado")
let lanciaDado = document.getElementById("lancia-dado")

lanciaDado.addEventListener("click", function(event) {
    let numeroRandom = Math.floor(Math.random() * 6) + 1;
    console.log(numeroRandom)

    dado.innerText = `È uscito il numero ${numeroRandom}!`
})

console.groupEnd()


// ! Esercizio 73
console.group("LINK DISPETTOSO")

let linkGoogle = document.querySelector("#esercizio73 a")

let clickCount = 0


function linkCliccato(event) {
    event.preventDefault()

    clickCount++
    console.log(clickCount)

    if (clickCount < 3) {
        alert("Non sei ancora degno di utilizzare tale link dal potere illimitato!")
    } 
    else {
        alert("Sei finalmente degno! Clicca ora!")
        linkGoogle.removeEventListener("click", linkCliccato)
    }
}

linkGoogle.addEventListener("click", linkCliccato)

console.groupEnd()


// ! Esercizio 74
console.group("LIBRI PREFERITI")

let libri = [
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

    let ul = document.createElement("ul")
    ul.classList.add = "list-group"

    let esercizio74 = document.getElementById("esercizio74")
    esercizio74.append(ul)

    libri.forEach(function(libro) {

        let li = document.createElement("li")
        ul.append(li)
    
        li.classList.add("list-group-item", "d-flex", "justify-content-between")

        li.innerHTML = "<b>" + libro.titolo + "</b>" + " " + `<button class="btn-preferiti" data-titolo="${libro.titolo}">aggiungi ai preferiti</button>`


    })
    ul.addEventListener("click", function(event) {
        let elementoCliccato = event.target
        if (elementoCliccato.classList.contains("btn-preferiti"))
        alert(`Il libro "${elementoCliccato.getAttribute("data-titolo")}" è stato aggiunto ai preferiti`)
    
    })

console.groupEnd()


// ! Esercizio 75
console.group("CALCOLATRICE")
/*
let input1 = document.getElementById("numero1")
let input2 = document.getElementById("numero2")
let risultato = document.getElementById("risultato")

let addizione = document.getElementById("addizione")
let sottrazione = document.getElementById("sottrazione")
let moltiplicazione = document.getElementById("moltiplicazione")
let divisione = document.getElementById("divisione")

addizione.addEventListener("click", function() {
    let somma = +input1.value + +input2.value

    risultato.innerText = `${input1.value} + ${input2.value} = ${somma}`
})

sottrazione.addEventListener("click", function() {
    let somma = +input1.value - +input2.value

    risultato.innerText = `${input1.value} - ${input2.value} = ${somma}`
})

moltiplicazione.addEventListener("click", function() {
    let somma = +input1.value * +input2.value

    risultato.innerText = `${input1.value} * ${input2.value} = ${somma}`
})

divisione.addEventListener("click", function() {
    let somma = +input1.value / +input2.value

    risultato.innerText = `${input1.value} / ${input2.value} = ${somma}`
})
*/


function calcolatrice() {
    let input1 = document.getElementById("numero1")
    let input2 = document.getElementById("numero2")
    let risultato = document.getElementById("risultato")

    let contenitoreOperatore = document.getElementById("contenitore-operatore")
    contenitoreOperatore.addEventListener("click", function(event) {
        let operatore = event.target
        let simboloOperatore = ""
        let somma

        switch (operatore.getAttribute("id")) {
            case "addizione":
                simboloOperatore = "+"
                somma = +input1.value + +input2.value
                break
            
            case "sottrazione":
                simboloOperatore = "-"
                somma = +input1.value - +input2.value
                break

            case "moltiplicazione":
                simboloOperatore = "*"
                somma = +input1.value * +input2.value
                break

            case "divisione":
                simboloOperatore = "/"
                somma = +input1.value / +input2.value
                break
        }


        risultato.innerText = `${input1.value} ${simboloOperatore} ${input2.value} = ${somma}`    
    })
}

calcolatrice()

console.groupEnd