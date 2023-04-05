/*Esercizio 70
Il blog

Dato il seguente elenco di oggetti relativo ad un blog genera le card per ogni articolo:

Per ogni elemento genera una card di bootstrap (https://getbootstrap.com/docs/5.3/components/card/) da inserire nella tua pagina html
La card dovrà contenere:

- l’immagine
- il titolo
- il riassunto
- un bottone con scritto “Leggi di più” che linkerà alla pagina dell’articolo e la farà aprire in una nuova finestra*/

let articoli = [
    {
            titolo: 'Il realismo magico di Sergio Toppi',
            riassunto: 'NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".',
            link: 'https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/',
            immagine: 'https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg'
    },
    {
            titolo: 'Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy',
            riassunto:'"Punk Rock Jesus" di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.',
            link: 'https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/',
            immagine: 'https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg'
    },
    {
            titolo: 'La Zona Fantasma: i nuovi incubi Junji Ito',
            riassunto: "Una nuova raccolta di racconti recentissimi per il maestro dell'orrore giapponese nati per il web.",
            link: 'https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/',
            immagine: 'https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg'
    }
]

articoli.forEach(x => {
    let card = document.createElement("div")
    document.body.append(card)
    card.classList.add("card", "m-3")
    card.style.width = "18rem"

    let image = document.createElement("img")
    card.append(image)
    image.classList.add("card-img-top")
    image.setAttribute("src", x.immagine)
    image.setAttribute("alt", "...")

    let card_body = document.createElement("div")
    card.append(card_body)
    card_body.classList.add("card-body")

    let title = document.createElement("h5")
    card_body.append(title)
    title.classList.add("card-title")
    title.innerText = x.titolo

    let resume = document.createElement("p")
    card_body.append(resume)
    resume.classList.add("card-text")
    resume.innerText = x.riassunto

    let link = document.createElement("a")
    card_body.append(link)
    link.setAttribute("href", x.link)
    link.classList.add("btn", "btn-primary")
    link.innerText = "Leggi di più"
})