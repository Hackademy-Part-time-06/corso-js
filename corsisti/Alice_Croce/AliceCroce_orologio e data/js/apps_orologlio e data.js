"use strict"
console.log("Hallo! Wir get's heute?")
//ESERCIZIO 89----------------------------------------------------------------
/*
Orologio
Crea un orologio digitale.
Visualizza in una pagina html un orologio che mostri l’orario corrente in questo formato.
ore, minuti, secondi in modo digitale
Naturalmente dovrà essere funzionante ed aggiornare l’orario ogni secondo.
NB: non avere paura dell’HTML e del CSS, quindi realizza un layout simile a questo che ho incollato. Ossia: ore e minuti in un testo più grande dei secondi
*/
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " ";

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);

}

currentTime();

//ESERCIZIO 90----------------------------------------------------------------
/*
All’orologio precedentemente creato, aggiungi sotto i dati relativi alla data odierna
*/