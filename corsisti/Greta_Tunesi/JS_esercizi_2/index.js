"use strict"

/* esercizio 8

let Numero1 = 10
let Numero2 = 20
let Numero3 = 35
let Numero4 = 50
let Numero5 = 70

let somma = Numero1 + Numero2 + Numero3 + Numero4 + Numero5;
let media = somma / 5;

console.log(somma);
console.log(media);

*/

/* esercizio 9 

let numeroUtente1 = +prompt('inserisci numero 1')
let numeroUtente2 = Number(prompt('inserisci numero 2'))
let numeroUtente3 = Number(prompt('inserisci numero 3'))
let numeroUtente4 = Number(prompt('inserisci numero 4'))
let numeroUtente5 = Number(prompt('inserisci numero 5'))

let somma = numeroUtente1 + numeroUtente2 + numeroUtente3 + numeroUtente4 + numeroUtente5;
let media = somma / 5;

console.log(somma);
console.log(media);

*/

/* esrcizio 10 

let annoCorrente = 2023
let annoNascita = Number(prompt('Inserisci anno di nascita'))

let età = annoCorrente - annoNascita

let mancanoAi100 = 100 - età

console.log(`età utente: ${età}`);
console.log(`ti mancano ${mancanoAi100} per raggiungere i 100`)

*/

/* esercizio 11

let nameUtente = prompt('inserisci il tuo nome')

console.log(nameUtente.charAt().toUpperCase()+nameUtente.slice(1))

*/

/* esercizio 12 

let numeroT = prompt('inserisci numero telefono')

alert(numeroT.replace(numeroT.slice(0,7),'*******'))

*/


/* esercizio 13 

let Numero1 = 1
let Numero2 = 2
let Numero3 = 3
let Numero4 = 4
let Numero5 = 5

let nMin = Math.min(Numero1,Numero2,Numero3,Numero4,Numero5)

console.log(nMin)

*/

/* esercizio 14

let n1 = 0.1
let n2 = 0.2

let somma = n1+n2
somma = +somma.toFixed(1)     usato per troncare il numero dopo la virgola
console.log(somma)

*/

/* Esercizio 15 creazione di un numero randomico



let random = Math.floor(Math.random() * 6);

console.log(random);
*/

/* esercizio 17 Scrivi un programma che converta un voto numerico (v) in un giudizio 

let v = Number(prompt('inserisci voto'));

if (v < 18) {
  console.log('voto insufficiente')
}

else if (v >= 18 && v < 21) {
    console.log('voto sufficiente');
}
else if (v >= 21 && v < 24) {
    console.log('voto buono');
}
else if (v >= 24 && v < 27) {
    console.log('voto distinto');
}
else if (v >= 27 && v <= 29) {
    console.log('voto ottimo');
}
else if (v === 30) {
    console.log('voto eccellente');
}
else (v > 30) {
    console.log('voto fuori scala')
}


*/

/* esercizio 18 Scrivi un programma che dato un numero stampi la tabellina corrispondente 

let nTabellina = prompt('inserisci numero tabellina')

for(i=1; i<=10; i++) {
    console.log(`${nTabellina} x ${i} = ${nTabellina*i}`)
}

*/

/* esrcizio 19: Scrivi un programma che, data una stringa, da usare come ipotetica password, faccia i seguenti controlli

- almeno 6 caratteri
- non più di 20 caratteri
- deve contenere almeno uno dei seguenti simboli; “!", “_”, “-”
- deve contenere almeno un numero 

let pswUtente = prompt('inserisci la tua password')
let symbol = /[!_-]/ //simboli da inserire
let number = /[0123456789]/ 

if (pswUtente.length < 6) {
    console.log('deve avere almeno 6 caratteri')
}
else if (pswUtente.length > 20) {
    console.log('non deve avere più di 20 caratteri')
}
else if (symbol.test(pswUtente) !== true) {
    console.log('deve contenere almeno uno dei seguenti simboli [ ! _ - ]')
}
else if (number.test(pswUtente) !== true) {
    console.log('deve contenere almeno un numero')
}
else {console.log('password accettata')}

*/

/* Esercizio 23: Scrivi un programma che passato un numero in input controlli che sia pari o dispari 

var numeroUtente = +prompt('inserisci numero')

if (numeroUtente%2 === 0){
    console.log('il numero è pari');
}
else {
    console.log('il numero è dispari')
}

Un numero è pari quando è divisibile per due e non da il resto. Quindi if è divisibile per due allora è pari, senno dispari

*/

