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
let letteraI= "iI"
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
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”`
for(i=0;i<testo.length;i++){
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
function numeroRandom(n){
    numeroCasuale=Math.floor(Math.random()*(n-1+1)+1);
    console.log (numeroCasuale)
    }
numeroRandom()
numeroRandom()
*/
//esercizio 34
/*
let numeroTiri=prompt("Quanti tiri per ogni giocatore?")
let nome = ""
let puntiTotali = 0
function numeroRandom(nome){
    for( i=0;i<numeroTiri;i++){
        numeroCasuale=Math.floor(Math.random()*(20-1+1)+1);
        console.log (`${nome} ha fatto: ${numeroCasuale}`)
        puntiTotali += numeroCasuale
        }
    console.log (puntiTotali)
    }
*/
        
// esercizio 35
/*
function calciatore(nome,baseVoto=0,golFatti=0,assistEffettuati=0,autogol=0,ammonizione=0,espulsione=0){
    risultato= baseVoto + (golFatti*3) + assistEffettuati - (autogol*2) - ammonizione - (espulsione*2)
    console.log(`${nome}: \nbaseVoto=${baseVoto} \ngolFatti=${golFatti} \nassistEffettuati=${assistEffettuati} \nautogol= ${autogol} \nammonizione= ${ammonizione} \nespulsione= ${espulsione} \n \nrisultato= ${risultato}`)
    }
calciatore("Tizio",10,2,3,1,3,0)
*/
// esercizio 36 
/*        
function titolo (stringaDaFormattare){
    console.log(`%c${stringaDaFormattare}`,`background-color: blue; font-size: 30px; color: white`)
    }
function sottotitolo (stringaDaFormattare){
    console.log(`%c${stringaDaFormattare}`,`font-size: 20px; color: blue;`)
    }
function evidenziatore (stringaDaFormattare){
    console.log(`%c${stringaDaFormattare}`,`background-color: orange;`)
    }
function disastro (stringaDaFormattare){
        console.log(`%c${stringaDaFormattare}`,` background-color: red; font-size: 50px; color: white`)
    }
function myLog(buonoCosi,stringaDaFormattare2){
        ciaoMondo= stringaDaFormattare2 (buonoCosi)
    }
myLog("Questo è un TITOLO", titolo);
myLog("Questo è un SOTTOTITOLO", sottotitolo);
myLog("Questo è un test evidenziato", evidenziatore);
myLog("Questo è un DISTASTROOOOOOOOOOOO", disastro);
*/
// esercizio 37
/*
let listaNumeri = [61, 32, 3, 94, 35, -6, 7, -28, 39, 10];
function ordineDecrescente(a, b) {
    return b - a
    };
function ordineCrescente(a,b){
    return a-b
    };
console.log(listaNumeri.sort(ordineDecrescente));
console.log(listaNumeri.sort(ordineCrescente));
*/
// esercizio 38
/*      
c=[]
function terzoArray(a,b,operation){
    switch (operation){
        case "addizione":
            let addizione=[]
            for(i=0;i<a.length;i++){
                addizione.push((a[i])+(b[i]))                        
                }
            console.log(addizione)
            break;
        case "sottrazione":
            let sottrazione=[]  
            for(i=0;i<a.length;i++){
                sottrazione.push((a[i])-(b[i]))                        
                }
            console.log(sottrazione)
            break;
        case "moltiplicazione":
            let moltiplicazione=[]
            for(i=0;i<a.length;i++){
                moltiplicazione.push((a[i])*(b[i]))                        
                }
            console.log(moltiplicazione)
            break;
        case "divisione":
            let divisione=[]
            for(i=0;i<a.length;i++){
                divisione.push((a[i])/(b[i]))                            
                    }
            console.log(divisione)
            break;
    }
}
terzoArray([2,7,4],[3,2,9],"divisione")
terzoArray([2,7,4],[3,2,9],"moltiplicazione")
terzoArray([2,7,4],[3,8,9],"addizione")
terzoArray([2,7,4],[3,2,9],"sottrazione")
*/
// esercizio 38 Array avanzati
/*
function terzoArray(a,b,operation){
    let addizione=[]
    let sottrazione=[]
    let moltiplicazione=[]
    let divisione=[]
    // let primaLista= a.map((elemento1,index,a)=>{

    //     let secondaLista= b.map((elemento2,index,b)=>{

            
    //     })
    // })
    switch (operation){
        case "addizione":
            a.forEach((element,index) => {
                addizione.push(element+b[index])
            });
            console.log(addizione)
        
            break;
        case "sottrazione":
            a.forEach((element,index) => {
                sottrazione.push(element-b[index])
            });
            console.log(sottrazione)
        
            break;
        case "moltiplicazione":
            a.forEach((element,index) => {
                moltiplicazione.push(element*b[index])
            });
            console.log(moltiplicazione)
            break;
        case "divisione":
            a.forEach((element,index) => {
                divisione.push(element/b[index])
            });
            console.log(divisione)
            break;
    }
    }

terzoArray([2,7,4],[3,2,9],"divisione")
terzoArray([2,7,5],[3,2,9],"moltiplicazione")
terzoArray([2,7,5],[3,8,9],"addizione")
terzoArray([2,7,6],[3,2,9],"sottrazione")
*/
// esercizio 39
/*
let numeroSottoLaMedia=[]
function ottimizzareMedia (numero){
    let numeroCompleto = 0 
    for(i=0;i<numero.length;i++){
        numeroCompleto+=numero[i]
        media=numeroCompleto/numero.length
    } 
    for(i=0;i<numero.length;i++){
        if(numero[i]<media){
            numeroSottoLaMedia.push(numero[i])
            }
    }
                
    console.log(media + "\nI numeri sotto la media sono: " + numeroSottoLaMedia)
}           
ottimizzareMedia([4,3,6,2,-5,10])
*/
// esercizio 39 array avanzati
/*
function ottimizzareMedia (numero){
    let sommaTotale = numero.reduce(function(element,index){
        element= element+index
        return element
    });
    console.log(sommaTotale)
    let media= sommaTotale/numero.length
    console.log(media)
    let numeriSottoLaMedia = numero.filter(function(number){
        return number<media
    })
    console.log(`media:${media},valori sotto la media: ${numeriSottoLaMedia}`)
}
ottimizzareMedia([4,3,6,2,5,10])
*/
// esercizio 40
/*
function divisione (list,divisore){
    for(i=0;i<list.length;i++){
        if (list[i]%divisore==0)
        console.log(list[i])
    }
}
divisione([2,5,8,9,10],2)
*/
// esercizio 40
/*
function divisione(numeri,divisore){
    numeriDivisibili = numeri.filter(function(number){
        return number % divisore === 0
    })
    console.log( numeriDivisibili)
}
divisione([2,5,8,9,10],2)
*/
// esercizio 41
/*
function ricerca(list,valoreDaCercare){
    console.log(list.includes(valoreDaCercare))
}
ricerca([2,3,4,5,6,7],"2")
ricerca(['what', 'a', 'great', 'kata'], 'what')
*/ 
//esercizio 42
/*
function sommaPositiva(numero){
    let somma= 0
    for(i=0;i<numero.length;i++){
        if (numero[i]>0){
            somma+=numero[i]
            
        }
    }
    console.log(somma)
}
sommaPositiva([2,3,-4,-5,6])
*/
//esercizio 42 array avanzati
/*
function sommaPositiva(numero){
    somma=0
    numeroPositivo= numero.filter(function(number){
        if (number>0){
            somma+= number
        }  
        return somma
    })
    console.log(somma)
}

sommaPositiva([-2,-3,-4,-5,-6])
*/
//esercizio 43
/*
function raddoppiare(numeri){
    let nuovoArray =[]
    for(i=0;i<numeri.length;i++){
        nuovoArray.push(numeri[i]*2)
    }
    console.log(nuovoArray)
}

raddoppiare([2,3,4,5,6])
*/
//esercizio 43
/*
function raddoppiare(numeri){
    numeroRaddoppiato= numeri.map(function(number){
        return number * 2
    })
    console.log(numeroRaddoppiato)
}
raddoppiare([2,3,4,5,6])
*/
//esercizio 44
/*
function punteggioTotale(punteggio){
    let puntiFinali= 0
    for(i=0; i<punteggio.length;i++){
        let punteggioSingolo= punteggio[i].split(":")
        if(punteggioSingolo[0]>punteggioSingolo[1]){
            punti=3
        }
        else if(punteggioSingolo[0]<punteggioSingolo[1]){
            punti=0
        }
        else{punti=1}
        puntiFinali+= punti
    }
    console.log(puntiFinali)
}
punteggioTotale(["2:0","3:0","2:2","1:2","2:0"])
*/
// esercizio 44
/*
function punteggioTotale(punteggio){
    let puntiFinali=0
    let punti = 0
    let punteggioSingolo= punteggio.map(function(number){
        let separati= number.split(":")
        return separati
    })
    punteggioSingolo.forEach(function(element,index){
            if(element[0]>element[1]){
                console.log("vinto")
                punti=3
            }
            else if (element[0]<element[1]){
                console.log("perso")
                punti= 0 
            }
            else if (element[0]=element[1]){
                console.log("pareggio")
                punti=1
            }
            puntiFinali+= punti
    });
    
    console.log(puntiFinali)
}
punteggioTotale(["2:0","3:0","2:2","1:2","2:0"])
*/
// esercizio 46
/*
function primeLettere(frase){
    
    listaFrase= frase.split(" ");
    let iniziali = listaFrase.map(function(elemento,index,listaFrase){
        elemento=elemento.charAt(0)
        return elemento
    })
    tutteLeIniziali=iniziali.join("")
    console.log(tutteLeIniziali)
}
primeLettere("Ciao sono un esercizio sui metodi avanzati degli array")
primeLettere("Ciao mondo come va")
*/
// esercizio 47
/*
function arrayUnico(lista){
    let listeComplete= lista.reduce(function(totale,parola){
        totale=totale.concat(parola)
        return totale

    })
    console.log(listeComplete)
}
arrayUnico([["abc", "gino", "aaa"],["abc", "dino", 123],["aaa", "gino", 321],["xyz", "klm", "aaa"]])
*/
// esercizio 48
/*
function sommaDividendi(lista){
    let dividendi= lista.filter(function(numeroPari){
        return numeroPari % 2 === 0
    })
    let totale=dividendi.reduce(function(elemento,numero){
        elemento= elemento+ numero
        return elemento
    })
    numeri = dividendi.join(" + ")
    console.log (numeri + " = " + totale)
}
sommaDividendi([1, 2, 3, 4, 5, 6, 7, 8, 9])
*/
// esercizio 49
/*
let playlist = {
    canzoni : {
        primoBrano:{
            titolo: "La donna cannone",
            nomeCantante : "Francesco De Gregori",
            anno : "1978",
        },
        secondoBrano:{
            titolo: "La donna del mio amico",
            nomeCantante : "Pooh",
            anno : "1996",
        },
        terzoBrano:{
            titolo:prompt ("Inserisci il titolo della tua canzone"),
            nomeCantante : prompt ("Inserisci il nome del cantante"),
            anno : prompt ("Inserisci l'anno d'uscita del brano")
        },
        quartoBrano:{
            titolo:prompt ("Inserisci il titolo della tua canzone"),
            nomeCantante : prompt ("Inserisci il nome del cantante"),
            anno : prompt ("Inserisci l'anno d'uscita del brano")
        },
    },
}
console.log(playlist.canzoni)
*/
//altrometodo
/*
let playlist ={
    nome: "La mia playlist",
    canzoni: [
        {
            titolo: "Ciao mondo",
            nomeCantante:"Grignani",
            anno: 1920,
        }
    ]
};
let nuovaCanzone={
    titolo: "ciao belli",
    nomeCantante: "Cristian",
    anno: 1984
}
*/
//metodo corretto
/*
let playlist ={
    nome: "La mia playlist",
    canzoni: [
        {
            titolo: "Ciao mondo",
            nomeCantante:"Grignani",
            anno: 1920,
        }
    ],
    aggiungiCanzone: function(titoloca, nomeCantanteCanzone, annocanzone){
        let nuovaCanzone ={
            titolo: titoloca,
            nomeCantante: nomeCantanteCanzone,
            anno: annocanzone
        }
        this.canzoni.push(nuovaCanzone)
    },
    stampaCanzone: function(){
        playlist.canzoni.forEach(function(brano)  {
            console.log(`${brano.titolo} - ${brano.nomeCantante} - ${brano.anno}`)
        });
    },
};
playlist.aggiungiCanzone(
    "lollo",
    "stoca",
    1966
)
playlist.stampaCanzone()
*/
// esercizio 50
/*
let rubrica = {
    utenti:{
        utente1:{
            nome:"Claudia",
            cognome:"Cavata",
            telefono:"0957262477",
            indirizzo:{
                via:"Via del gelsomino 22",
                citta:"Bergamo",
                cap: "95024",
            },
        },
        utente2:{
            nome:"Serena",
            cognome:"Brunetta",
            telefono:"0957262899",
            indirizzo:{
                via:"Via del bosco 37",
                citta:"Bari",
                cap:"92304",
            },
        },
        utente3:{
            nome:"Tony",
            cognome:"Torre",
            telefono:"3957264513",
            indirizzo:{
                via:"Via Grigio 1",
                citta:"Catania",
                cap:"95024",
            },
        },
    },
}
delete rubrica.utenti.utente1.indirizzo
console.log(rubrica.utenti.utente1)
*/
//metodo corretto
/*
let rubrica = {
    utenti:[],
    stampaUtenti: function(){
        this.utenti.forEach(utente) {
            console.log(`${utente.nome} ${utente.cognome} ${utente.telefono}`)            
        };
    },
    inserisciUtente: function(nome, cognome, telefono){
        this.utenti.push({
            nome: nome,
            cognome: cognome,
            telefono: telefono
        })
    }
}
*/
//esercizio 51
/*
let garage = {
    automobili:[{
        brand:"jeep",
        model:"renegade",
    },{
        brand:"fiat",
        model:"500",
    },{
        brand:"toyota",
        model:"yaris",
    },{
        brand:"jeep",
        model:"compass"
    }],
    cercaAuto: function(nome){
        let modelloInPossesso = garage.automobili.filter(function(auto,index){
            return auto.brand===nome
        })
        console.log(modelloInPossesso)
    },
};
let nome = prompt ("Inserisci il modello dell'auto")
garage.cercaAuto(nome)
*/
//esercizio 52
/*
let partitaABowling ={
    listaGiocatori:[{
        punteggio:[8,10,10,10,1,1,0,2,8,7],
        giocatore:"Tizio",
    },{
        punteggio:[10,10,10,10,10,10,10,10,10,9],
        giocatore:"Caio",
    },{
        punteggio:[2,3,4,1,4,6,9,9,0,0],
        giocatore:"Sempronio",
    }],
    risultato: function(){
        partitaABowling.listaGiocatori.forEach(function(punteggi){
                punteggi.totale = punteggi.punteggio.reduce(function(totale,index){
                return totale= totale+index
            })
        })
    },
   
    trovaVincitore: function(){
        partitaABowling.risultato()
        let vincitore = {
            totale : 0
        }
        partitaABowling.listaGiocatori.forEach(function(punteggi){
            if (punteggi.totale>vincitore.totale){
                vincitore=punteggi
            }
        })
        return vincitore

    }
}
partitaABowling.risultato()
console.log (partitaABowling.trovaVincitore())
*/
//esercizio 53
/*
let lista = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]

function tuttoInsieme(liste){
    let listaUnica= []
    liste.forEach(function(item){
        listaUnica= listaUnica.concat(item)
    })

    let occorrenze = {}
    listaUnica.forEach(function(elemento){
        if(occorrenze.hasOwnProperty(elemento)){
            occorrenze[elemento]++
        }
        else{occorrenze[elemento]=1}
    })
    console.log(occorrenze)
}
tuttoInsieme(lista)
*/
//esercizio 54
/*
const LIBRI = [
    {
            titolo: "Il Signore degli Anelli",
            autore: "Tolkien",
            categoria: "fantasy"
    },
    {
            titolo: "Harry Potter",
            autore: "Rowling",
            categoria: "fantasy",
    },
    {
            titolo: "Il Conte di Montecristo",
            autore: "Dumas",
            categoria: "narrativa classica"
    },
    {
            titolo: "Dune",
            autore: "Herbert",
            categoria: "fantascienza"
    },
    {
            titolo: "Fight Club",
            autore: "Palahniuk",
            categoria: "narrativa moderna"
    }
  ]

  category = prompt ("inserisci la tua categoria")
  let lista = LIBRI.forEach(function(element){
    if (category===element.categoria){
        console.log(`<a href=www.lamiasuperlibreria.aulab/${element.autore.toLowerCase().replaceAll(" ", "-")}/${element.titolo.toLowerCase().replaceAll(" ", "-")}>${element.titolo}</a>`)
    }
  })
*/
//esercizio 55
/*
let calendario = {
    lunedi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    martedi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    mercoledi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    giovedi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    venerdi : [
        {
            nomeEvento : "Lezione",
            inizioEvento : "18:30",
        },
    ],
    sabato : [],
    domenica : [],
}

function aggiuntaEventi (giornoEvento, nomeEvento, inizioEvento) {
    for (let giorno in calendario) {
        if (giorno === giornoEvento) {
            calendario[giorno].push({nomeEvento, inizioEvento})
           console.log("Nuovo evento: ", giorno, calendario[giorno])
           function compare( a, b ) {
            if ( a.inizioEvento < b.inizioEvento ){
              return -1;
            }
            if ( a.inizioEvento > b.inizioEvento ){
              return 1;
            }
            return 0;
            }
            console.log(calendario[giorno].sort(compare))
        }
    }
}


function filtraGiorni (day) {
    for (let giorno in calendario) {
        if (day === giorno) {
            console.log("Oggi dovresti fare: ", calendario[giorno])
        }
    }
}

function occorrenze (cose){
    for(let giorno in calendario){
        calendario[giorno].forEach(function(dentroIlGiorno){
            if (cose === dentroIlGiorno.nomeEvento){
                console.log(giorno, dentroIlGiorno.nomeEvento, dentroIlGiorno.inizioEvento)
            }
        })
    }
}


aggiuntaEventi("mercoledi", "Lezione", "09:00")
aggiuntaEventi("martedi", "schifo", "08:00")
aggiuntaEventi("lunedi", "flexiamo", "22:44")
filtraGiorni("martedi")
occorrenze("Lezione")
occorrenze("Spacco tutto")
occorrenze("Spacco metà delle cose")
*/