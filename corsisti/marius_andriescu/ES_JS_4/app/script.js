/*
//Esercizio 23
let numeroPariDispari = prompt("Inserisci il numero: ");
numeroPariDispari =+ numeroPariDispari;

let risultato = (numeroPariDispari % 2);

if (risultato == 0 ) {
    console.log("Pari");
} else {
    console.log("Dispari");
}

//Esercizio 24
let stringaMese = prompt("Inserisci il mese: ");

switch (stringaMese.toLowerCase())  {
    case "gennaio":
        console.log("I giorni presenti di questo mese e': 31");
    break;
    case "febbraio":
        console.log("I giorni presenti di questo mese e': 28");
    break;
    case "marzo":
        console.log("I giorni presenti di questo mese e': 31");
    break;
    case "aprile":
        console.log("I giorni presenti di questo mese e': 30");
    break;
    case "maggio":
        console.log("I giorni presenti di questo mese e': 31");
    break;
    case "giugno":
        console.log("I giorni presenti di questo mese e': 30");
    break;
    case "luglio":
        console.log("I giorni presenti di questo mese e': 31");
    break;
    case "agosto":
        console.log("I giorni presenti di questo mese e': 31");
    break;
    case "settembre":
        console.log("I giorni presenti di questo mese e': 30");
    break;
    case "ottobre":
        console.log("I giorni presenti di questo mese e': 31");
    break;
    case "novembre":
        console.log("I giorni presenti di questo mese e': 30");
    break;
    case "dicembre":
        console.log("I giorni presenti di questo mese e': 31");
    break;
}

// Esercizio 25
let categoria = prompt("Inserisci la categoria del film: ");

switch (categoria.toLowerCase()) {
    case "fantasy":
        console.log("Film suggerito: \"Il signore degli anelli\"");
    break;
    case "animazione":
        console.log("Film suggerito: \"Rick and Morty\"");
    break;
    case "avventura":
        console.log("Film suggerito: \"Animali fantastici\"");
    break;
}

// Esercizio 26
let eta = prompt("Quanti anni hai? ");
let patente = prompt("Hai la patente? ");
let assicurazione = prompt("Hai la assicurazione? ");
let puntiPatente = Math.floor((Math.random() * 20));
let multa = Math.floor((Math.random() * 1));

eta =+ eta;

console.log(`Hai ${puntiPatente} punti sulla patente`);

if (eta >= 18 && patente == "si" && assicurazione == "si" && puntiPatente > 0) {
 console.log("Controllo andato a buon fine");
} else if (multa == 0) {
    console.log("Mi dispiace ragazzo ma ti devo fare la multa!");
} else {
    console.log("Dai per oggi sono gentile chiudero' un'occhio");
}

// Esercizio 27
let n1 = prompt("Inserisci il primo numero:");
let n2 = prompt("Inserisci il secondo numero:");
let operatore = prompt("Inserisci l'operatore \"+, -, /, *\":");
let risultato = 0;

n1 =+ n1;
n2 =+ n2;

if (operatore == "+") {
    risultato = n1 + n2;
    console.log(`Il risultato della somma: ${n1} + ${n2} = ${risultato}`);
} else if (operatore == "-") {
    risultato = n1 - n2;
    console.log(`Il risultato della sottrazione: ${n1} - ${n2} =${risultato}`);
} else if (operatore == "/") {
    risultato = n1 / n2;
    console.log(`Il risultato della divisione: ${n1} / ${n2} = ${risultato}`);
} else if (operatore == "*") {
    risultato = n1 * n2;
    console.log(`Il risultato della moltiplicazione: ${n1} * ${n2} = ${risultato}`);
}

*/
// Esercizio 28
for (let i = 1; i <= 100; i++) {
    let risultato = i % 2;
        if (risultato == 0) {
            console.log(i);
        }
}

// Esercizio 29
for (let i = 0; i <= 10; i++) {
    
}