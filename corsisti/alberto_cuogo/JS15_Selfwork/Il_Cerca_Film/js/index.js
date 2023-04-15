"use strict"


function ricercaFilm() {
    let contenitoreListaCard = document.getElementById("contenitore-lista-card")

    let form = document.querySelector("form")
    let inputTitolo = document.querySelector("input")

    let apiKey = "5e06d795"

    form.addEventListener("submit", function(event){
        event.preventDefault()
        contenitoreListaCard.innerHTML = ""

        let titoloInserito = inputTitolo.value

        let urlAPI = new URL("http://www.omdbapi.com/")
        urlAPI.searchParams.append("apikey", apiKey)
        urlAPI.searchParams.append("s", titoloInserito)
        // urlAPI.searchParams.append("page", "2")

        fetch(urlAPI)
        .then(function(response) {
            return response.json()})
        .then(function(listaFilmCercato) {
            console.log(listaFilmCercato)
            console.log(listaFilmCercato.Search)

            
            function stampaCard(oggettoFilmSingolo) {

                let divCardElement = document.createElement("div")
                divCardElement.classList.add("col-4", "my-2")
                contenitoreListaCard.append(divCardElement)

                let imgCardElement = document.createElement("img")
                imgCardElement.classList.add("w-100")
                imgCardElement.style.height = "25rem"
                imgCardElement.src = "https://placehold.co/600x400?text=image+not+present"

                if (listaFilmCercato.Search[oggettoFilmSingolo].Poster !== "N/A") {
                    imgCardElement.src = listaFilmCercato.Search[oggettoFilmSingolo].Poster
                }
                divCardElement.append(imgCardElement)

                let h3CardElement = document.createElement("h3")
                h3CardElement.innerHTML = `<strong>${listaFilmCercato.Search[oggettoFilmSingolo].Title}</strong>`
                divCardElement.append(h3CardElement)

                let annoMovieCardElement = document.createElement("p")
                annoMovieCardElement.classList.add("mb-0")
                annoMovieCardElement.innerHTML = `Anno: <strong>${listaFilmCercato.Search[oggettoFilmSingolo].Year.toUpperCase()}</strong>`
                divCardElement.append(annoMovieCardElement)

                let typeMovieCardElement = document.createElement("p")
                typeMovieCardElement.innerHTML = `Tipologia: <strong>${listaFilmCercato.Search[oggettoFilmSingolo].Type.toUpperCase()}</strong>`
                divCardElement.append(typeMovieCardElement)


                let contenitoreLinkCardElement = document.createElement("p")
                contenitoreLinkCardElement.classList.add("fw-bold", "text-end")
                let linkSchedaCardElement = document.createElement("a")
                linkSchedaCardElement.href = `http://127.0.0.1:5500/JS15_Selfwork/Il_Cerca_Film/movie.html?i=${listaFilmCercato.Search[oggettoFilmSingolo].imdbID}`
                linkSchedaCardElement.classList.add("link-primary", "text-decoration-none")
                linkSchedaCardElement.innerHTML = `SCHEDA FILM <i class="bi bi-film"></i>`
                contenitoreLinkCardElement.append(linkSchedaCardElement)
                divCardElement.append(contenitoreLinkCardElement)

            }

                
            for (let listaCard in listaFilmCercato.Search) {
                stampaCard(listaCard)
            }
            
        })

    })

}

ricercaFilm()