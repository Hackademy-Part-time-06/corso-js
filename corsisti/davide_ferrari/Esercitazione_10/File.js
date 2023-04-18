// Esercizio 60

/*
Scrivi un programma (funzione) che calcoli l’importo da pagare per i biglietti del cinema. Il programma dovrà prendere in input i seguenti dati:


- numero dei biglietti
- costo del singolo biglietto

Una volta avuti i dati bisognerà calcolare il totale e restituirlo
*/

/*
let numeroBiglietti = prompt("Quanti biglietti sono da pagare?");
let costoSingoloBiglietto = prompt("Inserisci il costo che vuoi dare al singolo biglietto");

function totaleDaPagare(numero, costoSingolo) {
    numero = numeroBiglietti;
    costoSingolo = costoSingoloBiglietto;
    let totale = numeroBiglietti * costoSingoloBiglietto;
    return totale;
}

console.log(totaleDaPagare());

*/






//Esercizio 61

/*
Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) uno sconto espresso come numero. Questa sarà la percentuale di sconto da applicare al totale.

Esempio: 

- 2 biglietti
- 10 euro a biglietto
- 10 % sconto

risultato 18€
*/

/*

let numeroBiglietti = prompt("Quanti biglietti sono da pagare?");
let costoSingoloBiglietto = prompt("Inserisci il costo che vuoi dare al singolo biglietto");

function totaleDaPagare(numero, costoSingolo, sconto) {
    numero = numeroBiglietti;
    costoSingolo = costoSingoloBiglietto;
    sconto = 10;
    let totale = numeroBiglietti * costoSingoloBiglietto;
    let scontoBiglietti = (totale / 100) * 10;
    let totaleScontato = totale - scontoBiglietti;
    return totaleScontato;
}


console.log(totaleDaPagare());

*/

//Esercizio 62

/*
Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) il giorno della settimana. 
In base al giorno applica le seguenti scontistiche:

- lunedi e martedi: - 10 % sul totale
- mercoledi: - 20%
*/

/*

let numeroBiglietti = prompt("Quanti biglietti sono da pagare?");
let costoSingoloBiglietto = prompt("Inserisci il costo che vuoi dare al singolo biglietto");

function totaleDaPagare(numero, costoSingolo, sconto, giornoDellaSettimana) {
    numero = numeroBiglietti;
    costoSingolo = costoSingoloBiglietto;
    giornoDellaSettimana = "Venerdì";
    switch (giornoDellaSettimana)       {
        case "Lunedì":
            sconto = 20;
            break;
        case "Martedì":
            sconto = 25;
            break;
        case "Mercoledì":
            sconto = 25;
            break;
        case "Giovedì":
            sconto = 20;
            break;
        case "Venerdì":
            sconto = 15;
            break;
            case "Sabato":
            sconto = 10;
            break;
            case "Domenica":
            sconto = 10;
            break;
                                        };




    sconto === Number(giornoDellaSettimana);
    let totale = numeroBiglietti * costoSingoloBiglietto;
    let scontoBiglietti = (totale / 100) * sconto;
    let totaleScontato = totale - scontoBiglietti;
    return totaleScontato;
}
console.log(totaleDaPagare());

*/


// Esercizio 63 - DIFFICILE

/*
Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) una logica ad hoc per un altro sconto (callback).
A questa callback dovrai passare in input tutti i parametri che ti vengono passati nella funzione principale.
Crea tu una nuova logica di sconto ed applicalo al totale, dopo averlo calcolato seguendo le logiche usate fino ad ora. 
Hai la massima libertà riguardo a che tipologia di sconto applicare.

Esempio:
posso creare uno sconto in base al numero dei biglietti comprato: se compri 3 biglietti hai un ulteriore 5% di sconto, se ne prendi 5 invece sale al 10%.
*/

