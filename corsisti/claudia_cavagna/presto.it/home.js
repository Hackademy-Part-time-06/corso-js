"use strict"

function cardCategorie() {
    fetch("/api-mocked-data/categorie.json")
    .then(function(response){
        return response.json()
    })
    .then(function(lista){
        lista.forEach(function(info){
            console.log(info)
            let card = document.createElement("div")
            card.setAttribute("class", "col")
            let divCards = document.getElementById("cards")
            divCards.append(card)
            card.innerHTML = `<div class="card color-bg p-2">
                <div class="card-body bg-white bordo-tratteggiato d-flex flex-column align-items-center">
                <i class="${info.icon} bordo-icona m-3"></i>
                <h5 class="card-title mt-3">${info.name}</h5>
                <p class="card-text color-text mt-3">Annunci: ${info.announcementsCount}</p>
                </div>
            </div>`

        })
    })
    .catch(function(error){
        console.error("errore nella chiamata all'api delle categorie", error)
    })
}


cardCategorie()