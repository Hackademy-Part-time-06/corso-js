"use strict"
console.log("common.js caricato")

function tastiActive () {
    let pulsanteHome = document.getElementById("home")
    let pulsanteAnnunci = document.getElementById("annunci")
    if (window.location.href.includes("home")) {
        pulsanteHome.classList.add("parole-colorate")
    }
    else if (window.location.href.includes("annunci")) {
        pulsanteAnnunci.classList.add("parole-colorate")
    }
}

function categorieNavbar () {
    fetch("http://127.0.0.1:5500/api-mocked-data/categorie.json")
    .then(function(response){
        return response.json()
    })
    .then(function(lista){
        lista.forEach(function(info){
            let categorie = document.getElementById("categorieNav")
            let li = document.createElement("li")
            li.innerHTML = `<a class="dropdown-item" href="#">${info.name}</a>`
            categorie.append(li)
        })
    })
    .catch(function(error){
        console.error("Errore nella chiamata all'api delle categorie", error)
    })
}

function selezioneCategorie () {
    fetch("http://127.0.0.1:5500/api-mocked-data/categorie.json")
    .then(function(response){
        return response.json()
    })
    .then(function(lista){
        lista.forEach(function(info){
            let tendina = document.getElementById("tendina")
            let option = document.createElement("option")
            option.setAttribute("value", info.name)
            option.innerText = info.name
            tendina.append(option)
        })
    })
    .catch(function(error){
        console.error("Errore nella chiamata dell'api delle categorie", error)
    })
}



selezioneCategorie()
categorieNavbar()
tastiActive()