"use strict"

setTimeout(function() {
    let portalSpinner = document.getElementById("portal-spinner")
    portalSpinner.classList.add("d-none")
    let containerBody = document.getElementById("container-body")
    containerBody.classList.remove("d-none")
}, 3000)


function scrollBackground(){
    if(document.documentElement.scrollTop > 100){
        let body = document.querySelector("body")
        body.classList.remove("bg-white")
        body.classList.add("bg-black")

        let subtitle = document.getElementById("subtitle")
        subtitle.classList.remove("text-black")
        subtitle.classList.add("text-light")
    }
    else{
        let body = document.querySelector("body")
        body.classList.remove("bg-black")
        body.classList.add("bg-white")

        let subtitle = document.getElementById("subtitle")
        subtitle.classList.remove("text-light")
        subtitle.classList.add("text-black")
    }
}

window.onscroll = function() {scrollBackground()};

let urlAPI = "https://rickandmortyapi.com/api/character/?page=1"


function listaCardPersonaggi() {
    let contenitoreCardList = document.getElementById("container-card-list")


    fetch(urlAPI)
    .then(function(response) {
        return response.json()})
    .then(function(personaggioSingolo) {
        console.log(personaggioSingolo)

        contenitoreCardList.innerHTML = ""

        let h3PaginaCorrente = document.getElementById("pagina-corrente")
        h3PaginaCorrente.innerHTML = `Pagina ${urlAPI.slice(48)}`


        function stampaCard(oggettoPersonaggioSingolo) {
            let divContainerCardElement = document.createElement("div")
            divContainerCardElement.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3")
            contenitoreCardList.append(divContainerCardElement)

            let divCardElement = document.createElement("div")
            divCardElement.classList.add("card", "p-2", "shadow", "border-0")
            divContainerCardElement.append(divCardElement)

            let imgCardElement = document.createElement("img")
            imgCardElement.classList.add("card-img-top")
            imgCardElement.src = personaggioSingolo.results[oggettoPersonaggioSingolo].image
            divCardElement.append(imgCardElement)

            let h2CardElement = document.createElement("h2")
            h2CardElement.classList.add("text-center", "p-2")
            h2CardElement.style.fontFamily = "'Delicious Handrawn', cursive"
            h2CardElement.innerHTML = personaggioSingolo.results[oggettoPersonaggioSingolo].name
            divCardElement.append(h2CardElement)


            let LinkCardElement = document.createElement("p")
            LinkCardElement.classList.add("fw-bold", "fs-5", "text-center", "bg-primary", "text-light", "p-2", "mx-3", "rounded-2")
            LinkCardElement.style.fontFamily = "'Open Sans', sans-serif"
            LinkCardElement.setAttribute("data-id", `${personaggioSingolo.results[oggettoPersonaggioSingolo].id}`)
            LinkCardElement.innerText = "SCHEDA PERSONAGGIO"
            divCardElement.append(LinkCardElement)
            
        }

        for (let listaCard in personaggioSingolo.results) {
            stampaCard(listaCard)
        }


        let paginationPre = document.getElementById("pagination-pre")
        let paginationNext = document.getElementById("pagination-next")

        if (personaggioSingolo.info.prev === null) {
            paginationPre.classList.remove("d-block")
            paginationPre.classList.add("d-none")
            paginationNext.classList.add("rounded")
        }
        else {
            paginationPre.classList.remove("d-none")
            paginationPre.classList.add("d-block")
            paginationNext.classList.remove("rounded")


        }
        paginationPre.addEventListener("click", function(event) {
            event.preventDefault()
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })

            console.log(personaggioSingolo.info.prev)
            urlAPI = personaggioSingolo.info.prev

            listaCardPersonaggi()
        })

        if (personaggioSingolo.info.next === null) {
            paginationNext.classList.remove("d-block")
            paginationNext.classList.add("d-none")
            paginationPre.classList.add("rounded")
        }
        else {
            paginationNext.classList.remove("d-none")
            paginationNext.classList.add("d-block")
            paginationPre.classList.remove("rounded")
        }    
        paginationNext.addEventListener("click", function(event) {
            event.preventDefault()

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })

            console.log(personaggioSingolo.info.next)
            urlAPI = personaggioSingolo.info.next

            listaCardPersonaggi()
        })
        

        const modaleSchedaPersonaggio = new bootstrap.Modal(document.getElementById("modale-personaggio"), {})

        let immaginePersonaggio = document.getElementById("modal-img")
        let titoloPersonaggio = document.getElementById("modal-title")

 
        contenitoreCardList.addEventListener("click", function(event) {
            let elementoCliccato = event.target
            if(elementoCliccato.hasAttribute("data-id")) {
                let personaggioSingoloID = event.target.getAttribute("data-id")

                let personaggio = personaggioSingolo.results.find((personaggio) => {
                    return personaggio.id === +personaggioSingoloID
                })

                titoloPersonaggio.innerHTML = personaggio.name
                immaginePersonaggio.src = personaggio.image

                let cardId = document.getElementById("cardId")
                cardId.innerHTML = `<span class="fs-5">ID:</span> <strong>${personaggio.id}</strong>`

                let cardStatus = document.getElementById("cardStatus")
                switch (personaggio.status) {
                    case "Alive":
                        cardStatus.innerHTML = `<i class="bi bi-heart-pulse-fill text-danger"></i>`                        
                        break;
                    case "Dead":
                        cardStatus.innerHTML = `<i class="fa-solid fa-skull"></i>`                        
                        break;
                    case "unknown":
                        cardStatus.innerHTML = `<i class="bi bi-question-lg text-dark"></i>`                        
                        break;                 
                }

                let cardGender = document.getElementById("cardGender")
                switch (personaggio.gender) {
                    case "Female":
                        cardGender.innerHTML = `<i class="bi bi-gender-female text-dark"></i>`                        
                        break;
                    case "Male":
                        cardGender.innerHTML = `<i class="bi bi-gender-male text-dark"></i>`                        
                        break;
                    case "Genderless":
                        cardGender.innerHTML = `<i class="bi bi-circle text-dark"></i>`                        
                        break;
                    case "unknown":
                        cardGender.innerHTML = `<i class="bi bi-question-lg text-dark"></i>`                        
                        break;                 
                }
                
                let cardOrigin = document.getElementById("cardOrigin")
                if (personaggio.origin.name !== "unknown") {
                    cardOrigin.innerHTML = `<strong>${personaggio.origin.name}</strong>`
                }
                else {
                    cardOrigin.innerHTML = `<em>origin:</em> <i class="bi bi-question-lg text-dark fw-bold"></i>`
                }

                let cardLocation = document.getElementById("cardLocation")
                cardLocation.innerHTML = `<strong>${personaggio.location.name}</strong>`

                let cardSpecies = document.getElementById("cardSpecies")
                cardSpecies.innerHTML = `<strong>${personaggio.species}</strong>`

                let cardType = document.getElementById("cardType")
                if (personaggio.type !== "") {
                    cardType.innerHTML = `<em><strong>${personaggio.type}</strong></em>`
                }
                else {
                    cardType.innerHTML = `<em>not specified</em>`
                }

                let cardEpisode = document.getElementById("cardEpisode")
                cardEpisode.innerHTML = ""
                for (let episodio in personaggio.episode) {
                    let divEpisodio = document.createElement("div")
                    divEpisodio.classList.add("col-2")
                    cardEpisode.append(divEpisodio)

                    let cardEpisodio = document.createElement("div")
                    cardEpisodio.classList.add("card", "shadow", "p-2", "text-center", "fw-bold")
                    divEpisodio.append(cardEpisodio)

                    let pEpisodio = document.createElement("p")
                    pEpisodio.classList.add("mb-0", "fw-bold")
                    pEpisodio.innerHTML = personaggio.episode[episodio].slice(40)
                    cardEpisodio.append(pEpisodio)
                };
                

                modaleSchedaPersonaggio.show()

            }

        })
        

    })
}

listaCardPersonaggi()