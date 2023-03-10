/*Scrivi un programma che passato un mese ritorni i giorni presenti in quel mese*/

let mese = prompt("Inserisci un mese:")

switch (mese) {
    case "Gennaio":
    case "gennaio":
    case "Marzo":
    case "marzo":
    case "Maggio":
    case "maggio":
    case "Luglio":
    case "luglio":
    case "Agosto":
    case "agosto":
    case "Ottobre":
    case "ottobre":
    case "Dicembre":
    case "dicembre":
        alert("Il mese inserito ha 31 giorni")
        break
    case "Aprile":
    case "aprile":
    case "Giugno":
    case "giugno":
    case "Settembre":
    case "settembre":
    case "Novembre":
    case "novembre":
        alert("Il mese inserito ha 30 giorni")
        break
    case "Febbraio":
    case "febbraio":
        alert("Il mese inserito ha 28 giorni e ogni 4 anni ne ha 29")
        break
}