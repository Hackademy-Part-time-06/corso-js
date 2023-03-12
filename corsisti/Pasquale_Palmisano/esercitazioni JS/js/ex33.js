/*Esercizio 33

Scrivi una funzione che si occupi di generare un numero randomico da 1 a N e lo restituisca*/

function random() {
    let x = Math.floor(Math.random() * 100) + 1

    return x
}

console.log(random());