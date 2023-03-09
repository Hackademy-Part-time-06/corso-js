/*
console.log(movieTitle)
console.log(movieYear)
console.log(movieDirector)

console.log(movieTitle,"(", movieYear,"-", movieDirector,")")

var bookTitle 
bookTitle="MisteroMilano"
var bookDescription="Estetica"
console.log(bookTitle, bookDescription)

var admin
var name
name="Gino"
admin=name
console.log(admin)

alert(admin)

var Username
var Password
prompt(Username)
prompt(Password)

function saluta() {
    let nome = prompt("Please enter your name", "es. mario rossi");
    if (nome != null) {
      alert("benvenuto " + nome + " nell'area privata");
    }
  }
 console.log(saluta())

// esercizio 8

 let n1 =10
 let n2= 20
 let n3 = 35
 let n4 = 50
 let n5= 70
 let somma = n1 + n2 + n3 + n4 + n5
 let media = somma / 5 
 console.log("somma")
 console.log("media")


 //esercizio 9
 /*

 let numero1 = prompt ('dimmi un numero 1/5')
 let numero2 = prompt ('dimmi un numero 2/5')
 let numero3 = prompt ('dimmi un numero 3/5')
 let numero4 = prompt ('dimmi un numero 4/5')
 let numero5 = prompt ('dimmi un numero 5/5')
 numero1 = Number(numero1)
 numero2 = Number(numero2)
 numero3 = Number(numero3)
 numero4 = Number(numero4)
 numero5 = Number(numero5)
 let somma2 = numero1 + numero2 + numero3 + numero4 + numero5;
 let media2 = somma2 / 5
 console.log("somma2")
 console.log("media2")

 //esercizio 10
/*
 let annoNascita = prompt("inserisci data di nascita")
 let anno = prompt ("inserisci data attuale")
 let annomese = prompt ("inserisci mese mese di nascita")
 let giorno = prompt ("inserisci giorno di nascita")
 anno=Number("anno")
 let età = anno- annoNascita
 console.log(età)
 */

 /*
//esercizio 10


 let annoNascita = prompt("inserisci anno di nascita")
 let anno = prompt("inserisci anno attuale")
 anno=Number(anno)
 annoNascita=Number(annoNascita)
let età = anno - annoNascita
console.log(età)
let annipercento = 100 - età
console.log(+annipercento)

*/

/*
//esercizio 11



let text = prompt("inserisci il tuo nome")
let primalettera = text.charAt(0).toUpperCase()+text.slice(1);
console.log(primalettera)
let result = primalettera.toUpperCase

*/

//esercizio 12
/*
let numero10cifre = prompt("inserisci il tuo numero di telefono")
let numeronascosto = ("*******" + numero10cifre.slice(7,10))
console.log=(numeronascosto)
*/
/*
let numeroDiTelefono = prompt("Inserisci il tuo numero di telefono");
let numeroNascosto = ("*******" + numeroDiTelefono.slice(7,10));
console.log(numeroNascosto);
*/
/*
//esercizio 13
let n1 = prompt("inserisci il primo numero")
let n2 = prompt("inserisci il secondo numero")
let n3 = prompt("inserisci il terzo numero")
let n4 = prompt("inserisci il quarto numero")
let n5 = prompt("inserisci il quinto numero")
n1=Number(n1)
n2=Number(n2)
n3=Number(n3)
n4=Number(n4)
n5=Number(n5)
let maggiore = Math.max(n1, n2,n3, n4, n5)
let minore = Math.min(n1, n2,n3, n4, n5)
console.log(maggiore);
console.log(minore)
*/

/*
//esercizio 14

let n1 = 0.1
let n2 = 0.2
let somma =(n1 + n2)
let arrotondamento = somma.toPrecision(2)
console.log(somma)
console.log(arrotondamento)

*/