/* Esercizio 24: Scrivi un programma che passato un mese ritorni i giorni presenti in quel mese 

let mese = prompt('inserisci il mese da calcolare')
let meseMinuscolo = mese.toLowerCase()

switch (meseMinuscolo) {
    case "gennaio":
    console.log(`${mese} ha 31 giorni`)
    break; 
    
    case "febbraio":
    console.log(`${mese} ha 28 giorni`)
    break;

    case "marzo":
        console.log(`${mese} ha 31 giorni`)
        break; 

    case "aprile":
        console.log(`${mese} ha 30 giorni`)
        break;

    case "maggio":
        console.log(`${mese} ha 31 giorni`)
        break; 
    
    case "giugno":
        console.log(`${mese} ha 30 giorni`)
        break;
        
    case "luglio":
        console.log(`${mese} ha 31 giorni`)
        break; 

     case "agosto":
        console.log(`${mese} ha 31 giorni`)
        break; 
    
    case "settembre":
        console.log(`${mese} ha 30 giorni`)
        break;

    case "ottobre":
        console.log(`${mese} ha 31 giorni`)
        break;

    case "novembre":
        console.log(`${mese} ha 30 giorni`)
        break;

    case "dicembre":
        console.log(`${mese} ha 31 giorni`)
        break; 

    default:
        console.log("stringa non valida, inserisci un mese")
        break;
}

*/

/* Esercizio 25: Scrivi un programma che passata una categoria in input (fantasy, fantascienza, animazione, ecc…) ti suggerisca il titolo di un film:
es: categoria: “fantasy” -> film suggerito: “il signore degli anelli” 

//esercizio molto simile al precedente

let categoria = prompt("inserisci categoria di film")
let categoriaMinuscolo = categoria.toLowerCase()

if(categoriaMinuscolo == "fantasy") {
    console.log(`Per la categoria "${categoriaMinuscolo}" il film consigliato è "Avatar"`)
}
else if(categoriaMinuscolo == "animazione") {
    console.log(`Per la categoria "${categoriaMinuscolo}" il film consigliato è "Il castello errante di Howl"`)
}
else if(categoriaMinuscolo == "musical") {
    console.log(`Per la categoria "${categoriaMinuscolo}" il film consigliato è "Mamma Mia!"`)
}
else if(categoriaMinuscolo == "romantico") {
    console.log(`Per la categoria "${categoriaMinuscolo}" il film consigliato è "Love actually"`)
}
else if(categoriaMinuscolo == "thriller") {
    console.log(`Per la categoria "${categoriaMinuscolo}" il film consigliato è "Con gli occhi dell'assassino"`)
}
else {console.log("non ho film da consigliarti per questa categoria")}

*/

/* Esercizio 26
Il posto di blocco!
Scrivi un programma che simuli un posto di blocco
Chiedi al conducente età, patente ed assicurazione. 
Controlla anche quanti punti ha (fai generare un numero randomico da 0 a 20). 
Se tutti i controlli son rispettati lascialo andare, altrimenti ti tocca fargli la multa (o chiudi un occhio!).
Gestisci più casistiche possibili!


let età = Number(prompt('quanti anni hai?'))
let patente = prompt('hai la patente?')
let assicurazione = prompt("hai l'assicurazione?")


if(età >= 18 && patente == "si" && assicurazione == "si") { 
    console.log(`Hai ${Math.floor(Math.random() * 20)} punti sulla patente... vabe puoi continuare a guidare`);
 }
 else {console.log("Bene bene, qui ci scappa la multa")}  */


/* Esercizio 27  --- DA FINIRE
Calcolatrice!!
Crea un programma che simuli una calcolatrice!!
Chiedi all’utente di inserire 2 numeri ed un simbolo matematico ed esegui l’operazione corrispondente
        es: 

          input1: 10
          input2: 20
          input3: +

          risultato: 10 + 20 = 30
       

let n1= Number(prompt("inserisci il numero 1"))
let simbolo=prompt("inserisci il simbolo dell'operazione")
let n2= Number(prompt("inserisci il numero 2"))

n1 =+ n1
n2 =+ n2

if (simbolo === "+") {
    let somma = n1 + n2
    console.log(`la somma di ${n1} ${simbolo} ${n2} è: ${somma}`)
} 

*/

/* esercizio 31 - Scrivi una funzione che prenda in input due argomenti e restituisca TRUE 
se i due argomenti sono IDENTICI, FALSE altrimenti.


        Esempi:
        Input: n = 2, m = 3
        Output: FALSE
        Input: n = 2, m = '2'
        Output: FALSE
        Input: n = 2, m = 2
        Output: TRUE



let n1 = Number(prompt('inserisci argomento 1'))
let n2 = Number(prompt('inserisci argomento 2'))
let risultato 

function verificaDoppioni(n1, n2) {

    if (n1 === n2) {
       risultato = true
    }
    else (risultato = false)

    return risultato }

 
console.log(verificaDoppioni(n1, n2))

*/

