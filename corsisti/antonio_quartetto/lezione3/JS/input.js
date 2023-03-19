/* esercizio 17

let votoNumerico = prompt ("Inserisci un voto");

if (votoNumerico = +votoNumerico && votoNumerico <= 30){
    if (votoNumerico < 18){
        console.log ("Insufficiente")
    }
    else if (votoNumerico >= 18 && votoNumerico < 21){
        console.log("Sufficiente")
    }
    else if (votoNumerico >= 21 && votoNumerico < 24){
        console.log("Buono")
    }
    else if (votoNumerico >= 24 && votoNumerico < 27){
        console.log("Distinto")
    }
    else if (votoNumerico >= 27 && votoNumerico <= 29){
        console.log("Ottimo")
    }
    else if (votoNumerico === 30) {
        console.log("SEI PIU' BRAVO DI EINSTEIN FRATELLI'")
    }
}
else {
    alert("INSERISCI UN NUMERO REALE/VALIDO DA 1 A 30")
}
*/




/*esercizio 18

let numeroTabellina = prompt("Inserisci un numero e ti uscirà la tabellina corrispondente");

if (numeroTabellina = +numeroTabellina){
    console.log ("Tabellina del: " + numeroTabellina)
    console.log (numeroTabellina * 1)
    console.log (numeroTabellina * 2)
    console.log (numeroTabellina * 3)
    console.log (numeroTabellina * 4)
    console.log (numeroTabellina * 5)
    console.log (numeroTabellina * 6)
    console.log (numeroTabellina * 7)
    console.log (numeroTabellina * 8)
    console.log (numeroTabellina * 9)
    console.log (numeroTabellina * 10)
}
else {
    alert("Inserisci un numero VALIDO")
}


//OPPURE

let tabellina = prompt("Inserisci un numero");
tabellina = +tabellina
for (let i = 1 ; i <=10; i++){
    console.log (`${tabellina} x ${i} = ${tabellina*i}`)
}
*/




/*esercizio 19

let password = prompt("Inserisci la Password");
let simbol=/[ ! , _ - ? ]/; //posso inserire più simboli da verificare
let number =/[0 1 2 3 4 5 6 7 8 9]/

if (password.length <6 || password.length >20){
    console.log("Lunghezza password errata, deve essere lunga min 6 caratteri e max 20")
}
else if (simbol.test(password) !== true){
    console.log("Non contiene nemmeno 1 simbolo")
}
else if (number.test(password) !== true){
    console.log("Non ci sono numeri")
}
else {
    console.log ("Password Corretta")
}
*/




/*esercizio 20

//variabile numero cell
let numeroCell; 

//variabile che mi serve come condizione per il while
//parto dal presupposto che l'utente inserisce il numero sbagliato
let numeroCellValido = false

//inizializzo una stringa con i vari caratteri ammessi
let caratteriConsentiti = "0123456789 +"

//se il numero è sbagliato lo chiedo all'utente - uso la negazione per avere un true(false + false = true)
while (!numeroCellValido){

    //chiedo il numero
    numeroCell = prompt("Inserisci il tuo numero di Cell") 

    //variabile di supporto per fare il check se sono presenti o meno dei caratteri NON CONSENTITI
    let caratteriNonconsentitiPresenti = false

    //CICLO TUTTI I CARATTERI DEL NUMERO DEL CELL
    for (let i = 0; i < numeroCell.length; i++){

        //prendo il singolo carattere
        let carattereSingolo = numeroCell.charAt(i)

        //se il carttere non è tra i consentiti vuil dire che è un carattere proibito - negazione
        if (!caratteriConsentiti.includes(carattereSingolo)){

            //è vero che ci sono dei caratteri proibiti
            caratteriNonconsentitiPresenti = true
        }
    }
    //se sono presenti dei caratteri proibiti -> true
    if (caratteriNonconsentitiPresenti){

        //numero cell non è valido 
        numeroCellValido = false

        //comunico l'errore all'utente
        alert("Caratteri non validi")
    }
    else {
        //caso in cui NON  ci sono caratteri proibiti -> quindi la stringa è valida
        //interrompo il while visto che "numeroCellValido" è la variabile usata per la condizione del while
        numeroCellValido = true 
    }
}

let numeriDaCensurare = numeroCell.length -3 // totale di numeri da offuscare
let numeroVisibile = numeroCell.slice(-3) //mi salvo gli ultimi 3 numeri visibili
let censura = "" //prevedo una variabile dove andrò ad aggiungere un asterisco per ogni numero da censurare
for (let i = 0; i < numeriDaCensurare; i++){

    let caratteriDaNascondere = numeroCell.charAt(i)

    if (caratteriDaNascondere !== " "){  //qui sto dicendo che se il carattere è diverso dallo spazio censuramelo
        censura += "*"
    }
    else {
        censura += " " //altrimeti se è uno spazio lo lascia spazio
    }
}

alert(`Il tuo numero di cell è ${censura} ${numeroVisibile}`)
*/


