let articoli = [
    {
            titolo: "Il realismo magico di Sergio Toppi",
            riassunto: "NPE ristampa una storia del cosiddetto \"Filone fantastico toppiano\", creata dal maestro Sergio Toppi nel 1987: \"Isola Gentile\".",
            link: "https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/",
            immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg",
    },
    {
            titolo: "Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy",
            riassunto:"\"Punk Rock Jesus\" di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.",
            link: "https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/",
            immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg",
    },
    {
            titolo: "La Zona Fantasma: i nuovi incubi Junji Ito",
            riassunto: "Una nuova raccolta di racconti recentissimi per il maestro dell’orrore giapponese nati per il web.",
            link: "https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/",
            immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg"
    }
]

articoli.forEach(function (element) {
    let addDiv = document.createElement("div")
    addDiv.classList.add("card", "m-5")
    addDiv.style.width = "18rem"

    let addImg = document.createElement("img")
    addDiv.append(addImg)
    addImg.setAttribute("src", element.immagine)
    addImg.setAttribute("alt", "Immagine1")
    addImg.classList.add("card-img-top")

    let addDiv2 = document.createElement("div")
    addDiv.append(addDiv2)
    addDiv2.classList.add("card-body")

    let addH5 = document.createElement("h5")
    addDiv2.append(addH5)
    addH5.classList.add("card-title")
    addH5.innerText = element.titolo

    let addP = document.createElement("p")
    addDiv2.append(addP)
    addP.classList.add("card-text")
    addP.innerText = element.riassunto

    let addAnchor = document.createElement("a")
    addDiv2.append(addAnchor)
    addAnchor.classList.add("btn", "btn-primary")
    addAnchor.setAttribute("href", element.link)
    addAnchor.innerText = "Clicca qui per saperne di più"

    document.body.append(addDiv)
})