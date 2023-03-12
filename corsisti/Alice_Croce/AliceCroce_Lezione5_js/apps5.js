// Esercizio 31
/*function comparatore(n = 0, m = 0) {
    if (n === m) {
        return true;
    }
    else {
        return false;
    }
}

console.log (comparatore(2,3));
console.log (comparatore(2,"2"));
console.log (comparatore(2,2));*/

// Esercizio 32

function reverseString(stringa) { // PARAMETRO NOMINALE
   let nuovaStringa ="";
   
   for (var i = stringa.length - 1; i >= 0; i--) {
       nuovaStringa += stringa.charAt(i);
   }
   return nuovaStringa;
}

console.log (reverseString ("33 trentini entrarono a Trento")); //PARAMETRO FORMALE  

// Esercizio 33

/*function numeroRandomico(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(numeroRandomico(1, 99));*/

//Esercizio 34

/*function lancioDadi(numeroLancioDadi=0) {
    // dichiaro il n di lanci e la variabile di partenza per valutare il tiro dal valore piu alto per i singoli giocatori

    let punteggioPiuAltoGiocatore1 = 0
    let punteggioPiuAltoGiocatore2 = 0
    
    //lanciamo i dadi
    for (let i = 0; i < numeroLancioDadi; i++) {
        let valoreDado1 = numeroRandomico(1,6)
        let valoreDado2 = numeroRandomico(1,6)
        //valori dei dadi lanciati
        console.log("dado 1 " + valoreDado1)
        console.log("dado 2 " + valoreDado2)
        //procedura per sovrascrivere il valore piu alto su quelli piu bassi
        if (punteggioPiuAltoGiocatore1 < valoreDado1) {
            punteggioPiuAltoGiocatore1 = valoreDado1
        }
        if (punteggioPiuAltoGiocatore2 < valoreDado2) {
            punteggioPiuAltoGiocatore2 = valoreDado2
        }
    }
    //dichiarazione del vincitore
    if (punteggioPiuAltoGiocatore1 > punteggioPiuAltoGiocatore2) {
        return alert("Giocatore 1 VINCE!")
    
    }
    else if (punteggioPiuAltoGiocatore1 < punteggioPiuAltoGiocatore2){
        return alert("Giocatore 2 VINCE!")
    }
    //situazione di pareggio
        else {
            //devo creare una situazione di pareggio "vera"
            let pareggio = true
            console.log(pareggio)
            //procedura di risoluzione del pareggio
            while (pareggio) {
                //lanciamo i dadi
                let valoreDado1 = numeroRandomico(1,6)
                let valoreDado2 = numeroRandomico(1,6)
                //valori dei dadi lanciati
                console.log("dado 1 " + valoreDado1)
                console.log("dado 2 " + valoreDado2)
                //dichiarazione del vincitore(in questo caso non si usano piu il punteggiogiocatore ma si usa il valore dado)
                if (valoreDado1 > valoreDado2) {
                    pareggio = false
                    return alert("Giocatore 1 VINCE!")
                }
                else if (valoreDado1 < valoreDado2){
                    pareggio = false
                    return alert("Giocatore 2 VINCE!")
                }
            }
        }
    }
    lancioDadi(2)*/


//Esercizio 35

function calcoloFanta (baseVoto = 0, golFatti = 0, assistEffettuati = 0, autogol = 0, ammonizioni = 0, espulsione = 0) {
    golFatti = golFatti * 3;
    autogol = -autogol * 2;
    ammonizioni = -ammonizioni;
    espulsione = -espulsione * 2;

    let votoFanta = baseVoto + golFatti + autogol + assistEffettuati + ammonizioni + espulsione;

    return votoFanta
}

console.log (calcoloFanta(6, 4, 1, 0, 2, 1)) //valori arbitrari

// Esercizio 36

function myLog(type="", message="") {

    switch (type) {
      case "titolo":
        console.log('%c' + message, 'background-color: blue;  font-size: 30px; color: white;');
        break;
      case "sottotitolo":
        console.log('%c' + message, 'font-size: 20px; color: blue;');
        break;
      case "highlight":
        console.log('%c' + message, 'background-color: orange;');
        break;
      case "disastro":
        console.log('%c' + message, 'background-color: red;  font-size: 50px; color: white;');
        break;
    }
}

myLog("disastro", "AIUTO SI è ROTTO TUTTO")

myLog("titolo", "Cicciopasticcio")

