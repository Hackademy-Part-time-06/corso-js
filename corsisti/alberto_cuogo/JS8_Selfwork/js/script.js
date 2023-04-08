"use strict"
console.log("script.js caricato!")

// ! Esercizio 49
console.group("PLAYLIST")

let playlist = {
    nome: "La Playlist per affrontare il corso",
    canzoni: [
        { 
            titolo: "Bla Bla",
            nomeCantante: "Ariana Grande",
            anno: 2022
        },
        {
            titolo: "Thunderstruck",
            nomeCantante: "AC/DC",
            anno: 1990
        }
    ],

    stampaCanzoni: function() {
        this.canzoni.forEach(function(canzone) {
            console.log(`${canzone.titolo} - ${canzone.nomeCantante} (${canzone.anno})`)
        })
    },

    aggiungiCanzone: function(titoloCanzone, nomeCantante, annoPubblicazione) {
        this.canzoni.push({
            titolo: titoloCanzone,
            nomeCantante: nomeCantante,
            anno: annoPubblicazione
        })

        this.stampaCanzoni()
    }
}

playlist.aggiungiCanzone(
    "SPLASH",
    "Beppino",
    2042
)

console.groupEnd()


// ! Esercizio 50
console.group("RUBRICA")

let rubrica = {
    utenti: [
        {
            nome: "Beppe",
            cognome: "Beppino",
            telefono: "3473675299",
            indirizzo: {
                via: "via Armando",
                numero: "47",
                citta: "Venezia"
            },
        },
        {
            nome: "Gino",
            cognome: "Beppino",
            telefono: "3473675299",
            indirizzo: {
                via: "via Armando",
                numero: "47",
                citta: "Venezia"
            },
        },
      ],
    eliminaUtente: function (nome, cognome) {
        let utenti = this.utenti.filter(function (utente) {
            return utente.nome !== nome && utente.cognome !== cognome
        })

        this.utenti = utenti
        this.stampaRubrica()
    },
    stampaRubrica: function () {
        this.utenti.forEach(function (utente) {
            console.log(`${utente.nome} ${utente.cognome} (${utente.telefono})`)
        })
    }
}

console.log(rubrica.utenti)

rubrica.eliminaUtente("Gino", "Gini")


console.groupEnd()


// ! Esercizio 51
console.group("GARAGE AUTO")

let garage = {
    auto: [
        {
            brand: "Renault",
            model: "Twingo"
        },

        {
            brand: "Cupra",
            model: "Formentor"
        },

        {
            brand: "Cupra",
            model: "Leon"
        },

        {
            brand: "Ferrari",
            model: "Purosangue"
        },

        {
            brand: "Ferrari",
            model: "Portofino"
        }
    ],
    autoPerMarca: function (marca) {
        let risultato = []
        this.auto.forEach((elemento) => {
            if (elemento.brand === marca) {
                risultato.push(elemento)
            }
        })

        return risultato
    }
}

console.log(garage.autoPerMarca("Ferrari"))

// function ricercaAuto(marca) {
//     for (let key in garage)

//     if (garage[key].brand === marca) {
//         console.log("Auto disponibile: " + garage[key].model)
//     }
// }

// ricercaAuto("Ferrari")

console.groupEnd()


// ! Esercizio 52
console.group("SALA DA BOWLING")

let salaBowling = {
    giocatori: [
        {
            nome: "Gino",
            punteggio: [10, 7, 9, 5, 8, 6, 10, 10, 10, 8]
        },
        {
            nome: "Beppe",
            punteggio: [8, 9, 10, 10, 6, 7, 5, 8, 9, 10]
        },
        {
            nome: "Pino",
            punteggio: [7, 9, 10, 8, 6, 7, 10, 10, 8, 5]
        }
    ],
    stampaGiocatori: function () {
        this.giocatori.forEach(function (giocatore) {
            console.log(`${giocatore.nome} - punteggi: ${giocatore.punteggio.join()} - totale: ${giocatore.totale ? giocatore.totale : ""}`)
        })
    },
    calcolaPunteggi: function () {
        this.giocatori.forEach((giocatore) => {
            let totale = 0
            giocatore.punteggio.forEach((punteggio) => {
                totale += punteggio
            })

            giocatore.totale = totale
        })
        
        this.stampaGiocatori()
    },
    calcolaVincitore: function () {
        this.calcolaPunteggi()
        this.giocatori.sort((a, b) => {
            return b.totale - a.totale
        })
        return this.giocatori[0]
    }
}

console.log(salaBowling.calcolaVincitore())


console.groupEnd()


// ! Esercizio 53

console.group("CALCOLO OCCORRENZE")

let listeAnnidate = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]

function calcoloOccorrenze(lista) {
    let listaUnica = []
    lista.forEach(function(elementoArray) {
        listaUnica = listaUnica.concat(elementoArray)
    })

    return listaUnica.reduce(function (obj, elementoArray) {
        if (!obj.hasOwnProperty(elementoArray)) {
            obj[elementoArray] = 1
        }
        else {
            obj[elementoArray]++
        }

        return obj

    }, {})
}

console.log(calcoloOccorrenze(listeAnnidate))

console.groupEnd()


// ! Esercizio 54

console.group("LIBRI PER CATEGORIA")

let libreria = {
    libri: [
        {
            titolo: "Il Signore degli Anelli",
            autore: "Tolkien",
            categoria: "fantasy",
        },
        {
            titolo: "Harry Potter",
            autore: "Rowling",
            categoria: "fantasy",
        },
        {
            titolo: "Il Conte di Montecristo",
            autore: "Dumas",
            categoria: "narrativa classica",
        },
        {
            titolo: "Dune",
            autore: "Herbert",
            categoria: "fantascienza",
        },
        {
            titolo: "Fight Club",
            autore: "Palahniuk",
            categoria: "narrativa moderna",
        }
    ],

    filtraPerCategoria: function(categoria) {
        let libriPerCategoria = this.libri.filter(function(libro) {
            return libro.categoria.toLowerCase() === categoria.toLowerCase()
        })

        return libriPerCategoria
    },

    generaLinkHtml: function(libro) {
        let slug = libro.titolo.replaceAll(" ", "-")
        let link = `<a href="www.lamiasuperlibreria.aulab/${libro.autore.toLowerCase()}/${slug.toLowerCase()}.html">${libro.titolo}`

        return link
    },

    linkPerCategoria: function(categoria) {
        let libri = this.filtraPerCategoria(categoria)
        let listaLink = libri.map((libro) => {
            return this.generaLinkHtml(libro)
        })

        return listaLink
    }
}

console.log(libreria.linkPerCategoria("fantasy"))

console.groupEnd()