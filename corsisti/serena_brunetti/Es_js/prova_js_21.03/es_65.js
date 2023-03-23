//Scrivi un programma che preveda il passaggio in input dei seguenti parametri relativi ad un singolo libro. Dati questi valori genera una stringa che conterrà un tag anchor (non dovrà funzionare - sarà una sola e semplice stringa dentro una variabile) con un ipotetico link per una libreria.

function libreria(titolo, autore) {
    let autoreInA = autore.replaceAll(" ", "-").toLowerCase()
    let titoloInA = titolo.replaceAll(" ", "-").toLowerCase()
    let url = "www.lamiasuperlibreria.aulab"
    return `<a href=”${url}/${titoloInA}/${autoreInA}.html”>${titolo}</a>`
}
let library = libreria("Il calice di fuoco", "J. K. Rowling")
console.log(library)
