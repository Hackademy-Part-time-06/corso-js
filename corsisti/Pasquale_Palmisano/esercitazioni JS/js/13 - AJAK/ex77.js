/*Es - 77
Dopo aver svolto l’esercizio precedente aggiungi accanto ad ogni titolo la seguente icona presa da bootstrap:*/



function elenco() {
    let lista = document.createElement("ul")
    lista.classList.add("list-group")
    document.body.append(lista)

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => json.forEach(x => {
        let elemento = document.createElement("li")
        lista.append(elemento)
        elemento.classList.add("list-group-item")

        let fullscreen_button = document.createElement("button")
        elemento.append(fullscreen_button)
        fullscreen_button.classList.add("m-2")
        fullscreen_button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>`

      let title = document.createElement("span")
      elemento.append(title)
      title.innerText = x.title
    }))
}