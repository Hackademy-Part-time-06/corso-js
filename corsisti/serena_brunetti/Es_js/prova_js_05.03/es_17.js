/*Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo queste regole:

- v < 18: insufficiente
- 18 <= v < 21: sufficiente
- 21 <= v < 24: buono
- 24 <= v < 27: distinto
- 27 <= v <= 29: ottimo
- v = 30: eccellente*/

let v = prompt("Inserisci il tuo voto:")
v = Number(v);
let giudizio

if (v<18) {
    giudizio = "Insufficiente";
}
else if (18 <= v && v < 21) {
    giudizio = "Sufficiente";
}
else if (21 <= v && v < 24) {
    giudizio = "Buono"
}
else if (24 <= v && v < 27) {
    giudizio = "Distinto"
}
else if (27 <= v && v <= 29) {
    giudizio = "Ottimo"
}
else if (v == 30) {
    giudizio = "Eccellente"
}
alert("Il tuo giudizio è: " + giudizio)