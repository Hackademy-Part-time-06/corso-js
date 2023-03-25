/*Scrivi un programma che dato: 
- Un numero totale di gatti 
- Il numero dei gatti presenti in ogni fila 
Restituisca in output: 
- Il numero totale delle file 
- il numero di gatti mancanti per completare una nuova fila*/

let totalCats = prompt("Inserisci il numero totale di gatti:")
let catsToLine = prompt("Inserisci quanti gatti vuoi disporre per ogni fila:")
let numberLines = Number(totalCats) / Number(catsToLine);
let numberLinesApprossimate = Math.floor(numberLines);
let restCats = totalCats % catsToLine;
let remainCats = catsToLine - restCats;
alert("Il numero totale delle file è: " + numberLinesApprossimate);
alert("Il numero di gatti mancanti per completare una nuova fila è: " + remainCats)
/*console.log("Il numero totale delle file è: ", numberLinesApprossimate);
console.log("Il numero di gatti mancanti per completare una nuova fila è: ", remainCats);*/