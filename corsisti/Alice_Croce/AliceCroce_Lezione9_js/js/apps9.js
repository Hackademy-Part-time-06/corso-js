"user strict"

//Esercizio 56-------------------------------------------------------------------
/*Scrivi un programma che aggiunga ad una pagina html, senza contenuti testuali, i seguenti tag coi relativi contenuti:

    - h1: Libreria
    - h2: La mia libreria!
    - img: un’immagine a vostra scelta*/

/*let element = document.getElementById('txt');
let text = element.innerText || element.textContent;
element.innerHTML = text;*/
console.group("Esercizio 56")
//=> il testo ti chiede di inserire dei tag (h1, h2 e img) con contenuti in una pagina HTML di base ancora vuota, quindi userai "createElement";
const h1 = document.createElement("h1");
//dichiaro con const ed un nome arbitrario ossia l'elemento che voglio creare che sarebbe l'h1 (chiamato "tag") che inserirò anche nella sezione document.createElement;
console.log("Nuovo h1", h1);
//inserisco un console log per verificare che sia stato creato nella console il nuovo h1
h1.innerText = "Libreria";
//richiamo h1 e gli dico di inserire il testo dopo le virgole (innerText) che sarà il suo contenuto
document.body.append(h1);
//a questo punto comunico al body del documento che "appendo" un tag h1 all'interno di esso che andrà in calce a tutto, proprio perchè non sto definendo dove appenderlo.

const h2 = document.createElement("h2");
h2.innerText = "La mia libreria!";
document.body.append(h2);

const img = document.createElement("img");
img.src = 'https://picsum.photos/200';
// in questo caso sostituiamo .innerText con img.src
document.body.append(img);
console.groupEnd();

//Esercizio 57-------------------------------------------------------------------
/*Scrivi un programma che aggiunga un link nella pagina, creata nell’esercizio 56. Questo link dovrà avere come testo “Cerca su Google” e deve aprire su un’altra finestra la pagina di ricerca di google*/
console.group("Esercizio 57")
//=> il testo ci chiede di usare un a (anchor)
let a = document.createElement('a');
let linkGoogle = document.createTextNode("Cerca su Google");
//creo un testo cliccabile
a.append(linkGoogle);
//e lo appendo in coda a ciò che avevo precedentemente fatto
console.log(linkGoogle);
//con il console.log questo comparirà anche nella console nonostante già noi lo abbiamo sulla pagina HTML pubblicata con Go Live
a.title = "Cerca su Google";
//Questo appunto è il testo che abbiamo inserito nella pagina HTML pubblicata
a.href = "https://www.google.it/";
a.target = "_blank";
//link di riferimento
document.body.append(a);
//appendo il link di riferimento che è "ancorato" con a
console.groupEnd();

//Esercizio 58-------------------------------------------------------------------
console.group("Esercizio 58")
/*Scrivi un programma che aggiunga nella pagina, creata nell’esercizio 56, i seguenti testi con le seguenti caratteristiche


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
        - colore: grigio*/

const h4 = document.createElement("h4");
h4.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
document.body.append(h4);

h4.style.fontSize = "18px";
h4.style.fontWeight = "bold";
h4.style.color = "red";

const h5 = document.createElement("h5");
h5.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
document.body.append(h5);

h5.style.fontStyle = "italic";
h5.style.textTransform = "uppercase";
h5.style.color = "green";

const p = document.createElement("p");
p.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
document.body.append(p);

p.style.color = "gray";

console.groupEnd();

//Esercizio 59-----------------------------??-------------------DA CORREGGERE------------NON FUNZIONA
/*Scrivi un programma che aggiunga nella pagina, creata nell’esercizio 56, un elenco di libri riportando le seguenti informazioni

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
    ]*/

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
    },
]
 
/*LIBRI.forEach((elemento)=>{
  let li = document.createElement("li");
  li.innerText = elemento;
  listDaIterare.append(li);
})*/

/*let listDaIterare = document.getElementById("listaLibri");
for (i = 0; i < LIBRI.length; ++i) {
   let li = document.createElement('li');
   li.innerText = LIBRI[i];
   listDaIterare.append(li);
}*/


function creoUL(arrayChedevoFare) {
    //creo una lista di elementi
    let listaLibri = document.createElement('ul');
    //creo la lista dei singoli elementi, una sottolista praticamente
    let singolaLista = document.createElement('li');
    //innesto un maledetto ciclo for
    for (let i = 0; i < arrayChedevoFare.length; i++) {
        //imposto i contenuti all'interno creando un modo che accolga l'array che ne uscirà fuori da questo ciclo
        singolaLista.append(document.createTextNode(arrayChedevoFare[i]));
        //aggingo le singole voci o elementi alla lista
        listaLibri.append(singolaLista);
        //resetto (non so perchè) i singoli elementi della lista

    }
    //ora metto un bel ritorno per vedere questa benedetta lista
    return listaLibri;
}
document.querySelector('#raccolgoDati').appendChild(makeUL(LIBRI[0]));

makeUL(LIBRI.titolo);
console.log(LIBRI.titolo)



