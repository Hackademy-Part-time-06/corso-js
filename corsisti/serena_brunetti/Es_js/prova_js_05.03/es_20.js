/*Riscrivi il programma dell’esercizio 12 in questo modo:
- fai inserire manualmente un numero di telefono all’utente tramite un prompt
- controlla che nel numero siano presenti solo numeri ed eventualmente spazi ed il simbolo + 
- se l’utente inserisce lettere non consentite mostragli un alert di errore e fagli reinserire il numero di telefono (l’operazione deve andare avanti finchè l’utente non inserisce un numero di telefono corretto)
- offusca tutte le cifre, sostituendole con l'asterisco * (tranne gli spazi), e lascia visibili solo le ultime 3.*/

let bNumberNOk = true
let bSingleCharOK = true;

while (bNumberNOk) {
    let phoneNumber = prompt("Inserisci il tuo numero di telefono");

    for (let i = 0; i < phoneNumber.length; i++) {
        bNumbers = false;   //li dichiaro all'interno perchè ho bisogno di
        bPlus = false;      //verificarli singolarmente per ogni carattere 
        bSpace = false;     //(per ogni iterazione)
        if (phoneNumber.charAt(i) == "+") {
            bPlus = true;
        }
        if (phoneNumber.charAt(i) == " ") {
            bSpace = true;
        }
        let numero = Number(phoneNumber.charAt(i));
        if (isNaN(numero) != true) {
            bNumbers = true
        }

        if (bPlus == true || bSpace == true || bNumbers == true) {
            bSingleCharOK = true;
        }
        else {
            bSingleCharOK = false;
            alert("Inserisci un formato corretto")
            break;
        }
    }

    bNumberNOk = !bSingleCharOK     //Assegniamo alla variabile bNumberNOk il valore contrario
    // a quello della variabile bSingleCharOK che risulterà in 
    //base all'esito delle verifiche precedentemente eseguite

    
    let partedinumerovisibile = phoneNumber.slice(-3);
    let numerocaratteridasost = phoneNumber.length - 3;
    let numerioffuscati = ""; //valore vuoto

    for (let i = 0; i < numerocaratteridasost; i++) {
        let carattereSingolo = phoneNumber.charAt(i);
        if (carattereSingolo === " ") {
            numerioffuscati = numerioffuscati + " ";
        }
        else {
            numerioffuscati = numerioffuscati + "*"
        }
    }
    numerioffuscati = numerioffuscati + partedinumerovisibile;
    alert("Numero inserito: " + numerioffuscati)

}
