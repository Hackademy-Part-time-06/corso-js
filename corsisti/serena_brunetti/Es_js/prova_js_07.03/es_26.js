/*Il posto di blocco!
Scrivi un programma che simuli un posto di blocco
Chiedi al conducente età, patente ed assicurazione. 
Controlla anche quanti punti ha (fai generare un numero randomico da 0 a 20). 
Se tutti i controlli son rispettati lascialo andare, altrimenti ti tocca fargli la multa (o chiudi un occhio!).
Gestisci più casistiche possibili! */

let età = prompt("Fermo! Lei è in arresto! Quanti anni ha?")
età = Number(età)

if (isNaN(età)) {
    alert("Inserisci un valore corretto")
}

if (età >= 18) {
    let patente = prompt("Hai la patente?")
    if (patente == "si") {
        let puntiPatente = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        if (puntiPatente >= 1) {
            alert("I tuoi punti sono: " + puntiPatente)
            let assicurazione = prompt("Sei assicurato?")
            if (assicurazione == "si") {
                alert("Per questa volta ti risparmio")
            }
            else {
                alert("Ora sei in arresto!")
            }
        }
        else {
            alert("Ora sei in arresto!")
        }
    }
    else {
        alert("Ora sei in arresto!")
    }
}
else {
    alert("Ora sei in arresto!")
}
