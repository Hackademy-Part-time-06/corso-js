"use strict"

//Es - 72

/*

Dati i seguenti tag html:

- <div id=”dado”></div>
- <button id=”lancia-dado”>Lancia dado</button>

al click del bottone genera un numero casuale da 1 a 6 ed inserisci l’output nel div dado.

*/

/*

// CREAZIONE DEI TAG HTML

// CREAZIONE DELLE VARIABILI AGGANCIATE AI TAG HTML
let dado_Lancio = document.getElementById("lancia-dado");
console.log("Questo è il lancio del dado mediante il click: ", dado_Lancio);

let dado_Risultato = document.getElementById("dado");
console.log("Questo è il container del numero randomico del dado: ", dado_Risultato);

// CREAZIONE DELL'EVENTO
dado_Lancio.addEventListener("click", getRandom);
function getRandom(value)   {
                                value = Math.floor(Math.random() * 6) + 1;
                                console.log("Questo è il risultato :", value);
                                dado_Risultato.innerHTML = value;
                            };
                            
                            
*/

//


// Es - 73

/*
Dato il seguente tag html:

- <a href=”https://www.google.it/”>Cerca su google</a>

fai in modo che ogni volta che un utente clicca sul link, invece di andare nella pagina di ricerca di google, appaia un alert con un qualsiasi messaggio. Solo dopo il terzo click sul link, verrà eseguito il suo naturale comportamento cambiando pagina.
*/

/*

// CREAZIONE TAG HTML

// CREAZIONE VARIABILE AGGANCIATA AD HTML
let anchor = document.getElementById("anchor");
console.log("Questa è la tag anchor :", anchor);


// CREAZIONE EVENTO
anchor.addEventListener("click", numeroDiClick_1);
function numeroDiClick_1(event)   {   
                                    alert("Siamo spiacenti, ma non puoi accedere alla pagina.");
                                    event.preventDefault();
                                    console.log(event.target);
                                    }

*/



// Es - 74

/*

 const libri = [
{
        titolo: “Il Signore degli Anelli”,
        autore: “Tolkien”,
        categoria: “fantasy”
},
{
        titolo: “Harry Potter”,
        autore: “Rowling”,
        categoria: “fantasy”
},
{
        titolo: “Il Conte di Montecristo”,
        autore: “Dumas”,
        categoria: “narrativa classica”
},
{
        titolo: “Dune”,
        autore: “Herbert”,
categoria: “fantascienza”
},
{
        titolo: “Fight Club”,
        autore: “Palahniuk”,
categoria: “narrativa moderna”
}
];
Crea un programma  che crei una lista usando il titolo dei libri.
Ogni titolo avrà al suo fianco un bottone con scritto “aggiungi ai preferiti”. Al click di uno specifico bottone verrà emesso un alert col seguente testo: 
        “Il libro {nome_del_libro} è stato aggiunto ai preferiti”

*/


const libri = [
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
    ];


// CREAZIONE LISTA

