/*Crea un programma  che crei una lista usando il titolo dei libri.
Ogni titolo avrà al suo fianco un bottone con scritto “aggiungi ai preferiti”. Al click di uno specifico bottone verrà emesso un alert col seguente testo: 
        “Il libro {nome_del_libro} è stato aggiunto ai preferiti”*/

const libri = [
    {
        titolo: "Il Signore degli Anelli",
        autore: "Tolkien",
        categoria: "fantasy"
    },
    {
        titolo: "Harry Potter",
        autore: "Rowling",
        categoria: "fantasy"
    },
    {
        titolo: "Il Conte di Montecristo",
        autore: "Dumas",
        categoria: "narrativa classica"
    },
    {
        titolo: "Dune",
        autore: "Herbert",
        categoria: "fantascienza"
    },
    {
        titolo: "Fight Club",
        autore: "Palahniuk",
        categoria: "narrativa moderna"
    }
]

function search(title) {
    let result = libri.filter(x => x.titolo == title)
    result.forEach(x => {
        let box = document.createElement("div")
        box.classList.add("m-3")
        document.body.append(box)

        let title_span = document.createElement("span")
        box.append(title_span)
        title_span.classList.add("m-3", "fw-bold")
        title_span.innerHTML = x.titolo

        let add_button = document.createElement("button")
        box.append(add_button)
        add_button.classList.add("m-3")
        add_button.innerText = "Aggiungi ai Preferiti"
        add_button.addEventListener("click", event => {
            alert(`Il libro "${x.titolo}" è stato aggiunto ai preferiti`)
        })       
    })
}