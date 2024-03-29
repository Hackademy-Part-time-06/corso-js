"use strict"

// getElementById - se lo trova, ritorna un elemento html
let elementoConId = document.getElementById("elemento-con-id");

// getElementsByTagName - ritorna una lista con tutti gli elementi appartenti ad uno tag html
let tutti_i_div = document.getElementsByTagName("div");

// getElementsByClassName - ritorna una lista con tutti gli elementi che hanno una determinata classe
let tutteLeRow = document.getElementsByClassName("row");


// querySelector - ritorna il primo elemento che soddisfa il selettore passato in input
let titoloH1 = document.querySelector("h1");

// querySelector - ritorna una lista di elementi che soddisfano il selettore passato in input.
// accetta tutti i selettori css
let tuttiGliAnchorActiveDiUnaLista = document.querySelectorAll("ul a.active");



// innerText - inserisce o ritorna il testo all'interno di uno specifico elemento
console.log("InnerText:", titoloH1.innerText);
titoloH1.innerText = "Il dom - contenuto aggiornato via javascript";

// inner text - inserisce o ritorna l'html all'interno di uno specifico elemento
console.log("InnerText:", elementoConId.innerHTML);
elementoConId.innerHTML = "Elemento <b>aggiornato via javascript</b>";


/**
 * Manipolo gli attributi
 */

// aggiungo
titoloH1.setAttribute("attributo-custom", "sono un valore custom");

// leggo
console.log("Stampo il valore dell'attributo custom: ", titoloH1.getAttribute("attributo-custom"));

// rimuovo
titoloH1.removeAttribute("attributo-custom");

// check presenza
console.log("Il titolo contiene un attributo chiamato \"attributo-custom\"?", titoloH1.hasAttribute("attributo-custom"));



/**
 * Manipolo le classi css
 */

// aggiungo
elementoConId.classList.add("lead");

// rimuovo
elementoConId.classList.remove("lead");

// rimuovo se presente / aggiungo se mancante
elementoConId.classList.toggle("lead");

// check presenza
console.log("L'elemento \"elementoConId\" ha una classe chiamata \"lead\"?", elementoConId.classList.contains("lead"));


/**
 * Manipolo il css inline
 */

// aggiungo
elementoConId.style.color = "red";
elementoConId.style.fontSize = "30px";
elementoConId.style.fontWeight = "900";




// 1. Creare l'elemento <div>
let elementoCustomDiv = document.createElement('div');

// 2. Impostare la sua classe ad "alert"
elementoCustomDiv.classList.add("alert");

// 3. Riempirlo con il contenuto
elementoCustomDiv.innerHTML = "Ciao sono <b>Gino</b>";


// 4. aggiungo l'elemento come ultimo tag del body
document.body.append(elementoCustomDiv);



/**
 * 
 */
let elementoOl = document.getElementById("ol");

let elementoBefore = document.createElement("p");
elementoBefore.innerText = "prima"
elementoOl.before(elementoBefore); // inserisce la stringa "prima" prima di <ol>


let elementoAfter = document.createElement("p");
elementoAfter.innerText = "dopo"
elementoOl.after(elementoAfter); // inserisce la stringa "dopo" dopo di <ol>


let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
elementoOl.prepend(liFirst); // inserisce liFirst all'inizio di <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
elementoOl.append(liLast); // inserisce liLast alla fine di <ol>




/**
 * Esempio creazione elemento Bootstrap
 */


let haiLaPatente = prompt("Hai la patente?");

console.log("L'utente ha la patente?", haiLaPatente)


function generaAlert(type, message) {
    let divAlert = document.createElement("div");
    console.log("Div dell'Alert di Bootstrap:", divAlert)


    divAlert.classList.add("alert", "alert-" + type);
    divAlert.setAttribute("role", "alert");

    divAlert.innerText = message;

    document.body.append(divAlert)
}


if (haiLaPatente === "si") {
    generaAlert("success", "Bravo che c'hai la patente!")
}
else if (haiLaPatente === "no") {
    generaAlert("danger", "Male!!! Se guidi vai in galera!")
}
else {
    generaAlert("warning", "Che hai detto???")
}