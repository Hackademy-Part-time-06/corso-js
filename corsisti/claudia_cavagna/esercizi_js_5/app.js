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


/* esercizio 74

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
*/


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


/* esercizio 76
let listaTitoli = document.createElement("ul")
document.body.append(listaTitoli)

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json()
})
.then(function(lista){

    lista.forEach(function(titoli){
        let li = document.createElement("li")
        li.innerText = titoli.title
        listaTitoli.append(li)
    })
})
*/


/* esercizio 77

let listaTitoli = document.createElement("ul")
document.body.append(listaTitoli)

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json()
})
.then(function(lista){

    lista.forEach(function(titoli){
        let li = document.createElement("li")
        li.innerHTML = `${titoli.title} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
        listaTitoli.append(li)
    })
})
*/

/* esercizio 78

let listaTitoli = document.createElement("ul")
document.body.append(listaTitoli)

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json()
})
.then(function(lista){

    lista.forEach(function(cose){
        let li = document.createElement("li")
        li.innerHTML = `${cose.title}`
        listaTitoli.append(li)
        let icona = document.createElement("span")
        icona.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#exampleModal-${cose.id}">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      li.append(icona)
        let modal = document.createElement("div")
        modal.innerHTML = `<div class="modal fade" id="exampleModal-${cose.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${cose.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${cose.body}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
      
        document.body.append(modal)
    })
})
*/


/* esercizio 79

let listaTitoli = document.createElement("ul")
document.body.append(listaTitoli)

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json()
})
.then(function(lista){

    lista.forEach(function(cose){
        let li = document.createElement("li")
        li.innerHTML = `${cose.title}`
        listaTitoli.append(li)
        let icona = document.createElement("span")
        icona.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#exampleModal-${cose.id}">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      li.append(icona)
        let modal = document.createElement("div")
        modal.innerHTML = `<div class="modal fade" id="exampleModal-${cose.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${cose.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${cose.body}
              <div id="modalBody-${cose.id}">
              </div>
            </div>
          </div>
        </div>
      </div>`
      
        document.body.append(modal)

        icona.addEventListener("click", function(){
            fetch(`https://jsonplaceholder.typicode.com/users/${cose.userId}`)
            .then(function(response){
                return response.json()
            })
            .then(function(user){
                console.log(user)
                let coseExtra = document.getElementById(`modalBody-${cose.id}`)
                coseExtra.innerHTML = `<b>Nome:</b> 
                <a href="/autore.html?userId=${cose.id}&" target="_blank">${user.name}</a> <br> <b>Username:</b> ${user.username} <br> <b>Email:</b> ${user.email} <br> <b>Numero di telefono:</b> ${user.phone} <br> <b>Sito:</b> ${user.website}`
            })
        })
    })
})
*/


/* esercizio 81 

let listaTitoli = document.createElement("ul")
document.body.append(listaTitoli)

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json()
})
.then(function(lista){
    let listaInvertita = lista.reverse()
    listaInvertita.forEach(function(cose){
        let li = document.createElement("li")
        li.innerHTML = `${cose.title}`
        listaTitoli.append(li)
        let icona = document.createElement("span")
        icona.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#exampleModal-${cose.id}">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      li.append(icona)
        let modal = document.createElement("div")
        modal.innerHTML = `<div class="modal fade" id="exampleModal-${cose.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${cose.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${cose.body}
              <div id="modalBody-${cose.id}">
              </div>
            </div>
          </div>
        </div>
      </div>`
      
        document.body.append(modal)

        icona.addEventListener("click", function(){
            fetch(`https://jsonplaceholder.typicode.com/users/${cose.userId}`)
            .then(function(response){
                return response.json()
            })
            .then(function(user){
                console.log(user)
                let coseExtra = document.getElementById(`modalBody-${cose.id}`)
                coseExtra.innerHTML = `<b>Nome:</b> 
                <a href="/autore.html?userId=${cose.id}&" target="_blank">${user.name}</a> <br> <b>Username:</b> ${user.username} <br> <b>Email:</b> ${user.email} <br> <b>Numero di telefono:</b> ${user.phone} <br> <b>Sito:</b> ${user.website}`
            })
        })
    })
})

*/

// esercizio 82 - 83

let listaTitoli = document.createElement("ul")
document.body.append(listaTitoli)

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json()
})
.then(function(lista){
    lista.reverse()
    lista.forEach(function(cose){

        let li = document.createElement("li")
        li.innerHTML = `${cose.id} - ${cose.title}`
        listaTitoli.append(li)
        let icona = document.createElement("span")
        icona.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#exampleModal-${cose.id}">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      li.append(icona)
        let modal = document.createElement("div")
        modal.innerHTML = `<div class="modal fade" id="exampleModal-${cose.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${cose.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${cose.body}
              <div id="modalBody-${cose.id}">
              </div>
            </div>
          </div>
        </div>
      </div>`
      
        document.body.append(modal)

        icona.addEventListener("click", function(){
            fetch(`https://jsonplaceholder.typicode.com/users/${cose.userId}`)
            .then(function(response){
                return response.json()
            })
            .then(function(user){
                console.log(user)
                let coseExtra = document.getElementById(`modalBody-${cose.id}`)
                coseExtra.innerHTML = `<b>Nome:</b> 
                <a href="/autore.html?userId=${cose.id}&" target="_blank">${user.name}</a> <br> <b>Username:</b> ${user.username} <br> <b>Email:</b> ${user.email} <br> <b>Numero di telefono:</b> ${user.phone} <br> <b>Sito:</b> ${user.website}`
            })
        })
    })
    
    let titoloNew = document.getElementById("titoloPiu")
    let bodyNew = document.getElementById("bodyPiu")
    let bottone = document.getElementById("bottonePiu")

    bottone.addEventListener("click", function(){
        let titoloAggiunto = titoloNew.value
        let bodyAggiunto = bodyNew.value
        console.log(titoloAggiunto)
        console.log(bodyAggiunto)
        fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify({
        title: titoloAggiunto,
        body: bodyAggiunto,
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
 
    .then(function(response){
        return response.json()
    })
    .then(function(stocazzo){
        lista.unshift(stocazzo)
        listaTitoli.innerHTML = ""
        lista.forEach(function(cose){
            let li = document.createElement("li")
            li.innerHTML = `${cose.id} - ${cose.title}`
            listaTitoli.append(li)
            let icona = document.createElement("span")
            icona.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#exampleModal-${cose.id}">
            <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
          </svg>`
          li.append(icona)
            let modal = document.createElement("div")
            modal.innerHTML = `<div class="modal fade" id="exampleModal-${cose.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">${cose.title}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ${cose.body}
                  <div id="modalBody-${cose.id}">
                  </div>
                </div>
              </div>
            </div>
          </div>`
          
            document.body.append(modal)
    
            icona.addEventListener("click", function(){
                fetch(`https://jsonplaceholder.typicode.com/users/${cose.userId}`)
                .then(function(response){
                    return response.json()
                })
                .then(function(user){
                    console.log(user)
                    let coseExtra = document.getElementById(`modalBody-${cose.id}`)
                    coseExtra.innerHTML = `<b>Nome:</b> 
                    <a href="/autore.html?userId=${cose.id}&" target="_blank">${user.name}</a> <br> <b>Username:</b> ${user.username} <br> <b>Email:</b> ${user.email} <br> <b>Numero di telefono:</b> ${user.phone} <br> <b>Sito:</b> ${user.website}`
                })
            })
        })
    })
})
})
