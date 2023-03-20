"use strict"
/*
//Stiamo lavorando sul dom (document object model), tutta l'alberatura che compone la pagina HTML

//Prende/ritorna l'elemento tramite id
let titolo = document.getElementById("titolo")

console.log("elemento titolo", titolo)

//Prende tutti gli elementi con il tag div
let tuttuIDiv = document.getElementsByTagName("div")

//In console viene mostrata una lista HTMLCollection (non è un array quindi non risponde alle sue proprietà)
console.log("tutti gli elementi div", tuttuIDiv)

//Prende tutti gli elementi con la classe "row"
let tuttelerow = document.getElementsByClassName("row")
console.log("Tutte le row", tuttelerow)

//Prende gli elementi con classe col.
let tutteLeColonne = document.querySelector(".col")
console.log("Tutte le colonne", tutteLeColonne)

//Prende/ritorna il primo elemento con classe "col", h3, e con classe "classe-span"
let titoloH3 = document.querySelector(".col h3 .classe-span")
console.log("Elemento H3", titoloH3)

console.log("testo all'interno del titolo", titolo.innerText)
 
//La proprietà Inner.text setta o ritorna il testo contenuto in un elemento
titolo.innerText = "Ciao sono il testo di nuovo"
*/

//Setto testodiprova come corrispettivo dell'elemento HTML con id="testo-di-prova". Il metodo .querySelector ritorna il primo elemento che matcha; per ritornarli tutti querySelectorAll()                      
let testodiprova = document.querySelector("#testo-di-prova")
//oppure: let testodiprovaConGetElement = document.getElementById("testo-di-prova")
console.log("testo originale:", testodiprova.innerText)


//Modifichiamo il testo, innerHTML legge anche aventuali righe di codice, in questo caso il bold <b>
testodiprova.innerHTML = "ciao sono <b>Gino<b>"
console.log("contenuto modificato con inner HTML:", testodiprova.innerHTML)

//Per inserire attributi
testodiprova.setAttribute("attributo-di-prova", "sono il valore dell'attributo di prova")

/*ho aggiunto un attributo "attributo-di-prova", con valore "sono il valore dell'attributo di prova".
<p id="testo-di-prova" attributo-di-prova="sono il valore dell'attributo di prova">ciao sono <b>Gino</b></p>
*/

//rimuovo l'attributo "attributo di prova"
testodiprova.removeAttribute("attributo-di-prova")

//ne ineserisco un'altra class="colore-rosso"
testodiprova.setAttribute("class", "colore-rosso")

//prendo l'attributo class
let classe = testodiprova.getAttribute("class")

console.log("che classi ha il mio elemento", classe)

//setto un attributo class="colore-rosso corsivo"
testodiprova.setAttribute("class", classe + " corsivo")

let classi = testodiprova.getAttribute("class")

console.log("classi elemento:", classi)

console.log("testodiprova ha l'attributo 'ciccio'", testodiprova.hasAttribute("ciccio"))

testodiprova.classList.add("background-verde") //aggiungo una classe

testodiprova.classList.remove("colore-rosso") //rimuovo una classe

testodiprova.classList.toggle("colore-rosso") //rimuove se presente, aggiunge se assente

console.log("elemento di prova contiene la classe 'corsivo'?", testodiprova.classList.contains("corsivo"))

//aggiungo uno style color:green all'elemento html testodiprova
testodiprova.style.color = "green"
testodiprova.style.fontSize = "50px"

//creo un nuovo elemento
let p = document.createElement("p")

//contentuo del nuovo elemento
p.innerText = "sono un nuovo elemento"

//dove inserirlo.
document.body.append(p)

//un successivo append non copia l'elemento, lo sposta
testodiprova.append(p)

