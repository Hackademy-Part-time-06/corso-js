    //Eserc 23

/* 
let numeroDaAnalizzare = prompt("Inserisci un numero a tuo piacimento:")
numeroDaAnalizzare = +numeroDaAnalizzare

if (numeroDaAnalizzare % 2==0) {
    console.log(`Il numero ${numeroDaAnalizzare} è pari.`)
}
else {
    console.log(`Il numero ${numeroDaAnalizzare} è pari.`)
}
*/


    //Eserc 24

/*
let meseDaAnalizzare = prompt("Inserisci un mese(scritto in italiano :p)")
meseDaAnalizzare = meseDaAnalizzare.toLowerCase()

switch (meseDaAnalizzare) {
    case "gennaio":
        console.log("Gennaio è composto da 31 giorni")
    break;
    case "febbraio":
        console.log("Febbraio è composto da 28 giorni")
    break;
    case "marzo":
        console.log("Marzo è composto da 31 giorni")
    break;
    case "aprile":
        console.log("Aprile è composto da 30 giorni")
    break;
    case "maggio":
        console.log("Maggio è composto da 31 giorni")
    break;
    case "giugno":
        console.log("Giugno è composto da 30 giorni")
    break;
    case "luglio":
        console.log("Luglio è composto da 31 giorni")
    break;
    case "agosto":
        console.log("Agosto è composto da 31 giorni")
    break;
    case "settembre":
        console.log("Settembre è composto da 30 giorni")
    break;
    case "ottobre":
        console.log("Ottobre è composto da 31 giorni")
    break;
    case "novembre":
        console.log("Novembre è composto da 30 giorni")
    break;
    case "dicembre":
        console.log("Dicembre è composto da 31 giorni")
    break;
}
*/


    //Eserc 25

    /*
let categoriaDaAnalizzare = prompt("Che genere di film vuoi vedere?")
categoriaDaAnalizzare = categoriaDaAnalizzare.toLowerCase()

switch (categoriaDaAnalizzare) {
    case "fantasy":
        console.log(`Dato che vuoi del ${categoriaDaAnalizzare}, ti suggerirei "The Lord of The Rings"`)
    break;
    case "crime":
        console.log(`Dato che vuoi del ${categoriaDaAnalizzare}, ti suggerirei "Pulp Fiction"`)
    break;
    case "action":
        console.log(`Dato che vuoi del ${categoriaDaAnalizzare}, ti suggerirei "Fast & Furious"`)
    break;
    case "animation":
        console.log(`Dato che vuoi del ${categoriaDaAnalizzare}, ti suggerirei "Inside Out"`)
    break;
    case "cars":
        console.log(`Dato che vuoi del ${categoriaDaAnalizzare}, ti suggerirei "Cars"`)
    break;
    case "sci-fi":
        console.log(`Dato che vuoi del ${categoriaDaAnalizzare}, ti suggerirei "Avatar"`)
    break;
}
*/


    //Eserc 26

/*
let age = prompt("Quanti anni ha?")
let license = true
let insurance = true
let puntiDellaPatente = Math.floor(Math.random() * (20 - 0 + 1) + 1 )
let teLaCavi = Math.round(Math.random())

age = +age
if (age >= 18) {
    if (license = true, insurance = true) {
        if (puntiDellaPatente >= 10) {
            console.log(`Hai ${puntiDellaPatente}, puoi stare ancora tranquillo. ;)`)
            if (teLaCavi == 1){
                console.log("Però purtroppo devo effettuare altri controlli")
            }
            else {
                console.log("Ok, tutto in regola, può andare!")
            }
        }
        else if (10 > puntiDellaPatente >= 5) {
            console.log(`Hai ${puntiDellaPatente}, attento che manca poco.`)
            if (teLaCavi == 1){
                console.log("E credo sia opportuno effettuare altri controlli")
            }
            else {
                console.log("Ok,nonostante tutto può andare!")
            }
        }
        else {
            console.log(`Hai ${puntiDellaPatente}, occhio che sei a rischio!!!`)
            if (teLaCavi == 1){
                console.log("E vista la situazione sono costretto ad effettuare altri controlli")
            }
            else {
                console.log("Per questa volta è salvo, ma non sarà cosi fortunato la prossima volta.")
            }
        }
        
    }
}
else {
    console.log("Ma lei che ci fa alla guida??!?!?!!?")
    if (teLaCavi == 1){
        console.log("Comm stann e cos t aggia fa o mazz a tarall")
    }
    else {
        console.log("Per questa volta è salvo, ma non sarà cosi fortunato la prossima volta.")
    }
}
*/


    //Eserc 27

    
let numeroUno = prompt("Inserisci il primo valore:")
let numeroDue = prompt("Inserisci il secondo valore:")
let operazione = prompt("Che operazione vuoi effettuare?")
numeroUno = +numeroUno
numeroDue = +numeroDue
let risultato

