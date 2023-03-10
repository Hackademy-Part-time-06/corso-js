/*

let voto = prompt("Voto esame")
voto = Number(voto)
votoParlante = "" (se vogliamo sostituirlo al console.log() )


ESERCIZIO 17

-con if:

if (voto < 18) {
    console.log("insufficiente")    (oppure votoParlante = "insufficiente")
}
else if (voto >= 18 && voto < 21) {
    console.log("sufficiente")       (oppure votoParlante = "sufficiente") 
}
else if (voto >= 21 && voto < 24) {
    console.log("buono")
}
else if (voto >= 24 && voto < 27) {
    console.log("distinto")
}
else if (voto >= 27 && voto < 29) {
    console.log("ottimo")
}
else if (voto === 30) {
    console.log("eccellente")
}
else {
    console.log("non valido")
}

nel caso in cui abbiamo utilizzato il votoParlante

console.log(`Il tuo voto è: ${voto} ovvero ${votoParlante})
*/

/*
-con switch:

switch (voto) {
    case (voto < 18) && voto:
        console.log("insufficiente")
        break;
    case (voto >= 18 && voto < 21) && voto:
        console.log("sufficiente")
        break;
    case (voto >= 21 && voto < 24) && voto:
        console.log("buono")
        break;
    case (voto >= 24 && voto < 27) && voto:
        console.log("distinto")
        break;
    case (voto >= 27 && voto < 29) && voto:
        console.log("ottimo")
        break;   
    case (voto = 30):
        console.log("eccellente")
        break;
    default:
        alert("non valido")     
}
*/

/*
-sempre switch ma in questo caso abbiamo utilizzato switch(true).
funziona perchè il valore che diamo allo switch è usato come base di confronto. Di conseguenza, la condizione espressa (anch'essa valutata in booleani) determinerà se essere eseguita o meno.

Es.
Inserisco 18
in quale caso mi da una condizione true? 
voto >= 18 && voto < 21
Quindi esegue il "case" fornendo il console.log

let voto = prompt("inseirsci voto")

switch(true) {
    case voto < 18:
        console.log("insufficiente")
        break;
    case voto >= 18 && voto < 21:
        console.log("sufficiente")
        break;
    case voto >= 21 && voto < 24:
        console.log("buono")
        break;
    case voto >= 24 && voto < 27:
        console.log("distinto")
        break;
    case voto >= 27 && voto < 29:
        console.log("ottimo")
        break;   
    case voto = 30:
        console.log("eccellente")
        break;
    default:
        alert("non valido")  
}
*/

/* 
ESERCIZIO 18 
Ho utilizzato un ciclo (for) per generare una tabellina dato un numero scelto da un prompt.

Vi è:
L'espressione iniziale (initialExpression) "let i = 0" che viene eseguita una volta;
La condizione (condition) "i <= 10", nel caso sia True, fa si che il blocco di codice dentro il ciclo venga eseguito, nel caso sia false, lo termina.
L'updateExpression, in questo caso "i++", incrementa il valore di "i" (i + 1) ogni volta che il blocco di codice interno al loop viene eseguito.

Il loop fa si che si generino valori di "i" (contatore) compresi fra 0 e 10 e li moltiplica ogni volta per il "number" generando il "result"

let number = +prompt("tabellina del numero?")
console.log(number)

for (let i = 0; i <= 10; i++) {
    let risultato = i * number
    console.log(`${number} * ${i} = ${risultato}`)
}

-con il loop "while" invece, fin quando il valore della variabile "i" è minore di 10, esegui il blocco di codice:

let i = 0
let number = prompt("numero")
while (i < 10) {
    i++;
    let result = number * i
    console.log(`${number} * ${i} = ${result}`)
}
*/

