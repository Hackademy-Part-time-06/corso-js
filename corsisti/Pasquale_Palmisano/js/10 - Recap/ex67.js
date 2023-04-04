/*Esercizio 67 - DIFFICILE

Amplia il programma scritto nell’esercizio precedente.
Il pareggio non è più ammesso per i nostri giocatori!!!!!
In caso di pareggio continua a farli giocare finchè uno dei 2 non verrà sconfitto!

NB: serve il while!!!!!!*/


function game() {
    let player1 = tiro()
    let player2 = tiro()
    
    console.log(`Il giocatore 1 ha tirato ${player1}`);
    console.log(`Il giocatore 2 ha tirato ${player2}`);

    while (player1 == player2) {
        console.log("PAREGGIO, RITIRATE!");

        player1 = tiro()
        player2 = tiro()

        console.log(`Il giocatore 1 ha tirato ${player1}`);
        console.log(`Il giocatore 2 ha tirato ${player2}`);
    }

    switch(player1) {
        case "Carta":
            switch (player2) {
                case "Sasso":
                    console.log("VINCE IL GIOCATORE 1");
                    break;
                case "Forbice":
                    console.log("VINCE IL GIOCATORE 2");
                    break;
            }
            break
        case "Sasso":
            switch (player2) {
                case "Carta":
                    console.log("VINCE IL GIOCATORE 2");
                    break;
                case "Forbice":
                    console.log("VINCE IL GIOCATORE 1");
                    break;
            }
            break
        case "Forbice":
            switch (player2) {
                case "Carta":
                    console.log("VINCE IL GIOCATORE 1");
                    break;
                case "Sasso":
                    console.log("VINCE IL GIOCATORE 2");
                    break;
            }
            break
    }
}

function tiro() {
    let segno = ["Sasso", "Carta", "Forbice"]
    return segno[Math.floor(Math.random() * (segno.length))]
}