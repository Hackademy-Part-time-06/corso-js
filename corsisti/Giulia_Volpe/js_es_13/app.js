"use strict"
//ESERCIZIO 76
/*
fetch('https://jsonplaceholder.typicode.com/posts') // questo chiama il link
.then(function(risposta){       // questo, mi torna la risposta come lista strana
    return risposta.json()
})
.then(function(rispComeOgg){  // questo, mi formatta la risposta come lista di oggetti
    console.log(rispComeOgg)
    rispComeOgg.forEach(elementoLista => {
        let titoli = elementoLista.title
        console.log(titoli)
    });
})
*/
// ESERCIZIO 77
/*
let container = document.getElementById("container")

fetch('https://jsonplaceholder.typicode.com/posts') // questo chiama il link
.then(function(risposta){       // questo, mi torna la risposta come lista strana
    return risposta.json()
})
.then(function(rispComeOgg){  // questo, mi formatta la risposta come lista di oggetti
    console.log(rispComeOgg)
    let ul = document.createElement("ul");
    ul.setAttribute("class", "list-group")
    container.append(ul);
    rispComeOgg.forEach(elementoLista => {
        let titoli = elementoLista.title
        console.log(titoli)
        let li = document.createElement("li");
        li.classList.add("list-group-item")
        ul.append(li);
        li.innerText = titoli
        li.innerHTML = `${titoli} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
        </svg>`
    });
})
*/

// ESERCIZIO 78
/*
let container = document.getElementById("container")

fetch('https://jsonplaceholder.typicode.com/posts') // questo chiama il link
    .then(function (risposta) {       // questo, mi torna la risposta come lista strana
        return risposta.json()
    })
    .then(function (rispComeOgg) {  // questo, mi formatta la risposta come lista di oggetti
        console.log(rispComeOgg)
        let ul = document.createElement("ul");
        ul.setAttribute("class", "list-group")
        container.append(ul);
        rispComeOgg.forEach(elementoLista => {
            let titoli = elementoLista.title
            console.log(titoli)
            let id = elementoLista.id
            let li = document.createElement("li");
            li.classList.add("list-group-item")
            ul.append(li);
            li.innerText = titoli
            li.innerHTML = `${titoli} <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
        </svg>
        </button>
        <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Titolo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        ${titoli}
        </div>
        </div>
        </div>
        </div>`
    });
})
*/

//ESERCIZIO 79
let container = document.getElementById("container")

fetch('https://jsonplaceholder.typicode.com/posts') // questo chiama il link
    .then(function (risposta) {       // questo, mi torna la risposta come lista strana
        return risposta.json()
    })
    .then(function (rispComeOgg) {  // questo, mi formatta la risposta come lista di oggetti
        let ul = document.createElement("ul");
        ul.setAttribute("class", "list-group")
        container.append(ul);

        ul.addEventListener("click", function (event) {
            if (event.target.hasAttribute("data-bs-target")) {
                console.log(event.target)
                fetch('https://jsonplaceholder.typicode.com/users/' + event.target.getAttribute("data-user-id"))
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (respAsObj) {
                        let idContent = event.target.getAttribute("data-bs-target")
                        console.log(respAsObj)
                        let divModale = document.querySelector(`#content-author-forPost-${idContent.replace("#", "")}`);
                        divModale.innerHTML = `<div> <b>${respAsObj.name}</b> </div>`
                    })
            }
        })
        rispComeOgg.forEach(elementoLista => {
            let titoli = elementoLista.title
            console.log(elementoLista)
            let id = elementoLista.id
            let cardBody = elementoLista.body
            let li = document.createElement("li");
            li.classList.add("list-group-item")
            ul.append(li);
            li.innerText = titoli
            li.innerHTML = `${titoli} 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#${id}" data-user-id="${elementoLista.userId}">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
        </svg>
      
        <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${titoli}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        ${cardBody} 
        <div id="content-author-forPost-${id}"></div>
        </div>
        </div>
        </div>
        </div>`
        });

})
