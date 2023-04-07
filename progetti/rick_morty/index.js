"use strict";
console.log("Ci sono!");



let formEl = document.querySelector("form");
let contenitoreListaPersonaggi = document.getElementById("contenitore-lista-personaggi");
let modale = document.getElementById("modal-character");
let titoloModale = modale.querySelector("h3");
let contenutoModale = modale.querySelector(".modal-body");
let bsModalObj = new bootstrap.Modal(modale);
let spinner = document.getElementById("spinner-overlay");
let currentPage = 1;
let totalPages = 1;
let listaCharacters = []


contenitoreListaPersonaggi.addEventListener("click", function(e) {
  if (e.target.hasAttribute("data-char-id")) {
    let cId = e.target.getAttribute("data-char-id")
    let character = listaCharacters.find(char => char.id === +cId)
    console.log("Single character founded:", character)
    
    titoloModale.innerHTML = character.name
    contenutoModale.innerHTML = `<img src="${character.image}" />`
    bsModalObj.show()
  }

})



function stampaSingoloPersonaggio(personaggio) {
  console.log("[stampa-singolo-personaggio] personaggio object: ", personaggio);

  let contenitorePersonaggio = document.createElement("div");
  contenitorePersonaggio.classList.add("col-sm-3", "col-12", "mb-4");
  let posterUrl = "https://placehold.co/500x700?text=image+not+present";
  if (personaggio.image) {
    posterUrl = personaggio.image;
  }
  contenitorePersonaggio.innerHTML = `
    <div class="card">
      <img src="${posterUrl}" class="card-img-top" alt="${personaggio.name}">
      <div class="card-body">
        <h5 class="card-title">${personaggio.name}</h5>
      </div>
      <ul class="list-group p-2">
        <li class="list-group-item">Status: ${personaggio.status}</li>
      </ul>
      <div class="card-body">
        <button class="btn btn-primary" data-char-id="${personaggio.id}">Vedi scheda</a>
      </div>
    </div>
    `;

    contenitoreListaPersonaggi.append(contenitorePersonaggio);
}

function stampaListaPersonaggi(listaPersonaggi) {
  listaCharacters = listaPersonaggi.concat(listaPersonaggi)
  console.log("[stampa-lista-personaggi] lista film: ", listaPersonaggi);
  for (let i = 0; i < listaCharacters.length; i++) {
    let personaggio = listaCharacters[i];
    stampaSingoloPersonaggio(personaggio);
  }
}


function getPersonaggi(pagina=1) {
  spinner.classList.remove("d-none");
  console.log("[get-personaggi] pagina:", pagina);

  let url = new URL("https://rickandmortyapi.com/api/character");
  url.searchParams.append("page", pagina)

  console.log("[get-personaggi] url to call: ", url.href);
  fetch(url.href)
    .then((response) => response.json())
    .then((rispostaObj) => {
      totalPages = rispostaObj.info.pages;
      console.log("[get-films] fetch response: ", rispostaObj);
      spinner.classList.add("d-none");
      stampaListaPersonaggi(rispostaObj.results)
    });
}

getPersonaggi(currentPage);


document.addEventListener("scroll", function(e) {
  /*
  console.log("scroll: window.innerHeight + window.scrollY:", window.innerHeight + window.scrollY);
  console.log("scroll: document.body.scrollHeight:", document.body.scrollHeight);
  */
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && currentPage < totalPages) {
    currentPage++;
    getPersonaggi(currentPage);
  }
})