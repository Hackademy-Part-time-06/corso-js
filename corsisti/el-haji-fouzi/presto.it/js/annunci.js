/// inizializo la pagina  con un cosole log

console.log(">=========LISTA ANNUNCI===========<");


/// prendo il elemento dalla pagina (annunci.html)
let contenitoreListaAnnunci = document.getElementById("contenitore-lista-annunci")



///functio per generare le la singola card ********************************
function stampaCardAnnunci(annuncio) {
    console.log("<<<< le card >>> ", annuncio);

    let badgeEl;
    if (annuncio.type === "sell") {
        badgeEl = `<span class="badge bg-danger annuncio-badge">Vendo</span>`;
    } else {
        badgeEl = `<span class="badge bg-success annuncio-badge">Cerco</span>`
    }


    let contenitoreSingoloCard = document.createElement("div");
    contenitoreSingoloCard.className = ("col-12", "col-sm-4")

    contenitoreSingoloCard.innerHTML = `
    <div class="card " >
  <img src="../media/kv-galaxy-s23_s.jpg" class="card-img-top" alt="...">
    ${badgeEl}
    <div class="card-body">
             
       <h5 class="card-title price">${annuncio.price}$</h5>
        <h5 class="card-title">${annuncio.name}</h5>
        <p class="card-text">the discription of the product</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <div class= 
   </div>
</div>`;
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
            console.log(">======tutta la lista annunci=======<", datiLista);
            stampaListaAnnunci(datiLista);
        })
        .catch((error) => {
            console.error(">>>>>>FAILD TO FETCH LISTA ANNUNCI <<<<< ", error);
        });

}
caricaAnnunci();
