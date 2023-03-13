// Esercizio 17

/*let v = +prompt("Che voto hai preso?")
let giudizio;

//if = se, v<18 il voto è insufficiente
if (v < 18) {
    console.log("insufficiente");
}
//else if = altrimenti se, v<18 il voto è insufficiente
else if (v >= 18 && v < 21) {
    console.log("sufficiente");
}
else if (v >= 21 && v < 24) {
    console.log("buono");
}
else if (v >= 24 && v < 27) {
    console.log("distinto");
}
else if (v >= 27 && v <= 29) {
    console.log("ottimo");
}
else if (v == 30) {
    console.log("eccellente");
}
// else = alttimenti, sarebbe per tutti gli altri casi, si può anche omettere, ma per best practice lo inseriamo
else {
    console.log("hai inserito un voto non valido!");
}

console.log(giudizio);*/


//Esercizio 18

//Useremo il console.group, questo perchè così ogni nuovo msg verrà caricato sempre nello stesso console.
//Esso ha un inizio ed una fine: console.groupEnd, impostalo subito

console.group("Esecizio 18 sulla tabellina")

let numeroBase = 8;
//Questa di chiama "dichiarazione di variabile inline"
for (let i = 1; i < 11; i++) {
//=> let i = 1 (i è il "begin" e viene eseuito una sola volta;
//=> i < 11 è la "condition" che viene ricontrollata ad ogni interazione sino a quando sarà TRUE, se è FALSE, il ciclo si blocca in questa fase e non passa al body non restituiendo così nessun esito;
//=> console.log è il "body" e viene eseguito sino a quando la condizione è TRUE altrimenti non viene eseguito;
// => i++ è lo "step" che incrementa la condizione, dandone voce nel body sino a quando non si raggiunge appunto la condizione.
    console.log(numeroBase + " * " + i + " = " + numeroBase * i);
}

console.groupEnd()

//Esercizio 19

/*Validazione password
Scrivi un programma che, data una stringa, da usare come ipotetica password, faccia i seguenti controlli

- almeno 6 caratteri
- non più di 20 caratteri
- deve contenere almeno uno dei seguenti simboli; “!”, “_”, “-”
- deve contenere almeno un numero */

console.group("Esercizio 19: validazione password");

let passw = prompt('Inserisci una password');
let number = "0123456789";
let simbol = "!_-";
let validazioneLunghezza = true;
let ...


if (passw.length < 6) {
    console.log("Riprova, troppo corta");
}
else if (passw.length > 20) {
    console.log("Riprova, troppo lunga");
}
else if (number.test(passw) === false) {
    console.log("Non hai inserito il numero");
}
else if (simbol.test(passw) === false) {
    console.log("Non hai inserito uno dei tre simboli !, _ oppure -");
}
else {
    console.log("ok");
}*/

/*let psw= prompt(password)
let simbol=/[ ! ? : ; ]/;
let number =/[0 1 2 3 4 5 6 7 8 9]/
if (psw.length < 6) {
    console.log(troppo corta);
}
else if(psw.length > 20){
    console.log(troppo lunga);
}
else if(simbol.test(psw) === false){
    console.log(non ci sono i simboli);
}
else if(number.test(psw) === false){
    console.log(non ci sono numeri);
}

else{
    console.log(ok);
}*/

console.groupEnd();
//Esercizio 20

/*let phone = prompt('Inserisci il tuo numero di telefono', "+39 ");

let numeriCensurati = phone.length - 3;
let ultimiTre = phone.slice(-3);

let censura = " ";

for (let i = 0; i < numeriCensurati; i++) {
    let carattereDaNascondere = phone.charAt + (i);


    console.log("Numeri che nasconderò", carattereDaNascondere);

    if (carattereDaNascondere !== " ") {
        censura = censura + "*";
    }

    else {
        censura = censura + " ";
    }
}
alert(`Il numero di telefono è ${censura} ${ultimiTre}`);*/

//Esercizio 21

