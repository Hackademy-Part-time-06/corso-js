/*Esercizio 25
Scrivi un programma che passata una categoria in input (fantasy, fantascienza, animazione, ecc…) ti suggerisca il titolo di un film:
es: categoria: “fantasy” -> film suggerito: “il signore degli anelli”*/

let category = prompt("Inserisci la categoria:")
let titolo

var i = Math.floor(Math.random() * 3)
switch (category) {
    case "fantasy":
        switch(i) {
            case 0:
                titolo = "Il Signore degli Anelli"
                break
            case 1:
                titolo = "Lo Hobbit"
                break
            case 2:
                titolo = "Harry Potter"
                break                
        }
    break

    case "horror":
        switch(i) {
            case 0:
                titolo = "Hostel"
                break
            case 1:
                titolo = "The Ring"
                break
            case 2:
                titolo = "The Conjuring"
                break                
        }
    break

    default:
        titolo = "sbagliato"
        break
}

console.log(`Il titolo è ${titolo}`)