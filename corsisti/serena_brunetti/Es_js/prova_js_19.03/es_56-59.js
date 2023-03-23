/*Scrivi un programma che aggiunga ad una pagina html, senza contenuti testuali, i seguenti tag coi relativi contenuti:
    - h1: Libreria
    - h2: La mia libreria!
    - img: un’immagine a vostra scelta*/

let addH1 = document.createElement("h1")
addH1.innerText = "Libreria"
document.body.append(addH1)
let addH2 = document.createElement("h2")
document.body.append(addH2)
addH2.innerText = "La mia libreria!"
let addImg = document.createElement("img")
addImg.setAttribute("src", "https://www.hialeahfl.gov/ImageRepository/Document?documentID=15201")
document.body.append(addImg)

//Scrivi un programma che aggiunga un link nella pagina. Questo link dovrà avere come testo “Cerca su Google” e deve aprire su un’altra finestra la pagina di ricerca di google - 57

function addGoogle(cercaGoogle) {
    let addAnchor = document.createElement("a")
    addAnchor.setAttribute("href", "https://www.google.it/")
    addAnchor.setAttribute("target", "_blank")
    addAnchor.innerText = "Cerca su Google"
    return addAnchor
}
let searchGoogle = addGoogle()
document.body.append(searchGoogle)

// 58

let testo1 = document.createElement("p")
testo1.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
testo1.style.fontSize = "18px";
testo1.style.fontWeight = "bold";
testo1.style.color = "red";
document.body.append(testo1)

let testo2 = document.createElement("p")
testo2.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
testo2.style.fontStyle = "Italic";
testo2.style.textTransform = "uppercase";
testo2.style.color = "green";
document.body.append(testo2)

let testo3 = document.createElement("p")
testo3.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
testo3.style.color = "grey";
document.body.append(testo3)

// 59

const LIBRI = [
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

LIBRI.forEach(function (element) {
    let addUl = document.createElement("ul")
    let addli = document.createElement("li")
    addli.innerHTML = element.titolo;
    let addli1 = document.createElement("li")
    addli1.innerHTML = element.autore;
    let addli2 = document.createElement("li")
    addli2.innerHTML = element.categoria;

    addUl.append(addli)
    addUl.append(addli1)
    addUl.append(addli2)

    document.body.append(addUl)
})
