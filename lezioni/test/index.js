"use strict";
console.log("Ci sono!");

function esercizio1() {
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
    {
      nome: "Lucia",
      cognome: "Lucilla",
      nuovoUtente: true,
    },
  ];
  let contenitore = document.querySelector("#container-esercizio-1");

  let ul = document.createElement("ul");
  ul.classList.add("list-group");
  contenitore.append(ul);

  persone.forEach((persona) => {
    console.log(persona);

    let li = document.createElement("li");
    li.classList.add("list-group-item");

    li.innerText = `${persona.nome} ${persona.cognome}`;

    if (persona.nuovoUtente) {
      // prima opzione
      /*
        let badge = document.createElement("span");
        badge.classList.add("badge", "bg-secondary");
        badge.innerText = "NEW"
        li.append(badge);
*/

      // seconda opzione
      li.innerHTML = `${persona.nome} ${persona.cognome} <span class="badge bg-secondary">New</span>`;
    }

    ul.appendChild(li);
  });
}

esercizio1();

function esercizio2() {
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

  let contenitore = document.querySelector("#container-esercizio-2");

  articoli.forEach((articolo) => {
    console.log("articolo", articolo)

    let col = document.createElement("div");
    col.classList.add("col-4")
    let contenuto = `
    <div class="card">
        <img src="${articolo.immagine}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${articolo.titolo}</h5>
            <p class="card-text">${articolo.riassunto}</p>
            <a href="${articolo.link}" class="btn btn-primary">Leggi tutto</a>
        </div>
    </div>
    `;

    console.log("contenuto", typeof contenuto);
    col.innerHTML = contenuto;

    contenitore.append(col)
  }) 
}


esercizio2()



function registrazione() {
    let username = prompt("username")
    let email = prompt("email");

    let contenitoreModale = document.createElement("div");
    let modale = `
    <div class="modal fade" id="modale-registazione" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Registrazione effettuata con successo</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            Ciao ${username} (${email}), benvenuto nella tua area personale!
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
    `;

    contenitoreModale.innerHTML = modale;
    document.body.append(contenitoreModale); // E' presente nel DOM

    // Come da documentazione di bootstrap!
    const modaleRegistrazione = new bootstrap.Modal(document.getElementById('modale-registazione'))
    console.log("Modale post registrazione:", modaleRegistrazione)


    setTimeout(function() {
        modaleRegistrazione.show()
    }, 3000)
}


registrazione()