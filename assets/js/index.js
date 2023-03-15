
/*
let lista1 = [10, 20, 30];
let lista2 = [5, 10, 15];


let risultato = [];
for (let i = 0; i < lista1.length; i++) {
    let numeroDiArray1 = lista1[i];
    let numeroDiArray2 = lista2[i];
    console.log("FOR", numeroDiArray1, numeroDiArray2)
    risultato.push(numeroDiArray1 + numeroDiArray2); // return
}

console.log("lista1", lista1);
console.log("lista2", lista2);
console.log("Risultato", risultato);





let listaNumeri = [10, 20, 30];

let nuovaLista = listaNumeri.map(function(elemento) {
    console.log(elemento);

    return elemento + "asd"
})

console.log("Lista originale", listaNumeri);
console.log("Nuova lista", nuovaLista);



let listaNumeri = [10, 20, 30];

// OUTPUT FINALE tutti + 10 -> 20, 30, 40

let risultato = listaNumeri.map(function(elemento) {
    console.log(elemento)
    return elemento + 10;
})


console.log("Lista originale", listaNumeri);
console.log("Nuova lista", risultato);


let frase = "Sono una frase";


let listaPrimeLettere = frase.split(" ").map(function(elemento) {
    console.log(elemento)
    return elemento.charAt(0);
})

console.log("lista prime lettere", listaPrimeLettere);


let risultatoUnico = frase.split(" ").reduce(function(totale, elemento) {

    totale = totale + elemento.charAt(0);

    return totale

}, "")


console.log("risultato lettere", listaPrimeLettere);







*/
























let listaNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// con questo filter sto selezionando tutti i numeri divisibili per due
let listaFiltrata = listaNumeri.filter(function (numero) {
    return numero % 2 == 0;
})



function sommaListaFiltrata(listaFiltrata) {
    let somma = 0;
    let tiLoddio = ""
    listaFiltrata.forEach((numero, index) => { // elemento per elemento, equiparalo alla [i] per capirne la funzione
        somma += numero;

        tiLoddio += numero;

        if (listaFiltrata.length === index + 1) {
            tiLoddio += " = " + somma;
        }
        else {
            tiLoddio += " + ";
        }

    });
    console.log(tiLoddio)
    console.log(somma);
    return somma;
}


sommaListaFiltrata(listaFiltrata);
