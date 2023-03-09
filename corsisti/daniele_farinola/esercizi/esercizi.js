/*
console.log(movieTitle)
console.log(movieYear)
console.log(movieDirector)

console.log(movieTitle,"(", movieYear,"-", movieDirector,")")

var bookTitle 
bookTitle="MisteroMilano"
var bookDescription="Estetica"
console.log(bookTitle, bookDescription)

var admin
var name
name="Gino"
admin=name
console.log(admin)

alert(admin)

var Username
var Password
prompt(Username)
prompt(Password)

function saluta() {
    let nome = prompt("Please enter your name", "es. mario rossi");
    if (nome != null) {
      alert("benvenuto " + nome + " nell'area privata");
    }
  }
 console.log(saluta())

// esercizio 8

 let n1 =10
 let n2= 20
 let n3 = 35
 let n4 = 50
 let n5= 70
 let somma = n1 + n2 + n3 + n4 + n5
 let media = somma / 5 
 console.log("somma")
 console.log("media")


 //esercizio 9
 /*

 let numero1 = prompt ('dimmi un numero 1/5')
 let numero2 = prompt ('dimmi un numero 2/5')
 let numero3 = prompt ('dimmi un numero 3/5')
 let numero4 = prompt ('dimmi un numero 4/5')
 let numero5 = prompt ('dimmi un numero 5/5')
 numero1 = Number(numero1)
 numero2 = Number(numero2)
 numero3 = Number(numero3)
 numero4 = Number(numero4)
 numero5 = Number(numero5)
 let somma2 = numero1 + numero2 + numero3 + numero4 + numero5;
 let media2 = somma2 / 5
 console.log("somma2")
 console.log("media2")

 //esercizio 10
/*
 let annoNascita = prompt("inserisci data di nascita")
 let anno = prompt ("inserisci data attuale")
 let annomese = prompt ("inserisci mese mese di nascita")
 let giorno = prompt ("inserisci giorno di nascita")
 anno=Number("anno")
 let età = anno- annoNascita
 console.log(età)
 */

 /*
//esercizio 10


 let annoNascita = prompt("inserisci anno di nascita")
 let anno = prompt("inserisci anno attuale")
 anno=Number(anno)
 annoNascita=Number(annoNascita)
let età = anno - annoNascita
console.log(età)
let annipercento = 100 - età
console.log(+annipercento)

*/

/*
//esercizio 11



let text = prompt("inserisci il tuo nome")
let primalettera = text.charAt(0).toUpperCase()+text.slice(1);
console.log(primalettera)
let result = primalettera.toUpperCase

*/

//esercizio 12
/*
let numero10cifre = prompt("inserisci il tuo numero di telefono")
let numeronascosto = ("*******" + numero10cifre.slice(7,10))
console.log=(numeronascosto)
*/
/*
let numeroDiTelefono = prompt("Inserisci il tuo numero di telefono");
let numeroNascosto = ("*******" + numeroDiTelefono.slice(7,10));
console.log(numeroNascosto);
*/
/*
//esercizio 13
let n1 = prompt("inserisci il primo numero")
let n2 = prompt("inserisci il secondo numero")
let n3 = prompt("inserisci il terzo numero")
let n4 = prompt("inserisci il quarto numero")
let n5 = prompt("inserisci il quinto numero")
n1=Number(n1)
n2=Number(n2)
n3=Number(n3)
n4=Number(n4)
n5=Number(n5)
let maggiore = Math.max(n1, n2,n3, n4, n5)
let minore = Math.min(n1, n2,n3, n4, n5)
console.log(maggiore);
console.log(minore)
*/

/*
//esercizio 14

let n1 = 0.1
let n2 = 0.2
let somma =(n1 + n2)
let arrotondamento = somma.toPrecision(2)
console.log(somma)
console.log(arrotondamento)

*/


