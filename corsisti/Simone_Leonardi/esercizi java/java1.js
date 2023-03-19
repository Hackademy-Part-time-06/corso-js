/*
Esercizio 8

let numero1 = 10;
let numero2 = 20;
let numero3 = 35;
let numero4 = 50;
let numero5 = 70;

let somma = numero1 + numero2 + numero3 + numero4 + numero5;
console.log(somma);

let media = somma / 5; 
console.log(media);

//Esercizio 9

let number = prompt("numero1");
let number2= prompt("numero2");
let number3= prompt("numero3");
let number4= prompt("numero3");
let number5= prompt("numero5");

number  =Number(number);
number2 =Number(number2);
number3 =Number(number3);
number4 =Number(number4);
number5 =Number(number5);

let somma1 = number + number2 + number3 + number4 + number5;
let media1 = somma1 / 5;

console.log(somma1,media1);


//Esercizio 10


let annoCorrente =  prompt("Inserisci anno corrente");
let annoNascita = prompt("Inserisci anno di nascita");
let numeroCento = 100;

annoCorrente =  Number(annoCorrente);
annoDiNascita = Number(annoNascita);

let età = annoCorrente-annoNascita;
let rimanenza= numeroCento - età;

console.log(età);
console.log(rimanenza);
*/

//Scrivi un programma che dato un nome in input, converta solo la prima lettera in maiuscolo  -Esercizio 11

/*
var name = "simone";
const capitalize1 = name => name.charAt(0).toUpperCase() + name.slice(1);
let result = capitalize1(name);
console.log(result);


//Scrivi un programma che dato un numero di telefono (di 10 cifre) in input, offuschi tutte le cifre, sostituendole con l'asterisco (*), e lasci visibili solo le ultime 3. Esercizio 12

let telefono = "1234567890";
let parziale = telefono.slice(0,7);
let oscurato = parziale.replace("1234567","*******") + telefono.slice(7,11);
console.log(oscurato);

//Scrivi un programma che dati 5 numeri restituisca in output il numero minore ed il numero maggiore- Esercizio 13 BONUS


let numero1 = 1;
let numero2 = 2;
let numero3 = 3;
let numero4 = 4;
let numero5 = 5;

let max= Math.max(numero1,numero2,numero3,numero4,numero5);
let min= Math.min(numero1,numero2,numero3,numero4,numero5);

console.log(max,min);


//Esercizio 14 Scrivi un programma che sommati i seguenti 2 numeri: 0.1   0.2 restituisca il risultato corretto, ossia:  0.3

let n1 = 0.1;
let n2 = 0.2;
let somma = n1 + n2;
let right = (n1 + n2).toFixed(1);
console.log(right);

//Esercizio15 Scrivi un programma che generi un numero intero randomico da 1 a 6

let nu = Math.random()*6;
let nu1 = Math.round(n);
console.log(nu1);

* Esercizio 16 - BONUS 
    Scrivi un programma che dato: 
    - Un numero totale di gatti 
    - Il numero dei gatti presenti in ogni fila 
    Restituisca in output: 
    - Il numero di gatti totali
    - il numero di gatti mancanti per completare una nuova fila



    let gattiTot = 44;
    let gattiInFila = 6;
    
    let fileTotali = Math.floor(gattiTot / gattiInFila);
    let gattiSenzaFila = gattiTot % fileTotali;
    
    console.log("Es 16 | file di gatti tot", fileTotali);
    console.log("Es 16 | gatti senza fila", gattiSenzaFila);
   */  

/*Esercizio 23
Scrivi un programma che passato un numero in input controlli che sia pari o dispari


let numero = prompt("Inserisci un numero");

numero = +numero;

if (numero % 2 === 0) {
       alert("Numero pari");
}
else {
       alert("Numero dispari");
}
*/

/* Esercizio 24
Scrivi un programma che passato un mese ritorni i giorni presenti in quel mese
*/

/*
let mese = prompt("Inserisci mese");

if (mese ==="aprile" || mese ==="giugno" || mese ==="settembre" || mese === "Novembre") {
    alert("30");
}

else if (mese === "gennaio" || mese ==="marzo" || mese ==="maggio" || mese ==="luglio" ||  mese ==="ottobre" || mese ==="dicembre") {
    alert("31");
}

else if (mese ==="febbraio") {
    alert("28");
}

else {
    alert("Carattere non valido");
}

*/

