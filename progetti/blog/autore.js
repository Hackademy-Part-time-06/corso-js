"use strict";
console.log("Ci sono!");

function programma() {
  let searchParams = new URLSearchParams(window.location.search);
  let contenutoAutoreEl = document.getElementById("contenuto-autore");

  
  let ulEL = document.createElement("ul");
  ulEL.classList.add("list-group");
  document.body.append(ulEL);


  fetch("https://jsonplaceholder.typicode.com/users/" + searchParams.get("userId"))
    .then((response) => response.json())
    .then((autore) => {
      console.log("autore:", autore);

      for (let nomeProp in autore) {
        if (typeof autore[nomeProp] !== 'object') {
            let liProp = document.createElement("li");
            liProp.innerHTML = `${nomeProp}: <b>${autore[nomeProp]}</b>`
            contenutoAutoreEl.append(liProp)
        }
    }
    });

    fetch(`https://jsonplaceholder.typicode.com/users/${searchParams.get("userId")}/posts`)
    .then((response) => response.json())
    .then((listaPost) => {
      console.log("listaPost:", listaPost);

      for (let i = 0; i < listaPost.length; i++) {
        let articolo = listaPost[i];
        let liEL = document.createElement("li");
        liEL.classList.add("list-group-item")
        liEL.innerHTML = `${articolo.id} - ${articolo.title}` ;

        ulEL.append(liEL)
    }
    });
}

programma();
