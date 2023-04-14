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