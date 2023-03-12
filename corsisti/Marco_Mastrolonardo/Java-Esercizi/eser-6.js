//Recap ed esercizi 19 e 20 dell'esercitazione-5
/*

let password = prompt("PASSWORD")
console.log(`la password inserita è: ${password}`)
console.log(`Lunghezza password: ${password.length}`)

let lunghezzaMinimaRispettata = true

let lunghezzaMassimaRispettata = true

console.log("Controllo lunghezza minima")

if (password.length < 6) {
lunghezzaMinimaRispettata = false
}

console.log("Lunghezza minima rispettata:", lunghezzaMinimaRispettata)

console.log("controllo lunghezza massima")

if (password.length > 20) {
lunghezzaMassimaRispettata = false
}
console.log("Lunghezza massima rispettata:", lunghezzaMassimaRispettata)

console.log("controllo presenza simboli")

let simboliPresenti = false
let stringaCaratteriSimboli = "!_-"
let numeriPresenti = false
let stringaNumeri = "0123456789"


for (let i = 0; i < password.length; i++) {
    let singoloCarattere = password.charAt(i)
    console.log("carattere da analizzare:", singoloCarattere)

    if (stringaCaratteriSimboli.includes(singoloCarattere)) {
        simboliPresenti = true
    }
    if (stringaNumeri.includes(singoloCarattere)) {
        numeriPresenti = true
    }
}
console.log("controllo presenza simboli - rispettato?", simboliPresenti)
console.log("controllo presenza numeri - rispettato?", numeriPresenti)

*/

/*
ESERCIZIO 23 Pari o dispari. Dichiaro un array, il numero di elementi che voglio all'interno di quest'utlimo ed il valare massimo che devono evere. Creo un ciclo per generare i valori random e tramite "pusharli" alkl'interno dell'array. Per ogni elemento dell'array se il numero diviso 2 non da resto è pari ,se no è dispari.
https://www.youtube.com/watch?v=HGzcPAUmXE0

const arr = []
let numeroElementi = 10
let max = 10
for (let i=0;i<numeroElementi;i++) {
    arr.push(Math.floor(Math.random() *max) + 1)
}
console.log(arr)

arr.forEach(numero => {
    if (numero % 2 == 0){
        console.log(numero,"è pari")
    }
    else {
        console.log(numero,"è dispari")
    }
});
*/

/*
ESERCiZIO 24
let mese = prompt("inserisci il mese")

switch(mese) {
    case "Gennaio":
        console.log("31 giorni")
        break;
    case "Febbraio":
        console.log("28 giorni")
        break;
    case "Marzo":
        console.log("31 giorni")
        break;
    case "Aprile":
        console.log("30 giorni")
        break;
    case "Maggio":
        console.log("31 giorni")
        break;
    case "Giugno":
        console.log("30 giorni")
    case "Luglio":
        console.log("30 giorni")
        break;
    case "Agosto":
        console.log("31 giorni")
        break;
    case "Settembre":
        console.log("30 giorni")
        break;
    case "Ottobre":
        console.log("31 giorni")
        break;
    case "Novembre":
        console.log("30 giorni")
        break;
    case "Dicembre":
        console.log("31 giorni")
        break;
    default:
        "mese non valido"
        prompt("inserisi il mese corretto")
}
*/

/*ESERCIZIO 25

//array contenente i film Fantasy
const Fantasy = ["Il Signore degli Anelli", "Willow", "Conan il barbaro", "Taron e la pentola magica", "Big Fish", "Coraline e la porta magica"]
console.log(Fantasy)
//console.log(Fantasy.lenght) per ottenere il numero di elementi contenuti nell'array

//array contenente i film Horror
const Horror = ["Il gabinetto del dottor Caligari", "L’occhio che uccide", "La cosa", "La notte dei morti viventi", "Alien", "Dracula"]
console.log(Horror)

//array contenente i film Thriller
const Thriller = ["TAXI DRIVER", "C'ERA UNA VOLTA IN AMERICA", "IL PADRINO", "PULP FICTION", "PSYCO", "IL PADRINO - PARTE II"]
console.log(Thriller)

//Numero di elementi (film) contenuti in ogni singola categoria
let numeroFilm = 6 
//oppure nomeArrey.lenght per conoscere il numero di elementi contenuti nell'arrey.

//Array contenente le categorie dei film 
const Categorie = [Fantasy, Horror, Thriller]

//Calcolare un numero random da 0 a 6
let random = Math.floor(Math.random() * numeroFilm)

//Valori accettati nel prompt
const CategorieAccettate =  ["Fantasy", "Horror", "Thriller"]
//Array reso come stringa tramite ArrayName.join()
let text = CategorieAccettate.join()
console.log("le categorie accettate nel form sono:", text)

//Facciamo scegliere una categoria all'utente
let categoria = prompt("inserisci una categoria di film tra queste:", text)

//per vedere se la categoria scelta dell'utente sia contenuta in un ARRAY
let validità = CategorieAccettate.includes(categoria)
console.log("La categoria è accettata?", validità)

//Metodo con if.
if (validità = true) {
    if (categoria === "Fantasy") {
        console.log("ti consiglio:", Fantasy[random])
    }
    else if (categoria === "Horror"){
        console.log("ti consiglio:", Horror[random])
    }
    else if (categoria === "Thriller") {
        console.log("ti consiglio:", Thriller[random])
    }
    else {
        console.log("Categoria non corretta! Ricorda che le categorie disponibili sono:", CategorieAccettate)
    }
}


//Metodo con if senza bisogno della validità
if (categoria === "Fantasy") {
    console.log(Fantasy[random])
}
else if (categoria === "Horror"){
    console.log(Horror[random])
}
else if (categoria === "Thriller") {
    console.log(Thriller[random])
}
else {
    alert("categoria non valida")
}
*/
 
