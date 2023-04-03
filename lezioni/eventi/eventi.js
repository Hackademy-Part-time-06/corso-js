"use strict"
console.log("Gli Eventi");

const bottoneSaluta = document.getElementById("bottone-per-salutare");

/**
 *
 * Event Listener - addEventListener
 *
 * Paramentri:
 *  - nome evento - es "click"
 *  - funzione di callback eseguita allo scatenarsi dell'evento
 *
 */
bottoneSaluta.addEventListener("click", function(evento) {
  console.log("Paramento evento", evento);

  console.log("Ciao!!");
});





/**
 *
 * Rimozione event listener - removeEventListener
 *
 * NB: come callback bisogna passare il riferimento ad una funzione invece di una funzione anonima
 *
 */

function risaluta(evento) {
  console.log("Paramento evento", evento);

  console.log("Ciao di nuovo!!");

  // rimuovo il listener dopo il primo utilizzo
  bottoneSaluta.removeEventListener("click", risaluta);
}
bottoneSaluta.addEventListener("click", risaluta);





/**
 *
 * Ciclo degli eventi - Caputure -> Target -> Bubbling
 *
 */
const contenitoreEsBubbling = document.getElementById("contenitore-esempio-bubbling");
const esBubbling = document.getElementById("esempio-bubbling");

esBubbling.addEventListener("click", function (evento) {
  console.log("Evento bubbling - callback del bottone", evento);
});

// la proprietà target dell'evento: event.target, contiene il target reale che ha scatenato l'evento
contenitoreEsBubbling.addEventListener("click", function (evento) {
  console.log("Evento bubbling - callback del contenitore", evento);
  console.log("Contenitore -> event.target:", evento.target);
});





/**
 *
 * Stop propagation - interrompere il flusso del bubbling
 *
 */
const contenitoreStopPropagation = document.getElementById("contenitore-stop-propagation");
const stopPropagation = document.getElementById("stop-propagation");

stopPropagation.addEventListener("click", function (evento) {
  console.log("Stop Propagation - callback del bottone", evento);
  evento.stopPropagation();
});

contenitoreStopPropagation.addEventListener("click", function (evento) {
  console.log("Stop Propagation - callback del contenitore", evento);
});





/**
 *
 * Prevent default - blocca l'esecuzione di default di un determinato tag
 *
 */
const anchorPreventDefault = document.getElementById("prevent-default");

anchorPreventDefault.addEventListener("click", function (evento) {
  console.log("Prevent default - blocco del cambio pagina");
  evento.preventDefault();
});





/**
 *
 * Custom Event - evento custom creato via js
 *
 */
const bottoneCustomEvent = document.getElementById("trigger-custom-event");

document.addEventListener("il-mio-evento-custom", function(evento) {
  console.log("Listener custom event eseguito");
});


bottoneCustomEvent.addEventListener("click", function (evento) {
  console.log("Custom Event - bottone cliccato -> emetto un custom event chiamato \"il-mio-evento-custom\"");
  let customEvent = new CustomEvent("il-mio-evento-custom", {detail: "valore passato al custom event"});
  document.dispatchEvent(customEvent);
});

