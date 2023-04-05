"use strict"

// PROGETTO SITO CERCA FILM

let divCardContainer = document.getElementById("cardContainer");
let form = document.querySelector("form");
let submit = document.getElementById("submitBtn");
let input = document.getElementById("inputTitolo");

submit.addEventListener("click", function (event) {
    event.preventDefault()
    let urlApi = new URL("http://www.omdbapi.com/?apikey=201e6329")
    divCardContainer.innerHTML = ""
    let valInput = input.value;

    urlApi.searchParams.append("s", valInput)

    fetch(urlApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (listaFilm) {

            console.log(listaFilm)
            
            function creaCard(OggFilm) {
                let divCard = document.createElement("div");
                divCard.classList.add("col-4", "card", "m-2");
                divCard.style.width = "18rem";
                divCardContainer.append(divCard)

                let cardImg = document.createElement("img")
                cardImg.classList.add("card-img-top");
                //cardImg.alt = listaFilm.Search[OggFilm].Title;
                cardImg.src = "https://placehold.co/600x400?text=image+not+present";
                divCard.append(cardImg);

                if (listaFilm.Search[OggFilm].Poster !== "N/A") {
                    cardImg.src = listaFilm.Search[OggFilm].Poster
                }

                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                divCard.append(cardBody);

                let cardTitle = document.createElement("h5");
                cardTitle.classList.add("card-title");
                cardTitle.innerHTML = `${listaFilm.Search[OggFilm].Title}`
                cardBody.append(cardTitle);

                let cardP = document.createElement("p");
                cardP.classList.add("card-text")
                cardBody.append(cardP)

                let cardAnchor = document.createElement("a");
                cardAnchor.classList.add("btn", "btn-primary");
                cardAnchor.href = `http://127.0.0.1:5500/movie.html?i=${listaFilm.Search[OggFilm].imdbID}`
                cardAnchor.innerHTML = `<i class="bi bi-film">Scheda film</i>`
                cardBody.append(cardAnchor)
            
            }
       
            for(let listaCard in listaFilm.Search){
                creaCard(listaCard)
            }
        })

})


