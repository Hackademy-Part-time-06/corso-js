"use strict"


/**
 * 
    Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

        Esempio:
        Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
        Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

    Variante:
    Dopo averli ordinati in ordine decrescente ordinali in ordine crescente

 * 
 */


console.group("ES - ordina numeri")    

function ordinaNumeri(listaNumeri, descOrder=false) {

  listaNumeri.sort((a, b) => {
    if (descOrder) {
      return b - a;
    }
    return a - b;
  }); 


  return listaNumeri
}

console.log(ordinaNumeri([3, 7, -2, 5, 8, 1, 2, 5, 6, -4]))
console.log(ordinaNumeri([3, 7, -2, 5, 8, 1, 2, 5, 6, -4], true))

console.groupEnd()














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
    
    lista1.forEach((elemento, index) => {
      switch (operazione) {
        case "addizione":
          risultato.push(elemento + lista2[index]);
          break;
        case "sottrazione":
          risultato.push(elemento - lista2[index]);
          break;
        case "moltiplicazione":
          risultato.push(elemento * lista2[index]);
          break;
        case "divisione":
          risultato.push(elemento / lista2[index]);
          break;
        default:
          console.log("L'operazione da te richiesta non è consentita")
          break;
      }
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
  let media = 0;
  listaNumeri.forEach((elemento) => {
    media = media + elemento;
  })

  media = media / listaNumeri.length;
  return media;
}

function calcolaNumeriAlDiSottoDi(listaNumeri, discrimante=0) {
  let lista = [];

  listaNumeri.forEach((elemento) => {
    if (elemento < discrimante) {
      lista.push(elemento)
    }
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

  let risultato = [];
  listaNumeri.forEach((elemento) => {
    if (elemento % divisore === 0) {
      risultato.push(elemento);
    }
  })

  return risultato;
}

console.log(trovaNumeriDivisibili([1, 2, 3, 4, 5, 6], 2))


console.groupEnd()














/**
 * 

    Dato un array x e un valore y. Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.
    L'array può contenere numeri o stringhe. Y può essere uno dei due.
    Restituire true se l'array contiene il valore, false in caso contrario.
    check([66, 101], 66) ---> true
    check(['what', 'a', 'great', 'kata'], 'kat') ---> false

 * 
 */


console.group("ES - Check presenza valori")    


function controllaPresenzaInArray(listaElementi, elementoDaControllare) {
  console.log("Lista", listaElementi);
  console.log("Elemento da trovare", elementoDaControllare)
  return listaElementi.includes(elementoDaControllare);
}

console.log(controllaPresenzaInArray([66, 101], 66))
console.log(controllaPresenzaInArray(['what', 'a', 'great', 'kata'], 'kat'))


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
  let risultato = 0;
  listaElementi.forEach((elemento) => {
    if (elemento > 0) {
      risultato += elemento
    }
  })

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

  let risultato = [];
  listaElementi.forEach((elemento) => {
    risultato.push(elemento * 2);
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

  let punteggi = [];
  let risultato = 0;
  listaElementi.forEach((elemento) => {
    let risultatoPartita = elemento.split(":");
    if (risultatoPartita[0] > risultatoPartita[1]) {
      punteggi.push(3);
    }
    else if (risultatoPartita[0] === risultatoPartita[1]) {
      punteggi.push(1);
    }
    else {
      punteggi.push(0);
    }
  })

  punteggi.forEach((punteggio) => {
      risultato = Number(punteggio) + risultato;
  })

  return risultato;
}

console.log(calcolaPunteggioCalcio(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(calcolaPunteggioCalcio(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
console.log(calcolaPunteggioCalcio(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
console.log(calcolaPunteggioCalcio(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))

console.groupEnd()
