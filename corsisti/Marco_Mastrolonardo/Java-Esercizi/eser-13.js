/*
//ESERCIZIO 49
playlist = {
    canzone1: {
        titolo: "Ride",
        nomeCantante: "Tyler Joseph",
        anno: 2015
    },
    canzone2: {
        titolo: "Safe and Sound",
        nomeCantante: "Capital Cities",
        anno: 2011
    },
    canzone3: {
        titolo: "68",
        nomeCantante: "Matteo",
        cognomeCantante: "Professione",
        //Applicazione del this ad un proprietà di un oggetto.
        nomeCompleto: function() {
            return this.nomeCantante + " " + this.cognomeCantante
        },
        anno: 2018
    },
    canzone4: {
        titolo: prompt("inserisci il titolo"),
        nomeCantante: prompt("inserisci il nome del cantante"),
        cognomeCantante: prompt("Inserisci il cognome del cantante"),
        anno: prompt("Inserisci l'anno di pubblicazione"),
        //Applicazione del this ad una proprietà il cui valore è passato tramite prompt. Il valore essendo passato tramite prompt sarà una stringa, ergo devo utilizzare questa forma ["proprietà"].
        nomecompleto: function() {
            return this["nomeCantante"] + " " + this["cognomeCantante"]
        }
    }
}
console.log(playlist["canzone1"]["titolo"])
console.log(playlist.canzone2["anno"])

console.log("canzone3", playlist["canzone3"])
//this
console.log("nomeCompleto:", playlist.canzone3.nomeCompleto())

console.log("canzone4", playlist.canzone4)
//this del prompt
console.log("nomeCompleto:", playlist.canzone4.nomecompleto())
*/
/*
playlist = {
    canzone1: {
        titolo: "Ride",
        nomeCantante: "Tyler Joseph",
        anno: 2015
    },
    canzone2: {
        titolo: "Safe and Sound",
        nomeCantante: "Capital Cities",
        anno: 2011
    },
    canzone3: {
        titolo: "68",
        nomeCantante: "Matteo",
        cognomeCantante: "Professione",
        //Applicazione del this ad un proprietà di un oggetto.
        nomeCompleto: function() {
            return this.nomeCantante + " " + this.cognomeCantante
        },
        anno: 2018
    },
}
function aggiungi() {
    playlist.nuovacanzone = {
        titolo: prompt("inserisci titolo"),
        nomecantante: prompt("inserisci nome cantante"),
        anno: prompt("inserisci anno di pubblicazione")
    }
    console.log(playlist)
}
aggiungi()

/*
playlist.canzoni.push(nuovacanzone)

console.log(playlist)
playlist.nuovacanzone = {
    titolo: "ciao",
    anno: 100
}
console.log(playlist)
*/
//Creo un oggetto playlist
let playlist = {
    //che contiene un array "canzoni"
    canzoni: [
        {
        titolo: "Ride",
        nomeCantante: "Tyler Joseph",
        anno: 2015
        },
        {
        titolo: "Safe and Sound",
        nomeCantante: "Capital Cities",
        anno: 2011
        }
    ],
    //sempre all'interno dell'oggettto playlist creo una funzione che mi permetta di stampare in console ogni canzone
    stampaCanzone: function(){
        //per ogni elemento dell'array "canzoni" (this si riferisce all'oggetto playlist),stampo in console:
        this.canzoni.forEach(canzone => {
            console.log(`titolo canzone: ${canzone.titolo}, nome del cantante: ${canzone.nomeCantante}, anno di pubblicazione: ${canzone.anno}`)
        })
    },
    //creo una funzione che mi permetta di aggiungerne un altra
    aggiungoCanzone: function(titolo, cantante, anno){
        //per inserire la canzone all'interno dell'array canzoni:
        this.canzoni.push({
            titolo: titolo,
            nomeCantante: cantante,
            anno: anno
        })
        this.stampaCanzone()
    },
}
playlist.aggiungoCanzone("68", "Matteo", "2017")
/*
console.log("----------------------------")
//ESERCIZIO 50

rubrica = {
    utente1:{
        nome:"gigi",
        cognome:"igig",
        telefono:"3412345678",
        indirizzo:{
            via:"Via delle palme",
            numeroCivico:"69",
            città:"Triggianello"
        }
    },
    utente2:{
        nome:"gigietto",
        cognome:"otteigig",
        telefono:"3518894563",
        indirizzo:{
            via:"Via via vai",
            numeroCivico:"68",
            città:"Cellamare"
        }
    },
    utente3:{
        nome:"gelsomino",
        cognome:"onimosleg",
        telefono:"3875679872",
        indirizzo:{
            via:"Via vai via",
            numeroCivico:"23",
            città:"Capurso"
        }
    }
}
console.log("Utente1",rubrica["utente1"])
console.log("Utente2",rubrica.utente2)
console.log("Utente3",rubrica["utente3"])

delete rubrica.utente2

console.log("Utente3 eliminato",rubrica.utente2)
*/

