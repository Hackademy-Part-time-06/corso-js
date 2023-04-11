"use strict"

console.log("common.js caricato")

// gestisco la classe active del menu
function paginaCorrente() {
    let elementoMenu;
    if (window.location.href.includes("index.html")) {
        console.log("sono nella homepage")
        elementoMenu = document.getElementById("menu-pagina-home");
    }
    else if (window.location.href.includes("annunci.html")) {
        console.log("sono nella pagina degli annunci")
        elementoMenu = document.getElementById("menu-pagina-annunci");
    }

    // se trovo l'elemento gli aggiungo la classe active
    if (elementoMenu) {
        elementoMenu.classList.add("active")
    }
}

paginaCorrente();