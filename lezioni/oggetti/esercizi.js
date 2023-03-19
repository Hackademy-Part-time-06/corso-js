"use strict";

/**
 * 

      Definisci un oggetto playlist che contiene una proprietà canzoni.
      Inserisci una o 2 canzoni e ciascuna deve avere le seguenti proprietà:
      titolo
      nomeCantante
      anno

      Dopo prevedi la possibilità di far inserire all’utente delle nuove canzoni.
      Ad ogni canzone inserita stampa in console tutte le canzoni:

 */

console.group("PLAYLIST");

let playlist = {
  canzoni: [
    {
      titolo: "Thunderstruck",
      nomeCantante: "AC/DC",
      anno: 1990,
    },
    {
      titolo: "Miss You",
      nomeCantante: "Rolling Stones",
      anno: 1978,
    },
  ],
  stampaCanzoni: function () {
    this.canzoni.forEach(function (canzone) {
      console.log(
        `${canzone.titolo} - ${canzone.nomeCantante} (${canzone.anno})`
      );
    });
  },
  aggiungiCanzone: function (titolo, cantante, anno) {
    this.canzoni.push({
      titolo: titolo,
      nomeCantante: cantante,
      anno: anno,
    });

    this.stampaCanzoni();
  },
};

playlist.aggiungiCanzone("Paranoid", "Black Sabbath", 1970);

console.groupEnd();











/**
 * 

      Definisci un oggetto rubrica che ha come proprietà gli utenti. 
      Per ogni utente, specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo 
      è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).
      Quindi popolare la rubrica con dei dati a piacere. 
      Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.

 */

console.group("RUBRICA");

let rubrica = {
  utenti: [
    {
      nome: "Gino",
      cognome: "Gini",
      telefono: "+39 1231231231",
      indirizzo: {
        citta: "Torino",
      },
    },
    {
      nome: "Pino",
      cognome: "Pinoli",
      telefono: "+39 1231231231",
      indirizzo: {
        citta: "Cagliari",
      },
    },
  ],
  eliminaUtente: function (nome, cognome) {
    let utenti = this.utenti.filter(function (utente) {
      return utente.nome !== nome && utente.cognome !== cognome;
    });

    this.utenti = utenti;
    this.stampaRubrica();
  },
  stampaRubrica: function () {
    this.utenti.forEach(function (utente) {
      console.log(`${utente.nome} ${utente.cognome} (${utente.telefono})`);
    });
  },
};

rubrica.eliminaUtente("Gino", "Gini");

console.groupEnd();












/**
 *
 *  -   Definisci un oggetto che rappresenti un garage, dovrà contenere una lista di automobili.
 *      Per ciascuna automobile (un oggetto => {brand : ‘renault’ , model : ‘twingo’}) definire una marca ed almeno un
 *      modello.
 *      Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
 *      Consigli:
 *      Puoi usare un array come base per salvare le automobili.
 *
 */

console.group("GARAGE");

let garage = {
  auto: [
    {
      marca: "fiat",
      modello: "500",
    },
    {
      marca: "fiat",
      modello: "panda",
    },
    {
      marca: "dacia",
      modello: "duster",
    },
    {
      marca: "fiat",
      modello: "tipo",
    },
    {
      marca: "lancia",
      modello: "y",
    },
    {
      marca: "lancia",
      modello: "delta",
    },
  ],
  automobiliPerMarca: function (marca) {
    let risultato = [];
    this.auto.forEach((elemento) => {
      if (elemento.marca === marca) {
        risultato.push(elemento);
      }
    });

    return risultato;
  },
};
console.log(garage.automobiliPerMarca("lancia"));

console.groupEnd();













/**
 *
 *  -   Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere una lista di giocatori che saranno
 *      formati dalle proprietà, nome e punteggi
 *      Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita
 */
console.group("BOWLING");

