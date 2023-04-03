"use strict"
console.log("It's me!");//vedo se lo script è connesso

//BEST PRACTICE: man mano che sviluppo tutti gli esercizi, per prima cosa inserirò tutte le dichiarazioni in cima e man mano distribuisco equamente il lavoro fra html (con bootstrap e css) e file js, non devo assolutamente creare tutto in js.

//ESERCIZIO 76-------------------------------
/*Scrivi un programma che crei un elenco dei post dopo averli recuperati dal seguente link:
https://jsonplaceholder.typicode.com/posts
Per ogni post verrà stampato solo il titolo.
La documentazione relativa alle api la trovate al seguente link:
https://jsonplaceholder.typicode.com/*/

//ESERCIZIO 77-------------------------------
/*
Dopo aver svolto l’esercizio precedente aggiungi accanto ad ogni titolo la seguente icona presa da bootstrap:

1. la stringa è: <i class="bi bi-arrows-fullscreen"></i>, opportunamente modificata sarà:  `<i class="bi bi-arrows-fullscreen" data-id-articolo="${articolo.id}"></i>`
2. per inserirla c'è un codice da copiare dalla sezione ICON = CDN di Bootstrap e va inserita nell'head sotto il link di boostrap
*/


//STEP1==> Per scrivere un programma mi serve una funzione, all'interno di questa funzione deve esserci un ciclo che ripeta per ogni post la stessa operazione affinchè siano presenti tutti i post, in tutto ciò per prima cosa dichiaro il fatto che desidero un array che mostri questi post, quindi sarà la prima cosa che scriverò:
let listaPost = [];
let modaleEL = document.getElementById("modale-articolo");//step5
const modaleArticolo = new bootstrap.Modal(modaleEL);//vanilla for Javascript, questo "attiva" la modale, lo trovi in calce alla pagina della modale
let titoloArticoloEl = document.getElementById("titolo-articolo");//step5
let contenutoArticoloEl = document.getElementById("contenuto-articolo");//step5
let contenutoAutoreEl = document.getElementById("contenuto-autore");//step5(non dovrebbe esserci, ma anticipo i tempi)


//STEP2==> per creare una "lista" mi ispirerò al list group di bootstrap e lo ricostruirò con createElement e classList oppure setAttribute, quindi andiamo a ritroso partendo da qui:
let ulEL = document.createElement("ul");
ulEL.classList.add("list-group");
document.getElementById("contenitore-posts").append(ulEL);
//come noti, ho "appeso" l'ul ad un contenitore che ho posto nell'HTML prima di iniziare il tutto, questo mi darà modo di settare un padding e dare un ordine, qualora non l'avessi fatto è il momento di crearlo.


//innesto la funzione detta allo STEP1 che mi darà modo di stampare il singolo post secondo i dettami di bootstrap
function stampaSingoloPost(articolo) {
    let liEL = document.createElement("li");
    liEL.classList.add("list-group-item");
    liEL.innerHTML = `${articolo.id} - ${articolo.title} <i class="bi bi-arrows-fullscreen" data-id-articolo="${articolo.id}"></i>`;//esercizio 77, ora accanto goni titolo avrai un'icona, mentre data-id-articolo="${articolo.id} lo aggiungeremo dopo

    ulEL.prepend(liEL);//PREPEND vuol dire che ogni volta che genero un post questo viene appeso per primo, difatti il post partirà da 100
}
//per iterarlo, come detto nello step1, ho bisogno di un ciclo
function stampaListaPost() {
    for (let i = 0; i < listaPost.length; i++) {
        let articolo = listaPost[i];
        stampaSingoloPost(articolo);
    }
}
//segui la guida https://jsonplaceholder.typicode.com/guide/ alla voce GETTING A RESOURCE
function getPosts() {//questa funzione è spiegata benissimo in calce, stiamo facendo una richiesta in GET
    fetch("https://jsonplaceholder.typicode.com/posts")//elenco post
        .then((response) => response.json())//risposta in file json che torna una promessa implicita
        .then((_listaPost) => {//quello che deve stampare
            listaPost = _listaPost;
            console.log("Lista post:", listaPost);

            stampaListaPost();
        });
}
getPosts();

function listenerIconaPosts() {//step6
    ulEL.addEventListener("click", function (evento) {
        contenutoAutoreEl.innerHTML = "";//"" perchè può cambiare

        if (evento.target.hasAttribute("data-id-articolo")) {
            let idArticolo = evento.target.getAttribute("data-id-articolo");
            let articolo = listaPost.find((post) => {
                return post.id === +idArticolo;
            });

            mostraPostInModale(articolo);
        }
    });
}
listenerIconaPosts();
//SPIEGAZIONE: all'UL dichiarato all'inizio con classe list-grout, quindi al contenitore applico un "click", in modo che nella fase di bubbling e quindi di risalita che è quello che ha scatenato l'evento  impongo un evento.target e quindi gli dico in fase di risalita di attivare tutti i bottoni, quando invece in fase di discesa e quindi di partenza li avrei dovuti attivare uno ad uno.
//"data-id-articolo" è un'attributo che dice che dentro quella sezione sono contenute info sull'articolo (si è un po arizogogolato, ma come logica ci sta)
//.find definisce una posizione, mi è oscuro perchè Nicola l'abbia utilizzato, ma serve a creare una gerarchia di posizioni, è come se chiedesse se ogni post.id (che è numerico) a qualsiasi livello, tornasse castato in array, il suo scopo è interrompere il ciclo quando trova ciò che desidera ossia un numero da castare in array, sino a quando non li ultima

