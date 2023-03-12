//"" = '' = `` // sono uguali
//apici normali solo per una parole (cose semplici),apici singoli per cose più generiche o per differenziare. il backtick ti permette di inserire l'impossibile.

//(`bla bla ${ciccio}`) // se voglio una soluzione dentro la stringa uso il dollaro ciccio.

/*+= //punteggio = punteggio + ciccettemolli

for //crea un ciclo che inizia e finisce secondo le condizioni all'interno dell'argomento.

while // il while va avanti sino a quando non diventa true o false, potenzialmente può andare avanti per moltissimi, INDEFINITI cicli (mentre quelli del for sono definiti).

//ESERCIZIO CON IL WHILE
/*
console.group("Esercizio partita a D&D");

let facceDado = 5;
let giocatore1numMigliore = 0;
let giocatore2numMigliore = 0;

let lanciTotali = 5;
let vincitore;

for (let i = 0; i < lanciTotali; i++) {
    let num1 = Math.floor(Math.random() * facceDado) + 1;
    let num2 = Math.floor(Math.random() * facceDado) + 1;
    
    //console.log("lancio", i+1, "risultato giocatore 1: ", num1, ", risultato giocatore 2: ", num2);
    
    console.log(`Lancio ${i + 1} - risultato giocatore 1: ${num1}, risultato giocatore 2: ${num2}`);
    
    if (num1 > giocatore1numMigliore) {
        giocatore1numMigliore = num1;
    }
    
    if (num2 > giocatore2numMigliore) {
        giocatore2numMigliore = num2;
    }
}

console.log(`Risultato migliore giocatore 1: ${giocatore1numMigliore}, risultato migliore giocatore 2: ${giocatore2numMigliore}`);


if (giocatore1numMigliore === giocatore2numMigliore) {
    
    let rilancia = true;
    //Il while si ferma quando è FALSE, CONTINUERà SINO A QUANDO NON SARà FALSE;
    while (rilancia) { //in genere i while vanno all'interno di altre condizione ed anch'essi sono dentro altre condizioni
        console.log('Risultato pari! Si rilancia');
        
        let num1 = Math.floor(Math.random() * facceDado) + 1;
        let num2 = Math.floor(Math.random() * facceDado) + 1;
        
        console.log(`Nuovo lancio - risultato giocatore 1: ${num1}, risultato giocatore 2: ${num2}`);
        
        if (num1 !== num2) { //condizione della parità
            //se il num1 è diverso num2 tu rilancia
            if (num1 > num2) {
                vincitore = 1;
            }
            else {
                vincitore = 2;
            }
            // serve ad interrompere il ciclo: FALSE.
            //alla fine del WHILE devi mettere una condizione che dia SEMPRE FALSE, altrimenti prosegue all'infinito e si impalla.
            rilancia = false;
        }
    }
}
else {
    if (giocatore1numMigliore > giocatore2numMigliore) {
        vincitore = 1;
    }
    else {
        vincitore = 2;
    }
}

console.log("Il vincitore è il giocatore numero:", vincitore);


console.groupEnd();*/

//Esercizio 37

/*Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

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

//Esercizio 38

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

/*let a = [3, 7, 2, 5, 8];
let b = [9, 3, 1, 4, 7];

let sum = [];

switch// inserisci i diversi case
for (i = 0; i < a.length; i++) {
    sum.push(a[i] + b[i]);
}

for (i = 0; i < a.length; i++) {
    sum.push(a[i] / b[i]);
}

for (i = 0; i < a.length; i++) {
    sum.push(a[i] * b[i]);
}

for (i = 0; i < a.length; i++) {
    sum.push(a[i] - b[i]);
}

console.log(sum);*/


//Esercizio 39

/*Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

Esempio:
Input: a = [3, 5, 10, 2, 8]
Output: media = 5.6, valori minori = [3, 5, 2]*/

/*console.group("Esercizio 40");
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
    console.log(a[i] + " "); //fai spiegare da Nicola perchè a[i]
    //a[i] vuol dire che se i è uguale a zero, cioè il primo numero allora ogni numero della stringa a deve essere inferiore al valore della media (nell'if, questo perchè cerchiamo i valori inferiori alla media. 
    //Nle console.log noi stampiamo che quella serie di valori derivanti da a, inferiori alla media (condizione determinata nell'if), vengono sommati a ?? ecco, non capisco le vigolette
}

console.groupEnd();*/

console.group("Eserc_39")
    //Eserc_39

/*let c = []
let sommaPerMedia = 0

function numeroACaso(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

for ( i = 0; i < 5; i++ ) {
    c.push(numeroACaso(1, 10))
}

for ( y = 0; y < c.length; y++ ) {
    sommaPerMedia += c[y]
}

console.log(La somma tra 5 numeri è: ${sommaPerMedia})

let media = sommaPerMedia / c.length

console.log(La media tra quei 5 numeri è: ${media})

let arrayPerValoriInferioriMedia = []

for ( y = 0; y < c.length; y++ ) {
    if (c[y] < media) {
        arrayPerValoriInferioriMedia.push(c[y])
    }
}

console.log(I valori inferori al valore medio sono: ${arrayPerValoriInferioriMedia.sort()})

console.groupEnd()*/


//Esercizio 40

/*Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore.-
([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]*/

/*function restituzioneNumeri(arr, divisore) {
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
    let risultato=""; // è vuoto e non zero, dato che il ciclo (se=0) parte da qui, cicla anche lo zero, invece se non lo metti, lui parte dal primo, " " queste invece rappresentano un vuoto, se invece non metti nulla, ovviamente cicla undefined.
    for (i = 0; i < arr.length; i++){
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

function soccer(x,y){
    let points=0;

    for (i = 0; i < x.length; i++){
        
    }
}





console.groupEnd();