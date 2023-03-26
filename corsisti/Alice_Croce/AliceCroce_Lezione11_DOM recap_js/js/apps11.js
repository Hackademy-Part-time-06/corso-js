"use strict"
//A MARGINE: QUANDO LAVORI CON BOOTSTRAP, INSERISCI IL SUO CODICE, COPIALO DALLA PAGINA WEB, ALTRIMENTI NON FUNZIONERA' MAI----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Esercizio 69-----------------------------------
/*La Rubrica

Data la seguente lista di persone
let persone = [
        {
                nome: ‘Gino’
                cognome: ‘Ginoli’,
                nuovoUtente: false
        },
        {
                nome: ‘Pino
                cognome: ‘Pinoli’,
                nuovoUtente: true
        }
]
Crea una lista da visualizzare in una pagina html. Per la lista utilizza il list-group di bootstrap:

https://getbootstrap.com/docs/5.3/components/list-group/

<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>


Se l’utente ha la proprietà nuovoUtente settata a true aggiungi un badge con la scritta new di fianco al suo nome (https://getbootstrap.com/docs/5.3/components/badge/)*/

let persone = [
        {
                nome: " Gino",//inserisci uno spazio prima fra " e Gino così i nomi non si presenteranno attaccati nel broswer
                cognome: " Ginoli",
                nuovoUtente: false,
        },
        {
                nome: " Pino",
                cognome: " Pinoli",
                nuovoUtente: true,
        },
];

//STEP 1: crea l'elemento ul- aggiungi la classe ed appendilo

let elementoUl = document.createElement("ul");
elementoUl.classList.add("list-group");//aggiungi la classe di bootstrap altrimenti non funziona!!!
console.log(elementoUl)//fai un console, giusto per vedere se funziona, non è determinante
document.body.append(elementoUl);//appendilo spudoratamente nel body

//STEP 2: innesta un ciclo for/foreach per ciclare sia li (sottocategoria di ul) che le classi (IMPORTANTE!! perchè altrimenti non "rivelerà" la griglia di bootstrap)

persone.forEach(function (persona) {//hai settato "personA", quindi ciclerai il singolo, estrapolato da personE
        let liAnnidato = document.createElement("li");
        liAnnidato.classList.add("list-group-item");//setta la classe di bootstrap
        liAnnidato.innerHTML = `${persona.nome} ${persona.cognome}`;
        elementoUl.append(liAnnidato);
        
        //impostiamo il badge che sarà possibile SOLO SE l'utente è true, quindi userò un IF=SE
        if (persona.nuovoUtente) {//potevo anche inserire === true
                let newEntry = document.createElement("span");
                newEntry.setAttribute("class", "badge bg-secondary");
                newEntry.innerText = "New";
                liAnnidato.append(newEntry)
        }
});

//in merito a liAnnidato ==> puoi sia scriverlo come hai fatto su, cioè:

/*let liAnnidato = document.createElement("li");
        liAnnidato.classList.add("list-group-item")//setta la classe di bootstrap
        liAnnidato.innerHTML = `${persona.nome} ${persona.cognome}`
        elementoUl.append(liAnnidato);*/

//oppure:

/*let liAnnidato = document.createElement("li")
liAnnidato.innerText = persona.nome + " " + persona.cognome;
lista.append(liAnnidato);*/

//nel primo caso come noti usi il backtick con innerHTML, nel secondo caso invece inserusci il testo direttamente su innerText

//in merito a setAttribute e classList ==> puoi settare gli attributi in due modi, nel primo caso utilizzi classList e poi setti l'attributo:

/*let elementoUl = document.createElement("ul"); 
elementoUl.classList.add("list-group");
document.body.append(elementoUl);*/

//nel secondo caso utilizzi setAttribute e all'interno della parentesi inserisci prima la class e poi sua definizione (valore):

/*let newEntry = document.createElement("span");
                newEntry.setAttribute("class", "badge bg-secondary");
                newEntry.innerText = "New";
                liAnnidato.append(newEntry)*/

//=====> NB: l'attributo può essere una classe, un id, un href, un src, qualsiasi cosa e solo dopo il suo valore, lo definirei più flessibile come metodo<====

