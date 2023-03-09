let nome = "gino" + " rossi"
console.log(nome)

let sonoStringa = `ciao ${nome} questo "" è un doppio apice`
console.log(sonoStringa)

let cognomeMaiuscolo = nome.slice(5).toUpperCase()
console.log(cognomeMaiuscolo)

let Cognome = nome.slice(5,6).toUpperCase()+nome.slice(6)
console.log(Cognome)

let Nome = nome.charAt().toUpperCase()+nome.slice(1,4)
console.log(Nome)

//dichiarati due valori
let nome1 = "gino"
let nome2 = "dino"

//Comparazione (debole con 2 ==) di due valori nome1 è uguale a nome2 = false(no) nome1 è diverso da nome2 = true(si)
console.log(nome1 == nome2)
console.log(nome1 != nome2)

let x1 = 10
let x2 = "10"

//Comparazione (forte con 2 ===) stringa vs numero con stesso valore
console.log(x1 == x2) //x1 è uguale a x2? true
console.log(x1 === x2) //false
console.log(x1 !== x2)// true 


/*Comparare fra valori e capire se uno sia maggiore o minore
let x3 = 5
 console.log(x1 > x3) //True
 console.log(x1 < x3) //False
 console.log(x1 >= x3)//True

 Operazioni matematiche
 console.log(x1 + x3) 
 console.log(x1 - x3)
 console.log(x1 / x3) divisione
 console.log(x1 * x3) moltiplicazione
 console.log(x1 % x3) modulo
 */
 
 //La && consente di aggiungere una condizione
 let age1 = 45
 console.log(age1)
 

 // True se entrambe le condizione sono rispettate
 let and = (age1 >= 18) && (age1 < 95)
 console.log("Può guidare?", and)

// False se una delle due non è rispettata
 let age2 = 97
 console.log(age2)
 let or = (age2 >= 18) && (age2 < 95)
 console.log("Può prendere la patente?", or)

 /* se (if) l'utente inserisce (prompt) un'età > 18 ma < 95 compare l'alert "puoi prendere la patente"

 let age = prompt("inserisci la tua età")

 if (age >= 18 && age < 95) {
    alert("puoi prendere la patente");
 }

 se non hai un'età compresa fra i 18 e 95 compare questo alert

 else {
    alert("non puoi prendere la patente")
 }
*/

/*se hai un'età compresa fra i 18 e 95 ed hai la patente compare l'alert "puoi guidare". In questo caso utiliziamo anche un booleano (let = hasLicence = true) come codizione. Se fosse let = hasLicence = false non serebbe verificata la condizione. && and || or

let age = prompt("quanti anni hai?") 
let = hasLicense = true
if (age >= 18 && age < 95 && hasLicense) {
    alert("puoi guidare")
}
else {
    alert("non puoi guidare")
}
*/


/*
else ed if possono essere annidati 
se hai "anniEsperienza < 3" la seniority è "junior", altrimenti
se hai "anniEsperienza >= 3 && anniEsperienza < 6" la seniority è "medium", altrimenti
se hai "anniEsperienza >= 6 && anniEsperienza < 8" la seniority è "mid/senior", altrimenti
la seniority è "senior"

let anniEsperienza = prompt("quanti anni di esperienza hai?")

if (anniEsperienza < 3) {
    seniority = "junior"
}
else if (anniEsperienza >= 3 && anniEsperienza < 6) {
    seniority = "medium"
}
else if (anniEsperienza >= 6 && anniEsperienza < 8) {
    seniority = "mid/senior"
}
else {
    seniority = "senior"
}
console.log(seniority)

*/

/*
operatore ternario "?", forma contratta di if. 
A sinistra del punto di domanda "?" vi è la condizione age >= 18
a destra le casistiche in base a true e false
Se hai meno di 18anni compare nel console.log "no" E VICEVERSA

let age = prompt("quanti hanni hai?")
let possoGuidare = age >= 18 ? "si" : "no"
console.log("PUOI GUIDARE?", possoGuidare)
*/


/* 
invece di utilizzare "if, if else, else" come in questo esempio: 

let giornoDellaSettimana = prompt("che giorno è?");

if (giornoDellaSettimana == "lunedi") {
    console.log("fai spesa")
}
else if (giornoDellaSettimana == "martedi") {
    console.log("Fai sega")
}
else if (giornoDellaSettimana == "mercoledi") {
    console.log("Porta pazienza")
}
else {
    console.log("ucciditi!")
}
*/

/*
si può utilizzare il comando switch, per ogni condizione si utilizza 
' case: "un valore secondo il quale eseguire l'azione"
  azione 
  break;'
  in questo esempio per ogni giorno della settimana compare un "promemoria", nel caso in cui il contenuto non è inserito correttamente nel "prompt", compare un alert che ti informa di ciò.-
*/

/*
let giornoDellaSettimana = prompt("che giorno è?")
switch (giornoDellaSettimana) {
    case "lunedi":
        console.log("fai sesso")
        break;
    case "martedi":
        console.log("fai dito")
        break
    case "mercoledi":
        console.log("la settimana è ancora lunga")
        break
    case "giovedi":
        console.log("la settimana è infinita nun mullà")
        break
    case "venerdi":
        console.log("la settimana è quasi finita nun mullà")
        break
    case "sabato":
        console.log("la settimana è quasi finita nun mullà")
        break
    case "domenica":
        console.log("la settimana è finita nullità")
        break
    default:
        alert(`Attenzione "${giornoDellaSettimana}" non è un giorno della settimana`) 
        console.log(giornoDellaSettimana)   
}
*/

//Incrementale y++ equivale a fare y + 1
let y = 1
y = y + 1;
y++

/*
Ciclo "for" è un costrutto per poter eseguire un'operazione n volte, in questo caso fino ripete l'operazione "i + 1"(i++) finchè "i è minore di 0". 
Verrà eseguita l'operazione "i++", ovvero "i + 1", fino a quando il valore di "i" è minire di 10". Una volta terminato il blocco (ciclo) di operazioni, continua il regolare flusso "console.log("conteggio finito")"  


for (let i = 0; i < 10; i++) {
    console.log("--------")
    console.log(i)
    console.log("--------")
}
console.log("conteggio finito")

for (let y = 10; y <= 20; y++) {
    console.log(y)
}
console.log("conteggio2 finito")

*/
console.log("-------------------------------")

let phone = prompt("inserisci il tuo numero di telefono")

let ultimi3Numeri = phone.slice(-3)

console.log(ultimi3Numeri)

let numeriDaCensurare = phone.length -3
console.log(numeriDaCensurare)

let censura = "*"

for (let x = 0; x <= numeriDaCensurare; x++) {
    let caratteredanascondere = phone.charAt(x)
    console.log("numero che nasconderò", caratteredanascondere)
    
}
console.log(X)

