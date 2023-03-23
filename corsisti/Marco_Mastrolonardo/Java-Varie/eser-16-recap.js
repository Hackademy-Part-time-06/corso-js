let sonoVero = true
let sonoFalse = false


let numero = 10
let stessoNumeroMaComeStringa = "10"
//operatore di comparazione debole, compara solo il valore non la tipologia.
let ValoreDelConfronto = numero == stessoNumeroMaComeStringa
console.log(ValoreDelConfronto) //true
//operatore di comparazione stretto === controlla anche il tipo 

//!== negazione nell'operazione di confronto stretta. "Non è vero che". Può essere utilizzato prima di una variabile

console.log(!sonoVero) // false

//condizioni se ho più di 18 anni e (ho la patente o il foglio rosa).
let anni = 18
hoLaPatente = true
hoIlFoglioRosa = false
if (anni >= 18 && (hoLaPatente || hoIlFoglioRosa)){
console.log("posso guidare")
}
//switch si utilizza per valutare casi specifici di una stringa
let giornosettimana = "mercoledi"
switch (giornosettimana){
    case "lunedi":
    case "martedi":
    case "mercoledi":
        var provaVariabileconvar = 123
        let provaVariabile = 123
        console.log("ciao")
    break;
    default:
        console.log("non ciao")
        break;
}
console.log("variabile con var", provaVariabileconvar)
//una variabile dichiarata con var (variabile globale) può essere letta anche fuori dal blocco di codice di switch ed if

//console.log("variabile con let", provaVariabile)

//una variabile dichiarata con let esiste solo all'interno del blocco di codice

//ciclo while() finche la condizione è true procede con l'operazione  in loop
let condizione = true
while(condizione){
    console.log("condizione vera")
    let haiIlBiglietto = prompt("Hai il biglietto")
//fino a quando l'utente "non ha il biglietto" ripete il ciclo. Quando la condizione dell'if passa true (utente digita "si" nel prompt("Hai il biglietto")) viene settata la condizione = false per bloccare il ciclo while().
    if(haiIlBiglietto === "si"){
        condizione = false
    }
}
//con il dowhile() hai un'iterazione garantita prima di verificare la condizione. Viene eseguito il console.log("rip") una volta anche se la condizione è false, ma non lo itera.

let condition = false
do{

} while (condition){
    console.log("rip")
};

function saluta(nome){
    console.log("ciao", nome)
}
saluta("marco")
saluta("gino")
//dare volori di default ad i parametri tramite function saluta(nome="") per non avere l'undefined. Richiamata la funzione saluta("gino") il valore di default verrà sovrescritto da "gino".

//se la funzione deve generare un output da poter utilizzare si utilizza il return.
function somma(numero1, numero2){
    let risultato = 0
    return risultato = numero1 + numero2
}
let totale = somma(12, 15)
console.log(totale)

let playlist = {
    disco: [
        {
            titolo: "titolo1",
            volume: "volume1"
        },
        {
            titolo: "titolo2",
            volume: "volume1"
        },
        {
            titolo: "titolo3",
            volume: "volume2"
        },
    ],
    cercatitolo: function(volume){
        let canzonipervolume = []
        this.disco.forEach(canzone => {
            if(canzone.volume === volume){
                return canzonipervolume.push(canzone)
            }
        })
        return canzonipervolume
    },
    titolomaiuscolo: function(canzonipervolume){
        let titolomaiuscolo
        canzonipervolume.forEach(brano => {
            console.log(titolomaiuscolo = brano.titolo.toUpperCase())
            return titolomaiuscolo
        })
        return this.titolomaiuscolo
    }
}
console.log(playlist.cercatitolo("volume1"))
console.log(titolomaiuscolo())




