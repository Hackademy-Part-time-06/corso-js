/*Validazione password
Scrivi un programma che, data una stringa, da usare come ipotetica password, faccia i seguenti controlli
- almeno 6 caratteri
- non più di 20 caratteri
- deve contenere almeno uno dei seguenti simboli; “!”, “_”, “-”
- deve contenere almeno un numero*/

let password = prompt("Inserisci qui la tua password:")
let condizioneCaratteri = false;
let condizioneNumeri = false;

if (password.length < 6 || password.length > 20) {
    alert("La password deve avere almeno 6 e massimo 20 caratteri!")
}
for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) == "!" || password.charAt(i) == "_" || password.charAt(i) == "-") {
        condizioneCaratteri = true;
    }
    let numero = Number(password.charAt(i));
    if (isNaN(numero) != true) {
        condizioneNumeri = true
    }
}
if (condizioneCaratteri == false) {
    alert("La tua password deve contenere almeno uno dei seguenti simboli: “!”, “_”, “-”")
}
if (condizioneNumeri == false) {
    alert("La tua password deve avere almeno un numero")
} 
