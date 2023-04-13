"use strict"

//http://www.omdbapi.com/?apikey=[yourkey]&
let urlsito = new URL(`http://www.omdbapi.com/`)
urlsito.searchParams.append("apikey","a25de3ce")

let inputFilm = document.getElementById("cerca_film")
let bottoneCerca = document.getElementById("button-addon2")
bottoneCerca.addEventListener("click",function(event){
    urlsito.searchParams.append("s",inputFilm.value)
    fetch(urlsito)
    .then(function(response){
        return response.json()
    })
    .then(function(raccolta){
        console.log(raccolta)
        let contenitore = document.createElement("div")
        contenitore.setAttribute("class", "row")
        document.body.append(contenitore)
        raccolta.Search.forEach(function(film){
            let card = document.createElement("div")
            card.setAttribute("class","col-3")
            contenitore.append(card)
            card.innerHTML= `<div class="card h-100">
              <img src="${film.Poster}" onError="this.onerror=null;this.src='https://placehold.co/600x400?text=image+not+present';" class="card-img-top" alt="Poster">
              <div class="card-body">
                <h5 class="card-title">${film.Title}</h5>
                <div class="card-text">${film.Year}</div>
                <div class="card-text">${film.Type}</div>
                <div class="card-text"><a href="http://127.0.0.1:5500/film.html?imdbID=${film.imdbID
            }&" target="_blank">Vai alla scheda</a></div>
              </div>
            </div>`
        })
        if (raccolta.totalResults > "10") {
            console.log("PAGINA 2")
            let pag2 = document.createElement("a")
            document.body.append(pag2)
            pag2.innerHTML =` <a href="http://127.0.0.1:5500/pagina2/pagina2.html?apikey=32949988&s=${inputFilm.value}&page=2" target="_blank">pagina2</a>`
          }
    })
})