"use strict"
/*
// esercizio 56

let h1 = document.createElement("h1");
h1.innerText = "Libreria";
document.body.append(h1);
let h2 = document.createElement("h2");
h2.innerText = "La mia libreria";
document.body.append(h2);
let img = document.createElement("img");
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLJnzgcw-0NEcuH0joPa1I_-MCWg-yJ_v1FrDzT8&s");
document.body.append(img);




// esercizio 57

let a = document.createElement("a");
a.innerText = "Cerca su google";
a.setAttribute("href", "https://www.google.com");
a.setAttribute("target", "_blank");
document.body.append(a)


// esercizio 58

let testo1 = document.createElement("p");
testo1.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

document.body.append(testo1);
testo1.setAttribute("class", "stile-testo1");

let testo2 = document.createElement("p");
testo2.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

document.body.append(testo2);
testo2.setAttribute("class", "stile-testo2");

let testo3 = document.createElement("p");
testo3.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

document.body.append(testo3);
testo3.setAttribute("class", "stile-testo3");
*/

// esercizio 59


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

let lista = document.createElement("ul");

LIBRI.forEach(function (tuttiLibri) {
    for (let key in tuttiLibri) {
        let li = document.createElement("li");
        li.innerHTML = `<b>${key}</b> - ${tuttiLibri[key]}`
        lista.append(li)
    }
})

document.body.append(lista)