/*
//ESERCIZIO 45(37)

function oridine(array){
    array.sort(function(a, b){
        return a - b
    })
    console.log(array)
}
oridine([3,7,-2,5,8,1,2,5,6,-4])


function ordine(arrayNumeri, Order = false) {
    arrayNumeri.sort((a, b) => {
        if (Order) {
            return a - b
        }
        return b - a
    })
    return arrayNumeri
}
//Decrescente
console.log(ordine([3,7,-2,5,8,1,2,5,6,-4]))
//Crescente
console.log(ordine([3,7,-2,5,8,1,2,5,6,-4], true))
*/
/*
//ESERCIZIO 45(38)

let array3 = []
function operazione(array1, array2, operatore){
    if (operatore === "addizione"){
        for(i=0;i<array1.length;i++){
            let risultato = (array1[i] + array2[i])
            array3.push(risultato)
            console.log(`${array1[i]} + ${array2[i]} = ${risultato}`)
        }
    }
    else {

    }
}
operazione([3,7,2,5,8], [9,3,1,4,7], "addizione")
*/
/*
TEST 
in questo caso utilizzo la .forEach per scorrere fra gli elementi di array1 e .map per creare nuovi "array",per ogni elemento di array1, in cui vi sarà contenuto la somma di elemento1 per ogni elemento2.

function operazione(array1, array2, operatore){
    if(operatore==="addizione"){
        array1.forEach(element1 => {
        let array3 = array2.map(element2 => element2 + element1)
        console.log(array3)
        });
    }
    else if(operatore==="divisione"){

    } 
}
operazione([3,7,2,5,8], [9,3,1,4,7], "addizione")
*/
/*
(5) [12, 6, 4, 7, 10]
(5) [16, 10, 8, 11, 14]
(5) [11, 5, 3, 6, 9]
(5) [14, 8, 6, 9, 12]
(5) [17, 11, 9, 12, 15]
*/


//Utilizziamo .map per iterare fra gli elementi
function operazione(array1, array2, operatore){
    let risultato = array1.map((numero, i) => {
        console.log("Elemento array1", numero)
        console.log("index =", i)
        let operazione
//Switch per variare l'operazione.
        switch(operatore){
            case "addizione":
                operazione = numero + array2[i]
                break;
            case "sottrazione":
                operazione = numero - array2[i]
                break;
        }
        return operazione
    })
    return risultato
}
console.log(operazione([3,7,2,5,8], [9,3,1,4,7], "addizione"))
console.log(operazione([3,7,2,5,8], [9,3,1,4,7], "sottrazione"))

//ESERCIZIO 45(39)
/*
il primo argomento è noto come accumulatore, a cui viene assegnato il valore di ritorno della funzione di callback dall’iterazione precedente, il secondo è l’elemento corrente in elaborazione (i primi due "totale" e "valoreCorrente" sono obbligatori), il terzo è l’indice di quell’elemento e il quarto è l’array su cui reduce è chiamato.
Esegue l’iterazione su ogni numero dell’array come farebbe in un ciclo for. Quando il ciclo inizia, il totale è il numero all’estrema sinistra (3) e il valore corrente è quello accanto (5). I due valori vengono sommati e immagazzinati nel totale.

Ora il terzo valore dell’array (10) viene immagazzinato come valore corrente e il calcolo viene ripetuto per ogni valore nell’array, cambiando il contenuto del valore corrente con il numero successivo nell’array, spostandosi a destra finché non ci sono più numeri nell’array. A questo punto restituisce il totale.
*/
/*
//Test 1
function funzione1(array){
    array.sort(function(a, b){
        return a - b
    })
    console.log(array)
    let sum = array.reduce((totale, valoreCorrente) => totale += valoreCorrente)
    let media = sum/array.length
    console.log("somma =",sum,"media =", media,"valori minori =", array.slice(0,3))
    
}
funzione1([3,5,10,2,8])

//Test2
//Calcolare la media
function TrovoMedia(array){
    let media = 0
    array.forEach(elementoArray => {
        media = media + elementoArray
    })
    media = media/array.length
    return media
}
//Trovare i numeri minori della media tramite l'utilizzo di un discriminante
function numeriminorimedia(array, discriminante=0){
    let lista = []
    array.forEach(elementoLista => {
        if(elementoLista < discriminante){
            lista.push(elementoLista)
        }
    })
    return lista
}
//Fine
function esercizio(array){
    let media = TrovoMedia(array)
    console.log("media=", media)

    let numeriMinoriMedia = numeriminorimedia(array, media)
    console.log(`Numeri minori di ${media} =`, numeriMinoriMedia)
}
esercizio([3,5,10,2,8])
*/
console.log("-------------------------------------------")
//Utilizzare .reduce per la somma(quindi media) poi filter per i numeri minori della media
function media(arraynumeri){
    let sum = arraynumeri.reduce(function(totale, valoreCorrente) {
    totale += valoreCorrente
    return totale
    }, 0)
    console.log("somma =", sum)
    let media = sum / arraynumeri.length
    console.log("media =", media)

    let numeriMinoriMedia = arraynumeri.filter(numero => numero < media)
    console.log("Lista valori minori di ", + media, numeriMinoriMedia)
}
console.log(media([3,5,10,2,8]))
/*
//ESERCIZIO 45(41)
//Test1
function funzione1(array, parola){
    array.forEach(risultato => {
        if(array.includes(parola)){
            risultato = true
        }
        else{
            risultato = false
        }
        console.log(risultato)
    });
}
funzione1(["what","a","great","kata"], "kata")
*/
/*
//Test2
function funzione1(array, parola){
    console.log(array)
    console.log(parola)
    return array.includes(parola)
}
console.log(funzione1(["what","a","great","kata"], "kata"))
*/
/*
//Test 3
function funzione2(array, parola){
    if(array.includes(parola)){
        risultato=true
    }
    else {
        risultato=false
    }
    return risultato
}
console.log(funzione2(["what","a","great","kata"], "kata"))

console.log(funzione2(["what","a","great","kata"], "ciao"))
*/

