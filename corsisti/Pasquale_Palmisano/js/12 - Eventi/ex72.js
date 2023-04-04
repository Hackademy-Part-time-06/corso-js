/*Dati i seguenti tag html:

- <div id=”dado”></div>
- <button id=”lancia-dado”>Lancia dado</button>

al click del bottone genera un numero casuale da 1 a 6 ed inserisci l’output nel div dado.*/

let die = document.getElementById("dado")
let button = document.getElementById("lancia-dado")

button.addEventListener("click", function(event) {
    let d = d6()
    die.innerText = `Risultato: ${d}`
})


function d6 () {
    return Math.floor(Math.random() * 6 + 1)
}