/*
//esercizio 15

//numeri random interi da 1 a 6

let x = Math.floor((Math.random(il numero random è) * 6) + 1)
console.log(x);
//numeri random decimali da 1 a 6
let numeroRandom = Math.random(il numero random è)*6;
console.log(numeroRandom);

*/
/*
//esercizio 16

let totalegatti = prompt("Quanti gatti ci sono?")
let gattipresenti = prompt("Quanti gatti vuoi in ogni fila?")
totalegatti=Number(totalegatti)
gattipresenti = Number(gattipresenti)
let totalefile = Math.round(totalegatti / gattipresenti)
console.log(totalefile)
let differenza = totalegatti % gattipresenti
console.log (differenza)
let gattimancanti= gattipresenti - differenza
console.log(gattimancanti)
*/

/*

// esercizio 23

let numeroUtente = prompt("inserisci il numero");

numeroUtente = + numeroUtente

if (numeroUtente % 2 === 0){
 console.log("Il numero inserito è pari")
}
else{
  console.log("il numero inserito è dispari")
}
*/

/*

//esercizio 24 
let Mese = prompt("Inserisci il nome del mese")
MeseMinuscolo = Mese.toLowerCase()
switch (MeseMinuscolo) {
  case "gennaio":
    console.log("Questo mese ha 31 giorni")
    break;

    case "febbraio":
  console.log("Questo mese ha 28 giorni")
  break    

  case "marzo":
    console.log("Questo mese ha 31 giorni")
    break;

    case "aprile":
  console.log("Questo mese ha 30 giorni")
  break    

  case "maggio":
    console.log("Questo mese ha 31 giorni")
    break;

    case "giugno":
  console.log("Questo mese ha 30 giorni")
  break    

  case "luglio":
    console.log("Questo mese ha 31 giorni")
    break;

    case "agosto":
  console.log("Questo mese ha 31 giorni")
  break    
  case "settembre":
    console.log("Questo mese ha 30 giorni")
    break;

    case "ottobre":
  console.log("Questo mese ha 31 giorni")
  break    

  case "novembre":
    console.log("Questo mese ha 30 giorni")
    break;

    case "dicembre":
  console.log("Questo mese ha 31 giorni")

  default : console.log=prompt("Mese non valido, inserire mese corretto")
}
*/
/*

//esercizio 25

let categoria = prompt("Che tipo di film vorresti vedere? Inserisci la categoria!");
let categoriaMin = categoria.toLowerCase()

if (categoriaMin === "fantasy"){
 console.log(`Per la categoria"${categoriaMin} " il film consigliato è "Avanger"`)}
else if (categoriaMin === "horror"){
  console.log(`Per la categoria"${categoriaMin}" il film consigliato è: "Saw l'enigmista"`)
}
else if (categoriaMin === "Azione"){
  console.log(`Per la categoria"${categoriaMin}" il film consigliato è: "Fast&Furios"`)
}
else console.log=prompt("Mi dispiace, non ho film da consigliarti")
  */

//esercizio 26-
/*

let età = prompt("Quanti anni hai?")
età = +età
let patente = prompt("Hai la patente?")
let assicurazione = prompt("Hai l'assicurazione")

if (età>=18 && patente=="si" && assicurazione=="si"){
  console.log(`Puoi andare è tutto apposto`)
  console.log ["Hai"(Math.floor(Math.random() * 20) "sulla patente" )
}

else {
  console.log("Multa!")
}

*/
/*
let eta=prompt("Qunti anni hai?");
if (eta=>18)
console.log("Puoi guidare")

else { (eta<=17) 
  console.log("Non puoi guidare")}
  */

  /*

  let eta=prompt("Qunti anni hai?");
let patente=prompt("Hai la patente?");
let assicurazione=prompt("Hai l'assicurazione?");
if (eta>=18 && patente=="si" && assicurazione=="si"){

    console.log(`Hai ${Math.floor(Math.random() * 20)} punti sulla patente puoi continuare a guidare`);
}
else {
    console.log("Devo farti la multa sono 500 euro");
}
*/
