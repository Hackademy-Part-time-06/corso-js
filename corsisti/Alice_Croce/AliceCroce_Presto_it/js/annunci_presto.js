"use strict";

console.log("anche il js della pagina annunci è caricato!");

/**
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 *
 * VARIABILI GLOBALI
 *
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 */

// elementi html -> li prendo all'inizo globalmente cosi da averli sempre disponibili e da non doverli ricercare
let contenitoreListaAnnunci = document.getElementById(
  "contenitore-lista-annunci"
);

// lista annunci con visilibità globale - popolata successivamente nella fetch verso l'api "fake-server/api/annunci.json"
let listaAnnunciGlobale = [];

/**
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 *
 * LOGICA
 *
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 */

/*
 Funzione che chiama l'API/fake-server/api/annunci.json' -> richiama la funzione di stampa annunci passandogli il valore della risposta dell'api
 */

//STEP1==>CARICO GLI ANNUNCI
function caricaAnnunci() {
  fetch("/corsisti/Alice_Croce/AliceCroce_Presto_it/fake-server/categorie.json")
    .then((response) => response.json())
    .then((listaAnnunci) => {
      listaAnnunciGlobale = listaAnnunci;
      let listaFiltrata = listaAnnunciGlobale;

      console.log("Lista annunci", listaAnnunci);
    })
    .catch((error) => {
      console.log("Errore nella chiamata dell'api degli annunci", error);
    });
}
//STEP2==>STAMPO LA LISTA
function stampaListaAnnunci(listaAnnunci = []) {
  console.log("stampa lista degli annunci:", listaAnnunci);

  // RESET CONTENUTO CONTENITORE
  contenitoreListaAnnunci.innerHTML = "";

  listaAnnunci.forEach((annuncio) => {
    stampaCardSingoloAnnuncio(annuncio);
  });
}
//STEP3==>STAMPA CARD DEL SINGOLO ANNUNCIO
function stampaCardSingoloAnnuncio(annuncio) {
  //creo il contenitore div
  let contenitoreSingolaCard = document.createElement("div");
  contenitoreSingolaCard.classList.add("col-12", "col-sm-4", "mb-4");

  //programmo che tipo di badge e dove deve andare
  let badgeEl;
  if (annuncio.type === "sell") {
    badgeEl = ` <span class="badge bg-danger annuncio-type-badge">Vendo</span>`;
  } else {
    badgeEl = ` <span class="badge bg-custom annuncio-type-badge">Cerco</span>`;
  }

  contenitoreSingolaCard.innerHTML = `
  <div class="card">
      <img src="https://placehold.co/600x400?text=image+not+present" class="card-img-top">
      ${badgeEl}
      <div class="card-body">
          <h5 class="card-title price">${annuncio.price}$</h5>
          <h5 class="card-title">${annuncio.name}</h5>
          <p class="card-text">Lorem Ipsum dolor sit amet...</p>
      </div>
      <div class="d-flex justify-content-evenly annuncio-extra-info-container">
          <div class="text-center w-50 py-2 aeic-category">${annuncio.category}</div>
          <div class="text-center w-50 py-2">${annuncio.created_date}</div>
      </div>
  </div>
  `;

  contenitoreListaAnnunci.append
  (contenitoreSingolaCard);
}

/**
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 *
 * INIZIALIZZAZIONI
 *
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 */
caricaAnnunci();
