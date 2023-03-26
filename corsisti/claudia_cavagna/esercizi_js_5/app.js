"use strict"

/* esercizio 69
let persone = [
    {
        nome: "Gino",
        cognome: "Ginoli",
        nuovoUtente: false,
    },
    {
        nome: "Pino",
        cognome: "Pinoli",
        nuovoUtente: true,
    }
]

let lista = document.createElement("ul")
lista.innerHTML = "<h1>Persone:</h1>"
lista.setAttribute("class", "list-group")
persone.forEach(function (people){
    let li = document.createElement("li")
    li.setAttribute("class", "list-group-item")
    lista.append(li)
    for (let key in people) {
        li.innerText = people.nome + " " + people.cognome
        
    }
    if (people.nuovoUtente === true) {
        let badge = document.createElement("span")
        badge.setAttribute("class", "badge bg-secondary")
        badge.innerText = "NEW!"
        li.append(badge)
    }
    
})

document.body.append(lista)
*/


/* esercizio 70

let articoli = [
    {
        titolo: `Il realismo magico di Sergio Toppi`,
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


let row = document.createElement("div")
document.body.append(row)
row.setAttribute("class", "row")
articoli.forEach(function (album){
    let colonne = document.createElement("div")
    row.append(colonne)
    colonne.setAttribute("class", "col-4")
    let card = document.createElement("div")
    colonne.append(card)
    card.setAttribute("class", "card")
    let immagine = document.createElement("img")
    card.append(immagine)
    let body = document.createElement("div")
    card.append(body)
    body.setAttribute("class", "card-body")
    let titolo = document.createElement("h5")
    body.append(titolo)
    let riassunto = document.createElement("p")
    body.append(riassunto)
    let link = document.createElement("a")
    link.setAttribute("class", "btn btn-primary")
    link.innerText = "LEGGI DI PIU"
    body.append(link)
    
    
    for (let key in album) {
        immagine.setAttribute("src", album.immagine)
        titolo.innerText = album.titolo
        riassunto.innerText = album.riassunto
        link.setAttribute("href", album.link)
        
    }   
})
*/


/* esercizio 71

let username = prompt("Inserisci nome")
let email = prompt("Inserisci email")
let password = prompt("Inserisci password")

let containerModale = document.createElement("div")
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
</div>`

containerModale.innerHTML = modale
document.body.append(containerModale)

const modaleRegistrazione = new bootstrap.Modal(document.getElementById("modale-registazione"))

setTimeout(function() {
    modaleRegistrazione.show()
})
*/


/* esercizio 72 

let div = document.createElement("div")
div.innerHTML = `<div id="dado"></div>
<button id="lancia-dado">Lancia dado</button>`

document.body.append(div)

let bottone = document.getElementById("lancia-dado")
let testo = document.getElementById("dado")

bottone.addEventListener("click", function(){
    testo.innerText = Math.floor(Math.random() * (6 - 1) + 1)
})
*/


/* esercizio 73

let div = document.createElement("a")
div.innerHTML = `<a href="https://www.google.it/" id="link">Cerca su google</a>`
document.body.append(div)

let link = document.getElementById("link")
let click = 0
function clicca (event) {
    event.preventDefault()
    click = click + 1
    alert("Riclicca, sarai più fortunato!")
    if (click > 1) {
        link.removeEventListener("click", clicca)
        
    }
}
link.addEventListener("click", clicca)
*/


// esercizio 74

const libri = [
    {
        titolo: "Il Signore degli Anelli",
        autore: "Tolkien",
        categoria: "fantasy"
    },
    {
        titolo: "Harry Potter",
        autore: "Rowling",
        categoria: "fantasy"
    },
    {
        titolo: "Il Conte di Montecristo",
        autore: "Dumas",
        categoria: "narrativa classica"
    },
    {
        titolo: "Dune",
        autore: "Herbert",
        categoria: "fantascienza"
    },
    {
        titolo: "Fight Club",
        autore: "Palahniuk",
        categoria: "narrativa moderna"
    }
];

let lista = document.createElement("ul")
lista.innerHTML = `<h1>Libri:</h1>`
lista.setAttribute("class", "list-group")
document.body.append(lista)
libri.forEach(function (books){
    let li = document.createElement("li")
    li.setAttribute("class", "list-group-item")
    lista.append(li)
    let bottone = document.createElement("button")
    bottone.innerText = "AGGIUNGI AI PREFERITI"

    li.innerHTML = `<strong>Titolo:</strong> ${books.titolo} <br> <strong>Autore:</strong> ${books.autore} <br> <strong>Categoria:</strong> ${books.categoria}`
    bottone.addEventListener("click", function(){
        alert(`${books.titolo} è stato aggiunto ai preferiti`)
        
    })
    li.append(bottone)
})



/* esercizio 75

function calcolatrice () {
    let row = document.createElement("div")
    row.setAttribute("class", "row")
    document.body.append(row)
    let input1 = document.createElement("span")
    input1.innerHTML = `<div class="col-6">
      <input type="number" class="form-control" placeholder="Inserisci un numero" id="input-1">
    </div>`
    row.append(input1)
    let input2 = document.createElement("span")
    input2.innerHTML = `<div class="col-6">
      <input type="number" class="form-control" placeholder="Inserisci un numero" id="input-2">
    </div>`
    row.append(input2)
    let bottoni = document.createElement("div")
    bottoni.innerHTML = `<div class="d-grid gap-2 d-md-block">
    <button class="btn btn-outline-primary" type="button" id="addizione">+</button>
    <button class="btn btn-outline-primary" type="button" id="sottrazione">-</button>
    <button class="btn btn-outline-primary" type="button" id="moltiplicazione">x</button>
    <button class="btn btn-outline-primary" type="button" id="divisione">/</button>
    </div>`
    document.body.append(bottoni)
    
    
    let risultato = 0
    let addizione = document.getElementById("addizione")
    addizione.addEventListener ("click", function(){
        let num1 = document.getElementById("input-1").value
        let num2 = document.getElementById("input-2").value
        risultato = +num1 + +num2
        alert(risultato)
    })

    let sottrazione = document.getElementById("sottrazione")
    sottrazione.addEventListener ("click", function(){
        let num1 = document.getElementById("input-1").value
        let num2 = document.getElementById("input-2").value
        risultato = +num1 - +num2
        alert(risultato)
    })

    let moltiplicazione = document.getElementById("moltiplicazione")
    moltiplicazione.addEventListener ("click", function(){
        let num1 = document.getElementById("input-1").value
        let num2 = document.getElementById("input-2").value
        risultato = +num1 * +num2
        alert(risultato)
    })

    let divisione = document.getElementById("divisione")
    divisione.addEventListener ("click", function(){
        let num1 = document.getElementById("input-1").value
        let num2 = document.getElementById("input-2").value
        risultato = +num1 / +num2
        alert(risultato)
    })
}

calcolatrice ()
*/