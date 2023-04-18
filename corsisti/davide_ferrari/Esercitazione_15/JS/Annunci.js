"use strict"

let contenitoreCard = document.getElementById("containerAnnunci");


function caricaAnnunciCard(annuncioCiclato) {
let card = document.createElement("div");
let badge;
if(annuncioCiclato.type === "sell") {
    badge = `<span class="badge bg-danger badgeAnnuncio">Vendo</span>`
    }
else if(annuncioCiclato.type === "search") {
    badge = `<span class="badge bg-primary badgeAnnuncio">Cerco</span>`
}

card.innerHTML = `<div class="card">
                                <img src="../images/Leaves.jpg" class="card-img-top" id="immagineAnnuncio">
                                ${badge}
                                <div class="card-body">
                                    <h5 class="card-title prezzoAnnuncio">${annuncioCiclato.price}$</h5>
                                    <h5 class="card-title">${annuncioCiclato.name}</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet...</p>
                                    <div class="d-flex justify-content-evenly infoAnnuncio">
                                        <div class="text-center side">${annuncioCiclato.category}</div>
                                        <div class="text-center" style="width: 50%;">${annuncioCiclato.created_date}</div>
                                    </div>
                                </div>
                            </div>`
card.classList.add("col-12", "col-sm-4");
contenitoreCard.append(card);

}


function caricaAnnunciDaCiclare(annunci_JS) {
    annunci_JS.forEach(function(annuncioCiclato){
        console.log(annuncioCiclato);
        caricaAnnunciCard(annuncioCiclato);
    })

}


function caricaAnnunciConsole() {
    fetch("../api-mocked-data/annunci.json")
    .then(function(annunci_Grezzi){
        console.log("Annunci in formato stringa json: ", annunci_Grezzi);
        return annunci_Grezzi.json();
        })
    .then(function(annunci_JS){
        console.log("Annunci in formato oggetto JS: ", annunci_JS);
        caricaAnnunciDaCiclare(annunci_JS);
    })
    .catch(function(error){
        console.log("Errore nel caricamento degli annunci!", error);
    })
}


caricaAnnunciConsole()