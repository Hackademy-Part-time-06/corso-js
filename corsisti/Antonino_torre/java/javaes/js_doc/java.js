// esercizio 17
/*
console.log ("ciao mondo")

let voto=27
let valutazione


if (voto <18) {
    valutazione= "Insufficiente"
}
else if (voto >=18 && voto <21) {
    valutazione= "Sufficiente"
}
else if (voto >=21 && voto <24) {
    valutazione= "Buono"
}
else if (voto >=24 && voto <27) {
    valutazione= "Distinto"
}
else if (voto >=27 && voto <30) {
    valutazione= "Ottimo"
}
else if (voto = 30) {
    valutazione= "Eccellente"
}

console.log (valutazione)
*/

//esercizio 18
/*
x=2
x= +x
for ( let i=0; i<11; i++){
    console.log (x*i)
}
*/
//esercizio 19
/*
let passwordEsercizio=prompt ("metti password")

if (passwordEsercizio.length<6 || passwordEsercizio.length>20){
    console.log("La password non ha i giusti caratteri")
    alert ("La password deve contenere tra 6 e 20 caratteri")
}
else if (!passwordEsercizio.includes(`!`,`_`,`-`)){
    console.log("la password non ha i caratteri speciali")
    alert ("la password deve contenere un simbolo speciale tra : ! - _")
}
else if (!/[0-9]/.test(passwordEsercizio)){
    console.log("la password non contiene numeri")
    alert ("la password deve contenere almeno un numero")
}
else (console.log ("Password corretta"))
*/
//esercizio 20 
/*
let phoneNumber
let numeroDiTelefonoValido=false
let numeriValidi= "1234567890 +"
while (!numeroDiTelefonoValido){
    phoneNumber=prompt("Inserisci un numero di telefono")
    caratteriNonConsentiti = false
    for(i=0;i<phoneNumber.length;i++){
        let carattereSingolo= (phoneNumber.charAt(i))
        if (!numeriValidi.includes(carattereSingolo)){
            caratteriNonConsentiti=true
        }
    }
    if (caratteriNonConsentiti){
        numeroDiTelefonoValido=false
        alert("Hai inserito dei caratteri errati, riprova")
    }
    else{
        numeroDiTelefonoValido=true
        alert("numero corretto")
        console.log("numero corretto")
    }
}

let censura = ""
let lastThreeNumber= phoneNumber.slice(-3)
let Numbercensurati= phoneNumber.length -3
for (let i=0; i < Numbercensurati; i++){
    if(Numbercensurati=== " "){
        censura += " "
    }
    
    else {
        censura += "*"
    }
}
console.log (`Il numero di telefono è ${censura}${lastThreeNumber}`)

*/
//esercizio 21 

// let numeroDiTiri=prompt ("numero di tiri")
// let punteggioG =0
// let punteggioN =0
// for (let i=0; i<numeroDiTiri;i++){
//     giocatore1 = Math.floor(Math.random()*(6-1+1)+1);
//     punteggioG += giocatore1;
//     console.log (punteggioG)
//     giocatore2 = Math.floor(Math.random()*(6-1+1)+1);
//     punteggioN += giocatore2;
//     console.log (punteggioN)
// }
// alert(`Giovanni ha totalizzato ${punteggioG} punti`)
// alert(`Paolo ha totalizzato ${punteggioN} punti`)

// if (punteggioG>punteggioN){
//     alert (`Giovanni ha totalizzato ${punteggioG} punti. \nPaolo ha totalizzato ${punteggioN} punti.\nVince la partita Giovanni.`)
// }
// else if (punteggioG<punteggioN) {
//     alert (`Giovanni ha totalizzato ${punteggioG} punti. \nPaolo ha totalizzato ${punteggioN} punti.\nVince la partita Paolo.`)
// }
// else (alert ("Avete pareggiato. \n SFIGATI, AVETE PERSO ENTRAMBI"))

