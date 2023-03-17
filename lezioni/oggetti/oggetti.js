"use strict"

console.log("Gli Oggetti");

let persona = {
  nome: "gino",
  cognome: "ginoli",
  codiceFiscale: "gnggnl123123123",
  indirizzo: {
    via: "via delle vie 10",
    citta: "Torino",
    provincia: "TO",
    cap: 10012
  }
};

// dichiarazione tramite costruttore
let nuovoOggetto = new Object();
nuovoOggetto.nuovaProprieta = 123;

/**
 * Accedere alle proprietà
 */

// dot notation
persona.nome

// richiamo del nome della proprietà come indice
persona["nome"]



/**
 * Aggiungere proprietà
 */

persona.eta = 19;
persona["genere"] = "M";



/**
 * Eliminare proprietà
 */

delete persona.codiceFiscale;



/**
 * Controllare la presenza di una proprietà
 */

persona.hasOwnProperty("codiceFiscale"); // false




/**
 * Metodi
 */

persona.saluta = function() {
  console.log("ciao");
};

persona.saluta(); // "ciao"




/**
 * il THIS
 */

persona.stampaNomeCompleto = function() {
  let nomeCompleto = this.nome + " " + this.cognome;
  console.log(nomeCompleto);
};

persona.stampaNomeCompleto(); // "ciao"


/**
 * Valore per Referenza e valore per Assegnazione
 */

// assegnazione - la variabile è proprietaria del valore
let nomePersona = "Luca";
let nomePersona2 = nomePersona;
nomePersona2 = "Riccardo";

console.log(nomePersona); // Luca
console.log(nomePersona2); // Riccardo


// referenza - la varibile non contiene realmente il valore ma solo il rifermento al valore stesso, e quando invocata ritorna quel riferimento
let persona2 = persona;
persona2.nome = "Orazio";

console.log(persona.nome); // Orazio
console.log(persona2.nome); // Orazio




/**
 * Ciclare sulle proprietà
 */

for (var nomeProprieta in persona) {
  let valoreProprieta = persona[nomeProprieta];

  console.log(`Chiave = ${nomeProprieta}, valore = ${valoreProprieta}`);
}







