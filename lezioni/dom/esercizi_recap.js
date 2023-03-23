"use strict";
console.log("Esercizi DOM");

let mainContainer = document.getElementById("main-content");

function addHr() {
  let hr = document.createElement("hr");
  hr.classList.add("my-5");
  mainContainer.append(hr);
}

/**
 La Rubrica

 Data la seguente lista di persone
 let persone = [
 {
                nome: "Gino"
                cognome: "Ginoli",
                nuovoUtente: false
        },
 {
                nome: "Pino
                cognome: "Pinoli",
                nuovoUtente: true
        }
 ]
 Crea una lista da visualizzare in una pagina html. Per la lista utilizza il list-group di bootstrap:

 https://getbootstrap.com/docs/5.3/components/list-group/


 Se l"utente ha la proprietà nuovoUtente settata a true aggiungi un badge con la scritta new di fianco al suo nome (https://getbootstrap.com/docs/5.3/components/badge/)

*/

function rubrica() {
  let persone = [
    {
      nome: "Gino",
      cognome: "Ginoli",
      nuovoUtente: false,
    },
    {
      nome: "Pino",
      cognome: "Pinoli",
      nuovoUtente: true,
    },
  ];

  let elementoUl = document.createElement("ul");
  elementoUl.classList.add("list-group");

  mainContainer.append(elementoUl);

  persone.forEach((persona) => {
    let contenuto = `${persona.nome} ${persona.cognome}`;
    if (persona.nuovoUtente) {
      contenuto += ` <span class="badge bg-secondary">New</span>`;
    }
    let elementoLi = document.createElement("li");
    elementoLi.classList.add("list-group-item");
    elementoLi.innerHTML = contenuto;
    elementoUl.append(elementoLi);
  });

  addHr();
}

rubrica();

/**

Il blog

Dato il seguente elenco di oggetti relativo ad un blog genera le card per ogni articolo:
let articoli = [
        {
                titolo: "Il realismo magico di Sergio Toppi",
                riassunto: "NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".",
                link: "https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg"
        },
        {
                titolo: "Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy",
                riassunto:"Punk Rock Jesus" di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.”,
                link: "https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg"
        },
        {
                titolo: "La Zona Fantasma: i nuovi incubi Junji Ito",
                riassunto. "Una nuova raccolta di racconti recentissimi per il maestro dell"orrore giapponese nati per il web.",
                link: "https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg"
        }
]

Per ogni elemento genera una card di bootstrap (https://getbootstrap.com/docs/5.3/components/card/) da inserire nella tua pagina html
La card dovrà contenere:

- l"immagine
- il titolo
- il riassunto
- un bottone con scritto “Leggi di più” che linkerà alla pagina dell"articolo e la farà aprire in una nuova finestra

*/

function blog() {
  let articoli = [
    {
      titolo: "Il realismo magico di Sergio Toppi",
      riassunto:
        'NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".',
      link: "https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/",
      immagine:
        "https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg",
    },
    {
      titolo: "Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy",
      riassunto:
        '"Punk Rock Jesus" di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.',
      link: "https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/",
      immagine:
        "https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg",
    },
    {
      titolo: "La Zona Fantasma: i nuovi incubi Junji Ito",
      riassunto:
        "Una nuova raccolta di racconti recentissimi per il maestro dell'orrore giapponese nati per il web.",
      link: "https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/",
      immagine:
        "https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg",
    },
  ];


  let row = document.createElement("div");
  row.classList.add("row")

  articoli.forEach((articolo) => {

    let elementoCard = document.createElement("div");
    elementoCard.classList.add("col-4");

    let contenuto = `
    <div class="card">
      <img src="${articolo.immagine}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${articolo.titolo}</h5>
        <p class="card-text">${articolo.riassunto}</p>
        <a href="${articolo.link}" class="btn btn-primary" target="_blank">Leggi tutto</a>
      </div>
    </div>
    `;
  
    elementoCard.innerHTML = contenuto;
    row.append(elementoCard);
  });

  mainContainer.append(row)

  addHr();
}


blog()





/**
La Registrazione

Chiedi all’utente i seguenti dati tramite 3 prompt:

- username
- email
- password

Una volta inseriti i dati mostra una modale col titolo “Registrazione Effettuata” e col testo:
“Ciao ${username} (${email}), benvenuto nella tua area personale”

La modale la devi creare tramite bootstrap: https://getbootstrap.com/docs/5.3/components/modal/
*/


function registrazione() {
  let username = "ginoweb";
  let email = "gino@ginoweb.it";
  let password = "123millegini";

  let elementoModale = document.createElement("div");
  let contenuto = `

  <div class="modal fade" id="modale-registrazione" tabindex="-1" aria-labelledby="modale-registrazione-label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modale-registrazione-label">Registrazione Effettuata</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Ciao ${username} (${email}), benvenuto nella tua area personale
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `;

  elementoModale.innerHTML = contenuto;

  document.body.append(elementoModale);


  const myModal = new bootstrap.Modal(document.getElementById('modale-registrazione'), {})
  myModal.show()
}


registrazione()