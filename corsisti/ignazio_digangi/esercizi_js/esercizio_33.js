console.log("Esercizio 33")
console.log("Scrivi una funzione che si occupi di generare un numero randomico da 1 a N e lo restituisca")

let numero;

function numeroCasuale(){
    numero = Math.round(Math.random() * 100);
}

numeroCasuale();
console.log("Il numero random è: " + numero);

