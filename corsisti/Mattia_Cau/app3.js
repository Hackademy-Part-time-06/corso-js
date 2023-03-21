/*
Esercizio 60

Scrivi un programma (funzione) che calcoli l’importo da pagare per i biglietti del cinema. Il programma dovrà prendere in input i seguenti dati:
- numero dei biglietti
- costo del singolo biglietto

Una volta avuti i dati bisognerà calcolare il totale e restituirlo

function tot(nBiglietti, prezzo) {
    let risultato = nBiglietti * prezzo
    return risultato
}
console.log(tot(3,5));
*/
/*
Esercizio 61

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) uno sconto espresso come numero. Questa sarà la percentuale di sconto da applicare al totale.

Esempio: 
- 2 biglietti
- 10 euro a biglietto
- 10 % sconto

risultato 18€

function tot(nBiglietti, prezzo, sconto) {
    let risultato = nBiglietti * prezzo
    let risultatoSconto = risultato - (risultato/100*sconto)
    return risultatoSconto
}
console.log(tot(2,10,10));
*/
/*
Esercizio 62

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) il giorno della settimana. 
In base al giorno applica le seguenti scontistiche:

- lunedi e martedi: - 10 % sul totale
- mercoledi: - 20%

function tot(nBiglietti, prezzo,giorno) {
    let risultato = nBiglietti * prezzo
    if(giorno == "martedi" || "lunedi"){
        return risultato - (risultato/100*10)
    }else if(giorno == "mercoledi"){
        return risultato - (risultato/100*20)
    }
}
console.log(tot(2,10,"lunedi"));
*/
/*
Esercizio 63 - DIFFICILE

Amplia il programma scritto nell’esercizio precedente.
Prevedi la possibilità di poter farti passare (ergo: un altro parametro nella funzione) una logica ad hoc per un altro sconto (callback).
A questa callback dovrai passare in input tutti i parametri che ti vengono passati nella funzione principale.
Crea tu una nuova logica di sconto ed applicalo al totale, dopo averlo calcolato seguendo le logiche usate fino ad ora. 
Hai la massima libertà riguardo a che tipologia di sconto applicare.

Esempio:
posso creare uno sconto in base al numero dei biglietti comprato: se compri 3 biglietti hai un ulteriore 5% di sconto, se ne prendi 5 invece sale al 10%.


function scontoComitiva(totaleDaManiolare) {
    let franco =totaleDaManiolare / 2 
    return franco
   /* if(numeroBiglietti>=5){
        totale= totaleDaManiolare - (totaleDaManiolare/100*15)
        return totale
    }*
}


function tot(nBiglietti, prezzo, callback) {
    let risultato = nBiglietti * prezzo
  
    if (typeof callback ==="function") {
        callback(risultato, nBiglietti, prezzo) 
    }
    console.log(risultato);
    return risultato
}
tot(2, 20, scontoComitiva);
*/


/*
Esercizio 64

Crea un programma che stampi lo scontrino del cinema!
Questo programma dovrà mostrare il totale dei biglietti calcolato negli esercizi precedenti e qualsiasi altra informazione tu voglia mostrare.

function tot(nBiglietti, prezzo,giorno) {
    let risultato = nBiglietti * prezzo
    if(giorno == "martedi" || "lunedi"){
        return `lei ha acqistato ${nBiglietti} biglietti, ed un prezzo di €${prezzo} per un totale di €${risultato}, sconto 10%. tot= €${risultato - (risultato/100*10)}` 
    }else if(giorno == "mercoledi"){
        return `lei ha acqistato ${nBiglietti} biglietti, ed un prezzo di €${prezzo} per un totale di €${risultato}, sconto 10%. tot= €${risultato - (risultato/100*20)}`
    }
}
console.log(tot(2,10,"lunedi"));
*/
/*
Esercizio 65

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

function link(titolo, autore) {
    let titoloM = titolo.toLowerCase()
    let autoreM = autore.toLowerCase()
    let base = `www.lamialibreria/${autoreM}/${titoloM}.it`
    let base_= base.replace(/ /g, "-")
    let risultato = document.createElement("a")
    risultato.href = base_
    risultato.innerText = titolo
    document.body.append(risultato)
    console.log(base_);
}
link("Il Signore degli Anelli",  "Tolkien" )
*/
/*
Esercizio 66

Crea un programma che simuli una partita a carta forbici e sasso!
Lo scopo è sconfiggere l'avversario scegliendo un segno in grado di battere quello dell'altro, secondo le seguenti regole:

1. Il sasso spezza le forbici (vince il sasso)
2. Le forbici tagliano la carta (vincono le forbici)
3. La carta avvolge il sasso (vince la carta)

Il programma dovrà essere una funzione che si occupi generare casualmente un segno per 2 giocatori.
Una volta generati i segni per ogni giocatore bisognerà valutare il risultato seguendo la logica come sopra.
E’ ammesso il pareggio!
Un volta calcolato il risultato mostrarlo in console o tramite un alert.

function giocaCartaForbiciSasso() {

    const segni = ["carta", "forbici", "sasso"];
    const giocatore1 = segni[Math.floor(Math.random() * segni.length)];
    const giocatore2 = segni[Math.floor(Math.random() * segni.length)];
  
  
    if (giocatore1 === giocatore2) {
      return "Pareggio";
    } else if (
      (giocatore1 === "sasso" && giocatore2 === "forbici") ||
      (giocatore1 === "forbici" && giocatore2 === "carta") ||
      (giocatore1 === "carta" && giocatore2 === "sasso")
    ) {
      return "Giocatore 1 vince con " + giocatore1 + " contro " + giocatore2;
    } else {
      return "Giocatore 2 vince con " + giocatore2 + " contro " + giocatore1;
    }
  }
console.log(giocaCartaForbiciSasso());
*/
/*
Esercizio 67 - DIFFICILE

Amplia il programma scritto nell’esercizio precedente.
Il pareggio non è più ammesso per i nostri giocatori!!!!!
In caso di pareggio continua a farli giocare finchè uno dei 2 non verrà sconfitto!

NB: serve il while!!!!!!

function giocaCartaForbiciSassoSenzaPareggio() {

    const segni = ["carta", "forbici", "sasso"];
    const giocatore1 = segni[Math.floor(Math.random() * segni.length)];
    const giocatore2 = segni[Math.floor(Math.random() * segni.length)];

    if (giocatore1 === giocatore2) {
        let pareggio = true
        while (pareggio) {

        const giocatore1 = segni[Math.floor(Math.random() * segni.length)];
        const giocatore2 = segni[Math.floor(Math.random() * segni.length)];

        if (giocatore1 !== giocatore2) {
            if ((giocatore1 === "sasso" && giocatore2 === "forbici") ||
            (giocatore1 === "forbici" && giocatore2 === "carta") ||
            (giocatore1 === "carta" && giocatore2 === "sasso")) {
                return "Giocatore 1 vince con " + giocatore1 + " su " + giocatore2;
                pareggio = false
            }
            else {
                return "Giocatore 2 vince con " + giocatore2 + " su " + giocatore1;
                pareggio = false
            }

        }
        }
        }
    else if (
        (giocatore1 === "sasso" && giocatore2 === "forbici")|| 
        (giocatore1 === "forbici" && giocatore2 === "carta") ||
        (giocatore1 === "carta" && giocatore2 === "sasso")
    ) {
        return "Giocatore 1 vince con " + giocatore1 + " su " + giocatore2;
    }
    else {
        return "Giocatore 2 vince con " + giocatore2 + " su " + giocatore1;
    }
}
console.log(giocaCartaForbiciSassoSenzaPareggio())
*/