/*Esercizio 25
Scrivi un programma che passata una categoria in input (fantasy, fantascienza, animazione, ecc…) ti suggerisca il titolo di un film:
es: categoria: “fantasy” -> film suggerito: “il signore degli anelli
*/
/*
let genereFilm = prompt("Inserisci il film");
let genereFilmGenere = genereFilm.toLowerCase;

switch (genereFilmGenere) {
    case "Anime":
        console.log("Anime suggerito: One Piece")
        break;

        case "Fantascienza":
            console.log("Film fantascienza suggerito: Avatar")
            break;

            case "Azione":
            console.log("Film azione suggerito: Io sono leggenda")
            break;
}
*/

/*Esercizio 26
Il posto di blocco!
Scrivi un programma che simuli un posto di blocco
Chiedi al conducente età, patente ed assicurazione. 
Controlla anche quanti punti ha (fai generare un numero randomico da 0 a 20). 
Se tutti i controlli son rispettati lascialo andare, altrimenti ti tocca fargli la multa (o chiudi un occhio!).
Gestisci più casistiche possibili!
*/
/*
let age = prompt("Inserisci la tua età");
age = +age ;
let license = prompt("Hai la patente?");
let insurance = prompt("Hai l'assicurazione?");
let points = Math.floor(Math.random()*20)+1;

alert("Hai un numero di punti pari a :" + ""+ points);

if (age >=18 && license ==="si" && insurance ==="si" && points>10) {
       alert("Puoi andare!")
}

else {
    alert("Ce sta o mare for")
}
*/



/*
Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.


        Esempi:
        Input: n = 2, m = 3
        Output: FALSE
        Input: n = 2, m = '2'
        Output: FALSE
        Input: n = 2, m = 2
        Output: TRUE
        */
     /*  
    function argomenti (n, m){
    if (n === m) {
        let risultato = true;
        console.log(`Il risultato è ${risultato}`);
         return risultato
    }
    else {
        let risultato = false;
        console.log(`Il risultato è ${risultato}`);
        return risultato
         }
        
}

argomenti = (1,2)
argomenti = (1,"1")
argomenti = (1,1)
*/

/*
Esercizio 32

Scrivi una funzione che prenda in input una stringa e la restituisca capovolta
*/
/*
function alcontrario(parola) {
    let parolaSeparata = parola.split("");
    let parolaAlContrario = parolaSeparata.reverse ();
    let parolaUnita = parolaAlContrario.join("");
    console.log(parolaUnita);
    return parolaInversa
}
alcontrario("Simone Leonardi")
*/
/*
Esercizio 33

Scrivi una funzione che si occupi di generare un numero randomico da 1 a N e lo restituisca
*/
/*
function numeroaCaso(numeroMax) {
    let numeroaCaso1 = Math.floor(Math.random ()*(numeroMax-1+1)+1);
    return numeroRandomico  
}

console.log(random(100));
*/

