"use strict"

let url = new URL("https://rickandmortyapi.com/api/character")

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(personaggi){
    console.log(personaggi)
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
  let pagina = personaggi.info.pages
  let navPagine = document.createElement("nav")
  navPagine.setAttribute("aria-label", "Page navigation example")
  document.body.append(navPagine)
  let ul = document.createElement("ul")
  ul.setAttribute("class", "pagination justify-content-center")
  navPagine.append(ul)
  
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
  
})








/*pagine.innerHTML = `<nav aria-label="Page navigation example">
<ul class="pagination ">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</nav>`

*/


/*
created
: 
"2017-11-04T18:48:46.250Z"
episode
: 
(51) ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51']
gender
: 
"Male"
id
: 
1
image
: 
"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
location
: 
{name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
name
: 
"Rick Sanchez"
origin
: 
{name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1'}
species
: 
"Human"
status
: 
"Alive"
type
: 
""
url
: 
"https://rickandmortyapi.com/api/character/1"
*/