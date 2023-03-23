//Scrivi una funzione crei un unico array unendo gli array innestati

let input = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]

let concatena = input.reduce(function (risultato, elemento) {
    risultato = risultato.concat(elemento)
    return risultato
})
console.log(concatena)