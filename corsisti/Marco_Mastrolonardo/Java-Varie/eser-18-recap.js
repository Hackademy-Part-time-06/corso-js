//nuovo array in cui sono contenuti i nomi ma con la prima lettera maiuscola.
let listanomi = ["marco", "pino"]
let listanomiUppercase = listanomi.map(nome => {
    return nome.charAt().toUpperCase() + nome.slice(1)
})
console.log("lista nomi con il primo carattere maiuscolo", listanomiUppercase)

let listaNumeri = [2, 3, 4, 5, 6, 7]
//solo numeri pari

let listanumeripari = listaNumeri.filter(numero => {
    return numero % 2 === 0 //!(numero % 2)
})
console.log(listanumeripari)

let listanumeridispari = listaNumeri.filter(numero => {
    return numero % 2 !== 0 //numero % 2
})
console.log(listanumeridispari)


let anni = 19
let possoGuidare
/*
if (anni >= 18){
    possoGuidare = "si"
}
else {
    possoGuidare = "no"
}
*/
possoGuidare = anni >= 19 ? "si" : "no"
console.log(possoGuidare)

//itera una funzione su ogni elemento dell'array
let totale = listaNumeri.reduce((risultato, numero) => {
    return risultato += numero
}, 0)//,"") come stringa
console.log("totale", totale)

//oggetti

let gruppo = {
    personegrandi: [
        {
            nome: "Marco",
            età: 23
        },
        {
            nome: "Giuseppe",
            età: 27
        }
    ],
    personepiccole: [
        {
            nome: "Gaetano",
            età: 10
        },
        {
            nome: "Giulia",
            età: 8
        }
    ]
}
//per sapere il nome della persona 0 dell'array persone_grandi
console.log(gruppo.personegrandi[0].nome)

//per sapere il nome di ogni persona nell'array persone_grandi
gruppo["personegrandi"].forEach(persona => {
    console.log(persona.nome)
})
//elimino Marco
delete gruppo["personegrandi"][0]

//Aggiungo Andrea
gruppo.personegrandi.push({
    nome: "Andrea",
    età: 22
})

//Aggiungo personeanziane con la persona Dino dentro
gruppo.personeanziane = [
    {
        nome: "Dino",
        età: 88
    }
]
console.log("Gruppo persone",gruppo)
//per sapere ogni nome ed età corrispondente di ogni array persone
for(let key in gruppo){
    gruppo[key].forEach(persona => {
        let Età = persona.età
        console.log(`nome: ${persona.nome}, Età: ${Età} ${typeof Età}`)
    })
}
//Per sapere l'età della persona il cui nome è inserito in input.
gruppo.saluta = function(qualcuno){
    //Array di arrivo del risultato
    let risultato = []
    //ciclo sugli elementi degli oggetti
    for(let key in this){
        //se l'elemento dell'oggetto è un'array
        if(Array.isArray(this[key])){
            //fai un ciclo sui suoi elementi
            this[key].forEach(persona => {
                //se l'input corrisponde al nome di una persona presente
                if(persona.nome === qualcuno){
                    //inserisci l'età nell'array risultato
                    return risultato.push(persona.età)
                }
            })
        }
    }
    return risultato
}
console.log(gruppo.saluta("Giuseppe"))

//DOM (document object model). Per interfacciarci con gli elementi della pagina dobbiamo andare a "cercarli"

//cerchiamo all'interno del document un elemento con attributo "id" e valore passato "ciao", prendiamo un elemento con id="ciao"
let ciao = document.getElementById("ciao")

//aggiungere o modificare un testo di un elemento
ciao.innerText = "testo aggiunto o cambiato"

//leggere il testo
console.log(ciao.innerText)

