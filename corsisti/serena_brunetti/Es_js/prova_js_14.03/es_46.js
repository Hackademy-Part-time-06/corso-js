//Scrivi una funzione che, data una frase, ritorni la prima lettera di ogni parola presente nella frase

let frase = "Ciao amici come va"
let frasesplittata = frase.split(" ")
console.log(frasesplittata)
let iniziali = frasesplittata.map(function (elemento, parola) {
    elemento = elemento.charAt(0)
    return elemento
})
let iniziali2 = iniziali.join("")
console.log(iniziali2)