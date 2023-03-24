//ESERCIZIO 69
let persone = [
    {
        nome: "Gino",
        cognome: "Ginoli",
            nuovoUtente: false
    },
    {
        nome: "Pino",
        cognome: "Pinoli",
        nuovoUtente: true
    }
]
let lista = document.createElement("ul")
lista.innerText = "Lista persone"
lista.setAttribute("class", "list-group")
document.body.append(lista)
/*
persone.forEach(persona => {
    let listitem
    for(let key in persona){
        console.log(persona[key])
        listitem = document.createElement("li")
        listitem.innerText = `${key}: "${persona[key]}"`
        listitem.setAttribute("class", "list-group-item")
        lista.append(listitem)
    }
});
*/
persone.forEach(persona => {
    let listitem = document.createElement("li")
    listitem.innerText=`Nome completo: ${persona.nome} ${persona.cognome}`
    listitem.setAttribute("class", "list-group-item")
    lista.append(listitem)
    if(persona.nuovoUtente === true){
        let badge = document.createElement("span")
        badge.setAttribute("class", "badge bg-secondary")
        badge.innerText = "New"
        listitem.append(badge)
    }
})
//ESERCIZIO 70
let articoli = [
        {
                titolo: "Il realismo magico di Sergio Toppi",
                riassunto: "NPE ristampa una storia del cosiddetto 'Filone fantastico toppiano', creata dal maestro Sergio Toppi nel 1987: 'Isola Gentile'.",
                link: "https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg"
        },
        {
                titolo: "Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy",
                riassunto:"'Punk Rock Jesus' di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.",
                link: "https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg"
        },
        {
                titolo: "La Zona Fantasma: i nuovi incubi Junji Ito",
                riassunto: "Una nuova raccolta di racconti recentissimi per il maestro dell’orrore giapponese nati per il web.",
                link: "https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/",
                immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg"
        }
]

let container = document.createElement("div")
    container.setAttribute("class", "container-fluid text-center")
    document.body.append(container)

    let row = document.createElement("div")
    row.setAttribute("class", "row p-2")
    container.append(row)

for(let key in articoli){
    
    console.log(articoli[key])
    
    let card = document.createElement("div")
    card.setAttribute("class", "card col-4 p-2")
    //card.style.width = "18rem"
    row.append(card)

    let img = document.createElement("img")
    img.setAttribute("class", "card-img-top")
    img.src = articoli[key].immagine

    let cardbody = document.createElement("div")
    cardbody.setAttribute("class", "card-body")

    card.append(img, cardbody)

    let cardtitle = document.createElement("h5")
    cardtitle.setAttribute("class", "card-title")
    cardtitle.innerText = articoli[key].titolo


    let cardtext = document.createElement("p")
    cardtext.setAttribute("class","card-text")
    cardtext.innerText = articoli[key].riassunto

    let alink = document.createElement("a")
    alink.innerText = "Link al film"
    alink.setAttribute("class","btn btn-primary")
    alink.href = articoli[key].link

    cardbody.append(cardtitle, cardtext, alink)
}