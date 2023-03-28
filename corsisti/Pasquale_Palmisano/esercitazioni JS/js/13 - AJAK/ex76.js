/*Es - 76
Scrivi un programma che crei un elenco dei post dopo averli recuperati dal seguente link:
https://jsonplaceholder.typicode.com/posts
Per ogni post verrà stampato solo il titolo.
La documentazione relativa alle api la trovate al seguente link:
https://jsonplaceholder.typicode.com/*/



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
        elemento.innerText = x.title
    }))
}