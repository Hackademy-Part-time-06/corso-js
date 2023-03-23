function punteggioCalcio(punteggio) {
    let totPunt = 0
    for (let i = 0; i < punteggio.length; i++) {
        let punteggioSingolo = punteggio[i].split(":")
        let x = Number(punteggioSingolo[0])
        let y = Number(punteggioSingolo[1])
        if (x > y) {
            totPunt = totPunt + 3
        }
        else if (x < y) {
            totPunt = totPunt + 0
        }
        else if (x == y) {
            totPunt = totPunt + 1
        }
    }
    return totPunt
}

let calculatePoints = punteggioCalcio(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])
console.log(`Il punteggio totalizzato è: ${calculatePoints}`)