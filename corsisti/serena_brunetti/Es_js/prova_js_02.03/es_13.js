//Scrivi un programma che dati 5 numeri restituisca in output il numero minore ed il numero maggiore

let insertNumberString = prompt("Inserisci 5 numeri separati da uno spazio");
let number1 = insertNumberString.split(' ');
//let seriesOfNumbers = [5, 6, 8, 23, 253]
let numberArray = number1.map(Number);
let numberMin = Math.min(...numberArray);
alert("Il numero minore tra quelli che hai inserito è: " + numberMin);
let numberMax = Math.max(...numberArray);
alert("Il numero maggiore tra quelli che hai inserito è: " + numberMax);