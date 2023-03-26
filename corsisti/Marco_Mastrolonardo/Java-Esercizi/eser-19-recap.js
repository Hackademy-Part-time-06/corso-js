/*
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
*/
//ESERCIZIO 70
/*
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
*/
/*
//Test1
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
*/
//Test2
function Test2(){
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
//creo un funzione che setti gli attributi(opzionale ma volevo provare)
function aggiungoAttributo(elemento, attributi){
    for(let key in attributi){
        elemento.setAttribute(key, attributi[key])
    }
}
//creo un div con class="container py-5"
let contenitore = document.createElement("div")
aggiungoAttributo(contenitore, {"class":"container py-5"})
document.body.append(contenitore)

//creo un div con class="row py-5"
let row = document.createElement("div")
aggiungoAttributo(row, {"class":"row py-5"})
contenitore.append(row)

articoli.forEach(articolo => {
    console.log("articolo",articolo)
    //per ogni articolo creiamo un "div" card con classe="col-4"
    let card = document.createElement("div")
    card.classList.add("col-4")

    //Aggiungo il contenuto alla card tramite .innerHtml per evitare di utilizzare document.createElement per ogni elemento necesario.
    let contenutocard = `
    <div class="card">
        <img src="${articolo.immagine}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${articolo.titolo}</h5>
            <p class="card-text">${articolo.riassunto}</p>
            <a href="${articolo.link}" class="btn btn-primary">Leggi tutto</a>
        </div>
    </div>
    `
    card.innerHTML = contenutocard
    row.append(card)
})
}
//Test2()


/*
//ESERCIZIO 71
//Test1
let username = "Marco-Main-LeeSin"
let email = "marco24091999@libero.it"


//creo una funzione per aggiungere più attributi ad un elemento tramite un ciclo sul parametro della funzione "attributo".
function aggiungoAttributo(elemento, attributo){
    for(let key in attributo){
        elemento.setAttribute(key, attributo[key])
    }
}

//Bottone Trigger Modale
let bottonetrigger = document.createElement("button")
aggiungoAttributo(bottonetrigger, {"type":"button","class":"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"})
bottonetrigger.innerText = "Launch"
document.body.append(bottonetrigger)

//Modale
let divmodal = document.createElement("div")

aggiungoAttributo(divmodal, {"class": "modal fade","id":"exampleModal", "tabindex": "-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"})
document.body.append(divmodal)

let modaldialog = document.createElement("div")
modaldialog.setAttribute("class", "modal-dialog")
divmodal.append(modaldialog)

let modalcontent = document.createElement("div")
modalcontent.setAttribute("class", "modal-content")
modaldialog.append(modalcontent)

//Header modale
let modalheader = document.createElement("div")
modalheader.setAttribute("class", "modal-header")
modalcontent.append(modalheader)

let modaltitle = document.createElement("h1")
aggiungoAttributo(modaltitle, {"class":"modal-title fs-5","id":"exampleModalLabel"})
modaltitle.innerText = "Registrazione Effettuata"

let bottone1 = document.createElement("button")
aggiungoAttributo(bottone1, {"type": "button", "class": "btn-close", "data-bs-dismiss": "modal", "aria-label":"Close"})

modalheader.append(modaltitle, bottone1)
//

//Body Modale
let modalbody = document.createElement("div")
modalbody.setAttribute("class", "modal-body")
modalcontent.append(modalbody)

let modalbodytext = document.createElement("p")
modalbodytext.innerText = `Ciao ${username} ${email}, benvenuto nella tua area personale`
modalbody.append(modalbodytext)
//

//Footer Modale
let modalfooter = document.createElement("div")
modalfooter.setAttribute("class","modal-footer")
modalcontent.append(modalfooter)

let bottone2 = document.createElement("button")
aggiungoAttributo(bottone2, {"type":"button","class":"btn btn-secondary","data-bs-dismiss":"modal"})
bottone2.innerText = "Close"

let bottone3 = document.createElement("button")
aggiungoAttributo(bottone3, {"type":"button","class":"btn btn-primary"})
bottone3.innerText = "Save Changes"

modalfooter.append(bottone2, bottone3)
*/

//Test2
function registrazione() {
    let username = prompt("username")
    let email = prompt("email");

    //creo un contenitore per la modale
    let contenitoreModale = document.createElement("div");

    //setto tramite innerHTML il codice bootstrap per una modale, aggiungendo il testo del tag <h1> e del <div class="modal-body">
    let modale = `
    <div class="modal fade" id="modale-registazione" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Registrazione effettuata con successo</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            Ciao ${username} (${email}), benvenuto nella tua area personale!
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
    `;
    contenitoreModale.innerHTML = modale;
    document.body.append(contenitoreModale); // E' presente nel DOM

    // 
    const modaleRegistrazione = new bootstrap.Modal(document.getElementById('modale-registazione'))
    console.log("Modale post registrazione:", modaleRegistrazione)

    //Imposto un timeout al termine del quale mostrerà la modale
    setTimeout(function() {
        modaleRegistrazione.show()
    }, 3000)
}
registrazione()