switch (operazione) {
    case "+":
    risultato = numeroUno + numeroDue
    console.log(`Il risultato della somma tra ${numeroUno} e ${numeroDue} è ${risultato}`)
    break
    case "-":
        risultato = numeroUno - numeroDue
    console.log(`Il risultato della sottrazione tra ${numeroUno} e ${numeroDue} è ${risultato}`)
    break
    case "x":
    case "X":
    case "*":
        risultato = numeroUno * numeroDue
    console.log(`Il risultato della moltiplicazione tra ${numeroUno} e ${numeroDue} è ${risultato}`)
    break
    case ":":
    case "/":
        risultato = numeroUno / numeroDue
    console.log(`Il risultato della divisione tra ${numeroUno} e ${numeroDue} è ${risultato}`)
    break
}



    //Eserc 28

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


    //Eserc 29

//inizializzo il primo ciclo dichiarando la prima variabile della tabellina
for (let x = 0; x <= 10; x++) {
    //creo una stinga vuota che predispone alla visualizzazione in "riga"
    let stringa = ""
    //inizializzo il secondo ciclo dichiarando la seconda variabile della tabellina
    for (let i = 0; i <= 10; i++) {
        //eseguo il prodotto
        let risultatoTabellina = x * i
        //aggiorno la variabile stringa "vuota" con i valori che il ciclo producerà
        stringa = stringa + risultatoTabellina + " "
    }
    console.log(`La tabellina dell'${x} è: ${stringa}`)
}


    //Eserc 30

let testoDaAnalizzare = `Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
Traduzione del 1914 di H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
Traduzione del 1914 di H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”`

let a = 0
let e = 0
let i = 0
let o = 0
let u = 0


for (let x = 0; x <= testoDaAnalizzare.length; x++) {
    let singoloCarattere = testoDaAnalizzare.charAt(x).toLowerCase()
    switch (singoloCarattere) {
        case "a":
            a = a + 1
        break
        case "e":
            e = e + 1
        break
        case "i":
            i = i + 1
        break
        case "o":
            o = o + 1
        break
        case "u":
            u = u + 1
        break
    }
}
let vocali = a + e + i + o + u
console.log(`Ci sono ${a} a`)
console.log(`Ci sono ${e} e`)
console.log(`Ci sono ${i} i`)
console.log(`Ci sono ${o} o`)
console.log(`Ci sono ${u} u`)
console.log(`Ci sono ${vocali} vocali`)


    //Eserc 22

// dichiaro il n di lanci e la variabile di partenza per valutare il tiro dal valore piu alto per i singoli giocatori
let numeroLanci = 5
let punteggioPiuAltoGiocatore1 = 0
let punteggioPiuAltoGiocatore2 = 0

//lanciamo i dadi
for (let i = 0; i < numeroLanci; i++) {
    let valoreDado1 = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    let valoreDado2 = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    //valori dei dadi lanciati
    console.log("dado 1 " + valoreDado1)
    console.log("dado 2 " + valoreDado2)
    //procedura per sovrascrivere il valore piu alto su quelli piu bassi
    if (punteggioPiuAltoGiocatore1 < valoreDado1) {
        punteggioPiuAltoGiocatore1 = valoreDado1
    }
    if (punteggioPiuAltoGiocatore2 < valoreDado2) {
        punteggioPiuAltoGiocatore2 = valoreDado2
    }
}
//dichiarazione del vincitore
if (punteggioPiuAltoGiocatore1 > punteggioPiuAltoGiocatore2) {
    alert("Giocatore 1 VINCE!")
}
else if (punteggioPiuAltoGiocatore1 < punteggioPiuAltoGiocatore2){
    alert("Giocatore 2 VINCE!")
}
//situazione di pareggio
else {
    //devo creare una situazione di pareggio "vera"
    let pareggio = true
    console.log(pareggio)
    //procedura di risoluzione del pareggio
    while (pareggio) {
        //lanciamo i dadi
        let valoreDado1 = Math.floor(Math.random() * (20 - 1 + 1) + 1)
        let valoreDado2 = Math.floor(Math.random() * (20 - 1 + 1) + 1)
        //valori dei dadi lanciati
        console.log("dado 1 " + valoreDado1)
        console.log("dado 2 " + valoreDado2)
        //dichiarazione del vincitore(in questo caso non si usano piu il punteggiogiocatore ma si usa il valore dado)
        if (valoreDado1 > valoreDado2) {
            pareggio = false
            alert("Giocatore 1 VINCE!")
        }
        else if (valoreDado1 < valoreDado2){
            pareggio = false
            alert("Giocatore 2 VINCE!")
        }         
    }

}