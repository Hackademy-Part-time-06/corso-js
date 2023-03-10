/* esercizio 19 rifatto

console.group("PASSWORD");

let password = prompt("Inserisci una password");
console.log("La password inserita è: ", password);
console.log("Lunghezza password: ", password.length);

console.log("Controllo lunghezza minima");
let lunghezzaMinimaRispettata = true;

if (password.length < 6) {
    lunghezzaMinimaRispettata = false;
}
console.log("Lunghezza minima rispettata: ", lunghezzaMinimaRispettata);

console.log("Controllo lunghezza massima");
let lunghezzaMassimaRispettata = true;

if (password.length < 20) {
    lunghezzaMassimaRispettata = false;
}
console.log("Lunghezza massima rispettata: ", lunghezzaMassimaRispettata);

console.log("Controllo presenza caratteri speciali");
let caratteriSpecialiPresenti = false;
let stringaCaratteriSpeciali = "!_-";

for (let i = 0; i < password.length; i++) {
    let singoloCarattere = password.charAt(i);
    console.log("Carattere da analizzare ", singoloCarattere);
    
    if (singoloCarattere === "!" || singoloCarattere === "_" || singoloCarattere === "-") {
        caratteriSpecialiPresenti = true;
    }
    
    
    //if (stringaCaratteriSpeciali.includes(singoloCarattere)) {
    //    caratteriSpecialiPresenti = true;
    //}
    
}
console.log("Controllo presenza caratteri speciali - rispettato? ", caratteriSpecialiPresenti);


console.log("Controllo presenza numeri");
let numeriPresenti = false;
let stringaNumeri = "0123456789";

for (let i = 0; i < password.length; i++) {
    let singoloCarattere = password.charAt(i);
    console.log("Carattere da analizzare: ", singoloCarattere);
    
    
    //if (stringaNumeri.includes(singoloCarattere)) {
    //    numeriPresenti = true;
    //}
    
    
    if(!isNaN(singoloCarattere)) {
        numeriPresenti = true;
    }
}
console.log("Controllo presenza numeri - rispettato? ", numeriPresenti);

if (lunghezzaMinimaRispettata && lunghezzaMassimaRispettata && singoloCarattere && numeriPresenti) {
    console.log("PASSWORD CORRETTAMENTE INSERITA!");
}
else {
    console.error("Password non correttamente inserita");
}

console.groupEnd();
*/


/* esercizio 20 rifatto
console.group("NUMERO DI TELEFONO");

let numberCazzo;
let numeroDiTelefonoValido = false;
let numeriValidi = "1234567890 +";

while (!numeroDiTelefonoValido) {
    
    let numberCazzo = prompt("Inserisci numero di telefono");
    let caratteriNonConsentitiPresenti = false;
    
    for (let i = 0; i < numberCazzo.length; i++) {
        let carattereSingolo = numberCazzo.charAt(i);
        
        if (!numeriValidi.includes(carattereSingolo)) {
            caratteriNonConsentitiPresenti = true;
        }
    }
    if (caratteriNonConsentitiPresenti) {
        numeroDiTelefonoValido = false;
        alert("Hai inserito dei caratteri non validi, cretino! Riprova!");
    }
    else {
        numeroDiTelefonoValido = true;
        alert("Numero ok");
    }
    console.log("Numero di telefono valido: ", !caratteriNonConsentitiPresenti);
}

let ultimiTreNumeri = numberCazzo.slice(-3);
let numeroCaratteriDaSostituire = numberCazzo.length -3;
let numeriOffuscati = "";

for (let i = 0; i < numeroCaratteriDaSostituire; i++) {
    if (numeroCaratteriDaSostituire === " ") {
        numeriOffuscati += " ";
    }
    else {
        numeriOffuscati += "*";
    }
}


console.groupEnd();
*/

