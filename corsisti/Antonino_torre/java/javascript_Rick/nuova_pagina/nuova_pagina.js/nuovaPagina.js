"use strict"

let parametri = new URLSearchParams(window.location.search)
let pagina = parametri.get("page")
console.log(pagina)

fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
.then (function(response){
    return response.json()
})
.then (function(personaggi){
    let contenitore = document.createElement("div")
    contenitore.setAttribute("class","row w-75 m-auto")
    document.body.append(contenitore)
    let pagine = personaggi.info.pages
    personaggi.results.forEach(function(singolo){
        let card = document.createElement("div")
        card.setAttribute("class","col-3")
        contenitore.append(card)
        card.innerHTML=`<div class="card">
        <img src="${singolo.image}" class="card-img-top" alt="Immagine del personaggio">
        <div class="card-body">
        <h5 class="card-title">${singolo.name}</h5>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalePersonaggio_${singolo.id}">
        Informazioni sul personaggio
        </button>
        </div>
        </div>`
        
        let modale = document.createElement("div")
        document.body.append(modale)
        modale.innerHTML= `<div class="modal fade" id="modalePersonaggio_${singolo.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${singolo.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <ul id = "listaSpecifiche_${singolo.id}"></ul>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
        </div>`
        
        let listaSpecifiche= document.getElementById(`listaSpecifiche_${singolo.id}`)
        for (let info in singolo){
            if (typeof singolo[info] !== "object"){
                let listarotta = document.createElement("li")
                listaSpecifiche.append(listarotta)
                listarotta.innerHTML = `<strong> ${info}</strong> : ${singolo[info]}`
            }
        }
    })
    let navbar = document.createElement("nav")
    navbar.setAttribute("aria-label","Page navigation example")
    document.body.append(navbar)
    let ListaNav = document.createElement("ul")
    ListaNav.setAttribute("class","pagination")
    navbar.append(ListaNav)
    for (let i = 1; i < pagine+1; i++){
        let liNav = document.createElement("li")
        liNav.setAttribute("class","page-item")
        ListaNav.append(liNav)
        let aNav = document.createElement("a")
        aNav.setAttribute("class","page-link")
        aNav.setAttribute("href",`http://127.0.0.1:5500/nuova_pagina/nuovapagina.html?page=${i}`)
        liNav.append(aNav)
        aNav.innerText= i
    }
})