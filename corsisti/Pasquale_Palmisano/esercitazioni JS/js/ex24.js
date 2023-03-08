/*Esercizio 24
Scrivi un programma che passato un mese ritorni i giorni presenti in quel mese*/

let month = prompt("Inserisci il mese:")

switch (month) {
    case "novembre":
    case "aprile":
    case "giugno":
    case "settembre":
        console.log(`${month} ha 30 giorni!`);
        break;

    case "gennaio":
    case "marzo":
    case "maggio":
    case "luglio":
    case "agosto":
    case "ottobre":
    case "dicembre":
        console.log(`${month} ha 31 giorni!`);
        break;

    case "febbraio":
        console.log(`Febbraio ha 28 giorni!`);
        break;

    default:
        console.log(`non hai inserito un mese, cretino.`)
}