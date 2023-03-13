//Re-cap
let nomenuovo = "Tizio"
let listaNomi = ["Gino", "Pino", "Nino", nomenuovo]
//lunghezza
console.log(listaNomi.length)
//Aggiungere un elemento
listaNomi.push("Ciao")
//Togliere .pop
listaNomi.pop("Gino")
//Come scegliere/selezionare un elemento che ci interessa
console.log(listaNomi[1])
//Scorrere fra gli elementi
for(let i=0;i<listaNomi.length;i++){
    console.log(listaNomi[i])
}
//listaNomi.forEach() avere la possibilità di un ciclo, senza dover utilizzare il for.

listaNomi.forEach(function(nome, index){
    console.log("For Each", nome, index) //index indica la posizione dell'elemento all'interno dell'array
    console.log(nome.toUpperCase())
})
//utilizziamo un callback 
/*
For Each Gino 0
GINO
For Each Pino 1
PINO
For Each Nino 2
NINO
For Each Tizio 3
TIZIO
*/


let listeVarie = [
    ["a", "b", "c"],
    ["d","e","f"]
]

for(let i=0;i<listeVarie.length;i++){
    console.log("Elemento liste varie", listeVarie[i])
//L'array listeVarie ha due array interni. Quindi ciclo fra gli elementi del primo array.
//Dichiaro l'array interno.
    let arrayInterno = listeVarie[i]
//Ciclo fra gli elementi degli array interni ponenedolo in caps.
    for(let x=0;x<arrayInterno.length;x++){
        console.log(arrayInterno[x].toUpperCase())
    }
}
//Stessa cosa con .forEach ed arrowfunction
/*
listeVarie.forEach((arrayInterno => {
    arrayInterno.forEach((itemArrayIntero) =>{
        console.log(itemArrayIntero.toUpperCase())
    })
}))
/*
Elemento liste varie (3) ['a', 'b', 'c']
A
B
C
Elemento liste varie (3) ['d', 'e', 'f']
D
E
F
*/

//Ex.2
let listenumeriche = [
    [10, 20, 30],
    [5, 10, 15]
]

listenumeriche.forEach(listainterna => {
    console.log(listainterna)
    listainterna.forEach(numero => {
        let risultato = numero * 100
        console.log(`${numero} * 100 = ${risultato}`)
    })
})
/*
(3) [10, 20, 30]
10 * 100 = 1000
20 * 100 = 2000
30 * 100 = 3000
(3) [5, 10, 15]
5 * 100 = 500
10 * 100 = 1000
15 * 100 = 1500
*/

//Map
let listanumeri = [1,2,3,4,5,10,20,30,40]
console.log("Lista numeri", listanumeri)
let listaAggiornata = listanumeri.map(numero => {
    return numero * 10
})
console.log("Lista aggiornata post Map", listaAggiornata)

//Filtrare una lista tramite .filter(). Crea un nuovo array con all'interno tutti i "numero1 < 20".

let listaFiltrata = listanumeri.filter(numero1 => {
    return numero1 < 20
})
console.log(listaFiltrata)

/*
con if, dobbiamo far "ritornare" un booleano. function() inserisce un elemento nel nuovo array solo se la logica discriminante + "true".

let listaFiltrata = listanumeri.filter(numero1 => {
    if (numero1 < 10){
        return true
    }
    else {
        return false
    }
})
*/
