"use strict"

console.log("annunci.js caricato")

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
let contenitoreListaAnnunci = document.getElementById("contenitore-lista-annunci");
let bntCerca = document.getElementById("btn-cerca");
let inputCercaPerNome = document.getElementById("cerca-per-nome");
let inputCercaPerPrezzoMin = document.getElementById("cerca-per-prezzo-min")
let inputCercaPerPrezzoMax = document.getElementById("cerca-per-prezzo-max")
let selectSorting = document.getElementById("ordina-la-lista")

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

/**
 * Funzione che stampa la SINGOLA card
 */
function stampaCardSingoloAnnuncio(annuncio) {
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


/**
 * Funzione che stampa tutta la lista degli annunci -> tutte le card -> richiama la funzione 
 * "stampaCardAnnuncio" per ogni annuncio presente nella lista che gli passo in input
 */
function stampaListaAnnunci(listaAnnunci=[]) {
    console.log("fn stampaListaAnnunci:", listaAnnunci)

    // RESET CONTENUTO CONTENITORE
    contenitoreListaAnnunci.innerHTML = "";

    listaAnnunci.forEach((annuncio) => {
        stampaCardSingoloAnnuncio(annuncio)
    })
}


/**
 * Funzione che chiama l'API '/fake-server/api/annunci.json' -> richiama la funzione di stampa 
 * annunci passandogli il valore della risposta dell'api
 */
function caricaAnnunci() {
    fetch("/progetti/presto_it/fake-server/api/annunci.json")
    .then(response => response.json())
    .then(listaAnnunci => {
        listaAnnunciGlobale = listaAnnunci
        let listaFiltrata = listaAnnunciGlobale;

        console.log("Lista annunci:", listaAnnunci);

        // cerco i valori passati nella url dal blocco dei filtri in homepage
        let url = new URL(window.location.href);
        console.log("current URL:", url)

        // prendo il filtro corrispondente alla "ricerca per nome" 
        let queryDiRicerca = url.searchParams.get("query")        
        console.log("query di ricerca:", queryDiRicerca)

        // controllo che sia valorizzata la query string nella url relativa alla ricerca per nome passatammi dalla homepage
        if (queryDiRicerca) {

            // prefillo il campo input corrispondente alla 'ricerca per nome' 
            inputCercaPerNome.value = queryDiRicerca;

            // filtro gli annunci per nome
            listaFiltrata = cercaPerNome(inputCercaPerNome.value, listaFiltrata)
        }

        stampaListaAnnunci(listaFiltrata)
    })
    .catch((error) => {
        console.error("Errore nella chiamata all'api degli annunci:", error)
    })
}


/**
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 * 
 * FILTRI
 * 
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 */

/**
 * Cerca per nome
 */
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

/**
 * Cerca per categoria
 */
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

/**
 * Cerca per prezzo minimo
 */
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

/**
 * Cerca per prezzo massimo
 */
function cercaPerPrezzoMassimo(prezzoMax, listaAnnunci) {
    console.log("cercaPerPrezzoMassimo - prezzoMax:", prezzoMax)
    console.log("cercaPerPrezzoMassimo - listaAnnunci:", listaAnnunci);
    
    let listaFiltrata = listaAnnunci;
    
    listaAnnunci.filter((annuncio) => {
        if (+annuncio.price < +prezzoMax) {
            return true
        }
        else {
            return false
        }
    })

    return listaFiltrata;
}



/**
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 * 
 * SORTING
 * 
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 */

function sorting(ordinaPer, listaAnnunci) {
    console.log("sorting - ordinaPer:", ordinaPer);
    console.log("sorting - listaAnnunci:",  listaAnnunci)

    let listaOrdinata  = listaAnnunci.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      });

    return listaOrdinata;
}




/**
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 * 
 * LISTENERS
 * 
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 */
function listenerRicerca() {
    bntCerca.addEventListener("click", function(event) {
        console.log("Bottone 'cerca' cliccato")
        
        let listaFiltrata = listaAnnunciGlobale

        listaFiltrata = cercaPerNome(inputCercaPerNome.value, listaFiltrata)

        listaFiltrata = cercaPerCategoria(selectCercaPerCategoria.value, listaFiltrata);

        listaFiltrata = cercaPerPrezzoMin(inputCercaPerPrezzoMin.value, listaFiltrata);

        listaFiltrata = cercaPerPrezzoMassimo(inputCercaPerPrezzoMax.value, listaFiltrata);

        listaFiltrata = sorting(selectSorting.value, listaFiltrata)

        stampaListaAnnunci(listaFiltrata)
    })
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
listenerRicerca()
caricaAnnunci();