/*Esercizio 34

Simula una partita a dadi:
Scrivi una funzione che si occupi di lanciare i dadi (usa la funzione creata nell’esercizio precedente) un numero di volte che verrà definito tramite parametro passato in input.
Una volta lanciati i dadi controlla chi ha vinto (vince chi lancia il numero più alto).
*/
/*
function lancioDadi (numerodiLanci) {
    let totaleutente1 = 0;
    let totaleutente2 = 0;

    for (let i=0; i< numerodiLanci; i++) {
        let punteggioDadoUtente1 = random(6);
        totUtente1 = totUtente1 + punteggioDadoUtente1;
        let punteggioDadoUtente2 = random(6);
        totUtente2 = totUtente2 + punteggioDadoUtente2;
    }

    if (totaleutente1 > totaleutente2) {
        alert("Utente 1 ha vinto!")
    }

    else if (totaleutente1 < totaleutente2) {
        alert("Utente 2 ha vinto!")
    }
    
    else {
        alert("Pari!")
    }
    }

    lancioDadi(10);
*/

    /*Esercizio 35

Calcola il voto del giocatore a fantacalcio
scrivi una funzione che prende in input i seguenti parametri numerici:


- baseVoto
- golFatti
- assistEffettuati
- autogol
- ammonizione
- espulsione

calcola il voto finale di un giocatore tenendo conto delle seguenti regole:


- + 3 punti: per ogni gol fatto 
- + 1 punto: per ogni assist effettuato
- - 2 punti: per ogni autogol fatto
- - 1 punto: per ogni ammonizione
- - 2 punti: per ogni espulsione

esempio:


        Gino Van Der Gini: 
        - baseVoto: 8
        - golFatti: 2
        - assistEffettuati: 1
        - autogol: 0
        - ammonizione: 1
        - espulsione: 0
        
        - Risultato: 14


function calcolaVotoFantacalcio(baseVoto, golFatti=0, assist=0, autogol=0, ammonizioni=0, espulsione=0) {
    
    return baseVoto + (golFatti * 3) + assist + (autogol * -2) + (ammonizioni * -1) + (espulsione * -2);
}
calcolaVotoFantacalcio(8, 2, 1, 0, 1, 0);


Esercizio 37

Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

    Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]

Variante:
Dopo averli ordinati in ordine decrescente ordinali in ordine crescente



let numeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

numeri.sort(function(a,b){
    return a-b
})

console.log(numeri);


Esercizio 38

Scrivi un programma che dati:

- 2 array di 10 elementi interi casuali compresi tra 1 e 10,
- il tipo di operazione aritmetica da effettuar tra una delle seguenti:
- addizione
- sottrazione
- moltiplicazione
- divisione

Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

    Esempio:
    Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15]


function sommaArray(lista1,lista2,operazione) {
    let risultato = []
    
    for (let i = 0; i < lista1.lenght; i++);
    let risultatoOperazione
    switch (operazione) {
        case "addizione":
            risultatoOperazione = lista1[i] + lista2 [i];
            break;
            case "sottrazione":
            risultatoOperazione = lista1[i] - lista2 [i];
            break;
            case "divisione":
            risultatoOperazione = lista1[i] / lista2 [i];
            break;
            case "moltiplicazione":
            risultatoOperazione = lista1[i] * lista2 [i];
            break;
            risultato.push(risultatoOperazione);
    }

return risultato;

}
/*
Esercizio 46

Scrivi una funzione che, data una frase, ritorni la prima lettera di ogni parola presente nella frase:
es: 
input: “Ciao sono un esercizio sui metodi avanzati degli array” 
output: Csuesmada


let frase = "Ciao a tutti ragazzi"
let fraseDivisa = frase.split(" ");
console.log(fraseDivisa);

let iniziali = fraseDivisa.map(function(elemento,parola) {
elemento = elemento.charAt(0);
return elemento;
})

let iniziali1= iniziali.join("");
console.log(iniziali1);
*/

/*Esercizio 47

Scrivi una funzione crei un unico array unendo gli array innestati
   es:
     input:
     [

         ["abc", "gino", "aaa"],
         ["abc", "dino", 123],
         ["aaa", "gino", 321],
         ["xyz", "klm", "aaa"],

     ]
     
     output

        ["abc", "gino", "aaa", "abc", "dino", 123, "aaa", "gino", 321, "xyz", "klm", "aaa”]
*/
/*
let listaArray = [

    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]

let unione = listaArray.reduce(function(risultatoFinale,elemento){
    risultatoFinale = risultatoFinale.concat(elemento)
    return risultatoFinale;
})

console.log(unione);
*/

/*Esercizio 48

Scrivi una funzione che, dato un array di numeri, ritorni la somma dei numeri divisibili per 2:
es: 
input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
output: 2 + 4 + 6 + 8 = 20


let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let inputFiltrato = input.filter(function(numero){
    return numero % 2 === 0
})

console.log (inputFiltrato);

let totale = inputFiltrato.reduce(function(risultatoFinale,numero){
    return risultatoFinale + numero;
    
})

console.log(totale);

*/

//Esercizio 38 Array Avanzati Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7],
/*
function sommaArray(a,b,operazione) {
  let risultatoFinale = a.map(function(numero,index){
    let risultatoOperazione
    switch (operazione) {
        case "addizione":
            risultatoOperazione = numero + b [index];
            break;
            case "sottrazione":
            risultatoOperazione = numero - b [index];
            break;
            case "divisione":
            risultatoOperazione = numero / b [index];
            break;
            case "moltiplicazione":
            risultatoOperazione = numero * b [index];
            break;
    }
    return risultatoOperazione;
  })
console.log (risultatoFinale);
} 

sommaArray([3, 7, 2, 5, 8],[9, 3, 1, 4, 7],"addizione");
sommaArray([3, 7, 2, 5, 8],[9, 3, 1, 4, 7],"sottrazione");
sommaArray([3, 7, 2, 5, 8],[9, 3, 1, 4, 7],"divisione");
sommaArray([3, 7, 2, 5, 8],[9, 3, 1, 4, 7],"moltiplicazione");
*/

