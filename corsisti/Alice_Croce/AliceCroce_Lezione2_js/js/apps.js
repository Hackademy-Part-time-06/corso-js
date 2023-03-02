//Esercizio 8
/*let a = 10;
let b = 20;
let c = 35;
let d = 50;
let e = 70;

let Somma = a + b + c + d + e;

console.log(Somma);

let f = 5;

let Media = Somma / f;

console.log (Media);*/

//Esercizio 9
/*let aa = +prompt("Inserisci un numero");
let bb = +prompt("Inserisci un numero");
let cc = +prompt("Inserisci un numero");
let dd = +prompt("Inserisci un numero");
let ee = +prompt("Inserisci un numero");

let SommaEs9 = aa + bb + cc + dd + ee;

console.log(SommaEs9);

let MediaEs9 = SommaEs9 / 5;

console.log(MediaEs9);*/

//Esercizio 10
let AnnoCorrente = 2023;

let AnnoNascita = 2000;

let age = AnnoCorrente - AnnoNascita;

console.log(age);

let Verso100 = 100 - age;

//Esercizio 11
/*let Nome = prompt("Inserisci il tuo nome");

let resultName = Nome.charAt(0).toUpperCase() + Nome.slice(1);

console.log("Nome con maiuscola:", resultName);*/

//Esercizio 12
let numeroDiTelefono = "3285815178";

numeroDiTelefono = "*******" + numeroDiTelefono.slice(-3);

console.log("NonSiVede", numeroDiTelefono);

//Esercizio 13 - BONUS
console.log(Math.min(0, 150, 30, -20, 38));

console.log(Math.max(0, 150, 30, -20, 38));

//Esercizio 14 - BONUS
let primo = 0.1;
let secondo = 0.2;

let sommaDecimale = primo + secondo;

let nuoviNumeri = sommaDecimale.toFixed(2);

console.log(nuoviNumeri);

//Esercizio 15 - BONUS
Math.floor(Math.random() * 6) + 1;

console.log(Math.floor(Math.random() * 6) + 1);

//Esercizio 16 - BONUS 

let NumeroGatti = 44;

let FilaGatti = 6;

let NumeroTotaleFile = Math.round(NumeroGatti / FilaGatti);

console.log(NumeroTotaleFile);

let ModuloGatti = NumeroGatti % FilaGatti;

console.log(ModuloGatti);

let GattiMancanti = FilaGatti - ModuloGatti;

console.log(GattiMancanti);