/*
//esercizio 15

//numeri random interi da 1 a 6

let x = Math.floor((Math.random(il numero random è) * 6) + 1)
console.log(x);
//numeri random decimali da 1 a 6
let numeroRandom = Math.random(il numero random è)*6;
console.log(numeroRandom);

*/
/*
//esercizio 16

let totalegatti = prompt("Quanti gatti ci sono?")
let gattipresenti = prompt("Quanti gatti vuoi in ogni fila?")
totalegatti=Number(totalegatti)
gattipresenti = Number(gattipresenti)
let totalefile = Math.round(totalegatti / gattipresenti)
console.log(totalefile)
let differenza = totalegatti % gattipresenti
console.log (differenza)
let gattimancanti= gattipresenti - differenza
console.log(gattimancanti)
*/

/*

// esercizio 23

let numeroUtente = prompt("inserisci il numero");

numeroUtente = + numeroUtente

if (numeroUtente % 2 === 0){
 console.log("Il numero inserito è pari")
}
else{
  console.log("il numero inserito è dispari")
}
*/

/*

//esercizio 24 
let Mese = prompt("Inserisci il nome del mese")
MeseMinuscolo = Mese.toLowerCase()
switch (MeseMinuscolo) {
  case "gennaio":
    console.log("Questo mese ha 31 giorni")
    break;

    case "febbraio":
  console.log("Questo mese ha 28 giorni")
  break    

  case "marzo":
    console.log("Questo mese ha 31 giorni")
    break;

    case "aprile":
  console.log("Questo mese ha 30 giorni")
  break    

  case "maggio":
    console.log("Questo mese ha 31 giorni")
    break;

    case "giugno":
  console.log("Questo mese ha 30 giorni")
  break    

  case "luglio":
    console.log("Questo mese ha 31 giorni")
    break;

    case "agosto":
  console.log("Questo mese ha 31 giorni")
  break    
  case "settembre":
    console.log("Questo mese ha 30 giorni")
    break;

    case "ottobre":
  console.log("Questo mese ha 31 giorni")
  break    

  case "novembre":
    console.log("Questo mese ha 30 giorni")
    break;

    case "dicembre":
  console.log("Questo mese ha 31 giorni")

  default : console.log=prompt("Mese non valido, inserire mese corretto")
}
*/
/*

//esercizio 25

let categoria = prompt("Che tipo di film vorresti vedere? Inserisci la categoria!");
let categoriaMin = categoria.toLowerCase()

if (categoriaMin === "fantasy"){
 console.log(`Per la categoria"${categoriaMin} " il film consigliato è "Avanger"`)}
else if (categoriaMin === "horror"){
  console.log(`Per la categoria"${categoriaMin}" il film consigliato è: "Saw l'enigmista"`)
}
else if (categoriaMin === "Azione"){
  console.log(`Per la categoria"${categoriaMin}" il film consigliato è: "Fast&Furios"`)
}
else console.log=prompt("Mi dispiace, non ho film da consigliarti")
  */

//esercizio 26-
/*

let età = prompt("Quanti anni hai?")
età = +età
let patente = prompt("Hai la patente?")
let assicurazione = prompt("Hai l'assicurazione")

if (età>=18 && patente=="si" && assicurazione=="si"){
  console.log(`Puoi andare è tutto apposto`)
  console.log ["Hai"(Math.floor(Math.random() * 20) "sulla patente" )
}

else {
  console.log("Multa!")
}

*/
/*
let eta=prompt("Qunti anni hai?");
if (eta=>18)
console.log("Puoi guidare")

else { (eta<=17) 
  console.log("Non puoi guidare")}
  */

  /*

  let eta=prompt("Qunti anni hai?");
let patente=prompt("Hai la patente?");
let assicurazione=prompt("Hai l'assicurazione?");
if (eta>=18 && patente=="si" && assicurazione=="si"){

    console.log(`Hai ${Math.floor(Math.random() * 20)} punti sulla patente puoi continuare a guidare`);
}
else {
    console.log("Devo farti la multa sono 500 euro");
}
*/

