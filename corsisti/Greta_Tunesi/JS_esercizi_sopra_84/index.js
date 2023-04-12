"use strict"



function stampaCard() {

    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(function(listaCard) {
        console.log(listaCard)

    let divEsterno = document.getElementById("div-contenitore")
    document.body.append(divEsterno)
    divEsterno.classList.add("p-4")


        listaCard.results.forEach(cardSingola => {
            console.log(cardSingola)

            let card = document.createElement("div")
            divEsterno.append(card)
            card.classList.add("card")
            card.setAttribute("width", "18rem")
            card.innerHTML = ` 
            
            <img src="${cardSingola.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${cardSingola.name}</h5>
            </div>`

            let pulsanteCard = document.createElement("button")
            card.append(pulsanteCard)
            pulsanteCard.classList.add("btn","btn-success", "p-3")
            pulsanteCard.innerText= "Mostra scheda personaggio"

        });


    })}

stampaCard()