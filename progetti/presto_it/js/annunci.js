"use strict"

console.log("annunci.js caricato")

function  caricaAnnunci() {
    fetch("/progetti/presto_it/fake-server/api/annunci.json")
    .then(response => response.json())
    .then(listaAnnunci => {
        console.log("Lista annunci:", listaAnnunci);
    })
    .catch((error) => {
        console.error("Errore nella chiamata all'api degli annunci:", error)
    })}


caricaAnnunci();