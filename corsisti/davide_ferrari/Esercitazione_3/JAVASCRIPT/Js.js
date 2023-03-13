// ESERCIZIO 17

/*
let v = 29; // INPUT
if (v < 18) {
                alert("Insufficiente");
            }
else if (18 <= v && v < 21)    {
                                    alert("Sufficiente");
                                }
else if (21 <= v && v < 24)     {
                                    alert("Buono");
                                }
else if (24 <= v && v < 27)     {
                                    alert("Distinto");
                                }
else if (27 <= v && v <= 29)     {
                                    alert("Ottimo");
                                }
else 
                    alert("Eccellente");
*/

// ESERCIZIO 18

/*
let numeroBase = 1;
for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase * 2);
}

for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase *3);
}

for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase * 4);
}

for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase * 5);
}

for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase * 6);
}

for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase * 7);
}

for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase * 8);
}

for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase * 9);
}

for (let numeroBase = 0; numeroBase <= 10; numeroBase++)    {
    console.log(numeroBase * 10);
}
*/

// ESERCIZIO 19

/*
let password = prompt("Digita la tua password");

if ((password.length >= 6) && (password.length <= 20)) // NUMERI CARATTERI
{
        alert("Numero di caratteri accettato");
}  
else {
        alert("Numero min: 6 caratteri; Numero max: 20 caratteri");
}
if (password.includes("!") || password.includes ("-") || password.includes ("_")) // SIMBOLI
{
        alert("Simboli correttamente inseriti");
}
else    {
            alert ("Almeno un simbolo richiesto tra \"!\", \"_\" e \"-\"");
}
if (password.includes(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)) // NUMERI
{
        alert("Numeri inclusi");
}
else {
        alert("Inserire almeno un numero.")
}

*/

// MIN. 6 CARATTERI
// MAX. 20 CARATTERI
// ALMENO UN SIMBOLO: “!”, “_”, “-”
// ALMENO UN NUMERO

// ESERCIZIO 20
let numeroInserito = prompt("Inserisci il tuo numero di telefono");
let spazio_1 = numeroInserito.charAt(3);

if  (numeroInserito = Number)  
    {
        alert("Sono stati inseriti dei numeri");
    }
else {
        alert("Abbiamo un problema.");
}
if (numeroInserito = + numeroInserito)
    {
        alert("Prefisso inserito con successo.")
    }
else    {
        alert("Prefisso inserito senza successo.")
}



