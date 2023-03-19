
/*esercizio37

let listaNumeri = [1, 4, -23, 45, 12, 30, 56, -2, 9, 98];
console.log(`Questa è la lista in modo casuale: ${listaNumeri}`)

let listaNumeriOrdinati = listaNumeri.sort(function(a, b){return a - b}).reverse()
console.log(`Questa è la stessa lista ma ordinata in modo decrescente: ${listaNumeriOrdinati}`)

listaNumeriOrdinati = listaNumeri.sort(function(a, b){return a - b})
console.log(`Questa è la stessa lista ma ordinata in modo crescente: ${listaNumeriOrdinati}`)
*/


/*esercizio38

let inputA = [2, 5, 10, 14, 19];
let inputB = [4, 8, 9, 2, 9];
let outputC = [];


for (let i = 0; i = inputA.length; i++){
    outputC.push(inputA.shift() + inputB.shift()) 
}


console.log(`Questa è l'addizione tra ogni signolo valore di inputA e inputB: ${outputC}`)
*/



/*esercizio39


function mediaNumeri (inputArray) {
    
    let mediaResults = 0;
    let numeriMemorizzati = 0;
    let somma = 0;
    let valoriMinori = [];
    for (let i = 0; i < inputArray.length; i++){

        numeriMemorizzati = inputArray[i]
        //console.log(`Questi sono i numeri memorizzati ${numeriMemorizzati}`)
        
        somma += numeriMemorizzati

       // console.log(`Questa è la somma dei numeri memorizzati: ${somma}`)
    }

    mediaResults = somma / inputArray.length



    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i] < mediaResults){
            valoriMinori.push(inputArray[i])
        }
    }

    return console.log(`Questa è la media dei numeri inseriti ${mediaResults}/ Questi invece sono i valori minori della media: ${valoriMinori}`) 
    
}

mediaNumeri([10,20,23,45])
*/



/*esercizio40

function divisione (numeriDaDividere, divisore){
    let risultato = [];

    for (let i = 0; i < numeriDaDividere.length; i++){
        if (numeriDaDividere[i] % divisore === 0){
            risultato.push(numeriDaDividere[i])
        }
        
    }

    return risultato;
}

divisione([2,4,5,6,10,13],3)
*/



/*esercizio41*/


