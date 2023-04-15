"use strict"

console.log("common.js caricato")

/**
 * Variabili globali 
 */

// elemento html - mi servirà sia in fase di popolamento che in fase di filtraggio -> quindi globale
let selectCercaPerCategoria = document.getElementById("cerca-per-categoria");
let menuUserAccessItem = document.getElementById("menu-user-access");

/**
 * mostro/nascondo gli item relativi all'utente nel menù
 * la informazione la reperisco dal localStorage
 */
function userStatusNelMenu() {
    let userStatus = localStorage.getItem("userStatus")
    console.log("userStatus:", userStatus);

    if (userStatus === "logged") {
        menuUserAccessItem.innerText = "Logout";
        menuUserAccessItem.setAttribute("href", "/progetti/presto_it/logout.html");
    }
}


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

/**
 * POTEVO FARLO PIU' SEMPLICE MA ERA LA SCUSA PER USARE UN PO' DI CONCETTI AVANZATI:
 * 
 * - IFEE 
 * - CLOSURE
 * - PROMISE
 * 
 */
let getCategorie = (function() {
    let promessaCategorie = new Promise((resolve, reject) => {
        fetch("/progetti/presto_it/fake-server/api/categorie.json")
        .then(response => response.json())
        .then((listaCategorie) => {
            resolve(listaCategorie)
        })
        .catch((error) => {
            console.error("getCategorie:", error)
            reject(error)
        })
    }) 
    return function() {
        return promessaCategorie
    }
})()


function popoloMenuCategorie() {
    getCategorie()
    .then((listaCategorie) => {
        console.log("Lista Categorie:", listaCategorie)

        // cerco/prendo l'elemento che contiene il dropdown al quale appenderò le singole categorie
        let dropdownEl = document.getElementById("menu-dropdown-categorie");
        listaCategorie.forEach((categoria) => {
            console.log("creo il singolo elemento per il dropdown delle categorie")

            // <li><a class="dropdown-item" href="#">Action</a></li>
            let liCategoria = document.createElement("li"); 
            liCategoria.innerHTML = `
                <a class="dropdown-item" href="#">${categoria.name}</a>
            `
            ;
            dropdownEl.append(liCategoria);
        })
    })
    .catch((error) => {
        console.error("Errore nella chiamata all'api delle categorie:", error)
    })
}


function popolaSelectCategorie() {
    if (selectCercaPerCategoria) {
        getCategorie()
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
}


userStatusNelMenu();
paginaCorrente();
popoloMenuCategorie();
popolaSelectCategorie();
