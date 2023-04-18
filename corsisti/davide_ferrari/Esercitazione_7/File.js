// Esercizio 46

/*
Scrivi una funzione che, data una frase, ritorni la prima lettera di ogni parola presente nella frase:
es: 
input: “Ciao sono un esercizio sui metodi avanzati degli array” 
output: Csuesmada
*/

/*

        array = ["Ciao", "Mi", "Chiamo", "Davide"];
        console.log(array);
        let lista = "";
        let parola = "";
        let lettera = "";
        let sommaLettere = "";

        for(let i = 0; i < array.length; i++)   {
                                                    parola = array[i];
                                                    console.log(parola);
                                                    lettera = array[i].charAt(0);
                                                    console.log(array[i].charAt(0));
                                                    sommaLettere += lettera;
                                                    // BASTA UN SOLO FOR, PERCHE' NON RIGUARDA UN ARRAY DENTRO L'ALTRO MA UNO SOLO.
                                                }     
                                                    console.log(sommaLettere); // IL CONSOLE LOG SI METTE FUORI DAL FOR ALTRIMENTI CHIARAMENTE SI RIPETE!

*/

// Esercizio 47

/*
Scrivi una funzione crei un unico array unendo gli array innestati
   es:
     input:
     [

         ["abc", "gino", "aaa"],
         ["abc", "dino", 123],
         ["aaa", "gino", 321],
         ["xyz", "klm", "aaa"],

     ]
     
     output

        ["abc", "gino", "aaa", "abc", "dino", 123, "aaa", "gino", 321, "xyz", "klm", "aaa"]
*/

/*
let array = [["Hola", "Amigo", "Como estas?"],["Hello", "My friend", "How are you?"],["Ciao", "Bello", "Come stai?"]]; // --> VARIABILE DI BASE, DA UTILIZZARE A PRESCINDERE PER ENTRAMBI I METODI.
*/


/*
let risultato = array.join( ",");
console.log(risultato); // QUESTO E' UN METODO PIU' RAPIDO CHE RESTITUISCE L'ARRAY COME STRINGA.
*/


// SECONDO METODO --> PIU' ONEROSO, MA RESTITUISCE L'ARRAY COME ARRAY UNICO.
/*
let arraySommato = [];
let somma = "";
array.forEach(function(internalArrays, index) {
                console.log("Questi sono gli array interni: ", internalArrays);
                console.log("La posizione relativa: ", index);
                somma = somma.concat(internalArrays);
                                            })
console.log(somma); // LA CONSOLE LOG SI PUO' MANIFESTARE ALL'INFUORI DELLA FUNZIONA, MA L'ELEMENTO NO IN QUANTO RIENTRA NELLA FUNZIONE STESSA.
arraySommato.push(somma);
console.log("Questo è l'array finale: ", arraySommato);
*/



// ESERCIZIO 48

// Scrivi una funzione che, dato un array di numeri, ritorni la somma dei numeri divisibili per 2:

/*
es: 
input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
output: 2 + 4 + 6 + 8 = 20
*/


let listaNumeri = [5, 10, 7, 9, 30, 6];
let sommaDeiNumeriDivisibiliPerDue = 0;

let risultatoNumeriPari = listaNumeri.filter(function(numeriFiltrati) {
return numeriFiltrati % 2 === 0;
                            })
                            console.log(risultatoNumeriPari);


for (let i = 0; i < risultatoNumeriPari.length; i++) {
sommaDeiNumeriDivisibiliPerDue += risultatoNumeriPari[i];
}
console.log(sommaDeiNumeriDivisibiliPerDue);


/*
for (let i = 0; i < input.length; i++) {
  if (value % 2 === 0) numeriSommati = numeriSommati + input[i];
}



let numeriDivisibili = input.filter((value, index, numeriSommati) => {
  return value % 2 === 0;
});
console.log("numeriDivisibili: ", numeriDivisibili);

numeriDivisibili.forEach((value, index) => {
  return (SOMMA += value);
});

console.log("SOMMA: ", SOMMA);
*/