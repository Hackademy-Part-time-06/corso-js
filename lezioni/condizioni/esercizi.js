"use strict"


/**

    Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo queste regole:

    - v < 18: insufficiente
    - 18 <= v < 21: sufficiente
    - 21 <= v < 24: buono
    - 24 <= v < 27: distinto
    - 27 <= v <= 29: ottimo
    - v = 30: eccellente

    Esempio:
    
    Input: v = 29
    Output: Ottimo
 */
let voto = 26;

if (voto < 18) {
  console.log("insufficiente");
}
else if(voto >= 18 && voto < 21) {
  console.log("sufficiente");
}
else if(voto >= 21 && voto < 24) {
  console.log("buono");
}
else if(voto >= 24 && voto < 27) {
  console.log("distinto");
}
else if(voto >= 27 && voto <= 29) {
  console.log("ottimo");
}
else {
  console.log("eccellente");
}