/*esrcizio 32: Scrivi una funzione che prenda in input una stringa e la restituisca capovolta 

let stringa = "stringa da ribaltare"

function scrittaCapovolta(stringa) {
    stringaSplittata = stringa.split("");
    
    stringaReverse = stringaSplittata.reverse();
    
    stringaUnita = stringaReverse.join("");
    return stringaUnita

}

console.log(scrittaCapovolta(stringa))

*/

/* Esercizio 33: Scrivi una funzione che si occupi di generare un numero randomico da 1 a N e lo restituisca 


function numeroRandomico() {

   numeroRandom = Math.floor(Math.random() * (44 + 1) + 1);

  return numeroRandom
}
numeroRandomico()


*/ 

/* Esercizio 34

Simula una partita a dadi:
Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) 
un numero di volte che verrà definito tramite parametro passato in input.
Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto). 
 

let nPartite = Number(prompt("quante partite vuoi fare?"))

for (let i=0; i < nPartite; i++) {

function numeroRandomico() {

    numeroRandom1 = Math.floor(Math.random() * (6 + 1) + 1);

    numeroRandom2 = Math.floor(Math.random() * (6 + 1) + 1);
 
    return numeroRandom1, numeroRandom2
 }

 numeroRandomico()

 console.log(`al primo giocatore è uscito ${numeroRandom1} al secondo ${numeroRandom2}`)


 if (numeroRandom1 < numeroRandom2) {
    console.log(`questa partita l'ha vinta giocatore 2!`)
 }
else if (numeroRandom1 > numeroRandom2)
    console.log(`questa partita l'ha vinta giocatore 1`)
 
else (console.log("questa partita è patta!"))

}

 */

/* Esercizio 37

Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

    Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

Variante:
Dopo averli ordinati in ordine decrescente ordinali in ordine crescente  

let listaNumeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

listaNumeri = listaNumeri.sort(function(a, b){return b-a});
console.log(listaNumeri)
listaNumeri = listaNumeri.sort(function(a, b){return a-b});
console.log(listaNumeri)

*/

/* Esercizio 38

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

    ---
    let lista1 = Array(); // sta dicendo variabile uguale ad array per ora vuoto
    let lista2 = Array(); // è un modo per dichiarare un array --> =[] 
    let risultato = Array(); //questo è l'array d'appoggio. Per ora è vuoto come gli altri due, ma ci assegnamo poi i risultati

    for (let i=0; i<10; i++) { //il ciclo si interrompe al 10'
    lista1[i] = Math.floor(Math.random() * 10 + 1); //assegno x 10 volte un numero casuale (tra 1 e 10)
    lista2[i] = Math.floor(Math.random() * 10 + 1);
    }

    let operazione = prompt("scegli un'operazione tra addizione, sottrazione, moltiplicazione e divisione");

    //poteva essere fatto anche con lo switch
    for (let i=0; i<10; i++) //mi deve operare tutti e 10 i numeri della lista, quindi lo metto in un for
    if (operazione == "addizione") {
        risultato[i] = lista1[i] + lista2[i]}
    else if (operazione == "sottrazione") {
        risultato[i] = lista1[i] - lista2[i]
    }
    else if (operazione == "moltiplicazione") {
        risultato[i] = lista1[i] * lista2[i]
    }
    else if (operazione == "divisione"){
        risultato[i] = Math.floor(lista1[i] / lista2[i])
    }
    //cerca di non usare risultato[i] quando l'array è vuoto, perchè potrebbe dare problemi.
    // usa piuttosto risultato.push(risultatoOperazione) */

/* Esercizio 38 fatto con Array avanzati */
    
/* Esercizio 39 DA FINIRE

Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

    Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2] 
    


var listaRandomica = Array()
var sommaArray = 0

for (let i=0; i<10; i++) {
listaRandomica[i] = Math.floor(Math.random() * 10 + 1);}

function media(listaRandomica) {
    for (i=0; i<listaRandomica.length; i++) {
    let sommaArray = listaRandomica[i] + listaRandomica[i]}
    console.log(sommaArray)
}

media(listaRandomica) */



/* Esercizio 46

Scrivi una funzione che, data una frase, ritorni la prima lettera di ogni parola presente nella frase:
es: 
input: “Ciao sono un esercizio sui metodi avanzati degli array” 
output: Csuesmada



let frase = "Ciao sono un esercizio sui metodi avanzati degli array"
let fraseSplittata = frase.split(" ")
console.log(fraseSplittata)

let inizialiParole = fraseSplittata.map(function(parola) {
    parola = parola.charAt()
    console.log(parola)
    return parola
})

let inizialiUnite = inizialiParole.join("")
console.log(inizialiUnite)

*/   

