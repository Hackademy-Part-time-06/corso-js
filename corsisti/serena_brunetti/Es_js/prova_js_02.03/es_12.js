//Scrivi un programma che dato un numero di telefono (di 10 cifre) in input, offuschi tutte le cifre, sostituendole con l'asterisco (*), e lasci visibili solo le ultime 3.
let phoneNumber = prompt("Inserisci il tuo numero di telefono");
let numberVisible = phoneNumber.slice(7);
//let numberHide = phoneNumber.slice(0, 6);
let asterix = "*******"
alert(asterix+numberVisible);

/*let result= '';
for(let i=0;i<phoneNumber.length;i++)
{
    if(i<=phoneNumber.length-4){
        result += '*';
    }else{
        result += phoneNumber.charAt(i);
    }
}

alert(result)*/