//ESERCIZIO 78-------------------------------
/*
Dopo aver svolto l’esercizio precedente fai in modo che ogni volta che venga cliccata l’icona venga aperta una modale di bootstrap che mostri tutto il titolo ed il contenuto del post:
link alla modale https://getbootstrap.com/docs/5.3/components/modal/
*/

//STEP3==> copio la modale nell'html, scelgo la "live demo", senza il "button trigger".
//STEP4==> modifica la modale secondo i dettami di Nicola, è importante perchè ti insegna a correggere gli id in base all'uso che ne farai nel js.
//STEP5==> richiama con getElementById il titolo ed il contenuto del post
//STEP6==>"fai in modo che ogni volta che venga cliccata l’icona venga aperta una modale", quindi applichiamo un: addEventListener
//STEP7==> e solo ora possiamo aprire la modale.

function mostraPostInModale(articolo) {
    titoloArticoloEl.innerText = `${articolo.id} - ${articolo.title}`;
    contenutoArticoloEl.innerHTML = articolo.body;
    //esercizio 78 sino a qui

    //ESERCIZIO 79-------------------------------
    /*
    Dopo aver svolto l’esercizio precedente recupera i dati relativi all’autore del post e aggiungi alla modale una sezione dedicata all’autore subito sotto il contenuto post
    https://jsonplaceholder.typicode.com/guide/
    */
    //STEP1==> segui la guida alla voce LISTING ALL RESOURCES
    //(alcune cose prendile per fede, le sistemeremo e spieghieremo dopo in un file a parte)
    fetch("https://jsonplaceholder.typicode.com/users/" + articolo.userId)//aprendo il file (APRILO! ALTRIMENTI NON CAPISCI), noterai che dentro ogni autore ci sono divesi dati dei più disparati generi, segue in **
        .then((response) => response.json())
        .then((autore) => {
            console.log("autore:", autore);
            //ciclo per iterare il nome dell'autore(spiegato in disparte, altro file)
            for (let nomeProp in autore)//in autore ci sono diverse info, quindi estraggo nomeProp
            {//** in virtù di questo scriverai che: se(if) autore (quindi l'emento generico) posside la proprietà nome) che non è un oggetto e quindi ***
                if (typeof autore[nomeProp] !== "object"){
                    let liProp = document.createElement("li");
                    //*** creo un li che accolga questa lista di "name" che sono proprietà di autore, quindi se nomeProp è uguale alla stringa "name" (che è l'unica parte che ci interessa) allora inseriamo "name" nell'innerHTML, se invece nella sua ricerca l'if non trova il "name" allora vada nell'else.
                    if (nomeProp === "name") {//°° come compongo un url?vai a vedere giù
                        liProp.innerHTML = `${nomeProp}: <b><a href="http://127.0.0.1:5500/corsisti/Alice_Croce/AliceCroce_Lezione13/14_AJAX_js/index13-14new.html?userId=${articolo.userId}">${autore[nomeProp]}</a></b>`;//così hai reso DINAMICA LA MODALE, FINALMENTE!
                    } else {
                        liProp.innerHTML = `${nomeProp}: <b>${autore[nomeProp]}</b>`;
                    }
                    contenutoAutoreEl.append(liProp);
                }
            }
        });

    modaleArticolo.show();//a questo punto avrai una modale con titolo, testo e dati dell'autore
}

//ESERCIZIO 80- BONUS -------------------------------
/*
Dopo aver svolto l’esercizio precedente rendi il nome dell’autore un link. Al click verrà aperta una nuova pagina con i dati dell’autore e l’elenco di tutti i post da lui creati 

HINT:
per passare dei dati da una pagina all’altra possiamo usare molti modi, ma in questo caso il metodo più comodo è usare delle query string!
*/


//°°in primis devi creare una parte nell'html e per crearla ti ho dato tutte le info nell'html stesso, praticamente erò nell'html devi crearti una bse di row e column all'interno di un container, dove creerai un anchor (anche giustamente) che ancori un href che sarà il link che ti compare nel tuo broswer eslodendo la parte numerica, come noterai questa finisce con .html
//°°in seconda battura sappi che comparià un ? che separa l'estensione del file corrente dalla prima variabile necessaria alla lettura del contenuto della pagina, agginchè esso sia dinamico, quindi per esempio: /corsisti/Alice_Croce/AliceCroce_Lezione13/14_AJAX_js/index13-14new.html?userId=10, questo ti condurrà ad una pagina bianca (che dovrebbe includere il filtro per cui per ogni autore ci sono i suoi articoli, ma lo faremo in un secondo momento, torniamo a noi)
//°° userId è l'identificativo che cambia, quindi è dinamicizzato dal = difatti per ogni post se clicchi ti da un userId diverso.
//°°nel JS, invece dovrai emulare questo anchor con href ecc ecc, ma con incluso anche il numeretto antecedente all'interno dell'in contenuto nell'if che a sua volte contenuto in una fetch, una serie di parametri all'interno di quella stringa ti danno modo di accedere ai diversi Id, basta vederlo per comprenderlo: bene hai appena costruito LA TUA PRIMA QUERY STRING, BRAVA ALICE!

//==> STEP8- Ora costrisci la nuova pagina che accolta tutti i post che ha pubblicato ogni singolo autore




























