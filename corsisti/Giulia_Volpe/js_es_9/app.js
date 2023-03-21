"use strict"
//ESERCIZIO 56

function addTagH1(titolo, contenuto) {
    let nuovoTitolo = document.createElement(titolo);
    document.body.append(nuovoTitolo);
    nuovoTitolo.innerText = contenuto
    return nuovoTitolo
}
function addTagH2(titolo, contenuto) {
    let titolo2 = document.createElement(titolo);
    document.body.append(titolo2);
    titolo2.innerText = contenuto
    return titolo2
}
function addImg(immagine, link) {
    let img = document.createElement(immagine);
    img.setAttribute("src", link)
    document.body.append(img);
    return img
}
console.log(addTagH1("h1", "Libreria"))
console.log(addTagH2("h2", "La mia libreria!"))
console.log(addImg("img", "https://picsum.photos/200/300"))

//EESERCIZIO 57

function addLink(tag, link, target, contenuto) {
    let anchor = document.createElement(tag);
    anchor.setAttribute("href", link);
    anchor.setAttribute("target", target)
    anchor.innerText = contenuto;
    document.body.append(anchor);
    return anchor
};
console.log(addLink("a", "https://www.google.com", "_blank", "Cerca su Google"));

//ESERCIZIO 58
function addText1(tag, contenuto, fontSize, fontWeight, color) {
    let text = document.createElement(tag);
    text.innerText = contenuto
    text.style.fontSize = fontSize;
    text.style.fontWeight = fontWeight;
    text.style.color = color;
    document.body.append(text)
    return text
}
function addText2(tag, contenuto, fontStyle, toUpCase, color) {
    let text = document.createElement(tag);
    text.innerText = contenuto;
    text.setAttribute("class", toUpCase)
    text.style.fontStyle = fontStyle;
    text.style.color = color;
    document.body.append(text);
    return text
}
function addText3(tag, contenuto, color) {
    let text = document.createElement(tag);
    text.innerText = contenuto;
    text.style.color = color;
    document.body.append(text);
    return text
}
console.log(addText1("p", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "18px", "bold", "red"))
console.log(addText2("p", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "italic", ".capsLock", "green"))
console.log(addText3("p", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "gray"))

//ESERCIZIO 59

const libreria =
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

function createList(tag) {
    let libri = document.createElement(tag);
    document.body.append(libri);

    libreria.forEach(function(all){
        for (let key in all) {
            let singleItem = document.createElement("li")
            singleItem.innerHTML = "<strong>" + key + "</strong> - " + all[key];
            libri.append(singleItem)
            return singleItem
        }
    })
    return libri
}

console.log(createList("ul")); //perché mi torna solo il titolooooooo????