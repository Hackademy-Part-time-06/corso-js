/*
Esercizio 37
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
Esempio:
Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

Variante:
Dopo averli ordinati in ordine decrescente ordinali in ordine crescente


let numeri = [ 3, 7, -2, 5, 8, 1, 2, 5, 6, -4] ;
let ordine = numeri.sort()
console.log(ordine);
*/

/*
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

let a= [3, 7, 2, 5, 8];
let b= [9, 3, 1, 4, 7];
let c = [];
for(i=0; i < a.length; i++){
    c.push(a[i]+b[i])
}
//in teoria è da fare un switch ma non ho voglia
console.log(c);
*/

/*
Esercizio 39
Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.
Esempio:
Input: a = [3, 5, 10, 2, 8]
Output: media = 5.6, valori minori = [3, 5, 2]

let a = [10, 20, 30, 40, 50];
let sum = 0;

for (i=0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum)
media= sum/a.length;
console.log(media);
for(let i = 0; i < a.length; i++){
    if (a[i] < media){
        console.log(a[i]);
    }
}
*/


/*
Esercizio 40

Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore.-
([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]
function ritronaNumero(array, n){
    for(i=0; i<array.length; i++){
        if(array[i]%n=== 0){
            console.log(`${array[i]} :numero divisibili `);
        }else{
            console.log(`${array[i]} :numero non divisibile `);
        }
    }
}
ritronaNumero([1, 2, 3, 4, 5, 6], 2)
*/

/*
Esercizio 41

Dato un array x e un valore y. Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.
L'array può contenere numeri o stringhe. Y può essere uno dei due.
Restituire true se l'array contiene il valore, false in caso contrario.
check([66, 101], 66) ---> true
check(['what', 'a', 'great', 'kata'], 'kat') ---> false


function compara(x, y){
    let risposta = false
    for(i=0; i<x.length; i++){
        if(x[i] === y){
            risposta = true
        }
    }
    console.log(risposta);
}
compara([`ciao`, `gino`, `pippo`, `luigi`], `gino`)
*/

/*
Esercizio 42

Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi.
Nota: se non c'è nulla da sommare, la somma è predefinita a 0.
sumPositives([1,-4,7,12]) ---> 1 + 7 + 12 = 20
sumPositives([-1,-4,-7,-12]) ---> = 0

function somma(x){
    let risultato =0
    for(i=0; i<x.length; i++){
        if (x[i]>0){
            risultato += x[i]
        }
    }
    console.log(risultato);
}
somma([1, 2, 3, 4, 5, -6])
*/

/*
Esercizio 43
Dato un array di numeri interi, creare una funzione che restituisca un nuovo array con ogni valore raddoppiato.
double([1, 2, 3]) --> [2, 4, 6]


function raddoppia(x){
    let risultato=""
    for(i=0; i<x.length; i++){
      risultato += [ x[i] * 2]
    }
    console.log(risultato);
}
raddoppia([2, 3, 5, 6, 7, 8])
*/

/*
Esercizio 44

La nostra squadra di calcio ha concluso il campionato. Il risultato di ogni partita ha l'aspetto di "x:y". I risultati di tutte le partite sono registrati nell’array.
Esempio :
['1:0',:'20','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']
Scrivere una funzione che prenda quest’array e conti i punti della nostra squadra nel campionato.
Regole per il conteggio dei punti per ogni partita:
se x > y: 3 punti
se x < y: 0 punti
se x = y: 1 punto
calculatePoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ---> 30
calculatePoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) ---> 10
calculatePoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) ---> 0
calculatePoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) ---> 15

function calcio (x,y){
    let punti=0

for (i=0; i<x; i++){
    if(x>y){
        punti + 3
    }else if(x=y){
        punti + 1
    }
    }
    console.log(punti);
}
calcio ("2", "0")

function calcoloFanta (baseVoto = 0, golFatti = 0, assistEffettuati = 0, autogol = 0, ammonizioni = 0, espulsione = 0) {
    golFatti = golFatti * 3;
    autogol = -autogol * 2;
    ammonizioni = -ammonizioni;
    espulsione = -espulsione * 2;

    let votoFanta = baseVoto + golFatti + autogol + assistEffettuati + ammonizioni + espulsione;

    return votoFanta
}

console.log (calcoloFanta(6, 4, 1, 0, 2, 1)) //valori arbitrari
*/

/*
Esercizio 45

Rifai gli esercizi riguardanti gli array usando, quando possibile, i metodi avanzati (forEach, filter, map. reduce) che abbiamo visto nell’ultima lezione

Esercizio 37
let numeri = function(arrey) {
    return arrey.sort()
}
console.log(numeri([3, 7, -2, 5, 8, 1, 2, 5, 6, -4]));
*/
/*
Esercizio 38

let addizione= function(a,b) {
    let c = []
    for(i=0; i < a.length; i++){
        c.push(a[i]+b[i])
    }
}
*/

/*
Esercizio 46

Scrivi una funzione che, data una frase, ritorni la prima lettera di ogni parola presente nella frase:
es: 
input: “Ciao sono un esercizio sui metodi avanzati degli array” 
output: Csuesmada
let frase= function(array) {
    let iniziali=[]
    array.forEach(element => {
        let parola = element.split(" ")
        parola.forEach(elemento =>{
            let lettera = elemento.charAt(0)
            iniziali.push(lettera)  
        })
    })
   return iniziali.join("")
}
console.log(frase(["Ciao sono un esercizio sui metodi avanzati degli array"]));
*/

/*
Esercizio 47
Scrivi una funzione che conti le occorrenze dei singoli elementi presenti in array annidati
   es:
     input:
     [ ["abc", "gino", "aaa"],["abc", "dino", 123],["aaa", "gino", 321],["xyz", "klm", "aaa"] ]
  output:
     123: 1
     321: 1
     aaa: 3
     abc: 2
     dino: 1
     gino: 2
     klm: 1




let parola = function(array){
    let uniti = [];
     array.forEach(element => {
        uniti.push(element)
         })
     return uniti.join(" ")
 }
 
 
 console.log(parola(
     [
     ["abc", "gino", "aaa"],
     ["abc", "dino", 123],
     ["aaa", "gino", 321],
     ["xyz", "klm", "aaa"],
     ]
     )
 )
 */
/*
Esercizio 48

Scrivi una funzione che, dato un array di numeri, ritorni la somma dei numeri divisibili per 2:
es: 
input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
output: 2 + 4 + 6 + 8 = 20
*/

let somma = function(array) {
    let totale = 0
    array.forEach(element => {
        if (element % 2 === 0){
            totale += element
        }
    });
    return totale
}
console.log(somma([1, 2, 3, 4, 5, 6, 7, 8, 9]));
