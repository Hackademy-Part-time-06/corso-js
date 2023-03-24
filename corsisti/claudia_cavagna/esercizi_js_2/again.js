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
    
    
    /*
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
    */
    
    
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
    
    
/* esercizio 37
const numberList = [1, 4, 12, 7, 34, 22, 78, 45, 5, 90];
function decreasingOrder (a, b) {
    return b - a;
}
console.log(numberList.sort(decreasingOrder));
    
function increasingOrder (a, b) {
    return a - b;
}
console.log(numberList.sort(increasingOrder));
*/

/* esercizio 38
const listOne = [];
const listTwo = [];
function listThree(listOne, listTwo, operation) {
    switch(operation) {
        case "addizione":
            let addizione = [];
            for (let i = 0; i < listOne.length; i++) {
                addizione.push((listOne[i])+(listTwo[i]));
            }
        console.log(addizione);
        break;
        case "sottrazione":
            let sottrazione = [];
            for (let i = 0; 0 < listOne.length; i++) {
                sottrazione.push((listOne[i])-(listTwo[i]));
            }
        console.log(sottrazione);
        break;
        case "moltiplicazione":
            let moltiplicazione = [];
            for (let i = 0; i < listOne.length; i++) {
                moltiplicazione.push((listOne[i])*(listTwo[i]));
            }
        console.log(moltiplicazione);
        break;
        case "divisione":
            let divisione = [];
            for (let i = 0; i < listOne.length; i++) {
                divisione.push((listOne[i])/(listTwo[i]));
            }
        console.log(divisione);
        break;
        }
    }
listThree([1, 2, 3], [10, 11, 12], "addizione");
// domanda: perchè cosi funziona mentre se faccio
// listThree([listOne], [listTwo], "addizione"); non funziona
*/

/* esercizio 39

let tot = 0;
let numeriSi = [];
function mediaValori (listaNumeri) {
    for (let i = 0; i < listaNumeri.length; i++) {
        tot = tot + listaNumeri[i];
        media = tot / listaNumeri.length;

    }
    console.log(media);
    for (let y = 0; y < listaNumeri.length; y++) {
        if (listaNumeri[y] < media) {
            numeriSi.push(listaNumeri[y]);
        }
    }
    console.log(numeriSi);
}
mediaValori([2, 5, 10, 7, 9]);
*/


/* esercizio 40

let numeriDivisibili = [];
function division (numbers, divisore) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisore === 0) {
            numeriDivisibili.push(numbers[i]);
        }
    }
    console.log(numeriDivisibili);
}
division([1, 2, 3, 4, 5, 6], 2);
*/


/* esercizio 41

function yesOrNot (x, y) {
    if (x.includes(y)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
yesOrNot([10, 45, "yes"], 10);
*/


/* esercizio 42

let somma = 0;
function numberPositive (numeri) {
    for (i = 0; i < numeri.length; i++) {
        if (numeri[i] > 0) {
            somma += numeri[i];
        }
    }
    console.log(somma);
}
numberPositive([-2, -4, -5, -18]);
*/


/* esercizio 43

function raddoppia (numbers) {
    let numeriRaddoppiati = [];
    for (let i = 0; i < numbers.length; i++) {
        numeriRaddoppiati.push(numbers[i]*2);
    }
    console.log(numeriRaddoppiati);
}
raddoppia([1, 2, 3]);
*/

/* esercizio 44

function punti (risultato) {
    let puntiFinali = 0;
    for (i = 0; i < risultato.length; i++) {
        let singoloRisultato = risultato[i].split(":");
        console.log(singoloRisultato);  
        if (singoloRisultato[0] > singoloRisultato[1]) {
            risultatoPartita = 3;
        }
        else if (singoloRisultato[0] < singoloRisultato[1]) {
            risultatoPartita = 0;
        }
        else {
            risultatoPartita = 1;
        }
        puntiFinali += risultatoPartita;
    }
    console.log(puntiFinali);
}
punti(["1:5", "6:4", "2:5"]);
*/

//esercizio 45
/*parte 1 - 38
function totale (lista1, lista2, operazione) {
    let risultato = lista1.map(function (elemento, index) {
        let risultatoOperazione;
        switch(operazione) {
            case "addizione":
                risultatoOperazione = elemento + lista2[index];
            break;
            case "sottrazione":
                risultatoOperazione = elemento - lista2[index];
            break;
            case "moltiplicazione":
                risultatoOperazione = elemento * lista2[index];
            break;
            case "divisione":
                risultatoOperazione = elemento / lista2[index];
            break;
        }
    return risultatoOperazione;
    })
console.log(risultato);
}
totale([3, 7, 2, 5, 8], [9, 3, 1, 4, 7], "addizione");
*/


