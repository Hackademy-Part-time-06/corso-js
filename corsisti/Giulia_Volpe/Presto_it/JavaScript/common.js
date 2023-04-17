"use strict"

//VARIABILI GLOBALI
let menuSelect = document.getElementById("select-categoria")

function currentPage() {
    let menuEl
    if (window.location.href.includes("index.html")) {
        console.log("Sono nella HOME");
        menuEl = document.getElementById("menu-home");
    }
    else if (window.location.href.includes("annunci.html")) {
        console.log("Sono nella sezione ANNUNCI");
        menuEl = document.getElementById("menu-annunci")
    }
    if (menuEl) {
        menuEl.classList.add("active")
    }
}

function dropCategorie() {
    fetch("Mockup_Api/categorie.json")
        .then(response => response.json())
        .then(categorie => {
            console.log(categorie)
            let ulCat = document.getElementById("dd-menu-cat")

            categorie.forEach(categoria => {
                let liCateg = document.createElement("li")
                liCateg.innerHTML = `<a class="dropdown-item" href="#">${categoria.name}</a>`
                ulCat.append(liCateg)
            });

        })
        .catch(error => {
            console.log("Oooooops... Qualcosa è andato storto", error)
        })
}

function selectCategoria() {
    if (menuSelect) {
        fetch("Mockup_Api/categorie.json")
        .then(response => response.json())
        .then(listaCategorie => {
            console.log("lista categorie:", listaCategorie)
            listaCategorie.forEach(categoria =>{
                let optionSelect = document.createElement("option");
                optionSelect.innerText = categoria.name
                menuSelect.append(optionSelect)
            })
        })
    }
}


currentPage()
dropCategorie()
selectCategoria()