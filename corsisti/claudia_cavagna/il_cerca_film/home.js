"use strict"
console.log("Iniziamo")

let input = document.getElementById("input")
let button = document.getElementById("button-search")

let urlApi = new URL(`http://www.omdbapi.com/`)
urlApi.searchParams.append("apikey", "32949988")

button.addEventListener("click", function(){
    urlApi.searchParams.append("s", input.value)
    fetch(urlApi)
    .then(function(response){
        return response.json()
    })
    .then(function(lista){
        let divContenitore = document.createElement("div")
        divContenitore.setAttribute("class", "row")
        document.body.append(divContenitore)
        console.log(lista)
        lista.Search.forEach(function(film){
            let card = document.createElement("div")
            card.setAttribute("class", "col-4")
            divContenitore.append(card)
            card.innerHTML= `<div class="card h-100">
              <img src="${film.Poster}" onError="this.onerror=null;this.src='https://placehold.co/600x400?text=image+not+present';" class="card-img-top" alt="Poster">
              <div class="card-body">
                <h5 class="card-title">${film.Title}</h5>
                <div class="card-text">${film.Year}</div>
                <div class="card-text">${film.Type}</div>
                <a href="film.html?imdbID=${film.imdbID}" target="_blank">Vai alla scheda</a>
              </div>
            </div>`
        })
        
    })   
})


