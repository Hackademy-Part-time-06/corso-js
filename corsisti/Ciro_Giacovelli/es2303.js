'use strict'

// ESERCIZIO 60

let persone = [
    {
        nome: " Gino",
        cognome: " Ginoli ",
        nuovoUtente: false
    },
    {
        nome: " Pino",
        cognome: " Pinoli ",
        nuovoUtente: true
    }


]

let ul = document.createElement("ul")
document.body.prepend(ul)
ul.classList.add("list-group")

persone.forEach(function (persona) {

    let li = document.createElement("li");
    li.classList.add("list-group-item")
    li.innerText = `${persona.nome} ${persona.cognome}`;

    if (persona.nuovoUtente) {
        let contenutoaggiornato = li.innerText + `<span class="badge bg-secondary">New</span>`;
        li.innerHTML = contenutoaggiornato
    }
    ul.append(li)
})


//ESERCIZIO 70

//Dato il seguente elenco di oggetti relativo ad un blog genera le card per ogni articolo:
let articoli = [
        {
                titolo: "Il realismo magico di Sergio Toppi",
                riassunto: `NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".`,
                link: `https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/`,
                immagine: `https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg`
        },
        {
                titolo: `Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy`,
                riassunto:`Punk Rock Jesus" di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.`,
                link: `https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/`,
                immagine: `https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg`
        },
        {
                titolo: `La Zona Fantasma: i nuovi incubi Junji Ito`,
                riassunto: `Una nuova raccolta di racconti recentissimi per il maestro dell’orrore giapponese nati per il web.`,
                link: `https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/`,
                immagine: `https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg`
        }
]
/*
Per ogni elemento genera una card di bootstrap (https://getbootstrap.com/docs/5.3/components/card/) da inserire nella tua pagina html
La card dovrà contenere:

- l’immagine
    - il titolo 
- il riassunto
- un bottone con scritto “Leggi di più” che linkerà alla pagina dell’articolo e la farà aprire in una nuova finestra






for (let i =0 ; i < articoli.length; i++) {
    let articolo=articoli[i]
    let div = document.createElement("div")
    div.classList.add("card");
    document.body.append(div);
    let img = document.createElement("img")
    div.append(img)
    img.classList.add("card-img-top");
    img.setAttribute("src", articolo.immagine)


 
}


*/