/*Esercizio 26
//Controllo età
let eta = prompt("eta")
//Caratteri consentiti nell
let carattericonsentitiperetà = "0123456789"

for (let i=0; i<eta.length; i++){
    let singoloCarattereetà = eta.charAt(i)
    console.log(singoloCarattereetà)
    if(carattericonsentitiperetà.includes(singoloCarattereetà)) {
        let validitàEtà = true
        console.log(`è ${singoloCarattereetà} valido?: ${validitàEtà}`)
    }
    else {
        validitàEtà = false
        console.log(`è ${singoloCarattereetà} valido?: ${validitàEtà}`)
    }
}
if (eta >= 18 && eta < 95) {
    console.log(`Controllo 1: Conducente ha un'eta di: ${eta} quindi può guidare`)
}
else {
    console.log(`Controllo 1: Conducente ha un'eta di: ${eta} quindi non può guidare`)
}

//controllo patente
let patente = prompt("Hai la patente?")
const RisposteConsentitePerPatente = ["si", "no"]

if (RisposteConsentitePerPatente.includes(patente)) {
    if (patente === "si") {
    let validitàPatente = true
    console.log(`Il conducente è provvisto di patente? ${validitàPatente}`)
    }
    else if (patente === "no") {
    validitàPatente = false
    console.log(`Il conducente è provvisto di patente? ${validitàPatente}`)
    }
}
else {
    alert("rispondi si o no, HAI CAPITO?!")
}

//controllo assicurazione
let assicurazione = prompt("Hai l'assicurazione?")
const RisposteConsentitePerAssicurazione = ["si", "no"]

if (RisposteConsentitePerAssicurazione.includes(assicurazione)) {
    if (assicurazione === "si") {
        let validitàAssicurazione = true
        console.log(`Il conducente è provvisto di assicurazione? ${validitàAssicurazione}`)
    }
    else if (assicurazione === "no") {
        let validitàAssicurazione = false
        console.log(`Il conducente è provvisto di assicurazione? ${validitàAssicurazione}`)
    }
}
else {
    alert("rispondi si o no, HAI CAPITO?!")
}

//Controllo punti
let punti = Math.floor(Math.random() *20)+1
console.log("I punti del conducente sono:", punti)

if (punti < 10) {
    console.log("MH, Hai pochi punti ragazzo sono solo:", punti)
    let validitàPunti = true
    console.log("I punti sono validi?", validitàPunti)
}
else if (punti = 0) {
    console.log("Ragazzo, ti devo arrestare non hai punti")
    validitàPunti = false
    console.log("I punti sono validi?", validitàPunti)
}
else {
    validitàPunti = true
    console.log("I punti sono validi?", validitàPunti)
}

in questo modo se una condizione non è verificata non preseguono altri controlli

let anni = prompt("quanti anni hai?")
let rispostePerPatente = ["Si", "si", "SI"]
let risposteNegativePerPatente = ["No", "no", "NO"]
let rispostePerAssicurazione = ["Si", "si", "SI"]
let risposteNegativePerAssicurazione = ["No", "no", "NO"]

if (+anni > 18) {
 let patente = prompt("Patente")

 if (rispostePerPatente.includes(patente)) {
    let assicurazione = prompt("Assicurazione")
    if (rispostePerAssicurazione.includes(assicurazione)) {
        let puntiPatente = Math.floor(Math.random() *(20 - 0 +1) + 0)
        console.log(`vediamo un po, hai ${puntiPatente} punti sulla patente`)
        if (puntiPatente > 10) {
            console.log("Vada pure")
        }
        else if (puntiPatente < 10 && puntiPatente !== 0) {
            console.log(`Ragazzo hai ${puntiPatente} punti sulla patente, son pochi ma puoi andare`)
        }
        else if (puntiPatente === 0){
            console.log("Per questa volta chiudo un'occhio")
        }
    }
    else if (risposteNegativePerAssicurazione.includes(assicurazione)){
        console.log("Non hai l'assicurazione, sono cazzi tuoi ora")
    }
    else {
        alert("Rispondi Si o No hai capito?!")
    }
 }
 else if (risposteNegativePerPatente.includes(patente)) {
    console.log("Non hai la patente, non puoi guidare")
 }
 else {
    alert("Rispondi Si o No hai capito?!")
 }
}
else {
    console.log("Spero che sia una macchina giocattolo")
}
*/
/*
Calcolatrice
Crea un programma che simuli una calcolatrice!!
Chiedi all’utente di inserire 2 numeri ed un simbolo matematico ed esegui l’operazione corrispondente
    es: 
        input1: 10
        input2: 20
        input3: +
        risultato: 10 + 20 = 30
 
 let factor1 = prompt(`dimmi il primo valore`)
 let factor2 = prompt(`dimmi il secondo valore`)
 let operation = prompt(`dimmi l'operazione(simbolo)`)
 factor1 = +factor1
 factor2 = +factor2
 if (operation == `+`) {
    let risultato = factor1 + factor2
    console.log(risultato);
 }else if ( oprazione == `*`){
    let risposta = factor1 * factor2
    console.log(risultato);
 }else if ( oprazione == `/`){
    let risposta = factor1 / factor2
    console.log(risultato);
 }else if ( oprazione == `-`){
    let risposta = factor1 - factor2
    console.log(risultato);
 }else {
    alert (`hai sbagliato qualcosa`)
 }
 */

