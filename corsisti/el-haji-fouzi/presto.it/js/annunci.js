/// inizializo la pagina  con un cosole log annunci 

console.log(">=========LISTA ANNUNCI===========<");


/// prendo il elemento contenitore dalla pagina (annunci.html)
let contenitoreListaAnnunci = document.getElementById("contenitore-lista-annunci");
let buttoneCerca = document.getElementById("btn");
let inputText = document.getElementById("cerca-per-nome");
let listAnnunciGlobale = [];





///function per generare le la singola card ********************************<<<<<
function stampaCardAnnunci(annuncio) {
    console.log("<<<<<<<<< le card >>>>>>>> ", annuncio);
    // creare il badge della card e dagli una condition
    let badgeEl;
    if (annuncio.type === "sell") {
        badgeEl = `<span class="badge bg-danger annuncio-badge">Vendo</span>`;
    } else {
        badgeEl = `<span class="badge bg-custom annuncio-badge">Cerco</span>`
    }

    //creazione la card con le proprieta del prodotto
    let contenitoreSingoloCard = document.createElement("div");
    contenitoreSingoloCard.className = ("col-12", "col-sm-4")

    contenitoreSingoloCard.innerHTML = `
    <div class="card">
  <img src="../media/kv-galaxy-s23_s.jpg" class="card-img-top" alt="...">
    ${badgeEl}
    <div class="card-body">
             
       <h5 class="card-title price">${annuncio.price}$</h5>
        <h5 class="card-title">${annuncio.name}</h5>
        <p class="card-text">the discription of the product</p>      
   </div>
    <div class="d-flex justify-content-evenly conteainer-info-annuncio">
         <div class= "col text-center cont-categori py-2">${annuncio.category}</div>
        <div class= "col text-center py-2">${annuncio.created_date}</div>
        </div>
</div>`;
    // appendere ila card al contenitore
    contenitoreListaAnnunci.append(contenitoreSingoloCard);

}



//functio per stampare la lista delle annunci ********************************

function stampaListaAnnunci(listaAnnunci = []) {
    console.log("============fn list annunci============", listaAnnunci);
    listaAnnunci.forEach((annuncio) => {
        stampaCardAnnunci(annuncio);



    })
}

//function per caricare le annunci dalle Api*********************

function caricaAnnunci() {
    fetch("../server/annunci.json")
        .then(response => response.json())
        .then(datiLista => {
            listAnnunciGlobale = datiLista;
            console.log(">======tutta la lista annunci=======<", datiLista);
            stampaListaAnnunci(datiLista);
        })
        .catch((error) => {
            console.error(">>>>>>FAILD TO FETCH LISTA ANNUNCI <<<<< ", error);
        });

}
caricaAnnunci();

///functio cerca nelle lista annunci per nome 
function cercaPerNome(query, datilista) {
    console.log("fn cerca per nome  query:", query);
    console.log("fn cerca per nome  datalista:", datilista);

    let listaFiltrata = datilista.filter(annuncio => {
        let nomeTm = annuncio.name.toLowerCase();
        let queryTm = annuncio.name.toLowerCase();
        return annuncio.name.includes(queryTm);
    })
    console.log("lista filtrata", listaFiltrata);
}



/// function per prendere il valore del input 

function inizializzaFiltri() {
    buttoneCerca.addEventListener("click", function (event) {
        console.log("buttone cliccato");
        console.log("il valore cerca per nome :", inputText.value);
        cercaPerNome(inputText.value, listAnnunciGlobale);
    })

}
inizializzaFiltri();
