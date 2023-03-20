"use strict"

// ESERCIZIO 49
/*
let playlist = {
    canzoni:[
         {
            titolo: "Have you ever",
            artista: "The Offspring",
            annoUscita: "1998"
        },
        {
            titolo: "Miglia e promesse",
            artista: "Colle der Fomento",
            annoUscita: "2018"
        },
    ],
    aggiungiCanzone: function(titolo, artista, anno){
        this.canzoni.push(
            {
                titolo: titolo,
                artista: artista,
                annoUscita: anno            
            }     
        )
    }
};


playlist.aggiungiCanzone("Rimini", "Fabrizio de Andrè", "1978")

let titolo = prompt("Inserisci un titolo");
let artista = prompt("Inserisci un artista");
let annoUscita = prompt("Inserisci l'anno di uscita");
playlist.aggiungiCanzone(titolo, artista, annoUscita);
*/

//ESERCIZIO 50
/*
let rubrica = {
    persone : [
        {
            nome: "Alice",
            cognome: "Palmiero",
            telefono: "3791472387",
            indirizzo: {
                via: "Via dei matti 0",
                città: "Torino",
                regione: "Piemonte"
            }
        },
        {
            nome: "Maria",
            cognome: "Caia",
            telefono: "3791472387",
            indirizzo: {
                via: "Via dei matti 10",
                città: "Torino",
                regione: "Piemonte"
            }
        },
        {
            nome: "Carla",
            cognome: "Birilli",
            telefono: "3791472387",
            indirizzo: {
                via: "Via dei matti 40",
                città: "Torino",
                regione: "Piemonte"
            },
        },
    ],
    
}

console.log(rubrica);
delete rubrica.persone[1].cognome;
console.log(rubrica)
*/

//ESERCIZIO 51
/*
let garage = {
    auto : [
        {
            brand: "Mercedes",
            modello: "A 200",
        },
        {
            brand: "Toyota",
            modello: "Aygo",
        },
        {
            brand: "Fiat",
            modello: "Pandino"
        },
        {
            brand: "Fiat",
            modello: "4x4"
        },
    ],
    stampaModelli: function(){
        let marcaScelta = prompt("Sceli il brand");
        let autoPerMarca = this.auto.filter((automobile)=>{
            return automobile.brand === marcaScelta;
        })
        return autoPerMarca
    }
};

console.log(garage.stampaModelli())
*/
//ESERCIZIO 52
/*
let bowling = {
    giocatori: [
        {
            nome: "Paolo",
            punteggi: [5, 3, 7]
        },
        {
            nome: "Mario",
            punteggi: [3, 8, 2]
        },
        {
            nome: "Gianni",
            punteggi: [5, 8, 8]
        },
        {
            nome: "Vincenzo",
            punteggi: [4, 8, 2]
        }
    ],
    sommaEVinci: function () {
        let vincitore = {
            totale: 0
        }
        this.giocatori.forEach((giocatore) => {
            let totale = giocatore.punteggi.reduce((tot, num) => {
                return tot += num
            })
            console.log(totale)

            giocatore.totale = totale
            console.log(giocatore)

            if (giocatore.totale > vincitore.totale){
                vincitore = giocatore
            }
        })
        console.log("VINCITORE: ", vincitore)

        return vincitore
    },
}
*/
//ESERCIZIO 53
/*
let listaDaContare = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
];

function unSoloAr (listaAr){
    let lista = [];
    listaAr.forEach(function(elemAr){
        lista = lista.concat(elemAr)
    });
    return lista.reduce(function(obj, elemAr){
        if(!obj.hasOwnProperty(elemAr)){
            obj[elemAr] = 1;
        }
        else{
            obj[elemAr]++;
        }
    return obj
   }, {} )
};

console.log(unSoloAr(listaDaContare))
*/