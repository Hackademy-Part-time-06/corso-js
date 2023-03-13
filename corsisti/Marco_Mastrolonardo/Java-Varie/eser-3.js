let n1 = 10
let n2 = 20
let n3 = 35
let n4 = 50
let n5 = 70

// Somma
let nSomma = n1 + n2 + n3 + n4 + n5 
console.log(nSomma)
// Media
let nMedia = nSomma / 5
console.log(nMedia)

/* Numeri inseriti dall'utente tramite Prompt, il + serve per rendere una stringa numero
let nu1 = +prompt("inserisci nu1")
let nu2 = +prompt("inserisci nu2")
let nu3 = +prompt("inserisci nu3")
let nu4 = +prompt("inserisci nu4")
let nu5 = +prompt("inserisci nu5")
// Somma dei numeri inseriti dall'utente con Prompt
let nuSomma = nu1 + nu2 + nu3 + nu4 + nu5
console.log(nuSomma)
// Media dei numeri inseriti dall'utente con Prompt
let nuMedia = nuSomma / 5
console.log(nuMedia)
*/

/*
let AnnoCorrente = 2023

oppure con il prompt per far scegliere all'utente
let AnnoCorrente = +prompt("inserisci anno Corrente")

let AnnoNascita = 1999
let AnnoNascita = Number(prompt("inserisci l'anno di nascita"))

let AnniUtente = 2023 - 1999
let AnniUtente = AnnoCorrente - AnnoNascita

alert(AnniUtente)


let anniPer100 = 100 - AnniUtente
console.warn(anniPer100)
*/

let nome = "marco"
let NOME = nome.toUpperCase()
let Nome = nome.slice(0, 1).toUpperCase()+nome.slice(1,5)
let NOme = nome.charAt().toUpperCase()+nome.slice(1)

console.log(nome)
console.log(NOME)
console.log(Nome)
console.log(NOme)

//dichiaro un numero di telefono
let telefono = "3519983277"
console.log(+telefono)

//Sostituisco con *******277 il valore di telefono
let telefonoNascosto = telefono.replace(telefono, "*******277")
console.log(telefonoNascosto)

//Numero di telefono inserito dall'utente
let telefonoPrompt = prompt("inserisci il tuo numero di telefono")  
//Se il numero dell'utente e <10 o >10 compare un alert con scritto "numero di telefono non valido"                            
if (telefonoPrompt.length > 10) {
alert("Numero di telefono non valido")
} 
if (telefonoPrompt.length < 10 ) {
alert("Numero di telefono non valido")
}
//Se il numero di telefono è corretto rimpiazza le prime 7 cifre con asterischi, mostra nella console il numero di telefono con asterischi. Si può usare anche slice(-3), con un valore negativo parte della fine. 
else {
alert(telefonoPrompt.replace(telefonoPrompt.slice(0,7), "*******"))
console.log(telefonoPrompt.replace(telefono.slice(0, 7), "*******"))
console.log(telefonoPrompt.length)
}
//Numero massimo e numero minimo dati 5 numeri
let N1 = 14
let N2 = 17
let N3 = 35
let N4 = 2
let N5 = 55

var m = Math.min(N1, N2, N3, N4, N5)
console.log(m)

var M = Math.max(N1,N2,N3,N4,N5)
console.log(M)

//somma fra numeri decimali, toFixed(1) utilizzato per troncare la somma al primo numero decimale.
let N6 = 0.1
let N7 = 0.2
let SommaN6N7 = N6 + N7
SommaN6N7 = +SommaN6N7.toFixed(1)
console.log(SommaN6N7)

//Estrazione di un numero randomico compreso fra 0 e 6
let numRandom = Math.floor(Math.random() *6);
console.log(numRandom)




 