//Scrivi un programma che dato un nome in input, converta solo la prima lettera in maiuscolo

let insertName = prompt("Inserisci il tuo nome");
let insertNameMin = insertName.slice(1);
let insertNameMaiusc = insertName.charAt(0).toUpperCase();
alert(insertNameMaiusc+insertNameMin);

let word = prompt("Inserisci una parola");
let wordMin = word.charAt(0);
let wordMaiusc = word.charAt(0).toUpperCase();
let completeWord = word.replace(wordMin, wordMaiusc);
alert(completeWord)
