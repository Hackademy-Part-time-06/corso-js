//Esercizio 37-------------------------------------------------------------

/*Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente

Esempio:
Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

Variante:
Dopo averli ordinati in ordine decrescente ordinali in ordine crescente*/

/*console.group("Esercizio 37");

let listaNumeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

console.log(`Lista numeri: ${listaNumeri}`);

console.log(listaNumeri.sort());

console.groupEnd()*/

//Esercizio 38-------------------------------------------------------------

/*Scrivi un programma che dati:

- 2 array di 10 elementi interi casuali compresi tra 1 e 10,
- il tipo di operazione aritmetica da effettuar tra una delle seguenti:
- addizione
- sottrazione
- moltiplicazione
- divisione

Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

Esempio:
Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7], operazione = "addizione"
Output: c = [12, 10, 3, 9, 15]*/

/*console.group("Esercizio 38");

let a = [3, 7, 2, 5, 8];
let b = [9, 3, 1, 4, 7];

let sum = [];
let div = [];
let mlt = [];
let sub = [];

//=> come fare questo esercizio con lo switch? ============================== ?? ============??
for (i = 0; i < a.length; i++) { //addizione
    sum.push(a[i] + b[i]);
}

for (i = 0; i < a.length; i++) { //divisione
    div.push(a[i] / b[i]);
}

for (i = 0; i < a.length; i++) { //moltiplicazione
    mlt.push(a[i] * b[i]);
}

for (i = 0; i < a.length; i++) { //sottrazione
    sub.push(a[i] - b[i]);
}

console.log(sum);
console.log(div);
console.log(mlt);
console.log(sub);

console.groupEnd();*/


//Esercizio 39-------------------------------------------------------------

/*Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

Esempio:
Input: a = [3, 5, 10, 2, 8]
Output: media = 5.6, valori minori = [3, 5, 2]*/

/*console.group("Esercizio 39");

let a = [3, 5, 10, 2, 8];
let somma = 0;

for (i = 0; i < a.length; i++) {
    somma += a[i];
}
console.log(somma);
media = somma / a.length;
console.log(media);

for (let i = 0; i < a.length; i++) {
    if (a[i] < media);
    console.log(a[i] + " "); 
    //=> a[i] vuol dire che partendo da [i] che è uguale a zero dato che il primo numero di un array è zero e passando ad ogni numero dell'array a, ci assicuriamo che OGNI numero dell'array a sia inferiore alla media (perchè noi cerchiamo quei numeri).
    //=> Nel console.log io chiedo di stampare a partire dal primo numero dell'array ossia i=0, anche i successivi (sempre inferiori alla media), quindi scrivo + " ", in questo spazio vanno i numeri successivi.
}

console.groupEnd();*/

//console.group("Esercizio 39- altrnativa")------------oppure-----------------oppure-------------oppure----------

/*let arr = [];
let somma = 0;

function numeroRandomico(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//=> Qui inserisco i<5 perchè avendo generato un numero randomico, devo dirgli io quanti imporne
for ( i = 0; i < 5; i++ ) {
    arr.push(numeroRandomico(1, 10))
}
//=> Qui inserisco i< arr.length perchè bisogna incrementare (i++), ogni singolo elemento (y) dell'arr (array) per la lunghezza (length), uso questa terminologia perchè posso anche non sapere quanto è lungo l'array di riferimento
for ( y = 0; y < arr.length; y++ ) {
    somma += arr[y]
}

console.log(`La somma tra 5 numeri è: ${somma}`);

let media = somma / arr.length

console.log(`La media tra quei 5 numeri è: ${media}`);

let arrvaloriInfMedia = [];

for ( i = 0; i < arr.length; i++ ) {
    if (arr[i] < media) {
        arrvaloriInfMedia.push(arr[i])
    }
}
//=> Nel backtick posso inserire sia un testo, sia un valore che sarebbe quello che voglio stampare, sia il metodo.sort che me li ordina in modo crescente
console.log(`I valori inferori al valore medio sono: ${arrvaloriInfMedia.sort()}`);

console.groupEnd()*/


//Esercizio 40

/*Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore.-
([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]*/

