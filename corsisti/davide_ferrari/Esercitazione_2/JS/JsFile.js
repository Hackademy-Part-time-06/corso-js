// ESERCIZIO 8
let piccolo = 10;
let medio_piccolo = 20;
let medio = 35;
let medio_alto = 50;
let alto = 70;

console.log(piccolo + medio_piccolo + medio + medio_alto + alto); // OUTPUT SOMMA
console.log((piccolo + medio_piccolo + medio + medio_alto + alto) / 5); // OUTPUT MEDIA

let somma = piccolo + medio_piccolo + medio + medio_alto + alto;
console.log(somma); // OUTPUT SOMMA ALTERNATIVO
let media = ((piccolo + medio_piccolo + medio_piccolo + medio + medio_alto + alto) / '5');
console.log(media); // OUTPUT MEDIA ALTERNATIVO   N O N   F U N Z I O N A N T E


// ESERCIZIO 9

/*
let primoValore; 
let secondoValore;
let terzoValore;
let quartoValore;
let quintoValore;

primoValore = Number(prompt('first value'));
secondoValore = Number(prompt('second value'));
terzoValore = Number(prompt('third value'));
quartoValore = Number(prompt('fourth value'));
quintoValore = Number(prompt('fifth value'));



console.log(primoValore + secondoValore + terzoValore + quartoValore + quintoValore); // OUTPUT SOMMA MEDIANTE I PROMPT
console.log((primoValore + secondoValore + terzoValore + quartoValore + quintoValore) / 5); // OUTPUT MEDIA MEDIANTE I PROMPT
*/ 

// ESERCIZIO 10

/*
let annoCorrente = 2023;
let annoDiNascita = 1996;
let età = annoCorrente - annoDiNascita;
let anniMancanti = 100 - età;
alert(età);                 // OUTPUT ETA' ATTUALE
alert(anniMancanti);        // OUTPUT ANNI MANCANTI
*/

// ESERCIZIO 11

let parola = 'bambinone';
let parolaMaiuscola = parola.toLocaleUpperCase();
let parolaMaiuscola1 = parolaMaiuscola.slice(0,1);
console.log(parolaMaiuscola);
console.log(parolaMaiuscola1);

// ESERCIZIO 12

let numeretto = '349666666';
console.log(numeretto);
let numeroOffuscato = numeretto.replace('349666666', '******666');
console.log(numeroOffuscato);

// ESERCIZIO 13

let listaNumeri = Array(50, 25, 10, 70, 3);
let lunghezza = listaNumeri.length;
let maggiore = listaNumeri[0];
for (i=1;i<lunghezza;i++) {
	if (listaNumeri[i]>maggiore) {
		maggiore = listaNumeri[i]
	}
}
console.log(+maggiore);

// ESERCIZIO 14

let totale = 0.1 + 0.2;
console.log(totale);
let arrotondamento = totale.toFixed(2);