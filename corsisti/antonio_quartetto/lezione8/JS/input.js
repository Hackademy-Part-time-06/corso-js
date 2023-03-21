
/*esercizio49*/

console.group("ESERCIZIO 49");

let playlist = {
    canzoni: [
        
        {
            titolo: "Cenere",
            nomeCantante: "Lazza",
            anno: "2023",
        },

        {
            titolo: "Si Cagnata",
            nomeCantante: "Tony Colombo",
            anno: "2020",
        },
        
    ],

    aggiungiCanzone: function(titolo, nomeCantante, anno){
        this.canzoni.push(
            {
                titolo: titolo,
                nomeCantante: nomeCantante,
                anno: anno,
            },
        )
        this.canzoni.forEach(
            function (canzone){
                console.log(canzone.titolo)//canzone.nomeCantante //canzone.anno
            }
        )
    }
}

playlist.aggiungiCanzone("Giggino o bell", "ANNA", "2021")
console.log(playlist.canzoni)

console.groupEnd()


/*esercizio50*/

console.group("ESERCIZIO 50");

let rubrica = {
    utenti: [
        {
            nome: "Antonio",
            cognome: "Quartetto",
            telefono: "3402512498",
            indirizzo: {
                via: "Sbruffi",
                citta: "POoggiomarino",
                provincia: "Napoli",
                cap: "80040",
            }
        },

        {
            nome: "Giuseppe",
            cognome: "Arnone",
            telefono: "3402512498",
            indirizzo: {
                via: "Sbruffi",
                citta: "POoggiomarino",
                provincia: "Napoli",
                cap: "80040",
            }
        }
    ],

    stampatenti: function (utente){   //mi stampa gli utenti
        this.utenti.forEach(function(utente){
            console.log(`${utente.nome} ${utente.cognome}`)
        })
    },
    aggiungiUtente: function(nome, cognome, telefono,{via, citta, provincia, cap}){
        this.utenti.push(
            {
                nome: nome,
                cognome: cognome,
                telefono: telefono,
                indirizzo: {
                    via: via,
                    citta: citta,
                    provincia: provincia,
                    cap: cap,
                },

            },
        )
        
    },

   /* eliminaUltimoUtente: function(){

    }
    */


}



//aggiungo l'utente
rubrica.aggiungiUtente("Giuseppe", "Arnone", "3201234900", "Giacomo Matteotti", "Casoria", "Napoli", "80026")

//stampo gli utenti
rubrica.stampatenti()

//delete rubrica.utenti[0].nome     

rubrica.utenti.forEach((utente, i) => {    //cosi lo faccio in modo dinamico e delimino tutti i nomi
    delete utente.nome
})


console.log("Rubrica Modificata", rubrica.utenti)

console.groupEnd()






/*esercizio51*/

console.group("ESERCIZIO 51");

let garage = {

    listaAuto: [

        {
            brand: "Volkswagen",
            modello: "Golf6",

        },

        {
            brand: "Ferrari",
            modello: "Enzo",

        },

        {
            brand: "Lancia",
            modello: "Delta",

        },

        {
            brand: "Fiat",
            modello: "Uno-Turbo",

        },

        {
            brand: "Fiat",
            modello: "Panda 4x4",

        },


    ],
    filtroPerBrand: function(brand){
        let listaFiltrata = this.listaAuto.filter(function (auto) {
            if (auto.brand === brand) {
                return true
            }  
            return false  
            //return auto.brand === brand    ALTERNATIVA
        }
        )
        return listaFiltrata
    },

}

console.log(garage.filtroPerBrand("Fiat"))




console.groupEnd()





/*esercizio52*/

console.group("ESERCIZIO 52")

let salaBowling = {

    giocatori: [

        {
            nome: "Antonio",
            punteggi: [2, 5, 7, 10, 8] //si può usare il math random
        },

        {
            nome: "Giuseppe",
            punteggi: [1, 1, 3, 1, 4]
        },

        {
            nome: "Ciro",
            punteggi: [10, 10, 7, 10, 8]
        },

        {
            nome: "Simone",
            punteggi: [6, 1, 7, 3, 8]
        },
        
    ],

   
        
    calcoloPunteggi: ( function () {
        this.giocatori.forEach((giocatore) => {
            let risultato = giocatore.punteggi.reduce((tot, numero) => {
               //console.log(tot, numero)
               return tot + numero
            })
            giocatore.risultato = risultato
        })
    }),

    vincitore: function () {

        this.calcoloPunteggi();

       this.giocatori = this.giocatori.sort((a,b) => {

           return b.risultato - a.risultato
            
        })
        return salaBowling.giocatori
    },
    
}

console.log(salaBowling.vincitore(salaBowling.calcoloPunteggi()))


console.groupEnd()


/*esercizio53*/



console.group("ESERCIZIO 53")



























console.groupEnd()