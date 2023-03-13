let name = "La parola magica è:\"bugiardo\"";
let surname = "parola";

console.log(name)
console.log(surname)

console.log("la lunghezza del nome è:", + name.length)
console.log("la lunghezza del cognome è:", + surname.length)

let nome = "Gino"
let cognome = "Rossi"
let fullname = `${nome} ${cognome}`
console.log(fullname)

let buongiorno = `Buongiorno ${nome} , ma che bella giornata`
console.log(buongiorno)

let buongiornoModerno = `Buongiorno ${fullname}, piacere di conoscerti`
console.log(buongiornoModerno)

let paroleDentroBuongiorno = buongiorno.split(" ");
console.log("Carattere singolo", buongiornoModerno.charAt(buongiornoModerno.length - 1));

let nomePerEsempio = prompt("Chi sei?");
let ultimoCarattere = "";

//per conoscere l'ultimo carattere del nome (in questo caso: scelto dall'utente) 
let lunghezzaNomePerEsempio = nomePerEsempio.length;

let posizioneUltimoCarattere = lunghezzaNomePerEsempio - 1;

ultimoCarattere = nomePerEsempio.charAt(posizioneUltimoCarattere);

console.log(`L'ultimo carattere del nome ${nomePerEsempio} è: ${ultimoCarattere}`)

let numeroIntero = 10
let numeroDecimale = 1.5;
let somma = 5 + 5;
let somma2 = numeroIntero + numeroIntero;



let numero = 5
let numeroStringa = "10"
let numeroPiùStringa = numero + numeroStringa
//Casting di una stringa come numero
let numeroStringaCastatoAdIntero = Number(numeroStringa)
//tramite Number()

let altraPossibilitàDiCasting = +numeroStringa
//tramite +

let numeroPiùStringaCastata = numero + numeroStringaCastatoAdIntero
console.log(numeroPiùStringaCastata)

//Casting di una stringa (scelta dall'utente con prompt) in numero, per poi essere sommata a 10.
let x = prompt("inserisci un numero")
x = Number(x)
let numeroSommatoPer10 = x + 10
console.log(numeroSommatoPer10)

 //Booleani
 let valoreVero = true
 let volereFalso = false
 console.log("Boolean di 20", Boolean(20));
 console.log("Boolean di 0", Boolean(0));
 console.log("Boolean di -100", Boolean(-100));
 console.log("Boolean di stringa vuota", Boolean(""));
 console.log("Boolean di stringa", Boolean("Ciao"));

//Valori privi di esistenza
let xUndefined = undefined

let xNull = null
