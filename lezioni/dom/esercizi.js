"use strict"
console.log("Esercizi DOM")


/**
 * 
 
    Scrivi un programma che aggiunga ad una pagina html, senza contenuti testuali, i seguenti tag coi relativi contenuti:
    
    - h1: Libreria
    - h2: La mia libreria!
    - img: un’immagine a vostra scelta


*/

function addBasicElements() {
    let elementH1 = document.createElement("h1");
    let elementH2 = document.createElement("h2");
    let elementImg = document.createElement("img");

    elementH1.innerText = "Libreria";
    elementH2.innerText = "La mia libreria!";
    elementImg.setAttribute("src", "bookcase.jpg");
    elementImg.style.maxHeight = "200px";
    document.body.append(elementH1, elementH2, elementImg)
}


addBasicElements()





/**
 * 
 
    Scrivi un programma che aggiunga un link nella pagina, creata nell’esercizio precedente. 
    Questo link dovrà avere come testo “Cerca su Google” e deve aprire su un’altra finestra la pagina di ricerca di google


*/

function addSearchLink() {
    let elementSearchLink = document.createElement("a");
    elementSearchLink.setAttribute("href", "https://www.google.com");
    elementSearchLink.setAttribute("target", "_blank");
    elementSearchLink.innerText = "Cerca su Google";
    document.body.appendChild(elementSearchLink)
}

addSearchLink() 









/**
 

    Scrivi un programma che aggiunga nella pagina, creata nell’esercizio precedente, i seguenti testi con le seguenti caratteristiche

    - testo 1:
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


        caratteristiche: 
            font size: 18px
            font weight: bold
            color: red
            
    - testo 2: 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


        caratteristiche: 
            font style: italic
            tutto maiuscolo
            colore: verde


    - testo 3:
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        
        caratteristiche: 
            - colore: grigio


*/

function addStyledText() {
    let elementP1 = document.createElement("p");
    elementP1.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;
    elementP1.classList.add("stile-1");
    document.body.appendChild(elementP1)


    let elementP2 = document.createElement("p");
    elementP2.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;
    elementP2.classList.add("stile-2");
    document.body.appendChild(elementP2)


    let elementP3 = document.createElement("p");
    elementP3.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;
    elementP3.classList.add("stile-3");
    document.body.appendChild(elementP3)
}

addStyledText() 



/**
 
Scrivi un programma che aggiunga nella pagina, creata nell’esercizio prevedente, un elenco di libri riportando le seguenti informazioni

- titolo
- autore
- categoria

Elenco:

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




*/

function aggiungiLibri() {
    
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
    ];

    let elementoLista = document.createElement("ul");
    document.body.append(elementoLista)

    LIBRI.forEach((libro) => {
        let elementoLiLibro = document.createElement("li");
        elementoLiLibro.innerText = `${libro.titolo} - ${libro.autore} (${libro.categoria})`
        elementoLista.append(elementoLiLibro)
    })
  
}


aggiungiLibri()