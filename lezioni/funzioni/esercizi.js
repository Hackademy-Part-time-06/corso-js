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