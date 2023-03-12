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
