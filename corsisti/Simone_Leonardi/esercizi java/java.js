/*
Esercizio 8

let numero1 = 10;
let numero2 = 20;
let numero3 = 35;
let numero4 = 50;
let numero5 = 70;

let somma = numero1 + numero2 + numero3 + numero4 + numero5;
console.log(somma);

let media = somma / 5; 
console.log(media);

//Esercizio 9

let number = prompt("numero1");
let number2= prompt("numero2");
let number3= prompt("numero3");
let number4= prompt("numero3");
let number5= prompt("numero5");

number  =Number(number);
number2 =Number(number2);
number3 =Number(number3);
number4 =Number(number4);
number5 =Number(number5);

let somma1 = number + number2 + number3 + number4 + number5;
let media1 = somma1 / 5;

console.log(somma1,media1);


//Esercizio 10


let annoCorrente =  prompt("Inserisci anno corrente");
let annoNascita = prompt("Inserisci anno di nascita");
let numeroCento = 100;

annoCorrente =  Number(annoCorrente);
annoDiNascita = Number(annoNascita);

let età = annoCorrente-annoNascita;
let rimanenza= numeroCento - età;

console.log(età);
console.log(rimanenza);
*/

//Scrivi un programma che dato un nome in input, converta solo la prima lettera in maiuscolo  -Esercizio 11

/*
var name = "simone";
const capitalize1 = name => name.charAt(0).toUpperCase() + name.slice(1);
let result = capitalize1(name);
console.log(result);


//Scrivi un programma che dato un numero di telefono (di 10 cifre) in input, offuschi tutte le cifre, sostituendole con l'asterisco (*), e lasci visibili solo le ultime 3. Esercizio 12

let telefono = "1234567890";
let parziale = telefono.slice(0,7);
let oscurato = parziale.replace("1234567","*******") + telefono.slice(7,11);
console.log(oscurato);

//Scrivi un programma che dati 5 numeri restituisca in output il numero minore ed il numero maggiore- Esercizio 13 BONUS


let numero1 = 1;
let numero2 = 2;
let numero3 = 3;
let numero4 = 4;
let numero5 = 5;

let max= Math.max(numero1,numero2,numero3,numero4,numero5);
let min= Math.min(numero1,numero2,numero3,numero4,numero5);

console.log(max,min);


//Esercizio 14 Scrivi un programma che sommati i seguenti 2 numeri: 0.1   0.2 restituisca il risultato corretto, ossia:  0.3

let n1 = 0.1;
let n2 = 0.2;
let somma = n1 + n2;
let right = (n1 + n2).toFixed(1);
console.log(right);

//Esercizio15 Scrivi un programma che generi un numero intero randomico da 1 a 6

let nu = Math.random()*6;
let nu1 = Math.round(n);
console.log(nu1);

* Esercizio 16 - BONUS 
    Scrivi un programma che dato: 
    - Un numero totale di gatti 
    - Il numero dei gatti presenti in ogni fila 
    Restituisca in output: 
    - Il numero di gatti totali
    - il numero di gatti mancanti per completare una nuova fila



    let gattiTot = 44;
    let gattiInFila = 6;
    
    let fileTotali = Math.floor(gattiTot / gattiInFila);
    let gattiSenzaFila = gattiTot % fileTotali;
    
    console.log("Es 16 | file di gatti tot", fileTotali);
    console.log("Es 16 | gatti senza fila", gattiSenzaFila);
   */  

/*Esercizio 23
Scrivi un programma che passato un numero in input controlli che sia pari o dispari


let numero = prompt("Inserisci un numero");

numero = +numero;

if (numero % 2 === 0) {
       alert("Numero pari");
}
else {
       alert("Numero dispari");
}
*/

/* Esercizio 24
Scrivi un programma che passato un mese ritorni i giorni presenti in quel mese
*/

/*
let mese = prompt("Inserisci mese");

if (mese ==="aprile" || mese ==="giugno" || mese ==="settembre" || mese === "Novembre") {
    alert("30");
}

else if (mese === "gennaio" || mese ==="marzo" || mese ==="maggio" || mese ==="luglio" ||  mese ==="ottobre" || mese ==="dicembre") {
    alert("31");
}

else if (mese ==="febbraio") {
    alert("28");
}

else {
    alert("Carattere non valido");
}

*/

