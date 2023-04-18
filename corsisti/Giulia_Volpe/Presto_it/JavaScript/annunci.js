"use strict"

//VARIABILI GLOBALI

let cardContainer = document.getElementById("card-container");
let btnSearch = document.getElementById("btn-cerca");
let input = document.getElementById("inputSearch");
let selectPerCategoria = document.getElementById("select-categoria")
let listaAnnunciGlobale = []

//FUNZIONE -- CREO E STAMPO LE CARD PER GLI ANNUNCI

function creaCard(annuncio) {
    let singleCard = document.createElement("div");
    singleCard.classList.add("col-12", "col-sm-4", "mb-4");

    let badgeCard  //metto i badge sulle immagini delle card con condizione discriminante
    if (annuncio.type === "sell") {
        badgeCard = `<span class="badge bg-danger annuncio-type-badge">Vendo</span>`
    }
    else if (annuncio.type === "search") {
        badgeCard = `<span class="badge bg-custom annuncio-type-badge">Cerco</span>`
    }

    singleCard.innerHTML = `<div class="card" id="cardAnnunci" style="width: 18rem;">
    <img src="https://placehold.co/600x400?text=image+not+present" class="card-img-top" alt="${annuncio.name}">
    ${badgeCard}
    <div class="card-body">
        <h5 class="card-title card-price" ><strong>${annuncio.price}</strong></h5>
        <h5 class="card-title"><strong>${annuncio.name}</strong></h5>
        <p class="card-text">Lorem Ipsum dolor sit amet...</p>
    </div>
    <div class="d-flex justify-content-evenly info-extra">
        <div class="text-center w-50 py-2 categ-extra">${annuncio.category}</div>
        <div class="text-center w-50 py-2">${annuncio.created_date}</div>
    </div>
  </div>`

    cardContainer.append(singleCard)
}

function stampaCard(listaAnnunci = []) {
    cardContainer.innerHTML = ""
    listaAnnunci.forEach(annuncio => {
        creaCard(annuncio)
    })
}

//FUNZIONE -- FETCH

function loadAnnunci() {
    fetch("Mockup_Api/annunci.json")
        .then(response => response.json())
        .then(function (annunci) {
            listaAnnunciGlobale = annunci
            let listaFiltrata = listaAnnunciGlobale
            console.log(annunci)
             // questo mi stampa gli annunci chiamati dalla fetch

            //prendo la url della homepage per recuperare il valore dell'input

            let url = new URL(window.location.href);
            let queryCerca = url.searchParams.get("query")

            //controllo che nella query ci sia effettivamente scritto qualcosa
            if(queryCerca){
                input.value = queryCerca
                listaFiltrata = filtraNome(input.value, listaFiltrata)
            }


            stampaCard(listaFiltrata)
        })
        .catch((error) => {
            console.error("Oooops... Qualcosa è andato storto", error)
        })
}

//FILTRI

//FUNZIONE -- filtro per nome

function filtraNome(query, listaAnnunci) {
    let listaFiltrata = listaAnnunci.filter((annuncio) => {
        let nomeToLower = annuncio.name.toLowerCase();
        let queryToLower = query.toLowerCase();

        return nomeToLower.includes(queryToLower);

    })
    return listaFiltrata

}

//FUNZIONE -- filtro per categoria

function cercaCateg(categoria, listaAnnunci){
    console.log("cerca per categ-- ", categoria)
    console.log("lista annunci --", listaAnnunci)
    let listaFiltrata = [];
    if (categoria === "Tutte le categorie"){
        listaFiltrata = listaAnnunci
    }
    else{
        listaFiltrata = listaAnnunci.filter((annuncio)=>{
            return annuncio.category === categoria
        })
    }
    return listaFiltrata
}

//LISTENER


function faiPartireFiltri() {
    btnSearch.addEventListener("click", function (event) {
        let listaFiltrata = listaAnnunciGlobale
        listaFiltrata = filtraNome(input.value, listaFiltrata)
        
        listaFiltrata = cercaCateg(selectPerCategoria.value, listaFiltrata)
       stampaCard(listaFiltrata) // questa stampa gli annunci filtrati 
    })
}

//FUNZIONI -- richiamo e eseguo
faiPartireFiltri()
loadAnnunci()

