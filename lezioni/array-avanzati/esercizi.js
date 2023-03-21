"use strict"

/**
 * 

    Scrivi un programma che dati:

    - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
    - il tipo di operazione aritmetica da effettuar tra una delle seguenti:
    - addizione
    - sottrazione
    - moltiplicazione
    - divisione

    Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

        Esempio:
        Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7], operazione = "addizione"
        Output: c = [12, 10, 3, 9, 15]


 * 
 */


console.group("ES - operazioni fra array")    

function generaArrayNumericoCasuale(numeroElementi) {
  let risultato = [];
  for (let i = 0; i < numeroElementi; i++) {
    risultato.push(generaNumeroRandomico(100));
  }
  return risultato;
}

function calcoloFraArray(lista1, lista2, operazione) {
  if (operazione) {
    let risultato = [];

    if (!lista1) {
      lista1 = generaArrayNumericoCasuale(10);
    }
    if (!lista2) {
      lista2 = generaArrayNumericoCasuale(lista1.length);
    }


    console.log("Array 1", lista1);
    console.log("Array 2", lista2);
    console.log("Array operazione", operazione);

    risultato = lista1.map(function(elemento, index) {
        let risultatoOperazione;
        switch (operazione) {
            case "addizione":
                risultatoOperazione = elemento + lista2[index]; 
              break;
            case "sottrazione":
                risultatoOperazione = elemento - lista2[index]; 
                break;
            case "moltiplicazione":
                risultatoOperazione = elemento * lista2[index]; 
                break;
            case "divisione":
                risultatoOperazione = elemento / lista2[index]; 
                break;
            default:
              console.log("L'operazione da te richiesta non è consentita")
              break;
          }

        return risultatoOperazione;
    })

    return risultato;
  }
  else {
    console.log("Devi specificare un'operazione")
  }
}

console.log(calcoloFraArray(null, null, "addizione"));

console.groupEnd()















/**
 * 

    Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

    Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

 * 
 */


console.group("ES - media numeri")    


function calcolaMedia(listaNumeri) {
  let media = listaNumeri.reduce((totale, elemento) => {
    totale = totale + elemento;
    return totale
  })
  

  media = media / listaNumeri.length;
  return media;
}

function calcolaNumeriAlDiSottoDi(listaNumeri, discrimante=0) {
  let lista = listaNumeri.filter((elemento) => {
    return elemento < discrimante;
  })
  return lista;
}

function esercizioMedia(listaNumeri) {
  let media = calcolaMedia(listaNumeri);
  console.log("Media:", media);

  let numeriAlDiSotto = calcolaNumeriAlDiSottoDi(listaNumeri, media);
  console.log(`Numeri al di sotto di ${media}:`, numeriAlDiSotto);
}

esercizioMedia([3, 5, 10, 2, 8]);



console.groupEnd()














/**
 * 

      Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. 
      Il primo argomento è una array e il secondo è il divisore.-
      ([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]


 * 
 */


console.group("ES - Numeri divisibili per divisore")    

function trovaNumeriDivisibili(listaNumeri, divisore) {
  console.log("Lista numeri", listaNumeri);
  console.log("Divisore", divisore);

  let risultato = listaNumeri.filter((elemento) => {
    return elemento % divisore === 0
  })

  return risultato;
}

console.log(trovaNumeriDivisibili([1, 2, 3, 4, 5, 6], 2))


console.groupEnd()















/**
 * 

    Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi.
    Nota: se non c'è nulla da sommare, la somma è predefinita a 0.
    sumPositives([1,-4,7,12]) ---> 1 + 7 + 12 = 20
    sumPositives([-1,-4,-7,-12]) ---> = 0


 * 
 */


console.group("ES - Somma numeri positivi")    


function sommaPositivi(listaElementi) {
  console.log("Lista", listaElementi)
  let risultato = listaElementi.reduce((totale, elemento) => {
    if (elemento > 0) {
      totale += elemento
    }
    return totale
  }, 0)

  return risultato;
}

console.log(sommaPositivi([1,-4,7,12]))
console.log(sommaPositivi([-1,-4,-7,-12]))

console.groupEnd()















/**
 * 

    Dato un array di numeri interi, creare una funzione che restituisca un nuovo array con ogni valore raddoppiato.
    double([1, 2, 3]) --> [2, 4, 6]



 * 
 */


console.group("ES - Raddoppio")    


