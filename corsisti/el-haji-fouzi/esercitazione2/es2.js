// esrcizi FLOWCHART E TIPI
// LEZIONE 2 - FLOWCHART E TIPI
// esercizio-8
 var somma = (10+20+35+50+70);
var media = ((10+20+35+50+70)/5)
console.log(somma +""+media);

//================================================================
// esercizio-9
var numOne = prompt("Enter you number");
var numToo = prompt("Enter you number");
var numTree = prompt("Enter you number");
var numFoor = prompt("Enter you number");
var numFive = prompt("Enter you number");

//passare i numeri alle variabili di appoggio
var calculat1 =+ numOne;
var calculat2 =+ numToo;
var calculat3 =+ numTree;
var calculat4 =+ numFoor;
var calculat5 =+ numFive;

console.log("the sum is :" +(calculat1+calculat2+calculat3+calculat1+calculat3+calculat4+calculat4));
console.log("la media :" +(calculat1+calculat2+calculat3+calculat4+calculat5)/5);


//================================================================
//esercizio-10
let annoCorrente = Number(prompt("Enter the corrent year: "));
let annoNascita = Number(prompt("Enter your bearthyear: "));
let age = (annoNascita-annoCorrente);
console.log("your age is :" + age);
let rimanenza = age - 100;
alert("ti rimane :" + rimanenza);

//================================================================
//esercizio-12

let nome = prompt("Inserisci il tuo nome: ");
let up = nome.charAt(0).toUpperCase() + nome.slice(1);
console.log(up);

//================================================================



//esercizio-13

let numeroTel = prompt("Enter your phone number");
console.log("********",numeroTel.slice(7,10));


//esercizio -14
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let num3 = prompt("Enter the tird number");
let num4 = prompt("Enter the forth number");
let num5 = prompt("Enter the fift number");

numbers = parseInt(num1,num2,num3,num4,num5);



console.log(Math.min(num1+ num2+ num3+ num4+ num5));