/*

let numeroBiglietti = prompt("Quanti biglietti sono da pagare?");
let costoSingoloBiglietto = prompt("Inserisci il costo che vuoi dare al singolo biglietto");

function totaleDaPagare(numero, costoSingolo, sconto, giornoDellaSettimana, scontoAggiuntivo) {
    numero = Number(numeroBiglietti);
    console.log("Numero dei biglietti: " + numeroBiglietti);
    costoSingolo = costoSingoloBiglietto;
    console.log("Questo è il prezzo per ciascun biglietto: " + costoSingolo);
    giornoDellaSettimana = "Venerdì";
    switch (giornoDellaSettimana)       {
        case "Lunedì":
            sconto = 20;
            break;
        case "Martedì":
            sconto = 25;
            break;
        case "Mercoledì":
            sconto = 25;
            break;
        case "Giovedì":
            sconto = 20;
            break;
        case "Venerdì":
            sconto = 15;
            console.log("Venerdì : 15");
            break;
            case "Sabato":
            sconto = 10;
            break;
            case "Domenica":
            sconto = 10;
            break;
                                        };
            function scontoAggiuntivo(scontoInPiù) {
                                                        typeof scontoInPiù === Number;
                                                        if (costoSingoloBiglietto > 5 || numeroBiglietti > 6) {
                                                                                                                scontoInPiù = 5;
                                                                                                                console.log(scontoInPiù);
                                                        }
                                                            return scontoInPiù;
            };
            

    sconto === Number(giornoDellaSettimana);

    let totale = numeroBiglietti * costoSingoloBiglietto;
    console.log("Totale costo iniziale, senza sconti: " + totale);

    console.log("Questo è lo sconto di base standard: " + sconto);

    console.log("Questo è lo sconto aggiuntivo: " + scontoAggiuntivo());

    
    let scontoBiglietti = totale / 100;
    console.log("Totale prezzo diviso per 100: " + scontoBiglietti);
    let scontoBiglietti1 = sconto + scontoAggiuntivo();
    console.log("Sconto standard sommato a quello aggiuntivo: " + scontoBiglietti1);
    let scontoFinale = scontoBiglietti * scontoBiglietti1;
    console.log("Sconto finale: " + scontoFinale);
    let totaleScontato = totale - scontoFinale;
    return totaleScontato;
}
console.log(totaleDaPagare());
*/


// Esercizio 64

/*
Crea un programma che stampi lo scontrino del cinema!
Questo programma dovrà mostrare il totale dei biglietti calcolato negli esercizi precedenti e qualsiasi altra informazione tu voglia mostrare.
*/