/* parte2 - 39
function mediaERitorno (listaNumeri) {
    let media = listaNumeri.reduce(function (somma, elemento) {
        somma = somma + elemento;
        return somma;
    })
    risultatoMedia = media / listaNumeri.length;
    console.log(risultatoMedia);
    let listaFiltrata = listaNumeri.filter(function (numero) {
        return numero < risultatoMedia;
    })
    console.log(listaFiltrata);
}
mediaERitorno([3, 5, 10, 2, 8]);
*/


/*parte3 - 40

function dividiamo (numeri, divisore) {
    let divisione = numeri.filter(function (elemento) {
        return elemento % divisore === 0
    });
    console.log(divisione);
}
dividiamo([1, 2, 3, 4, 5, 6], 2);
*/

// parte4 - 42
/*
function sommaPositivi (numeri) {
    let numeriPositivi = numeri.filter (function (elementi) {
        return elementi > 0;
    });
    console.log(numeriPositivi);
    let sommaNumeri = numeriPositivi.reduce (function (elementi, somma) {
        return somma + elementi;
    });
    console.log(sommaNumeri);
}
sommaPositivi([1, -4, 7, 12]);
*/

/*
function sommaPositivi (numero) {
    somma = 0;
    numeriPositivi = numero.filter (function (number){
        if (number > 0) {
            somma += number;
        }
        return somma;
    })
    console.log(somma);
}
sommaPositivi([-2, -3, -4, -5, -6]);
*/

/* parte 5 - 43

function raddoppia (listaNumeri) {
    let numeriRaddoppiati = listaNumeri.map (function (numeri) {
        return numeri * 2;
    });
    console.log(numeriRaddoppiati);
}
raddoppia([1, 2, 3]);
*/

/* parte 6 - 44
function punteggioTotale(punteggio){
    let puntiFinali=0;
    let punti = 0;
    let punteggioSingolo= punteggio.map(function(number){
        let separati= number.split(":");
        return separati;
    })
    punteggioSingolo.forEach(function(element){
            if(element[0]>element[1]){
                console.log("vinto");
                punti=3;
            }
            else if (element[0]<element[1]){
                console.log("perso");
                punti= 0;
            }
            else if (element[0]=element[1]){
                console.log("pareggio");
                punti=1;
            }
            puntiFinali+= punti;
    });

    console.log(puntiFinali);
}
punteggioTotale(["1:5", "6:4", "2:5"]);
*/


/* esercizio 46

function primeLettere (frase) {
    let paroleSeparate = frase.split(" ");
    console.log(paroleSeparate);
    let primaLettera = paroleSeparate.map (function (parole) {
        return parole.charAt(0);
    })
    console.log(primaLettera);
    let stringa = primaLettera.join("");
    console.log(stringa);
}
primeLettere("Ciao sono un esercizio sui metodi avanzati degli array");
*/

/* esercizio 47
function arrayUnico (lista) {
    let cose = lista.reduce (function (elementi, index) {
        let lista2 = elementi.concat(index);
        return lista2;
    })
    console.log(cose);
}

arrayUnico([
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]);
*/

/* esercizio 48

function somma (listaNumeri) {
    let numeriDivisibili = listaNumeri.filter(function (numeri) {
        return numeri % 2 === 0;
    })
    console.log(numeriDivisibili);
    let sommaNumeri = numeriDivisibili.reduce(function (yeee, index) {
        totale = yeee + index;
        return totale;
    })
    numeri = numeriDivisibili.join("+");
    console.log(numeri + "=" + sommaNumeri);
}
somma([1, 2, 3, 4, 5, 6, 7, 8, 9]);
*/


// esercizio 49
/*let playlist = {
    canzoni : {
        canzone1 : {
            titolo : "Ma che ne so",
            nomeCantante : "Uno poco famoso",
            anno : 2023,
        },
        canzone2 : {
            titolo : "asdfghjhtfg",
            nomeCantante : "Gigi",
            anno : 2000,
        },
        canzone3 : {
            titolo : prompt("Inserisci il titolo della canzone"),
            nomeCantante : prompt("Inserisci il nome del cantante"),
            anno : prompt("Inserisci l'anno di uscita"),
        },
        canzone4 : {
            titolo : prompt("Inserisci il titolo di un'altra canzone"),
            nomeCantante : prompt("Inserisci il nome del cantante"),
            anno : prompt("Inserisci l'anno di uscita"),
        }
    }
}
console.log(playlist.canzoni);*/

