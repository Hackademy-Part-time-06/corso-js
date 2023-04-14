"use strict";
//richiamo id
let contenitoreAnnunci = document.getElementById("contenitoreAnnunci")
let btnSearch = document.getElementById("btn-search")
let search = document.getElementById("search")
let listAnnunciGlobale=[]


//eseguo funzioni
function paginaCorrente() {
    let elementoMenu
    if(window.location.href.includes("index.html")){
        console.log("sono nella Hompage");
        elementoMenu = document.getElementById("paginaHome")
    }
    else if(window.location.href.includes("annunci.html")){
        console.log("sono nella sezione annunci");
        elementoMenu = document.getElementById("paginaAnnunci")
    }
    //cambiare stile scritta principale
    if (elementoMenu) {
        elementoMenu.classList.add("text-warning")
    }
    
}
function popoloMenuCategorie() {
    fetch("/json/categorie.json")
    .then(response => response.json())
    .then(function(categorie) {
        let nomiCategorie
        nomiCategorie=document.getElementById("nomiCategorie")
        categorie.forEach(categorieSingole => {
            let li = document.createElement("li")
            nomiCategorie.append(li)
            li.innerHTML =`${categorieSingole.name} <hr/>`
            console.log(categorieSingole.name);
        });
    })
}
function stampaCardAnnuncio(annuncio) {
    let contenitoreCard = document.createElement("div")
    contenitoreCard.classList.add("col-12", "col-sm-3")

    let bedgeEl;
    if(annuncio.type === "sell"){
        bedgeEl = `<span class="badge bg-danger my-badge">Vendo</span>`
    }
    else{
        bedgeEl = `<span class="badge bg-success my-badge">Cerco</span>`
    }

    contenitoreCard.innerHTML=`
    <div class="card mt-3">
        <img src="https://picsum.photos/200" class="card-img-top" alt="...">
        ${bedgeEl}
            <div class="card-body">
                <h5 class="card-title">${annuncio.name}</h5>
                <h6 class="card-title text-warning">€ ${annuncio.price}</h6>
                <p class="card-text">lorem lorem lorem...</p>
            </div>
            <div class="d-flex justify-content-evenly footer-card">
                <div class="text-center w-50 p-2 presonalized-border">${annuncio.category}</div>
                <div class="text-center w-50 p-2">${annuncio.created_date}</div>
            </div>
    </div>`
    contenitoreAnnunci.append(contenitoreCard)
}
function stampaListaAnnunci(listAnnunci=[]) {
    contenitoreAnnunci.innerHTML=""
    listAnnunci.forEach((annuncio)=>{
        stampaCardAnnuncio(annuncio)
    })
}
function caricAnnunci() {
    fetch("/json/annunci.json")
    .then(response => response.json())
    .then(listAnnunci => {
        listAnnunciGlobale = listAnnunci
        stampaListaAnnunci(listAnnunci)
        console.log(listAnnunci);
    })
}
function cercaPerNome(query, listAnnunci) {
    console.log("query", query);
    console.log("listAnnunci", listAnnunci);

    let listaFiltrata = listAnnunci.filter((annuncio)=>{
        let nomeTM = annuncio.name.toLowerCase()
        let queryTM = query.toLowerCase()
        return nomeTM.includes(queryTM)
    })
    console.log("lista filtrata", listaFiltrata);
    stampaListaAnnunci(listaFiltrata)
}
function FiltriRicerca() {
    btnSearch.addEventListener("click", function(event){
        console.log("risultato ricerca:", search.value);

        cercaPerNome(search.value, listAnnunciGlobale)
    })
}




//richiamo funzioni
paginaCorrente()
popoloMenuCategorie()
caricAnnunci()
FiltriRicerca()