"use strict"

// ! Esercizio 56
console.group("AGGIUNGI TAG HTML")

let esercizio56 = document.getElementById("esercizio56")
console.log(esercizio56)

let h1 = document.createElement("h1")
h1.innerText = "LIBRERIA"
console.log(h1)

let h2 = document.createElement("h2")
h2.innerText = "La mia libreria"
console.log(h2)

let img = document.createElement("img")
img.src = "https://unsplash.it/500"
console.log(img)

esercizio56.append(h1, h2, img)


console.groupEnd()


// ! Esercizio 57
console.group("AGGIUNGI LINK")

let esercizio57 = document.getElementById("esercizio57")
console.log(esercizio57)

let link = document.createElement("a")

link.href = "https://www.google.it"
link.target = "_blank"

link.innerText = "Cerca su Google"

esercizio57.append(link)

console.groupEnd()


// ! Esercizio 58
console.group("AGGIUNGI TESTI")

let esercizio58 = document.getElementById("esercizio58")
console.log(esercizio58)


let testo1 = document.createElement("p")

testo1.classList.add("testo1")

testo1.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."


let testo2 = document.createElement("p")

testo2.classList.add("testo2")

testo2.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."


let testo3 = document.createElement("p")

testo3.classList.add("testo3")

testo3.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."


esercizio58.append(testo1, testo2, testo3)

console.groupEnd()


// ! Esercizio 59
console.group("LIBRERIA")

let esercizio59 = document.getElementById("esercizio59")
console.log(esercizio59)

let libri = [
    {
        titolo: "Il Signore degli Anelli",
        autore: "Tolkien",
        categoria: "fantasy"
    },
    {
        titolo: "Harry Potter",
        autore: "Rowling",
        categoria: "fantasy",
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

  for (let key in libri) {
    let paragrafo = document.createElement("p")

    paragrafo.innerHTML = "<b>titolo:</b> " + libri[key].titolo + "<br>" + "<b>autore</b>: " + libri[key].autore + "<br>" + "<b>categoria</b>: " + libri[key].categoria

    console.log(paragrafo)

    esercizio59.append(paragrafo)
  }


console.groupEnd()