/* Esercizio 47: Scrivi una funzione crei un unico array unendo gli array innestati
   es:
     input:
     [

         ["abc", "gino", "aaa"],
         ["abc", "dino", 123],
         ["aaa", "gino", 321],
         ["xyz", "klm", "aaa"],

     ]
     
     output

        ["abc", "gino", "aaa", "abc", "dino", 123, "aaa", "gino", 321, "xyz", "klm", "aaa”] 

       let lista = [["abc", "gino", "aaa"],["abc", "dino", 123],["aaa", "gino", 321],["xyz", "klm", "aaa"]]

     let concatena = lista.reduce(function(risultato,elemento){
        risultato = risultato.concat(elemento)
        return risultato
     })

     console.log(concatena)
     */

 /*Esercizio 48 Scrivi una funzione che, dato un array di numeri, ritorni la somma dei numeri divisibili per 2:
    es: 
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: 2 + 4 + 6 + 8 = 20 

    let input = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    let listaFiltrata = input.filter(function(numeroPari) {
        return  numeroPari % 2 === 0
    })

    console.log(listaFiltrata)

    let totale = listaFiltrata.reduce(function(risultato,numero){
        return risultato + numero
    })
    
    console.log(totale)
    */

/* Esercizio 49 Definisci un oggetto playlist che contiene una proprietà canzoni.
Inserisci una o 2 canzoni e ciascuna deve avere le seguenti proprietà:
titolo
nomeCantante
anno

Dopo prevedi la possibilità di far inserire all’utente delle nuove canzoni.
Ad ogni canzone inserita stampa in console tutte le canzoni:


let playlist = {

    Due_Vite: {
        titolo: "Due vite",
        nomeCantante: "Marco Mengoni",
        anno: 2023,
    },
    Dancing_Queen: {
        titolo: "Dancing Queen",
        nomeCantante: "Abba",
        anno: 1976
    },

    inserisciCanzone : function(){
       
        let canzone = prompt("inserisci titolo, cone del cantante e anno separati da una virgola") //qui sto dicendo all'utente di inserire la canzone scelta
        console.log(this.playlist)

        let canzoneSplittata = canzone.split(",") //in questo modo stiamo splittando cio che ha scritto l'utente in tre
        playlist[`${canzoneSplittata[0]}`] = {titolo: canzoneSplittata[0], //all'inizio gli ho detto di chiamare la variabile in modo dinamico
                                 nomeCantante: canzoneSplittata[1], //poi gli ho chiesto di prendermi alla posizione giusta il valore inserito dall'utente
                                 anno: Number(canzoneSplittata[2])}
    },

}

playlist.inserisciCanzone()
console.log(playlist)

*/

/* Esercizio 50

Definisci un oggetto rubrica che ha come proprietà gli utenti. Per ogni utente specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).
Quindi popolare la rubrica con dei dati a piacere. 
Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta. 


let rubrica = {
    utente : {
        nome :  "Greta",
        cognome : "Tuensi",
        telefono : 3455555555,
        indirizzo : {
            via : "Via turati",
            numero : "30",
            città : "Corbetta",
        }
    }
}

console.log(rubrica)
delete rubrica.utente.telefono //elimina il telefono, in questo modo non lo vedo più

*/

/* Esercizio 51

Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili. 
Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

let garage = {
    automobile1: {
        brand: "renault",
        model: "twingo",
        anno: 2003,
    },
    automobile2: {
        brand: "fiat",
        model: "panda",
        anno: 2020,
    },
    automobile3: {
        brand: "fiat",
        model: "punto",
        anno: 2010
    },
}

function scegliMacchina() {
    let brandInserito = prompt("Inserisci una marca e ti daremo le opzioni disponibili")

    if (brandInserito == "fiat") {
        console.log(`di questo brand abbiamo`, garage.automobile2, "e", garage.automobile3)
    }
    else if (brandInserito == "renault"){
    console.log(`Di questo brand abbiamo:`, garage.automobile1)
    }
    else console.log("non abbiamo questo tipo di macchina")
}

scegliMacchina()  */