/*
let playlist = {
    canzoni : [
        {
            titolo: "Fuori luogo",
            nomeCantante: "Mr. Rain",
            anno: 2018,
        },
    ],
    aggiungiCanzone : function (titolo, nomeCantante, anno) {

        let nuovaCanzone = {
            titolo : titolo,
            nomeCantante : nomeCantante,
            anno : anno,
            
        }
        console.log("Nuova canzone: ", nuovaCanzone);
        playlist.canzoni.push(nuovaCanzone);
    },
    stampaCanzoni : function () {
        playlist.canzoni.forEach (function (canzoni){
            console.log(`${canzoni.titolo} - ${canzoni.nomeCantante} (${canzoni.anno})`);
        })
    }
}
console.log(playlist.canzoni)
playlist.aggiungiCanzone("Guerra e pace", "PSICOLOGI", 2021);
playlist.aggiungiCanzone("Sparire", "I Cani", 2022);
playlist.stampaCanzoni();
*/


/* esercizio 50

let rubrica = {
    utenti : {
        utente1 : {
            nome : "Gino",
            cognome : "Gini",
            telefono : 1234444444,
            indirizzo : {
                via : "via dei Gini",
                città : "Ginoland",
                cap : 12345,
            }
        },
        utente2 : {
            nome : "Dino",
            cognome : "Dini",
            telefono : 1235555555,
            indirizzo : {
                via : "via dei Dini",
                città : "Dinoland",
                cap : 12345,
            }
        },
        utente3 : {
            nome : "Pino",
            cognome : "Pini",
            telefono : 1236666666,
            indirizzo : {
                via : "via dei Pini",
                città : "Pinoland",
                cap : 12345,
            }
        },
    },
}
console.log(rubrica.utenti);

delete rubrica.utenti.utente1;

console.log(rubrica.utenti);
*/
/*
let rubrica = {
    utenti : [],

    aggiungiUtente : function (nome, cognome, telefono, via, città, cap) {
        let nuovoUtente = {
            nome : nome,
            cognome : cognome,
            telefono : telefono,
            indirizzo : {
                via : via,
                città : città,
                cap : cap,
            }
        }
        rubrica.utenti.push(nuovoUtente);
        console.log("Aggiunto utente: ", nuovoUtente);

    },

}

rubrica.aggiungiUtente("Tizio", "Tizi", "23456789", "Viaffanculo", "Mondo", "23456");
rubrica.aggiungiUtente("Tizia", "Tizi", "23456789", "Viaffanculo", "Mondo", "23456");
rubrica.utenti.pop(),
console.log("Cancellato utente:", rubrica.utenti);
*/


/* esercizio 51

let garage = {
    automobili : [{
        brand : "renault",
        model : "twingo",
    }, 
    {
        brand : "fiat",
        model : "panda",
    },
    {
        brand : "renault",
        model : "megane",
    }],
    cercaAuto : function (nome) {
        let modelloPresente = garage.automobili.filter (function(auto, index){
            return auto.brand === nome
        })
        console.log(modelloPresente)
    }
}
let nome = prompt("inserisci marca auto");
garage.cercaAuto(nome);
*/
/*
let garage = {
    automobili : [{
        brand : "Renault",
        model : "Twingo",
    },
    {
        brand : "Renault",
        model : "Clio",
    },
    {
        brand : "Fiat",
        model : "Panda",
    }],
    filtraAuto : function (auto) {
        garage.automobili.filter(function (brandAuto){
            if (brandAuto.brand === auto) {
                console.log(`${brandAuto.brand} - ${brandAuto.model}`)
            };
        })
    }
}
garage.filtraAuto("Renault")
*/

