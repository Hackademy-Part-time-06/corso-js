console.log("Script tramite file esterno");
console.warn("Sono un warning");
console.error("Sono un errore");

var name = "Nicola";
var name2 = "Pino";

let surname = "Zappulla";

console.log("Ciao " + name, surname);

name = "Carmelo";

console.log("Adesso ho cambiato nome in " + name);

name = "la parola magica è:\"abracadabra\""

console.log("La lunghezza del cognome è: " + surname.length)

let variabileLunga = "Ciao sono una variabile lunga mannaggiallamadonna";
variabileLunga.split(" ");
console.log(variabileLunga.split(" "))

let provaConversione = "3.5";
let Risultato = Number(provaConversione);
let stampa = provaConversione + provaConversione;
let stampa2 = Risultato + Risultato;
console.log("Somma stringhe = ", stampa);
console.log("Somma numeri = ", stampa2);

let provaNan = isNaN(provaConversione);
console.log("è un numero? " + provaNan);

let provaBooleano1 = true;
let provaBooleano2 = false;

let age = 52;
let sex = "F";
let andTrue = (age >= 18) && (sex == "F"); //true
let andFalse = (age >= 18) && (sex == "M"); //false
let orTrue = (age >= 18) || (sex == "M"); //true

//Prova if
let anniDiEsperienza = prompt("Quanti anni di esperienza hai?")
anniDiEsperienza = Number(anniDiEsperienza);
let ral = prompt("Inserisci la tua RAL:")
ral = Number(ral);
let seniority;

if (anniDiEsperienza < 3 && (ral >= 20000 && ral < 24000)) {
    seniority = "junior";
}
else if ((anniDiEsperienza >= 3 && anniDiEsperienza < 6) && (ral >= 24000 && ral < 28000)) {
    seniority = "medium";
}
else if ((anniDiEsperienza >= 6 && anniDiEsperienza < 8) && (ral >= 28000 && ral < 32000)) {
    seniority = "mid/senior";
}
else if (anniDiEsperienza == 6 && ral == 27500) {
    seniority = "Sei Marco Quercia";
}
else {
    seniority = "Senior";
}
alert("Il tuo livello è: " + seniority)

// Esempio cicli for - Ciclare un numero di volte fino a quando si rientra nella condizione dichiarata.
let somma = 0;
for (let i = 0; i < 10; i++) {
    somma = somma + 3
    console.log(somma)
}
console.log(somma)

let i = 0;
let somma2 = 1;
while (i < 10 && somma2 < 10) {
    somma2++
    i++
    console.log("The number is ", somma2 + i);
}

let ii = 0;
while (ii < 10) {
    ii = ii + 2;
    console.log("Il valore è: ", ii);
}

//

let persona = {
    nome: "Mario",
    cognome: "Rossi",
    anni: 25,
    haLaPatente: true,
    libriPreferiti: ["harry potter", "il signore degli anelli"],
    indirizzo: {
        via: "Via dei girasoli",
        civico: "58",
        città: "Bari",
        nazione: "Italia"
    },
    saluta: function() {
        console.log("Ciao " + this.nome)
    }
}
persona.saluta("Nino")


console.log("La persona si chiama", persona.nome);
console.log("Il cognome è", persona["cognome"])
console.log("Il libro preferito di", persona.nome, "è: ", persona.libriPreferiti[1])

let proprieta = "anni"
console.log("Anni persona", persona[proprieta])

for (let nameVariable in persona) {
    console.log(nameVariable)
    console.log(persona[nameVariable])
}