/* Esercizio 52

Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere una lista di giocatori che saranno formati dalle proprietà, nome e punteggi

Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita 


let salaBowling = {
     giocatore1: {
        nome: "Giulio",
        punteggioPrimo: 60,
        punteggioSecondo: 20,
     },
     giocatore2: {
        nome: "Matteo",
        punteggioPrimo: 90,
        punteggioSecondo: 70,
     },
     giocatore3: {
        nome: "Luca",
        punteggioPrimo: 100,
        punteggioSecondo: 20,
     },

} 

function calcolareMaggiore() {
    punteggioTotG1 = salaBowling.giocatore1.punteggioPrimo + salaBowling.giocatore1.punteggioSecondo
    punteggioTotG2 = salaBowling.giocatore2.punteggioPrimo + salaBowling.giocatore2.punteggioSecondo
    punteggioTotG3 = salaBowling.giocatore3.punteggioPrimo + salaBowling.giocatore3.punteggioSecondo

    console.log(salaBowling.giocatore1.nome, ": hai effettuato questo puntegggio:", punteggioTotG1)
    console.log(salaBowling.giocatore2.nome, ": hai effettuato questo puntegggio:", punteggioTotG2)
    console.log(salaBowling.giocatore3.nome, ": hai effettuato questo puntegggio:", punteggioTotG3)

   let punteggioMaggiore = Math.max(punteggioTotG1, punteggioTotG2, punteggioTotG3)

   console.log("il punteggio più alto è", punteggioMaggiore)
    
    if (punteggioTotG1 > punteggioTotG2 && punteggioTotG1 > punteggioTotG3){
        console.log(salaBowling.giocatore1.nome, "hai vinto!")
    }
    else if (punteggioTotG2 > punteggioTotG1 && punteggioTotG2 > punteggioTotG3){
        console.log(salaBowling.giocatore2.nome, "hai vinto!")
    }
    else 
        console.log(salaBowling.giocatore3.nome, "hai vinto!")
}

calcolareMaggiore() */

/* Esercizio 53

Scrivi una funzione che conti le occorrenze dei singoli elementi presenti in array annidati:
es: 

    input:
        [
            [“abc”, “gino”, “aaa”],
            [“abc”, “dino”, 123],
            [“aaa”, “gino”, 321],
            [“xyz”, “klm”, “aaa”],
        ]
        
    output: 
        {
            123: 1
            321: 1
            abc: 1
            gino:2
            dino:1
            aaa:3
            ccc:1
            ddd:2
        } */

/* Esercizio 56

Scrivi un programma che aggiunga ad una pagina html, senza contenuti testuali, i seguenti tag coi relativi contenuti:

    
    - h1: Libreria
    - h2: La mia libreria!
    - img: un’immagine a vostra scelta 

let h1 = document.createElement("h1")
h1.innerHTML = "Libreria"
document.body.append(h1)

let h2 = document.createElement("h2")
h2.innerHTML = "La mia libreria!"
document.body.append(h2)

let img = document.createElement("img")
img.src = "https://images.pexels.com/photos/220326/pexels-photo-220326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
document.body.append(img)
*/

/* Esercizio 57 Scrivi un programma che aggiunga un link ad una pagina html. Questo link dovrà avere come testo “Cerca su Google” e deve aprire su un’altra finestra la pagina di ricerca di google 

let linkGoogle = document.createElement("a")
linkGoogle.innerHTML = "Cerca su Google"
linkGoogle.href = "https://www.google.com/"
document.body.append(linkGoogle)

*/

/* 


Esercizio 58

Scrivi un programma che aggiunga nella pagina, creata nell’esercizio 33, i seguenti testi con le seguenti caratteristiche

- testo 1:
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


    caratteristiche: 
        font size: 18px
        font weight: bold
        color: red
        
- testo 2: 
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


    caratteristiche: 
        font style: italic
        tutto maiuscolo
        colore: verde


- testo 3:
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    
    caratteristiche: 
        - colore: grigio 

    let h3_1 = document.createElement("h3")
    h3_1.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    //h3_1.classList.add("h3_1")
    h3_1.style.color="red";
    h3_1.style.fontWeight= "bold";
    h3_1.style.fontSize= "18px";
    document.body.append(h3_1)

    let h3_2 = document.createElement("h3")
    h3_2.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
   
    h3_2.style.color="green";
    h3_2.style.fontStyle= "italic";
    h3_2.style.textTransform= "uppercase";
    document.body.append(h3_2)

    let h3_3 = document.createElement("h3")
    h3_3.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    h3_3.style.color="grey";
    document.body.append(h3_3)
*/

/*   Esercizio 59

    Scrivi un programma che aggiunga nella pagina, creata nell’esercizio 33, un elenco di libri riportando le seguenti informazioni
    
    - titolo
    - autore
    - categoria 

    
        let libri = [
          {
                  titolo: "Il Signore degli Anelli",
                  autore: "Tolkien",
                  categoria: "fantasy",
          },
          {
                  titolo: "Harry Potter",
                  autore: "Rowling",
                  categoria: "fantasy",
          },
          {
                  titolo: "Il Conte di Montecristo",
                  autore: "Dumas",
                  categoria: "narrativa classica",
          },
          {
                  titolo: "Dune",
                  autore: "Herbert",
                  categoria: "fantascienza",
          },
          {
                  titolo: "Fight Club",
                  autore: "Palahniuk",
                  categoria: "narrativa moderna",
          },
           
        ]

//function caricaLibri(listaLibri, libro) {
    
    
    libri.forEach((item) => {
        let li = document.createElement("li")
        li.innerHTML = item;
        document.body.append(li)
    });

*/

