/*esercizio 23

let numeroVerifica = prompt ("Inserisci un numero");
numeroVerifica = +numeroVerifica;
let risultato = numeroVerifica % 2;
let pari = "Pari"
let dispari = "Dispari"
if (risultato === 0){
    console.log(`"Il Numero che hai inserito è: " ${pari}`)
}
else if (risultato === 1){
    console.log (`"Il numero che hai inserito è: " ${dispari}`)
}
*/



/*esercizio 24

let mese = prompt("scrivi un mese")
mese = mese.toLowerCase();
switch (mese){
    case "gennaio":
        console.log("Gennaio ha 31 giorni")
        break;
    
    case "febbraio":
        console.log("Febbraio ha 28 giorni(se l'anno è bisestile ne ha 29)")
        break;
        
        case "marzo":
        console.log("Marzo ha 31 giorni")
        break;

        case "aprile":
        console.log("Aprile ha 30 giorni")
        break;

        case "maggio":
        console.log("Maggio ha 31 giorni")
        break;

        case "giugno":
        console.log("Giugno ha 30 giorni")
        break;

        case "luglio":
        console.log("Luglio ha 31 giorni")
        break;

        case "agosto":
        console.log("Agosto ha 31 giorni")
        break;

        case "settembre":
        console.log("Settembre ha 30 giorni")
        break;

        case "ottobre":
        console.log("Ottobre ha 31 giorni")
        break;

        case "novembre":
        console.log("Novembre ha 30 giorni")
        break;

        case "dicembre":
        console.log("Dicembre ha 31 giorni")
        break;
    
}
*/


/*esercizio 25


let categoria;
categoria = prompt("Inserisci una categoria")
categoriaLow = categoria.toLocaleLowerCase()
let film;
if (categoriaLow === "fantasy"){
    console.log(`"Il film suggerito per la categoria ${categoriaLow} è:  ${film = "Il Signore Degli Anelli"}"`)
}
else if (categoriaLow === "azione"){
    console.log(`"Il Film suggerito per la categoria ${categoriaLow} è: "${film = "xXx - Il Ritorno Di Xander Cage"}"`)
}
else if (categoriaLow === "fantascienza"){
    console.log(`"Il Film suggerito per la categoria ${categoriaLow} è: "${film = "Jurassic World"}"`)
}
else if (categoriaLow === "animazione"){
    console.log(`"Il Film suggerito per la categoria ${categoriaLow} è: "${film = "Il Gatto Con Gli Stivali"}"`)
}


/*switch (categoria){
    case "fantasy"
        console.log("fantasy");
        break;
    case 
}
*/



/*esercizio26

let eta = prompt("Inserisci la tua età")
eta = +eta;
let patente;
let assicurazione;
let punti;

if (eta >= 18){
    console.log("Sei Maggiorenne, puoi guidare")
    //chiedo la patente e controllo i punti
    patente = prompt("Hai la patente?")
    patente = patente.toLowerCase()
    punti = Math.random() * 20;
    punti = Math.round(punti)
    if (patente === "si" && punti > 0){
        patente = true,
        console.log(`Puoi Guidare con la patente con un totale di ${punti} punti`)

        //chiedo l'assicurazione
        assicurazione = prompt("Hai l'assicurazione?")
        assicurazione = assicurazione.toLowerCase()
        if (assicurazione === "si"){
            console.log("Hai l'assicurazione,puoi guidare")
        }
        else {
            alert("NON HAI L'ASSICURAZIONE, NON PUOI GUIDARE!!!")
        }
    }
    else {
        alert ("NON PUOI GUIDARE SENZA PATENTE E CON 0 PUNTI!!!")
    }
}
else{
    alert("NON PUOI GUIDARE PERCHE' SEI MINORENNE!!!")
}
*/



/*esercizio 27

let numero1 = prompt("Inserisci il primo Numero");
numero1 = +numero1;
let operazioneMath = prompt("Inserisci l'operazione che vuoi eseguire");
let numero2 = prompt("Inserisci il secondo Numero");
numero2 = +numero2;

switch (operazioneMath){
    case "+":
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    break;

    case "-":
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    break;
        
    case "*":
    console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    break;
            
    case "/":
    console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    break;

}
*/



/*esercizio 28

for (let i=0; i <=50; i++){
    console.log(i + i)
}
*/



/*esercizio29

let tabellina;
let moltiplicazione;
let output;

for (tabellina = 0; tabellina <= 10; tabellina++) {
    for (moltiplicazione = 0; moltiplicazione <= 10; moltiplicazione++){
        console.log(output = tabellina*moltiplicazione)
    }
}
*/



/*esercizio30 ---------> NON COMPLETO
let testo = `Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo
“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
Traduzione del 1914 di H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
Traduzione del 1914 di H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”`


let vocaleA = "aA";
let vocaleE = "eE";
let vocaleI = "iI";
let vocaleO = "oO";
let vocaleU = "uU";

*/











/*
let vocaleA = "aA";         
 for (let i = 0; i < testo.length; i++) {             
    let lettera = testo.charAt(i);             
    if (vocaleA.includes(lettera)) {                 
        console.log(lettera);             
    }         
}
//ripeti questo per ogni vocale

let vocali = "aAeEiIoOuU";

    for (let i = 0; i < testo.length; i++) {
        let lettera = testo.charAt(i);
        if (vocali.includes(lettera)) {
            console.log(vocali);
            }
        
    }

*/