/*
//ESERCIZIO 19

//L'utente inserisce la password
let password = prompt("inserisci password")
console.log(password)
console.log(password.length)

// dichiaro i numeri ed i simboli che devono essere contenuti nella password tramite stringa
let numeri = "0123456789"
let simboli = "!_-"

//Booleani 
let validitàLunghezza = true
let presenzaNumero = false
let presenzaSimboli = false


//Se la lunghezza della password è minore di 6, validitàLunghezza = false, in quanto deve essere maggiore di 6
if (password.length < 6) {
    validitàLunghezza = false
    console.log("6 < password > 20")
}
// Se la lunghezza della password è maggiore di 20, validitàLunghezza = false in quanto deve essere minore di 20
if (password.length > 20) {
    validitàLunghezza = false
    console.log("6 < password > 20")
}
// utilizziamo un ciclo "for" per analizzare singolarmente ogni carattere e constatare tramite ".includes" se sia un numero o un simbolo.
for (i=0; i < password.length; i++) {
    let carattere = password.charAt(i)
    console.log("carattere analizzato:", carattere)

if (numeri.includes(carattere)) {
    presenzaNumero = true
}
if (simboli.includes(carattere)) {
    presenzaSimboli = true
}
}
//Se validitàLunghezza && presenzaSimboli && presenzaNumero sono contemporaneamente verificate, la password è valida.
if (validitàLunghezza && presenzaSimboli && presenzaNumero) {
    console.log("La password è valida");
  }
  //se no
  else {
    if (!presenzaSimboli) {
      console.log("Devi inserire almeno un carattere speciale");
    }
    if (!presenzaNumero) {
      console.log("Devi inserire almeno un numero");
    }
    if (!validitàLunghezza) {
      console.log("");
    }
  }
*/

/*
//ESECIZIO 20

//L'utente inserisce il numero di tel
let phone = prompt("Phone number");

//Caratteri ammessi "spazi" "+" "0123456789"
let allowedChars = "+ 0123456789"

//partendo dal presupposto che il numero di telefono inserito dall'utente è sbagliato 
let isPhoneValid = false;

mentre il numero di telefono non è sbagliato, quindi "validity = true": -se nel numero di telefono non sono inclusi gli "allowedChars" (!allowedChars.includes(phone.charAt(i)) la "validity = false"

-nel caso in cui ci siano valori consentiti quindi "validity = true" il numero di telfono sarà valido ( isPhoneValid = true )

-nei casi in cui ciò non avviene compare il prompt ("Incorrect Number! Insert again! Phone number")

"!" è una negazione

*/

/*
while(!isPhoneValid) {
  let validity = true;

  for (let i = 0; i < phone.length; i++) {
      if (!allowedChars.includes(phone.charAt(i))) {
        validity = false;
      }
  }

  if (validity) {
    isPhoneValid = true;
  }
  else {
    phone = prompt("Incorrect Number! Insert again! Phone number");
  }
}

let last3Characters = phone.slice(-3);
let phoneObfuscated = "";

for (let i = 0; i < phone.length - 3; i ++) {
  if (phone.charAt(i) === " ") {
    phoneObfuscated += " ";
  }
  else {
    phoneObfuscated += "*";
  }
}

phoneObfuscated += last3Characters;

console.log("Numero di telefono offuscato:", phoneObfuscated)
*/

/*
Esercizio 21

let numeroTiri = 4
let totaleGiocatore1 = 0
let totaleGiocatore2 = 0

for (let i = 0; i < numeroTiri; i++) {
    let punteggio1 = Math.floor(Math.random() * 6) + 1
    let punteggio2 = Math.floor(Math.random() * 6) + 1
    console.log("tiro giocatore 1:", punteggio1)
    console.log("-------------------")
    console.log("tiro giocatore 2:", punteggio2)
    console.log("-------------------")
    totaleGiocatore1 = totaleGiocatore1 + punteggio1
    totaleGiocatore2 = totaleGiocatore2 + punteggio2
}
console.log("totale punteggio giocatore 1:", totaleGiocatore1)
console.log("totale punteggio giocatore 2:", totaleGiocatore2)

if (totaleGiocatore1 > totaleGiocatore2) {
    console.log("Complimenti Giocatore 1 hai vinto la partita con un punteggio pari a:", totaleGiocatore1)
}
else if (totaleGiocatore2 > totaleGiocatore1) {
    console.log("Complimenti Giocatore 2 hai vinto la partita con un punteggio pari a:", totaleGiocatore2)
}
else if (totaleGiocatore1 = totaleGiocatore2) {
    console.log("Pareggio")
}
*/