/* Esercizio 60 Scrivi un programma (funzione) che calcoli l’importo da pagare per i biglietti del cinema. Il programma dovrà prendere in input i seguenti dati:

- numero dei biglietti
- costo del singolo biglietto

Una volta avuti i dati bisognerà calcolare il totale e restituirlo 

function costoTotale(quantità, costoSingolo) {
  let totale = quantità * costoSingolo
    return totale

}

console.log("il costo totale del carrello del cinema è", costoTotale(2, 10))

*/


/* Esercizio 61

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) uno sconto espresso come numero. Questa sarà la percentuale di sconto da applicare al totale.

Esempio: 

- 2 biglietti
- 10 euro a biglietto
- 10 % sconto ()

risultato 18€ 


function costoTotale(quantità, costoSingolo) {
    let totale = quantità * costoSingolo

    let sconto10 = totale * 10 / 100

    let totaleScontato = totale - sconto10
    
    return totaleScontato
  
  }

  console.log("il tuo biglietto scontato è" , costoTotale(2, 10))

  */


  /* Esercizio 62

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) il giorno della settimana. 
In base al giorno applica le seguenti scontistiche:

- lunedi e martedi: - 10 % sul totale
- mercoledi: - 20% 

function applicaSconti(quantità, costoSingolo, giorno) {
    
    let totale = quantità * costoSingolo

    let sconto10 = totale * 10 / 100
    let sconto20 = totale * 20 / 100


    let totaleScontato10 = totale - sconto10
    let totaleScontato20 = totale - sconto20
    
switch(giorno) {
    case "lunedi":
    case "martedi":
        console.log("Oggi è giorno di sconti! Avrai uno sconto del 10%. Infatti devi pagare:", totaleScontato10)
    break;
    case "mercoledì":
        console.log("Oggi è giorno di sconti! Avrai uno sconto del 20%. Infatti devi pagare:", totaleScontato20)
    break;
    default:
        console.log("Oggi non è giorno di sconti, dovrai pagare il prezzo pieno di", totale)
    break
}}

console.log(applicaSconti(5, 10, "mercoledì")) // in questo modo devi dichiarare dentro il parametro direttamente da questo console.log, quindi 5 sono le quantita, 10 il costoSingolo e mercoledì il giorno

*/

/* Esercizio 63 - DIFFICILE - NON USCITO

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) una logica ad hoc per un altro sconto (callback).
A questa callback dovrai passare in input tutti i parametri che ti vengono passati nella funzione principale.
Crea tu una nuova logica di sconto ed applicalo al totale, dopo averlo calcolato seguendo le logiche usate fino ad ora. 
Hai la massima libertà riguardo a che tipologia di sconto applicare.

Esempio:
posso creare uno sconto in base al numero dei biglietti comprato: se compri 3 biglietti hai un ulteriore 5% di sconto, se ne prendi 5 invece sale al 10%. 

function applicaSconti(quantità, costoSingolo) {

    let totale = quantità * costoSingolo

    let sconto10 = totale * 10 / 100
    let sconto5 = totale * 5 / 100


    let totaleScontato10 = totale - sconto10

    if (quantità >= 3) {
        let scontoTrio = totaleScontato10 - sconto5
        console.log(`visto che hai acquistato 3 biglietti, ti diamo lo sconto super. Invece di pagare ${totale} pagerai ${scontoTrio}`)
    }
    else if (quantità >= 5) {
        let scontoQuinto = totaleScontato10 - 10 
        console.log(`visto che hai acquistato 5 biglietti, ti diamo lo sconto super. Invece di pagare ${totale} pagerai ${scontoQuinto} `)
    }
    else {
        console.log("scusa ma hai lo sconto solo se ne copri 3 o 5")
    }

}

console.log(applicaSconti(5, 10))

function costoTotale(quantità, costoSingolo, giorno, applicaSconti) {
    let totale = quantità * costoSingolo
 
    applicaSconti(quantità,costoSingolo)

  switch(giorno) {
    case "lunedi":
    case "martedi":
        console.log("Oggi è giorno di sconti! Avrai uno sconto del 10%. Infatti devi pagare:", totaleScontato10)
    break;
    case "mercoledì":
        console.log("Oggi è giorno di sconti! Avrai uno sconto del 20%. Infatti devi pagare:", totaleScontato20)
    break;
    default:
        console.log("Oggi non è giorno di sconti, dovrai pagare il prezzo pieno di", totale)
    break
  
}

 }
  
 console.log(costoTotale(applicaSconti(5,10))) */

 

 /* Esercizio 65 


 function aggiungiLibro (titolo, autore,) {

    titolo = "il barone rampante"
    autore = "Italo Calvino"

    let baseURL =  "www.lamiasuperlibreria.aulab/"
    let autoreUnito = autore.replaceAll(" ", "-") + "/" //al posto dello spazio mi metti il trattino
    //console.log(autoreUnito);
    let aMinuscolo = autoreUnito.toLowerCase() //mi metti tutto scritto in minuscolo
   // console.log(aMinuscolo);

    let titoloUnito = titolo.replaceAll(" ", "-") + ".html"
   // console.log(titoloUnito);
    let tMinuscolo = titoloUnito.toLowerCase()
    //console.log(tMinuscolo);

    let urlCompleto = baseURL + aMinuscolo + tMinuscolo 
   // console.log(urlCompleto)

console.log('<a href="'+urlCompleto+'"il barone rampante</a>')}

aggiungiLibro()

   */

