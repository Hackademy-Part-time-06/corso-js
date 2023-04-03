'use strict'

/*Esercizio 60-61-62

Scrivi un programma (funzione) che calcoli l’importo da pagare per i biglietti del cinema. 
Il programma dovrà prendere in input i seguenti dati:

- numero dei biglietti
- costo del singolo biglietto

Una volta avuti i dati bisognerà calcolare il totale e restituirlo


function biglietti(numero, costo){
    let risultato= Number(numero*costo)
    console.log(risultato)
}
    biglietti(2,10)



Esercizio 61

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) uno sconto espresso come numero. Questa sarà la percentuale di sconto da applicare al totale.

Esempio: 

- 2 biglietti
- 10 euro a biglietto
- 10 % sconto

risultato 18€
*/
function biglietti(numero, costo, sconto){
let risultato= Number(numero*costo)
let risultato2=risultato*sconto/100
console.log(risultato-risultato2)
}



//ESERCIZIO 62+64

/*
Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) il giorno della settimana. 
In base al giorno applica le seguenti scontistiche:

- lunedi e martedi: - 10 % sul totale
- mercoledi: - 20%
*/

function biglietti(numero, costo, giorno){
    let risultato= Number(numero*costo)
    let totalesconto= Number ()
    if(giorno==="lunedi"){
        totalesconto=risultato*10/100
        console.log(totalesconto-risultato)
    }
    else if(giorno==="martedi"){
           totalesconto=risultato*10/100
            console.log(totalesconto-risultato)
    }
    else if(giorno==="mercoledi"){
        totalesconto=risultato*20/100
        console.log(risultato-totalesconto)
}
     console.log(`Persone: ${numero} - prezzo singolo: ${costo}euro - totale${risultato} - Totale scontato ${totalesconto}`)   
    }

    biglietti(2,10,"mercoledi")

//ESERCIZIO 63
/*
function scontoancora (biglietti, scontoulteriore){
biglietti(numero, costo, giorno)
if (numero>=3){
let totalescontoulteriore=totalesconto*5/100
console.log(totalescontoulteriore)
}

}
biglietti(3,10,"martedi")
scontoancora(totalescontoulteriore-biglietti)*/


//ESERCIZIO 65
/*
function libreria (titolo,autore){
    
    console.log(`www.lamiasuperlibreria.aulab/${autore.toLowerCase().replaceAll(" ","-")}/${titolo.toLowerCase().replaceAll(" ","-")}.html`)

}

libreria("Il Signore degli Anelli", "Tolkien")
*/

//ESERCIZIO 66

function partita (giocatore1, giocatore2, risultato) {
    let array = ["sasso", "carta", "forbice"]
    giocatore1 = Math.floor(Math.random() * array.length)
    console.log(array[giocatore1])
    giocatore2 = Math.floor(Math.random() * array.length)
    console.log(array[giocatore2])
}

partita()
