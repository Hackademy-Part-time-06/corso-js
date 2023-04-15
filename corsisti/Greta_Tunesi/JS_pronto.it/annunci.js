"use strict"

console.log("file JS annunci caricato")

let contenitoreListaAnnunci = document.getElementById("contenitore-lista-annunci")

let listaAnnunciGlobale = []

function caricaAnnunci() {
    fetch("/corsisti/Greta_Tunesi/JS_pronto.it/fake-server/annunci.json")
    .then(response => response.json())
    .then((listaAnnunci) => {
        listaAnnunciGlobale = listaAnnunci
        //abbiamo creato una variabile globale perchè sennò questa variabile 
        //esisterebbe solo dentro questa funzione
        //e dandole il valore di una variabile globale la possiamo usare
        //perchè no il return dici? perchè non si usa con le robe asincrone
    console.log("lista annunci", listaAnnunci)

    stampaListaAnnunci(listaAnnunci)
        })
    .catch((error) => {
        console.error("Errore nella chiamata all'api degli annunci:", error)
    })
}
caricaAnnunci()


function stampaCardAnnunci(annuncio) {
    let contenitoreSingolaCard = document.createElement("div")
    contenitoreSingolaCard.classList.add("col-12", "col-sm-4", "mb-4");


    let badgeEl;
    if (annuncio.type === "sell") {
        badgeEl = ` <span class="badge bg-danger annuncio-type-badge">Vendo</span>`;
    }
    else {
        badgeEl = ` <span class="badge bg-custom annuncio-type-badge">Cerco</span>`;
    }

    contenitoreSingolaCard.innerHTML =
        `<div class="card">
    <img src="https://placehold.co/600x400?text=image+not+present" class="card-img-top">
    ${badgeEl}
    <div class="card-body">
        <h5 class="card-title price">${annuncio.price}</h5>
        <h5 class="card-title">${annuncio.name}</h5>
        <p class="card-text">Lorem Ipsum dolor sit amet...</p>
    </div>
    <div class="d-flex justify-content-evenly annuncio-extra-info-container">
        <div class="text-center w-50 py-2 aeic-category">${annuncio.category}</div>
        <div class="text-center w-50 py-2">${annuncio.created_date}</div>
    </div>
    </div>`

    contenitoreListaAnnunci.append(contenitoreSingolaCard)
    
}


function stampaListaAnnunci(listaAnnunci=[]) {
    console.log("fn stampaListaAnnunci:", listaAnnunci)

    // RESET CONTENUTO CONTENITORE
    contenitoreListaAnnunci.innerHTML = "";

    listaAnnunci.forEach((annuncio) => {
        stampaCardAnnunci(annuncio)
    })
}