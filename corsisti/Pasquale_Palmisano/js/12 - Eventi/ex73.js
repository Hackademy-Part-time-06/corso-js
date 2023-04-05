/*Es - 73

Dato il seguente tag html:

- <a href=”https://www.google.it/”>Cerca su google</a>

fai in modo che ogni volta che un utente clicca sul link, invece di andare nella pagina di ricerca di google, appaia un alert con un qualsiasi messaggio. Solo dopo il terzo click sul link, verrà eseguito il suo naturale comportamento cambiando pagina.*/

let link = document.getElementById("pippo")
let click = 0

link.addEventListener("click", (event) => {
    click++
    if (click < 3) {
        event.preventDefault()
        alert("AAAAAAAAA")
    }
})