"use strict"

console.log("file JS annunci caricato")

let contenitoreListaAnnunci = document.getElementById("contanitore-lista-annunci")

function caricaAnnunci() {

    fetch("/corsisti/Greta_Tunesi/JS_pronto.it/fake-server/annunci.json")
        .then(response => response.json())
        .then((listaAnnunci) => {
            console.log(listaAnnunci)

            stampaListaAnnunci()

        })
}
caricaAnnunci()


function stampaCardAnnunci(annuncio) {
    let contenitoreSingolaCard = document.createElement("div")
    contenitoreSingolaCard.classList.add("col-12", "col-sm-4", "mb-4");
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
}



function stampaListaAnnunci(listaAnnunci=[]) {
    console.log("fn stampaListaAnnunci:", listaAnnunci)

    // RESET CONTENUTO CONTENITORE
    contenitoreListaAnnunci.innerHTML = "";

    listaAnnunci.forEach((annuncio) => {
        stampaCardAnnunci(annuncio)
    })
}