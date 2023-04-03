"use strict"

console.log("set-map-date");

/**
 *
 * SET - oggetti che ci permettono di creare una collezione di valori che devono essere unici
 * Simili agli array ma con valori unici
 *
 */
var social = new Set();

// ADD: aggiungo un elemento
social.add("Facebook")
social.add("Twitter")
social.add("MySpace")
console.log(social)
social.add("MySpace")
console.log(social)

// SIZE: quantità elementi presente nel set
console.log(social.size)

// HAS: controllo presenza di un singolo elemento
console.log(social.has("Facebook")) // true
console.log(social.has("Linkedin")) // false

// DELETE: elimino uno specifico elemento
social.delete("MySpace");
console.log(social)

// FOREACH: iterare sugli elementi
social.forEach(function (elemento) {
  console.log(elemento)
})

// CLEAR: cancellare tutti gli elementi presenti nel set
social.clear();
console.log(social)




/**
 *
 * MAP - mappe associative che ci consentono di abbinare un valore ad una chiave.
 * Simili agli oggetti, ma le chiavi possono essere qualsiasi cosa e non mere stringhe
 *
 */
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

contacts.forEach(function (elemento, chiave) {
  console.log(chiave)
  console.log(elemento)
})




/**
 *
 * DATE
 *
 * Per la rappresentazione di date e orari JavaScript prevede l’oggetto Date.
 * Esso codifica internamente una data come il numero di millisecondi trascorsi dal 1 Gennaio 1970, ora di Greenwich.
 *
 *
 */


// nuova data corrispondente ad oggi
var nuovaDataOdierna = new Date();

// nuova data tramite millisecondi
var dataByMs = new Date(1379989986515);

// nuova data tramite stringa
var dataByStringa = new Date("01/21/2013 05:30");

console.log(new Date("2021-05-23"));
console.log(new Date("2020/2/29"));
console.log(new Date("2020-14-03"));
console.log(new Date("14-02-2021"));

// nuova data tramite parametri
var dataByParams = new Date(2013, 0, 1, 15, 30, 0, 0);



/**
 * Metodi data - GET
 */

// anno a 4 cifre
console.log(dataByStringa.getFullYear()); // 2013

// mese da 0 a 11
console.log(dataByStringa.getMonth()); // 0

// giorno da 1 a 31
console.log(dataByStringa.getDate()); // 21

// giorno settimana da 0 a 6
console.log(dataByStringa.getDay()); // 1

// ora
console.log(dataByStringa.getHours()); // 5

// minuti
console.log(dataByStringa.getMinutes()); // 30

// secondi
console.log(dataByStringa.getSeconds()); // 0

// millisecondi
console.log(dataByStringa.getMilliseconds()); // 0



/**
 * Metodi data - SET
 */

// anno a 4 cifre
dataByStringa.setFullYear(2025);
dataByStringa.setMonth(11);
dataByStringa.setDate(21);
dataByStringa.setHours(9);
dataByStringa.setMinutes(29);
dataByStringa.getSeconds(19);

console.log(dataByStringa) // Sun Dec 21 2025 09:29:00 GMT+0100 (Central European Standard Time)



/**
 * Formattazione
 */

const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
console.log(dataByStringa.toLocaleDateString('it-IT', options)); // domenica 21 dic 2025

/**
 * Confronto
 */


var scadenza = new Date(2013, 11, 10);
var oggi = new Date();
if (oggi < scadenza) {
  console.log("Non ancora scaduto!");
}
else {
  console.log("Scaduto!");
}


