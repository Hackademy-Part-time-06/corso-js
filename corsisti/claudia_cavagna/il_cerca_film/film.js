"use strict"

let stocazzo = new URLSearchParams(window.location.search)
let ID = stocazzo.get("imdbID")

let nuovoUrl = new URL(`http://www.omdbapi.com/`)
nuovoUrl.searchParams.append("apikey", "32949988")
nuovoUrl.searchParams.append("i", ID)

fetch(nuovoUrl)
.then(function(response){
    return response.json()
})
.then(function(film){
    console.log(film)
    let titolo = document.createElement("h1")
    document.body.append(titolo)
    titolo.innerText = film.Title
    let img = document.createElement("img")
    document.body.append(img)
    img.setAttribute("src", film.Poster)
    let lista = document.createElement("ul")
    document.body.append(lista)
    for (let key in film) {
        if (key !== "Title" && key !== "Poster" && key !== "Ratings") {
            let li = document.createElement("li")
            lista.append(li)
            li.innerHTML = `<b>${key}:</b> ${film[key]}`
        }
    }
})