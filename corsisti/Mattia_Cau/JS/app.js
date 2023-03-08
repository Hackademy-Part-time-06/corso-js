/*
Esercizio 17
Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo queste regole:
- v < 18: insufficiente
- 18 <= v < 21: sufficiente
- 21 <= v < 24: buono
- 24 <= v < 27: distinto
- 27 <= v <= 29: ottimo
- v = 30: eccellente
Esempio:
Input: v = 29
Output: Ottimo


let v = prompt(`che voto?`)

if (v < 18 ){
    console.log(`insufficente`); 
}
else if (18 <= v < 21) {
    console.log(`sufficente`); 
}
else if (21 <= v < 24) {
    console.log(`sufficente`); 
}
else if (24 <= v < 27) {
    console.log(`sufficente`); 
}
else if (27 <= v <= 29) {
    console.log(`sufficente`); 
}
else if(v = 30) {
    console.log(`ottimo`);
}
*/

/*
Esercizio 18

Scrivi un programma che dato un numero stampi la tabellina corrispondente.

let numero = prompt(`che tabellina?`);

for (let i = 1; i <= 10; i++) {
    console.log(numero + " " + i + " = " + numero * i);
}
*/
/*
Esercizio 19
Validazione password
Scrivi un programma che, data una stringa, da usare come ipotetica password, faccia i seguenti controlli

- almeno 6 caratteri
- non più di 20 caratteri
- deve contenere almeno uno dei seguenti simboli; “!”, “_”, “-”
- deve contenere almeno un numero  
*/
/*
let psw= prompt(`password`)
let simbol=/[ ! ? : ; ]/;
let number =/[0 1 2 3 4 5 6 7 8 9]/
if (psw.length < 6) {
    console.log(`troppo corta`);
}
else if(psw.length > 20){
    console.log(`troppo lunga`);
}
else if(simbol.test(psw) === false){
    console.log(`non ci sono i simboli`);
}
else if(number.test(psw) === false){
    console.log(`non ci sono numeri`);
}
else{
    console.log(`ok`);
}
*/


/*
Esercizio 20

Riscrivi il programma dell’esercizio 12 in questo modo:

- fai inserire manualmente un numero di telefono all’utente tramite un promp
- controlla che nel numero siano presenti solo numeri ed eventualmente spazi ed il simbolo + 

            es: +39 340 00 00 123

- se l’utente inserisce lettere non consentite mostragli un alert di errore e fagli reinserire il numero di telefono (l’operazione deve andare avanti finchè l’utente non inserisce un numero di telefono corretto)
- offusca tutte le cifre, sostituendole con l'asterisco * (tranne gli spazi), e lascia visibili solo le ultime 3.

            es: *** *** ** ** 123


let phone = prompt("Numero di telefono", "+39 ");
let totaleNumeriDaCensurare = phone.length - 3;
let ultimiTreNumeri = phone.slice(-3);
let censura = "";

for (let i = 0; i < totaleNumeriDaCensurare; i++ ) {

    let carattereDaNascondere = phone.charAt(i);
    console.log("Numero che nascondero'", carattereDaNascondere);

    if (carattereDaNascondere !== " " ) {
        censura += "*";
    } 
}

alert(`Il mio numero di telkefono è${censura}${ultimiTreNumeri}`);

*/
/*

Esercizio 21

Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti.
Supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore           
                                                        
// Usiamo questa formula per generare un numero random
Math.floor(Math.random() * (max - min + 1) + min);


*/
/*
let N = prompt(`numero tiri`);
let giocatore1 = 0;
let giocatore2 = 0;

for(var i=0; i<N; i++){
    //alert(tiri + ' tiro per il giocatore1');
    let punti1 = Math.floor(Math.random()*(6 - 1 + 1) + 1);
    giocatore1 += punti1;
    //alert("giocatore1 hai fatto: " + punti1);
    //alert(tiri + ' tiro per il giocatore2');
    let punti2 = Math.floor(Math.random()*(6 - 1 + 1) + 1);
    giocatore2 += punti2;
    //alert("giocatore2 hai fatto: " + punti2);
}
if(giocatore1 == giocatore2){
    let risposta = "La partita termina in parita' entrambi hanno totalizzato: " + giocatore1 + " punti";
    alert(risposta)
}
else if(giocatore1 < giocatore2){
    let risposta = "Il giocatore2 vince! punti: " + giocatore2 + " punti \n Il giocatore1 ha totalizzato: " + giocatore1 + " punti";
    alert(risposta)
}
else{
    let risposta = "Il giocatore1 vince! punti: " + giocatore1 + " punti \n Il giocatore2 ha totalizzato: " + giocatore2 + " punti";
    alert(risposta)
}
*/


