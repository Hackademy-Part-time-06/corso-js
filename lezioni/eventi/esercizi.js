"use strict"


/**
 *

 Dati i seguenti tag html:

 <div id=”dado”></div>
 <button id=”lancia-dado”>Lancia dado</button>

 al click del bottone genera un numero casuale da 1 a 6 ed inserisci l’output nel div dado.

 *
 */
function esercizio1() {

  const bottoneLanciaDado = document.createElement("button");
  bottoneLanciaDado.setAttribute("id", "lancia-dado");
  bottoneLanciaDado.innerText = "Lancia dado";
  document.body.appendChild(bottoneLanciaDado);

  const elementoDado = document.createElement("div");
  elementoDado.setAttribute("id", "dado");
  document.body.appendChild(elementoDado);

  bottoneLanciaDado.addEventListener("click", function (evento) {
    let risultato = generaNumeroRandomico(1, 6);
    elementoDado.innerText = risultato
  })
}

esercizio1();








/**
 *

 Dato il seguente tag html:

 <a href=”https://www.google.it/”>Cerca su google</a>

 fai in modo che ogni volta che un utente clicca sul link, invece di andare nella pagina di ricerca di google,
 appaia un alert con un qualsiasi messaggio. Solo dopo il terzo click sul link, verrà eseguito il suo naturale
 comportamento cambiando pagina.


 *
 */
function esercizio2() {

  const anchor = document.createElement("a");
  anchor.setAttribute("href", "https://www.google.it/");
  anchor.setAttribute("adv-counter", "0");
  anchor.innerText = "Cerca su google";
  document.body.appendChild(anchor);


  anchor.addEventListener("click", function (evento) {
    let counter = anchor.getAttribute("adv-counter");
    if (Number(counter) < 3) {
      evento.preventDefault();

      counter++;
      anchor.setAttribute("adv-counter", counter);
      alert("Advisor " + counter);
    }
  })
}

esercizio2();









/**
 *

 const libri = [
 {
	titolo: “Il Signore degli Anelli”,
	autore: “Tolkien”,
	categoria: “fantasy”
},
 {
	titolo: “Harry Potter”,
	autore: “Rowling”,
	categoria: “fantasy”
},
 {
	titolo: “Il Conte di Montecristo”,
	autore: “Dumas”,
	categoria: “narrativa classica”
},
 {
	titolo: “Dune”,
	autore: “Herbert”,
categoria: “fantascienza”
},
 {
	titolo: “Fight Club”,
	autore: “Palahniuk”,
categoria: “narrativa moderna”
}
 ];

 Crea un programma  che crei una lista usando il titolo dei libri.
 Ogni titolo avrà al suo fianco un bottone con scritto “aggiungi ai preferiti”. Al click di uno specifico bottone verrà emesso un alert col seguente testo:
 “Il libro {nome_del_libro} è stato aggiunto ai preferiti”



 *
 */



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
];

function esercizio3(listaLibri) {
  let elementoUl = document.createElement("ul");

  listaLibri.forEach(function(oggettoLibro) {
    console.log(oggettoLibro);


    if (oggettoLibro.hasOwnProperty("titolo")) {

      let contenuto = `${oggettoLibro.titolo} <button data-titolo="${oggettoLibro.titolo}">Aggiungi ai preferiti</button>`;
      let elemento = document.createElement("li");
      elemento.innerHTML = contenuto

      elementoUl.append(elemento)
      elemento.addEventListener("click", function(event) {
        const titoloLibro = event.target.getAttribute("data-titolo");
        alert(`Il libro "${titoloLibro}" è stato aggiunto ai preferiti`);
      });
    }

    document.body.appendChild(elementoUl);
  });
}

esercizio3(libri);









/**
 *

 Crea un programma chiamato “calcolatrice”. In questo programma devono essere presenti 2 tag input nei quali si potranno inserire dei numeri.
 Oltre a questi saranno presenti quattro bottoni coi seguenti simboli:

 +
 -
 *
 /

 Al click di uno dei bottoni si dovrà eseguire l’operazione matematica corrispondente relativa all’operatore selezionato rispetto ai valori dei 2 input.
 Mostrare il risultato all’utente


 *
 */


function calcolatrice() {
  let elementoInput1;
  let elementoInput2;
  let elementoInputRisultato;
  let elementoListaOperazioni;

  function _creaInterfaccia() {

    const interfacciaHtml = `
      <hr/>
      <hr/>
      <hr/>
      <div id="calcolatrice" class="container my-5 py-5">
        <div class="row">
          <div class="col">
            <h2>Calcolatrice</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input id="numero-1" type="number" value="0" placeholder="Inserisci un numero" />
          </div>
          <div class="col">
            <ul id="operazioni">
                <li><span data-operazione="+">+</span></li>
                <li><span data-operazione="-">-</span></li>
                <li><span data-operazione="/">/</span></li>
                <li><span data-operazione="*">*</span></li>
            </ul>
          </div>
          <div class="col">
            <input id="numero-2" type="number" value="0" placeholder="Inserisci un numero" />
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col">
            <h2>Risultato</h2>
            <input id="risultato" type="number" disabled />
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML( 'beforeend', interfacciaHtml );

    elementoInput1 = document.getElementById("numero-1");
    elementoInput2 = document.getElementById("numero-2");
    elementoInputRisultato = document.getElementById("risultato");
    elementoListaOperazioni = document.getElementById("operazioni");
  }

  _creaInterfaccia();

  elementoListaOperazioni.addEventListener("click", function(evento) {
    const target = evento.target;
    if (target.hasAttribute("data-operazione")) {
      let risultato = 0;
      let val1 = Number(elementoInput1.value);
      let val2 = Number(elementoInput2.value);
      const operazione = target.getAttribute("data-operazione");
      switch (operazione) {
        case "+":
          risultato = val1 + val2;
          break;
        case "-":
          risultato = val1 - val2;
          break;
        case "/":
          risultato = val1 / val2;
          break;
        case "*":
          risultato = val1 * val2;
          break;
      }

      elementoInputRisultato.value = risultato;
    }
  })
}

calcolatrice();