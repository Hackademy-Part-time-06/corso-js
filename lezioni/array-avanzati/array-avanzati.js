
"use strict"


var lista = ["a", "b", "c", "d"];


// FOR - ciclo semplice sugli elementi dell'array
for (var i = 0; i < lista.length; i++) {
  console.log(lista[i].toUpperCase());
}

// FOREACH - passo una callback nella quale mi viene passato in input l'elemento dell'array e, eventualmente, l'indice
// https://www.w3schools.com/jsref/jsref_foreach.asp
var nuovaListaConForEach = [];
lista.forEach(function(elementoArray, index) {
    console.log("elementoArray = ", elementoArray);
    console.log("index = ", index);
    nuovaListaConForEach.push(elementoArray.toUpperCase());
});


// MAP - crea e ritorna un array ciclando sull'array al quale viene applicato. Gli elementi che costituiranno il nuovo array 
// sono quelli che ritorno io nella callback tramite il return di un determinato valore
// https://www.w3schools.com/jsref/jsref_foreach.asp
var nuovaListaMap = lista.map(function(elementoArray, index) {
    console.log("elementoArray = ", elementoArray);
    console.log("index = ", index);
    return elementoArray.toUpperCase();
});




var listaNumerica = [10, 20, 30, 40, 50, 60, 70];

// REDUCE - crea e ritorna un valore aggregato ciclando sull'array al quale viene applicato. L'elemento aggregato viene
// generato dagli amenti che ritornoio nella callback tramite il return di un determinato valore
// https://www.w3schools.com/jsref/jsref_foreach.asp
var valoreAggregatoReduce = listaNumerica.reduce(function(elementoFinale, elementoArray, index) {
  console.log("elementoFinale = ", elementoFinale);
  console.log("elementoArray = ", elementoArray);
  console.log("index = ", index);
  return elementoFinale += elementoArray;
});

// posso specificare un valore col quale inizializzare la variabile che mi verrà ritornata
var valoreAggregatoReducePartendoDa100 = listaNumerica.reduce(function(elementoFinale, elementoArray, index) {
  console.log("elementoFinale = ", elementoFinale);
  console.log("elementoArray = ", elementoArray);
  console.log("index = ", index);
  return elementoFinale += elementoArray;
}, 100);



// ESEMPIO

// STEP 1 - filtra 
var numeriMaggioridi25 = listaNumerica.filter(function(elementoArray) {
  return elementoArray > 25;
}); // [30, 40, 50, 60, 70]

// STEP 2 - incrementa 
var listaNumeriMaggioriDi25Per10 = numeriMaggioridi25.map(function(elementoArray) {
  return elementoArray * 10;
}); // [300, 400, 500, 600, 700]

// STEP 3
var risultatoDopoReduce = listaNumeriMaggioriDi25Per10.reduce(function(totale, elemento, index) {
  return totale + elemento;
}); // 2500