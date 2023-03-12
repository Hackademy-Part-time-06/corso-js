// ESERCIZIO 23
/*
console.group("PARI O DISPARI?");

let numeroUtente = prompt("Inserisci un numero");
numeroUtente =+ numeroUtente;

if(numeroUtente % 2 == 0){
    console.log("Il numero: " + numeroUtente + " è pari");
}
else{
    console.log("Il numero: " + numeroUtente + " è dispari");
};

console.groupEnd();
*/
//ESERCIZIO 24
/*
console.group("I GIORNI DEL MESE");

let meseUtente = prompt("Inserisci un mese");
let meseUtenteAz = meseUtente.toLowerCase() 

switch(meseUtenteAz){
    case "gennaio":
    console.log(meseUtente + " ha 31 giorni")
    break;
    case "febbraio":
    console.log(meseUtente + " ha 28 giorni")
    break;
    case "marzo":
    console.log(meseUtente + " ha 31 giorni")
    break;
    case "aprile":
    console.log(meseUtente + " ha 30 giorni")
    break;
    case "maggio":
    console.log(meseUtente + " ha 31 giorni")
    break;
    case "giugno":
    console.log(meseUtente + " ha 30 giorni")
    break;
    case "luglio": 
    console.log(meseUtente + " ha 31 giorni")
    break;
    case "agosto":
    console.log(meseUtente + " ha 31 giorni")
    break;
    case "settembre":
    console.log(meseUtente + " ha 30 giorni")
    break;
    case "ottobre":
    console.log(meseUtente + " ha 31 giorni")
    break;
    case "novembre":
    console.log(meseUtente + " ha 30 giorni")
    break;
    case "dicembre":
    console.log(meseUtente + " ha 31 giorni")
    break;
    default: 
    console.log("Ooops, qualcosa è andato storto, prova ancora")
    prompt("Inserisci un mese")
}
console.groupEnd()
*/
//ESERCIZIO 25
/*
let genereRandom = prompt("Scegli un genere");
let genereRandomAz = genereRandom.toLowerCase();
switch(genereRandomAz){    
    case "fantasy":
    console.log("Le Cronache di Narnia")
    break;
    case "fantascienza":
    console.log("Interstellar")
    break;
    case "horror":
    console.log("Non aprite quella porta")
    break;
    case "animazione":
    console.log("Robin Hood")
    break;
    case "comico":
    console.log("The interview")
    break;         
};
*/

//ESERCIZIO 27

/*
let age =+ prompt("Quanti anni hai?")
if(age > 18 && age < 90){
    console.log(age + " OK!")
    let patente = prompt("Hai la patente?")
    if(patente == "si" || patente == true){
        console.log("Bravo! Hai a patente!")  
        let punti = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        console.log ("Hai " + punti + " punti")
        if(punti > 1){
            console.log("Bene! Puoi continurare a guidare!")
            let assicurazione = prompt("E l'assicurazione ce l'hai??")
            if(assicurazione == "si" || assicurazione == true){
                console.log("Bravo! Hai l'assicurazione!")
            }
            else{
                console.log("Basta! Ti porto in caserma!")
            }
        }
        else{
            console.log("Ti tocca la MULTA!!!")
        }
     }      
    else{
        console.log("Ti tocca la MULTA!!!")
    }   
}
else{
    console.log("Sei troppo giovane/vecchi* per guidare!")
}
*/
/*
//ESERCIZIO 27

let num1 = +prompt("Inserisci il primo numero");
let num2 = +prompt("Inserisci il secondo numero");
let segno = prompt("Inserisci un operatore");
switch(segno){
    case "+":
        console.log(`Il risultato è: ${num1 + num2}`)
        break;
    case "-":
        console.log(`Il risultato è: ${num1 - num2}`)
        break;
    case "*":
        console.log(`Il risultato è: ${num1 * num2}`)
        break;
    case "/":
        console.log(`Il risultato è: ${num1 / num2}`)
        break;
}
*/  
// ESERCIZIO 28


/*
let numPari
for(i = 0; i <= 50; i++){   
   numPari = (i+i)
   console.log(numPari)
}
*/

/*
for(let i = 0; i <= 10; i++){

    for(let n = 0; n <= 10; n++){
        console.log(i*n)
    }
}
*/
/*
let testo = "Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. La sezione 1.10.32 del 'de Finibus Bonorum et Malorum', scritto da Cicerone nel 45 AC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Traduzione del 1914 di H. Rackham But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? La sezione 1.10.33 del de Finibus Bonorum et Malorum, scritto da Cicerone nel 45 AC At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.Traduzione del 1914 di H. Rackham On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains";




testoLower = testo.toLowerCase();
let vowA = 0;
let vowE = 0;
let vowI = 0;
let vowO = 0;
let vowU = 0;



for(let v = 0; v < testoLower.length; v++){
    let char = testoLower.charAt(v);
    if(char === "a"){
        vowA++;
    }
    else if(char === "e"){
        vowE++
    }
    else if(char === "i"){
        vowI++
    }
    else if(char === "o"){
        vowO++
    }
    else if(char === "u"){
        vowU++
    }
}
let totCount = vowA+vowE+vowI+vowO+vowU;
console.log("Le a sono: " + vowA);
console.log("Le e sono: " + vowE);
console.log("Le i sono: " + vowI);
console.log("Le o sono: " + vowO);
console.log("Le u sono: " + vowU);
console.log("Totale vocali: " + totCount);

*/ 