function raddoppia(listaElementi) {
  console.log("Lista", listaElementi)

  let risultato = listaElementi.map((elemento) => {
    return elemento * 2;
  })

  return risultato;
}


console.log(raddoppia([1,-4,7,12]))

console.groupEnd()
    














/**
 *
 *  -   La nostra squadra di calcio ha concluso il campionato. Il risultato di ogni partita ha l'aspetto di "x:y".
 *      I risultati di tutte le partite sono registrati nell’array.
 *
 *      Esempio :
 *      ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']
 *
 *      Scrivere una funzione che prenda quest’array e conti i punti della nostra squadra nel campionato.
 *      Regole per il conteggio dei punti per ogni partita:
 *          - se x > y: 3 punti
 *          - se x < y: 0 punti
 *          - se x = y: 1 punto
 *
 *      es:
 *        calcolaPunteggioCalcio(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ---> 30
 *        calcolaPunteggioCalcio(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) ---> 10
 *        calcolaPunteggioCalcio(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) ---> 0
 *        calcolaPunteggioCalcio(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) ---> 15
 */


console.group("ES - Calcolo punteggio squadra calcio")    

function calcolaPunteggioCalcio(listaElementi) {
  console.log("Lista", listaElementi)

  let risultato = listaElementi.reduce((totale, elemento) => {
    let risultatoPartita = elemento.split(":");
    if (risultatoPartita[0] > risultatoPartita[1]) {
        totale += 3;
    }
    else if (risultatoPartita[0] === risultatoPartita[1]) {
        totale += 1;
    }
    else {
        totale += 0;
    }
    return totale
  }, 0)
  return risultato;
}

console.log(calcolaPunteggioCalcio(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(calcolaPunteggioCalcio(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
console.log(calcolaPunteggioCalcio(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
console.log(calcolaPunteggioCalcio(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))

console.groupEnd()











/**
 *
 *    - Scrivi una funzione che data una frase ritorni la prima lettera di ogni parola presente nella frase
 *
 *    es:
 *      input: "Ciao sono un esercizio sui metodi avanzati degli array"
 *      output: Csuesmada
 *
 */

console.group("ES - solo prime lettere di ogni parola")    

let fraseEsempio = "Ciao sono un esercizio sui metodi avanzati degli array";
function soloPrimeLettere(frase) {
  return frase.split(" ").reduce(function(str, elementoArray) {
    return str += elementoArray.charAt(0);
  }, "");
}


console.log("Risultato esercizio", soloPrimeLettere(fraseEsempio));

console.groupEnd();














/**
 *
   - Scrivi una funzione che conti le occorrenze dei singoli elementi presenti in array annidati

   es:
     input:
     [
     ["abc", "gino", "aaa"],
     ["abc", "dino", 123],
     ["aaa", "gino", 321],
     ["xyz", "klm", "aaa"],
     ]
   output:
     123: 1
     321: 1
     aaa: 3
     abc: 2
     dino: 1
     gino: 2
     klm: 1

 *
 */


console.group("ES - Cerca occorrenze")    


let listeAnnidateDiEsempio = [
["abc", "gino", "aaa"],
["abc", "dino", 123],
["aaa", "gino", 321],
["xyz", "klm", "aaa"],
];

function cercaOccorrenze(lista) {
    let listaUnica = lista.reduce(function(totale, listaInterna) {
        totale = totale.concat(listaInterna);

        return totale
    }, [])

    return listaUnica.reduce(function(obj, elementoArray) {
        if (!obj.hasOwnProperty(elementoArray)) {
        obj[elementoArray] = 1;
        }
        else {
        obj[elementoArray]++;
        }

        return obj;
    }, {});
}


console.dir(cercaOccorrenze(listeAnnidateDiEsempio))


console.groupEnd()    











/**
 * 

        Scrivi una funzione che, dato un array di numeri, ritorni la somma dei numeri divisibili per 2:
        es: 
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        output: 2 + 4 + 6 + 8 = 20

 * 
 */


console.group("ES - Somma divisibili")    


function sommaNumeriDivisibili(listaNumeri, divisore) {
    console.log("Lista numeri", listaNumeri);
    console.log("Divisore", divisore);

    let risultato = listaNumeri.reduce((totale, elemento) => {
        if (elemento % divisore === 0 ) {
            totale += elemento;
        }

        return totale
    }, 0)

    return risultato;
}

console.log(sommaNumeriDivisibili([1, 2, 3, 4, 5, 6], 2))


console.groupEnd()
    
    
        