function restituzioneNumeri(arr, divisore) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % divisore === 0) { //arr.i è il singolo numero che stiamo visionando, % è una divisione che torna il resto (modulo), tornerà o 0 ossia è divisibile, oppure 1 ossia che non è divisibile, divisore sarebbe il secondo valore che andiamo a scrivere quando richiamiamo la funzione, praticamente ogni numero verrà controllato dal divisore per via del ciclo for, === controlla la veridicità dell'operazione, 0 è il risultato che noi imponiamo, in quando il modulo può tornare o 0 oppure 1.
            console.log(`Il numero ${arr[i]} è divisibile `)
        } else {
            console.log(`Il numero ${arr[i]} non è divisibile `)
        }
    }
}

restituzioneNumeri([1, 2, 3, 4, 5, 6], 4)/*

//Esercizio 41

/*Dato un array x e un valore y. Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.
L'array può contenere numeri o stringhe. Y può essere uno dei due.
Restituire true se l'array contiene il valore, false in caso contrario.
check([66, 101], 66) ---> true
check(['what', 'a', 'great', 'kata'], 'kat') ---> false*/

/*console.group("Esercizio 41")

function comparatore(x, y){
    let risposta = false;
    for (i = 0; i < x.length; i++) {
        if (x[i] == y) {
            risposta = true;
        }
    } console.log(risposta)
}

comparatore(["ciccio", 2, "pasticcio", 4, 8, "farfallinebelle"], "2")

console.groupEnd*/

//Esercizio 42

/*Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi.
Nota: se non c'è nulla da sommare, la somma è predefinita a 0.
sumPositives([1,-4,7,12]) ---> 1 + 7 + 12 = 20
sumPositives([-1,-4,-7,-12]) ---> = 0*/

//la funzione richiama semplicemente ciò che devi fare: nel tuo caso il ciclo FOR

/*function sum(x) {
    let risultato=0; //se non inserisci un valore dopo l'uguale sarà true e non zero, quindi "imponi" lo zero (ma ovviamente non è un valore)
    for (i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            risultato += x[i];
        }
    }
    console.log (risultato); //stampo ciò che ce dentro la funzione (è parte della funzione), ma stampalo fuori altrimenti ti stampa tutti i risultati uno per uno ed è un delirio.
}

sum([1,-4,7,12]);

sum([8,-112,-8,1285])*/


//reverseString("cicciopasticcio") //questa funzione (che viene da un altro file), la puoi riutilzizare in qualsiasi foglio html (purcheè sia contenuto nella stessa cartella)

//Esercizio 43

console.group("Esercizio 43")

/*Dato un array di numeri interi, creare una funzione che restituisca un nuovo array con ogni valore raddoppiato.
double([1, 2, 3]) --> [2, 4, 6]*/

function raddoppia(arr) {
    let risultato = ""; // è vuoto e non zero, dato che il ciclo (se=0) parte da qui, cicla anche lo zero, invece se non lo metti, lui parte dal primo, " " queste invece rappresentano un vuoto, se invece non metti nulla, ovviamente cicla undefined.
    for (i = 0; i < arr.length; i++) {
        risultato += [arr[i] * 2];
    }
    console.log(risultato)
}

raddoppia([1, 2, 3, 15, 22, 88, 4]);

console.groupEnd();


//Esercizio 44

/*La nostra squadra di calcio ha concluso il campionato. Il risultato di ogni partita ha l'aspetto di "x:y". I risultati di tutte le partite sono registrati nell’array.
Esempio :
['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']
Scrivere una funzione che prenda quest’array e conti i punti della nostra squadra nel campionato.
Regole per il conteggio dei punti per ogni partita:
se x > y: 3 punti
se x < y: 0 punti
se x = y: 1 punto
calculatePoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ---> 30
calculatePoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) ---> 10
calculatePoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) ---> 0
calculatePoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) ---> 15*/

console.group("Esercizio 44")

function whoWonChampionship(arr) {
    let result = [] //mettiamo un risult vuoto perchè così mi restituisce un array
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > arr[i][2]) {
            //[0 è il primo carattere dell'array, mentre il 2 è quello dopo il :, quindi il : è il numero 1];
            sum += 3;
        }
        else if (arr[i][0] === arr[i][2]) { // se non c'è un maggiore o un minore, quindi se pareggiano è 1 punto (sarebbe l'ultima stringa;)
            sum += 1;
        }
        else { // questo sarebbe la seconda condizione, la mettiamo per ultima perchè è più facile da fare sul finale, piuttosto che le precedenti.
            sum += 0;
        }
    }
    return sum;
}
console.log(whoWonChampionship(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))
console.log(whoWonChampionship(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))
console.log(whoWonChampionship(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]))
console.log(whoWonChampionship(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]))













console.groupEnd();