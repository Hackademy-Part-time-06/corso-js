"use strict";

console.log("common_presto.js caricato!");
//il common è un js comune sia alla home che alla sezione annunci

//==> gestisco la classe ACTIVE del menù
function paginaCorrente() {
  let elementomenu;
  if (window.location.href.includes("index_presto.html")) {
    console.log("sono nella home");
    elementomenu = document.getElementById("menu-pagina-home");
  } else if (window.location.href.includes("annunci_presto.html")) {
    console.log("ora sono nella pagina degli annunci");
    elementomenu = document.getElementById("menu-pagina-annunci");
  }

  //se trovo l'elemento (uno dei due sopra) aggiungo la classe active
  if (elementomenu) {
    elementomenu.classList.add("active");
  }
}

//==>popolo menù categorie (dropdown) con api e json fake
function popoloMenuCategorie() {
  fetch("/corsisti/Alice_Croce/AliceCroce_Presto_it/fake-server/categorie.json")
    .then((response) => response.json())
    .then((listaCategorie) => {
      console.log("Lista categorie:", listaCategorie);

      //una volta caricate le categorie nella console, ora devo caricarle nel dropdown richiamando la voce negli html che hanno l'id="menu-dropdown-categorie"
      let dropdownEl = document.getElementById("menu-dropdown-categorie");
      listaCategorie.forEach((categoria) => {
        console.log("creo il singolo elemento per il dropdown delle categorie");

        // <li><a class="dropdown-item" href="#">Action</a></li>
        //è solo un riferimento copiato dagli html
        let liCategoria = document.createElement("li");
        liCategoria.innerHTML = `<a class="dropdown-item" href="#">${categoria.name}</a>`;

        //non puoi vedere le categorie nel dropdown se non le appendi
        dropdownEl.append(liCategoria);
      });
    })
    .catch((error) => {
      console.error("C'è un errore nella chiamata dell'api, riprova!", error);
    });
}

paginaCorrente();
popoloMenuCategorie();