/*

//esercizio 27

let result
let numero1 = prompt("Scrivi il primo numero")
let operazione = prompt("scrivi l'operazione che desideri effettuare")
let numero2 = ("Scrivi il secondo numero")

switch (operazione){
    case "+":
        result = numero1 + numero2;
        console.log(`${numero1} + ${numero1} = ${result}`);
        break

        case "-":
        result = numero1 - numero2;
        console.log(`${numero1} - ${numero2} = ${result}`);
        break

        case "*":
            result = numero1 * numero2;
            console.log(`${numero1} * ${numero2} = ${result}`);
            break

        case "/":
        result = numero1 / numero2;
        console.log(`${numero1} / ${numero2} = ${result}`);
        break
}
*/

/*

//Esercizio 28

let numeroPari;
for (i = 0; i <=50; i++){
        numeroPari = i * 2
        console.log(numeroPari)
} 
*/

/*

//esercizio 29
let risultato
let y = 0
let x = 0
for ( y = 0; y <=10; y++){
    for (x=0;x<11;x++){
        risultato += " " + x*y + " ";
    }
    risultato += '\n'
   // for (x = 0; x <=10; x++){
    //     result += y * x
    }
console.log(risultato)
*/

/*

//esercizio 30



let vocali = ("aeiouAEIOU")
let a = ("aA")
let e = ("eE")
let y = ("iI")
let o = ("eE")
let u = ("uU")
testo = `Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo
“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
Traduzione del 1914 di H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
Traduzione del 1914 di H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”
`
for (i = 0; i<testo.length; i++){
    carattere = testo.charAt(i)
    if (vocali.includes(carattere)){
        console.log(vocali)
    }
}
for (i = 0; i<testo.length; i++){
    carattere = testo.charAt(i)
    if (a.includes(carattere)){
        console.log(a)
    }
}
for (i = 0; i<testo.length; i++){
    carattere = testo.charAt(i)
    if (e.includes(carattere)){
        console.log(e)
    }
}
for (i = 0; i<testo.length; i++){
    carattere = testo.charAt(i)
    if (y.includes(carattere)){
        console.log(y)
    }
}
for (i = 0; i<testo.length; i++){
    carattere = testo.charAt(i)
    if (o.includes(carattere)){
        console.log(o)
    }
}
for (i = 0; i<testo.length; i++){
    carattere = testo.charAt(i)
    if (u.includes(carattere)){
        console.log(u)
    }
}
*/

//esercizio 31
/*

function argomenti(n,m){
    if (n==m) {
        result = true
    }
    else (result = false)
    return result
}

    argomenti(0,1)
    console.log(argomenti(1,1))
     */

/*

    //esercizio 32
    
    function parola(a){
        let parolaSeparata = a.split("")
        let parolaAlContrario = parolaSeparata.reverse()
        let parolaTotale = parolaAlContrario.join("")
        console.log(parolaTotale)
    }
    parola("ciao")

    //si scrive anche così

    function assa(b){
        let bassa = b.split("").reverse().join("")
        console.log(bassa)
    }

    assa("culo")
    */


    /*
    //esercizio 33

    function randomico(a){
        let numeroRandom = Math.floor(Math.random()*(a-1+1)+1)
        console.log(numeroRandom)
    }

    randomico(52)

    */

    //esercizio 34

    function gioca(a){
        let numeroRandom = Math.floor(Math.random()*(6-1+1)+1)
        return numeroRandom
    }

    let tiri = prompt("Quante volte vuoi giocare?")

    for(i = 0; i <tiri; i++){
         console.log("Giocata 1o giocatore "+gioca("Giocatore 1"))
    }
    
    for(i = 0; i <tiri; i++){
        console.log("Giocata 2o giocatore "+gioca("Giocatore 2"))
   }