let salaBowling = {
  giocatori: [
    {
      nome: "Gino",
      punteggio: [10, 5, 8, 20],
    },
    {
      nome: "Pino",
      punteggio: [4, 5, 8, 25],
    },
    {
      nome: "Dino",
      punteggio: [10, 12, 18, 17],
    },
    {
      nome: "Rino",
      punteggio: [6, 15, 18, 2],
    },
  ],

  stampaGiocatori: function () {
    this.giocatori.forEach(function (giocatore) {
      console.log(
        `${
          giocatore.nome
        } - punteggi: ${giocatore.punteggio.join()} - totale: ${
          giocatore.totale ? giocatore.totale : ""
        }`
      );
    });
  },

  calcolaPunteggi: function () {
    this.giocatori.forEach((giocatore) => {
      let totale = 0;
      giocatore.punteggio.forEach((punteggio) => {
        totale += punteggio;
      });

      giocatore.totale = totale;
    });

    this.stampaGiocatori();
  },

  calcolaIlVincitore: function () {
    this.calcolaPunteggi();
    this.giocatori.sort((a, b) => {
      return b.totale - a.totale;
    });
    return this.giocatori[0];
  },
};

console.log(salaBowling.calcolaIlVincitore());

console.groupEnd();


















/**
 *
   Scrivi una funzione che conti le occorrenze dei singoli elementi presenti in array annidati

   es:
     input:
     [
     ["abc", "gino", "aaa"],
     ["abc", "dino", 123],
     ["aaa", "gino", 321],
     ["xyz", "klm", "aaa"],
     ]
   output:
     123: 1
     321: 1
     aaa: 3
     abc: 2
     dino: 1
     gino: 2
     klm: 1

 *
 */

console.group("CALCOLO OCCORRENZE");

let listeAnnidateDiEsempio = [
  ["abc", "gino", "aaa"],
  ["abc", "dino", 123],
  ["aaa", "gino", 321],
  ["xyz", "klm", "aaa"],
];
function esercizio2(lista) {
  let listaUnica = [];
  lista.forEach(function (elementoArray) {
    listaUnica = listaUnica.concat(elementoArray);
  });

  return listaUnica.reduce(function (obj, elementoArray) {
    if (!obj.hasOwnProperty(elementoArray)) {
      obj[elementoArray] = 1;
    } else {
      obj[elementoArray]++;
    }

    return obj;
  }, {});
}

console.log(esercizio2(listeAnnidateDiEsempio));

console.groupEnd();













/**
 *
 *    - Scrivi un programma che, per il sito www.lamiasuperlibreria.aulab, prendendo in input la lista "libri" ed una
 *      categoria passata dall’utente. Il programma dovrà ritornare una lista di tag anchor con il relativo url e come
 *      contenuto il titolo del libro. Questa lista dovrà contenere  solo gli elementi appartenenti alla categoria
 *      espressa in input.
 *
 *      La creazione della url dovrà rispettare queste regole:
 *      - tutte le lettere devono essere minuscole
 *      - gli spazi devono essere sostituiti con il simbolo "-"
 *      - la prima parte della url sarà il nome dell’autore e l’utlima il nome del libro unito a ".html"
 *
 *      esempio url:
 *        www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html
 *
 *      sempio tag anchor:
 *        <a href="www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html">Il signore degli anelli</a>
 *
 */


let libreria = {
  libri: [
    {
      titolo: "Il Signore degli Anelli",
      autore: "Tolkien",
      categoria: "fantasy",
    },
    {
      titolo: "Harry Potter",
      autore: "Rowling",
      categoria: "fantasy",
    },
    {
      titolo: "Il Conte di Montecristo",
      autore: "Dumas",
      categoria: "narrativa classica",
    },
    {
      titolo: "Dune",
      autore: "Herbert",
      categoria: "fantascienza",
    },
    {
      titolo: "Fight Club",
      autore: "Palahniuk",
      categoria: "narrativa moderna",
    },
  ],

  filtraPerCategoria: function (categoria) {
    let libriPerCategoria = this.libri.filter(function (libro) {
      return libro.categoria.toLowerCase() === categoria.toLowerCase();
    });

    return libriPerCategoria;
  },

  generaLinkHtml: function (libro) {
    let slug = libro.titolo.replaceAll(" ", "-");
    let link = `<a href="www.lamiasuperlibreria.aulab/${libro.autore.toLowerCase()}/${slug.toLowerCase()}.html">${
      libro.titolo
    }</a>`;

    return link 
  },

  linkPerCategoria: function(categoria) {
    let libri = this.filtraPerCategoria(categoria);
    let listaLink = libri.map((libro) => {
      return this.generaLinkHtml(libro);
    })

    return listaLink;
  }
};

console.log(libreria.linkPerCategoria("fantasy"))



