'use sctrict'

console.log("ciao")

let categoria = document.getElementById('categoria')

fetch('./api-mocked-data/categorie.json')
.then (res => res.json())
.then(json => {
    json.forEach(element => {
        let elemento_lista = document.createElement('li');
        elemento_lista.innerHTML = `<a class="dropdown-item" href="${element.name}.html">${element.name}</a>`
        categoria.append(elemento_lista)
    });
})