"use strict"

let contenitore = document.getElementById("contenitore-card")
let listaAnnunciGlobale = []
let cercaPerParola = document.getElementById("cercaTesto")
let valoreTendina = document.getElementById("tendina")
let pulsanteDiRicerca = document.getElementById("pulsanteDiCerca")
let valorePrezzoMax = document.getElementById("prezzo-max")
let valorePrezzoMin = document.getElementById("prezzo-min")

function richiamoLaFetch(){
    fetch (`/json/annunci.json`)
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
    <picture id="immagineCard_${card.id}" ><img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png" class="card-img-top" alt="..."></picture>
    <div class="card-body">
    <h5 class= "font_verde">${card.price} £ </h5>
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet...</p>
    </div>
    <div class="container font_verde bordo_tratteggiato_sotto">
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
    contenitore.innerHTML= ""
    listaAnnunci.forEach(function(card){
        creoCard(card)
    })
}

function cercaPerNome(query, listaAnnunci){
        let listaFiltrata = listaAnnunci.filter(function(card){
        let nomeMinuscolo = card.name.toLowerCase()
        let queryMinuscolo = query.toLowerCase()
        if (nomeMinuscolo.includes(queryMinuscolo)){
            return true
        }
    })
    return listaFiltrata
}

function cercaPerCategoria(query, listaAnnunci){
    let listaFiltrata = listaAnnunci.filter(function(card){
        if (query === card.category){
            return true
        }
        else if (query === "Seleziona-una-categoria"){
            return true
        }
    }) 
    return listaFiltrata
}

function filtraPerPrezzoMin(query, listaAnnunci){
    let listaFiltrata = listaAnnunci.filter(function(card){
        if (+card.price > +query){
            return true
        }
    })
    return listaFiltrata
}

function filtraPerPrezzoMax(query, listaAnnunci){
    let listaFiltrata = listaAnnunci.filter(function(card){
        if (+card.price < +query){
            return true
        }
    })
    return listaFiltrata
}

function ricercaFiltrata (){
    pulsanteDiRicerca.addEventListener("click",function(event){
        let listaFiltrata = listaAnnunciGlobale

        listaFiltrata = cercaPerNome(cercaPerParola.value,listaFiltrata)
        
        listaFiltrata = cercaPerCategoria(valoreTendina.value,listaFiltrata)
        
        listaFiltrata = filtraPerPrezzoMin(valorePrezzoMin.value,listaFiltrata)
        
        listaFiltrata = filtraPerPrezzoMax(valorePrezzoMax.value, listaFiltrata)

        stampaListaCard(listaFiltrata)
    })
}


richiamoLaFetch()
ricercaFiltrata()

/*
function stampaCategorie (){
    fetch (`/json/annunci.json`)
    .then(function(response){
        return response.json()
    })
    .then(function(annunci){
        console.log(annunci)
        listaAnnunciGlobale = annunci
        annunci.forEach(function(card){
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
            <picture id="immagineCard_${card.id}" ><img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png" class="card-img-top" alt="..."></picture>
            <div class="card-body">
            <h5 class= "font_verde">${card.price} £ </h5>
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet...</p>
            </div>
            <div class="container font_verde bordo_tratteggiato_sotto">
            <div class="row">
            <div class="col-6 text-center"><i class="fa-solid fa-tag"></i> ${card.category}</div>
            <div class="col-6 bordo_tratteggiato_destra text-center"><i class="fa-solid fa-calendar-day"></i> ${card.created_date}</div>
            </div>
            </div>
            </div>`
            let immagineCard = document.getElementById(`immagineCard_${card.id}`)
            immagineCard.prepend(badge) 
        })
    })
}

function filtraPerTesto (){
    
}


stampaCategorie()
console.log(listaAnnunciGlobale)
*/

