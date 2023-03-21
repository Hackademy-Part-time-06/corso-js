"use strict"
//esercizio 56
/*
// Metto un h1 
let h1 = document.createElement("h1");
h1.innerText= "Libreria";
document.body.append(h1);
// Metto un h2 
let h2 = document.createElement("h2");
h2.innerText= "La mia libreria!";
document.body.append(h2)
//metto un img 
let img = document.createElement("img")
img.setAttribute("src","https://media.istockphoto.com/id/1252446507/it/foto/pianeta-nettuno-nello-spazio.jpg?s=612x612&w=0&k=20&c=lh5zVJzvh-aZ81DDS2oa7zzQbb6q61mCH1atrhB8VqE=")
document.body.append(img)
*/
//esercizio 57
/*
let sitoGoogle = document.createElement("a")
sitoGoogle.setAttribute("href","https://www.google.it/")
sitoGoogle.setAttribute("target","_blank")
sitoGoogle.innerText="Cerca su Google"
document.body.append(sitoGoogle)
*/
//esercizio 58
/*
let testo1= document.createElement("div")
testo1.innerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
testo1.style.color= "red"
testo1.style.fontSize= "18px"
testo1.style.fontWeight= "bold"
document.body.append(testo1)
let testo2= document.createElement("div")
testo2.innerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
testo2.style.color= "green"
testo2.style.fontStyle= "italic"
testo2.style.textTransform= "uppercase"
document.body.append(testo2)
let testo3= document.createElement("div")
testo3.innerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
testo3.style.color= "grey"
document.body.append(testo3)
*/
//esercizio 59
/*
const libri = [
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
let lista = document.createElement("ul")
lista.innerText= "Lista di Libri:"

libri.forEach(function(tuttiILibri){
        for (let key in tuttiILibri){
                let li= document.createElement("li")
                li.innerHTML= `<strong>${key}</strong> : ${tuttiILibri[key]}`  
                lista.append(li)
        }
})
document.body.append(lista)
*/