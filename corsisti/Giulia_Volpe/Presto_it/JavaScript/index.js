"use strict"

// VARIABILI GLOBALI 

let btnSearch = document.getElementById("btn-cerca");
let input = document.getElementById("inputSearch");
let selectPerCategoria = document.getElementById("select-categoria")
let prezzoMin = document.getElementById("cerca-prezzo-min")
let prezzoMax = document.getElementById("cerca-prezzo-max")

//FILTRI

//FUNZIONE -- Cerco per nome dalla HomePage

function cercaPerNome() {
    let queryInput = input.value;

    let url = new URL(window.location.origin + "/annunci.html")
    url.searchParams.set("query", queryInput)
    window.location = url.href;
    console.log("input cerca---", queryInput)
}

//LISTENERS

function listenSearch() {
    btnSearch.addEventListener("click", event => {
        cercaPerNome()
    })
}

//FUNZIONI -- richiamo e eseguo

listenSearch()