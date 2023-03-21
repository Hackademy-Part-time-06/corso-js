
/*esercizio31

function argomenti (n, m){
    if (n === m){
        let risultato = true;
        return risultato
    }
  
    else {
        let risultato = false
        return risultato
    }

}

argomenti(2,2) //numeri uguali
argomenti(2,5) //numeri diversi
argomenti(2, '2') //numero reale e numero stringa

*/



/*esercizio32

function capovolgimento (stringa) {
    let frase = stringa.split(" ")
    frase = frase.reverse()
    frase = frase.join("")
    return frase
}

capovolgimento("Antonio Quartetto")
*/



/*esercizio33*/



function random (numeroMax){
    let numeroRandomico = Math.floor(Math.random() * (numeroMax - 1 + 1) + 1);
    return numeroRandomico
}

console.log(random(100))



/*esercizio34*/

function lancioDadi (numeroLanci){
    let totUtente1 = 0
    let totUtente2 = 0

   for (let i = 0; i < numeroLanci; i++){
    let punteggioDadoUtente1 = random(6);
    totUtente1 = totUtente1 + punteggioDadoUtente1;
    let punteggioDadoUtente2 = random(6);
    totUtente2 = totUtente2 + punteggioDadoUtente2;
   }

   if (totUtente1 > totUtente2){
        console.log("Ha vinto l'utente 1") //o l'alert

   }
   else if (totUtente1 < totUtente2){
    console.log ("Ha vinto l'utente 2") //o l'alert
   }
   else {
    console.log("Pareggio") //o l'alert
   }
   
}

lancioDadi(10)





/*esercizio35*/



function votoFantacalcio (baseVoto=0, golFatti=0, assistEffettuati=0, autogol=0, ammonizione=0, espulsione=0){

    return baseVoto + (golFatti *3) + assistEffettuati + (autogol * -2) + (ammonizione * -1) + (espulsione * - 2)

}

  
console.log(votoFantacalcio(7, 1, 2, 1, 0, 1))


/*  let baseVoto = 7;
    let punteggioGol = 3;
    let punteggioAssist = 1;
    let punteggioAutogol = -2;
    let punteggioAmmonizione = -1;
    let punteggioEspulsione = -2;
    let votoFinale = 0; */




    /*esercizio36 

    function myLog (categoria, messaggio){
        switch(categoria){
            case "titolo":
                console.log('%c' + messaggio, 'background-color: blue; font-size: 30px; color: white')
                break;
            case "sottotitolo":
                console.log('%c' + messaggio, 'font-size: 20px; color: blue;')
                break;
            case "highlight":
                console.log('%c' + messaggio, 'background-color: orange;')
                break;
            case "disastro":
                console.log('%c' + messaggio, 'background-color: red; font-size: 50px; color: white')
                break;
        }

    }
    */


    