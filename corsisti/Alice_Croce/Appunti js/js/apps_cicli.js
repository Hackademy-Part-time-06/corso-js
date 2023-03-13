//APPUNTI SUI CICLI

/*
=> AGLI APICI
   "" oppure '' oppure `` sono uguali: gli apici normali sono per i concetti generici, usi le seconde per differenziare qualcosa dalle prima.
   Il backtick invece ti permette di inserire diverse cose, non solo testi come le prime due tipologie.

=> (`bla bla ${ciccio}`) in questo caso il backtick permette di inserire variabili o altro nella stringa.

=> += corrisponde a: punteggio = punteggio + ciccettemolli, quindi somma se stesso + ciò che devi sommare al primo.

=> FOR //crea un ciclo che inizia e finisce secondo le condizioni all'interno dell'argomento.

=> WHILE // il while va avanti sino a quando non diventa true o false, potenzialmente può andare avanti per moltissimi, infiniti cicli (mentre quelli del for sono finiti).

=> [EX] ESERCIZIO CON IL WHILE

console.group("Esercizio partita a D&D");

let facceDado = 5;
let giocatore1numMigliore = 0;
let giocatore2numMigliore = 0;

let lanciTotali = 5;
let vincitore;

for (let i = 0; i < lanciTotali; i++) {
    let num1 = Math.floor(Math.random() * facceDado) + 1;
    let num2 = Math.floor(Math.random() * facceDado) + 1;
    
    //console.log("lancio", i+1, "risultato giocatore 1: ", num1, ", risultato giocatore 2: ", num2);
    
    console.log(`Lancio ${i + 1} - risultato giocatore 1: ${num1}, risultato giocatore 2: ${num2}`);
    
    if (num1 > giocatore1numMigliore) {
        giocatore1numMigliore = num1;
    }
    
    if (num2 > giocatore2numMigliore) {
        giocatore2numMigliore = num2;
    }
}

console.log(`Risultato migliore giocatore 1: ${giocatore1numMigliore}, risultato migliore giocatore 2: ${giocatore2numMigliore}`);


if (giocatore1numMigliore === giocatore2numMigliore) {
    
    let rilancia = true;
    //Il while si ferma quando è FALSE, CONTINUERà SINO A QUANDO NON SARà FALSE;
    while (rilancia) { //in genere i while vanno all'interno di altre condizione ed anch'essi sono dentro altre condizioni
        console.log('Risultato pari! Si rilancia');
        
        let num1 = Math.floor(Math.random() * facceDado) + 1;
        let num2 = Math.floor(Math.random() * facceDado) + 1;
        
        console.log(`Nuovo lancio - risultato giocatore 1: ${num1}, risultato giocatore 2: ${num2}`);
        
        if (num1 !== num2) { //condizione della parità
            //se il num1 è diverso num2 tu rilancia
            if (num1 > num2) {
                vincitore = 1;
            }
            else {
                vincitore = 2;
            }
            // serve ad interrompere il ciclo: FALSE.
            //alla fine del WHILE devi mettere una condizione che dia SEMPRE FALSE, altrimenti prosegue all'infinito e si impalla.
            rilancia = false;
        }
    }
}
else {
    if (giocatore1numMigliore > giocatore2numMigliore) {
        vincitore = 1;
    }
    else {
        vincitore = 2;
    }
}

console.log("Il vincitore è il giocatore numero:", vincitore);

console.groupEnd();*/