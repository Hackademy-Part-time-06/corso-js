
//evidenziare elementi nella navBar

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

function popoloListaCategoria() {
    fetch("../server/categorie.json")
        .then(response => response.json())
        .then((listaCategoria) => {
            console.log("la lista categoria", listaCategoria);

            //cerco l elemento che contiene il dropdown

            let dropdown = document.getElementById("menu-dropdown-")
            listaCategoria.forEach((categoria) => {
                console.log("creo il sigolo elemento per il drop down")
                let liCategoria = document.createElement("li");
                liCategoria.innerHTML = ` <a class="dropdown-item" href="#">${categoria.name}</a>`;
                dropdown.append(liCategoria)

            })

          

        })
        .catch((error) => {
            console.error("Failed to fetch categoria")
        });

}
popoloListaCategoria();
pagginaCorrente();