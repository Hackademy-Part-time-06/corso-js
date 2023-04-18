
// Esercizio 56
/*
Scrivi un programma che aggiunga ad una pagina html, senza contenuti testuali, i seguenti tag coi relativi contenuti:

    
    - h1: Libreria
    - h2: La mia libreria!
    - img: un’immagine a vostra scelta
*/



// STEP 1 - CREARE L'ELEMENTO DA INSERIRE
let elementoDaCreare = document.createElement("h1");
console.log(elementoDaCreare);

// STEP 2 - AGGIUNGERE CONTENUTO ALL'ELEMENTO CREATO
elementoDaCreare.innerHTML = "Libreria";

//STEP 3 - POSIZIONARE L'ELEMENTO CREATO
let PosizionamentoElemento = document.body.append(elementoDaCreare);




//STEP 4 - RIPETERE PROCEDIMENTO PER I DUE ELEMENTI SUCCESSIVI
let elementoDaCreare_2 = document.createElement("h2");
console.log(elementoDaCreare_2);

elementoDaCreare_2.innerHTML = "La mia libreria!";

let PosizionamentoElemento_2 = document.body.append(elementoDaCreare_2);



let elementoDaCreare_3 = document.createElement("img");
console.log(elementoDaCreare_3);

elementoDaCreare_3.src = "SKY.jpg";
elementoDaCreare_3.style.width = "25%";

let PosizionamentoElemento_3 = document.body.append(elementoDaCreare_3);




// ESERCIZIO 57

/*
Scrivi un programma che aggiunga un link nella pagina, creata nell’esercizio 56. Questo link dovrà avere come testo “Cerca su Google” e deve aprire su un’altra finestra la pagina di ricerca di google
*/


// STEP 1 - CREARE ELEMENTO
let elementoDaCreare_4 = document.createElement("a");
console.log(elementoDaCreare_4);

// STEP 2 - AGGIUNGERE CONTENUTO ALL'ELEMENTO CREATO
elementoDaCreare_4.innerHTML = "Cerca su Google";
elementoDaCreare_4.href = "https://www.google.com/webhp?hl=it&sa=X&ved=0ahUKEwiv7buC5ej9AhWF-aQKHXEQDv8QPAgI";
elementoDaCreare_4.target = "_blank";

//STEP 3 - 
let PosizionamentoElemento_4 = document.body.append(elementoDaCreare_4);









// ESERCIZIO 58

/*
Scrivi un programma che aggiunga nella pagina, creata nell’esercizio 56, i seguenti testi con le seguenti caratteristiche

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

*/

// 1 CREAZIONE ELEMENTO
let testoDaAggiungere1 = document.createElement("p");
console.log(testoDaAggiungere1);


// 2 AGGIUNTA DI CONTENUTO E DI STILE
testoDaAggiungere1.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
testoDaAggiungere1.style.fontSize = "18px";
testoDaAggiungere1.style.fontWeight = "bold";
testoDaAggiungere1.style.color = "rgba(100%, 0%, 0%, 1.0)";

// 3 POSIZIONAMENTEO DELL'ELEMENTO
let testoDaPosizionare1 = document.body.append(testoDaAggiungere1);




// 4 RIPETIZIONE DEL PROCEDIMENTO PER GLI ALTRI DUE ELEMENTI
let testoDaAggiungere2 = document.createElement("p");
console.log(testoDaAggiungere2);


testoDaAggiungere2.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
testoDaAggiungere2.style.fontStyle = "italic";
testoDaAggiungere2.style.textTransform = "uppercase";
testoDaAggiungere2.style.color = "rgba(0%, 100%, 0%, 1.0)";


let testoDaPosizionare2 = document.body.append(testoDaAggiungere2);




let testoDaAggiungere3 = document.createElement("p");
console.log(testoDaAggiungere3);


testoDaAggiungere3.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
testoDaAggiungere3.style.color = "rgba(50%, 50%, 50%, 1.0)";


let testoDaPosizionare3 = document.body.append(testoDaAggiungere3);