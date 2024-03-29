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
 /*
        Esercizio 69
        La Rubrica
        
        Data la seguente lista di persone
        let persone = [
            {
                nome: ‘Gino’
                cognome: ‘Ginoli’,
                nuovoUtente: false
            },
            {
                nome: ‘Pino
                cognome: ‘Pinoli’,
                nuovoUtente: true
            }
        ]
        Crea una lista da visualizzare in una pagina html. Per la lista utilizza il list-group di bootstrap:
        https://getbootstrap.com/docs/5.3/components/list-group/
        Se l’utente ha la proprietà nuovoUtente settata a true aggiungi un badge con la scritta new di fianco al suo nome (https://getbootstrap.com/docs/5.3/components/badge/)
        
        function rubrica(nome, cognome, nuovoUtente) {
            if (nuovoUtente == true) {
                let elemento = document.createElement("div")
                elemento.innerHTML = `<div>${nome} ${cognome}<span class="badge bg-secondary">new</span></div>`
                document.body.append(elemento)
            }
            else if (nuovoUtente == false) {
                let elemento = document.createElement("div")
                elemento.innerHTML = `<div>${nome} ${cognome}</div>`
                document.body.append(elemento)
            }
        }
        rubrica("mattia", "cau", true)
        rubrica("mattia", "cau", false)
        */
        /*
        Esercizio 70
        Il blog
        
        Dato il seguente elenco di oggetti relativo ad un blog genera le card per ogni articolo:
        let articoli = [
            {
                titolo: ‘Il realismo magico di Sergio Toppi’,
                riassunto: ‘NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".’,
                link: ‘https://www.lospaziobianco.it/il-realismo-magico-di-sergio-toppi/’,
                immagine: ‘https://www.lospaziobianco.it/wp-content/uploads/2023/02/ImmagineEvidenza2-240x150.jpg’
            },
        ]
        
        Per ogni elemento genera una card di bootstrap (https://getbootstrap.com/docs/5.3/components/card/) da inserire nella tua pagina html
        La card dovrà contenere:
        
        - l’immagine
        - il titolo
        - il riassunto
        - un bottone con scritto “Leggi di più” che linkerà alla pagina dell’articolo e la farà aprire in una nuova finestra
        
        function card(titolo, riassunto, link , immagine) {
            let elemento= document.createElement("div")
            elemento.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${immagine}" class="card-img-top" alt="300">
            <div class="card-body">
            <h5 class="card-title">${titolo}</h5>
            <p class="card-text">${riassunto}</p>
            <a href="${link}" class="btn btn-primary">Leggi di più</a>
            </div>
            </div>`
            document.body.append(elemento)
        }
        card("Il realismo magico di Sergio Toppi", `NPE ristampa una storia del cosiddetto "Filone fantastico toppiano", creata dal maestro Sergio Toppi nel 1987: "Isola Gentile".`, `https://www.treccani.it/vocabolario/scimmia/`, `https://styles.redditmedia.com/t5_4bnm12/styles/communityIcon_5yl8civa1wv61.png`)
        */
        /*
        Esercizio 71 - BONUS
        La Registrazione
        Chiedi all’utente i seguenti dati tramite 3 prompt:
        - username
        - email
        - password
        Una volta inseriti i dati mostra una modale col titolo “Registrazione Effettuata” e col testo:
        “Ciao ${username} (${email}), benvenuto nella tua area personale”
        La modale la devi creare tramite bootstrap: https://getbootstrap.com/docs/5.3/components/modal/
        
        function modale() {
            let username = prompt("nome")
            let email=prompt("mail")
            
            if (username && email) {
                let elemento= document.createElement("div")
                elemento.innerHTML =`
                <div class="modal show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-body">
                Ciao ${username} ${email}, benvenuto nella tua area personale
                </div>
                </div>
                </div>
                </div>`

                document.body.append(elemento)
        
        }
        modale()
        */
        /*
        Es - 72
            
            Dati i seguenti tag html:
            
            - <div id=”dado”></div>
            - <button id=”lancia-dado”>Lancia dado</button>
            
            al click del bottone genera un numero casuale da 1 a 6 ed inserisci l’output nel div dado.
            
            let dado = document.getElementById("dado")
            let lancia = document.getElementById("lancia")
            lancia.addEventListener("click", function() {
                dado.innerText = Math.floor(Math.random() * 7)
            })
            */
            /*
            Es - 73
            Dato il seguente tag html:
            
            - <a href=”https://www.google.it/”>Cerca su google</a>
            
            fai in modo che ogni volta che un utente clicca sul link, invece di andare nella pagina di ricerca di google, appaia un alert con un qualsiasi messaggio. Solo dopo il terzo click sul link, verrà eseguito il suo naturale comportamento cambiando pagina.
            
            
            let link = document.getElementById("link")
            let counter = 0
            link.addEventListener("click", function (e) {
                counter ++
                alert("stai entrando su google")
                if (counter < 3){
                    e.preventDefault()
                }
            })*/
            /*
            Es - 74
            const libri = [
                {
                    titolo: " Il Signore degli Anelli ",
                    autore: "Tolkien",
                    categoria: "fantasy"
                },
                {
                    titolo: "Harry Potter",
                    autore: "Rowling",
                    categoria: "fantasy"
                },
                {
                    titolo: "Il Conte di Montecristo",
                    autore: "Dumas",
                    categoria: "narrativa classica"
                },
                {
                    titolo: "Dune",
                    autore: "Herbert",
                    categoria: "fantascienza"
                },
                {
                    titolo: "Fight Club",
                    autore: "Palahniuk",
                    categoria: "narrativa moderna"
                }
            ];
            Crea un programma  che crei una lista usando il titolo dei libri.
            Ogni titolo avrà al suo fianco un bottone con scritto "aggiungi ai preferiti". Al click di uno specifico bottone verrà emesso un alert col seguente testo: 
            "Il libro {nome_del_libro} è stato aggiunto ai preferiti"
            
            
            const libri = [
                {
                    titolo: " Il Signore degli Anelli ",
                    autore: "Tolkien",
                    categoria: "fantasy"
                },
                {
                    titolo: "Harry Potter",
                    autore: "Rowling",
                    categoria: "fantasy"
                },
                {
                    titolo: "Il Conte di Montecristo",
                    autore: "Dumas",
                    categoria: "narrativa classica"
                },
                {
                    titolo: "Dune",
                    autore: "Herbert",
                    categoria: "fantascienza"
                },
                {
                    titolo: "Fight Club",
                    autore: "Palahniuk",
                    categoria: "narrativa moderna"
                }
            ];
            
            console.log(libri.titolo);
            
            let ul = document.createElement("ul")
            
            libri.forEach(function (libro1) {
                let li = document.createElement("li")
                let btn = document.createElement("button")
                btn.innerText= "aggiungi ai preferiti"
                btn.addEventListener("click", function () {
                    alert(`Il libro ${libro1.titolo} è stato aggiunto ai preferiti`)
                })
                li.innerHTML=`${libro1.titolo} `
                document.body.append(li)
                li.append(btn)
            })
            */
            /*
            Es - 75 - BONUS
            Crea un programma chiamato “calcolatrice”. In questo programma devono essere presenti 2 tag input nei quali si potranno inserire dei numeri.
            Oltre a questi saranno presenti quattro bottoni coi seguenti simboli:
            - +
            - -
            - *
            - /
            Al click di uno dei bottoni si dovrà eseguire l’operazione matematica corrispondente relativa all’operatore selezionato rispetto ai valori dei 2 input.
            Mostrare il risultato all’utente
            
            
            let input1 = document.getElementById("input1")
            let input2 = document.getElementById("input2")
            let risultato = document.getElementById("risultato")
            let btnPiu = document.getElementById("btn+")
            btnPiu.addEventListener("click", function (event) {
                risultato.innerText = input1 + input2
            })
            */