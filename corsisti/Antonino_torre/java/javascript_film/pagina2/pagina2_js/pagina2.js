"use strict"

console.log("pagina2")

let urlNew = new URLSearchParams(window.location.search)

fetch(`http://www.omdbapi.com/?${urlNew}`)
.then(function(response){
    return response.json()
})
.then(function(lista){
    console.log(lista)


    let divContenitore = document.createElement("div")
    divContenitore.setAttribute("class", "row")
    document.body.append(divContenitore)
    console.log(lista)
    lista.Search.forEach(function(film){
        let card = document.createElement("div")
        card.setAttribute("class", "col-3")
        divContenitore.append(card)
        card.innerHTML= `<div class="card h-100">
          <img src="${film.Poster}" onError="this.onerror=null;this.src='https://placehold.co/600x400?text=image+not+present';" class="card-img-top" alt="Poster">
          <div class="card-body">
            <h5 class="card-title">${film.Title}</h5>
            <div class="card-text">${film.Year}</div>
            <div class="card-text">${film.Type}</div>
            <a href="http://127.0.0.1:5500/film.html?imdbID=${film.imdbID
        }&" target="_blank">Vai alla scheda</a>
          </div>
        </div>`
    })
})