//esercizio 22
/*
let numeroDiTiri
let punteggioG =0
let punteggioN =0
let punteggioGiovanni=0
let punteggioPaolo=0
while (punteggioG===punteggioN){
    numeroDiTiri=prompt ("Numero di tiri")
    for (let i=0; i<numeroDiTiri;i++){  
        giocatore1 = Math.floor(Math.random()*(20-1+1)+1);
        punteggioG = giocatore1;
        giocatore2 = Math.floor(Math.random()*(20-1+1)+1);
        punteggioN = giocatore2;
        punteggioGiovanni += punteggioG
        punteggioPaolo += punteggioN
        if (punteggioG>punteggioN){
            alert (`Giovanni ha fatto ${punteggioG} punti.`)
        }
        else if (punteggioG<punteggioN) {
            alert (`Paolo ha fatto ${punteggioN} punti.`)
        }}
        
        if (punteggioGiovanni>punteggioPaolo){
            alert (`Vince Giovanni con ${punteggioGiovanni} punti.`)
        }
        else if (punteggioGiovanni<punteggioPaolo){
            alert (`Vince Paolo con ${punteggioPaolo} punti.`)
        }
    }
  */  
    // esercizio 23
    /*
    let numeroScelto= prompt("inserisci il tuo numero")
    numeroPari= "02468"
    numeroDispari= "13579"
    ultimaCifra= numeroScelto.charAt(numeroScelto.length-1)
    if(numeroPari.includes(ultimaCifra)){
        console.log("Il tuo numero è pari")
    }
    else if (numeroDispari.includes(ultimaCifra)){
        console.log("Il tuo numero è dispari")
    }
    */
    
    // esercizio 24
    /*
    mese=prompt("Inserisci il mese")
    meseMinuscolo= mese.toLowerCase()
    switch (meseMinuscolo){
        case "gennaio":
        console.log ("Ha 31 giorni.")
        break;
        case "febbraio":
        console.log ("Ha 28 giorni.")
        break;
        case "marzo":
        console.log ("Ha 31 giorni.")
        break;
        case "aprile":
        console.log ("Ha 30 giorni.")
        break;
        case "maggio":
        console.log ("Ha 31 giorni.")
        break;
        case "giugno":
        console.log ("Ha 30 giorni.")
        break;
        case "luglio":
        console.log ("Ha 31 giorni.")
        break;
        case "agosto":
        console.log ("Ha 31 giorni.")
        break;
        case "settembre":
        console.log ("Ha 30 giorni.")
        break;
        case "ottobre":
        console.log ("Ha 31 giorni.")
        break;
        case "novembre":
        console.log ("Ha 30 giorni.")
        break;
        case "dicembre":
        console.log ("Ha 31 giorni.")
        break;
        default:
        console.log("Il mese non è scritto correttamente")
        break;
    }
    */
    //esercizio 25
    /*
    film=prompt("Inserisci la tipologia di film preferito")
    filmMinuscolo= film.toLowerCase()
    switch(filmMinuscolo){
    case("fantasy"):
    console.log ("Film consigliato:Shrek")
    break;
    case("horror"):
    console.log ("Film consigliato:Non aprite quella porta")
    break;
    case("fantascieza"):
    console.log ("Film consigliato:Interstellar")
    break;
    case("comico"):
    console.log ("Film consigliato:Cado dalle nubi")
    break;
    }
    */
    //esercizio 26
/*
    let age=+prompt("Inserisci la tua età")
    let patente
    let assicurazione
    let puntiPatente= Math.floor(Math.random()*(20 - 1 - 1)+1)
    if(age>=18&&age<95){
        console.log("Patente Ok")
        patente=prompt("Hai la patente?")
       if(patente==="si"){
        console.log("Patente Ok")
        assicurazione=prompt("L'assicurazione è in regola?")
        if(assicurazione=="si"){
            console.log("Assicurazione in regola")
            if(puntiPatente > 1){
                console.log(puntiPatente)
                console.log("Perfetto, arrivederci.")
            }
            else{alert("Male!Molto Male!")}
        }
        else{
            alert("Senza assicurazione? Male!")
        }
       }
       else{
        alert("Non va affatto bene")
       }
    }
    else (alert("Non hai l'età corretta per guidare"))
*/