/*numero di telefono che funziona
let numeroDiTelefono;
let numeroDiTelefonoValido = false;
let caratteriConsentiti = "0123456789 +";

console.log("pre while");

while (!numeroDiTelefonoValido) {
    numeroDiTelefono = prompt("Inserisci numero di telefono");
    let caratteriNonConsentitiPresenti = false;
    for (let i = 0; i < numeroDiTelefono.length; i++) {
        let carattereSingolo = numeroDiTelefono.charAt(i);
        if (!caratteriConsentiti.includes(carattereSingolo)) {
            caratteriNonConsentitiPresenti = true;    
        }
    }
    if (caratteriNonConsentitiPresenti) {
        numeroDiTelefonoValido = false;
        alert("Hai inserito dei caratteri non validi! Riprova")
    }
    else {
        numeroDiTelefonoValido = true;
    }
    
    console.log("Numero di telefono valido:", !caratteriNonConsentitiPresenti);
}


let parteDiNumeroVisibile = numeroDiTelefono.slice(-3);
let numeroCaratteriDaSostituire = numeroDiTelefono.length - 3;
let numeriOffuscati = "";

for (let i = 0; i < numeroCaratteriDaSostituire; i++) {
    let carattereSingolo = numeroDiTelefono.charAt(i);
    
    if (carattereSingolo === " ") {
        numeriOffuscati += " ";
    }
    else {
        numeriOffuscati += "*";
    }
}

numeriOffuscati = numeriOffuscati + parteDiNumeroVisibile;

alert("Numero inserito = " + numeriOffuscati);

console.groupEnd();
*/


/* esercizio 22 - questo non va :(
console.group("Esercizio partita a dadi");
    
let numeroTiri = 7;
let totaleGiocatore1 = 0;
let totaleGiocatore2 = 0;
    
for (let i = 0; i < numeroTiri; i++) {
    let tiroGiocatore1 =  Math.floor(Math.random() * 20 - 1 + 1) + 1;
    let tiroGiocatore2 =  Math.floor(Math.random() * 20 - 1 + 1) + 1;
    if (tiroGiocatore1 > tiroGiocatore2) {
        alert(`Giocatore1 ha fatto ${tiroGiocatore1} punti`);
    }
    else if (tiroGiocatore1 < tiroGiocatore2) {
        alert(`Giocatore2 ha fatto ${tiroGiocatore2} punti`);
    }
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
*/
    
/* esercizio D&D - questo va! :)
let numeroDiTiri;
let punteggioG =0;
let punteggioN =0;
let punteggioGiovanni=0;
let punteggioPaolo=0;
while (punteggioG===punteggioN){
    numeroDiTiri=prompt ("Numero di tiri");
    for (let i=0; i<numeroDiTiri;i++){
        giocatore1 = Math.floor(Math.random()*(20-1+1)+1);
        punteggioG = giocatore1;
        giocatore2 = Math.floor(Math.random()*(20-1+1)+1);
        punteggioN = giocatore2;
        punteggioGiovanni += punteggioG;
        punteggioPaolo += punteggioN;
        if (punteggioG>punteggioN){
            alert (`Giovanni ha fatto ${punteggioG} punti.`);
        }
        else if (punteggioG<punteggioN) {
            alert (`Paolo ha fatto ${punteggioN} punti.`);
        }
    }
            
    if (punteggioGiovanni>punteggioPaolo){
        alert (`Vince Giovanni con ${punteggioGiovanni} punti.`);
    }
    else if (punteggioGiovanni<punteggioPaolo){
        alert (`Vince Paolo con ${punteggioPaolo} punti.`);
    }
}
*/
        
        
/* esercizio 23
let numero = prompt("Inserisci un numero");
let numeroPari = false;
if (numero % 2 == 0) {
    numeroPari = true;
}
else {
    numeroPari = false;
}
console.log("Numero pari?", numeroPari);
*/
        