//Esercizio 39 Array avanzati
/*
Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

Esempio:
Input: a = [3, 5, 10, 2, 8]
Output: media = 5.6, valori minori = [3, 5, 2]
*/

/*
function mediaFinale (listaNumeri) {
  let media = listaNumeri.reduce(function(somma,numeri){
    somma = somma + numeri;
    return somma;
  })
  risultatoMedia = media / listaNumeri.length;
  console.log(risultatoMedia);
  
  let valoriMinori = listaNumeri.filter(function(numeri){
    return numeri < risultatoMedia ;
  })
  console.log(valoriMinori); 
}
mediaFinale([3, 5, 10, 2, 8]);
*/

/*Esercizio 40

Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore.-
([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]


function numeriDivisibili(numeri,divisore){
   let divisione = numeri.filter(function(elementi){
    return elementi % divisore === 0 ; 
   })
   console.log(divisione);
}

numeriDivisibili([1, 2, 3, 4, 5, 6],2);
*/

/*Esercizio 42

Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi.
Nota: se non c'è nulla da sommare, la somma è predefinita a 0.
sumPositives([1,-4,7,12]) ---> 1 + 7 + 12 = 20
sumPositives([-1,-4,-7,-12]) ---> = 0

function sommaNumeriPositivi(listaNumeri) {
  let numeriPositivi = listaNumeri.filter(function(elementi){
    return elementi > 0 ;
  })
  console.log(numeriPositivi);


    sommaFinale = numeriPositivi.reduce(function(somma,numeri){
    somma = somma + numeri;
    return somma;
  })
  console.log(sommaFinale);
}

sommaNumeriPositivi([1,-4,7,12]);



Esercizio 43

Dato un array di numeri interi, creare una funzione che restituisca un nuovo array con ogni valore raddoppiato.
double([1, 2, 3]) --> [2, 4, 6]


function valoreDoppio(listaNumeri) {
  let lista = listaNumeri.map(function(numero){
    return numero * 2;
  })
  console.log (lista);
}

valoreDoppio([1, 2, 3]);
*/

/*
//Esercizio Esercizio 49

Definisci un oggetto playlist che contiene una proprietà canzoni.
Inserisci una o 2 canzoni e ciascuna deve avere le seguenti proprietà:
titolo
nomeCantante
anno

Dopo prevedi la possibilità di far inserire all’utente delle nuove canzoni.
Ad ogni canzone inserita stampa in console tutte le canzoni



let playlist = {
    canzoni : [
        {
         titolo:"Fuori dal tunnel",
         artista: "Caparezza",
         anno: "2006"  
},
        {
            titolo:"What I've done",
            artista: "Linkin Park",
            anno: "2007" 
},
        ],
        aggiungiCanzone: function (titolo,artista,anno){
            this.canzoni.push(
                {
                    titolo : titolo,
                    artista: artista,
                    annoUscita: anno
                }
            )
            this.canzoni.forEachfunction(titolo => {
            console.log (titolo,artista,annoUscita)
            })
        }
            
};



let titolo = prompt("Inserisci un titolo");
let artista = prompt("Inserisci un'artista");
let annoUsccita = prompt("Inserisci l'anno di uscita");
*/

/*Esercizio 50

Definisci un oggetto rubrica che ha come proprietà gli utenti. Per ogni utente specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).
Quindi popolare la rubrica con dei dati a piacere. 
Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.
*/
/*
let rubrica = {
    utenti : [
        {
            nome: "Gianpippo",
            cognome: "Pippone",
            telefono: "3468795865",
            indirizzo: {
                via: "Via dei Pini",
                città: "Milano",
                regione:"Lombardia",
                cap:"95030",
            }
         
        }
    ]
}

delete rubrica.utenti[1].cognome;

console.log(rubrica);
*/


