//Esercizio 46-------------------------------------------------------------

/*Scrivi una funzione che, data una frase, ritorni la prima lettera di ogni parola presente nella frase:
es: 
input: “Ciao sono un esercizio sui metodi avanzati degli array” 
output: Csuesmada*/


/*function firstLetter(str) {
    str = str.split(" ");
    for (let i = 0; x = str.length; i < x; i++) {
        str[i] = [i][0].toUpperCase() + str[i](1);
    }
    return str.join(" ");
}

console.log(firstLetter("Ciao sono un esercizio sui metodi avanzati degli array"));*/

/*console.group("Esercizio 46")

function prendiPrimaLettera(str) {
    let primaLettera = str
      .split(' ') //.split divide tutte le lettere una per una
      .map(singolaParola => singolaParola.charAt(0)) //.map divide le parole una ad una e tramite la arrow function impone di prendere con charAt(0) la prima lettera di ogni parola
      .join(''); //.join le unisce tutte, se provi a toglierlo ti darà tutte le lettere staccate da una virgola
  
    return primaLettera; //obbligatorio quando usi il map
  }
  
  console.log(prendiPrimaLettera('Ciao sono un esercizio sui metodi avanzati degli array'));

  console.groupEnd();*/

//Esercizio 47-------------------------------------------------------------

console.group("Esercizio 47")

/*Scrivi una funzione crei un unico array unendo gli array innestati
   es:
     input:
     [
         ["abc", "gino", "aaa"],
         ["abc", "dino", 123],
         ["aaa", "gino", 321],
         ["xyz", "klm", "aaa"],
     ]
     
     output

        ["abc", "gino", "aaa", "abc", "dino", 123, "aaa", "gino", 321, "xyz", "klm", "aaa”]*/

let parole = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]
console.log (parole)

let unicoArr = parole.reduce((elemento, numero) => { //elemento è il valore finale
    return elemento.concat(numero)
})

console.log(unicoArr)

console.groupEnd();


//Esercizio 48-------------------------------------------------------------

/*Scrivi una funzione che, dato un array di numeri, ritorni la somma dei numeri divisibili per 2:
es: 
input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
output: 2 + 4 + 6 + 8 = 20*/

console.group("Esercizio 48")

listaNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// con questo filter sto selezionando tutti i numeri divisibili per due
let listaFiltrata = listaNumeri.filter(function (numero) {
    return numero % 2 == 0;
})

// con questo forEach invece sto effettuando la somma di tutti i numeri divisiili per due

function sommaListaFiltrata(listaFiltrata) {
    let somma = 0;
    let tiLoddio = ""
    listaFiltrata.forEach(numero => { // elemento per elemento, equiparalo alla [i] per capirne la funzione
        tiLoddio += numero + " + ";
        somma += numero;
    });
    console.log(tiLoddio)
    console.log(somma);
    return somma;
}


sommaListaFiltrata(listaFiltrata);

console.groupEnd();


















console.group("Esercizio 45")












console.groupEnd();





