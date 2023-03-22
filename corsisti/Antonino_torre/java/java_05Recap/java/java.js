// Esercizio 60
/*
function totaleDaPagare(numeroBiglietti,costoBiglietto){
    totale = numeroBiglietti * costoBiglietto
    console.log(totale + " Euro")
}
totaleDaPagare(4,7)
*/
// esercizio 61
/*
function totaleDaPagare(numeroBiglietti,costoBiglietto,scontoPercentuale){
    totale = numeroBiglietti * costoBiglietto
    console.log(totale + " Euro")
    sconto = (totale*scontoPercentuale)/100
    let totaleScontato = totale - sconto
    console.log(totaleScontato.toFixed(2) + " Euro")
}
totaleDaPagare(4,10,83)
*/
//esercizio 62
/*
function totaleDaPagare(numeroBiglietti,costoBiglietto,giornoDellaSettima){
    totale = numeroBiglietti * costoBiglietto
    switch (giornoDellaSettima.toLowerCase()){
        case "lunedi":
            console.log("Oggi hai diritto al 100% di sconto, il cinema è chiuso!")
            scontoPercentuale= 100
            break;
        case "martedi":
            console.log("Oggi hai diritto al 20% di sconto, buon divertimento!")
            scontoPercentuale=20
            break;
        case "mercoledi":
            console.log("oggi hai diritto al 10% di sconto, buona serata!")
            scontoPercentuale=10
            break;
        case "giovedi":
        case "venerdi":
        case "sabato":
        case "domenica":
            console.log("Nessuno sconto per te oggi, ciao bello!")
            scontoPercentuale=0
            break;
    }
    sconto = (totale*scontoPercentuale)/100
    console.log(sconto)
    totaleScontato = totale - sconto
    console.log(totaleScontato + " Euro")
}
totaleDaPagare(4,10,"giovedi")
*/
//esercizio 63 - 64
/*
function scontoBiglietto(ciaobello){
    let nuovoSconto = 0
    if (ciaobello>=3 && ciaobello<5){
        nuovoSconto= 5
    }
    else if (ciaobello>=5){
        nuovoSconto= 10
    }
    return nuovoSconto
}
function totaleDaPagare(numeroBiglietti,costoBiglietto,scontoPercentuale){
    let nuovoSconto=scontoBiglietto(numeroBiglietti)
    totale = numeroBiglietti * costoBiglietto
    sconto = (totale*(scontoPercentuale+nuovoSconto))/100
    totaleScontato = totale - sconto
    console.log(totaleScontato + " Euro")
    console.log(`Buonasera e benvenuto al Cinema Luce \nHa acquistato ${numeroBiglietti} biglietti.\nIl prezzo per singolo biglietto è di ${costoBiglietto} Euro,\nle è stato fatto uno sconto del ${scontoPercentuale}%,\ned un ulteriote sconto del ${nuovoSconto}%.\nBUONA VISIONE!`)
}
totaleDaPagare(10,10,10)
*/
//esercizio 65
/*
function link(titolo,autore){
    titoloPerLink=titolo.toLowerCase().replaceAll(" ", "-")
    autorePerLink=autore.toLowerCase().replaceAll(" ", "-")
    linkCompleto= `www.lamiasuperlibreria.aulab/${autorePerLink}/${titoloPerLink}.html`
    console.log(`<a href=${linkCompleto}>${titolo}</a>`)
}
link("Il Signore degli Anelli","Tolkien")
*/
//esercizio 66
/*
function segnoRandom(){
    let segni = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * segni.length)
    return segni[random]
}
function regole (){
    primo= segnoRandom()
    secondo= segnoRandom()
    if (primo=="sasso" && secondo=="forbice" || primo=="forbice" && secondo=="carta" || primo=="carta" && secondo=="sasso"){
        console.log("vince il primo")
    }
    else if(primo=="forbice" && secondo=="sasso" || primo=="carta" && secondo=="forbice" || primo=="sasso" && secondo=="carta"){
        console.log("vince il secondo")
    }
    else {
        console.log("pareggio")
    }
}

regole()
*/
//esercizio 67
/*
function segnoRandom(){
    let segni = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * segni.length)
    return segni[random]
}
function partita (){
    primo = segnoRandom()
    secondo = segnoRandom ()
    while(primo===secondo){
        console.log("pareggio,rigioca")
        primo = segnoRandom()
        secondo = segnoRandom ()
    }
    if (primo=="sasso" && secondo=="forbice" || primo=="forbice" && secondo=="carta" || primo=="carta" && secondo=="sasso"){
        console.log("vince il primo")
    }
    else if(primo=="forbice" && secondo=="sasso" || primo=="carta" && secondo=="forbice" || primo=="sasso" && secondo=="carta"){
        console.log("vince il secondo")
    }
}
partita()
*/
//esercizio 68
/*
function segnoRandom(){
    let segni = ["sasso","carta","forbice"];
    let random= Math.floor(Math.random() * segni.length)
    return segni[random]
}
function partita (){
    player1 = 0
    player2 = 0
    while(player1<3 && player2<3){
        primo = segnoRandom()
        secondo = segnoRandom ()
        while(primo===secondo){
            console.log("pareggio,rigioca")
            primo = segnoRandom()
            secondo = segnoRandom ()
        }
        console.log("Il primo giocatore ha tirato " + primo)
        console.log("Il secondo giocatore ha tirato " + secondo)
        if (primo=="sasso" && secondo=="forbice" || primo=="forbice" && secondo=="carta" || primo=="carta" && secondo=="sasso"){
            player1 +=1
            console.log("il GIOCATORE UNO vince ha " + player1 + " punti")
        }
        else if(primo=="forbice" && secondo=="sasso" || primo=="carta" && secondo=="forbice" || primo=="sasso" && secondo=="carta"){
            player2 +=1
            console.log("il GIOCATORE 2 vince ed ha " + player2 + " punti")
        }
    }
    if (player1>player2){
        console.log(`Complimenti GIOCATORE 1, HAI VINTO, il tuo punteggio è ${player1},il giocatore 2 ha fatto invece ${player2}`)
    }
    else if(player1<player2){
        console.log(`Complimenti GIOCATORE 2, HAI VINTO, il tuo punteggio è ${player2},il giocatore 1 ha fatto invece ${player1}`)
    }
}
partita ()
*/