/* esercizio 24 -prova a rifarlo con lo switch
let mese = prompt("Inserisci un mese");
        
if (mese == "novembre" || mese == "aprile" || mese == "giugno" || mese == "settembre") {
    console.log(mese, "ha 30 giorni");
    alert(mese, "ha 30 giorni!")
}
else if (mese == "febbraio") {
    console.log(mese, "ha 28 giorni");
    alert(mese, "ha 28 giorni!");
}
else if (mese == "gennaio" || mese == "marzo" || mese == "maggio" || mese == "luglio" || mese == "agosto" || mese == "ottobre") {
    console.log(mese, "ha 31 giorni");
    alert(mese, "ha 31 giorni");
}
else {
    console.log("Non hai inserito un mese!");
    alert("Questo non è un mese genio!");
}
*/
        
        
/* esercizio 25
        
let categoria = prompt("Inserisci una categoria");
        
if (categoria == "fantasy") {
    alert("Film suggerito: Il signore degli anelli");
    console.log(categoria, ": Il signore degli anelli");
}
else if (categoria == "fantascienza") {
    alert("Film suggerito: Matrix");
    console.log(categoria, ": Matrix");
}
else if (categoria == "animazione") {
    alert("Film suggerito : Inside Out");
    console.log(categoria, ": Inside Out");
}
*/
        
        
/* esercizio 26
        
let age = prompt("Buonasera, quanti anni ha lei?");
age = +age;
console.log("Età: ", age);
if (age >= 18) {
    let license = prompt("Ce l'ha la patente?");
    console.log("Patente: ", license);
    if (license == "si") {
        let insurance = prompt("E l'assicurazione ce l'ha?");
        console.log("Assicurazione: ", insurance);
        if (insurance == "si") {
            alert("Facciamo anche un bel controllino sui punti, già che ci siamo");
            let punti = Math.floor(Math.random() * (20 - 0 + 1) + 0);
            console.log("Punti: ", punti);
            if (punti >=1) {
                alert("Tutto apposto, vada piano!");
            }
            else if (punti == 0) {
                alert("Lei non dovrebbe guidare! Non ha punti sulla patente! Sceda dal veicolo!");
                alert("MULTA.");
            }
        }
        else if (insurance == "no") {
            alert("Lei non può circolare senza assicurazione! Sceda dal veicolo!");
            alert("MULTA E FERMO DEL VEICOLO PER 6 MESI");
        }
    }
    else if (license == "no") {
        alert("Lei non può assolutamente guidare senza patente! Sceda dal veicolo!");
        alert("MULTA.");  
    }
}
else if (age < 18) {
    alert("LEI NON DOVREBBE ESSERE ALLA GUIDA, SCENDA DAL VEICOLO LENTAMENTE!");
}
*/
        
/* esercizio 27
        
let numero1 = prompt("Insesrisci primo valore");
let numero2 = prompt("Inserisci secondo valore");
let operazione = prompt("Inserisci simbolo matematico");
numero1 = +numero1;
numero2 = +numero2;
        
if (operazione == "+") {
    let risultato = numero1 + numero2;
    console.log(risultato);
}
else if (operazione == "-") {
    let risultato = numero1 - numero2;
    console.log(risultato);
}
else if (operazione == "*") {
    let risultato = numero1 * numero2;
    console.log(risultato);
}
else if (operazione == "/") {
    let risultato = numero1 / numero2;
    console.log(risultato);
}
*/
        
/* esercizio 28
        
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log( i );
    }
}
*/
        
/* esercizio 29
        
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i*j);
    }
}
*/        
/* tabellina a quadrato
let x
let y
let risultato
for (x = 0; x <= 10; x++) {
    for (y = 0; y <= 10; y++) {
        risultato += " " + x*y + " ";
    }
    risultato += '/n';
}
console.log(risultato);
*/
        
