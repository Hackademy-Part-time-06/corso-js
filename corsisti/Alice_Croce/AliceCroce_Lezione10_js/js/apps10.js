"use strict"
//Esercizio 60--------------------------------------------------

/*Scrivi un programma (funzione) che calcoli l’importo da pagare per i biglietti del cinema. Il programma dovrà prendere in input i seguenti dati:

- numero dei biglietti
- costo del singolo biglietto

Una volta avuti i dati bisognerà calcolare il totale e restituirlo*/


/*function calcoloTotale(numeroBiglietti, costoBiglietto) {//nella funzione setto le due variabili che voglio moltiplicare
    return numeroBiglietti * costoBiglietto;// le moltiplico
}
//ATTENZIONE!!- se non dichiaro il "calcoloTotale" con un let (o simile) allora il return NON VERRA' PRESO DA NESSUNO
let restituzioneTotale = calcoloTotale(4, 5);// lo devi dichiarare, prima di richiamare la funzione
console.log(restituzioneTotale)//stampa e ciao!*/

//Esercizio 61-------------------------------------------------

/*Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) uno sconto espresso come numero. Questa sarà la percentuale di sconto da applicare al totale.

Esempio: 

- 2 biglietti
- 10 euro a biglietto
- 10 % sconto

risultato 18€*/

/*function calcoloTotale(numeroBiglietti, costoBiglietto, scontoBiglietto) {//aggiungo lo sconto del biglietto come parametro da dichiarare successivamente, se non la dichiari allora non potrai trovarla stmpata
    return (costoBiglietto - (costoBiglietto * scontoBiglietto /100)) * numeroBiglietti;
}

let restituzioneTotale = calcoloTotale(2, 10, 10);
console.log(restituzioneTotale)*/

//Esercizio 62-------------------------------------------------

/*Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) il giorno della settimana. 
In base al giorno applica le seguenti scontistiche:

- lunedi e martedi: - 10 % sul totale
- mercoledi: - 20% */

/*function calcoloTotale(numeroBiglietti, costoBiglietto, scontoBiglietto, giornoSettimana) {
    if (giornoSettimana === "lunedi" || giornoSettimana === "martedi") {
        sconto = 0.1;
    } else { giornoSettimana === "mercoledi" 
        sconto = 0.2;
    }

    return (costoBiglietto - (costoBiglietto * scontoBiglietto / 100)) * numeroBiglietti;
}

let restituzioneTotale = calcoloTotale(2, 10, 0, "lunedì");
console.log(restituzioneTotale)*/
//----------NICOLA------------NICOLA---------NICOLA------------NICOLA----------NICOLA--------

/*function calcoloTotale(numeroBiglietti, costoBiglietto, scontoPercentuale = 0, giornoSettimana = '') {
    let sconto = 0;
    switch(giornoSettimana) {
      case 'lunedi':
      case 'martedi':
        sconto = 0.1 * costoBiglietto;
        break;
      case 'mercoledi':
        sconto = 0.2 * costoBiglietto;
        break;
      default:
        sconto = 0;
        break;
    }
    sconto += (scontoPercentuale/100) * costoBiglietto;
    let costoConSconto = costoBiglietto - sconto;
    let costoTotale = numeroBiglietti * costoConSconto;
    return costoTotale;
  }

  let restituzioneTotale = calcoloTotale(2, 10, 10, 'martedì');
  console.log(restituzioneTotale);*/

//Esercizio 63-------------------------------------------------

/*Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) una logica ad hoc per un altro sconto (callback).
A questa callback dovrai passare in input tutti i parametri che ti vengono passati nella funzione principale.
Crea tu una nuova logica di sconto ed applicalo al totale, dopo averlo calcolato seguendo le logiche usate fino ad ora. 
Hai la massima libertà riguardo a che tipologia di sconto applicare.

Esempio:
posso creare uno sconto in base al numero dei biglietti comprato: se compri 3 biglietti hai un ulteriore 5% di sconto, se ne prendi 5 invece sale al 10%.*/

function extraSconto(totale, numeroBiglietti) {
    if (numeroBiglietti === 3) {
        return totale - (totale * 0.05)
    }
    else if (numeroBiglietti === 5) {
        return totale - (totale * 0.10)
    }
    return totale;
}


function calcoloTotale(numeroBiglietti, costoBiglietto, scontoPercentuale = 0, giornoSettimana = '', funzioneCallbackSconto) {
    console.log("Numero biglietti:", numeroBiglietti);
    console.log("Costo biglietto:", costoBiglietto);
    console.log("Sconto percentuale:", scontoPercentuale);
    console.log("Giorno settimana:", giornoSettimana);
    console.log("Funzione callback sconto:", funzioneCallbackSconto);

    let sconto = 0;
    switch (giornoSettimana) {
        case 'lunedi':
        case 'martedi':
            sconto = 0.1 * costoBiglietto;
            break;
        case 'mercoledi':
            sconto = 0.2 * costoBiglietto;
            break;
        default:
            sconto = 0;
            break;
    }
    sconto += (scontoPercentuale / 100) * costoBiglietto;
    let costoConSconto = costoBiglietto - sconto;
    let costoTotale = numeroBiglietti * costoConSconto;

    if (typeof funzioneCallbackSconto === "function") {
        costoTotale = funzioneCallbackSconto(costoTotale, numeroBiglietti)
    }

    return costoTotale;
}

let restituzioneTotale = calcoloTotale(3, 10, 10, 'martedì', extraSconto);

console.log(restituzioneTotale);






