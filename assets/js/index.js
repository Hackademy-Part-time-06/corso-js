console.log("Index Js caricato!", "sono un altro valore", true, 123);








function capitalize(stringa) {

    if (typeof stringa !== "string") {
        return; // se arrivo qua non andrà avanti l'esecuzione della mia funzione!!!
    }
    
    let primoCarattere = stringa.charAt(0);
    primoCarattere = primoCarattere.toUpperCase();
    stringa = primoCarattere + stringa.slice(1);

    return stringa;
}
/*
function saluta(nome, cognome, paese="") {
    let variabileInterna = nome;
    nome = capitalize(nome);
    cognome = capitalize(cognome);
    paese = capitalize(paese);
    // console.log(`Ciao ${nome} ${cognome} !`);

    return `Ciao ${nome} ${cognome} !`;
}


console.log(saluta("Mario", "Mariangelo"))

let salutoAGino = saluta("gino", "gini");

//console.log(salutoAGino);


saluta("pino", "pini");

saluta("tizio", "", "torino");



function somma(n1=0, n2=0) {
    let risultato = n1 + n2;
    return risultato;
}



let risultatoSomma = somma(10, 10);
console.log("Il risultato è:", risultatoSomma);


let x = somma(10, 5);

console.log(x)


function tuttoMaiuscolo(stringaDaModificare) {
    let risultato = stringaDaModificare.toUpperCase();
    return risultato;
}


function salutoEvoluto(nome, callbackPerFormattare) {

    if (typeof callbackPerFormattare === "function") {
        nome = callbackPerFormattare(nome);
    }

    console.log("Ciao ", nome);
}

salutoEvoluto("Gino", tuttoMaiuscolo);

salutoEvoluto("Pino");

salutoEvoluto("dino", capitalize);


salutoEvoluto("PAOLO", function (nome) {
    return nome.toLowerCase();
})


var variabileGlobale = "aaa";
let variabileEsterna = "ABC";


function sonoUnaFunzione() {
    let variabileInterna = 123;

    function funzioneInterna() {
        let variabileAncoraPiuInterna = "Ciccio";

        console.log(variabileEsterna, variabileInterna, variabileAncoraPiuInterna);

    }


    console.log(variabileEsterna, variabileInterna); 
}

sonoUnaFunzione();

console.log(variabileEsterna);

*/


let asd = function() {
    console.log("ASD = funzione anonima")
}




function contatore() {
    console.log("contatore eseguito");

    let c = 0;

    return function () {
        c++;
        console.log("Valore di c:", c);
    }
}


let x = contatore();

/*
let x = function () {
    console.log("stampato da funzione ritornata da un'altra funzione");
}
*/





(function() {
    let messaggio = "Ciao sono una iife e non mi puoi vedere esternamente!"

    console.log(messaggio)
})()



let saluta = (paramentro1="default") => {
    console.log("Sono il log di una arrow function, parametro1 = ", paramentro1);

    
}

saluta(123);

let somma = (x, y) => x + y; 