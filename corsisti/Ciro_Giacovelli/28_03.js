'use strict'


let elenco = fetch("https://jsonplaceholder.typicode.com/posts")

  .then(function (response) {
    let contenutoJson = response.json()
    console.log("contenutoJson", response)
    return contenutoJson
  })

  .then(function (contenuto) {
    console.log("I post sono", contenuto)

    let ul = document.createElement("ul")
    ul.classList.add("list-group")
    document.body.append(ul)

    contenuto.forEach(function (SoloIlTitolo) {


      let li = document.createElement("li")
      li.classList.add("list-group-item", "justify-content-between", "d-flex")
      ul.append(li)
      li.innerText = SoloIlTitolo.title

      let button = document.createElement("button")
      button.classList.add("bi", "bi-arrows-fullscreen")
      li.append(button)

      let contenitoreModale = document.createElement("div")
      let modale = `<div class="modal"  id="contenuto-libri-${SoloIlTitolo.id}" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${SoloIlTitolo.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>${SoloIlTitolo.body}</p><span id="autore-${SoloIlTitolo.id}"></span>
                <br>
                <p></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>`

      contenitoreModale.innerHTML = modale
      document.body.append(contenitoreModale)

      button.addEventListener("click", () => {

        fetch(`https://jsonplaceholder.typicode.com/users/${SoloIlTitolo.id}`)
          .then(function (response) {
            return response.json()
          })

          .then(function (contenuto1) {
            console.log("Gli Autori sono", contenuto1)
            let autore1 = document.getElementById(`autore-${SoloIlTitolo.id}`)
            autore1.innerHTML = contenuto1.name
          })
        const modaleContenuto = new bootstrap.Modal(
          document.getElementById(`contenuto-libri-${SoloIlTitolo.id}`)
        )
        modaleContenuto.show()
      })

    })


  })
