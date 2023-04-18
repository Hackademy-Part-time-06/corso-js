
//evidenziare elementi nella navBar
//=============================LA FUNCTION INZIALIZA PAGINA ===================================

function pagginaCorrente() {
    let elementoMenu;
    if (window.location.href.includes("index.html")) {
        console.log("sono nel home page");
        elementoMenu = document.getElementById("menu-pagina-home");

    } else if (window.location.href.includes("annunci.html")) {
        console.log("sono nel pagina annunci.html");
        elementoMenu = document.getElementById("menu-pagina-annunci");
    }
    // al trovamento del elemento aggiungi la class( ACTIVE)
    if (elementoMenu) {
        elementoMenu.classList.add("active");
    }
}

// chiamare le elementi dal api
//==============LA FUNCTION  PER CHIAMARE LA GATEGORIA PRODOTTO E METTERLA SUL MENU DROPDOWN===================

function popoloListaCategoria() {
    fetch("../server/categorie.json")
        .then(response => response.json())
        .then((listaCategoria) => {
            console.log("la lista categoria", listaCategoria);

            //cerco l elemento che contiene il dropdown
            let dropdown = document.getElementById("dropdown-menu-categorie");
            listaCategoria.forEach((categoria) => {

                console.log("creo la singola categoria per il drop down")


                let liCategoria = document.createElement("li");
                liCategoria.innerHTML = ` <a class="dropdown-item" href="#">${categoria.name}</a>`;

                dropdown.append(liCategoria)

            })



        })
        // function catch per il ERROR in caso non di arrata risposta  
        .catch((error) => {
            console.error("Failed to fetch categoria")
        });


}
popoloListaCategoria();// chiamata della function popoloListaCategoria
pagginaCorrente();// chiamata della function pagginaCorrente