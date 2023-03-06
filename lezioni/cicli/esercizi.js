"use strict"

/**

    Scrivi un programma che dato un numero stampi la tabellina corrispondente.

 */


console.group("Esercizio tabellina");
let numeroPerTabellina = 5;

for (let i = 1; i < 11; i++) {
  console.log(numeroPerTabellina * i);
}

console.groupEnd();




/**
 
    Validazione password
    Scrivi un programma che, data una stringa, da usare come ipotetica password, faccia i seguenti controlli

    - almeno 6 caratteri
    - non più di 20 caratteri
    - deve contenere almeno uno dei seguenti simboli; “!”, “_”, “-”
    - deve contenere almeno un numero  

 */

    



console.group("Esercizio validazione password");

let password = "asd123as";
//let password = prompt("Password");
let numeri = "0123456789";
let caratteriSpeciali = "!_-";
let validitaLunghezza = true;
let presenzaNumero = false;
let presenzaCarattereSpeciale = false;
let messaggioDiErroreLunghezza = "";


if (password.length < 6) {
  messaggioDiErroreLunghezza = "La passoword deve avere almeno 6 caratteri";
  validitaLunghezza = false;
}
if (password.length > 20) {
  messaggioDiErroreLunghezza = "La passoword non può essere più lunga di 20 caratteri";
  validitaLunghezza = false;
}

for (let i = 0; i < password.length; i++) {
  let carattere = password.charAt(i);
  console.log("Carattere analizzato: ", carattere);

  if (numeri.includes(carattere)) {
    presenzaNumero = true;
  }

  if (caratteriSpeciali.includes(carattere)) {
    presenzaCarattereSpeciale = true;
  }
}

if (validitaLunghezza && presenzaCarattereSpeciale && presenzaNumero) {
  console.log("La password è valida");
}
else {
  if (!presenzaCarattereSpeciale) {
    console.log("Devi inserire almeno un carattere speciale");
  }
  if (!presenzaNumero) {
    console.log("Devi inserire almeno un numero");
  }
  if (!validitaLunghezza) {
    console.log(messaggioDiErroreLunghezza);
  }
}
    
console.groupEnd();






/**

Riscrivi il programma dell’esercizio 12 in questo modo:

- fai inserire manualmente un numero di telefono all’utente tramite un prompt
- controlla che nel numero siano presenti solo numeri ed eventualmente spazi ed il simbolo + 


            es: +39 340 00 00 123


- se l’utente inserisce lettere non consentite mostragli un alert di errore e fagli reinserire il numero di telefono (l’operazione deve andare avanti finchè l’utente non inserisce un numero di telefono corretto)
- offusca tutte le cifre, sostituendole con l'asterisco * (tranne gli spazi), e lascia visibili solo le ultime 3.


            es: *** *** ** ** 123

 */

console.group("Esercizio offuscamento numero di telefono");

let phone = prompt("Phone number");
let allowedChars = "+ 0123456789"
let isPhoneValid = false;

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

console.groupEnd()




    
/**

    Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
    simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti.

    Supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, 
    ciò significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti 
    per calcolare il punteggio del giocatore           
                                                            
    // Usiamo questa formula per generare un numero random
    Math.floor(Math.random() * (max - min + 1) + min);

    */

console.group("Esercizio partita a dadi");

let numeroTiri = 7;
let totaleGiocatore1 = 0;
let totaleGiocatore2 = 0;

for (let i = 0; i < numeroTiri; i++) {
    let tiroGiocatore1 =  Math.floor(Math.random() * 6) + 1;
    let tiroGiocatore2 =  Math.floor(Math.random() * 6) + 1;

    totaleGiocatore1 = totaleGiocatore1 + tiroGiocatore1;
    totaleGiocatore2 = totaleGiocatore2 + tiroGiocatore2;
}

if (totaleGiocatore1 > totaleGiocatore2) {
  console.log(`ha vinto il giocatore 1 col punteggio di ${totaleGiocatore1} a ${totaleGiocatore2}`);
}
else if (totaleGiocatore1 === totaleGiocatore2) {
  console.log(`Pareggio col punteggio di ${totaleGiocatore1}`);
}
else {
  console.log(`ha vinto il giocatore 2 col punteggio di ${totaleGiocatore2} a ${totaleGiocatore1}`);
}

console.groupEnd();






/**

    Partita a D&D
    Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N), simuli un gioco di dadi 
    (i dadi hanno 20 facce) tra due utenti, stampando il punteggio più alto raggiunto da ogni giocatore sul singolo lancio. 
    Vince chi fa il numero più alto. 
    NB: in caso di punteggio pari, continua a farli giocare finché uno dei 2 vince.       

 */


console.group("Esercizio partita a D&D");

let facceDado = 5;
let giocatore1numMigliore = 0;
let giocatore2numMigliore = 0;

let lanciTotali = 5;
let vincitore;

for (let i = 0; i < lanciTotali; i++) {
  let num1 = Math.floor(Math.random() * facceDado) + 1;
  let num2 = Math.floor(Math.random() * facceDado) + 1;

  console.log(`Lancio ${i + 1} - risultato giocatore 1: ${num1}, risultato giocatore 2: ${num2}`);

  if (num1 > giocatore1numMigliore) {
    giocatore1numMigliore = num1;
  }

  if (num2 > giocatore2numMigliore) {
    giocatore2numMigliore = num2;
  }
}

console.log(`Risultato migliore giocatore 1: ${giocatore1numMigliore}, risultato migliore giocatore 2: ${giocatore2numMigliore}`);


if (giocatore1numMigliore === giocatore2numMigliore) {

  let rilancia = true;
  while (rilancia) {
    console.log('Risultato pari! Si rilancia');

    let num1 = Math.floor(Math.random() * facceDado) + 1;
    let num2 = Math.floor(Math.random() * facceDado) + 1;

    console.log(`Nuovo lancio - risultato giocatore 1: ${num1}, risultato giocatore 2: ${num2}`);

    if (num1 !== num2) {
      if (num1 > num2) {
        vincitore = 1;
      }
      else {
        vincitore = 2;
      }

      rilancia = false;
    }
  }
}
else {
  if (giocatore1numMigliore > giocatore2numMigliore) {
    vincitore = 1;
  }
  else {
    vincitore = 2;
  }
}

console.log("Il vincitore è il giocatore numero:", vincitore);


console.groupEnd();