//Esercizio 22: Nel caso in cui anche nel rilancio dei dadi (dopo un pareggio), si dovesse verificare un altro pareggio il programma si blocca. Quindi conviene utilizzare un while
let facceDado = 20
let numeroTiri = 4
let punteggioPiuAlto1 = 0
let punteggioPiuAlto2 = 0

for (i=0; i<numeroTiri; i++) {
    let punteggio1 = Math.floor(Math.random() * facceDado) + 1
    let punteggio2 = Math.floor(Math.random() * facceDado) + 1
    console.log(`Lancio ${i + 1} - risultato giocatore 1: ${punteggio1}, risultato giocatore 2: ${punteggio2}`)
    if (punteggio1 > punteggioPiuAlto1) {
        punteggioPiuAlto1 = punteggio1
    }
    else if (punteggio2 > punteggioPiuAlto2) {
        punteggioPiuAlto2 = punteggio2
    }
}
console.log("punteggio piu alto giocatore 1", punteggioPiuAlto1)
console.log("punteggio piu alto giocatore 2", punteggioPiuAlto2)

/*
if (punteggioPiuAlto1 > punteggioPiuAlto2) {
    console.log("complimenti giocatore 1 hai vinto con il punteggio:", punteggioPiuAlto1)
}
else if (punteggioPiuAlto2 > punteggioPiuAlto1) {
    console.log("complimenti giocatore 2 hai vinto con il punteggio:", punteggioPiuAlto2)
}
else if (punteggioPiuAlto1 === punteggioPiuAlto2) {
    console.log(`Punteggio pari ${punteggioPiuAlto1} = ${punteggioPiuAlto2} Si rilancia`)
    for (i=0; i<numeroTiri; i++) {
        let punteggio1 = Math.floor(Math.random() * facceDado) + 1
        let punteggio2 = Math.floor(Math.random() * facceDado) + 1
        console.log(`Lancio ${i + 1} - risultato giocatore 1: ${punteggio1}, risultato giocatore 2: ${punteggio2}`)
        if (punteggio1 > punteggioPiuAlto1) {
            punteggioPiuAlto1 = punteggio1
        }
        else if (punteggio2 > punteggioPiuAlto2) {
            punteggioPiuAlto2 = punteggio2
        }
    }
    console.log("punteggio piu alto giocatore 1", punteggioPiuAlto1)
    console.log("punteggio piu alto giocatore 2", punteggioPiuAlto2)
    if (punteggioPiuAlto1 > punteggioPiuAlto2) {
        console.log("complimenti giocatore 1 hai vinto con il punteggio:", punteggioPiuAlto1)
    }
    else if (punteggioPiuAlto2 > punteggioPiuAlto1) {
        console.log("complimenti giocatore 2 hai vinto con il punteggio:", punteggioPiuAlto2)
    }
}
*/
//Nel caso in cui vi è un pareggio, il ciclo while si attiva (perchè "rilancia = true"). Quindi vengono generati altri due valori random (un tiro di dado per ogni giocatore), se il punteggio1 !== (non è uguale) punteggio2 "rilancia" assume valore "false" (rilancia = false) per bloccare il ciclo "while". Il resto vien da se: 
if (punteggioPiuAlto1 === punteggioPiuAlto2) {
    let rilancia = true
    while(rilancia) {
        let punteggio1 = Math.floor(Math.random() * facceDado) + 1
        let punteggio2 = Math.floor(Math.random() * facceDado) + 1
        console.log(`Lancio spareggio - risultato giocatore 1: ${punteggio1}, risultato giocatore 2: ${punteggio2}`)
        if (punteggio1 !== punteggio2) {
            if (punteggio1 > punteggio2) {
                console.log("Giocatore 1 è il vincitore con punteggio:", punteggio1)
            }
            else if (punteggio2 > punteggio1) {
                console.log("Giocatore 2 è il vincitore con punteggio:", punteggio2)
            }
            rilancia = false
        }
    }
}




