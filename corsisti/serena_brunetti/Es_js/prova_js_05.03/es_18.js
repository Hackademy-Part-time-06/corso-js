//Scrivi un programma che dato un numero stampi la tabellina corrispondente.

let i = 0;
let primoVal = prompt("Inserisci il numero di cui vuoi la tabellina:")
primoVal = Number(primoVal)
while (i < 10) {
    i++
    primoVal
    console.log("Il risultato è: ", primoVal * i);
}