/*Esercizio 66 

let giocatore1 = tiro()
let giocatore2 = tiro()

console.log(`al giocatore 1 è uscito ${giocatore1} - al giocatore 2 è uscito ${giocatore2}`)

switch (giocatore1) {
        case "Sasso":
        switch (giocatore2){
            case "Sasso":
                console.log();
                break
            case "Carta":
                console.log();
                break
            case "Forbice":
                console.log();
                break
        }
        break
        case "Carta":
        switch (giocatore2){
            case "Sasso":
                console.log();
                break
            case "Carta":
                console.log();
                break
            case "Forbice":
                console.log();
                break
        }
        break
        case "Forbice":
        switch (giocatore2){
            case "Sasso":
                console.log();
                break
            case "Carta":
                console.log();
                break
            case "Forbice":
                console.log();
                break
        }
        break
}



function tiro() {
    let segno = ["Sasso", "Carta", "Forbice"]
    return segno[Math.floor(Math.random() * (segno.length))]

    //sto assegnando un array con questi tre valori e randomicamente prendo uno degli array
}

*/

/* Esercizio 69 

let persone = [
    {
            nome: "Gino",
            cognome: "Ginoli",
            nuovoUtente: false
    },
    {
            nome: "Pino",
            cognome: "Pinoli",
            nuovoUtente: true
    }
]




let ul_1 = document.createElement("ul") //qui ho creato l'esterno della mia lista

document.body.append(ul_1) // ho appeso la l'esterno della lista

let listaPersone = persone.forEach(function(utente){ //abbiamo fatto il foreach per entrare nell'array
    console.log(utente)

    let liUtente = document.createElement("li")
    ul_1.append(liUtente)
    liUtente.classList.add("list-group-item") 
                                    //abbiamo fatto il for in per entrare nelle {}
    for (let dato in utente){ //utente è la variabile del for each entre "dato" è una variabile random
        liUtente.innerText = utente.nome + " " + utente.cognome +"  "
    
        if (utente.nuovoUtente === true) {
            let span = document.createElement("span")
            span.innerText = "New"
            span.setAttribute("class", "badge bg-secondary")
            liUtente.append(span)    
        }
    }

    
})

ul_1.classList.add("list-group")


console.log(listaPersone)

*/

/* Esercizio 70

let articoli = [
    {
            titolo: "Il realismo magico di Sergio Toppi",
            riassunto: `NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".`,
            link: "https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/",
            immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg"
    },
    {
            titolo: "Ma Gesù ascolta musica Punk? “Punk Rock Jesus” di Sean Murphy",
            riassunto: `Punk Rock Jesus""di Sean Murphy è un concentrato di azione ipercinetica, personaggi dai tratti estremi e satira caciarona dei costumi e della religione.`,
            link: "https://www.lospaziobianco.it/ma-gesu-ascolta-musica-punk-punk-rock-jesus-di-sean-murphy/",
            immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/03/Sean-Murphy-punk-rock-jesu-240x150.jpg"
    },
    {
            titolo: "La Zona Fantasma: i nuovi incubi Junji Ito",
            riassunto: `Una nuova raccolta di racconti recentissimi per il maestro dell’orrore giapponese nati per il web.`,
            link: "https://www.lospaziobianco.it/la-zona-fantasma-i-nuovi-incubi-junji-ito/",
            immagine: "https://www.lospaziobianco.it/wp-content/uploads/2023/02/genkai-chitai-junji-ito-bien-e1675344852796-340x195.jpg"
    }
]




let divEsterno = document.createElement("div") 

document.body.append(divEsterno) 
divEsterno.classList.add("row", "row-cols-1", "row-cols-md-2", "g-4")

let listaArticoli = articoli.forEach(function(articolo){
    console.log(articolo)

    let divCol = document.createElement("div")
    divEsterno.append(divCol)
    divCol.classList.add("col") 

    let divCard = document.createElement("div")
    divCol.append(divCard)
    divCard.classList.add("card") 


    let immagineArticolo = document.createElement("img")
    divCard.append(immagineArticolo)
    immagineArticolo.src = articolo.immagine
    
    let divCardBody = document.createElement("div")
    divCard.append(divCardBody)
    divCardBody.classList.add("card") 
    
    let cardTitle = document.createElement("h5")
    divCardBody.append(cardTitle)
    divCardBody.classList.add("card-title") 
    cardTitle.innerText = articolo.titolo

    let cardText = document.createElement("p")
    divCardBody.append(cardText)
    divCardBody.classList.add("card-text") 
    cardText.innerText = articolo.riassunto

    let bottone = document.createElement("a")
    divCardBody.append(bottone)
    bottone.classList.add("btn", "btn-primary")
    bottone.href = articolo.link
    bottone.innerText = "Leggi di più"
    bottone.target = "_blank"
  
})  */

