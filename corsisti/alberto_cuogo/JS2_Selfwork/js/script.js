console.log("File script.js caricato!");

/*
// ! Esercizio 8
let numero10 = 10;
let numero20 = 20;
let numero35 = 35;
let numero50 = 50;
let numero70 = 70;

let somma = numero10 + numero20 + numero35 + numero50 + numero70;
let media = somma / 5;

console.log(`La somma è: ${somma}`);
console.log(`La media è: ${media}`);


// ! Esercizio 9
let numero1 = prompt(`Inserisci un numero da 1 a 100`);
let numero2 = prompt(`Inserisci un numero da 1 a 100`);
let numero3 = prompt(`Inserisci un numero da 1 a 100`);
let numero4 = prompt(`Inserisci un numero da 1 a 100`);
let numero5 = prompt(`Inserisci un numero da 1 a 100`);

let sommaDinamica = +numero1 + +numero2 + +numero3 + +numero4 + +numero5;
let mediaDinamica = sommaDinamica / 5;

console.log(`La somma dei numeri inseriti è: ${sommaDinamica}`);
console.log(`La media dei numeri inseriti è: ${mediaDinamica}`);


// ! Esercizio 10
let oggi = new Date();
let annoCorrente = oggi.getFullYear();
let annoNascita = prompt("Inserisci il tuo anno di nascita");

let età = +annoCorrente - +annoNascita;
let anniMancantiA100 = 100 - età;

console.log(`La tua età è: ${età} anni`);
console.log(`Ti mancano ${anniMancantiA100} anni per arrivare ai 100 anni`);


// ! Esercizio 11
let nome = prompt(`Inserisci il tuo Nome`);
let nomePrimaLetteraMaiuscola = nome.charAt(0).toUpperCase() + nome.slice(1);

console.log(`Il tuo Nome con la prima lettera Maiuscola è: ${nomePrimaLetteraMaiuscola}`);


// ! Esercizio 12
let numeroTelefono = prompt(`Inserisci il tuo numero di telefono (MAX 10 NUMERI)`);
let numeroTelefonoNascosto = numeroTelefono.replace(/^(\d{7})/, `*******`); 
// ^(\d{7}) è un espressione regolare con ^ che indica l'inizio della stringa e ciò che è dentro le () è il gruppo di cattura

console.log(`Il tuo numero di telefono è: ${numeroTelefonoNascosto}`);


// ! Esercizio 13
let n1 = prompt("Scrivi un numero");
let n2 = prompt("Scrivi un numero");
let n3 = prompt("Scrivi un numero");
let n4 = prompt("Scrivi un numero");
let n5 = prompt("Scrivi un numero");

let numeroMinore = Math.min(n1, n2, n3, n4, n5);
let numeroMaggiore = Math.max(n1, n2, n3, n4, n5);

console.log(`Il numero minore che hai inserito è: ${numeroMinore}`);
console.log(`Il numero maggiore che hai inserito è: ${numeroMaggiore}`);

*/
// ! Esercizio 14
let numeroDecimale1 = 0.1;
let numeroDecimale2 = 0.2;

let sommaDecimale = (numeroDecimale1 + numeroDecimale2);

console.log(`La somma dei due numeri decimali 0.1 e 0.2 è: ${sommaDecimale.toFixed(1)}`);


// ! Esercizio 15
let numeroRandom = Math.floor(Math.random() * 6) + 1;

console.log(`Ecco un numero intero random tra 1 e 6: ${numeroRandom}`);

// ! Esercizio 16
let GattiTotali = +prompt(`Inserisci il numero totale di gatti`);
let GattiPerFila = +prompt(`Inserisci il numero di gatti che ci sono in ogni fila`);

let GattiMancanti = GattiPerFila - (GattiTotali - (GattiPerFila * Math.floor(GattiTotali / GattiPerFila)))

console.log(`I gatti totali sono: ${GattiTotali}`)
console.log(`Mancano ${GattiMancanti} per completare una nuova fila`)