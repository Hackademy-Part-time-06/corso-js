/* esercizio 1
let movieTitle = "Pulp Fiction"
let movieYear = "1994"
let movieDirector = "Quentin Tarantino"
console.log(movieTitle);
console.log(movieYear);
console.log(movieDirector);

let movie = "Pulp Fiction (1994 - Quentin Tarantino)"
console.log(movie);
*/

/* esercizio 2
let bookTitle
bookTitle = "Atacama Express"
let bookDescription = "Il libro di una vita"
console.log(bookTitle);
console.log(bookDescription);
*/

/* esercizio 3
var admin = "Gino"
var name = "Gino"
alert(admin);
*/

/* esercizio 4
let username = prompt("Inserisci il tuo nome")
let password = prompt("Inserisci password")
alert("Benvenuto " + username + " nell'area personale");
*/

/* esercizio 8
let somma = 10 + 20 + 35 + 50 + 70;
console.log(somma);
let mediaAritmetica = somma/5;
console.log(mediaAritmetica);
*/

/* esercizio 9
let numero1 = prompt("Inserisci un numero");
let numero2 = prompt("Inserisci un numero");
let numero3 = prompt("Inserisci un numero");
let numero4 = prompt("Inserisci un numero");
let numero5 = prompt("Inserisci un numero");
numero1 = +numero1;
numero2 = +numero2;
numero3 = +numero3;
numero4 = +numero4;
numero5 = +numero5;
let somma2 = numero1+numero2+numero3+numero4+numero5;
console.log(somma2);
let mediaAritmetica2 = somma2/5;
console.log(mediaAritmetica2);
*/

/* esercizio 10
let annoDiNascita = prompt("Inserisci anno di nascita");
annoDiNascita = +annoDiNascita;
let età = 2023 - annoDiNascita;
console.log(età);
let aiCento = 100 - età;
console.log(aiCento);
*/

/* esercizio 11
let name = "claudia";
console.log(name.charAt(0).toUpperCase()+name.slice(1));
*/

/*esercizio 12
let numero = prompt("inserisci il tuo numero di telefono");
numero = numero.slice(7);
console.log("*******" + numero);
*/

/*esercizio 13
console.log(Math.min(2, 6, 11, 45, 67));
console.log(Math.max(2, 6, 11, 45, 67));
*/

/* esercizio 14 
let sommaDecimali = (0.1*10 + 0.2*10) / 10;
console.log(sommaDecimali);
*/

/* esercizio 15
console.log(Math.floor(Math.random()*6)+1);
*/

/*esercizio 16
let gattiTot = 44;
let gattiFila = 6;
let fileTot = Math.round(gattiTot/gattiFila);
console.log(fileTot);
let modulo = gattiTot % gattiFila;
console.log(modulo);
let gattiMancanti = gattiFila - modulo;
console.log(gattiMancanti);
*/

/* esercizio 17
let voto = prompt("inserisci voto");
let valutazione;

if (voto<18) {
    valutazione="Insufficiente";
}
else if (voto>=18 && voto<21) {
    valutazione="Sufficiente";
}
else if (voto>=21 && voto<24) {
    valutazione="Buono";
}
else if (voto>=24 && voto<27) {
    valutazione="Distinto";
}
else if (voto>=27 && voto<=29) {
    valutazione="Ottimo";
}
else if (voto=30) {
    valutazione="Eccellente!";
}

alert(valutazione);
*/

/* esercizio 18
x = prompt("inserisci un numero");
x=+x
for (let i=0; i<=10; i++) {
    console.log(x*i);
}
*/

/*esercizio 19
let password = prompt("inserisci password");

if (password.length<=6 || password.length>=20 || !password.includes("!", "_", "-") || !password.includes([0-9])) {
    alert("La password deve avere almeno 6 caratteri e non più di 20, contenere un numero ed uno di questi simboli !, _, -);
    console.log("sono nell'if");
}
*/

/*esercizio 20
let phoneNumber = prompt("Inserisci il tuo numero di telefono");

while (!phoneNumber.includes([0-9]) || !phoneNumber.includes(" ") || !phoneNumber.includes("+") && phoneNumber.includes([A-Z])) {
    alert("Caratteri inseriti a caso!");
    phoneNumber = prompt("Inserisci di nuovo il tuo numero di telefono <3");
} 
console.log("*******" + phoneNumber.slice(7));
*/

/* esercizio 21
let numberOfGames=prompt ("numero di tiri")
let scorePlayer1 =0
let scorePlayer2 =0
for (let i = 0; i < numberOfGames; i++){
    player1 = Math.floor(Math.random()*(6-1+1)+1);
    scorePlayer1 += player1;
    console.log (scorePlayer1);
    player2 = Math.floor(Math.random()*(6-1+1)+1);
    scorePlayer2 += player2;
    console.log (scorePlayer2);
}

if(scorePlayer1 > scorePlayer2){
    alert ("Player1 vince con ben " + scorePlayer1 + " punti!!");
} 
else if(scorePlayer2 < scorePlayer1) {
    alert ("Player2 vince con ben " + scorePlayer2 + " punti!!");
} 
else if(scorePlayer1 == scorePlayer2) {
    alert("Rigiocatela <3");
}
*/


// esercizio 22
let numberOfGames = prompt("Numero di tiri");
let scorePlayer1 = 0;
let scorePlayer2 = 0;
for (let i = 0; i < numberOfGames; i++){
    player1 = Math.floor(Math.random()*(20-1+1)+1);
    scorePlayer1 = player1;
    console.log (scorePlayer1);
    player2 = Math.floor(Math.random()*(20-1+1)+1);
    scorePlayer2 = player2;
    console.log (scorePlayer2);
    alert ("Giocatore1 ha fatto " + scorePlayer1, "Giocatore2 ha fatto " + scorePlayer2);
}
while (scorePlayer1 === scorePlayer2){
    alert ("Pareggio, no no no no no no. Ritirate sti dadi và.");
    numberOfGames = prompt("Magari meglio tirarne qualcuno in più");
    for (let i = 0; i < numberOfGames; i++){
        player1 = Math.floor(Math.random()(20-1+1)+1);
        scorePlayer1 += player1;
        console.log (scorePlayer1);
        player2 = Math.floor(Math.random()(20-1+1)+1);
        scorePlayer2 += player2;
        console.log (scorePlayer2);
        alert ("Giocatore1 ha fatto " + scorePlayer1, "Giocatore2 ha fatto " + scorePlayer2);
    }
}
if (scorePlayer1 > scorePlayer2){
    alert ("Giocatore1 ha totalizzato " + scorePlayer1 + " punti. \nGiocatore2 ha totalizzato " + scorePlayer2 + " punti.\nVince la partita Giocatore1!")
}
else if (scorePlayer1 < scorePlayer2) {
    alert ("Giocatore1 ha totalizzato " + scorePlayer1 + " punti. \nGiocatore2 ha totalizzato " + scorePlayer2 + " punti.\nVince la partita Giocatore2!.")
}

//non esce alert scorePlayer2 e per la vittoria non fa somma dei punteggi ma tiene conto solo dell'ultimo lancio :(

