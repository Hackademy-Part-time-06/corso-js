'use strict'

console.log('ciao');

function paginaCorrente() {
    let ElementoMenu;

    if (window.location.href.includes('index.html')) {
        console.log('Sono nella Home page')
        ElementoMenu = document.getElementById('menu-pagina-home')
    }

    else if (window.location.href.includes('annunci.html')) {
        console.log('Sono nella pagina degli annunci')
        ElementoMenu = document.getElementById('menu-pagina-annunci')
    }

     if (ElementoMenu){
        ElementoMenu.classList.add('active');
    }
}



function popoloMenuCategorie () {
    fetch('./api-mocked-data/categorie.json')
    .then(Response => Response.json())
    .then(listaCategorie => {

        let dropdownEl = document.getElementById('menu-dropdown-categorie')
        listaCategorie.forEach((categoria) => {
            let liCategoria = document.createElement('li');
            liCategoria.innerHTML = `<a class="dropdown-item" href="#">${categoria.name}</a>
            `
            dropdownEl.append(liCategoria)
        });
        console.log('lista categorie', listaCategorie);
    })
    .catch((errore) => {
        console.error('errore nella chiamata dell api catogorie', errore)
    })

}
paginaCorrente();
popoloMenuCategorie();