/*Es - 78
Dopo aver svolto l’esercizio precedente fai in modo che ogni volta che venga cliccata l’icona venga aperta una modale di bootstrap che mostri tutto il titolo ed il contenuto del post*/

elenco()

function elenco() {
    let lista = document.createElement("ul")
    lista.classList.add("list-group")
    document.body.append(lista)

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => json.forEach(x => {
      let elemento = document.createElement("li")
      lista.append(elemento)
      elemento.classList.add("list-group-item")

      let fullscreen_button = document.createElement("button")
      elemento.append(fullscreen_button)
      fullscreen_button.classList.add("m-2")
      fullscreen_button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`
      fullscreen_button.addEventListener("click", event => modal(x.title, x.body))

      let title = document.createElement("span")
      elemento.append(title)
      title.innerText = x.title
    }))
}

function modal(title, body) {
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
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>`

  const myModal = new bootstrap.Modal(modal)
  myModal.show()
}