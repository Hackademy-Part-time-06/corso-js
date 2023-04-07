"use strict";

// ! SETUP variabili globali usate ovunque

let contenitoreCardList = document.getElementById("container-card-list")

let urlAPI = "https://rickandmortyapi.com/api/character/?page=1"
let listaRisultati

let paginationPre = document.getElementById("pagination-pre")
let paginationNext = document.getElementById("pagination-next")

const modaleSchedaPersonaggio = new bootstrap.Modal(document.getElementById("modale-personaggio"), {})

let immaginePersonaggio = document.getElementById("modal-img")
let titoloPersonaggio = document.getElementById("modal-title")

let h3PaginaCorrente = document.getElementById("pagina-corrente")


// ! INIT event listener generici

contenitoreCardList.addEventListener("click", function (event) {
    let elementoCliccato = event.target
    if (elementoCliccato.hasAttribute("data-id")) {
        let listaRisultatiID = event.target.getAttribute("data-id")

        let personaggio = listaRisultati.results.find((personaggio) => {
            return personaggio.id === +listaRisultatiID
        })

        generaModale(personaggio)
    }
})

paginationPre.addEventListener("click", function (event) {
    event.preventDefault()

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    console.log(listaRisultati.info.prev)
    urlAPI = listaRisultati.info.prev

    chiamataApi()
})

paginationNext.addEventListener("click", function (event) {
    event.preventDefault()

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    console.log(listaRisultati.info.next)
    urlAPI = listaRisultati.info.next

    chiamataApi()
})
// End events listeners generici


// ! LOGICA PROGRAMMA DIVISA IN FUNZIONI

function stampaCard(personaggioSingolo) {
    let divContainerCardElement = document.createElement("div")
    divContainerCardElement.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3")
    contenitoreCardList.append(divContainerCardElement)

    let divCardElement = document.createElement("div")
    divCardElement.classList.add("card", "p-2", "shadow", "border-0")
    divContainerCardElement.append(divCardElement)

    let imgCardElement = document.createElement("img")
    imgCardElement.classList.add("card-img-top")
    imgCardElement.src = personaggioSingolo.image
    divCardElement.append(imgCardElement)

    let h2CardElement = document.createElement("h2")
    h2CardElement.classList.add("text-center", "p-2")
    h2CardElement.style.fontFamily = "'Delicious Handrawn', cursive"
    h2CardElement.innerHTML = personaggioSingolo.name
    divCardElement.append(h2CardElement)

    let linkCardElement = document.createElement("p")
    linkCardElement.classList.add("fw-bold", "fs-5", "text-center", "bg-primary", "text-light", "p-2", "mx-3", "rounded-2")
    linkCardElement.style.fontFamily = "'Open Sans', sans-serif"
    linkCardElement.setAttribute("data-id", `${personaggioSingolo.id}`)
    linkCardElement.innerText = "SCHEDA PERSONAGGIO"
    divCardElement.append(linkCardElement)
}

function stampaListaCards() {
    contenitoreCardList.innerHTML = ""

    h3PaginaCorrente.innerHTML = `Pagina ${urlAPI.slice(48)} su ${listaRisultati.info.pages}`

    for (let personaggioSingolo of listaRisultati.results) {
        stampaCard(personaggioSingolo);
    }
}

function generaModale(personaggio) {
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
    }

    modaleSchedaPersonaggio.show()
}

function gestisciVisibilitaPaginazione() {
    if (listaRisultati.info.prev === null) {
        paginationPre.classList.remove("d-block")
        paginationPre.classList.add("d-none")
        paginationNext.classList.add("rounded")
    }
    else {
        paginationPre.classList.remove("d-none")
        paginationPre.classList.add("d-block")
        paginationNext.classList.remove("rounded")
    }

    if (listaRisultati.info.next === null) {
        paginationNext.classList.remove("d-block")
        paginationNext.classList.add("d-none")
        paginationPre.classList.add("rounded")
    }
    else {
        paginationNext.classList.remove("d-none")
        paginationNext.classList.add("d-block")
        paginationPre.classList.remove("rounded")
    }
}

function chiamataApi() {
    spinner.show()
    fetch(urlAPI)
    .then(function (response) {
        return response.json()
    })
    .then(function (rispostaObj) {
        listaRisultati = rispostaObj
        console.log("listaRisultati", listaRisultati)

        stampaListaCards()

        gestisciVisibilitaPaginazione()

        spinner.hide()
    })
}

chiamataApi()
