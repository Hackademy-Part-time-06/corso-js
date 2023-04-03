// Esercizio 60
/*
function totaleDaPagare(numeroBiglietti,costoBiglietto){
    totale = numeroBiglietti * costoBiglietto
    console.log(totale + " Euro")
}
totaleDaPagare(4,7)
*/
// esercizio 61
/*
function totaleDaPagare(numeroBiglietti,costoBiglietto,scontoPercentuale){
    totale = numeroBiglietti * costoBiglietto
    console.log(totale + " Euro")
    sconto = (totale*scontoPercentuale)/100
    let totaleScontato = totale - sconto
    console.log(totaleScontato.toFixed(2) + " Euro")
}
totaleDaPagare(4,10,83)
*/
//esercizio 62
/*
function totaleDaPagare(numeroBiglietti,costoBiglietto,giornoDellaSettima){
    totale = numeroBiglietti * costoBiglietto
    switch (giornoDellaSettima.toLowerCase()){
        case "lunedi":
            console.log("Oggi hai diritto al 100% di sconto, il cinema è chiuso!")
            scontoPercentuale= 100
            break;
        case "martedi":
            console.log("Oggi hai diritto al 20% di sconto, buon divertimento!")
            scontoPercentuale=20
            break;
        case "mercoledi":
            console.log("oggi hai diritto al 10% di sconto, buona serata!")
            scontoPercentuale=10
            break;
        case "giovedi":
        case "venerdi":
        case "sabato":
        case "domenica":
            console.log("Nessuno sconto per te oggi, ciao bello!")
            scontoPercentuale=0
            break;
    }
    sconto = (totale*scontoPercentuale)/100
    console.log(sconto)
    totaleScontato = totale - sconto
    console.log(totaleScontato + " Euro")
}
totaleDaPagare(4,10,"giovedi")
*/
//esercizio 63 - 64
/*
function scontoBiglietto(ciaobello){
    let nuovoSconto = 0
    if (ciaobello>=3 && ciaobello<5){
        nuovoSconto= 5
    }
    else if (ciaobello>=5){
        nuovoSconto= 10
    }
    return nuovoSconto
}
function totaleDaPagare(numeroBiglietti,costoBiglietto,scontoPercentuale){
    let nuovoSconto=scontoBiglietto(numeroBiglietti)
    totale = numeroBiglietti * costoBiglietto
    sconto = (totale*(scontoPercentuale+nuovoSconto))/100
    totaleScontato = totale - sconto
    console.log(totaleScontato + " Euro")
    console.log(`Buonasera e benvenuto al Cinema Luce \nHa acquistato ${numeroBiglietti} biglietti.\nIl prezzo per singolo biglietto è di ${costoBiglietto} Euro,\nle è stato fatto uno sconto del ${scontoPercentuale}%,\ned un ulteriote sconto del ${nuovoSconto}%.\nBUONA VISIONE!`)
}
totaleDaPagare(10,10,10)
*/
//esercizio 65
/*
function link(titolo,autore){
    titoloPerLink=titolo.toLowerCase().replaceAll(" ", "-")
    autorePerLink=autore.toLowerCase().replaceAll(" ", "-")
    linkCompleto= `www.lamiasuperlibreria.aulab/${autorePerLink}/${titoloPerLink}.html`
    console.log(`<a href=${linkCompleto}>${titolo}</a>`)
}
link("Il Signore degli Anelli","Tolkien")
*/
//esercizio 66
/*
function segnoRandom(){
    let segni = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * segni.length)
    return segni[random]
}
function regole (){
    primo= segnoRandom()
    secondo= segnoRandom()
    if (primo=="sasso" && secondo=="forbice" || primo=="forbice" && secondo=="carta" || primo=="carta" && secondo=="sasso"){
        console.log("vince il primo")
    }
    else if(primo=="forbice" && secondo=="sasso" || primo=="carta" && secondo=="forbice" || primo=="sasso" && secondo=="carta"){
        console.log("vince il secondo")
    }
    else {
        console.log("pareggio")
    }
}

regole()
*/
//esercizio 67
/*
function segnoRandom(){
    let segni = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * segni.length)
    return segni[random]
}
function partita (){
    primo = segnoRandom()
    secondo = segnoRandom ()
    while(primo===secondo){
        console.log("pareggio,rigioca")
        primo = segnoRandom()
        secondo = segnoRandom ()
    }
    if (primo=="sasso" && secondo=="forbice" || primo=="forbice" && secondo=="carta" || primo=="carta" && secondo=="sasso"){
        console.log("vince il primo")
    }
    else if(primo=="forbice" && secondo=="sasso" || primo=="carta" && secondo=="forbice" || primo=="sasso" && secondo=="carta"){
        console.log("vince il secondo")
    }
}
partita()
*/
//esercizio 68
/*
function segnoRandom(){
    let segni = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * segni.length)
    return segni[random]
}
function partita (){
    player1 = 0
    player2 = 0
    while(player1<3 && player2<3){
        primo = segnoRandom()
        secondo = segnoRandom ()
        while(primo===secondo){
            console.log("pareggio,rigioca")
            primo = segnoRandom()
            secondo = segnoRandom ()
        }
        console.log("Il primo giocatore ha tirato " + primo)
        console.log("Il secondo giocatore ha tirato " + secondo)
        if (primo=="sasso" && secondo=="forbice" || primo=="forbice" && secondo=="carta" || primo=="carta" && secondo=="sasso"){
            player1 +=1
            console.log("il GIOCATORE UNO vince ha " + player1 + " punti")
        }
        else if(primo=="forbice" && secondo=="sasso" || primo=="carta" && secondo=="forbice" || primo=="sasso" && secondo=="carta"){
            player2 +=1
            console.log("il GIOCATORE 2 vince ed ha " + player2 + " punti")
        }
    }
    if (player1>player2){
        console.log(`Complimenti GIOCATORE 1, HAI VINTO, il tuo punteggio è ${player1},il giocatore 2 ha fatto invece ${player2}`)
    }
    else if(player1<player2){
        console.log(`Complimenti GIOCATORE 2, HAI VINTO, il tuo punteggio è ${player2},il giocatore 1 ha fatto invece ${player1}`)
    }
}
partita ()
*/
// esercizio 69
/*
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
lista.setAttribute("class","list-group")
document.body.append(lista)
persone.forEach(function (personaSingola){
    let datiUtente = document.createElement("li")
    datiUtente.setAttribute("class","list-group-item")
    lista.append(datiUtente)
    for (let dato in personaSingola){
        datiUtente.innerText=personaSingola.nome + " " + personaSingola.cognome +"  " 
    }
    if (personaSingola.nuovoUtente === true){
        let badge = document.createElement("span")
        badge.setAttribute("class", "badge bg-secondary")
        badge.innerText = "NEEEEW!"
        datiUtente.append(badge)
        }
})
*/
// esercizio 70 
/*
let articoli = [
    {
            titolo: "Il realismo magico di Sergio Toppi",
            riassunto: `NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".`,
            link: `https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/`,
            immagine: `https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg`
    },
    {
            titolo: `Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy`,
            riassunto:`"Punk Rock Jesus" di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.`,
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
row.setAttribute("class","row")
row.classList.add("w-75")
document.body.append(row)
articoli.forEach(function(album){
    let colonne = document.createElement("div")
    row.append(colonne)
    colonne.setAttribute("class","col-4")
    let card = document.createElement("div")
    colonne.append(card)
    card.setAttribute("class","card")
    let immagine = document.createElement("img")
    card.append(immagine)
    let body= document.createElement("div")
    body.setAttribute("class","card-body")
    card.append(body)
    let titolo = document.createElement("h5")
    body.append(titolo)
    let riassunto = document.createElement("p")
    body.append(riassunto)
    let link = document.createElement("a")
    body.append(link)
    link.setAttribute("class","btn btn-primary")
    link.innerText = "Leggi di più"
    for (let key in album){
        immagine.setAttribute("src",album.immagine)
        titolo.innerText = album.titolo
        riassunto.innerText = album.riassunto
        link.setAttribute("href",album.link)
    }
})
*/
//esercizio 71
/*
function register(){
    nome = prompt("inserisci nome")
    email = prompt("Inserisci la tua mail")
    password= prompt("inserisci una password valida")
    let contenitore= document.createElement("div")
    document.body.append(contenitore)
    let modale= `
    <div class="modal fade" id="modale-registrazione" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        Ciao ${nome} (${email}), benvenuto nella tua area personale 
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>`
  contenitore.innerHTML= modale
  const modaleRegistrazione = new bootstrap.Modal(document.getElementById('modale-registrazione'))
  modaleRegistrazione.show()
}
register()
*/
// esercizio 72
/*
let lanciodeldado = document.createElement("div")
document.body.append(lanciodeldado)
lanciodeldado.innerHTML= `<div id="dado"></div>
<button id="lancia-dado">Lancia dado</button>
`
let bottone = document.getElementById("lancia-dado")
let testoDado= document.getElementById("dado")

bottone.addEventListener("click",function(){
    testoDado.innerText= Math.floor(Math.random() * ( 6 - 1 ) + 1)
})
*/
// esercizio 73
/*
let link = document.createElement("span")
link.innerHTML= `<a href="https://www.google.it/"">Cerca su google</a>`
document.body.append(link)
let click= 0
function cliccastaminchia(event){
    event.preventDefault()
    alert("Sfigato, non abbandonare la pagina, per favore")
    click = click + 1
    console.log(click)
    if (click>1){
        link.removeEventListener("click",cliccastaminchia)
    }
}

link.addEventListener("click",cliccastaminchia)
*/
// esercizio 74
/*
const LIBRI = [
    {
            titolo: "Il Signore degli Anelli",
            autore: "Tolkien",
            categoria: "fantasy"
    },
    {
            titolo: "Harry Potter",
            autore: "Rowling",
            categoria: "fantasy",
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
]
let lista = document.createElement("ul")
document.body.append(lista)
LIBRI.forEach(function(listeLibri){
    let libro = document.createElement("li")
    lista.append(libro)
    bottone= document.createElement("button")
    bottone.innerHTML = "Aggiungi ai preferiti"
    lista.append(bottone)
    libro.innerHTML = `<strong>Titolo: </strong>${listeLibri.titolo}  <br><strong>Autore: </strong>${listeLibri.autore} <br><strong>Categoria: </strong>${listeLibri.categoria}`
    bottone.addEventListener("click",function(){
        alert(`Il libro "${listeLibri.titolo}" è stato aggiunto ai preferiti`)
    })
})
*/