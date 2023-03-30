"use strict";
console.log("Ci sono!");

(function () {
  let listaPost = [];
  let modaleEL = document.getElementById("modale-articolo");
  const modaleArticolo = new bootstrap.Modal(modaleEL);

  let titoloArticoloEl = document.getElementById("titolo-articolo");
  let contenutoArticoloEl = document.getElementById("contenuto-articolo");
  let contenutoAutoreEl = document.getElementById("contenuto-autore");

  let formEl = document.getElementById("form-autore");
  let bodyFormEl = document.getElementById("body");
  let titleFormEl = document.getElementById("title");

  let ulEL = document.createElement("ul");
  ulEL.classList.add("list-group");
  document.getElementById("contenitore-posts").append(ulEL);

  function initForm(listaPostEl) {
    formEl.addEventListener("submit", function (event) {
      event.preventDefault();

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: titleFormEl.value,
          body: bodyFormEl.value,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((articolo) => {
            listaPost.unshift(articolo)
            stampaSingoloPost(articolo, true)
        });
    });
  }

  function stampaSingoloPost(articolo, prepend=false) {
    let liEL = document.createElement("li");
    liEL.classList.add("list-group-item");
    liEL.innerHTML = `${articolo.id} - ${articolo.title} <i class="bi bi-arrows-fullscreen" data-id-articolo="${articolo.id}"></i>`;

    if (prepend) {
        ulEL.prepend(liEL);
    }
    else {
        ulEL.append(liEL);
    }
  }

  function stampaListaPost() {
    listenerIconaPosts();

    for (let i = 0; i < listaPost.length; i++) {
      let articolo = listaPost[i];
      stampaSingoloPost(articolo);
    }
  }

  function mostraPostInModale(articolo) {
    titoloArticoloEl.innerText = `${articolo.id} - ${articolo.title}`;
    contenutoArticoloEl.innerHTML = articolo.body;

    fetch("https://jsonplaceholder.typicode.com/users/" + articolo.userId)
      .then((response) => response.json())
      .then((autore) => {
        console.log("autore:", autore);

        for (let nomeProp in autore) {
          if (typeof autore[nomeProp] !== "object") {
            let liProp = document.createElement("li");
            if (nomeProp === "name") {
              liProp.innerHTML = `${nomeProp}: <b><a href="http://127.0.0.1:5500/progetti/blog/autore.html?userId=${articolo.userId}">${autore[nomeProp]}</a></b>`;
            } else {
              liProp.innerHTML = `${nomeProp}: <b>${autore[nomeProp]}</b>`;
            }
            contenutoAutoreEl.append(liProp);
          }
        }
      });

    modaleArticolo.show();
  }

  function listenerIconaPosts() {
    ulEL.addEventListener("click", function (evento) {
      contenutoAutoreEl.innerHTML = "";

      if (evento.target.hasAttribute("data-id-articolo")) {
        let idArticolo = evento.target.getAttribute("data-id-articolo");
        let articolo = listaPost.find((post) => {
          return post.id === +idArticolo;
        });

        mostraPostInModale(articolo);
      }
    });
  }

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((_listaPost) => {
        listaPost = _listaPost.reverse();
        console.log("Lista post:", listaPost);

        stampaListaPost();
      });
  }

  getPosts();

  initForm();
})();
