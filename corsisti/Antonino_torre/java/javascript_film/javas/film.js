"use strict"

let parametri= new URLSearchParams(window.location.search)
let urlsito= new URL(`http://www.omdbapi.com/`)
urlsito.searchParams.append("apikey","a25de3ce")
urlsito.searchParams.append("i",parametri.get("imdbID"))
fetch (urlsito)
.then (function(response){
    return response.json()
})
.then (function(film){
    console.log(film)
    let titolo = document.createElement("h1")
    document.body.append(titolo)
    titolo.innerText= film.Title
    let immagine = document.createElement("img")
    immagine.setAttribute("src",film.Poster)
    document.body.append(immagine)
    let lista = document.createElement("ul")
    document.body.append(lista)
    for (let key in film){
        if (key !== "Title" && key !== "Poster" && key !== "Ratings"){
            let liLista = document.createElement("li")
            lista.append(liLista)
            liLista.innerHTML = `<strong>${key}</strong>: ${film[key]}`
        }
    }
})