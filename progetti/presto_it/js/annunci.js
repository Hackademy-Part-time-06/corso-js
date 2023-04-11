"use strict"

console.log("annunci.js caricato")


let contenitoreListaAnnunci = document.getElementById("contenitore-lista-annunci");


function stampaCardAnnuncio(annuncio) {
    console.log("fn stampaCardAnnuncio:", annuncio)
    let contenitoreSingolaCard = document.createElement("div");
    contenitoreSingolaCard.classList.add("col-12", "col-sm-4", "mb-4");

    let badgeEl;
    if (annuncio.type === "sell") {
        badgeEl = ` <span class="badge bg-danger annuncio-type-badge">Vendo</span>`;
    }
    else {
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

    contenitoreListaAnnunci.append(contenitoreSingolaCard)
}

function stampaListaAnnunci(listaAnnunci=[]) {
    console.log("fn stampaListaAnnunci:", listaAnnunci)

    listaAnnunci.forEach((annuncio) => {
        stampaCardAnnuncio(annuncio)
    })
}


function caricaAnnunci() {
    fetch("/progetti/presto_it/fake-server/api/annunci.json")
    .then(response => response.json())
    .then(listaAnnunci => {
        console.log("Lista annunci:", listaAnnunci);

        stampaListaAnnunci(listaAnnunci)
    })
    .catch((error) => {
        console.error("Errore nella chiamata all'api degli annunci:", error)
    })
}


caricaAnnunci();