/*
Esercizio 22
Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N), simuli un gioco di dadi (i dadi hanno 20 facce) tra due utenti, stampando il punteggio più alto raggiunto da ogni giocatore sul singolo lancio. 
Vince chi fa il numero più alto. 
NB: in caso di punteggio pari, continua a farli giocare finché uno dei 2 vince.       

let N = 1;
let giocatore1 = 0;
let giocatore2 = 0;

for(var i=0; i<N; i++){
    //alert(tiri + ' tiro per il giocatore1');
    let punti1 = Math.floor(Math.random()*(20 - 1 + 1) + 1);
    giocatore1 += punti1;
    //alert("giocatore1 hai fatto: " + punti1);
    //alert(tiri + ' tiro per il giocatore2');
    let punti2 = Math.floor(Math.random()*(20 - 1 + 1) + 1);
    giocatore2 += punti2;
    //alert("giocatore2 hai fatto: " + punti2);
}
if(giocatore1 > giocatore2){
    let risposta = "Il giocatore1 vince! punti: " + giocatore1 + " punti \nIl giocatore2 ha totalizzato: " + giocatore2 + " punti";
    alert(risposta)
}
else if(giocatore1 < giocatore2){
    let risposta = "Il giocatore2 vince! punti: " + giocatore2 + " punti \nIl giocatore1 ha totalizzato: " + giocatore1 + " punti";
    alert(risposta)
}
else{
    alert(`i giocatori ritirano i dadi`)
    for(var i=0; i<N; i++){
        //alert(tiri + ' tiro per il giocatore1');
        let punti1 = Math.floor(Math.random()*(20 - 1 + 1) + 1);
        giocatore1 += punti1;
        //alert("giocatore1 hai fatto: " + punti1);
        //alert(tiri + ' tiro per il giocatore2');
        let punti2 = Math.floor(Math.random()*(20 - 1 + 1) + 1);
        giocatore2 += punti2;
        //alert("giocatore2 hai fatto: " + punti2);
    }
    if(giocatore1 > giocatore2){
        let risposta = "Il giocatore1 vince! punti: " + giocatore1 + " punti \nIl giocatore2 ha totalizzato: " + giocatore2 + " punti";
        alert(risposta)
    }
    else if(giocatore1 < giocatore2){
        let risposta = "Il giocatore2 vince! punti: " + giocatore2 + " punti \nIl giocatore1 ha totalizzato: " + giocatore1 + " punti";
        alert(risposta)
    }
}
*/
/*
Esercizio 23
Scrivi un programma che passato un numero in input controlli che sia pari o dispari

let n = prompt("numero?")
let risposta = false
if (n % 2 == 0 ) {
    risposta = true
}else {
    risposta= false
}
console.log(risposta);
*/