/*Esercizio 25
Scrivi un programma che passata una categoria in input (fantasy, fantascienza, animazione, ecc…) ti suggerisca il titolo di un film:
es: categoria: “fantasy” -> film suggerito: “il signore degli anelli
*/
/*
let genereFilm = prompt("Inserisci il film");
let genereFilmGenere = genereFilm.toLowerCase;

switch (genereFilmGenere) {
    case "Anime":
        console.log("Anime suggerito: One Piece")
        break;

        case "Fantascienza":
            console.log("Film fantascienza suggerito: Avatar")
            break;

            case "Azione":
            console.log("Film azione suggerito: Io sono leggenda")
            break;
}
*/

/*Esercizio 26
Il posto di blocco!
Scrivi un programma che simuli un posto di blocco
Chiedi al conducente età, patente ed assicurazione. 
Controlla anche quanti punti ha (fai generare un numero randomico da 0 a 20). 
Se tutti i controlli son rispettati lascialo andare, altrimenti ti tocca fargli la multa (o chiudi un occhio!).
Gestisci più casistiche possibili!
*/
/*
let age = prompt("Inserisci la tua età");
age = +age ;
let license = prompt("Hai la patente?");
let insurance = prompt("Hai l'assicurazione?");
let points = Math.floor(Math.random()*20)+1;

alert("Hai un numero di punti pari a :" + ""+ points);

if (age >=18 && license ==="si" && insurance ==="si" && points>10) {
       alert("Puoi andare!")
}

else {
    alert("Ce sta o mare for")
}
*/



/*
Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.


        Esempi:
        Input: n = 2, m = 3
        Output: FALSE
        Input: n = 2, m = '2'
        Output: FALSE
        Input: n = 2, m = 2
        Output: TRUE
        */
     /*  
    function argomenti (n, m){
    if (n === m) {
        let risultato = true;
        console.log(`Il risultato è ${risultato}`);
         return risultato
    }
    else {
        let risultato = false;
        console.log(`Il risultato è ${risultato}`);
        return risultato
         }
        
}

argomenti = (1,2)
argomenti = (1,"1")
argomenti = (1,1)
*/
/*
function argomenti (n = "", m = ""){
    if (n === m){
        let risultato = true;
        return console.log(`Il risultato è ${risultato}`)
    }

    else {
        let risultato = false
        return console.log (`Il risultato è: ${risultato}`)
    }

}

argomenti(2,2) //numeri uguali
argomenti(2,5) //numeri diversi
argomenti(2, '2') //numero reale e numero stringa
*/

/*
Esercizio 32

Scrivi una funzione che prenda in input una stringa e la restituisca capovolta
*/
/*
function alcontrario(parola) {
    let parolaSeparata = parola.split("");
    let parolaAlContrario = parolaSeparata.reverse ();
    let parolaUnita = parolaAlContrario.join("");
    console.log(parolaUnita);
    return parolaInversa
}
alcontrario("Simone Leonardi")
*/
/*
Esercizio 33

Scrivi una funzione che si occupi di generare un numero randomico da 1 a N e lo restituisca
*/
/*
function numeroaCaso(numeroMax) {
    let numeroaCaso1 = Math.floor(Math.random ()*(numeroMax-1+1)+1);
    return numeroRandomico  
}

console.log(random(100));
*/