/* esercizio 30
let testo = `Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
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
        console.log(vocaleA);    
    }
}
        
let vocaleE = "eE";
        
for (let i = 0; i < testo.length; i++) {
    let lettera = testo.charAt(i);
    if (vocaleE.includes(lettera)) {
        console.log(vocaleE);    
    }
}        

let vocaleI = "iI";
        
for (let i = 0; i < testo.length; i++) {
    let lettera = testo.charAt(i);
    if (vocaleI.includes(lettera)) {
        console.log(vocaleI);    
    }
}
        
let vocaleO = "oO";
        
for (let i = 0; i < testo.length; i++) {
    let lettera = testo.charAt(i);
    if (vocaleO.includes(lettera)) {
        console.log(vocaleO);    
    }
}
        
let vocaleU = "uU";
        
for (let i = 0; i < testo.length; i++) {
    let lettera = testo.charAt(i);
    if (vocaleU.includes(lettera)) {
        console.log(vocaleU);    
    }
}
        
let vocali = "aAeEiIoOuU";
        
for (let i = 0; i < testo.length; i++) {
    let lettera = testo.charAt(i);
    if (vocali.includes(lettera)) {
        console.log(vocali);    
    }
}
*/
        
        
/* esercizio 31 (i nomi delle variabili sono per far funzionare il codice :))
        
function stocazzo(n, m) {
    if (n !== m) {
        stocazzo2 = false;
    }
    else if (n === m) {
        stocazzo2 = true;
    }
    return stocazzo2;
}
let stoGranCazzo = stocazzo(2, "2");
console.log(stoGranCazzo);
let stoGranCazzo2 = stocazzo(2, 3);
console.log(stoGranCazzo2);
let stoGranCazzo3 = stocazzo(2, 2);
console.log(stoGranCazzo3);
*/
        
/* esercizio 32
function reverseString(str) {
    let parolaAlContrario = str.split("").reverse().join("");
    return parolaAlContrario;
}
console.log(reverseString("hello"));
*/
        
/* esercizio 33
let numeroRandom;
let n = prompt("Inserisci un numero massimo di faccie del dado");
function numeroACazzo() {
    numeroRandom = Math.floor(Math.random()*(n - 1 + 1) +1);
    return numeroRandom;
}
console.log(numeroACazzo(numeroRandom));
console.log(numeroACazzo(numeroRandom));
*/
        
/* esercizio 34
function dadi() {
            
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
let partita1 = dadi();
console.log(partita1);
*/
        

/* esercizio 35

function fantacalcio(nome="", baseVoto=0, golFatti=0, assistEffettuati=0, autogol=0, ammonizioni=0, espulsioni=0) {
    totale = baseVoto + (golFatti*3) + (assistEffettuati*1) - (autogol*2) - (ammonizioni*1) - (espulsioni*2);
    console.log(`${nome}: \nbaseVoto=${baseVoto} \ngolFatti=${golFatti} \nassistEffettuati=${assistEffettuati} \nautogol= ${autogol} \nammonizione= ${ammonizioni} \nespulsione= ${espulsioni} \n \nrisultato= ${totale}`);
    
}
fantacalcio("Tizio", 6, 3, 2, 2, 1, 0);

*/



 /* esercizio 36
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
    console.log(`%c${stringaDaFormattare}`, "background-color: blue; font-size: 30px; color: white;");
  }
function sottotitolo(stringaDaFormattare) {
    console.log(`%c${stringaDaFormattare}`, "font-size: 20px; color: blue;");
}
function highlight(stringaDaFormattare) {
    console.log(`%c${stringaDaFormattare}`, "background-color: orange;");
}
function disastro(stringaDaFormattare) {
    console.log(`%c${stringaDaFormattare}`, "background-color: red; font-size: 50px; color: white");
}

function myLog(stringa, funzionePerFormattareLaStringa) {
    let risultato = funzionePerFormattareLaStringa(stringa);
}

myLog("Dale", titolo);
myLog("a tu cuerpo", sottotitolo);
myLog("alegrìa", highlight);
myLog("MACARENA", disastro);


/*
function myLog(message="", type="") {

    switch (type) {
      case "titolo":
        console.log('%c' + message, 'background-color: blue;  font-size: 30px; color: white;');
        break;
      case "sottotitolo":
        console.log('%c' + message, 'font-size: 20px; color: blue;');
        break;
      case "highlight":
        console.log('%c' + message, 'background-color: orange;');
        break;
      case "disastro":
        console.log('%c' + message, 'background-color: red;  font-size: 50px; color: white;');
        break;
    }
}
*/