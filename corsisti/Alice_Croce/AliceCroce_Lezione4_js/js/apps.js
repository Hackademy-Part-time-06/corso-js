// Esercizio 23

/*let num = +prompt("Inserisci un numero");

if (num % 2 == 0) {
    alert("Il numero è pari!");
}
else {
    alert("Il numerno è dispari!")
}*/

//Esercizio 24
/*let month = prompt("Inserisci un mese dell'anno")

switch (month) {
    case "gennaio":
        alert("31 giorni");
        break;
    case "febbraio":
        alert("28 giorni");
        break;
    case "marzo":
        alert("31 giorni");
        break;
    case "aprile":
        alert("30 giorni");
        break;
    case "maggio":
        alert("31 giorni");
        break;
    case "giugno":
        alert("30 giorni");
        break;
    case "luglio":
        alert("31 giorni");
        break;
    case "agosto":
        alert("31 giorni");
        break;
    case "settembre":
        alert("30 giorni");
        break;
    case "ottobre":
        alert("31 giorni");
        break;
    case "novembre":
        alert("30 giorni");
        break;
    case "dicembre":
        alert("31 giorni");
        break;
}*/

//Esercizio 25

/*let movieCategory = prompt("Inserisci la categoria per visionare i film disponibili");

if (movieCategory == "Fantasy") {
    alert("2001 Odissea nello spazio!");
}
else if (movieCategory == "Teen drama"){
    alert ("17 anni e come uscirne vivi");
}
else if (movieCategory == "Thriller"){
    alert ("Secret window");
}
else {
    alert ("Un pò too much mi stai chiedendo");
}*/

//Esercizio 26

/*let age = prompt("Buongiorno, quanti anni ha? Nel frattempo prepari patente e libretto");
age = Number(age);

if (isNaN(age)) {
    alert("Non scherziamo e mi dica la sua reale età giovanotto!");
}

else {

    if (age >= 18) {

        let driveLicense = prompt("Favorisca la patente giovanotto");

        if (driveLicense == "si") {

            let driveLicensePoint = Math.floor(Math.random() * (20 - 1 + 1) + 1);
            alert("Bene, i tuoi punti patente sono:" + driveLicensePoint);

            if (driveLicensePoint >= 1) {
                let carInsurance = prompt("Favorisca il libretto");

                if (carInsurance == "si") {
                    alert("bene, ci siamo, può andare giovanotto!");
                }
    
                else  {
                    alert("E perchè allora sei alla guida? Una notte al fresco!");
                }
            }

            else {
                alert("E perchè allora sei alla guida? Una notte al fresco!");
            }


            
        }
        else {
            alert("E perchè allora sei alla guida? Una notte al fresco!");
        }
    }
    else {
        alert("E perchè allora sei alla guida? Una notte al fresco!");
    }

}*/

//Esercizio 27

/*Calcolatrice!!
Crea un programma che simuli una calcolatrice!!
Chiedi all’utente di inserire 2 numeri ed un simbolo matematico ed esegui l’operazione corrispondente
        es: 

          input1: 10
          input2: 20
          input3: +

        
          risultato: 10 + 20 = 30*/

/*let n1 = prompt("Inserisci il primo numero");
let n2 = prompt("Inserisci un secondo numero");
let symbol = prompt("Inserisci un simbolo matematico");

n1 = + n1
n2 = + n2


if (symbol == "+") {
    console.log(`Il risultato della somma è ${n1} + ${n2}`, (n1 + n2));
}
else if (symbol == "/") {
    console.log(`Il risultato della divisione è ${n1} + ${n2}`, (n1 / n2));
}*/

//Esercizio 28

/*Scrivi un programma che stampi solo i numeri pari da 1 a 100*/

for (let i = 0; i <= 100; i++) {
    let result = i % 2;
    if (result == 0) {
        console.log(i)
    }
}

