"use strict"


let pulsanteHome = document.getElementById("home")
let pulsanteAnnunci = document.getElementById("annunci")
let listaCategorie = document.getElementById("categorie")

if (window.location.href.includes("home")){
    pulsanteHome.classList.add("font_verde")
}
else if (window.location.href.includes("annunci")){
    pulsanteAnnunci.classList.add("font_verde")
}

function categoriaNav(){
    fetch(`/json/categorie.json`)
    .then(function(response){
        return response.json()
    })
    .then(function(categoria){
        categoria.forEach(function(lista){
            let liLista = document.createElement("li")
            liLista.innerHTML = `<a class="dropdown-item" href="#">${lista.name}</a>`
            listaCategorie.append(liLista)
        }) 
    })
}

function categoriaInRicerca(){
    fetch(`/json/categorie.json`)
    .then(function(response){
        return response.json()
    })
    .then(function(singolaCategoria){
        let tendina = document.getElementById("tendina")
        singolaCategoria.forEach(function(categoria){
            let opzione = document.createElement("option")
            opzione.setAttribute("value",categoria.name)
            opzione.innerText = categoria.name
            tendina.append(opzione)  
        })
        
    }
)}





categoriaInRicerca()
categoriaNav()

