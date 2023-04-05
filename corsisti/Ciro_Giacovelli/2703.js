//Esercizio 72------------------------------------------------
/*Dati i seguenti tag html:

- <div id=”dado”></div>
- <button id=”lancia-dado”>Lancia dado</button>

al click del bottone genera un numero casuale da 1 a 6 ed inserisci l’output nel div dado.*/
console.group("Esercizio 72")
//STEP1=> copio il div ed il button nell'HTML, questo attiverà un bottone nel broswer

//STEP2=> richiamo gli elementi dell'HTML con il getElement
let dado = document.getElementById("dado");
let lancioIlDado = document.getElementById("lancia-dado");

/*l'esercizio mi chiede un numero casuale, quindi userò il mat.floor, all'interno di un evento che devo comporre, quindi:*/

//STEP3=> costruisco l'evento
lancioIlDado.addEventListener("click", function (evento) {
    console.log("Lancio i dadi!")//inserendo in console posso vedere nella console ad ogni tiro un badge che mi indica quante volte sto lanciando, provalo!
    let numeroRandomico = Math.floor(Math.random() * (6 - 1 + 1)) + 1;// questa non la capirai mai, è solo un dogma
    dado.innerText = numeroRandomico;//questo innerText inserisce nel browser il numero randomico che risulta ogni qual volta si lanciano i dadi
});

console.groupEnd();

//Esercizio 73------------------------------------------------
console.group("Esercizio 73")
/*Dato il seguente tag html:

- <a href=”https://www.google.it/”>Cerca su google</a>

fai in modo che ogni volta che un utente clicca sul link, invece di andare nella pagina di ricerca di google, appaia un alert con un qualsiasi messaggio. Solo dopo il terzo click sul link, verrà eseguito il suo naturale comportamento cambiando pagina.*/

//STEP1=> anche questa volta incollo l'anchor nell'html

//STEP2=> richiamo l'anchor altrimenti non posso lavorarci su
let anchorDaSelezionare = document.querySelector("a");
//scelgo un querySelector piuttosto che un getElementsByTagName

/*ragionamento: "SE" l'utente clicca meno di tre volte, compare un alert, allora useremo un "if"*/

let cliccamiSino3Volte = 0;
//che dovessi dichiarare che il click dovesse partire da 0, l'ho capito mentre laviravo nella funzione

anchorDaSelezionare.addEventListener("click", function (evento) {
    cliccamiSino3Volte++//come usare i++, devo incrementare da 0 a 3
    if (cliccamiSino3Volte <= 3) {
        evento.preventDefault()//preventDefault comunica alla funzione che dopo l'esecuzione della condizione <=3 questa deve saltare dentro la pagina.
        alert("Cliccami almeno tre volte, oh please!")
    }
})

console.groupEnd();


console.group("Esercizio 73")
//STEP1==> La consegna dice "crea un programma", questo vuol dire che in primis devo infilare i libri dentro una funzione (e già partiamo male, Nicolaaaaaaaa, ma perchè fai ste cose?)
function creoProgrammaPerLista() {
    //NB NB NB, Alice se non metti in calce fuori dalla funzione creoProgrammaPerLista(), non si vedrà NULLA di ciò che stai facendo e ti sentirai una fallita, la funzione dopo che viene innestata, va sempre RICHIAMATA ALL'ESTERNO

    const libri = [
        {
            titolo: "Il Signore degli Anelli",
            autore: "Tolkien",
            categoria: "fantasy",
        },
        {
            titolo: "Harry Potter",
            autore: "Rowling",
            categoria: "fantasy",
        },
        {
            titolo: "Il Conte di Montecristo",
            autore: "Dumas",
            categoria: "narrativa classica",
        },
        {
            titolo: "Dune",
            autore: "Herbert",
            categoria: "fantascienza",
        },
        {
            titolo: "Fight Club",
            autore: "Palahniuk",
            categoria: "narrativa moderna",
        }
    ];
    //STEP=> (lo leggerai dopo perchè è qui), crea un contenitore dove possa muoversi l'effetto capture e bubbling

    let contenitoreTargetLibri = document.getElementById("ContenitoreTargetLibri");//l'ho messo direttamente nell'html, non ho voglia di crearlo da js
    document.body.append(contenitoreTargetLibri)
    //appendi l'ul a questo contenitore


    //STEP2=> per "rivelare" la lista come negli esercizi passati, avrò bisogno di un ciclo for oppure ForEach.
    //A sua volta, all'interno di esso devo creare un li ed un button ("Ogni titolo avrà al suo fianco un bottone"); il tutto è ovviamente agganciato ad un ul che farò fuori dal forEach perchè ovviamente non devo iterarlo uno per uno.

    let ulPerLista = document.createElement("ul");
    ulPerLista.innerText = "Lista di libri";
    contenitoreTargetLibri.append(ulPerLista);//vedi step4

    libri.forEach(function (singoloLibro) {
        //creo il li da "appendere" all'ul
        let liPerTitolo = document.createElement("li");
        //creo anche il bottone per aggiungere il libro ai preferiti
        let bottoneLibroPreferito = document.createElement("button");

        liPerTitolo.innerText = `${singoloLibro.titolo}, ${singoloLibro.autore}, ${singoloLibro.categoria} `;
        //la consegna chiedeva solo il titolo, ma per mero esercizio stilistico, uso il backtick per accogliere anche l'autore la categoria con delle virgole di separazione
        //in alternativa avrebbe dovuto solo essere: liPerTitolo.innerText = singoloLibro.titolo
        bottoneLibroPreferito.innerText = "Aggiungi a preferiti"

        ulPerLista.append(liPerTitolo)

        liPerTitolo.append(bottoneLibroPreferito)
        //Nota bene che hai un bellissimo bottone che al click non aggiunge nulla ai preferiti, quindi attiviamolo

        //STEP3=> attiviamo il bottone con "target" perchè, come nell'esercizio del new che compariva se l'utente nuovo era true, anche qui SE "if" il lubro viene messo nei preferiti allora verrà emesso un alert.
        //Il TARGET si prenderà la briga di "tracciare/targhettizzare" quelli messi tra i preferiti.


        contenitoreTargetLibri.addEventListener("click", function (eventoScatenante) {
            if (eventoScatenante.target === bottoneLibroPreferito) {
                alert(`Il libro "${singoloLibro.titolo}" è stato aggiunto ai preferiti, se sei arrivato a questo punto sei sopravvissuto agli JavaScript Hunger Games!`)
            }
        })
    })
}
creoProgrammaPerLista()
console.groupEnd();