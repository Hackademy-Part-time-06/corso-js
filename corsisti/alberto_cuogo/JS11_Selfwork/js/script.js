"use strict"
console.log("script.js caricato!")

// ! Esercizio 69
console.group("RUBRICA")

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

let ul = document.createElement("ul")
esercizio69.append(ul)

ul.classList.add("list-group", "p-5")


function badge(valore) {
    let badge = ""

    if (valore === true) {
        badge = document.createElement("span")
        badge.classList.add("badge", "bg-secondary", "p-2")
        badge.innerText= "New"
    }

    return badge
}

for (let i = 0; i < persone.length; i++) {

    let li = document.createElement("li")
    ul.append(li)

    li.classList.add("list-group-item")

    li.innerText = persone[i].nome + " " + persone[i].cognome + " "
    
    li.append(badge(persone[i].nuovoUtente))

}


console.groupEnd()


// ! Esercizio 70
console.group("CARD BLOG")

let articoli = [
    {
        titolo: `Il realismo magico di Sergio Toppi`,
        riassunto: `NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".`,
        link: "https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/",
        immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg"
    },
    {
        titolo: `Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy`,
        riassunto:`"Punk Rock Jesus" di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.`,
        link: "https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/",
        immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg"
    },
    {
        titolo: `La Zona Fantasma: i nuovi incubi Junji Ito`,
        riassunto: `Una nuova raccolta di racconti recentissimi per il maestro dell’orrore giapponese nati per il web.`,
        link: "https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/",
        immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg"
    }
]

articoli.forEach((card) => {
    let divContainer = document.createElement("div")
    divContainer.classList.add("card", "col-4", "mx-3")
    divContainer.style.width = "18rem"
    esercizio70Interno.append(divContainer)

    let img = document.createElement("img")
    img.src = card.immagine
    img.classList.add("card-img-top")

    let div = document.createElement("div")
    div.classList.add("card-body")

    divContainer.append(img, div)

    let h5 = document.createElement("h5")
    h5.classList.add("card-title")
    h5.innerText = card.titolo

    let p = document.createElement("p")
    p.classList.add("card-text")
    p.innerText = card.riassunto

    let a = document.createElement("a")
    a.href = card.link
    a.target = "_blank"
    a.classList.add("btn", "btn-primary")
    a.innerText = "Leggi di più"

    div.append(h5, p, a)
})

console.groupEnd()


// Esercizio 71
console.group("REGISTRAZIONE")

function registrazione() {
    let username = prompt("Inserisci il tuo Username")
    let email = prompt("Inserisci la tua Email")
    let password = prompt("Inserisci la tua Password")

    let elementoModale = document.createElement("div")
    let contenuto = `
    <div class="modal fade" id="modale-registrazione" tabindex="-1" aria-labelledby="modale-registrazione-label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modale-registrazione-label">Registrazione Effettuata</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Ciao ${username} (${email}), benvenuto nella tua area personale
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `

    elementoModale.innerHTML = contenuto

    esercizio71.append(elementoModale)

    const modaleRegistrazione = new bootstrap.Modal(document.getElementById('modale-registrazione'), {})
    modaleRegistrazione.show()
}

registrazione()