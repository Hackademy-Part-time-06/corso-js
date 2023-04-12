let form_category = document.getElementById("form_category")

fetch("./api-mocked-data/categorie.json")
.then(res => res.json())
.then(json => {
    json.forEach(x => {
        let option = document.createElement("option")
        option.setAttribute("value", x.name)
        option.innerText = x.name
        form_category.append(option)
    })
})