//Scrivi un programma che dato l'anno corrente e un anno di nascita determini: l'età della persona, quanti anni sono necessari per raggiungere i 100, restituisca in output (console.log o alert) entrambi i risultati.

let currentYear = 2023;
let bornYear = prompt("In che anno sei nato/a?");
let bornYear1 = Number(bornYear);
let age = currentYear-bornYear1;
alert("La tua età è: " + age);
let yearsToDie = 100;
let yearsRemainToDie = yearsToDie-age;
alert("Alla morte ti rimangono: " + yearsRemainToDie);