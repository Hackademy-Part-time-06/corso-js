"use strict"

// ! esericizio 76
let listaPosts = []

function elencoPost() {
    let posts = fetch(`https://jsonplaceholder.typicode.com/posts`)
    console.log(posts)
    posts.then(function(response) {
        return response.json()
    })
    .then(function(posts) {
        console.log(posts)

        listaPosts = posts

        let ul = document.createElement("ul")
        ul.classList.add("list-group")
    
        let esercizio = document.getElementById("esercizio")
        esercizio.append(ul)

        listaPosts.reverse()

        listaPosts.forEach(function(postSingolo) {
    
            let li = document.createElement("li")
            ul.append(li)
        
            li.classList.add("list-group-item", "d-flex", "justify-content-between")
    
            li.innerHTML = postSingolo.id + " - " + postSingolo.title + " " + `<i class="bi bi-arrows-fullscreen" data-id="${postSingolo.id}"></i>`

        })

        const modalePostArticolo = new bootstrap.Modal(document.getElementById("modale-articolo"), {})

        let titoloArtiolo = document.getElementById("modal-title")
        let contenutoArticolo = document.getElementById("contenuto-articolo")

        let contenutoAutore = document.getElementById("contenuto-autore")
        

        ul.addEventListener("click", function(event){
            contenutoAutore.innerHTML = ""
            let elementoCliccato = event.target
            if (elementoCliccato.hasAttribute("data-id")) {
                let postSingoloID = event.target.getAttribute("data-id")

                let articolo = listaPosts.find((post) => {
                    return post.id === +postSingoloID
                })

                titoloArtiolo.innerText = `${articolo.id} - ${articolo.title}`
                contenutoArticolo.innerText = articolo.body


                fetch(`https://jsonplaceholder.typicode.com/users/` + articolo.userId)
                .then(response => response.json())
                .then(autore => {
                    console.log("autore:", autore)

                    for (let nomeProp in autore) {
                        if (typeof autore[nomeProp] !== `object`) {
                            let liProp = document.createElement("li")
                            if (nomeProp === "name") {
                                liProp.innerHTML = `${nomeProp}: <b><a href="http://127.0.0.1:5500/JS13_Selfwork/autore.html?userId=${articolo.userId}">${autore[nomeProp]}</a></b>`
                            }
                            else {
                                liProp.innerHTML = `${nomeProp}: <b>${autore[nomeProp]}</b>`
                            }
                            contenutoAutore.append(liProp)
                        }
                    }
                })

                modalePostArticolo.show()}
            
        })
    })


}

elencoPost()


function submitForm() {
    let form = document.querySelector("form")
    let inputTitle = document.getElementById("input-title")
    let inputBody = document.getElementById("input-body")

    form.addEventListener("submit", function(event){
        event.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: inputTitle.value,
            body: inputBody.value,
            userId: 11,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
        })
         .then(function(response) {
            return response.json()
        })
        .then(function(rispostaAlNuovoPost) {
            console.log("Contenuto risposta:", rispostaAlNuovoPost)

            listaPosts.unshift(rispostaAlNuovoPost)

            let ulPostNuovo = document.querySelector("#esercizio ul")

            let liPostNuovo = document.createElement("li")
            ulPostNuovo.prepend(liPostNuovo)
        
            liPostNuovo.classList.add("list-group-item", "d-flex", "justify-content-between")
    
            liPostNuovo.innerHTML = rispostaAlNuovoPost.id + " - " + rispostaAlNuovoPost.title + " " + `<i class="bi bi-arrows-fullscreen" data-id="${rispostaAlNuovoPost.id}"></i>`
         });
    }

    
)}


submitForm()