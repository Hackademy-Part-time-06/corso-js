let player_name = prompt("Di chi vuoi creare la pagella del fantacalcio?")
let base_vote = prompt("Voto base:")
let gol = prompt("Gol fatti:")
let assist = prompt("Assist effettuati:")
let autogol = prompt("Autogol fatti:")
let yellow_card = prompt("Ammonizioni:")
let red_card = prompt("Espulsioni:")

console.log(`Il voto di ${player_name} è ${pagella(base_vote, gol, assist, autogol, yellow_card, red_card)}`);

function pagella(p1, p2, p3, p4, p5, p6) {
    //VOTO BASE
    let voto = Number(p1);
    //GOL
    for (i = 0; i < p2; i++) {voto = voto + 3}
    //ASSIST
    for (i = 0; i < p3; i++) {voto = voto + 1}
    //AUTOGOL
    for (i = 0; i < p4; i++) {voto = voto - 2}
    //AMMONIZIONE
    for (i = 0; i < p5; i++) {voto = voto - 1}
    //ESPULSIONE
    for (i = 0; i < p6; i++) {voto = voto - 2}

    return voto
}


