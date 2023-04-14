'use sctrict'

console.log("ciao")

let contenitoreListaAnnunci = document.getElementById('contenitore-lista-annunci')
let btnCerca = document.getElementById('btn-cerca');
let inputCercaPerNome = document.getElementById('cerca-per-nome');

let listaAnnunciGlobale = [];

function stampaCardAnnuncio(annuncio) {

    console.log('fn stampacardannuncio', annuncio)

    let contenitoreSingolaCard = document.createElement('div')
    contenitoreSingolaCard.classList.add('col-12', 'col-sm-4', 'mb-4')

    let badgeEl;
    if (annuncio.type === "sell") {

        badgeEl = `<span class="badge bg-danger annuncio-type-badge">Vendo</span>`;
    }
    else {
        badgeEl = `<span class="badge bg-success annuncio-type-badge">Cerco</span>`;
    }

    contenitoreSingolaCard.innerHTML = `
    <div class="card">
         <img src="https://placehold.co/600x400?text=image+not+present" class="card-img-top">
         ${badgeEl}
          <div class="card-body">
                <h5 class="card-title price">${annuncio.name}</h5>
                 <h5 class="card-title">${annuncio.price}$</h5>
                 <p class="card-text">lorem ipsum</p>
                 </div>
            <div class='d-flex justify-content-evenly annuncio-extra-info-container'>
                <div class='text-center w-50 py-2 aeic-category'>${annuncio.category}</div>
                <div class='text-center w-50 py-2'>${annuncio.created_date}</div>
            </div>
       </div>
  </div>`
        ;

    contenitoreListaAnnunci.append(contenitoreSingolaCard)
}

function stampaListaAnnunci(listaAnnunci) {

    contenitoreListaAnnunci.innerHTML = "";
    listaAnnunci.forEach((annuncio) => {
        stampaCardAnnuncio(annuncio)
    })
}

function caricaAnnunci() {

    fetch('./api-mocked-data/annunci.json')
        .then(res => res.json())
        .then(listaAnnunci => {
            
            listaAnnunciGlobale = listaAnnunci
            console.log('Lista annunci', listaAnnunci);
             stampaListaAnnunci(listaAnnunci);
            
           
        })

        .catch((errore) => {
            console.error('errore nella chiamata dell api catogorie', errore)
        })

}

function cercaPerNome(query, listaAnnunci) {
    console.log('fn cercaPerNome - query', query)
    console.log('fn cercaPerNome - lista annunci', listaAnnunci)
      
    let listaFiltrata = listaAnnunci.filter((annuncio) => {
        let nomeTM = annuncio.name.toLowerCase();
        let queryTM = query.toLowerCase();
        return nomeTM.includes(queryTM);

    })

    console.log('fn cerca per nome - lista filtrata', listaFiltrata)

    stampaListaAnnunci(listaFiltrata);
}

function inizializzaFiltri() {
    btnCerca.addEventListener('click', function (event) {
            console.log('bottone cliccato');
            console.log('valore cerca per nome', inputCercaPerNome.value);

            cercaPerNome(inputCercaPerNome.value, listaAnnunciGlobale);

        })
}


inizializzaFiltri();

caricaAnnunci();


