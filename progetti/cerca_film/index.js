"use strict";
console.log("Ci sono!");



let formEl = document.querySelector("form");
let titoloInput = formEl.querySelector("#title");
let contenitoreListaFIlm = document.getElementById("contenitore-lista-film");

function initForm() {
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("[init-form] submit - input title value: ", titoloInput.value);

    if (titoloInput.value) {
      getFilms(titoloInput.value, 1)
    }
  });
}

function stampaSingoloFilm(film) {
  console.log("[stampa-singolo-film] film object: ", film);

  let contenitoreFilm = document.createElement("div");
  contenitoreFilm.classList.add("col-sm-4", "col-12", "mb-4");
  let posterUrl = "https://placehold.co/600x400?text=image+not+present";
  if (film.Poster && film.Poster !== "N/A") {
    posterUrl = film.Poster;
  }
  contenitoreFilm.innerHTML = `
    <div class="card">
      <img src="${posterUrl}" class="card-img-top" alt="${film.Title}">
      <div class="card-body">
        <h5 class="card-title">${film.Title}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Anno: ${film.Year}li>
        <li class="list-group-item">Tipo: ${film.Type}</li>
      </ul>
      <div class="card-body">
        <a href="./film.html?filmId=${film.imdbID}" class="btn btn-primary">Vai alla scheda</a>
      </div>
    </div>
    `;

  contenitoreListaFIlm.append(contenitoreFilm);
}

function stampaListaFilm(listaFilm) {
  console.log("[stampa-lista-film] lista film: ", listaFilm);
  for (let i = 0; i < listaFilm.length; i++) {
    let film = listaFilm[i];
    stampaSingoloFilm(film);
  }
}


function getFilms(parolaDaCercare, pagina=1) {
  console.log("[get-films] search keyword:", titoloInput.value);

  // reset film container
  contenitoreListaFIlm.innerHTML = "";

  let url = new URL("http://www.omdbapi.com/?apikey=9f6ae0f5");
  url.searchParams.append("s", parolaDaCercare)
  url.searchParams.append("page", pagina)

  console.log("[get-films] url to call: ", url.href);
  fetch(url.href)
    .then((response) => response.json())
    .then((rispostaObj) => {
      console.log("[get-films] fetch response: ", rispostaObj);

      if (rispostaObj.Search) {
        stampaListaFilm(rispostaObj.Search)

        pagination.handlePagination(rispostaObj, pagina)
      }
    });
}


// utilizzo una closure per rendere privata la logica della navigazione 
let pagination = (function() {
  let paginationContainer = document.getElementById("pagination");
  let prevEl = document.getElementById("prev");
  let nextEl = document.getElementById("next");
  let currentPage = 1;

  prevEl.addEventListener("click", function(e) {
    e.preventDefault();
    currentPage--
    getFilms(titoloInput.value, currentPage);
    paginationContainer.classList.add("d-none");
  })
  nextEl.addEventListener("click", function(e) {
    e.preventDefault();
    currentPage++
    getFilms(titoloInput.value, currentPage);
    paginationContainer.classList.add("d-none");
  })

  return {
    handlePagination: function(fetchResponse, pagina) {
      console.log("[handle-pagination] pagina:", pagina);
      console.log("[handle-pagination] totale elementi:", fetchResponse.totalResults);

      currentPage = pagina

      if (fetchResponse.totalResults && fetchResponse.totalResults > 10) {
        paginationContainer.classList.remove("d-none");

        let pages = Math.ceil(fetchResponse.totalResults / 10);

        if (currentPage === 1) {
          prevEl.classList.add("d-none")
          nextEl.classList.remove("d-none")
        }
        else if (pages === currentPage) {
          prevEl.classList.remove("d-none")
          nextEl.classList.add("d-none")
        }
        else {
          prevEl.classList.remove("d-none")
          nextEl.classList.remove("d-none")
        }
      }
      else {
        paginationContainer.classList.add("d-none");
      }
    }
  }
})()

initForm();
