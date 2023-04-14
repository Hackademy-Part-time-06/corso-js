let category = document.getElementById("category")

fetch("./api-mocked-data/categorie.json")
.then(res => res.json())
.then(json => {
    json.forEach(x => {
        let elemento_lista = document.createElement("li")
        elemento_lista.innerHTML = `<a class="dropdown-item" href="./category/${x.name}.html"><span class="bi ${x.icon} mx-1"></span>${x.name}</a>`
        category.append(elemento_lista)
    })
})