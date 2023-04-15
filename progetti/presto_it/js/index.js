"use strict"

console.log("Index.js caricato")

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
let bntCerca = document.getElementById("btn-cerca");
let inputCercaPerNome = document.getElementById("cerca-per-nome");
let inputCercaPerPrezzoMin = document.getElementById("cerca-per-prezzo-min")
let inputCercaPerPrezzoMax = document.getElementById("cerca-per-prezzo-max")



/**
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 * 
 * FILTRI
 * 
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 */

function cercaPerNome(urlDaCostruire) {
    
    // prendo il valore dell'input
    let queryDiRicerca = inputCercaPerNome.value;
    console.log("queryDiRicerca:", queryDiRicerca)

    if (queryDiRicerca === "") {
        return urlDaCostruire; // non eseguo il codice successivo
    }

    // appendo il parametro alla nuova url
    urlDaCostruire.searchParams.set("query", queryDiRicerca);

    console.log("cercaPerNome - URL:", urlDaCostruire.hrefr)

    return urlDaCostruire
}


function cercaPerCategoria(urlDaCostruire) {
    let categoria = selectCercaPerCategoria.value;

    if (categoria === "Tutte le categorie") {
        return urlDaCostruire;
    }

    // qui aggiungerò la nuova query string
    urlDaCostruire.searchParams.set("categoria", categoria)

    return urlDaCostruire
}



/**
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 * 
 * LISTENER
 * 
 * ////////////////////////////////////////
 * ////////////////////////////////////////
 */

function listenerRicerca() {
    bntCerca.addEventListener("click", function(event) {
        console.log("Bottone di ricerca cliccato");
        
        // creo la nuova url
        let url = new URL(window.location.origin + "/progetti/presto_it/annunci.html");
        
        url = cercaPerNome(url);

        url = cercaPerCategoria(url);


        // faccio il redirect
        window.location = url.href;
    })
}
listenerRicerca()