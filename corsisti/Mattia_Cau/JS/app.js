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

/*
Esercizio 30
Scrivi un programma che per il seguente testo conti quante occorrenze ci sono per ogni vocale e quante vocali ci sono in tutto:

let testo= `Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo
“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
Traduzione del 1914 di H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
Traduzione del 1914 di H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”`

let vocaleA = "aA";          
for (let i = 0; i < testo.length; i++) {             
    let lettera = testo.charAt(i);             
    if (vocaleA.includes(lettera)) {                 
        console.log(lettera);             
    } 
    
}
let vocaleE= `eE`
for (let i = 0; i < testo.length; i++) {             
    let lettera = testo.charAt(i);             
    if (vocaleE.includes(lettera)) {                 
        console.log(lettera);             
    } 
    
}
let vocaleI= `Ii`
for (let i = 0; i < testo.length; i++) {             
    let lettera = testo.charAt(i);             
    if (vocaleI.includes(lettera)) {                 
        console.log(lettera);             
    }         
    
}
let vocaleO= `Oo`
for (let i = 0; i < testo.length; i++) {             
    let lettera = testo.charAt(i);             
    if (vocaleO.includes(lettera)) {                 
        console.log(lettera);             
    }         
}
let vocaleU= `Uu`
for (let i = 0; i < testo.length; i++) {             
    let lettera = testo.charAt(i);             
    if (vocaleU.includes(lettera)) {                 
        console.log(lettera);             
    }         
}
//ripeti questo per ogni vocale
let vocali = "aAeEiIoOuU";

for (let i = 0; i < testo.length; i++) {
    let lettera = testo.charAt(i);
    if (vocali.includes(lettera)) {
        console.log(vocali);
    }
}
*/
/*
Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.
Esempi:
Input: n = 2, m = 3
Output: FALSE
Input: n = 2, m = '2'
Output: FALSE
Input: n = 2, m = 2
Output: TRUE

let n1="2"
let n2= 2
let risultato = false

function uguali( n1 , n2, risultato) {
    
    if (n1 === n2 ) {
        risultato= true
        //console.log(`sono uguali`); 
    }else{
        risultato= false
    }
    console.log(risultato);
    return risultato
}
uguali();
*/
/*
Esercizio 32
Scrivi una funzione che prenda in input una stringa e la restituisca capovolta


function inverti(){
    let original = `hello`
    let separa= original.split(``)
    let inverti = separa.reverse()
    let unisci = inverti.join()
    return unisci
}
let inverti2 =inverti()
console.log(inverti2);


*/
/*
Esercizio 33

Scrivi una funzione che si occupi di generare un numero randomico da 1 a N e lo restituisca

function numeroRandom() {
    let random = Math.floor(Math.random()* 50)
    return random
}
let random =numeroRandom()
console.log(random);
*/

/*
Esercizio 34

Simula una partita a dadi:
Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) un numero di volte che verrà definito tramite parametro passato in input.
Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto).


function partita() {
    let N = 3;
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
}
partita()

*/


/*
Esercizio 35

Calcola il voto del giocatore a fantacalcio
scrivi una funzione che prende in input i seguenti parametri numerici:

- baseVoto
- golFatti
- assistEffettuati
- autogol
- ammonizione
- espulsione

calcola il voto finale di un giocatore tenendo conto delle seguenti regole:

- + 3 punti: per ogni gol fatto 
- + 1 punto: per ogni assist effettuato
- - 2 punti: per ogni autogol fatto
- - 1 punto: per ogni ammonizione
- - 2 punti: per ogni espulsione

esempio:

Gino Van Der Gini: 
- baseVoto: 8
- golFatti: 2
- assistEffettuati: 1
- autogol: 0
- ammonizione: 1
- espulsione: 0

- Risultato: 14

function partita() {
    let Voto = 0
    let baseVoto = 3
    let golFatti = 3
    let assistEffettuati = 1
    let autogol = 0
    let ammonizione = 1
    let espulsione = 1
    
    for(i=0; i < golFatti; i++){
        let punteggioGol = 3 
        Voto += punteggioGol
    }
    for(i=0; i < assistEffettuati; i++){
        let punteggioAssist = 1 
        Voto += punteggioAssist
    }
    for(i=0; i < autogol; i++){
        let punteggioAutogol = 0
        Voto += punteggioAutogol
    }
    for(i=0; i < ammonizione; i++){
        let punteggioAmmonizione = 1
        Voto -= punteggioAmmonizione
    }
    for(i=0; i < espulsione; i++){
        let punteggioEspulsione = 1 
        Voto -= punteggioEspulsione
    }
    let totale = Voto + baseVoto
    console.log(`voto iniziale:`, baseVoto);
    console.log(`gol:` , golFatti);
    console.log(`assist:`, assistEffettuati);
    console.log(`autogol:`, autogol);
    console.log(`ammonizioni:`, ammonizione);
    console.log(`espulsione:`, espulsione);
    console.log(`Totale:`, totale);
}
partita()
*/




/*
Esercizio 36 - BONUS

Creiamo la nostra console stilosa!!! (per me è abbastanza brutta )
(hint: https://www.codingem.com/javascript-console-colors/)
Scrivi un programma chiamato “myLog” che ci permetta di loggare dei messaggi di testo con uno stile dinamico in base alla categoria specificata.
Le categorie disponibili dovranno essere le seguenti con le relative caratteristiche:
- titolo: 
        background-color: blue; 
        font-size: 30px; 
        color: white
- sottotitolo:
        font-size: 20px;
        color: blue;
- highlight:
        background-color: orange;
-  disastro:
        background-color: red; 
        font-size: 50px; 
        color: white



*/


function titolo(stringaDaFormattare) {
    console.log(`%c ${stringaDaFormattare}`,"background-color: blue; font-size: 30px; color: white");
 }
 function sottotitolo(stringaDaFormattare) {
     console.log(`%c ${stringaDaFormattare}`,"font-size: 20px; color: blue");
  }
  function highlight(stringaDaFormattare) {
     console.log(`%c ${stringaDaFormattare}`,"background-color: orange; ");
  }
  function disastro(stringaDaFormattare) {
     console.log(`%c ${stringaDaFormattare}`,"background-color: red;  font-size: 50px; color: white");
  }
   
 function stampaUnaStringa(stringa, funzionePerFormattareLaStringa) {
     let risultato = funzionePerFormattareLaStringa(stringa); 
   }
   stampaUnaStringa("ciao", titolo);
 