//Esercizio 70-----------------------------------

/*Il blog

Dato il seguente elenco di oggetti relativo ad un blog genera le card per ogni articolo:
let articoli = [
        {
                titolo: ‘Il realismo magico di Sergio Toppi’,
                riassunto: ‘NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".’,
                link: ‘https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/’,
                immagine: ‘https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg’
        },
        {
                titolo: ‘Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy’,
                riassunto:"Punk Rock Jesus" di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.”,
                link: ‘https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/’,
                immagine: ‘https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg’
        },
        {
                titolo: ‘La Zona Fantasma: i nuovi incubi Junji Ito’,
                riassunto. ‘Una nuova raccolta di racconti recentissimi per il maestro dell’orrore giapponese nati per il web.’,
                link: ‘https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/’,
                immagine: ‘https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg’
        }
]

Per ogni elemento genera una card di bootstrap (https://getbootstrap.com/docs/5.3/components/card/) da inserire nella tua pagina html
La card dovrà contenere:

- l’immagine
    - il titolo 
- il riassunto
- un bottone con scritto “Leggi di più” che linkerà alla pagina dell’articolo e la farà aprire in una nuova finestra*/

//L'esercizo mi chiede di "generare" le card, dato che anche in questo caso sono tutte uguali, io creerò tutti gli elementi dentro un ciclo, che sia for o forEach poco importa, quindi:

let articoli = [
        {
                titolo: "Il realismo magico di Sergio Toppi",
                riassunto: "NPE ristampa una storia del cosiddetto 'Filone fantastico toppiano', creata dal maestro Sergio Toppi nel 1987: 'Isola Gentile'.",
                link: "https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg",
        },
        {
                titolo: "Ma Gesù ascolta musica Punk? 'Punk Rock Jesus' di Sean Murphy",
                riassunto: "'Punk Rock Jesus' di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.",
                link: "https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg",
        },
        {
                titolo: "La Zona Fantasma: i nuovi incubi Junji Ito",
                riassunto: "Una nuova raccolta di racconti recentissimi per il maestro dell’orrore giapponese nati per il web.",
                link: "https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg",
        },
];

//posto che per sapere che attributi generare all'interno del ciclo devo usare il link di boostrap, lo incollo qui per avere un riferimento diretto:

/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/


articoli.forEach(singoloArticolo => {
        let cardDiv = document.createElement("div");
        document.body.append(cardDiv);
        //ora che ho creato l'elemento div, posso aggiungergli la classe e il valore con setAttribute
        cardDiv.setAttribute("class", "card");
        //il div di boostrap presenta anche uno style, bene, inseriamolo inline
        cardDiv.style.width = "18rem";

        //la procedura sarà uguale per tutti gli altri elementi: creare l'elemento, inserire l'attributo e appendere il tutto
        let cardImg = document.createElement("img");
        cardDiv.append(cardImg)//sto appendendo cardImg in cardDiv
        cardImg.setAttribute("src", singoloArticolo.immagine);
        cardImg.classList.add("card-img-top");
        //potevo anche usare una seconda volta il setAttribute, ma per variare utilizzo il classList.
        //tecnicamente con setAttribute dovrei anche settare l'alt, ma non lo farò.

        let cardBodyDiv = document.createElement("div");
        cardDiv.append(cardBodyDiv);
        cardBodyDiv.setAttribute("class", "card-body");

        let cardH5 = document.createElement("h5");
        cardBodyDiv.append(cardH5);
        cardH5.innerText = singoloArticolo.titolo;

        let cardP = document.createElement("p");
        cardBodyDiv.append(cardP);
        cardP.setAttribute("class", "card-text");
        cardP.innerText = singoloArticolo.riassunto;

        let cardA = document.createElement("a");
        cardBodyDiv.append(cardA);
        cardA.setAttribute("href", singoloArticolo.link);
        cardA.setAttribute("target", "_blank");
        cardA.classList.add("btn", "btn-primary");
        cardA.innerText = "Leggi articolo";
});

//Esercizio 71-----------------------------------