//creo un oggetto rubrica
let rubrica = {
    //un array contenente gli utenti. Indirizzo è un oggetto a sua volta che contiene le proprietà "via", "numeroCivico" e "città".
    utenti: [
        {
        nome:"gigietto",
        cognome:"otteigig",
        telefono:"3518894563",
        indirizzo:{
            via:"Via vai via",
            numeroCivico:"23",
            città:"Capurso"
            },
        },
        {
        nome:"gelsomino",
        cognome:"onimosleg",
        telefono:"3875679872",
        indirizzo:{
            via:"Via vai via",
            numeroCivico:"23",
            città:"Capurso"
            }
        },
        {
        nome:"gigi",
        cognome:"igig",
        telefono:"3412345678",
        indirizzo:{
            via:"Via delle palme",
            numeroCivico:"69",
            città:"Triggianello"
            }
        }
    ],
    //per eliminare un utente creo una funzione che prenda in input il nome e cognome dell'utente
    deleteUtente: function(nome, cognome){
        //utilizzo il filter(). 
        let utenti = this.utenti.filter(utente => {
            return utente.nome !== nome && utente.cognome !== cognome
        })
        this.utenti = utenti
        this.stampaRubrica()
    },
    stampaRubrica: function(){
        this.utenti.forEach(utente => {
            console.log(`nome:${utente["nome"]}, cognome:${utente.cognome},telefono:${utente.telefono}`)
        })
    },
    
}
//elimino l'utente "gigietto otteigig"
rubrica.deleteUtente("gigietto", "otteigig")
console.log(rubrica)
console.log("----------------------------")
//ESERCIZIO 51

garage = {
    auto1: {
        brand: 'Fiat',
        model: '500'
    },
    auto2: {
        brand: 'Fiat',
        model: 'Panda'
    },
    auto3: {
        brand: 'Lancia',
        model: 'Ypsilon'
    }
}
//creo una funzione che prenda in input la marca
function brand(marca){
    //un array che conterrà i modelli di auto richiesti
    let modelli = []
    //ciclo sull'oggetto
    for(let key in garage){
        //utilizzo dell'if. se il brand corrisponde alla marca inserita in input
        if(garage[key].brand === marca){
            //push il model all'interno dell'array modelli
            modelli.push(garage[key].model)
        }
    }
    return modelli
}
console.log(brand("Fiat"))
/*
function brand(marca){
    for(let key in garage){
        if(garage[key].brand === marca){
            console.log(garage[key].model)
        }
    }
}
brand("Fiat")

for(let key in garage) {
    console.log("Chiave (proprietà/attributo)", key)
    console.log("Valore", garage[key])
}
*/
console.log("----------------------------")
//ESERCIZIO 52
sala = {
    giocatore1: {
        nome:"Luigi",
        punteggi:[1,2,3,4,5]
    },
    giocatore2: {
        nome:"Marco",
        punteggi: [6,7,8,9,10]
    },
    giocatore3: {
        nome:"Nicola",
        punteggi: [11,12,13,14,15]
    }
}
//somma dei punteggi
let array = []
for(let key in sala){
    let totale = sala[key].punteggi.reduce(function(tot,num){
        return tot + num
    })
    array.push(totale)
}
//punteggio più alto
console.log(array)
array.sort((a, b) => {
    return b - a
})
console.log(array[0])

//console.log("numero massimo =", Math.max(...array))


