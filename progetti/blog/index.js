"use strict";
console.log("Ci sono!");


function programma() {
    let modaleEL = document.getElementById("modale-articolo");
    const modaleArticolo = new bootstrap.Modal(modaleEL)

    let titoloArticoloEl = document.getElementById("titolo-articolo");
    let contenutoArticoloEl = document.getElementById("contenuto-articolo");
    let contenutoAutoreEl = document.getElementById("contenuto-autore");

    let ulEL = document.createElement("ul");
    ulEL.classList.add("list-group");
    document.body.append(ulEL);


    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(listaPost => {
        console.log("Lista post:", listaPost)

        
        ulEL.addEventListener("click", function(evento) {
            contenutoAutoreEl.innerHTML = "";

            if (evento.target.hasAttribute("data-id-articolo")) {
                let idArticolo = evento.target.getAttribute("data-id-articolo")
                let articolo = listaPost.find((post) => {
                    return post.id === +idArticolo;
                })


                titoloArticoloEl.innerText = `${articolo.id} - ${articolo.title}`;
                contenutoArticoloEl.innerHTML = articolo.body
                

                fetch("https://jsonplaceholder.typicode.com/users/" + articolo.userId)
                .then(response => response.json())
                .then(autore => {
                    console.log("autore:", autore)

                    for (let nomeProp in autore) {
                        if (typeof autore[nomeProp] !== 'object') {
                            let liProp = document.createElement("li");
                            if (nomeProp === "name") {
                                liProp.innerHTML = `${nomeProp}: <b><a href="http://127.0.0.1:5500/progetti/blog/autore.html?userId=${articolo.userId}">${autore[nomeProp]}</a></b>`
                            }
                            else {
                                liProp.innerHTML = `${nomeProp}: <b>${autore[nomeProp]}</b>`
                            }
                            contenutoAutoreEl.append(liProp)
                        }
                    }
                })

                modaleArticolo.show()
            }
        })
        
        /*
        listaPost.forEach(articolo => {
            let liEL = document.createElement("li");
            liEL.classList.add("list-group-item")
            liEL.innerHTML = articolo.title;

            ulEL.append(liEL)
        });

        for (let articolo of listaPost) {
            let liEL = document.createElement("li");
            liEL.classList.add("list-group-item")
            liEL.innerHTML = articolo.title;

            ulEL.append(liEL)
        }
        */

        for (let i = 0; i < listaPost.length; i++) {
            let articolo = listaPost[i];
            let liEL = document.createElement("li");
            liEL.classList.add("list-group-item")
            liEL.innerHTML = `${articolo.id} - ${articolo.title} <i class="bi bi-arrows-fullscreen" data-id-articolo="${articolo.id}"></i>` ;

            ulEL.append(liEL)
        }


    })
}

programma()