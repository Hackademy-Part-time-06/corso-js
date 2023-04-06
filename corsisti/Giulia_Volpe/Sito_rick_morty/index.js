"use strict"

let baseUrl = "https://rickandmortyapi.com/api/character"
let nextPage = document.getElementById("nextPage");
let cardRow = document.getElementById("cardRow")
let prevPage = document.getElementById("prevPage")
let urlNuova

let page = 0
nextPage.addEventListener("click", function(event){
    cardRow.innerHTML = ""
    page++
    urlNuova = new URL(baseUrl)
    urlNuova.searchParams.append("page", page);
    personaggi()
})

prevPage.addEventListener("click", function(event){
    cardRow.innerHTML = ""
    page--
    urlNuova = new URL(baseUrl)
    urlNuova.searchParams.append("page", page);
    personaggi()
})


function personaggi(){
    fetch(urlNuova)
    .then(function (response) {
        return response.json()
    })
    .then(function (charList) {
        console.log(charList)
        function creaCard(oggChar) {
            let cardContainer = document.createElement("div");
            cardContainer.classList.add("card", "col-3", "m-2");
            cardContainer.style.width = "18rem";
            cardRow.append(cardContainer);

            let cardImg = document.createElement("img");
            cardImg.classList.add("card-image-top")
            cardImg.setAttribute("alt", "Immagine personaggio");
            cardImg.src = charList.results[oggChar].image
            cardContainer.append(cardImg)

            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body")
            cardContainer.append(cardBody)

            let cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title", "bi", "bi-android2")
            cardTitle.innerText = charList.results[oggChar].name;
            cardBody.append(cardTitle)

            let cardAnchor = document.createElement("a")
            cardAnchor.classList.add("btn", "btn-primary");
            cardAnchor.setAttribute("data-id", charList.results[oggChar].id)
            cardAnchor.innerHTML = `Scheda personaggio ${charList.results[oggChar].id}`
            cardBody.append(cardAnchor)


        }
        for (let listaCard in charList.results) {
            creaCard(listaCard)
        }

        const myModal = new bootstrap.Modal(document.getElementById('myModal'))

        let ul = document.getElementById("modal-ul")
        let modalTitle = document.getElementById("modal-title");
        let modalImg = document.getElementById("img-modal")
        cardRow.addEventListener("click", function (event) {
            ul.innerHTML = "";
            if (event.target.hasAttribute("data-id")) {
                let charID = event.target.getAttribute("data-id");
                let clickedChar = charList.results.find((personaggio) => {
                    return personaggio.id === +charID
                })
                modalTitle.innerHTML = clickedChar.name
                modalImg.src = clickedChar.image

                for (let key in clickedChar) {
                    let liPersonaggio = document.createElement("li");
                    liPersonaggio.innerHTML = ""

                    if (key !== "location" && key !== "origin" && clickedChar[key] !== "" && key !== "image" && key !== "episode" && key !== "species") {

                        liPersonaggio.classList.add("list-group-item", "bg-dark");
                        liPersonaggio.setAttribute("id", "li-char")
                        ul.append(liPersonaggio);
                        liPersonaggio.innerText = `${key}: ${clickedChar[key]}`
                    }
                    else if (key === "location") {
                        let location = document.createElement("li")
                        location.classList.add("list-group-item", "bg-dark")
                        location.setAttribute("id", "li-char")
                        location.innerHTML = `location: ${clickedChar.location.name}`
                        ul.append(location)
                    }
                    else if (key === "origin") {
                        let origin = document.createElement("li")
                        origin.classList.add("list-group-item", "bg-dark")
                        origin.setAttribute("id", "li-char")
                        origin.innerHTML = `origin: ${clickedChar.origin.name}`
                        ul.append(origin)
                    }
                    else if (key === "episode") {
                        let episode = document.createElement("li");
                        episode.classList.add("list-group-item", "bg-dark");
                        episode.setAttribute("id", "li-char")
                        episode.innerHTML = `episodes: ${clickedChar.episode.length}`
                        ul.append(episode)
                    }
                }
                myModal.show()
            }

        })

    })


}