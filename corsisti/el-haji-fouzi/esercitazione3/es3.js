// CONDIZIONI E CICLI ESERCIZI
/* programma che controlla se il numero pari o dispari  numero 23*/
 let number ;
number= prompt("enter a number :");
if (number % 2 == 0) {
    console.log(number + "pari");

}else {
    console.log(number + "dispari");
}



// ESERCIZIO NUMERO 24


/*programma per sugerire al uttente un film secondo la sua scelta di categoria */

var categoriaFilm; // dichiarzione dell variabile 
var categoriaFilm = prompt("inserisci la categoria prefferita");// richiesa input dal uttente 
     switch (categoriaFilm) { // il contenitore della categoria di film
        case "Action":
            console.log("romeo deve morire");
            break;
        case "Comedy":
            console.log("natale a maiami");
            break;
        case "Drama":
            console.log("titanic");
            break;
        case "Horror":
             console.log("jack lo squartatore");
            break;
        
     
          default : ("categoria non trovata"); // scelta non trovata 
           
           
       
     }
// Esercizio 17

console.group("VOTO");
let votoParlante = "";
let voto = prompt("Che voto hai preso da 0 a 30?");
voto =+ voto;

if (voto < 18) {
    votoParlante = "insufficente";
} else if (voto >= 18 && voto < 21) {
    votoParlante = "Sufficente";
} else if (voto >= 21 && voto < 24) {
    votoParlante = "Buono";
} else if (voto >= 24 && voto < 27) {
    votoParlante = "Distinto";
} else if (voto >= 27 && voto <= 29) {
    votoParlante = "Ottimo";
} else if (voto === 30){
    votoParlante = "Eccellente";
} else {
    votoParlante = "Voto fuori scala";
}

console.log(`Il voto corrispondente a: ${voto} e' uguale a ${votoParlante.toUpperCase}`);
console.groupEnd();

// Esercizio 18
let numeroTab = prompt("Inserisci un numero da 0 a 10");
numeroTab =+ numeroTab;

for (let i = 0; i <= 10; i++) {
    console.log(`${numeroTab} * ${i} = `, (numeroTab * i));
}

// Eercizio 19
let pass = prompt("Inserisci una password contenente simboli e numeri: ");
simbol = /[! , _ -]/;
number = /[0 1 2 3 4 5 6 7 8 9]/;

if (pass.length >= 6 && pass.length <= 20 || simbol.test(pass) === false || number.test(pass) === false) {
 console.log("OK");
} else {
    console.log("Reinserisci la password");
}

// Eercizio 20 
console.group("NUMERO DI TELEFONO");
let phone;

// variabile che mi serve come condizione per il while!
// parto dal presupposto che l'utente inserisca un numero sbagliato
let phoneValido = true;

// inizializzo una strinaga con i vari carateri ammessi
let caratteriConsentiti = "0123456789 +";

// se il numero e' sbagliato lo chiedo all'utente - uso la negazione per avere un true (false + false = true)
while (phoneValido) {
    
    // chiedo il numero di telefono 
    phone = prompt("Numero di telefono");
    // variabile di supporto per fare il check se son presenti o meno dei caratteri NON PRESENTI
    let caratteriNonConsentitiPresenti = false;
    // ciclo for su tutti i caratteri del numero di telefono
    for (let i = 0; i < phone.length; i++) {
        // prendo il singolo carattere
        let carattereSingolo = phone.charAt(i);

        // se il carattere non e' tra i consentiti vuol dire che e' un carattere proibito - negazione
        if (!caratteriConsentiti.includes(carattereSingolo)) {
            // e' vero che ci sono dei caratteri proibiti
            caratteriNonConsentitiPresenti = true;

            alert("Telefono erato - questo carattere non e consentito: " + carattereSingolon);
        }
    }
    // se son presenti dei caratteri proibiti -> true
    if (caratteriNonConsentitiPresenti) {

        // il numero di telefono non e' valido
        phoneValido = false;
        // comunico all'utente
        alert("Hai inserito dei caratteri non validi! Riprova");
    } else {
        //caso in cui NON ci sono caratteri proibito -> quindi la stringa  e' valida?
        // interrompo il while visto che "numeroDiTelefonoValido" e' la variabile usata per 
        // la condizione del while
        phoneValido = true;
    }

 //   if (!caratteriNonConsentitiPresenti) {
 //       phoneValido = true;
 //  }
}

console.log("numero di telefono valido: ", !caratteriNonConsentitiPresenti);

let totaleNumeriDaCensurare = phone.length - 3;
let ultimiTreNumeri = phone.slice(-3);
let censura = "";

for (let i = 0; i < totaleNumeriDaCensurare; i++ ) {
    let carattereSingolo = phone.charAt(i);

    if (carattereSingolo === " ") {
        censura += " "; 
    } else {
        censura += "*" 
    }
}

alert(`Il mio numero di telefono e' ${censura}${ultimiTreNumeri}`);

console.groupEnd();
*/

// Esercizio 21

let numeroLanci = 5;
let totale = 0;

for (let i = 0; i < numeroLanci; i++) {
    let valoreDado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let valoreDado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    console.log("Dado Lanciato!!!");
    console.log("Dado 1:", valoreDado1);
    console.log("Dado 2:", valoreDado2);

    totalePunteggioGiocatore1 = totalePunteggioGiocatore1 + valoreDado1;
    totalePunteggioGiocatore2 = totalePunteggioGiocatore2 + valoreDado2;
}
console.log("Totale punteggi!");
console.log("Totale giocatore 1", totalePunteggioGiocatore1);
console.log("Totale giocatore 2", totalePunteggioGiocatore2);

if (totalePunteggioGiocatore1 === totalePunteggioGiocatore2) {
    alert("Patta!");
} else if (totalePunteggioGiocatore1 > totalePunteggioGiocatore2) {
    alert("Giocatore 1 vince!"); 
} else {
    alert("Giocatore 2 vince!");
}