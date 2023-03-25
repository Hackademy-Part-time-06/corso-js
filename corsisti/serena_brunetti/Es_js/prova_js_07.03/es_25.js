//Scrivi un programma che passata una categoria in input (fantasy, fantascienza, animazione, ecc…) ti suggerisca il titolo di un film: es: categoria: “fantasy” -> film suggerito: “il signore degli anelli”

let genereFilm = prompt("Inserisci il tuo genere di film preferito e ti suggerirò un titolo");
if (genereFilm == "fantasy") {
    alert("Ti suggerisco: \"Harry Potter\"")
}
else if (genereFilm == "animazione") {
    alert("Ti suggerisco: \"La città incantata\"")
}
else if (genereFilm == "fantascienza") {
    alert("Ti suggerisco: \"La città incantata\"")
}
else if (genereFilm == "romantico") {
    alert("Ti suggerisco: \"7 volte in bianco\"")
}
else { 
    alert("E mica te li potevo mettere tutti, cercateli da solo brò!")
}