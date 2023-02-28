"use strict"  // indica che il codice verrà eseguito in strict mode https://www.w3schools.com/js/js_strict.asp

console.log("Introduzione a JS");


// commento in linea

/*
  commento multilinea
 */


/**
 *
 * La console
 *
 * metodi più comunemente utilizzati
 *
 */

console.log("Sono un messagio di log");
console.warn("Sono un messagio di warning");
console.error("Sono un messagio di errore");
console.table(["a", "b", "c", "d"]);

// passaggio di più parametri al metodo log della console
console.log("log di elemento 1", "log di un secondo elemento", "e così via");


/**
 *
 * Popup nativi
 *
 *  bloccano l'esecuzione del codice dopo di loro finchè non vengono chiusi
 *
 */

// alert - mostra un messaggio
alert("Sono un messaggio all'interno di un popup nativo chiamato \"alert\". Attenzione che finchè non verrò chiuso blocco l'esecuzione del codice dopo di me");

// prompt - mostra un messaggio e da la possibilità di inserire un valore che verrà ritornato quando il popup verrà chiuso
prompt("Ciao! Come ti chiami?");

// confirm - mostra un messaggio e tornerà "true" o "false" in caso si dia la conferma o meno
confirm("Sei sicuro di voler continuare?");