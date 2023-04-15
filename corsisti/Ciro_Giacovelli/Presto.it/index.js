fetch(`./presto-assets/api-mocked-data/categorie.json`)
    .then(response => response.json())
    .then(json => {
        json.forEach(categoria => {
            let elementoLista = document.createElement("li");
            elementoLista.innerHTML = `<a class="dropdown-item" href="#">${categoria.name}</a>`
            categorie.append(elementoLista)
        });
    })

let ContenitoreAnnunci = document.getElementById("contenitore-annunci");
let bottoneRicerca = document.getElementById("bottoneCe");
let ricerca = document.getElementById("cerca-per-nome");

function mostrarCategorie() {

    fetch(`./presto-assets/api-mocked-data/annunci.json`)
        .then(response => response.json())
        .then(json => {
            json.forEach(annuncio => {
                let elementoAnnuncio = document.createElement("div");
                elementoAnnuncio.classList.add("col-4", "mb-4")
                let badgeannuncio
                if (annuncio.type === "sell") {
                    badgeannuncio = `<span class="badge bg-danger annunciostyle">Vendo</span>`

                }
                else {
                    badgeannuncio = `<span class="badge bg-success annunciostyle">Cerco</span>`
                }


                elementoAnnuncio.innerHTML =
                    `<div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/200" class="card-img-top" alt="...">
            ${badgeannuncio}
            <div class="card-body">
            <h5 class="card-title prezzo">${annuncio.price}</h5>
              <h5 class="card-title">${annuncio.name}</h5>
              <p class="card-text">Lorem Ipsum dolor sit amet... </p>
              </div>
              <div class="d-flex justify-content-evenly container-annuncio">
              <div class="text-center w-50 altrobordo">${annuncio.category}</div>
              <div class="text-center w-50">${annuncio.created_date}</div>
              </div>
          </div>`


                ContenitoreAnnunci.append(elementoAnnuncio)
            }
            )
        })
}

mostrarCategorie()

/*
function bottoneCerca() {
    bottoneRicerca.addEventListener("click", function (event) {
        console.log(bottoneCe.value)
    })

}
bottoneCerca();

function FunzioneFiltri(query, elementoAnnuncio) {

    let lista = elementoAnnuncio.filter {(annuncio) => {
        return annuncio.name.includes(query);


    }
}
}


FunzioneFiltri();
*/