//esercizio 27
/*
num1= +prompt("Inserisci il primo numero")
num2= +prompt("Inserisci il secondo numero")
segno= prompt("Metti il simbolo dell'operazione")
switch(segno){
    case "+":
        console.log(num1+num2)
        break;
    case "-":
        console.log(num1-num2)
        break;
    case "*":
        console.log(num1*num2)
        break;
    case "/":
        console.log(num1/num2)
        break;    
}
*/

// esercizio 28
/*
let numeroPari
for(i=1;i<=50;i++){
numeroPari = (i+i)
console.log(numeroPari)}
*/
// esercizio 29
/*
let x=0
let y=0
let risultato
for (x=0;x<11;x++){
    for (y=0;y<11;y++){
        risultato += " " + x*y + " ";
    }
    risultato += '\n'
}
console.log (risultato )
*/
// esercizio 30
/*
let vocali= "aeiouAEIOU"
let a= "aA"
let e= "eE"
let stocazzo= "iI"
let o= "oO"
let u= "uU"
let testo=`Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo
“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
Traduzione del 1914 di H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
Traduzione del 1914 di H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.” for(i=0;i<testo.length;i++)`
{
    numeroSillabe=testo.charAt(i)
    if(a.includes(numeroSillabe)){
        console.log(a)
    }
}
for(i=0;i<testo.length;i++){
    numeroSillabe=testo.charAt(i)
    if(e.includes(numeroSillabe)){
        console.log(e)
    }
}
for(i=0;i<testo.length;i++){
    numeroSillabe=testo.charAt(i)
    if(stocazzo.includes(numeroSillabe)){
        console.log(stocazzo)
    }
}
for(i=0;i<testo.length;i++){
    numeroSillabe=testo.charAt(i)
    if(o.includes(numeroSillabe)){
        console.log(o)
    }
}
for(i=0;i<testo.length;i++){
    numeroSillabe=testo.charAt(i)
    if(u.includes(numeroSillabe)){
        console.log(u)
    }
}
for(i=0;i<testo.length;i++){
    numeroSillabe=testo.charAt(i)
    if(vocali.includes(numeroSillabe)){
        console.log(vocali)
    }
}
*/

// esercizio 31

/*
function stoCazzo(n,m){
    let ciaomondo
    if (n===m){
        ciaomondo=true
        console.log(ciaomondo)
    }
    else{
        ciaomondo=false
        console.log(ciaomondo)
    }
    return ciaomondo
}
stoCazzo(1,2)

stoCazzo(1,"1")

stoCazzo(2,2)

*/
//esercizio 32
/*
function alContrario(parola) {
    let parolaSeparata= parola.split("")
    let parolaAlContrario= parolaSeparata.reverse();
    let parolaUnita= parolaAlContrario.join("")
    console.log (parolaUnita)
}
alContrario("ciao")
alContrario("bello schifo")

function reverseString(str) {
    parolainversa = str.split("").reverse().join("");
    return parolainversa
}
reverseString("hello");

*/

//esercizio 33
/*

let numeroFacceDelDado= prompt("Inserisci il numero delle facce del dado")
function numeroRandom(){
    numeroCasuale=Math.floor(Math.random()*(numeroFacceDelDado-1+1)+1);
    console.log (numeroCasuale)
}
numeroRandom()
numeroRandom()
*/

//esercizio 34
let numeroTiri=prompt("Quanti tiri per ogni giocatore?")
let nome = ""
function numeroRandom(nome){
    for( i=0;i<numeroTiri;i++){
    numeroCasuale=Math.floor(Math.random()*(20-1+1)+1);
    console.log (`${nome} ha fatto: ${numeroCasuale}`)
    }
    return numeroCasuale
}


numeroRandom ("giocatore 1")
numeroRandom ("giocatore 2")