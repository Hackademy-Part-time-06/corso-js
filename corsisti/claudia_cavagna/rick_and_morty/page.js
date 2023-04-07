"use strict"

let cose = new URLSearchParams(window.location.search)
let pagina = cose.get("page")


fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
.then(function(response){
    return response.json()
})
.then(function(personaggi){
    let row = document.createElement("div")
    row.setAttribute("class", "row w-75 m-auto")
    document.body.append(row)
    personaggi.results.forEach(function(results){
      console.log(results)
        let div = document.createElement("div")
        row.append(div)
        div.setAttribute("class", "col-4")
        div.innerHTML = `<div class="card">
        <img src="${results.image}" class="card-img-top" alt="personaggi">
        <div class="card-body">
            <h5 class="card-title text-success">${results.name}</h5>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#${results.id}">
                Informazioni
            </button>
        </div>
      </div>`
      let modale = document.createElement("div")
      document.body.append(modale)
      modale.innerHTML = `<div class="modal fade" id="${results.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-success" id="exampleModalLabel">${results.name}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
           <ul id="listaSpecifiche_${results.id}"></ul>
          </div>
        </div>
      </div>
    </div>`


    let listaSpecifiche = document.getElementById(`listaSpecifiche_${results.id}`)
    //console.log(results)
    for (let info in results){
      if(typeof results[info] !== "object") {
        let listarotta = document.createElement("li")
        listaSpecifiche.append(listarotta)
        listarotta.innerHTML = `<strong> ${info}</strong> : ${results[info]}`
      }
    }
  })
  
  console.log(personaggi)
  
  let navPagine = document.createElement("nav")
  navPagine.setAttribute("aria-label", "Page navigation example")
  document.body.append(navPagine)
  let ul = document.createElement("ul")
  ul.setAttribute("class", "pagination justify-content-center")
  navPagine.append(ul)

  if(pagina == 1) {
    let li = document.createElement("li")
    li.setAttribute("class", "page-item")
    ul.append(li)
    let a = document.createElement("a")
    a.setAttribute("class", "page-link")
    a.setAttribute("href", "http://127.0.0.1:5500/page.html?page=2")
    a.innerText = "2"
    li.append(a)
    let li2 = document.createElement("li")
    li2.setAttribute("class", "page-item")
    ul.append(li2)
    let a2 = document.createElement("a")
    a2.setAttribute("class", "page-link")
    a2.setAttribute("href", "http://127.0.0.1:5500/page.html?page=3")
    a2.innerText = "3"
    li2.append(a2)
    let li3 = document.createElement("li")
    li3.setAttribute("class", "page-item")
    ul.append(li3)
    let a3 = document.createElement("a")
    a3.setAttribute("class", "page-link")
    a3.setAttribute("href", "http://127.0.0.1:5500/page.html?page=4")
    a3.innerText = "4"
    li3.append(a3)
    let liNext = document.createElement("li")
    liNext.setAttribute("class", "page-item")
    ul.append(liNext)
    let aNext = document.createElement("a")
    aNext.setAttribute("class", "page-link")
    aNext.setAttribute("href", "http://127.0.0.1:5500/page.html?page=2")
    aNext.innerText = "Successivo"
    liNext.append(aNext)
  }

  else if (pagina == 2) {
    let liPre = document.createElement("li")
    liPre.setAttribute("class", "page-item")
    ul.append(liPre)
    let aPre = document.createElement("a")
    aPre.setAttribute("class", "page-link")
    aPre.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina-1}`)
    aPre.innerText = "Precedente"
    liPre.append(aPre)
    let li = document.createElement("li")
    li.setAttribute("class", "page-item")
    ul.append(li)
    let a = document.createElement("a")
    a.setAttribute("class", "page-link")
    a.setAttribute("href", "http://127.0.0.1:5500/page.html?page=2")
    a.innerText = "2"
    li.append(a)
    let li2 = document.createElement("li")
    li2.setAttribute("class", "page-item")
    ul.append(li2)
    let a2 = document.createElement("a")
    a2.setAttribute("class", "page-link")
    a2.setAttribute("href", "http://127.0.0.1:5500/page.html?page=3")
    a2.innerText = "3"
    li2.append(a2)
    let li3 = document.createElement("li")
    li3.setAttribute("class", "page-item")
    ul.append(li3)
    let a3 = document.createElement("a")
    a3.setAttribute("class", "page-link")
    a3.setAttribute("href", "http://127.0.0.1:5500/page.html?page=4")
    a3.innerText = "4"
    li3.append(a3)
    let liNext = document.createElement("li")
    liNext.setAttribute("class", "page-item")
    ul.append(liNext)
    let aNext = document.createElement("a")
    aNext.setAttribute("class", "page-link")
    aNext.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina+1}`)
    aNext.innerText = "Successivo"
    liNext.append(aNext)
  }
 
  else if (pagina > 2 && pagina <= 41) {
    let liPre = document.createElement("li")
    liPre.setAttribute("class", "page-item")
    ul.append(liPre)
    let aPre = document.createElement("a")
    aPre.setAttribute("class", "page-link")
    aPre.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina-1}`)
    aPre.innerText = "Precedente"
    liPre.append(aPre)
    let li = document.createElement("li")
    li.setAttribute("class", "page-item")
    ul.append(li)
    let a = document.createElement("a")
    a.setAttribute("class", "page-link")
    a.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina+1}`)
    a.innerText = `${+pagina+1}`
    li.append(a)
    let li2 = document.createElement("li")
    li2.setAttribute("class", "page-item")
    ul.append(li2)
    let a2 = document.createElement("a")
    a2.setAttribute("class", "page-link")
    a2.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina+2}`)
    a2.innerText = `${+pagina+2}`
    li2.append(a2)
    let li3 = document.createElement("li")
    li3.setAttribute("class", "page-item")
    ul.append(li3)
    let a3 = document.createElement("a")
    a3.setAttribute("class", "page-link")
    a3.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina+3}`)
    a3.innerText = `${+pagina+3}`
    li3.append(a3)
    let liNext = document.createElement("li")
    liNext.setAttribute("class", "page-item")
    ul.append(liNext)
    let aNext = document.createElement("a")
    aNext.setAttribute("class", "page-link")
    aNext.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina+1}`)
    aNext.innerText = "Successivo"
    liNext.append(aNext)
  }
  
  else if (pagina == 42) {
    let liPre = document.createElement("li")
    liPre.setAttribute("class", "page-item")
    ul.append(liPre)
    let aPre = document.createElement("a")
    aPre.setAttribute("class", "page-link")
    aPre.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina-1}`)
    aPre.innerText = "Precedente"
    liPre.append(aPre)
    let li = document.createElement("li")
    li.setAttribute("class", "page-item")
    ul.append(li)
    let a = document.createElement("a")
    a.setAttribute("class", "page-link")
    a.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina-3}`)
    a.innerText = `${pagina-3}`
    li.append(a)
    let li2 = document.createElement("li")
    li2.setAttribute("class", "page-item")
    ul.append(li2)
    let a2 = document.createElement("a")
    a2.setAttribute("class", "page-link")
    a2.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina-2}`)
    a2.innerText = `${pagina-2}`
    li2.append(a2)
    let li3 = document.createElement("li")
    li3.setAttribute("class", "page-item")
    ul.append(li3)
    let a3 = document.createElement("a")
    a3.setAttribute("class", "page-link")
    a3.setAttribute("href", `http://127.0.0.1:5500/page.html?page=${+pagina-1}`)
    a3.innerText = `${pagina-1}`
    li3.append(a3)
  }

})