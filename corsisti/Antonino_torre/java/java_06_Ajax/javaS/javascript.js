"use strict"

//esercizio 76
/*
function titolo(){
  let lista = document.createElement("ul")
  document.body.append(lista)
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(function(response){
    return response.json()
  })
  .then(function(listaPost){
    listaPost.forEach(function(dati){
      let singoloDato = document.createElement("li")
      lista.append(singoloDato)
      singoloDato.innerText= dati.title
      console.log(dati.title)
      
    })
  })
}
titolo()
*/
// esercizio 77
/*
function titolo(){
  let lista = document.createElement("ul")
  document.body.append(lista)
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(function(response){
    return response.json()
  })
  .then(function(listaPost){
    listaPost.forEach(function(dati){
      let singoloDato = document.createElement("li")
      lista.append(singoloDato)
      singoloDato.innerText= dati.title
      console.log(dati.title)
      let icona = document.createElement("span")
      icona.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      singoloDato.append(icona)            
    })
  })
}
titolo()
*/
//esercizio 78
/*
function titolo(){
  let lista = document.createElement("ul")
  document.body.append(lista)
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(function(response){
    return response.json()
  })
  .then(function(listaPost){
    listaPost.forEach(function(dati){
      let singoloDato = document.createElement("li")
      lista.append(singoloDato)
      singoloDato.innerText= `${dati.title} `
      let icona = document.createElement("span")
      icona.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" data-bs-toggle="modal" data-bs-target="#exampleModal-${dati.id}" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      singoloDato.append(icona)
      let modale = document.createElement("div")
      document.body.append(modale)
      modale.innerHTML = `<div class="modal fade" id="exampleModal-${dati.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${dati.title}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${dati.body}
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
      </div>
      </div>
      </div>
      </div>`
    })
  })
}
titolo()
*/
//esercizio 79
/*
function titolo(){
  let lista = document.createElement("ul")
  document.body.append(lista)
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(function(response){
    return response.json()
  })
  .then(function(listaPost){
    listaPost.forEach(function(dati){
      let singoloDato = document.createElement("li")
      lista.append(singoloDato)
      singoloDato.innerText= `${dati.title} `
      let icona = document.createElement("span")
      icona.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" data-bs-toggle="modal" data-bs-target="#exampleModal-${dati.id}" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      singoloDato.append(icona)
      let modale = document.createElement("div")
      document.body.append(modale)
      modale.innerHTML = `<div class="modal fade" id="exampleModal-${dati.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${dati.title}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${dati.body}
      </div>
      <div id="elemento${dati.id}">
      </div>
      </div>
      </div>
      </div>`
      icona.addEventListener("click",function(){
        fetch(`https://jsonplaceholder.typicode.com/users/${dati.userId}`)
        .then(function(response){
          return response.json()
        })
        .then(function(lista){
          let datiScrittore = document.getElementById(`elemento${dati.id}`)
          datiScrittore.innerHTML= `<strong>Name:</strong> ${lista.name} <br> <strong>Username:</strong> ${lista.username} <br> <strong>Mail:</strong> ${lista.email} <br> <strong> Phone: </strong> ${lista.phone} <br> <strong>Website: </strong> ${lista.website}`
        })
      })
    })
  })
}
titolo()
*/
//esercizio 80 

function titolo(){
  let lista = document.createElement("ul")
  lista.setAttribute("id","ulLista")
  document.body.append(lista)
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(function(response){
    return response.json()
  })
  .then(function(listaPost){
    listaPost.reverse()
    console.log(listaPost)
    listaPost.forEach(function(dati){
      
      let singoloDato = document.createElement("li")
      lista.append(singoloDato)
      singoloDato.innerText= `${dati.id}  ${dati.title} `
      let icona = document.createElement("span")
      //icona
      icona.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" data-bs-toggle="modal" data-bs-target="#exampleModal-${dati.id}" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      singoloDato.append(icona)
      let modale = document.createElement("div")
      document.body.append(modale)
      //modale
      modale.innerHTML = `<div class="modal fade" id="exampleModal-${dati.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${dati.title}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${dati.body}
      </div>
      <div id="elemento${dati.id}">
      </div>
      </div>
      </div>
      </div>`
      icona.addEventListener("click",function(){
        fetch(`https://jsonplaceholder.typicode.com/users/${dati.userId}`)
        .then(function(response){
          return response.json()
        })
        .then(function(lista){
          let datiScrittore = document.getElementById(`elemento${dati.id}`)
          datiScrittore.innerHTML= `<strong>Name:</strong> <a href= "http://127.0.0.1:5501/javaS/datiAutore/autore.html?userId=${dati.userId}" target= "_blank"> ${lista.name}</a> <br> <strong>Username:</strong> ${lista.username} <br> <strong>Mail:</strong> ${lista.email} <br> <strong> Phone: </strong> ${lista.phone} <br> <strong>Website: </strong> ${lista.website}`
        })
      })
    })
    let bottone = document.getElementById("button")
    bottone.addEventListener("click",function(){
      let titoloForm = document.getElementById("titolo").value
      let bodyForm = document.getElementById("bodys").value
      fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titoloForm,
        body: bodyForm,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then(function(json) {
      listaPost.unshift(json)
      let listaUl = document.getElementById("ulLista")
      listaUl.innerHTML= ""
      listaPost.forEach(function(dati){
        let singoloDato = document.createElement("li")
        listaUl.append(singoloDato)
        singoloDato.innerText= `${dati.id}  ${dati.title} `
        let icona = document.createElement("span")
        
        //icona
        icona.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" data-bs-toggle="modal" data-bs-target="#exampleModal-${dati.id}" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
        </svg>`

        singoloDato.append(icona)
        let modale = document.createElement("div")
        document.body.append(modale)

        //modale
        modale.innerHTML = `<div class="modal fade" id="exampleModal-${dati.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${dati.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        ${dati.body}
        </div>
        <div id="elemento${dati.id}">
        </div>
        </div>
        </div>
        </div>`

        icona.addEventListener("click",function(){
          fetch(`https://jsonplaceholder.typicode.com/users/${dati.userId}`)
          .then(function(response){
            return response.json()
          })
          .then(function(lista){
            let datiScrittore = document.getElementById(`elemento${dati.id}`)
            datiScrittore.innerHTML= `<strong>Name:</strong> <a href= "http://127.0.0.1:5501/javaS/datiAutore/autore.html?userId=${dati.userId}" target= "_blank"> ${lista.name}</a> <br> <strong>Username:</strong> ${lista.username} <br> <strong>Mail:</strong> ${lista.email} <br> <strong> Phone: </strong> ${lista.phone} <br> <strong>Website: </strong> ${lista.website}`
          })
        })
      })
    });
  })
})
}
titolo()