/*

let numeroBiglietti = prompt("Quanti biglietti sono da pagare?");
let costoSingoloBiglietto = prompt("Inserisci il costo che vuoi dare al singolo biglietto");

function totaleDaPagare(numero, costoSingolo, sconto, giornoDellaSettimana, scontoAggiuntivo, scontrino) {
    numero = Number(numeroBiglietti);
    console.log("Numero dei biglietti: " + numeroBiglietti);
    costoSingolo = costoSingoloBiglietto;
    console.log("Questo è il prezzo per ciascun biglietto: " + costoSingolo);
    giornoDellaSettimana = "Venerdì";
    switch (giornoDellaSettimana)       {
        case "Lunedì":
            sconto = 20;
            break;
        case "Martedì":
            sconto = 25;
            break;
        case "Mercoledì":
            sconto = 25;
            break;
        case "Giovedì":
            sconto = 20;
            break;
        case "Venerdì":
            sconto = 15;
            console.log("Venerdì : 15");
            break;
            case "Sabato":
            sconto = 10;
            break;
            case "Domenica":
            sconto = 10;
            break;
                                        };
            function scontoAggiuntivo(scontoInPiù) {
                                                        typeof scontoInPiù === Number;
                                                        if (costoSingoloBiglietto > 5 || numeroBiglietti > 6) {
                                                                                                                scontoInPiù = 5;
                                                                                                                console.log(scontoInPiù);
                                                        }
                                                            return scontoInPiù;
            };
            

    sconto === Number(giornoDellaSettimana);

    let totale = numeroBiglietti * costoSingoloBiglietto;
    console.log("Totale costo iniziale, senza sconti: " + totale);

    console.log("Questo è lo sconto di base standard: " + sconto);

    console.log("Questo è lo sconto aggiuntivo: " + scontoAggiuntivo());

    
    let scontoBiglietti = totale / 100;
    console.log("Totale prezzo diviso per 100: " + scontoBiglietti);
    let scontoBiglietti1 = sconto + scontoAggiuntivo();
    console.log("Sconto standard sommato a quello aggiuntivo: " + scontoBiglietti1);
    let scontoFinale = scontoBiglietti * scontoBiglietti1;
    console.log("Sconto finale: " + scontoFinale);
    let totaleScontato = totale - scontoFinale;
    scontrino = `--- SCONTRINO. Numero dei biglietti: ${numeroBiglietti}. Costo di ogni singolo biglietto: ${costoSingoloBiglietto}. Prezzo totale iniziale: ${totale}. Sconto di base del giorno: ${sconto}%. Sconto aggiuntivo: ${scontoAggiuntivo()}%. Sconto finale in euro: ${scontoFinale} euro. Totale scontato: ${totaleScontato} euro`;
    return scontrino ;
}
console.log(totaleDaPagare());

*/


// Esercizio 65

/*

Scrivi un programma che preveda il passaggio in input dei seguenti parametri relativi ad un singolo libro:


- titolo
- autore
    

esempio 

- titolo ->           "Il Signore degli Anelli"
- autore ->           "Tolkien"
    

Dati questi valori genera una stringa che conterrà un tag anchor (non dovrà funzionare - sarà una sola e semplice stringa dentro una variabile) con un ipotetico link per una libreria. Le regole per la creazione della url sono le seguenti:

- la base della url dovrà essere:  www.lamiasuperlibreria.aulab/
- il nome dell’autore dovrà essere un nodo della url: quindi nomeautore/
- il titolo del libro sarà la parte finale
- tutte le lettere devono essere minuscole
- gli spazi devono essere sostituiti con il simbolo “-”
- la prima parte della url sarà il nome dell’autore e l’ultima il nome del libro unito a “.html”

esempio url: 

-  www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html

        
Una volta creata la url questa dovrà essere passata all’attributo href del tag anchor mentre il titolo del libro sarà il contenuto del tag stesso.
esempio tag anchor: 
        

- <a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>


NB: non dovete creare un vero e proprio tag da appende nel DOM, ma solo una stringa formattata come se fosse una url

*/

function creazioneURL_Libro(titolo, autore) {
                                            titolo = "Il signore degli anelli";
                                            autore = "Tolkien";
                                            autoreNodo = autore + "/";
                                            let baseURL = "www.lamiasuperlibreria.aulab/";
                                            let parteFinale = ".html";
                                            let titoloMinuscolo = titolo.toLowerCase();
                                            let autoreMinuscolo = autore.toLowerCase();
                                            console.log(titoloMinuscolo);
                                            console.log(autoreMinuscolo);
                                            let parteConvertita = titoloMinuscolo.replace("il signore degli anelli", "il-signore-degli-anelli");
                                            console.log(parteConvertita);
                                            let URLfinale = `${baseURL}${autoreNodo}${parteConvertita}${parteFinale}`;
                                            console.log(URLfinale);
                                            let attributoAnchor1 = '<a href="';
                                            let attributoAnchor2 = '">';
                                            let attributoAnchor3 = '</a>';
                                            let URLAgganciatoATagAnchor = `${attributoAnchor1}${URLfinale}${attributoAnchor2}${titolo}${attributoAnchor3}`;
                                            return URLAgganciatoATagAnchor;
                                        }
console.log(creazioneURL_Libro());
                                    