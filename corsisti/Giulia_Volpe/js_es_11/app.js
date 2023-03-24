"use strict"
// ESERCIZIO 69
/*
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
];
let lista = document.createElement("ul");
document.body.append(lista);
lista.setAttribute("class", "list-group");
lista.innerText = "Lista persone";
persone.forEach(function (persona) {
    let singleItem = document.createElement("li")
    singleItem.innerText = persona.nome + " " + persona.cognome;
    lista.append(singleItem);
    if(persona.nuovoUtente === true){
        let newEntry = document.createElement("span");
        newEntry.setAttribute("class", "badge bg-secondary")
        newEntry.innerText = "New";
        singleItem.append(newEntry)
    }
});
*/
//ESERCIO 70

let articoli = [
    {
        titolo: "'Il realismo magico di Sergio Toppi",
        riassunto: "NPE ristampa una storia del cosiddetto 'Filone fantastico toppiano', creata dal maestro Sergio Toppi nel 1987: 'Isola Gentile'.",
        link: "https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/",
        immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg"
    },
    {
        titolo: "Ma Gesù ascolta musica Punk ? “Punk Rock Jesus” di Sean Murphy",
        riassunto: "'Punk Rock Jesus' di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.",
        link: "https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/",
        immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg"
    },
    {
        titolo: "La Zona Fantasma: i nuovi incubi Junji Ito",
        riassunto: "Una nuova raccolta di racconti recentissimi per il maestro dell'orrore giapponese nati per il web.",
        link: "https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/",
        immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg"
    }
];

articoli.forEach(articolo => {
    let card = document.createElement("div");
    document.body.append(card);
    card.setAttribute("class", "card");
    card.style.width = "18rem";

    let img = document.createElement("img");
    card.append(img);
    img.classList.add("card-img-top");
    img.setAttribute("src", articolo.immagine);

    let cardBody = document.createElement("div");
    card.append(cardBody);
    cardBody.setAttribute("class", "card-body");

    let h5 = document.createElement("h5");
    cardBody.append(h5);
    h5.innerText = articolo.titolo;

    let p = document.createElement("p");
    cardBody.append(p);
    p.setAttribute("class", "card-text");
    p.innerText = articolo.riassunto

    let btnA = document.createElement("a");
    cardBody.append(btnA);
    btnA.setAttribute("href", articolo.link);
    btnA.setAttribute("target", "_blank");
    btnA.classList.add("btn", "btn-primary")
    btnA.innerText = "Leggi articolo"

});


//ESERCIZIO 71
/*
let utente = {
    username: prompt("Inserisci uno username"),
    email: prompt("Inserisci una mail valida"),
    password: prompt("Inserisci una password")
}

modale(utente.username, utente.email, utente.password)

function modale(username, email, password){
    let modal = document.createElement("div");
    document.body.append(modal);
    modal.classList.add("modal", "fade");
    modal.setAttribute("id", "staticBackdrop");
    modal.setAttribute("data-bs-backdrop", "static");
    modal.setAttribute("data-bs-keyboard", "false");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "staticBackdropLabel");
    modal.setAttribute("aria-hidden", "true");

    let dialogDiv = document.createElement("div");
    modal.append(dialogDiv);
    dialogDiv.classList.add("modal-dialog");

    let contentDiv = document.createElement("div");
    dialogDiv.append(contentDiv);
    contentDiv.classList.add("modal-content");

    let headerDiv = document.createElement("div");
    contentDiv.append(headerDiv);
    headerDiv.classList.add("modal-header");

    let h1 = document.createElement("h1");
    headerDiv.append(h1);
    h1.classList.add("modal-title", "fs-5");
    h1.setAttribute("id", "staticBackdropLabel")
    h1.innerText = "Registrazione effettuata!";

    let btn1 = document.createElement("button");
    headerDiv.append(btn1);
    btn1.classList.add("btn-close");
    btn1.setAttribute("type", "button");
    btn1.setAttribute("data-bs-dismiss", "modal");
    btn1.setAttribute("aria-label", "Close");

    let modalBody = document.createElement("div");
    contentDiv.append(modalBody);
    modalBody.classList.add("modal-body");
    modalBody.innerText = `Ciao ${username} ${email} Benvenuto nella tua area personale!`;

    let modalFooter = document.createElement("div");
    contentDiv.append(modalFooter);
    modalFooter.classList.add("modal-footer");
    
    let btnClose = document.createElement("button");
    modalFooter.append(btnClose);
    btnClose.classList.add("btn", "btn-secondary");
    btnClose.setAttribute("type", "button");
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.innerText = "Chiudi!";

    let btn2 = document.createElement("button");
    modalFooter.append(btn2);
    btn2.classList.add("btn", "btn-primary");
    btn2.setAttribute("type", "button");
    btn2.innerText = "Ho capito";

    const myModal = new bootstrap.Modal(modal)
    myModal.show()
}
*/