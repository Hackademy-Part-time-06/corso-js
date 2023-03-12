"use strict"

/**
 * Esercizio 1


    - Dichiara una variabile chiamata movieTitle e valorizzala (es: ‘Pulp fiction’). 
    - Dichiara una variabile chiamata movieYear e valorizzala (es: 1994). 
    - Dichiara una variabile chiamata movieDirector e valorizzala (es: ‘Quentin Tarantino’).  
    - Stampa nella console il valore di ognuna di queste in 3 righe differenti. L’output dovrà essere come questo:
            - movie: Pulp Fiction
            - year: 1994
            - director: Quentin Tarantino
    - Stampa nella console il valore di ognuna in un’unica riga usando questo formato: 
            “Pulp fiction (1994 - Quentin Tarantino)”
            
 */


let movieTitle = "Pulp Fiction";
let movieYear = "1994";
let movieDirector = "Quentin Tarantino";

console.log(movieTitle);
console.log(movieYear);
console.log(movieDirector);

console.log(movieTitle + " (" + movieYear + " - " + movieDirector + ")");



/**
 * Esercizio 2


    - Dichiara una variabile chiamata bookTitle. 
    - Valorizzala in una nuova riga. 
    - Dichiara un'altra variabile chiamata bookDescription ed inizializzala nel momento stesso in cui la dichiari.
    - logga il valore delle variabili in console

 */

let bookTitle;
bookTitle = "Dune";
let bookDescription = "Lorem ipsum ecc..";

console.log(bookTitle);
console.log(bookDescription);



/**
 * Esercizio 3


    - Dichiara due variabili: admin e name.
    - Assegna il valore "Gino" a name.
    - Copia il valore da name ad admin.
    - Mostra il valore di admin tramite un alert 

 */

let admin;
let name;

name = "Gino";
admin = name;
alert(admin);




/**
 * Simula una login: 

    - dichiara 2 variabili chiamate username e password e falle valorizzare dall'utente tramite il comando prompt. 
    - Dopo aver ricevuto i valori mostra con un alert un messaggio con scritto:
            
            Benvenuto "valore-username" nell'area personale.
 */

let username = prompt("Username");
let password = prompt("Password");

alert("Benvenuto " + username + " nell'area personale");
