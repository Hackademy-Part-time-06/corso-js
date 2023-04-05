/*Esercizio 68 - DIFFICILE

Amplia il programma scritto nell’esercizio precedente.
La partita secca genera troppo astio!
Si è deciso per giocare al meglio delle 3 vittorie!

Quindi il primo che raggiunge le 3 vittore può considerarsi il reale vincitore della partita!!*/


function game() {
    let player1 = new String()
    let player2 = new String()
    let win1 = 0
    let win2 = 0
    
    while (win1 < 3 && win2 < 3){
        player1 = tiro()
        player2 = tiro()

        console.log(`Il giocatore 1 ha tirato ${player1}`);
        console.log(`Il giocatore 2 ha tirato ${player2}\n\n`);
        
        while (player1 == player2) {
            console.log("PAREGGIO, RITIRATE!");
    
            player1 = tiro()
            player2 = tiro()
    
            console.log(`Il giocatore 1 ha tirato ${player1}`);
            console.log(`Il giocatore 2 ha tirato ${player2}\n\n`);
        }
        
        switch(player1) {
            case "Carta":
                switch (player2) {
                    case "Sasso":
                        win1++
                        break;
                    case "Forbice":
                        win2++
                        break;
                }
                break
            case "Sasso":
                switch (player2) {
                    case "Carta":
                        win2++
                        break;
                    case "Forbice":
                        win1++
                        break;
                }
                break
            case "Forbice":
                switch (player2) {
                    case "Carta":
                        win1++
                        break;
                    case "Sasso":
                        win2++
                        break;
                }
                break
        }
    }

    if (win1 == 3) {console.log(`Vince il giocatore 1 per ${win1} a ${win2}`)}
    else {console.log(`Vince il giocatore 2 per ${win2} a ${win1}`)}
}

function tiro() {
    let segno = ["Sasso", "Carta", "Forbice"]
    return segno[Math.floor(Math.random() * (segno.length))]
}