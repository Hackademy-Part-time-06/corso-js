"use strict"
//ESERCIZIO 60
/*
function scontrino(quantità, costoSingolo){
    let totaleScontrino = quantità*costoSingolo;
    return totaleScontrino
};
console.log("Il totale per i biglietti è: ", scontrino(3,8));

//ESERCIZIO 61
function sconto(quantità, costoSingolo, sconto="0"){
    if(sconto > 0){
        let prezzodaScontare = (quantità*costoSingolo)/100*(sconto);
        let prezzoScontato = (quantità*costoSingolo) - prezzodaScontare;
        return prezzoScontato
    }
    else{
       let prezzoPieno = quantità*costoSingolo
       return prezzoPieno
    }
    
};
console.log(sconto(3,8, 10));
*/
//ESERCIZIO 62
/*
function sconto(quantità, costoSingolo, giornoSettimana){
        switch(giornoSettimana){
            case "lunedì":
            case "martedì":
                let prezzodaScontare10 = (quantità*costoSingolo)/100*(10);
                let prezzoScontato10 = (quantità*costoSingolo) - prezzodaScontare10;
                console.log(prezzoScontato10)
                break
            case "mercoledì":
                let prezzodaScontare20 = (quantità*costoSingolo)/100*(20);
                let prezzoScontato20 = (quantità*costoSingolo) - prezzodaScontare20;
                console.log(prezzoScontato20)
                break
            default : let prezzoPieno = quantità*costoSingolo
                console.log(prezzoPieno)
        }   
        
};
console.log(sconto(3,8, "martedì"));
*/
//ESERCIZIO 63
/*
function scontiPazzi(quantità, costoSingolo){
    if(quantità > 5){
        let prezzodaScontare = (quantità*costoSingolo)/100*(20);
        let prezzoScontato = (quantità*costoSingolo) - prezzodaScontare;
        return prezzoScontato
    }
    else{
        return quantità*costoSingolo
    }
}
function scontrino(quantità, costoSingolo, sconto){
    let totaleScontrino = quantità*costoSingolo;
    let totSconto = sconto(quantità, costoSingolo)
    return totSconto
};


console.log(scontrino(8, 10, scontiPazzi))
*/
//ESERCIZIO 64

//ESERCIZIO 65
/*
function libreria(autore, titolo){
    let urlBase = "www.lamiasuperlibreria.aulab/";
    let noSpazi = (autore+titolo).replaceAll(" ", "-") 
    console.log(noSpazi)
    let tuttoMin = noSpazi.toLowerCase()
    console.log(tuttoMin)
    let urlFinito = "<a href=\"" + urlBase + tuttoMin + "\"> Il Signore degli Anelli" + "/a>"
    return urlFinito
}

console.log(libreria("Tolkien/","Il Signore degli Anelli.html"));
*/
//ESERCIZIO 66
/*
function generaSegno(){
    let segni = ["sasso", "carta", "forbice"];
    let randomici = Math.floor(Math.random()* segni.length);
    return segni[randomici]
}
function giochiamo(){
    let player1 = generaSegno()
    let player2 = generaSegno()
    if (player1 == "sasso" && player2 == "forbice" || player1 == "forbice" && player2 == "carta" || player1 == "carta" && player2 == "sasso"){
        console.log("Vince il giocatore numero 1!")
    }
    else if(player1 == "forbice" && player2 == "sasso" || player1 == "carta" && player2 == "forbice" || player1 == "sasso" && player2 == "carta"){
        console.log("Vince il giocatore numero 2!")
    }
    else{
        console.log("Avete pareggiato!")
    }
}
console.log(giochiamo());
*/
//ESERCIZIO 67
/*
function generaSegno(){
    let segni = ["sasso", "carta", "forbice"];
    let randomici = Math.floor(Math.random()* segni.length);
    return segni[randomici]
}
function giochiamo(){
    let player1 = generaSegno()
    console.log("Il giocatore 1 ha tirato: ", player1)
    let player2 = generaSegno()
    console.log("Il giocatore 2 ha tirato: ", player2)
    while(player1 === player2){
        console.log("Avete pareggiato, rigiocate")
        player1 = generaSegno()
        console.log("Il giocatore 1 ha tirato: ", player1)
        player2 = generaSegno()
        console.log("Il giocatore 2 ha tirato: ", player2)
    }
    if (player1 == "sasso" && player2 == "forbice" || player1 == "forbice" && player2 == "carta" || player1 == "carta" && player2 == "sasso"){
        console.log("Vince il giocatore numero 1!")
    }
    else if(player1 == "forbice" && player2 == "sasso" || player1 == "carta" && player2 == "forbice" || player1 == "sasso" && player2 == "carta"){
        console.log("Vince il giocatore numero 2!")
    }
}
console.log(giochiamo());
*/
/*
//ESERCIZIO 68
function generaSegno(){
    let segni = ["sasso", "carta", "forbice"];
    let randomici = Math.floor(Math.random()* segni.length);
    return segni[randomici]
}
function giochiamo(){
    let punteggio1 = 0
    let punteggio2 = 0
    let player1
    let player2
    for(let i = 0; i < 3; i++){
        player1 = generaSegno()
        console.log("Il giocatore 1 ha tirato: ", player1)
        player2 = generaSegno()
        console.log("Il giocatore 2 ha tirato: ", player2)
        while(player1 === player2){
            console.log("Avete pareggiato, rigiocate")
            player1 = generaSegno()
            console.log("Il giocatore 1 ha tirato: ", player1)
            player2 = generaSegno()
            console.log("Il giocatore 2 ha tirato: ", player2)
        }
        if (player1 == "sasso" && player2 == "forbice" || player1 == "forbice" && player2 == "carta" || player1 == "carta" && player2 == "sasso"){
            punteggio1 += 1
        }
        else if(player1 == "forbice" && player2 == "sasso" || player1 == "carta" && player2 == "forbice" || player1 == "sasso" && player2 == "carta"){
            punteggio2 += 1
        }
    }
    if(player1<player2){
        console.log("Ha vinto il giocatore 1 con :", punteggio1, "punti")
    }
    else{
        console.log("Ha vinto il giocatore 2 con :", punteggio2, "punti")
    }
}

console.log(giochiamo());
*/