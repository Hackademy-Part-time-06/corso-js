"use strict"

let urlNuova = new URL(window.location.href)
let imdbID = urlNuova.search.slice(3);

let urlApi = new URL("http://www.omdbapi.com/?apikey=201e6329")
urlApi.searchParams.append("i", imdbID)

fetch(urlApi)
    .then(function (response) {
        return response.json()
    })
    .then(function (film) {
        console.log(film)
        let ulContainer = document.getElementById("ul-Container")
        let h1Title = document.querySelector("h1")
        let ul = document.getElementById("ulFilm")
        let img = document.getElementById("imgFilm");
        h1Title.innerText = film.Title
        img.src = film.Poster
        for (let filmSingolo in film) {
            console.log(film.Title)
            if (filmSingolo !== "Title" && filmSingolo !== "Poster" && filmSingolo !== "Ratings") {
                let liFilm = document.createElement("li");
                liFilm.classList.add("list-group-item");
                liFilm.innerHTML = `${filmSingolo}: ${film[filmSingolo]}`
                ul.append(liFilm)
            }
        }
    })










