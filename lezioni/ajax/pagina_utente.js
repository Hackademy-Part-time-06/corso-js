"use strict"


console.log("pagina utente")

let h2 = document.querySelector("h2");
let userInfoEl = document.querySelector("#user-info")
let listaPostEl = document.querySelector("#lista-post")

let userId = "";
let params = new URLSearchParams(window.location.search)

userId = params.get("userId")

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(user => {
        console.log("USER:", user)
        h2.innerHTML = `${user.name}`
        for (let k in user) {
          if (k !== "name" && typeof user[k] !== "object") {
            let liEL = document.createElement("li");
            liEL.innerHTML = `${k}: <b>${user[k]}</b>`
            userInfoEl.append(liEL)
          }
        }
      })

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => response.json())
      .then(listaPostUtente => {
        console.log("Lista post per autore:", listaPostUtente)
        listaPostUtente.forEach((post) => {
          let liEL = document.createElement("li");
          liEL.classList.add("list-group-item")
          liEL.innerHTML = `${post.title}`
          listaPostEl.append(liEL)
        })
      })