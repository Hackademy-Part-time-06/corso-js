"use strict"

console.log("Gli Array");

let listaNomi = ["gino", "pino", "dino", "rino"];
let lunghezzaListaNomi = listaNomi.length; // come per le stringhe, l'attributo "length" ritorna la lunghezza dell'elemento
let primoNomeNellaLista = listaNomi[0]; // la posizione degli elementi nell'array parte da zero
let ultimoNomeNellaLista = listaNomi[listaNomi.length - 1];

let arrayMultiTipo = ["abc", 123, true, false, ["a", "b", "c", [10, 20 , 30]]];
let elementoAnnidato = arrayMultiTipo[4][3][0]; // 10

let arrayTramiteCostruttore = new Array(5); // inizializzo un array di 5 elementi


/**
 *
 * Metodi
 *
 */

let listaGenerica = ["abc", "def", "ghi"];

// PUSH - aggiunge un elemento alla fine
listaGenerica.push("nuovo elemento");

// POP - rimuove l'ultimo elemento restituendolo
listaGenerica.pop(); // ["abc", "def", "ghi"] - "nuovo elemento"

// SHIFT - rimuove lil primo elemento restituendolo
listaGenerica.shift(); // ["def", "ghi"] - "abc"

// UNSHIFT - aggiunge un elemento all'inizio
listaGenerica.unshift("abc"); // ["abc", "def", "ghi"]

// CONCAT - unisce 2 array restituiendone l'unione
listaGenerica = listaGenerica.concat(["lmn", "opq", "rst"]); // ["abc", "def", "ghi", "lmn", "opq", "rst"]

// REVERSE - inverte l'ordine dell'array
listaGenerica.reverse(); // ['rst', 'opq', 'lmn', 'ghi', 'def', 'abc']

// INDEX OF - restituisce la posizione di un elemento se presente, altrimenti -1
listaGenerica.indexOf("pino"); // -1

// INCLUDES - indica se è presente o meno un elemento nell'array
listaGenerica.includes("pino"); // false

// JOIN - unisce gli elementi dell'array usando un delimitatore e restituendo una stringa
listaGenerica.join(" - "); // 'rst - opq - lmn - ghi - def - abc'


/**
 * SPLICE - elimina/sostituisce degli elementi
 *
 * arg1: posizione da cui partire
 * arg2 - opzionale: numero di elementi dalla posizione di partenza
 * arg3 - opzionale: valore con il quale sostiuire gli elememti rimossi
 */
listaGenerica.splice(1,1, 123); // ['rst', 123, 'lmn', 'ghi', 'def', 'abc']

/**
 *
 * SORT - ordina l'array in ordine alfabetico - per ordinarlo secondo altri criteri (es: numeri)
 * bisogna usare una order function ad hoc
 *
 */
listaGenerica.sort(); // [123, 'abc', 'def', 'ghi', 'lmn', 'rst']

let listaNumeriCasuali = [4, 10, 235, 45, 38, 7, 1000000];
listaNumeriCasuali.sort(); // [10, 1000000, 235, 38, 4, 45, 7]

listaNumeriCasuali.sort((a, b) => {
  console.log(`Sorting: a = ${a}, b = ${b}`);
  return a - b;
}); // [4, 7, 10, 38, 45, 235, 1000000]
