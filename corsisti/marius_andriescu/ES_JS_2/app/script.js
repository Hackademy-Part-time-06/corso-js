
//Esercizio 8
console.log("Somma: " + (10 + 20 + 35 + 50 + 70) );
console.log("Media: " + (10 + 20 + 35 + 50 + 70)/5);

//Esercizio 9
let n1 = prompt("Inserisci il numero: ");
let n2 = prompt("Inserisci il numero: ");
let n3 = prompt("Inserisci il numero: ");
let n4 = prompt("Inserisci il numero: ");
let n5 = prompt("Inserisci il numero: ");

let cal1 =+ n1;
let cal2 =+ n2;
let cal3 =+ n3;
let cal4 =+ n4;
let cal5 =+ n5;

console.log("Somma: " + (cal1 + cal2 + cal3 + cal4 + cal5));
console.log("Media: " + (cal1 + cal2 + cal3 + cal4 + cal5)/5);

//Esercizio 10
let eta = prompt(" Inserisci il tu anno di nascita: ");
const d = new Date();
let year = d.getFullYear();

console.log("La tua eta' e': " + (year - eta));
console.log("Per raggiungere i 100 anni ti mancano: " + (100 - (year - eta)));

//Esercizio 11
let nome = prompt("Inserisci il tuo nome: ");
let up = nome.charAt(0).toUpperCase() + nome.slice(1);
console.log(up);

//Esercizio 12
let numeroTel = prompt("Inserisci il tuo numero di telefono");
console.log("*******", numeroTel.slice("7, 10"));

//Esercizio 13
console.log(Math.max(23, 43 ,65 ,73 ,21));
console.log(Math.min(34, 76, 21, 54, 65));

//Esercizio 14
let numDec1 = 0.1;
let numDec2 = 0.2;

somma = numDec1 + numDec2;

console.log("La somma dei due numeri e': " + somma.toFixed(2));

//Esercizio 15
console.log(Math.floor(Math.random() * 6 ) + 1 );

//Esercizio 16
let Gatti = 44;
let GattiFila = 6;
let File = Math.round( Gatti / GattiFila );
console.log( File );
let modulo = Gatti % GattiFila;
console.log( modulo );
let GattiMancanti= GattiFila - modulo;
console.log( GattiMancanti );