/* Esercizio 72 


let bottoneDado = document.getElementById("lancia-dado")

bottoneDado.addEventListener("click", function(){
    let divDado = document.getElementById("dado")
    divDado.innerText = Math.floor(Math.random() * 10);

    console.log("Mi hai cliccato")

})
*/

/* Esercizio 73 

let bottoneGoogle = document.getElementById("ricerca-google")
let counter = 0 //gli abbiamo dato un counter cosi che quando arriviamo a 3 lui esce da questo cicloe mi mostra il sito web giusto
    bottoneGoogle.addEventListener("click", function(e) {
    counter ++
    alert("Clicca ancora scemo")
    if (counter < 3) {
        e.preventDefault()
    }})

*/

/* Esercizio 74 Crea un programma  che crei una lista usando il titolo dei libri.
Ogni titolo avrà al suo fianco un bottone con scritto “aggiungi ai preferiti”. Al click di uno specifico bottone verrà emesso un alert col seguente testo: 
        "Il libro {nome_del_libro} è stato aggiunto ai preferiti” 


const libri = [
{
        titolo: "Il Signore degli Anelli",
        autore: "Tolkien",
        categoria: "fantasy",
},
{
        titolo: "Harry Potter",
        autore: "Rowling",
        categoria: "fantasy"
},
{
        titolo: "Il Conte di Montecristo",
        autore: "Dumas",
        categoria: "narrativa classica"
},
{
        titolo: "Dune",
        autore: "Herbert",
categoria: "fantascienza"
},
{
        titolo: "Fight Club",
        autore: "Palahniuk",
categoria: "narrativa moderna"
}
];


let containerEsterno = document.createElement("div")
containerEsterno.classList.add("container", "my-4")
document.body.append(containerEsterno)

let ulLibreria = document.createElement("ul")
ulLibreria.classList.add("list-group", "row", "d-flex")
containerEsterno.append(ulLibreria)

let listaLibri = libri.forEach(function(libroSingolo){
    console.log(libroSingolo)
    
    let ilLibroSingolo = document.createElement("li")
    ilLibroSingolo.classList.add("list-group-item", "d-flex", "justify-content-between")
    ilLibroSingolo.innerText = libroSingolo.titolo
    ulLibreria.append(ilLibroSingolo)

    let bottonePreferiti = document.createElement("button")
    //bottonePreferiti.classList.add("justify-content-between")
    bottonePreferiti.innerText = "<3"
    ilLibroSingolo.append(bottonePreferiti)

    bottonePreferiti.addEventListener("click", function(){
    alert(`Il libro "${libroSingolo.titolo}" è stato aggiunto ai preferiti`)
})})

*/

/* Esercizio 76-77-78 */


function stampaPost() {

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    //console.log(response)
    return response.json()
})
.then(function(listaPost) {
    console.log(listaPost)
    
    let ulEsterno = document.createElement("ul")
    ulEsterno.classList.add("list-group")
    document.body.append(ulEsterno)

    listaPost.forEach(postSingolo => {
        console.log(postSingolo)
       
        let li = document.createElement("li")
        ulEsterno.append(li)
        li.classList.add("list-group-item")
        li.innerText = postSingolo.title

        let bottoneEspandi = document.createElement("button")
        bottoneEspandi.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
        </svg>`
        bottoneEspandi.classList.add("m-2")
        li.prepend(bottoneEspandi)
        bottoneEspandi.addEventListener("click", event => modale(postSingolo.title, postSingolo.body))


    })

})
}

function modale(title, body){
    let modale = document.createElement("div")
    document.body.append(modale)
    modale.classList.add("modal")
    modale.setAttribute("tabindex", "-1")
    modale.innerHTML = ` <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"> ${title} </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${body}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>`

   const myModal = new bootstrap.Modal(modale)
    myModal.show()
}



stampaPost()