/*Esercizio 28
const NumeriPari1a100 = []
let maxvalore = 100
for (let i=1;i<maxvalore+1;i++){
    if (i % 2 == 0) {
        NumeriPari1a100.push(i)
    }
    else {

    }
}
console.log(NumeriPari1a100)
const RaccoltaPari = []
const RaccoltaDispari = []
let max = 100
for (let i=1;i<max+1;i++){
    if (i % 2 == 0) {
        RaccoltaPari.push(i)
    }
    else {
        RaccoltaDispari.push(i)
    }
}
console.log("Questa è la raccolta di numeri dispari", RaccoltaDispari)
console.log("Questa è la raccolta di numeri pari", RaccoltaPari)

let max = 100
const Arr = []

for (let i=1;i<max+1;i++) {
    Arr.push(i)
}
Arr.forEach(numero => {
    if(numero % 2 == 0) {
        console.log(numero, "pari")
    }
    else {
      console.log(numero, "dispari")
    }
})
*/

/*
ESERCIZIO 29


let max = 10
const Numeri = []
for(let numero=0;numero<max+1;numero++){
    Numeri.push(numero)
}
console.log(Numeri)

let lunghezza_Numeri = Numeri.length
console.log("lunghezza array 'Numeri'=",lunghezza_Numeri)

//Ciclo per prendere singolarmente ogni elemento di
for(let i = 0;i<lunghezza_Numeri;i++) {
    console.log("numero",Numeri[i])
    for(let moltiplicatore = 0;moltiplicatore<max+1;moltiplicatore++){
        let risultato = Numeri[i]*moltiplicatore
        console.log(`${Numeri[i]} * ${moltiplicatore} = ${risultato}`)
    }
}
*/
let max = 10
const ValoriDaMoltiplicare = []

for(let numero=0;numero<=max;numero++) {
    ValoriDaMoltiplicare.push(numero)
}
console.log("Array contenente i numeri da moltiplicare",ValoriDaMoltiplicare)

let lunghezza = ValoriDaMoltiplicare.length
console.log("questa è la lunghezza dell'array", lunghezza)
//Per prendere singolarmente i valori dell'array "ValoriDaMoltiplicare"
for (let i=0;i<lunghezza;i++) {
 console.log("tabellina del", ValoriDaMoltiplicare[i])
 for(let addendo=0;addendo<=10;addendo++){
    let risultato = ValoriDaMoltiplicare[i] * addendo
    console.log(`${ValoriDaMoltiplicare[i]} * ${addendo} = ${risultato}`)
 }
}