/*
//53
//Dichiaro un oggetto vuoto
let conteggio = {}
/*
//uso il metodo .forEach per iterare fra gli array del primo array
function conto(arrays){
    arrays.forEach(arrayinterno => {
        //il secondo .forEach per iterare sugli array interni, su ogni iterazione, controlliamo se il valore è gia presente come "key" nell'ogetto conteggio. Se il valore è presente, incrementeremo il suo valore di '1', se no lo inizializziamo a '1'.

        arrayinterno.forEach(parola => {
            console.log(parola)

            //Utilizzo il || OR operatore per controllare se la key non è stata inizializzata nell'oggetto.
            //Se ritorna 'undefined', inizializziamo il valore della key '0' + '1'

            conteggio[parola] = (conteggio[parola] || 0)+1
        })
    })
}
/*
function conto(array){
    array.forEach(arrayinterno => {
        arrayinterno.forEach(elemento => {
            conteggio[elemento] = (conteggio[elemento] || 0) + 1
        })
    });
}
*/
/*
console.log(conto([
         ["abc", "gino", "aaa"],
         ["abc", "dino", 123],
         ["aaa", "gino", 321],
         ["xyz", "klm", "aaa"],
    ]))
console.log(conteggio)
*/
console.log("----------------------------")
function conto(array){
    //dichiaro un array che conterrà tutti gli elementi degli arrayinterni
    let arraysum = []
    //utilizzo il forEach per accedere agli arrayinterni
    array.forEach(arrayinterno => {
        console.log("arrayinterno", arrayinterno)
        //tramite il concat li unisco all'interno di arraysum
        arraysum = arraysum.concat(arrayinterno)
    })
    console.log("somma elementi", arraysum)
    // il metodo reduce richiama la callback function specificata una volta per ogni elemento dell'arraysum
    return arraysum.reduce(function (oggetto, arrayinterno) {
        //Questa funzione passa un oggeto vuoto {} come parametro initial value, se l'oggetto(accumulatore o totale) non ha come proprietà un elemento dell'array interno (arrayinterno) ne crea una con valore 1.
        if(!oggetto.hasOwnProperty(arrayinterno)) {
            oggetto[arrayinterno] = 1
        }
        else {
            //nel caso in cui ci sia una proprietà chiamata "arrayinterno" all'interno dell'oggetto ne aumenta il valore di uno
            oggetto[arrayinterno]++
        }
        return oggetto
        
    }, {})
}
console.log(conto([
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]))
console.log("---------------------------------------------")
/*
//ESERCIZIO 54
*/
/*
Funzione input: lista "libri", e "categoria".
Return: lista di tag (esempio = <a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>)

`<a href="www.lamiasuperlibreria.aulab/${autore}/${titolo}.html></a>`
*/