//Esercizio 45(42)
/*
//Test 1
function somma(array){
    let sum = array.reduce((totale, valoreCorrente) => totale += valoreCorrente)
    return sum
}
console.log(somma([1,-4,7,12]))
*/
/*
//Test 2
function somma(array){
    let RisultatoSomma = 0
    array.forEach(numero => {
        if (numero > 0){
            RisultatoSomma += numero
        }
    });
    return RisultatoSomma
}
console.log(somma([1,-4,7,12]))
*/
function sommaPositivi(arraynumeri){
    let arrayfiltrato = arraynumeri.filter(numero => {
        return numero > 0
    })
    let result = arrayfiltrato.reduce(function(totale1, numero1) {
        return totale1 += numero1
    }, 0)
    return result
}
console.log("somma positivi",sommaPositivi([1,-4,7,12]))
/*
//ESERCIZIO 45(43)

function double(array1){
    let array2 = []
    array1.forEach(numero => {
        array2.push(numero * 2)
    });
    return array2
}
console.log(double([1,2,3]))
*/
function double(array) {
    return array.map((numero) => numero * 2)
}
console.log(double([1,2,3]))
/*
//ESERCIZIO 45(44)

function calcolaPunti(array){
    let sommaPunteggio = 0
    let punteggi = []
    array.forEach(elemento => {
        let risultatoPartita = elemento.split(":")
        console.log(risultatoPartita)
        if(risultatoPartita[0] > risultatoPartita[1])
            punteggi.push(3)
        else if(risultatoPartita[0] === risultatoPartita[1]){
            punteggi.push(1)
        }
        else {
            punteggi.push(0)
        }
        console.log("punteggi =", punteggi)
    });
    punteggi.forEach(punteggio => {
        sommaPunteggio += punteggio
    })
    return sommaPunteggio
}
console.log(calcolaPunti(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(calcolaPunti(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
console.log(calcolaPunti(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
console.log(calcolaPunti(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))
*/
/*
//ESERCIZIO 46
*/
let stringa1 = "Ciao"
let primalettera = stringa1.charAt()
console.log(primalettera)
/*
//Test 1
function primocarattere(stringa){
    let risultato = stringa.split(" ")
    console.log(risultato)
    let arraySingoliCaratteri = []
    risultato.forEach(singolaParola => {
        let singoloCarattere = singolaParola.charAt()
        console.log(singoloCarattere)
        arraySingoliCaratteri.push(singoloCarattere)
    });
    return arraySingoliCaratteri
}
console.log(primocarattere("Ciao sono un esercizio sui metodi avanzati degli array"))
*/
/*
//Test 2
function primocarattere(stringa){
    let arrayParole = stringa.split(" ")
    console.log(arrayParole)
    let arraysingolicaratteri = []
    arrayParole.forEach(parola => {
        arraysingolicaratteri.push(parola.charAt())
        console.log(arraysingolicaratteri)
    });
    return arraysingolicaratteri.join("")
}
console.log(primocarattere("Ciao sono un esercizio sui metodi avanzati degli array"))
*/
/*
//ESERCIZIO 47

function funzione1(array){
    let arrayParole = []
    array.forEach(arrayinterno => {
        console.log(arrayinterno)
        arrayinterno.forEach(elementointerno => {
        arrayParole.push(elementointerno)
    })
 });
 return arrayParole
}
console.log(funzione1([
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123], 
    ["aaa", "gino", 321], 
    ["xyz", "klm", "aaa"],
]))
*/
/*
//ESERCIZIO 48

function numeridivisibiliper2(array){
    let arraynumeridivisibiliper2 = []
    let somma = 0
    array.forEach(elemento => {
        if(elemento % 2 == 0){
            arraynumeridivisibiliper2.push(elemento)
            console.log(arraynumeridivisibiliper2)
        }
    });
    return arraynumeridivisibiliper2.reduce((totale, valoreCorrente) => totale += valoreCorrente)
}
console.log(numeridivisibiliper2([1, 2, 3, 4, 5, 6, 7, 8, 9]))
*/