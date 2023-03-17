//Esercizio 49-------------------------------------------------------------
/*Definisci un oggetto playlist che contiene una proprietà canzoni.
Inserisci una o 2 canzoni e ciascuna deve avere le seguenti proprietà:
titolo
nomeCantante
anno

Dopo prevedi la possibilità di far inserire all’utente delle nuove canzoni.
Ad ogni canzone inserita stampa in console tutte le canzoni:*/

/*let playlist = {//oggetto
    canzoni: {//proprietà
        HowDeepIsYourLove: {
            titolo: "How deep is your love",
            nomeCantante: "Bee Gees",
            anno: 1977
        },
        mysteryOfLove: {
            titolo2: "The Mistery of love",
            nomeCantante2: "Sufjan Stevens",
            anno2: 2017
        }
    },
    nuoveCanzoni: () => {
        let newTitolo = prompt('Inserisci un nuovo titolo');
        let newCantante = prompt('Inserisci il cantante/gruppo relativo al titolo inserito');
        let newAnno = prompt('Inserisci un anno relativo al numero inserito');

        playlist.canzoni[`${newTitolo}`] = {
            titolo: newTitolo,
            nomeCantante: newCantante,
            anno: newAnno,
        }
    }
}
console.log("Canzone in riproduzione :", playlist.canzoni)

playlist.nuoveCanzoni();
console.log(playlist);*/

//Esercizio 50-------------------------------------------------------------

/*Definisci un oggetto rubrica che ha come proprietà gli utenti. Per ogni utente specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).
Quindi popolare la rubrica con dei dati a piacere. 
Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.*/

/*let rubrica = {
    utenti: {
        marioRossi: {
            nome: "Mario",
            cognome: "Rossi",
            tel: 3485275698,
            indirizzo: "via dei ciliegi, 91"
        },
        marioBiondi: {
            nome: "Mario",
            cognome: "Biondi",
            tel: 3235272588,
            indirizzo: "via dei girasoli, 88"
        },
        lucioBiondolillo: {
            nome: "Lucio",
            cognome: "Biondolillo",
            tel: 9635271234,
            indirizzo: "via dei lilli, 77"
        },
        francescoSantalucia: {
            nome: "Francesco",
            cognome: "Santalucia",
            tel: 3481234567,
            indirizzo: "via dei ciliegi, 63"
        }
    }
}
console.log("Pagine Bianche (bei ricordi eh?) :", rubrica.utenti)*/

//alternativa 1
/*delete rubrica.utenti.lucioBiondolillo;
console.log("Pagine Bianche rivisitate :", rubrica.utenti)*/

//alternativa 2
/*rubrica.utenti.lucioBiondolillo.nome = null;
console.log("Pagine Bianche senza Lucio Biondolillo :", rubrica.utenti.lucioBiondolillo)*/

//Esercizio 51-------------------------------------------------------------

/*Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili. 
Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.*/

/*let garage = {
    quanteBelleAuto: [
        {
            brand: "renault",
            model: "twingo",
        },
        {
            brand: "maserati",
            model: "levante",
        },
        {
            brand: "fiat",
            model: "panda",
        },
        {
            brand: "fiat",
            model: "500",
        }
    ]
}
console.log("le auto presenti nel garage sono:", garage.quanteBelleAuto);

let brand = "fiat";

let listaFiltrataPerModello = garage.quanteBelleAuto.filter(function (elemento) {
    return elemento.brand == brand

});
console.log(listaFiltrataPerModello);*/

//Esercizio 52-------------------------------------------------------------

/*Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere una lista di giocatori che saranno formati dalle proprietà, nome e punteggi.

Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita */

let salaBowl = {
    giocatori: [
        {
            nome: "Mattia",
            punteggio: [2, 4],
        },
        {
            nome: "Jessy",
            punteggio: [1, 8],
        },
        {
            nome: "Alice",
            punteggio: [9, 18],
        },
    ]
}

salaBowl.youWin = function () {
    for (let i = 0; i < this.giocatori.length; i++)//this= in questo oggetto 
    {
        let giocatoreSingolo = this.giocatori[i].punteggio
        let somma = giocatoreSingolo.reduce(function(tot, val){
            return tot += val;  
        })
        giocatoreSingolo.somma = somma
        console.log(somma);
    }
}
salaBowl.youWin()

let salaDaBowling = {
    listaGiocatori: [
        {
            nome: "Jimbo",
            punteggi: [10, 10, 10, 10 ,1]
        },
        {
            nome: "Antonio",
            punteggi: [5, 8, 7, 3 ,10]
        },
        {
            nome: "Ciro",
            punteggi: [8, 9, 9, 10 ,10]
        },
        {
            nome: "Simone",
            punteggi: [5, 5, 5, 10 ,7]
        }
    ],
    calcoloPunteggioFinale: function() {
        this.listaGiocatori.forEach((giocatore) => {
            let PunteggioFinale = giocatore.punteggi.reduce((valorePrecedente, valoreCorrente) => {
                console.log(valorePrecedente + "/" + valoreCorrente)
                return valorePrecedente + valoreCorrente
            })
            giocatore.PunteggioFinale = PunteggioFinale
        })
    },
    chiEIlVincitore: function() {
        this.listaGiocatori = this.listaGiocatori.sort((a, b) => {
            return b.PunteggioFinale - a.PunteggioFinale

        })
        console.log(salaDaBowling.listaGiocatori)
    }

}

salaDaBowling.calcoloPunteggioFinale()

let risultatoFinale = salaDaBowling.chiEIlVincitore()