let lista = {
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
    filtraPerCategoria: function (categoria){
        let libripercategoria = []
        lista.libri.forEach(libro => {
            if(libro.categoria.toLowerCase() === categoria.toLowerCase()){
                return libripercategoria.push(libro)
            }
        })
       return libripercategoria
    },
    LinkHtml: function (libro) {
        let titolomodificato = libro.titolo.replaceAll(" ", "-");
        let link = `<a href="www.lamiasuperlibreria.aulab/${libro.autore.toLowerCase()}/${titolomodificato.toLowerCase()}.html">${
          libro.titolo}</a>`

        return link 
      },
      linkCategoria: function(categoria) {
        let libri = this.filtraPerCategoria(categoria);
        let arrayLink = libri.map((libro) => {
          return this.LinkHtml(libro);
        })
    
        return arrayLink;
      }
}
console.log(lista.linkCategoria("fantasy"))
/*
let lista = {
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
      },
    ],
    filtraPerCategoria: function (categoria) {
        let libriPerCategoria = this.libri.filter(function (libro) {
          return libro.categoria.toLowerCase() === categoria.toLowerCase();
        });
    
        return libriPerCategoria;
      },
    
      LinkHtml: function (libro) {
        let titolomodificato = libro.titolo.replaceAll(" ", "-");
        let link = `<a href="www.lamiasuperlibreria.aulab/${libro.autore.toLowerCase()}/${titolomodificato.toLowerCase()}.html">${
          libro.titolo
        }</a>`;
    
        return link 
      },
    
      linkCategoria: function(categoria) {
        let libri = this.filtraPerCategoria(categoria);
        let arrayLink = libri.map((libro) => {
          return this.LinkHtml(libro);
        })
    
        return arrayLink;
      }
}
console.log(lista.linkCategoria("fantasy"))
*/
/*
//ESERCIZIO 55
programma che generi un oggetto(settimana = {})contenente i giorni. Ogni giorno sarà un array al quale si potrà aggiungere un evento(oggetto) che contiene le chiavi nomeEvento ed inizioEvento
//Test 1
let settimana = {
    lunedi: [],
    martedi: [],
    mercoledi:[],
    giovedi: [],
    venerdi: [],
    sabato: [],
    domenica: [],
    aggiungievento: function(giorno){
        switch(giorno){
            case "lunedi":
                let eventoLune = {
                    nomeEvento: prompt("nome evento"),
                    inizioEvento: +prompt("inizio evento")
                }
                this.lunedi.push(eventoLune)
                break;
            case "martedi":
                let eventoMart = {
                    nomeEvento: prompt("nome evento"),
                    inizioEvento: prompt("inizio evento")
                }
                this.martedi.push(eventoMart)
                break;
            case "mercoledi":
                let eventoMerc = {
                    nomeEvento: prompt("nome evento"),
                    inizioEvento: prompt("inizio evento")
                }
                this.mercoledi.push(eventoMerc)
                break;
        }
        return settimana
    }
}
settimana.aggiungievento("mercoledi")
settimana.aggiungievento("lunedi")
settimana.aggiungievento("lunedi")
console.log(settimana)
*/
/*
//Test 2
let settimana = {
    lunedi: [],
    martedi: [],
    mercoledi:[],
    giovedi: [],
    venerdi: [],
    sabato: [],
    domenica: [],
    aggiungoevento: function(giorno){
        for(let key in settimana){
            if(key === giorno){
                this[key] = [{
                    nomeEvento: "nome evento",
                    inizioEvento: "inizio evento"
                }]
            }
        }
        return settimana
    },
    filtropergiorno: function(giorno){
        let risultato;
        for(let key in settimana){
            if(giorno === key){
                return risultato = settimana[key]
            }
        }
        return risultato
    }
}
settimana.aggiungoevento("martedi")
settimana.aggiungoevento("lunedi")
settimana.aggiungoevento("mercoledi")
console.log(settimana)
console.log(settimana.filtropergiorno("martedi"))
console.log(settimana.filtropergiorno("lunedi"))
/*
for(let key in settimana){
    if(Giorno === key){
        console.log(settimana[key])
    }
}
*/
let settimana = {
    lunedi: [],
    martedi: [],
    mercoledi:[],
    giovedi: [],
    venerdi: [],
    sabato: [],
    domenica: [],
    aggiungoevento: function(giorno){
        let evento = {
            nomeEvento: "nomeEvento", //prompt("inserisci nome Evento")
            inizioEvento: "inizioEvento"    
        }
        for (let key in settimana){
            if(giorno === key){
                settimana[key].push(evento)
            }
        }
        return settimana
    },
    filtropergiorno: function(giorno){
        let risultato;
        for(let key in settimana){
            if(giorno === key){
                return risultato = settimana[key]
            }
        }
        return risultato
    },
    filtropergiorno: function(giorno){
        let risultato;
        for(let key in settimana){
            if(giorno === key){
                return risultato = settimana[key]
            }
        }
        return risultato
    },
    filtropernomeevento: function(nomeEvento){
        let eventipernome = []

        //ciclo sull'oggetto settimana
        for(let key in this){
            
            //Se l'elemento dell'oggetto è un array
            if(Array.isArray(this[key])){

                //ciclo sugli elementi dell'array, ovvero gli eventi.
                this[key].forEach(evento => {

                    //condizione se il nomeEvento dell'evento corrisponde a quello immesso dall'utente
                    if(evento.nomeEvento === nomeEvento){
                        return eventipernome.push(evento)
                    }
                    
                })
               
            }
            
        }
        return eventipernome
    }
}
settimana.aggiungoevento("lunedi")
settimana.aggiungoevento("lunedi")
settimana.aggiungoevento("mercoledi")
settimana.aggiungoevento("giovedi")
console.log("oggetto settimana a cui sono stati aggiunti gli oggetti",settimana)
settimana.filtropergiorno("lunedi")
console.log("eventi per giorno", settimana.filtropergiorno("mercoledi"))
console.log("eventi filtrati", settimana.filtropernomeevento("nomeEvento"))










