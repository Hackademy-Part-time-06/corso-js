
//Funzioni: Sono funzionalità che permettono di incapsulare un'azione e richiamarla in un secondo momento(quando ci è più comodo).

//Dichiaro la funzione
function /*nome funzione*/saluta(){
    console.log("ciao")
}
//La richiamo per eseguirla, e posso richiamarla più volte per far eseguire il codice al suo interno (in questo caso console.log(ciao)). Per eseguire una funzione dobbiamo passare le (). 
saluta();

//Se passo saluta senza (), mostrerà la funzionenella console.
console.log(saluta)

//Ex.1
console.log("Ex.1")
function salutagino(){
    let nome1 = "gino"
    console.log("ciao", nome1)
}
salutagino()

//Ex.2
console.log("Ex.2")
function saluta1(nome2) {
    console.log("Ciao", nome2)
}
saluta1("Gino")

saluta1("Pino")

//Ex.3
console.log("Ex.3")
function saluta2(nome, cognome){
    console.log(`Ciao ${nome} ${cognome}`)
}
saluta2("Marco", "Mastrolonardo")
saluta2("Tizio", "Coglione")

//Ex.4 somma
function somma(n1=0, n2=0){
    let risultato = n1 + n2
    
    return risultato //per tirare fuori un output, ritornare un valore
}
//Raccolgo il valore ,ritornato tramite il return, 
let risultatoSomma = somma(10, 10)
console.log("Il risultato è:", risultatoSomma)

let secondoRisultato = somma(20, 100)
console.log("Il secondo risultato è:", secondoRisultato)

/*Ex.5 Capitalize viene utilizzato per rendere la lettere maiuscola.
function capitalize(stringa) {
    if  (typeof stringa === "stringa"){ //controllo sul tipo "se stringa sia una stringa"
        let primoCarattere = stringa.charAt(0) //Prendo il primo carattere
        primoCarattere = primoCarattere.toUppercase() //Lo rendo maiscolo
        stringa = primoCarattere + stringa.slice(1) //
    }
    else {
        alert("Hai inserito un valore non concesso")
    }
   return stringa
}

function saluta3(nome="", cognome="", paese="") {
    nome = capitalize(nome)
    cognome = capitalize(cognome)
    paese = capitalize(paese)
    console.log(`Ciao ${nome} ${cognome} !`)
}
*/
console.log("-------------------------")

/*Per rendere maiuscola la prima lettera di una stringa
let stringa = "ciao"
console.log(stringa)

let stringa2 = stringa.charAt(0).toUpperCase() + stringa.slice(1)
console.log(stringa2)

Per farlo con una funzione
function capitalize(stringadamodificare) {
    let risultato = stringadamodificare.charAt(0).toUpperCase()+stringadamodificare.slice(1)
    return risultato
}
let stringa3 = capitalize("ciao")
console.log(stringa3)

function saluta4(nome, cognome){
    nome = capitalize(nome)
    cognome = capitalize(cognome)
    console.log(`ciao ${nome} ${cognome}`)
}
saluta4("marco", "mastrolonardo")
saluta4("gino", "retto")
*/

//Utilizzare una funzione per alternare 

function tuttoMaiuscolo(stringadamodificare){
    let risultato = stringadamodificare.toUpperCase()
    return risultato
}
function salutoEvoluto(nome, callbackPerFormattare) {

    if (typeof callbackPerFormattare === "function"){
        nome = callbackPerFormattare(nome);
    }

    console.log("ciao", nome)
}
salutoEvoluto("Gino", tuttoMaiuscolo)

salutoEvoluto("dino")

//Ex.7 Posso accedere alla variabili solo risalendo. Dall'interno accedo all'esterno ma non viceversa.
var variabileGlobale = "aaa"
let variabileEsterna = "ABC"

function sonoUnaFunzione() {
    let variabileInterna = 123

    function funzioneInterna() {
        let variabileAncoraPiuInterna = "Ciccio"

        console.log(variabileInterna, variabileEsterna, variabileAncoraPiuInterna)
    }

    funzioneInterna()

    //Errore: console.log(variabileEsterna, variabileInterna, variabileAncoraPiuInterna)
}


//Errore: console.log(variabileEsterna, variabileInterna, variabileAncoraPiuInterna)


(function() {
    let messaggio = "Ciao sono una iife e non mi puoi vedere esternamente!"
    console.log(messaggio)
})()


let saluto = (parametro1="default") => {
    console.log("Ciao sono il log di una arrow function, parametro1 = ", parametro1)

    console.log(messaggio)
}
saluto(123)