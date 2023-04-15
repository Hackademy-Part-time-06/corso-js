console.log("script.js caricato!")

// Esercizio 23
console.group("PARI O DISPARI")

let numero = 13

if (numero % 2 == 0 ) {
    console.log(`Il numero ${numero} è pari`)
}

else if (numero % 2 >= 1 ) {
    console.log(`Il numero ${numero} è dispari`)
}

console.groupEnd()


// Esercizio 24
console.group("MESE")

let meseInserito = "gennaio"

meseInserito = meseInserito.toUpperCase()

console.group(meseInserito)

switch (meseInserito) {
    // mesi da 31gg
    case "GENNAIO":
    case "MARZO":
    case "MAGGIO":
    case "LUGLIO":
    case "AGOSTO":
    case "OTTOBRE":
    case "DICEMBRE":
        console.log("01 02 03 04 05 06 07\n08 09 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30")
        break;

    // mesi da 30gg
    case "APRILE":
    case "GIUGNO":
    case "SETTEMBRE":
    case "NOVEMBRE":
        console.log("01 02 03 04 05 06 07\n08 09 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31")
        break;

    // mesi da 28gg
    case "FEBBRAIO":
        console.log("01 02 03 04 05 06 07\n08 09 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28")
        break;

    default:
    console.log("ATTENZIONE: Hai sbagliato ad inserire il mese!")
    break;

}

console.groupEnd()

console.groupEnd()

// Esercizio 25
console.group("SUGGERITORE DI FILM")

let categoriaFilm = "fantascienza"

categoriaFilm = categoriaFilm.toUpperCase()

console.group(categoriaFilm)

switch (categoriaFilm) {
    case "FANTASY":
        console.log("• Il Signore degli Anelli")
        break;

    case "FANTASCIENZA":
        console.log("• Ritorno al Futuro")
        console.log("• Ritorno al Futuro 2")
        break;
    
    case "ANIMAZIONE":
        console.log("• Dragon Ball Z")
        console.log("• Dragon Ball GT")
        break;

    default:
    console.log("ATTENZIONE: Questa categoria non è presente tra i nostri film!")
    break;

}

console.groupEnd()

console.groupEnd()


// Esercizio 26
console.group("POSTO DI BLOCCO")

let age = +"17"
let patente = true
let assicurazione = true
let puntiPatente = Math.floor(Math.random() * (20 - 0 + 1) + 1)

let chiudonoUnOcchio = Math.round(Math.random())


console.log(`Punti Patente: ${puntiPatente}`)

console.log(`Chiuderanno un occhio? ${chiudonoUnOcchio}`)

if (age >= 18 && patente == true && assicurazione == true) {
    console.log(`Ok tutto perfetto! È libero di andare!`)
}
else if (chiudonoUnOcchio == 1) {
    console.log(`Per questa volta chiudiamo un occhio, faccia attenzione!`)
}
else {
    console.log(`Scenda dal veicolo! Lei è in arresto!`)
}

console.groupEnd()

// Esercizio 27
console.group("CALCOLATRICE")

let valore1 = 10
let valore2 = 20
let simboloMatematico = "+"
let risultato

switch (simboloMatematico) {
    case "+":
        risultato = valore1 + valore2
        console.log(`Il risultato della somma "${valore1} + ${valore2}" è uguale a ${risultato}`)
        break

    case "-":
        risultato = valore1 - valore2
        console.log(`Il risultato della sottrazzione "${valore1} - ${valore2}" è uguale a ${risultato}`)
        break

    case "/":
    case ":":
        risultato = valore1 / valore2
        console.log(`Il risultato della divisione "${valore1} / ${valore2}" è uguale a ${risultato}`)
        break

    case "*":
    case "x":
    case "X":
        risultato = valore1 * valore2
        console.log(`Il risultato della divisione "${valore1} * ${valore2}" è uguale a ${risultato}`)
        break

}

console.groupEnd()


// Esercizio 28
console.group("NUMERI PARI FINO A 100")

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.groupEnd()

// Esercizio 29
console.group("TABELLINE DA 0 A 10")

for (let x = 0; x <= 10; x++) {
    let stringa = ""
    for (let i = 0; i <= 10; i++) {
        let risultatoTabellina = i * x
        stringa = stringa + risultatoTabellina + " "
    }
console.log (`Tabellina del ${x}: ${stringa}`)
}

console.groupEnd()


// Esercizio 30
console.group("CONTA VOCALI E LETTERE")

let testo = `Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo
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

for (let x = 0; x <= testo.length; x++) {
    let singoloCarattere = testo.charAt(x).toLowerCase()
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

console.log(`A: ${a}`)
console.log(`E: ${e}`)
console.log(`I: ${i}`)
console.log(`O: ${o}`)
console.log(`U: ${u}`)
console.log(`Vocali Totali: ${vocali}`)
// console.log(`Lettere Rimanenti: ${lettereRimanenti}`)


console.groupEnd()