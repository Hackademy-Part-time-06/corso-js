"use strict"

console.log("annunci.js caricato")

// variabili globali
let contenitoreListaAnnunci = document.getElementById("contenitore-lista-annunci");
let bntCerca = document.getElementById("btn-cerca");
let inputCercaPerNome = document.getElementById("cerca-per-nome");
let selectCercaPerCategoria = document.getElementById("cerca-per-categoria")
let inputCercaPerPrezzoMin = document.getElementById("cerca-per-prezzo-min")
let listaAnnunciGlobale = [];


function popolaSelectCategorie() {
    fetch("/progetti/presto_it/fake-server/api/categorie.json")
    .then(response => response.json())
    .then((listaCategorie) => {
        console.log("popolaSelectCategorie - Lista Categorie:", listaCategorie)

        listaCategorie.forEach((categoria) => {
            let optionEl = document.createElement("option");
            optionEl.innerText = categoria.name;
            selectCercaPerCategoria.append(optionEl);
        })
    })
    .catch((error) => {
        console.error("Errore nella chiamata all'api delle categorie:", error)
    })
}


function stampaCardAnnuncio(annuncio) {
    //console.log("fn stampaCardAnnuncio:", annuncio)
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

    // RESET CONTENUTO CONTENITORE
    contenitoreListaAnnunci.innerHTML = "";

    listaAnnunci.forEach((annuncio) => {
        stampaCardAnnuncio(annuncio)
    })
}


function caricaAnnunci() {
    fetch("/progetti/presto_it/fake-server/api/annunci.json")
    .then(response => response.json())
    .then(listaAnnunci => {
        listaAnnunciGlobale = listaAnnunci
        console.log("Lista annunci:", listaAnnunci);

        stampaListaAnnunci(listaAnnunci);
    })
    .catch((error) => {
        console.error("Errore nella chiamata all'api degli annunci:", error)
    })
}

function cercaPerNome(query, listaAnnunci) {
    console.log("fn cercaPerNome - query:", query)
    console.log("fn cercaPerNome - listaAnnunci:", listaAnnunci)

    let listaFiltrata = listaAnnunci.filter((annuncio) => {
        let nomeTM = annuncio.name.toLowerCase();
        let queryTM = query.toLowerCase();
        
        if (nomeTM.includes(queryTM)) {
            return true
        }
        else {
            return false;
        }
    })


    console.log("fn cercaPerNome - listaFiltrata:", listaFiltrata)

    return listaFiltrata
}

function cercaPerCategoria(categoria, listaAnnunci) {
    console.log("cercaPerCategoria - categoria:", categoria)
    console.log("cercaPerCategoria - listaAnnunci:", listaAnnunci);

    let listaFiltrata = [];

    if (categoria === "Tutte le categorie") {
        listaFiltrata = listaAnnunci;
    }
    else {
        listaFiltrata = listaAnnunci.filter((annuncio) => {
            return annuncio.category === categoria
        })
    }

    console.log("cercaPerCategoria - listaAnnunciFiltrata:", listaFiltrata)

    return listaFiltrata;
}

function cercaPerPrezzoMin(prezzoMin, listaAnnunci) {
    console.log("cercaPerPrezzoMin - prezzoMin:", prezzoMin)
    console.log("cercaPerPrezzoMin - listaAnnunci:", listaAnnunci);
    
    let listaFiltrata = listaAnnunci.filter((annuncio) => {
        if (+annuncio.price > +prezzoMin) {
            return true
        }
        else {
            return false
        }
    })

    return listaFiltrata;
}

function inizializzaFiltri() {
    bntCerca.addEventListener("click", function(event) {
        console.log("Bottone 'cerca' cliccato")

        let listaFiltrata = listaAnnunciGlobale

        listaFiltrata = cercaPerNome(inputCercaPerNome.value, listaFiltrata)

        listaFiltrata = cercaPerCategoria(selectCercaPerCategoria.value, listaFiltrata);

        listaFiltrata = cercaPerPrezzoMin(inputCercaPerPrezzoMin.value, listaFiltrata);

        stampaListaAnnunci(listaFiltrata)
    })
}


popolaSelectCategorie();

inizializzaFiltri()

caricaAnnunci();

