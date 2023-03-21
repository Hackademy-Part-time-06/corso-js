//ESERCIZIO 56
function creoelementi(){
    let titolo = document.createElement("h1")
    titolo.innerText = "Libreria"
    document.body.append(titolo)

    let sottotitolo = document.createElement("h2")
    sottotitolo.innerText = "La mia libreria!"
    document.body.append(sottotitolo)
/*
    let immagine = document.createElement("img")
    immagine.src = "https://media.gettyimages.com/id/1185382671/it/vettoriale/sfondo-colorato-sfocato-astratto.jpg?s=612x612&w=0&k=20&c=EYvYNu2D0lBySym64BKUYVPeEHcffPayjYls3xNfKcs="
    document.body.append(immagine)
*/
}
creoelementi()
//ESERCIZIO 57
function aggiungoelementi(){
    let anchor = document.createElement("a")
    let link = document.createTextNode("Cerca su Google")
    anchor.appendChild(link)
    anchor.href = "https://www.google.com/"
    anchor.target = "blank"
    document.body.appendChild(anchor)
}
aggiungoelementi()
/*
//ESERCIZIO 58
function aggiungotesto(){
    let testo = document.createElement("div")
    testo.innerHTML = "<b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</b>"
    testo.style.fontSize = "18px"
    testo.style.color = "red"
    document.body.append(testo)
    let testo2 = document.createElement("div")
    testo2.innerHTML = "<i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</i>"
    testo2.style.textTransform = "uppercase"
    testo2.style.color = "green"
    document.body.append(testo2)
    let testo3 = document.createElement("div")
    testo3.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    testo3.style.color = "gray"
    document.body.append(testo3)
}
aggiungotesto()
*/
/*
//ESERCIZIO 59
*/
let lista = document.createElement("ul")
lista.innerHTML = "<li>libro1<ul><li>titolo: 'Il signore degli Anelli'<li>autore: 'Tolkien'<li>categoria: 'fantasy'</ul><li>libro2<ul><li>titolo: 'Harry Potter'<li>autore: 'Rowling'<li>categoria: 'fantasy'</ul><li>libro3<ul><li>titolo: 'Il Conte di Montecristo'<li>autore: 'Dumas'<li>categoria: 'narrativa classica'</ul>"
document.body.append(lista)