/*Esercizio 34

Simula una partita a dadi:
Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) un numero di volte che verrà definito tramite parametro passato in input.
Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto).
*/
/*
function lancioDadi (numerodiLanci) {
    let totaleutente1 = 0;
    let totaleutente2 = 0;

    for (let i=0; i< numerodiLanci; i++) {
        let punteggioDadoUtente1 = random(6);
        totUtente1 = totUtente1 + punteggioDadoUtente1;
        let punteggioDadoUtente2 = random(6);
        totUtente2 = totUtente2 + punteggioDadoUtente2;
    }

    if (totaleutente1 > totaleutente2) {
        alert("Utente 1 ha vinto!")
    }

    else if (totaleutente1 < totaleutente2) {
        alert("Utente 2 ha vinto!")
    }
    
    else {
        alert("Pari!")
    }
    }

    lancioDadi(10);
*/

    /*Esercizio 35

Calcola il voto del giocatore a fantacalcio
scrivi una funzione che prende in input i seguenti parametri numerici:


- baseVoto
- golFatti
- assistEffettuati
- autogol
- ammonizione
- espulsione

calcola il voto finale di un giocatore tenendo conto delle seguenti regole:


- + 3 punti: per ogni gol fatto 
- + 1 punto: per ogni assist effettuato
- - 2 punti: per ogni autogol fatto
- - 1 punto: per ogni ammonizione
- - 2 punti: per ogni espulsione

esempio:


        Gino Van Der Gini: 
        - baseVoto: 8
        - golFatti: 2
        - assistEffettuati: 1
        - autogol: 0
        - ammonizione: 1
        - espulsione: 0
        
        - Risultato: 14


function calcolaVotoFantacalcio(baseVoto, golFatti=0, assist=0, autogol=0, ammonizioni=0, espulsione=0) {
    
    return baseVoto + (golFatti * 3) + assist + (autogol * -2) + (ammonizioni * -1) + (espulsione * -2);
}
calcolaVotoFantacalcio(8, 2, 1, 0, 1, 0);


Esercizio 37

Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

    Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

Variante:
Dopo averli ordinati in ordine decrescente ordinali in ordine crescente



let numeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

numeri.sort(function(a,b){
    return a-b
})

console.log(numeri);


Esercizio 38

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


function sommaArray(lista1,lista2,operazione) {
    let risultato = [] //devo operare su entrambi quindi devo prevedere questa variabile con un array vuoto
    
    for (let i = 0; i < lista1.lenght; i++);
    let risultatoOperazione
    switch (operazione) {
        case "addizione":
            risultatoOperazione = lista1[i] + lista2 [i];
            break;
            case "sottrazione":
            risultatoOperazione = lista1[i] - lista2 [i];
            break;
            case "divisione":
            risultatoOperazione = lista1[i] / lista2 [i];
            break;
            case "moltiplicazione":
            risultatoOperazione = lista1[i] * lista2 [i];
            break;
            risultato.push(risultatoOperazione);
    }

return risultato;

}


Esercizio 39

Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

    Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]



    console.group("media numeri")    


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


//Esercizio 40

Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. 
      Il primo argomento è una array e il secondo è il divisore.-
      ([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]



      console.group("Numeri divisibili per divisore")    

      function NumeriDivisibili(listaNumeri, divisore) {
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
      
      console.log(NumeriDivisibili([1, 2, 3, 4, 5, 6], 2))
      
      
      console.groupEnd()






    //ESERCIZIO 41

    
      Dato un array x e un valore y. Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.
    L'array può contenere numeri o stringhe. Y può essere uno dei due.
    Restituire true se l'array contiene il valore, false in caso contrario.
    check([66, 101], 66) ---> true
    check(['what', 'a', 'great', 'kata'], 'kat') ---> false
 

console.group("Check presenza valori")    


function controllaPresenzaInArray(listaElementi, elementoDaControllare) {
  console.log("Lista", listaElementi);
  console.log("Elemento da trovare", elementoDaControllare)
  return listaElementi.includes(elementoDaControllare);
}

console.log(controllaPresenzaInArray([66, 101], 66))
console.log(controllaPresenzaInArray(['what', 'a', 'great', 'kata'], 'kat'))


console.groupEnd()


//Esercizio 42
 * 
    Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi.
    Nota: se non c'è nulla da sommare, la somma è predefinita a 0.
    sumPositives([1,-4,7,12]) ---> 1 + 7 + 12 = 20
    sumPositives([-1,-4,-7,-12]) ---> = 0
 * 



    console.group("Somma numeri positivi")    


    function sommaNumeriPositivi(listaElementi) {
      console.log("Lista", listaElementi)
      let risultato = 0;
      listaElementi.forEach((elemento) => {
        if (elemento > 0) {
          risultato += elemento
        }
      })
    
      return risultato;
    }
    
    console.log(sommaNumeriPositivi([1,-4,7,12]))
    console.log(sommaNumeriPositivi([-1,-4,-7,-12]))
    
    console.groupEnd()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //Esercizio 43
     * 
        Dato un array di numeri interi, creare una funzione che restituisca un nuovo array con ogni valore raddoppiato.
        double([1, 2, 3]) --> [2, 4, 6]
      

    
    
    console.group("Raddoppio Elementi")    
    
    
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
   */ 
    
    
    
    
    
    
    
    
    
    