// esercizio 52
/*
let partitaABowling ={
    listaGiocatori:[{
        punteggio:[8,10,10,10,1,1,0,2,8,7],
        giocatore:"Tizio",
    },{
        punteggio:[10,10,10,10,10,10,10,10,10,9],
        giocatore:"Caio",
    },{
        punteggio:[2,3,4,1,4,6,9,9,0,0],
        giocatore:"Sempronio",
    }],
    punteggioTotale: function(){
        let punti = partitaABowling.listaGiocatori.map(function(puntiTot,index){
            let puntiTot2 = puntiTot.punteggio.reduce(function(numeroTot,index){
                let totale= numeroTot+index
                return totale
            })
            console.log(puntiTot2)

        })

    },
}
partitaABowling.punteggioTotale()
*/
/* 
let salaDaBowling = {
    listaGiocatori:[{
        punteggio:[8,10,10,10,1,1,0,2,8,7],
        giocatore:"Tizio",
    },{
        punteggio:[10,10,10,10,10,10,10,10,10,9],
        giocatore:"Caio",
    },{
        punteggio:[2,3,4,1,4,6,9,9,0,0],
        giocatore:"Sempronio",
    }],
    conteggioPunti : function () {
        salaDaBowling.listaGiocatori.forEach (function (punti) {
            punti.totale = punti.punteggio.reduce(function (totale, index) {
                return totale += index;

            })
            console.log(punti);
        })
    },
    chiVince : function () {
        salaDaBowling.conteggioPunti();

        let vincitore = {
            totale : 0,
        }

        salaDaBowling.listaGiocatori.forEach(function (giocatore) {
            if (giocatore.totale > vincitore.totale) {
                vincitore = giocatore;
            }
        })
        return vincitore;
    }
}

console.log("VINCE!" , salaDaBowling.chiVince());
*/


/*esercizio 53

let lista = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]

function occorrenze(lista) {
    let listaNuova = []
    lista.forEach(function (elemento){
        listaNuova = listaNuova.concat(elemento)
    })
    console.log(listaNuova)

    let ricorrenze = {}
    listaNuova.forEach(function (elemento){
        if (ricorrenze.hasOwnProperty(elemento)){
            ricorrenze[elemento] = ricorrenze[elemento] +1
        }
        else {
            ricorrenze[elemento] = 1
        }
    })
    return ricorrenze
}

console.log(occorrenze(lista))
*/


/* esercizio 54
const LIBRI = [
    {
            titolo: "Il Signore degli Anelli",
            autore: "Tolkien",
            categoria: "fantasy"
    },
    {
            titolo: "Harry Potter",
            autore: "Rowling",
            categoria: "fantasy",
    },
    {
            titolo: "Il Conte di Montecristo",
            autore: "Dumas",
            categoria: "narrativa classica"
    },
    {
            titolo: "Dune",
            autore: "Herbert",
            categoria: "fantascienza"
    },
    {
            titolo: "Fight Club",
            autore: "Palahniuk",
            categoria: "narrativa moderna"
    }
  ]

let cheVuoi = prompt("Inserisci una categoria");

let lista = LIBRI.forEach(function(element){
    if (cheVuoi === element.categoria) {
        console.log(`<a href = "www.lamiasuperlibreria.aulab/${element.autore.toLowerCase().replaceAll(" ", "-")}/${element.titolo.toLowerCase().replaceAll(" ", "-")}"> ${element.titolo} </a>`)
    }
    else {
        console.log("Nessun libro presente")
    }
}) 
*/


//esercizio 55

let calendario = {
    lunedi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    martedi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    mercoledi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    giovedi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
        {
            nomeEvento : "Lezione",
            inizioEvento : "21:30",
        },
    ],
    venerdi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    sabato : [],
    domenica : [],
}


function aggiuntaEventi (giornoEvento, nomeEvento, inizioEvento) {
    for (let giorno in calendario) {
        if (giorno === giornoEvento) {
            calendario[giorno].push({nomeEvento, inizioEvento})
            console.log("Nuovo evento: ", giorno, calendario[giorno])
            function compare( a, b ) {
                if ( a.inizioEvento < b.inizioEvento ){
                  return -1;
                }
                if ( a.inizioEvento > b.inizioEvento ){
                  return 1;
                }
                return 0;
              }
              
            console.log(calendario[giorno].sort( compare ));
        }
    }
}


/*
function filtraGiorni (day) {
    for (let giorno in calendario) {
        if (day === giorno) {
            console.log("Oggi dovresti fare: ", calendario[giorno])
        }
    }
}

function occorrenze (cose){
    for(let giorno in calendario){
        calendario[giorno].forEach(function(dentroIlGiorno){
            if (cose === dentroIlGiorno.nomeEvento){
                console.log(`${giorno} - ${dentroIlGiorno.nomeEvento} (${dentroIlGiorno.inizioEvento})`)
            }
        })
    }
}
*/
aggiuntaEventi("martedi", "schifo2", "10:00")
aggiuntaEventi("martedi", "schifo", "08:00")

aggiuntaEventi("lunedi", "flexiamo", "22:44")
// filtraGiorni("martedi")
// occorrenze("Lezione")

