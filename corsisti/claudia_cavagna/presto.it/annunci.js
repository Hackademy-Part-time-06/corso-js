"use strict"
console.log("annunci.js caricato")



let contenitore = document.getElementById("cards")
let listaAnnunciGlobale = []
let cercaPerParola = document.getElementById("cerca-testo")
let valoreTendina = document.getElementById("tendina")
let prezzoMin = document.getElementById("prezzo-min")
let prezzoMax = document.getElementById("prezzo-max")
let btnCerca = document.getElementById("btn-cerca")


function richiamoLaFetch(){
    fetch ("/api-mocked-data/annunci.json")
    .then(function(response){
        return response.json()
    })
    .then(function(card){
        listaAnnunciGlobale = card
        let listaFiltrata = listaAnnunciGlobale
        stampaListaCard(listaFiltrata)
        
    })
}

function creoCard(card){
    let cardSingola = document.createElement("div")
    cardSingola.setAttribute("class","col")
    contenitore.append(cardSingola)
    let badge = document.createElement("span")
    badge.setAttribute("class", "posizione-badge")
    if (card.type === "sell") {
        badge.innerText = "Vendo"
        badge.classList.add("badge", "bg-danger")
    }
    else if (card.type === "search") {
        badge.innerText = "Cerco"
        badge.classList.add("badge", "bg-success")
    }
    cardSingola.innerHTML = `<div class="card">
    <picture id="immagineCard_${card.id}"><img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png" class="card-img-top" alt="..."></picture>
    <div class="card-body">
    <h5 class= "color-text">${card.price}£ </h5>
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet...</p>
    </div>
    <div class="container color-text bordo_tratteggiato_sotto">
    <div class="row">
    <div class="col-6 text-center"><i class="fa-solid fa-tag"></i> ${card.category}</div>
    <div class="col-6 bordo_tratteggiato_destra text-center"><i class="fa-solid fa-calendar-day"></i> ${card.created_date}</div>
    </div>
    </div>
    </div>`
    let immagineCard = document.getElementById(`immagineCard_${card.id}`)
    immagineCard.prepend(badge) 
}

function stampaListaCard(listaAnnunci = []) {
    console.log(listaAnnunci)
    contenitore.innerHTML = ``
    listaAnnunci.forEach(function(card){
        creoCard(card)
    })
}

function filtraPerNome (query, listaAnnunci) {
    let listaFiltrata = listaAnnunci.filter(function(annuncio){
        let nomeMinuscolo = annuncio.name.toLowerCase()
        let queryMinuscolo = query.toLowerCase()

        if(nomeMinuscolo.includes(queryMinuscolo)) {
            return true
        }
        else {
            return false
        }
    })
    return listaFiltrata
}

function filtraPerCategoria (query, listaAnnunci) {
    let listaFiltrata = listaAnnunci.filter(function(annuncio){
        if(annuncio.category === query) {
            return true
        }
        else if (query === "seleziona-categoria") {
            return true
        }
        else {
            return false
        }
    })
    return listaFiltrata
}


function filtraPerPrezzoMin(query, listaAnnunci) {
    let listaFiltrata = listaAnnunci.filter(function(annuncio){
        if (annuncio.price > query) {
            return true
        }
        else {
            return false
        }
    })
    return listaFiltrata
}

function filtraPerPrezzoMax(query, listaAnnunci) {
    let listaFiltrata = listaAnnunci.filter(function(annuncio){
        if (annuncio.price < query) {
            return true
        }
        else {
            return false
        }
    })
    return listaFiltrata
}

function inizializzoFiltri () {
    btnCerca.addEventListener("click", function(event){
        let listaFiltrata = listaAnnunciGlobale
        listaFiltrata = filtraPerNome(cercaPerParola.value, listaFiltrata)
        
        listaFiltrata = filtraPerCategoria(valoreTendina.value, listaFiltrata)
        
        listaFiltrata = filtraPerPrezzoMin(prezzoMin.value, listaFiltrata)

        listaFiltrata = filtraPerPrezzoMax(prezzoMax.value, listaFiltrata)

        stampaListaCard(listaFiltrata)
    })
}



inizializzoFiltri()
richiamoLaFetch()






/*
function stampaAnnunci () {
    fetch("/api-mocked-data/annunci.json")
    .then(function (response){
        return response.json()
    })
    .then(function (listaAnnunci){
        listaAnnunci.forEach(function(info){
            console.log(info)
            listaAnnunciGlobale = listaAnnunci
            let card = document.createElement("div")
            card.setAttribute("class", "col")
            let divCards = document.getElementById("cards")
            divCards.append(card)
            card.innerHTML = `<div class="card color-bg p-2">
                <div class="card-body bg-white bordo-tratteggiato d-flex flex-column align-items-center">
                <picture id="image_${info.id}">
                <img src="https://picsum.photos/300/200" class="card-img-top" alt="immagine casuale">
                </picture>
                
                <h3 class="card-text color-text mt-3">${info.price}£</h3>
                <h5 class="card-title mt-3">${info.name}</h5>
                <p class="card-text mt-1">Lorem ipsum dolor sit amet...</p>
                <div class="container font_verde bordo_tratteggiato_sotto">
                <div class="row">
                <div class="col-6 text-center color-text"><i class="fa-solid fa-tag"></i>${info.category}</div>
                <div class="col-6 bordo_tratteggiato_destra text-center color-text"><i class="fa-solid fa-calendar-day"></i>${info.created_date}</div>
                </div>
                </div>
                </div>
            </div>`
            let img = document.getElementById(`image_${info.id}`)
            let badge = document.createElement("span")
            badge.setAttribute("class", "posizione-badge")
            if (info.type === "sell") {
                badge.innerText = "Vendo"
                badge.classList.add("badge", "bg-danger", "posizione-badge")
            }
            else if (info.type === "search") {
                badge.innerText = "Cerco"
                badge.classList.add("badge", "bg-success")
            }
            img.prepend(badge)
        })
    })
    .catch(function (error){
        console.error("Errore nella chiamata all'api degli annunci", error)
    })
}

function filtraPerNome (query, listaAnnunci) {
    console.log("query", query)
    console.log("lista annunci", listaAnnunci)
}


stampaAnnunci()
filtraPerNome()
*/