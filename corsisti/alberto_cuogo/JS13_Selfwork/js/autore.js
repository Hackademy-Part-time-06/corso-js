"use strict"

// ! esericizio 76
function elencoPost() {
    let searchParams = new URLSearchParams(window.location.search)
    let contenutoAutore = document.getElementById("contenuto-autore")

    let listaPostAutore = document.getElementById("lista-post-autore")

    fetch(`https://jsonplaceholder.typicode.com/users/` + searchParams.get("userId"))
    .then(response => response.json())
    .then(autore => {
        console.log("autore:", autore)

        for (let nomeProp in autore) {
            if (typeof autore[nomeProp] !== `object`) {
                let liProp = document.createElement("li")
                liProp.innerHTML = `${nomeProp}: <b>${autore[nomeProp]}</b>`
                contenutoAutore.append(liProp)
            }
        }
    })

    fetch(`https://jsonplaceholder.typicode.com/users/${searchParams.get("userId")}/posts`)
    .then(response => response.json())
    .then(listaPost => {
        console.log("Lista Post Autore:", listaPost)

        listaPost.forEach(function(postSingolo) {
    
            let li = document.createElement("li")
            listaPostAutore.append(li)
        
            li.classList.add("list-group-item", "d-flex", "justify-content-between")
    
            li.innerHTML = postSingolo.id + " - " + postSingolo.title

        })
    })
}

elencoPost()