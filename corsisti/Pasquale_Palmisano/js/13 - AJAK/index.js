"use strict"

let pulsante = document.getElementById("lista_utenti")
pulsante.addEventListener("click", event => elenco())

let form_submit = document.getElementById("post-form")
form_submit.addEventListener("submit", event => {
  event.preventDefault()
  form()
})

function form() {
  let title = document.getElementById("form-title")
  let body = document.getElementById("form-body")

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title.value,
    body: body.value,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    
  })
}

function elenco() {
    let lista = document.createElement("ul")
    lista.classList.add("list-group")
    document.body.append(lista)

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => json.reverse().forEach(x => {
      let elemento = document.createElement("li")
      lista.append(elemento)
      elemento.classList.add("list-group-item")

      let fullscreen_button = document.createElement("span")
      elemento.append(fullscreen_button)
      fullscreen_button.classList.add("m-2")
      fullscreen_button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      fullscreen_button.addEventListener("click", event => modal(x.title, x.body, x.userId))

      let title = document.createElement("span")
      elemento.append(title)
      title.innerHTML = `<b>${x.id} - ${x.title}</b> `
    }))
}

function modal(title, body, author) {
  let modal = document.createElement("div")
  document.body.append(modal)
  modal.classList.add("modal")
  modal.setAttribute("tabindex", "-1")

  modal.innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${body}</p>
        <hr>
        <p>L'autore di questo post è:</p> <span id="${title}"></span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>`

  fetch("https://jsonplaceholder.typicode.com/users/" + author)
    .then(response => response.json())
    .then(json => {
      let span = document.getElementById(`${title}`)
      span.innerHTML = `<a href="./author.html?id=${json.id}">${json.name}</a>`})

  const myModal = new bootstrap.Modal(modal)
  myModal.show()
}