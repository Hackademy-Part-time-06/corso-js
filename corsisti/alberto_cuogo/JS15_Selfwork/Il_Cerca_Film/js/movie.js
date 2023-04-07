"use strict"

function stampaSchedaFilm() {
    let URLcorrente = new URL(window.location.href)

    let movieID = URLcorrente.search.slice(3)

    let apiKey = "5e06d795"

    let urlAPI = new URL("http://www.omdbapi.com/")
    urlAPI.searchParams.append("apikey", apiKey)
    urlAPI.searchParams.append("i", movieID)


    fetch(urlAPI)
    .then(function(response) {
        return response.json()})
    .then(function(schedaFilm) {
        console.log(schedaFilm)

        let h1 = document.querySelector("h1")
        h1.innerHTML = `<strong>${schedaFilm.Title}</strong>`

        let img = document.querySelector("img")
        img.src = schedaFilm.Poster


        let ul = document.querySelector("ul")

        for (let infoFilm in schedaFilm) {
            if (typeof schedaFilm[infoFilm] !== Object &&
                schedaFilm[infoFilm] !== "N/A" &&
                schedaFilm[infoFilm] !== schedaFilm.Title &&
                schedaFilm[infoFilm] !== schedaFilm.Poster &&
                schedaFilm[infoFilm] !== schedaFilm.Ratings) {
                let li = document.createElement("li")
                ul.append(li)
            
                li.classList.add("list-group-item")
        
                li.innerHTML = `${infoFilm}: <strong>${schedaFilm[infoFilm]}</strong>`
            }
        }

        
    })

}

stampaSchedaFilm()