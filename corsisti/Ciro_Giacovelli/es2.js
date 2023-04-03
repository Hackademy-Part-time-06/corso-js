// ESERCIZIO 1

let numeri = `${10} ${20} ${35} ${50} ${70}`

let somma = 10 + 20 + 35 + 50 +70

let mediadisomma = somma / 5


console.log (somma)
console.log (mediadisomma)


//ESERCIZIO 2
/*
let numeri1 = +prompt ("inserisci il primo numero")
let numeri2 = +prompt ("inserisci il secondo numero")
let numeri3 = +prompt ("inserisci il terzo numero")
let numeri4 = +prompt ("inserisci il quarto numero")
let numeri5 = +prompt ("inserisci il quinto numero")

let sommare = (numeri1+numeri2+numeri3+numeri4+numeri5)

let unaltramedia = sommare / 5

console.log ("La somma è", sommare)
console.log ("la media è", unaltramedia)
*/

// ESERCIZIO 3
/*
let annocorrente = 2023
let annodinascita = +prompt ("In che anno sei nato")
let anni = annocorrente - annodinascita
let numerica = 100
let annimancanti = numerica - annodinascita

console.log ("la tua età è:", anni)
console.log ("Ti mancano", numerica,"anni per arrivare a 100")
*/


/*ESERCIZIO4

let name = prompt("inserisci il tuo nome")
console.log ("Ecco il tuo nome con la prima lettera maiuscola:",name[0].toUpperCase()+name.slice(1))

*/

//ESERCIZIO 5
/*
let numerotelefono=prompt ("Inserisci il tuo numero")
let numeronascosto="*******"
let prova=numeronascosto + numerotelefono.slice(7)

console.log(numeronascosto)
console.log(prova)

*/

//ESERCIZIO 6



let numeri1 = +prompt ("inserisci il primo numero")
let numeri2 = +prompt ("inserisci il secondo numero")
let numeri3 = +prompt ("inserisci il terzo numero")
let numeri4 = +prompt ("inserisci il quarto numero")
let numeri5 = +prompt ("inserisci il quinto numero")
let math1 = ""
let math2 = ""
math1=Math.min(numeri1,numeri2,numeri3,numeri4,numeri5)
math2=Math.max(numeri1,numeri2,numeri3,numeri4,numeri5)

let minore=math1
let maggiore=math2


console.log ("Il minore è:",minore)
console.log ("Il maggiore è:",maggiore)


//ESERCIZIO 7

let valore1 = 0.1
let valore2 = 0.2
let valore3 = valore1+valore2
valore3= Math.round

console.log (valore3)

let somma= 0.1 + 0.2
console.log (somma)
let sommacorretta= somma.toFixed(1)

/*
let Gatti=44
let GattiFila=6
let File= Math.round(Gatti/GattiFila)
console.log(File)
let modulo= Gatti % GattiFila
console.log(modulo)
let GattiMancanti= GattiFila-modulo
console.log(GattiMancanti)
*/