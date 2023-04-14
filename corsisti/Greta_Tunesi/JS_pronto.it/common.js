"use strict"



function paginaCorrente(){
    let elementoMenu
    if (window.location.href.includes("index.html")) {
        elementoMenu = document.getElementById("tasto-home")
    }
    else if (window.location.href.includes("annunci.html")) {
        elementoMenu = document.getElementById("tasto-annunci")
    }

    //se trovo l'elemento, me lo colora
    if (elementoMenu) {
        elementoMenu.classList.add("active")
    }
}

paginaCorrente()

function menuCategorie() {

    fetch("/corsisti/Greta_Tunesi/JS_pronto.it/fake-server/categorie.json")
    .then(response => response.json())
    .then((listaCategorie) => {
    console.log(listaCategorie)

    let dropdownEl = document.getElementById("dropdown")
    listaCategorie.forEach(categoria => {
    
    let liCategoria = document.createElement("li")
    liCategoria.innerHtml = `<a class="dropdown-item" href="#"> ${categoria.name}</a>`
    // <li><a class="dropdown-item" href="#">Action</a></li>

    dropdownEl.append(liCategoria)

    })
})}




menuCategorie()