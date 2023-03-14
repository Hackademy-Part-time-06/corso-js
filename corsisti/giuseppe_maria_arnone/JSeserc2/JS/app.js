    //Eserc 8

let numero1 = 10

let numero2 = 20

let numero3 = 35

let numero4 = 50

let numero5 = 70

let somma = numero1 + numero2 + numero3 + numero4 + numero5

let media = somma / 5

console.log(somma)

console.log(media)


    //Eserc 9

/* let numero6 = prompt("Inserci il primo numero:")

let numero7 = prompt("Inserci il secondo numero:")

let numero8 = prompt("Inserci il terzo numero:")

let numero9 = prompt("Inserci il quarto numero:")

let numero10 = prompt("Inserci il quinto numero:")

numero6 = Number(numero6)

numero7 = Number(numero7)

numero8 = Number(numero8)

numero9 = Number(numero9)

numero10 = Number(numero10)

let somma2 = numero6 + numero7 + numero8 + numero9 + numero10

let media2 = somma2 / 5

console.log(somma2)

console.log(media2) */


    //Eserc10

/* let annoCorrente = 2023

let annoDiNascita = prompt("Inserisci il tuo anno di nascita:")

annoDiNascita = Number(annoDiNascita)

let età = annoCorrente - annoDiNascita 

let puozzCampàCientAnn = 100 - età

console.log(età)

alert ("Dato che hai "+ età +" anni ti serviranno "+ puozzcampàcientann +" anni per averne 100 (tutti di merda ovviamente).")

console.log(puozzcampàcientann) */


    //Eserc11

/* let name = prompt("Inserisci il tuo nome:")

let primoCarattereMaiuscolo = name.charAt(0).toUpperCase()

let restoDellaParola = name.slice(1)

console.log(primoCarattereMaiuscolo + restoDellaParola) */


    //Eserc12

let numeroDiTelefono = "1234567890"

let censura = "*******"

let ultimeTreCifre = numeroDiTelefono.slice(7)

console.log(censura + ultimeTreCifre)


    //Eserc13

let min = Math.min(0, 150, 30, 20, -8, -200)

let max = Math.max(0, 150, 30, 20, -8, -200)

console.log(min, max)


    //Eserc14

let zeroPuntoUno = 0.1

let zeroPuntoDue = 0.2

let sommaArrotondataDecentemente = (zeroPuntoUno * 10 + zeroPuntoDue * 10) / 10;

console.log(sommaArrotondataDecentemente)

/* OPPURE 

let n1 = 0.1;
let n2 = 0.2;
let sommaN1N2 = (n1 + n2)
console.log("La somma è " + sommaN1N2.toFixed(1)); */
    
    
    //Eserc15

let random = Math.floor(Math.random() * 6) + 1;

console.log (random)


    //Eserc16

let allCats = 44

let catsForRow = 6

let totalRows = Math.round(allCats / catsForRow)

let catsOutOfRows = (allCats % catsForRow)

console.log(totalRows)

console.log(catsOutOfRows)