/*Esercizio 51

Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili. 
Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca
*/
/*
let garage = {
    automobili : [
     {
        brand: "Mercedes",
        model: "SLK",
     },
     {
        brand : "Lamborghini",
        model : "Gallardo",
     },
     {
        brand : "Ferrari",
        model : "Coupe",
     },
    ],
        modelliStampati: function (){
        let marcaScelta = prompt("Scegli la marca");
        let autoPerMarca = this.auto.filter((automobile)=>{
            return automobile.brand === marcaScelta;
        })
        return autoPerMarca;
        }
    }

    console.log(garage.modelliStampati());
    */

    /*Esercizio 52

Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere una lista di giocatori che saranno formati dalle proprietà, nome e punteggi

Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita 


let bowling = {
    giocatori : [
        {
            nome: "Gianluigi",
            punteggio : [3,6,10],
        },
        {
            nome: "Salvo",
            punteggio :[3,8,15],
        },
        {
            nome: "Simone",
            punteggio: [2,7,12],
        },
        {
            nome: "Paolo",
            punteggio: [4,5,11],
        },
    ],

    sommaVincitore: function() {
        this.giocatori.forEach((giocatore)=> {
            console.log (giocatore);
            let totale = giocatore.punteggi.reduce((tot,numero)=> {
                return tot+=numero
            }
        })
        
        
       
    }
}
//Esercizio 57

/*Scrivi un programma che aggiunga ad una pagina html, senza contenuti testuali, i seguenti tag coi relativi contenuti:

    
    - h1: Libreria
    - h2: La mia libreria!
    - img: un’immagine a vostra scelta
    

    let h1 = document.createElement("h1");
    console.log ("Mio nuovo elemento h1",h1);

    h1.innerText = "Libreria";
    document.body.append(h1);
    //Parte 1 : inserisco un h1 con .createElement

    let h2 = document.createElement("h2");

    h2.innerText = "La mia libreria!";
    document.body.append(h2);

   let img = document.createElement("img");
   img.setAttribute("src","https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515303_10059.png");
   document.body.append(img);
   */
//Esercizio 57
/*
Scrivi un programma che aggiunga un link ad una pagina html. Questo link dovrà avere come testo “Cerca su Google” e deve aprire su un’altra finestra la pagina di ricerca di google


let sito = document.createElement("a");
sito.setAttribute("href","https://www.google.it/");
sito.setAttribute("target","_blank");
sito.innerText = "Ricerca su Google";
document.body.append(sito);
*/

//Esercizio 58
/*
Esercizio 58

Scrivi un programma che aggiunga nella pagina, creata nell’esercizio 33, i seguenti testi con le seguenti caratteristiche

- testo 1:
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


    caratteristiche: 
        font size: 18px
        font weight: bold
        color: red
        
- testo 2: 
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


    caratteristiche: 
        font style: italic
        tutto maiuscolo
        colore: verde


- testo 3:
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    
    caratteristiche: 
        - colore: grigio


let div1 = document.createElement("div2");
div1.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
document.body.append(div1);

div1.style.color = "red";
div1.style.fontSize = "18px";
div1.style.fontWeight = "bold";

let div2 = document.createElement("div2");
div2.innerText = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
document.body.append(div2);

div2.style.fontStyle = "italic";
div2.style.color = "green";
div2.style.textTransform = "uppercase";

let div3 = document.createElement("div3");
div3.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
document.body.append(div3);

div3.style.color = "grey";
*/

//Esercizio 59

/*
const libri = [
    {
            titolo: "Il Signore degli Anelli",
            autore: "Tolkien",
            categoria: "fantasy"
    },
    {
            titolo: "Harry Potter",
            autore: "Rowling",
            categoria: "fantasy",
    },
    {
            titolo: "Il Conte di Montecristo",
            autore: "Dumas",
            categoria: "narrativa classica"
    },
    {
            titolo: "Dune",
            autore: "Herbert",
            categoria: "fantascienza"
    },
    {
            titolo: "Fight Club",
            autore: "Palahniuk",
            categoria: "narrativa moderna"
    }
  ]

let lista = document.createElement("ul");
lista.innerText = "lista Libri";
document.body.append(lista);

let libroSingolo = libri.forEach(function(tuttiiLibri){
        for (let key in tuttiiLibri){
                let li = document.createElement("li");
                li.innerHTML = `<strong>${key}</strong> : ${tuttiiLibri[key]}`;
                lista.append(li);
        }
})
*/