/*
Esercizio 24
Scrivi un programma che passato un mese ritorni i giorni presenti in quel mese

let mese = prompt(`mese?`)
if (mese == `novembre` || mese == `aprile` || mese == `giugno` || mese == `settembre`  ) {
    console.log(`ha 30 giorni`);
}
else if (mese == `gennaio` || mese == `marzo` || mese == `lulglio` || mese == `agosto` ||  mese == `ottobre` ||  mese == `dicembre` ) {
    console.log(`ha 31 giorni`);
}
else if (mese == `febbraio`){
    console.log(`ha 28 giorni`);
}else {`non hai scritto un mese`}
*/
/*
Esercizio 25
Scrivi un programma che passata una categoria in input (fantasy, fantascienza, animazione, ecc…) ti suggerisca il titolo di un film:
es: categoria: “fantasy” -> film suggerito: “il signore degli anelli”

let category = prompt("Inserisci la categoria:")
let titolo

var i = Math.floor(Math.random() * 3)
switch (category) {
    case "fantasy":
        switch(i) {
            case 0:
                titolo = "Il Signore degli Anelli"
                break
            case 1:
                titolo = "Lo Hobbit"
                break
            case 2:
                titolo = "Harry Potter"
                break
        }
    break
    //e via cosi non ho vogli di farne altre
}

console.log(Il titolo è ${titolo})
*/



/*
Esercizio 26
Il posto di blocco!
Scrivi un programma che simuli un posto di blocco
Chiedi al conducente età, patente ed assicurazione. 
Controlla anche quanti punti ha (fai generare un numero randomico da 0 a 20). 
Se tutti i controlli son rispettati lascialo andare, altrimenti ti tocca fargli la multa (o chiudi un occhio!).
Gestisci più casistiche possibili!

let eta = prompt(`quanti anni hai?`)
let patente=prompt(`hai la patente?`)
let punti = prompt(`hai punti`)
let risposta= false
if (eta >= 18 && patente == `si`&&  punti > 0) {
    risposta = true
    
}
if (risposta) {
    console.log(`puoi guidare`);
}else {
    console.log(`non puoi guidare`);
}
*/
/*
Calcolatrice!!
Crea un programma che simuli una calcolatrice!!
Chiedi all’utente di inserire 2 numeri ed un simbolo matematico ed esegui l’operazione corrispondente
    es: 

        input1: 10
        input2: 20
        input3: +

        risultato: 10 + 20 = 30
 
 let fattore1 = prompt(`dimmi il primo valore`)
 let fattore2 = prompt(`dimmi il secondo valore`)
 let oprazione = prompt(`dimmi l'operazione(simbolo)`)
 fattore1 = +fattore1
 fattore2 = +fattore2

 if (oprazione == `+`) {
    let risposta = fattore1 + fattore2
    console.log(risposta);
 }else if ( oprazione == `*`){
    let risposta = fattore1 * fattore2
    console.log(risposta);
 }else if ( oprazione == `/`){
    let risposta = fattore1 / fattore2
    console.log(risposta);
 }else if ( oprazione == `-`){
    let risposta = fattore1 - fattore2
    console.log(risposta);
 }else {
    alert (`hai sbagliato qualcosa`)
 }
 */

 /*
 Esercizio 28
Scrivi un programma che stampi solo i numeri pari da 1 a 100
 for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }
  */
 /*Esercizio 29
Scrivi un programma che stampi le tabelline da 0 a 10 per tutti i numeri da 0 a 10!
Cerca di farlo con soli 2 for (o while)

        output:

        0 0 0 0 0 0 0 0 0 0 0 
        0 1 2 3 4 5 6 7 8 9 10 
        0 2 4 6 8 10 12 14 16 18 20 
        0 3 6 9 12 15 18 21 24 27 30 
        0 4 8 12 16 20 24 28 32 36 40 
        0 5 10 15 20 25 30 35 40 45 50 
        0 6 12 18 24 30 36 42 48 54 60 
        0 7 14 21 28 35 42 49 56 63 70 
        0 8 16 24 32 40 48 56 64 72 80 
        0 9 18 27 36 45 54 63 72 81 90 
        0 10 20 30 40 50 60 70 80 90 100 

for(let j = 0; j <= 10; j++){
    for (let i = 0; i <= 10; i++) {
        console.log(i * j);
    }
}
*/

