//Scrivi una funzione che si occupi di generare un numero randomico da 1 a N (N deve essere passato alla funzione dinamicamente) e lo restituisca

function random(num) {
    let numeroRandom
    numeroRandom = Math.floor(Math.random() * (num - 1 + 1) + 1);
    return numeroRandom
}
let numeroRandom1 = random(6)
console.log(numeroRandom1)