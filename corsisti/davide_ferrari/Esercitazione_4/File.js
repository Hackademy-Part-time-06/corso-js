//ESERCIZIO 23

/* programma che controlla se il numero pari o dispari  numero 23*/
/*
let number ;
number= prompt("enter a number :");
if (number % 2 == 0) {
    console.log(number + "pari");

}else {
    console.log(number + "dispari");
}
*/

// ESERCIZIO 24

// Scrivi un programma che passato un mese ritorni i giorni presenti in quel mese

/*
let mese_Corrente = prompt("Mese corrente");


if (mese_Corrente === "Gennaio") {
                                    alert("Giorni del mese: " + 31);    
                                }
else if (mese_Corrente === "Febbraio") {
                                            alert("Giorni del mese: " + 28);
}
else if (mese_Corrente === "Marzo") {
    alert("Giorni del mese: " + 31);
}
else if (mese_Corrente === "Aprile") {
    alert("Giorni del mese: " + 30);
}
else if (mese_Corrente === "Maggio") {
    alert("Giorni del mese: " + 31);
}
else if (mese_Corrente === "Giugno") {
    alert("Giorni del mese: " + 30);
}
else if (mese_Corrente === "Luglio") {
    alert("Giorni del mese: " + 31);
}
else if (mese_Corrente === "Agosto") {
    alert("Giorni del mese: " + 31);
}
else if (mese_Corrente === "Settembre") {
    alert("Giorni del mese: " + 30);
}
else if (mese_Corrente === "Ottobre") {
    alert("Giorni del mese: " + 31);
}
else if (mese_Corrente === "Novembre") {
    alert("Giorni del mese: " + 30);
}
else if (mese_Corrente === "Dicembre") {
    alert("Giorni del mese: " + 31);
}
else {
        alert("Giorno del mese non definito");
} 
*/

// ESERCIZIO 25

// Scrivi un programma che passata una categoria in input (fantasy, fantascienza, animazione, ecc…) ti suggerisca il titolo di un film:
// es: categoria: “fantasy” -> film suggerito: “il signore degli anelli”

/* 
let genereFilm_Inserito = prompt("Inserisci il titolo di un film:")

switch (genereFilm_Inserito)
{
case "Fantasy": 
                                            console.log("Signore degli anelli");
                                            console.log("Harry Potter");
                                            console.log("Il mago di Oz");
                                        break;
case "Azione":
                                                console.log("Top gun");
                                                console.log("Mission impossible");
                                                console.log("007: Quantum of Solace");
                                        break;
case "Commedia":
                                            console.log("Scary Movie");
                                            console.log("Yesman");
                                            console.log("Cambia la tua vita con un click!");
                                    break;
case "Thriller":
                                        console.log("Die Hard");
                                        console.log("Armageddon");
                                        console.log("2012");
                                break;
default:
    console.log("Nessun genere inserito correttamente.");
    break;
}
*/

// ESERCIZIO 26

/* 
Il posto di blocco!
Scrivi un programma che simuli un posto di blocco
Chiedi al conducente età, patente ed assicurazione. 
Controlla anche quanti punti ha (fai generare un numero randomico da 0 a 20). 
Se tutti i controlli son rispettati lascialo andare, altrimenti ti tocca fargli la multa (o chiudi un occhio!).
Gestisci più casistiche possibili! 
*/

/*

// STABILIRE RISULTATO FINALE
let Esito_Positivo = "Può andare, buona giornata!";
let Esito_Negativo = "Le tocca una multa parecchio salata, signor Ferrari!";
let Esito_Neutro = "Se ne vada immediatamente, prima che cambio idea e le faccio una bella multa!";

// STABILIRE LE CONDIZIONI DA RISPETTARE
let conducente_Età = prompt("Ci fornisca la sua età.");
let Età_MinimaNecessaria = false;
let conducente_Patente = prompt("Ha la patente con sé?");
let Patente_Posseduta = false;
let conducente_Assicurazione = prompt("La sua assicurazione è valida?");
let Assicurazione_Posseduta = false;
let conducente_PuntiPatente = prompt("Quanti punti sono presenti sulla sua patente?")
let Punti_Necessari = false;

// STABILIRE COME RISPETTARE OGNI CONDIZIONI


if (conducente_Età >= 18)   {
                                Età_MinimaNecessaria = true;
                                console.log(Età_MinimaNecessaria);
                            
                                if  (conducente_Patente === "Sì")   {
                                    Patente_Posseduta = true;
                                    console.log(Patente_Posseduta);
                                }
                                else                                {
                                console.log(Esito_Negativo);
}
if (conducente_Assicurazione === "Sì")  {
                                        Assicurazione_Posseduta = true;
                                        console.log(Assicurazione_Posseduta);
                                    }
else                                {
                                    console.log(Esito_Negativo);
                                }
if (conducente_PuntiPatente <= 20 && conducente_PuntiPatente > 0)   {
                                                                    Punti_Necessari = true;
                                                                    console.log(Punti_Necessari);
                                                                    console.log(Esito_Positivo);
                                                                }
                                                            }
else                                                                {
                                                                    console.log(Esito_Negativo);
                                                                }


*/

// STABILIRE COME RISPETTARE TUTTE LE CONDIZIONI INSIEME

// ESERCIZIO 27

/*
Calcolatrice!!
Crea un programma che simuli una calcolatrice!!
Chiedi all’utente di inserire 2 numeri ed un simbolo matematico ed esegui l’operazione corrispondente
        es: 

          input1: 10
          input2: 20
          input3: +

        
          risultato: 10 + 20 = 30
*/
let numero_1 = prompt("Inserisci il primo numero:");
numero_1 = +numero_1;
let numero_2 = prompt("Inserisci il secondo numero");
numero_2 = +numero_2;
let simboloMatematico = prompt("Inserisci un simbolo matematico");
simboloMatematico = prompt("");
let risultato = numero_1 + simboloMatematico + numero_2;
console.log(risultato);






