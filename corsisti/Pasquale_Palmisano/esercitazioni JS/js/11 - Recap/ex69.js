/*Esercizio 69
La Rubrica

Crea una lista da visualizzare in una pagina html. Per la lista utilizza il list-group di bootstrap:

https://getbootstrap.com/docs/5.3/components/list-group/


Se l’utente ha la proprietà nuovoUtente settata a true aggiungi un badge con la scritta new di fianco al suo nome (https://getbootstrap.com/docs/5.3/components/badge/)*/

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
    },

    {
        nome: "Gianni",
        cognome: "Giannoli",
        nuovoUtente: true
    },

    {
        nome: "Franco",
        cognome: "Franchi",
        nuovoUtente: false
    },

    {
        nome: "Gianclaudio",
        cognome: "Tarantini",
        nuovoUtente: true
    },
]

let lista = document.createElement("ul")
lista.classList.add("list-group")
document.body.append(lista)

persone.forEach(x => {
    let elemento_lista = document.createElement("li")
    elemento_lista.classList.add("list-group-item")
    lista.append(elemento_lista)
    elemento_lista.innerHTML = `${x.nome} ${x.cognome} `
    if (x.nuovoUtente) {
        let badge = document.createElement("span")
        badge.classList.add("badge", "bg-warning")
        badge.innerText = "New"
        elemento_lista.append(badge)
    }
})
