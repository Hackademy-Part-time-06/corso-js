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

function cercaPerNome() {
    // prendo il valore dell'inpt
    let queryDiRicerca = inputCercaPerNome.value;
    console.log("queryDiRicerca:", queryDiRicerca)

    // creo la nuova url
    let url = new URL(window.location.origin + "/progetti/presto_it/annunci.html");

    // appendo il parametro alla nuova url
    url.searchParams.set("query", queryDiRicerca);


    console.log("URL:", url)

    // faccio il redirect
    window.location = url.href;
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

        cercaPerNome();
    })
}
listenerRicerca()