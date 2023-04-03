"use strict"
console.log("Esercizio 54");
console.log("File JS caricato correttamnte");
/*
Scrivi un programma che, per il sito www.lamiasuperlibreria.aulab, prenda in input la lista “libri” ed una “categoria” passata dall’utente. Il programma dovrà ritornare una lista di tag anchor (naturalmente questi devono essere delle semplici stringhe da mostrare in console) con il relativo url e come contenuto il titolo del libro. Questa lista dovrà contenere  solo gli elementi appartenenti alla categoria espressa in input.
La creazione della url dovrà rispettare queste regole:
- tutte le lettere devono essere minuscole
- gli spazi devono essere sostituiti con il simbolo “-”
- la prima parte della url sarà il nome dell’autore e l’ultima il nome del libro unito a “.html”

esempio lista libri:

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

esempio url: 

     www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html

        
esempio tag anchor: 
        

    <a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>


esempio output finale:


    
        [ 
        '<a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>', 
        '<a href=”www.lamiasuperlibreria.aulab/herbert/dune.html”>Dune</a>' 
        ]
*/


