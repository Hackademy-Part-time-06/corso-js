// ESERCIZIO 32
// Scrivi una funzione che prenda in input una stringa e la restituisca capovolta

function StringaNormale(frase)  {
                                    frase = "Ciao, mi chiamo Davide";
                                    //fraseSplittata = frase.split("");
                                    //frase = fraseSplittata;
                                    fraseInvertita = frase.reverse();
                                    frase = fraseInvertita;
                                    //fraseUnita = frase.join("");
                                    // frase = fraseUnita;
                                    return frase;
}

// ESERCIZIO 33
// Scrivi una funzione che si occupi di generare un numero randomico da 1 a N e lo restituisca

function numeroRandomico(numero)    {
                                        
                                        numero = Math.floor(Math.random() * (25 - 20 + 1) + 20);
                                        return numero;

}

//ESERCIZIO 34
//Simula una partita a dadi:
//Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) un numero di volte che verrà definito tramite parametro passato in input.
//Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto).

/*
dado1 = prompt("Lancia 'sto cazzo di dado!");
dado2 = prompt("Lancia 'sto cazzo di dado!");
dado3 = prompt("Lancia 'sto cazzo di dado!");
*/


function dadiLanciati(dado1, dado2, dado3)  {
                                                
                                                dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                                                console.log(dado1);
                                                dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                                                console.log(dado2);
                                                dado3 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                                                console.log(dado3);
                                                numeroMaggiore = Math.max(dado1, dado2, dado3);
                                                return numeroMaggiore;
                                            }
let dadiLanciati;
/*
let nPartite = Number(prompt("quante partite vuoi fare?"))

for (let i=0; i < nPartite; i++) {

function numeroRandomico() {

    numeroRandom1 = Math.floor(Math.random() * (6 + 1) + 1);

    numeroRandom2 = Math.floor(Math.random() * (6 + 1) + 1);
 
    return numeroRandom1, numeroRandom2
 }

 numeroRandomico()

 console.log(al primo giocatore è uscito ${numeroRandom1} al secondo ${numeroRandom2})


 if (numeroRandom1 < numeroRandom2) {
    console.log(questa partita l'ha vinta giocatore 2!)
 }
else if (numeroRandom1 > numeroRandom2)
    console.log(questa partita l'ha vinta giocatore 1)
 
else (console.log("questa partita è patta!"))

}
*/