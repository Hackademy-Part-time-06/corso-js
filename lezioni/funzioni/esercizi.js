"use strict"

/**
 *
 *  -   Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti
 *      sono IDENTICI, FALSE altrimenti.
 *
 *      Esempi:
 *        Input: n = 2, m = 3
 *        Output: FALSE
 *        Input: n = 2, m = '2'
 *        Output: FALSE
 *        Input: n = 2, m = 2
 *        Output: TRUE
 *
 */
function controllaUguaglianza(x, y) {
    return x === y;
}
controllaUguaglianza(2, 3); // false
controllaUguaglianza(2, "2"); // false
controllaUguaglianza(2, 2); // true





/**
 *
 *  -     Scrivi una funzione che prenda in input una stringa e la restituisca capovolta
 *
 */

function capovolgiStringa(stringa) {
  let risultato = "";
  for (let i = 0; i < stringa.length; i++) {
    risultato += stringa.charAt(stringa.length - i - 1);
  }
  return risultato;
}

capovolgiStringa("supercazzola");





/**
 * 
 *        Scrivi una funzione che si occupi di generare un numero randomico da 1 a N e lo restituisca
 * 
 * 
 */

function generaNumeroRandomico(max, min=1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



/**
 *
          Simula una partita a dadi:
          Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) 
          un numero di volte che verrà definito tramite parametro passato in input.
          Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto).
 *
 */


function lanciaDadi(numeroLanci) {
  let risultato = 0;

  for (let i = 0; i < numeroLanci; i++) {
    risultato += generaNumeroRandomico(6);
  }

  return risultato;
}

function controllaIlVincitore(g1, g2) {
  let risultato = "";

  if (g1 > g2) {
    risultato = `Vince il giocatore 1 per ${g1} a ${g2}`;
  }
  else if (g1 === g2) {
    risultato = `Risultato pari a ${g1}`;
  }
  else {
    risultato = `Vince il giocatore 2 per ${g2} a ${g1}`;
  }
  return risultato;
}

let totalePunteggioGiocatore1 = lanciaDadi(10);
let totalePunteggioGiocatore2 = lanciaDadi(10);
console.log(controllaIlVincitore(totalePunteggioGiocatore1, totalePunteggioGiocatore2));





/**
 *
 *  -     Calcola il voto del giocatore a fantacalcio: scrivi una funzione che prende in input i seguenti parametri numerici:
 *
 *            - baseVoto
 *            - golFatti
 *            - assistEffettuati
 *            - autogol
 *            - ammonizione
 *            - espulsione
 *
 *        calcola il voto finale del giocatore tenendo conto delle seguenti regole:
 *
 *            - per ogni gol fatto si aggiungono 3 punti
 *            - per ogni assist effettuati si aggiunge 1 punto
 *            - per ogni autogol fatto si tolgono 2 punti
 *            - per ogni ammonizione si toglie 1 punto
 *            - per ogni espulsione si tolgono 2 punti
 *
 *        esempio:
 *        Gino Van Der Gini: 
 *          - baseVoto: 8
 *          - golFatti: 2
 *          - assistEffettuati: 1
 *          - autogol: 0
 *          - ammonizione: 1
 *          - espulsione: 0
 *
 *          - Risultato: 14
 *
 */

function calcolaVotoFantacalcio(baseVoto, golFatti=0, assistEffettuati=0, autogol=0, ammonizioni=0, espulsione=0) {
    return baseVoto + (golFatti * 3) + assistEffettuati + (autogol * -2) + (ammonizioni * -1) + (espulsione * -2);
}
calcolaVotoFantacalcio(8, 2, 1, 0, 1, 0);




/**
 * 
 * 

            Creiamo la nostra console stilosa!!! 
            (hint: https://www.codingem.com/javascript-console-colors/)

            Scrivi un programma chiamato “myLog” che ci permetta di loggare dei messaggi di testo con uno stile dinamico in base alla categoria specificata.
            Le categorie disponibili dovranno essere le seguenti con le relative caratteristiche:


            - titolo: 

                    background-color: blue; 
                    font-size: 30px; 
                    color: white
                    

            - sottotitolo:

                    font-size: 20px;
                    color: blue;
                    

            - highlight:

                    background-color: orange;
                    

            -  disastro:

                    background-color: red; 
                    font-size: 50px; 
                    color: white

 * 
 */

function myLog(message="", type="") {

    switch (type) {
      case "titolo":
        console.log('%c' + message, 'background-color: blue;  font-size: 30px; color: white;');
        break;
      case "sottotitolo":
        console.log('%c' + message, 'font-size: 20px; color: blue;');
        break;
      case "highlight":
        console.log('%c' + message, 'background-color: orange;');
        break;
      case "disastro":
        console.log('%c' + message, 'background-color: red;  font-size: 50px; color: white;');
        break;
    }
}


myLog("Questo è un TITOLO", "titolo");
myLog("Questo è un SOTTOTITOLO", "sottotitolo");
myLog("Questo è un test evidenziato", "highlight");
myLog("Questo è un DISTASTROOOOOOOOOOOO", "disastro");





/**
 
Scrivi un programma (funzione) che calcoli l’importo da pagare per i biglietti del cinema. 
Il programma dovrà prendere in input i seguenti dati:


- numero dei biglietti
- costo del singolo biglietto

Una volta avuti i dati bisognerà calcolare il totale e restituirlo

*/
console.group("CINEMA")

function calcoloPercentuale(numero, percentuale) {
  let risultato = (numero/100) * percentuale;
  risultato = +(risultato.toFixed(2)) 
  return risultato; 
}

/*
function cinema(numeroBiglietti, costoSingoloBiglietto) {
  console.log("Numero Biglietti:", numeroBiglietti);
  console.log("Costo singolo biglietto: " + costoSingoloBiglietto + "€");

  let totale = numeroBiglietti * costoSingoloBiglietto;
  
  console.log("Totale cinema: " + totale + "€")
}

cinema(2, 9)
*/



/**

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) uno sconto espresso come numero. 
Questa sarà la percentuale di sconto da applicare al totale.

Esempio: 

- 2 biglietti
- 10 euro a biglietto
- 10 % sconto

risultato 18€

*/

/*
function cinema(numeroBiglietti, costoSingoloBiglietto, scontoInPercentuale) {
  console.log("Numero Biglietti:", numeroBiglietti);
  console.log("Costo singolo biglietto: " + costoSingoloBiglietto + "€");

  let totale = numeroBiglietti * costoSingoloBiglietto;

  if (scontoInPercentuale) {
    totale = totale - calcoloPercentuale(totale, scontoInPercentuale)
  }
  
  console.log("Totale cinema: " + totale + "€")
}

cinema(2, 10, 10)

*/








/**

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) il giorno della settimana. 
In base al giorno applica le seguenti scontistiche:

- lunedi e martedi: - 10 % sul totale
- mercoledi: - 20%

*/


/*
function cinema(numeroBiglietti, costoSingoloBiglietto, scontoInPercentuale, giornoSettimana) {
  console.log("Numero Biglietti:", numeroBiglietti);
  console.log("Costo singolo biglietto: " + costoSingoloBiglietto + "€");

  let totale = numeroBiglietti * costoSingoloBiglietto;

  if (scontoInPercentuale) {
    totale = totale - calcoloPercentuale(totale, scontoInPercentuale)
  }

  if (giornoSettimana) {
    switch (giornoSettimana) {
      case "lunedi":
      case "martedi":
        totale = totale - calcoloPercentuale(totale, 10)
        break;
      case "mercoledi":
        totale = totale - calcoloPercentuale(totale, 20)
        break;
    }
  }
  
  console.log("Totale cinema: " + totale + "€")
}

cinema(2, 10, 10, "mercoledi")

*/






/*

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) una logica ad hoc per un altro sconto (callback).
A questa callback dovrai passare in input tutti i parametri che ti vengono passati nella funzione principale.
Crea tu una nuova logica di sconto ed applicalo al totale, dopo averlo calcolato seguendo le logiche usate fino ad ora. 
Hai la massima libertà riguardo a che tipologia di sconto applicare.

Esempio:
posso creare uno sconto in base al numero dei biglietti comprato: se compri 3 biglietti hai un ulteriore 5% di sconto, se ne prendi 5 invece sale al 10%.

*/


function scontoDel50(totale) {
  return totale / 2;
}

function scontoInBaseAlNumeroDeiBiglietti(totale, nBiglietti) {
  if (nBiglietti >= 5) {
    totale = totale - calcoloPercentuale(totale, 10)
  }
  else if (nBiglietti >= 3) {
    totale = totale - calcoloPercentuale(totale, 5)
  }

  return totale
}


function cinema(numeroBiglietti, costoSingoloBiglietto, scontoInPercentuale, giornoSettimana, callbackScontoCustom) {
  console.log("Numero Biglietti:", numeroBiglietti);
  console.log("Costo singolo biglietto: " + costoSingoloBiglietto + "€");

  let totale = numeroBiglietti * costoSingoloBiglietto;

  if (scontoInPercentuale) {
    totale = totale - calcoloPercentuale(totale, scontoInPercentuale)
  }

  if (giornoSettimana) {
    switch (giornoSettimana) {
      case "lunedi":
      case "martedi":
        totale = totale - calcoloPercentuale(totale, 10)
        break;
      case "mercoledi":
        totale = totale - calcoloPercentuale(totale, 20)
        break;
    }
  }

  if (typeof callbackScontoCustom === "function") {
      totale = callbackScontoCustom(totale, numeroBiglietti)
  }

  totale = +(totale.toFixed(2))
  console.log(totale)

  return totale
}






/**

Crea un programma che stampi lo scontrino del cinema!
Questo programma dovrà mostrare il totale dei biglietti calcolato negli esercizi precedenti e qualsiasi altra informazione tu voglia mostrare.

*/


function stampaScontrino(totale) {
  console.log("Il totale da pagare è: " + totale + "€");
}

let testCinema1 = cinema(5, 10, 0, "", scontoInBaseAlNumeroDeiBiglietti)

let testCinema2 = cinema(2, 10, 10, "martedi", scontoDel50)

let testCinema3 = cinema(3, 10, 10, "mercoledi", scontoInBaseAlNumeroDeiBiglietti)

stampaScontrino(testCinema1);
stampaScontrino(testCinema2);
stampaScontrino(testCinema3);


console.groupEnd()



/**


Scrivi un programma che preveda il passaggio in input dei seguenti parametri relativi ad un singolo libro:


- titolo
- autore
    

esempio 

- titolo ->           "Il Signore degli Anelli"
- autore ->           "Tolkien"
    

Dati questi valori genera una stringa che conterrà un tag anchor (non dovrà funzionare - 
sarà una sola e semplice stringa dentro una variabile) con un ipotetico link per una libreria. 
Le regole per la creazione della url sono le seguenti:

- la base della url dovrà essere:  www.lamiasuperlibreria.aulab/
- il nome dell’autore dovrà essere un nodo della url: quindi nomeautore/
- il titolo del libro sarà la parte finale
- tutte le lettere devono essere minuscole
- gli spazi devono essere sostituiti con il simbolo “-”
- la prima parte della url sarà il nome dell’autore e l’ultima il nome del libro unito a “.html”

esempio url: 

-  www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html

        
Una volta creata la url questa dovrà essere passata all’attributo href del tag anchor mentre il titolo 
del libro sarà il contenuto del tag stesso.
esempio tag anchor: 
        

- <a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>


NB: non dovete creare un vero e proprio tag da appende nel DOM, ma solo una stringa formattata come se fosse una url

*/


console.group("LINK LIBRO")

function generaLinkPerLibro(titolo, autore) {
  let baseUrl = "www.lamiasuperlibreria.aulab/";
  let autorePerUrl = autore.toLowerCase() + "/";
  let titoloPerUrl = titolo.replaceAll(" ", "-").toLowerCase();

  let anchor = `<a href="${baseUrl}${autorePerUrl}${titoloPerUrl}.html" target="_blank">${titolo}</a>`
  return anchor;
}

let linkLibro = generaLinkPerLibro("Il Signore degli Anelli", "Tolkien");

console.log(linkLibro)

console.groupEnd()





/**

Crea un programma che simuli una partita a carta forbici e sasso!
Lo scopo è sconfiggere l'avversario scegliendo un segno in grado di battere quello dell'altro, 
secondo le seguenti regole:

1. Il sasso spezza le forbici (vince il sasso)
2. Le forbici tagliano la carta (vincono le forbici)
3. La carta avvolge il sasso (vince la carta)

Il programma dovrà essere una funzione che si occupi generare casualmente un segno per 2 giocatori.
Una volta generati i segni per ogni giocatore bisognerà valutare il risultato seguendo la logica come sopra.
E’ ammesso il pareggio!
Un volta calcolato il risultato mostrarlo in console o tramite un alert.

*/

console.group("MORRA CINESE")
/*
function generaValoreMorraCinese() {
  let valoreCasuale = generaNumeroRandomico(3, 1);
  let risultato = "";

  switch (valoreCasuale) {
    case 1:
      risultato = "forbici";
      break;
    case 2:
      risultato = "carta";
      break;
    case 3:
      risultato = "sasso";
      break;
  }

  return risultato
}

function calcolaPunteggioMorraCinese(manoGiocatore1, manoGiocatore2) {
  let vincitore;

  switch (manoGiocatore1) {
    case "forbici":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "giocatore 1";
          break;
        case "sasso":
          vincitore = "giocatore 2";
          break;
        case "forbici":
          vincitore = "pareggio";
          break;
      }
      break;
    case "sasso":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "giocatore 2";
          break;
        case "sasso":
          vincitore = "pareggio";
          break;
        case "forbici":
          vincitore = "giocatore 1";
          break;
      }
      break;
    case "carta":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "pareggio";
          break;
        case "sasso":
          vincitore = "giocatore 1";
          break;
        case "forbici":
          vincitore = "giocatore 2";
          break;
      }
      break;
  }
  
  return vincitore
}

function morraCinese() {
  let manoGiocatore1 = generaValoreMorraCinese();
  let manoGiocatore2 = generaValoreMorraCinese();
  console.log("mano giocatore 1:", manoGiocatore1)
  console.log("mano giocatore 2:", manoGiocatore2)

  let vincitore = calcolaPunteggioMorraCinese(manoGiocatore1, manoGiocatore2);

  console.log("Vincitore: ", vincitore)
}

morraCinese()
*/







/**


Amplia il programma scritto nell’esercizio precedente.
Il pareggio non è più ammesso per i nostri giocatori!!!!!
In caso di pareggio continua a farli giocare finchè uno dei 2 non verrà sconfitto!

NB: serve il while!!!!!!


*/


/*

function generaValoreMorraCinese() {
  let valoreCasuale = generaNumeroRandomico(3, 1);
  let risultato = "";

  switch (valoreCasuale) {
    case 1:
      risultato = "forbici";
      break;
    case 2:
      risultato = "carta";
      break;
    case 3:
      risultato = "sasso";
      break;
  }

  return risultato
}

function calcolaPunteggioMorraCinese(manoGiocatore1, manoGiocatore2) {
  let vincitore;

  switch (manoGiocatore1) {
    case "forbici":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "giocatore 1";
          break;
        case "sasso":
          vincitore = "giocatore 2";
          break;
        case "forbici":
          vincitore = "pareggio";
          break;
      }
      break;
    case "sasso":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "giocatore 2";
          break;
        case "sasso":
          vincitore = "pareggio";
          break;
        case "forbici":
          vincitore = "giocatore 1";
          break;
      }
      break;
    case "carta":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "pareggio";
          break;
        case "sasso":
          vincitore = "giocatore 1";
          break;
        case "forbici":
          vincitore = "giocatore 2";
          break;
      }
      break;
  }
  
  return vincitore
}

function morraCinese() {

  let pareggio = true;

  do {
    let manoGiocatore1 = generaValoreMorraCinese();
    let manoGiocatore2 = generaValoreMorraCinese();
    console.log("mano giocatore 1:", manoGiocatore1)
    console.log("mano giocatore 2:", manoGiocatore2)
  
    let vincitore = calcolaPunteggioMorraCinese(manoGiocatore1, manoGiocatore2);
  
    if (vincitore !== "pareggio") {
      pareggio = false;
    }

    console.log("Vincitore: ", vincitore)
  }
  while (pareggio);
}

morraCinese()
*/











/**


Amplia il programma scritto nell’esercizio precedente.
La partita secca genera troppo astio!
Si è deciso per giocare al meglio delle 3 vittorie!

Quindi il primo che raggiunge le 3 vittore può considerarsi il reale vincitore della partita!!


*/




function generaValoreMorraCinese() {
  let valoreCasuale = generaNumeroRandomico(3, 1);
  let risultato = "";

  switch (valoreCasuale) {
    case 1:
      risultato = "forbici";
      break;
    case 2:
      risultato = "carta";
      break;
    case 3:
      risultato = "sasso";
      break;
  }

  return risultato
}

function calcolaPunteggioMorraCinese(manoGiocatore1, manoGiocatore2) {
  let vincitore;

  switch (manoGiocatore1) {
    case "forbici":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "giocatore 1";
          break;
        case "sasso":
          vincitore = "giocatore 2";
          break;
        case "forbici":
          vincitore = "pareggio";
          break;
      }
      break;
    case "sasso":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "giocatore 2";
          break;
        case "sasso":
          vincitore = "pareggio";
          break;
        case "forbici":
          vincitore = "giocatore 1";
          break;
      }
      break;
    case "carta":
      switch (manoGiocatore2) {
        case "carta":
          vincitore = "pareggio";
          break;
        case "sasso":
          vincitore = "giocatore 1";
          break;
        case "forbici":
          vincitore = "giocatore 2";
          break;
      }
      break;
  }
  
  return vincitore
}

