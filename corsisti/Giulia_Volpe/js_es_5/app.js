//ESERCIZIO 31
/*
function sonoUguali(){
    let arg1= prompt("Inserisci un valore");
    let arg2= prompt("Inserisci un valore");
    let result = "";
    let risultato = Number(result)
    if(arg1 === arg2){      
        console.log(risultato = true)
    }
    else{
        console.log(risultato = false)
    }
    
}
 sonoUguali();
 */
//ESERCIZIO 32
/*
function reverse(){
    let word = prompt("Inserisci una parola");
    let wordSplit = word.split("");
    let wordAr = wordSplit.reverse("");
    let wordJoin = wordAr.join("");
    return wordJoin

}

console.log(reverse())
*/

//ESERCIZIO 33
/*
function randomNumber(){
    let numeroUtente =+ prompt("inserisci un numero massimo")
    
    let numRand = Math.floor(Math.random() * (numeroUtente) +1);
    return numRand
    
}

console.log(randomNumber());
*/

// ESERCIZIO 34
/*
function randomNumber(){
    let tiriDadi = +prompt("Quante volte vuoi tirare i dadi?");
    let player1Total = 0;
    let player2Total = 0;
    for(i = 0; i < tiriDadi; i++){
        
        player1 = Math.floor(Math.random() * 6) + 1;
        
        player2 = Math.floor(Math.random() * 6) + 1;
    
        player1 = player1+player1Total;
        console.log("totale player 1: " + player1)
        player2 = player2+player2Total;
        console.log("totale player 2: " + player2)

    
            if(player1 > player2){
                console.log("Ha vinto il Giocatore 1")
            }
            else if(player == player2){
                console.log("E' patta, ricarica la pagina per giocare di nuovo")
            }
            else{
                console.log("Ha vinto il Giocatore 2")
            }
    }

}
console.log(randomNumber())
*/

//ESERCIZIO 35
/*
function fantaMerda(){
    let baseVoto = 0;
    let golFatti =+ prompt("Quanti gol ha fatto?");
    let assistEffettuati =+ prompt("Quanti assist ha effetuato?");
    let autogol =+ prompt("Quanti autogol?");
    let ammonizione =+ prompt("Quante ammonizioni?");
    let espulsione =+ prompt("Quante espulsioni?");

    golFatti = (golFatti*3);
    assistEffettuati = (assistEffettuati*1);
    autogol = (autogol*2);
    ammonizione = (ammonizione*1);
    espulsione = (espulsione*2);
    let totale = baseVoto+golFatti+assistEffettuati-(ammonizione+espulsione+autogol)
    return totale
}

console.log(fantaMerda());
*/