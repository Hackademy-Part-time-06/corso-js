//Crea una lista da visualizzare in una pagina html. Per la lista utilizza il list-group di bootstrap. Se l’utente ha la proprietà nuovoUtente settata a true aggiungi un badge con la scritta new di fianco al suo nome (https://getbootstrap.com/docs/5.3/components/badge/)


let persone = [
        {
                nome: "Gino",
                cognome: "Ginoli",
                nuovoUtente: false
        },
        {
                nome: "Pino",
                cognome: "Pinoli",
                nuovoUtente: true
        }
]

persone.forEach(function (element) {
    let addUl = document.createElement("ul")
    let addLi = document.createElement("li")
    addLi.innerHTML = `${element.nome} ${element.cognome} `
    addUl.append(addLi)
    document.body.append(addUl)
    addUl.classList.add("list-group")
    addLi.classList.add("list-group-item", "list-group-item-dark")

    if (element.nuovoUtente) { //metto element perchè sono nel forEach e sto ciclando gli elementi
        let addSpan = document.createElement("span")
        addSpan.classList.add("badge", "bg-danger")
        addSpan.innerText = "New"
        addLi.append(addSpan)
    }
})