"use strict"


/**

    Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo queste regole:

    - v < 18: insufficiente
    - 18 <= v < 21: sufficiente
    - 21 <= v < 24: buono
    - 24 <= v < 27: distinto
    - 27 <= v <= 29: ottimo
    - v = 30: eccellente

    Esempio:
    
    Input: v = 29
    Output: Ottimo
 */
let voto = 26;

if (voto < 18) {
  console.log("insufficiente");
}
else if(voto >= 18 && voto < 21) {
  console.log("sufficiente");
}
else if(voto >= 21 && voto < 24) {
  console.log("buono");
}
else if(voto >= 24 && voto < 27) {
  console.log("distinto");
}
else if(voto >= 27 && voto <= 29) {
  console.log("ottimo");
}
else {
  console.log("eccellente");
}




/**
 
  Scrivi un programma che passato un numero in input controlli che sia pari o dispari

*/

//let numero = prompt("Inserisci un numero");
let numero = "5";

if (+numero % 2) {
  console.log(`${numero} è un numero dispari`);
}
else {
  console.log(`${numero} è un numero pari`);
}





/**

  Scrivi un programma che passato un mese ritorno i giorni presenti in quel mese

*/

//let mese = prompt("Inserisci un mese");
let mese = "luglio";

switch (mese.toLowerCase()) {
  case "febbraio":
    console.log(`${mese} ha 28 giorni`);
    break;
  case "gennaio":
  case "marzo":
  case "maggio":
  case "luglio":
  case "agosto":
  case "ottobre":
  case "dicembre":
    console.log(`${mese} ha 31 giorni`);
    break;
  case "aprile":
  case "giugno":
  case "settembre":
  case "novembre":
    console.log(`${mese} ha 30 giorni`);
    break;
  default:
    console.log("Hai inserito un mese errato")
}






/**
  Scrivi un programma che passata una categoria in input (fantasy, fantascienza, animazione, ecc…)
  ti suggerisca il titolo di un film:

  es: categoria: “fantasy” -> film suggerito: “il signore degli anelli”

 */

  //let categoriaFilm = prompt("Inserisci un mese");
let categoriaFilm = "fantasy";

switch (mese.toLowerCase()) {
  case "fantasy":
    console.log("Il Signore degli Anelli");
    break;
  case "fantascienza":
    console.log("Blade Runner");
    break;
  case "azione":
    console.log("Arma letale");
    break;
  // ecc ....
}





/**

  Il posto di blocco!
  Scrivi un programma che simuli un posto di blocco

  Chiedi al conducente età, patente ed assicurazione. 
  Controlla anche quanti punti ha (fai generare un numero randomico da 0 a 20). 
  Se tutti i controlli son rispettati lascialo andare, altrimenti ti tocca fargli la multa (o chiudi un occhio!).
  Gestisci più casistiche possibili!

*/

//let anni = prompt("Anni");
let anni = "20";






if (+anni >= 18) {
  //let patente = prompt("Patente");
  let patente = "YEs";
  patente = patente.toLowerCase();

  if (patente === "si" || patente === "yes" || patente === "eja") {
    
    // let assicurazione = prompt("Assicurazione");
    let assicurazione = "No";
    assicurazione = assicurazione.toLowerCase();

    if (assicurazione === "si" || assicurazione === "yes" || assicurazione === "eja") {

      let puntiPatente = Math.floor(Math.random() * (20 - 0 + 1) + 0);
      if (puntiPatente > 0) {
        console.log("Vada")
      }
      else {
        console.log("Facciamo finta di nulla va")
      }
    }
    else {
      console.log("Ehhh cavoli tuoi!");
    }
  }
  else {
    console.log("Me tocca farti la multa visto che non hai la patente");
  }
}
else {
  console.log("Spero sia una macchina 50 questa!")
}






/**

Calcolatrice!!
Crea un programma che simuli una calcolatrice!!
Chiedi all’utente di inserire 2 numeri ed un simbolo matematico ed esegui l’operazione corrispondente

	es: 
  input1: 10
  input2: 20
  input3: +
	
	  risultato: 10 + 20 = 30

*/


let n1 = prompt("Valore 1");
n1 = +n1;
let n2 = prompt("Valore 2");
n2 = +n2;

let operazioneMath = prompt("Operazione matematica");

switch (operazioneMath) {
  case "+":
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
    break;
  case "-":
    console.log(`${n1} - ${n2} = ${n1 - n2}`);
    break;
  case "*":
    console.log(`${n1} * ${n2} = ${n1 * n2}`);
    break;
  case "/":
    console.log(`${n1} / ${n2} = ${n1 / n2}`);
    break;
}