function morraCinese() {

  let vincitore;
  let pareggio = true;

  do {
    let manoGiocatore1 = generaValoreMorraCinese();
    let manoGiocatore2 = generaValoreMorraCinese();
    console.log("mano giocatore 1:", manoGiocatore1)
    console.log("mano giocatore 2:", manoGiocatore2)
  
    vincitore = calcolaPunteggioMorraCinese(manoGiocatore1, manoGiocatore2);
  
    if (vincitore !== "pareggio") {
      pareggio = false;
    }

    console.log("Vincitore: ", vincitore)
  }
  while (pareggio);

  return vincitore
}


function alMeglioDelle3Vittorie() {
  let vittorieVincitore1 = 0;
  let vittorieVincitore2 = 0;
  let continuaAGiocare = true;

  while (continuaAGiocare) {
    let vincitore = morraCinese();
    if (vincitore === "giocatore 1") {
      vittorieVincitore1++;
    }
    else {
      vittorieVincitore2++;
    }

    if (vittorieVincitore1 === 3 || vittorieVincitore2 === 3) {
      continuaAGiocare = false;
    }
  }

  console.log("--------------");
  console.log("--------------");
  console.log("--------------");

  console.log("Vittore giocatore 1:", vittorieVincitore1);
  console.log("Vittore giocatore 2:", vittorieVincitore2);
}




alMeglioDelle3Vittorie()



console.groupEnd()