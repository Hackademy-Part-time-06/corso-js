/*
Esercizio 26
Il posto di blocco!
Scrivi un programma che simuli un posto di blocco
Chiedi al conducente età, patente ed assicurazione. 
Controlla anche quanti punti ha (fai generare un numero randomico da 0 a 20). 
Se tutti i controlli son rispettati lascialo andare, altrimenti ti tocca fargli la multa (o chiudi un occhio!).
Gestisci più casistiche possibili!
*/

let age = prompt("ALT!!! Quanti anni hai?")

switch (age) {
    case < 18:
        console.log("Non dovresti guidare! *gli spara*");
        break;
    default:
        let licence = prompt("Hai la patente? (si/no)")
        switch (licence){
            case (licence == "no"):
                console.log("Non hai la pantente! *gli spara*")
                break;
            default:
                let insurance = prompt("Hai l'assicurazione? (si/no)")
                switch (insurance){
                    case (insurance == "no"):
                        console.log("Non sei assicurato! *gli spara*")
                        break;
                    default:
                        let punti_patente = Math.floor(Math.random() * 21)
                        switch (punti_patente) {
                            case (punti_patente == 0):
                                console.log("Non hai abbastanza punti! *gli spara*")
                                break;
                            default:
                                console.log("Sembra tutto in regola *gli spara comunque*")
                        }
                        break ;                       
                }
                break;
        }
        break;
}

