"use strict"


/*esercizio56*/

/*
let creaElementi = function(elemento){
    
    return document.createElement(elemento)
}

creaElementi("h1")
*/

let h1 = document.getElementById("titolo").innerText = "Libreria"

let h2 = document.getElementById("sottotitolo").innerText = "La mia Libreria!"

let img = document.getElementById("immagineProva").src = "./Media/Img/trasferimento.jpeg"


/*let creaElementi = function(elemento){
    h1.innerText = `${elemento}`
}

creaElementi("testo di prova")
*/


/*esercizio57*/

let a = document.createElement("a")
a.innerText = "Cerca su Google"
a.href = "https://www.google.com/webhp?hl=it&sa=X&ved=0ahUKEwiG94PFkej9AhVjS_EDHZMrB_gQPAgI"
a.target = "_blank"
document.body.append(a)


/*esercizio58*/


let testo1 = document.createElement("p")
testo1.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

document.body.append(testo1)


testo1.style.fontSize = "18px"
testo1.style.fontWeight = "bold"
testo1.style.color = "red"

let testo2 = document.createElement("p")

testo2.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

document.body.append(testo2)

testo2.style.fontStyle = "italic"
testo2.style.textTransform = "uppercase"
testo2.style.color = "green"


let testo3 = document.createElement("p")

testo3.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

document.body.append(testo3)

testo3.style.color = "gray"





/*esercizio59*/

let listaLibri = function ([{titolo, autore, categoria}]){

    const LIBRI = document.createElement("p")
    LIBRI.innerText = "Lista Libri"
    document.body.append(LIBRI)

    let lista = [
        {
            titolo: titolo,
            autore: autore,
            categoria: categoria,
        }
    ]

    /*let addUl = document.createElement("ol")
    addUl = titolo
    document.body.append(addUl)
    
    let addLi = document.createElement("li")
    addLi = autore
    document.body.append(addLi)
    
    let addLiCat = document.createElement("li")
    addLiCat = categoria
    document.body.append(addLiCat)*/

    return lista
}

let libriCatalogo = listaLibri(
    [
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
)


console.log(libriCatalogo)

/*const LIBRI = document.createElement("ul")

LIBRI.innerText = "Lista Libri"
document.body.append(LIBRI)

let addLi = document.createElement("li")*/

