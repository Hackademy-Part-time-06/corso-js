"use strict"


// Es - 76

// Scrivi un programma che crei un elenco dei post dopo averli recuperati dal seguente link:
// https://jsonplaceholder.typicode.com/posts
// Per ogni post verrà stampato solo il titolo.
// La documentazione relativa alle api la trovate al seguente link:
// https://jsonplaceholder.typicode.com/ 



// S T E P   L O G I C I

// . INIZIALIZZARE PROGRAMMA.
// . PRENDERE L'ELENCO DEI POST TRAMITE LA FETCH.
// . RICHIAMARE L'ELENCO TRAMITE I THEN.
// . STAMPARE TITOLO PER OGNI POST.
// . STAMPARE TITOLO PER OGNI POST SU HTML.

/*
console.group("Programma: Richiamo dei titoli dei post");


function richiamo_Titoli_NeiPost () {

let lista_TitoliPost = document.createElement("ul");
lista_TitoliPost.classList.add("list-group");
document.body.append(lista_TitoliPost);

let APIconsiderata = fetch("https://jsonplaceholder.typicode.com/posts")

APIconsiderata.then(function(response_Grezza) {
                        console.log(response_Grezza)
                        return response_Grezza.json();
                      })
.then(function(response_JS) {
                console.log(response_JS);
                response_JS.forEach(function(elencoPost) {
                        let elencoPost_titolo = elencoPost.title;
                        console.log(elencoPost_titolo);
                        let item_lista_TitoliPost = document.createElement("ul");
                        item_lista_TitoliPost.classList.add("list-group-item");
                        item_lista_TitoliPost.innerText = elencoPost_titolo;
                        lista_TitoliPost.append(item_lista_TitoliPost);
                })
});



};

console.log(richiamo_Titoli_NeiPost());


console.groupEnd();
console.log("Fine programma.");
*/




// Es - 77
// Dopo aver svolto l’esercizio precedente aggiungi accanto ad ogni titolo la seguente icona presa da bootstrap: 
// https://icons.getbootstrap.com/icons/arrows-fullscreen/

// . CREARE VARIABILE CARATTERIZZATA DALL'ELEMENTO ICONA IN HTML.
// . AGGANCIARE VARIABILE ALLA LIST ITEM.


/*

console.group("Programma: Richiamo dei titoli dei post");


function richiamo_Titoli_NeiPost () {

let lista_TitoliPost = document.createElement("ul");
lista_TitoliPost.classList.add("list-group");
document.body.append(lista_TitoliPost);

let APIconsiderata = fetch("https://jsonplaceholder.typicode.com/posts")

APIconsiderata.then(function(response_Grezza) {
                        console.log(response_Grezza)
                        return response_Grezza.json();
                      })
.then(function(response_JS) {
                console.log(response_JS);
                response_JS.forEach(function(elencoPost) {
                        let elencoPost_titolo = elencoPost.title;
                        console.log(elencoPost_titolo);
                        let item_lista_TitoliPost = document.createElement("ul");
                        item_lista_TitoliPost.classList.add("list-group-item");
                        item_lista_TitoliPost.innerHTML = elencoPost_titolo;
                        lista_TitoliPost.append(item_lista_TitoliPost);
                        let icona_Item = document.createElement("i");
                        icona_Item.classList.add("bi-arrows-fullscreen", "bi");
                        item_lista_TitoliPost.append(icona_Item);
                })
});



};

console.log(richiamo_Titoli_NeiPost());


console.groupEnd();
console.log("Fine programma.");

*/



// Es - 78
// Dopo aver svolto l’esercizio precedente fai in modo che ogni volta che venga cliccata l’icona venga aperta una modale di bootstrap che mostri tutto il titolo ed il contenuto del post
// https://getbootstrap.com/docs/5.3/components/modal/

// . SCRIVERE BLOCCO DI CODICE HTML PER LA MODALE.
// . DEFINIRE EVENTO CHE COLLEGA IL CLICK DELL'ICONA ALLA MODALE.
// . INSERIRE CONTENUTO NELLA MODALE: TITOLO E CONTENUTO POST.


// STEP
// . SVILUPPO BLOCCO DI CODICE BOOTSTRAP DELLA MODALE     XXX
// . CREARE CODICE DI AGGANCIAMENTO JS PER ACCEDERE ALLA MODALE     XXX
// . CREARE CODICE DELL'EVENTO CLICK PER ACCEDERE REALMENTE ALLA MODALE:
// . 1 - FAR SI' CHE L'ICONA CLICCATA PERMETTA L'ACCESSO ALLA MODALE
// . 2 - FAR SI' CHE L'ICONA CLICCATA CORRISPONDA, MEDIANTE LA SUA INFO A QUELLA SPECIFICA DEL POST A FIANCO





// console.group("Programma: Richiamo dei titoli dei post");






// let lista_TitoliPost = document.createElement("ul");
// lista_TitoliPost.classList.add("list-group");
// document.body.append(lista_TitoliPost);


// const laMiaModale = new bootstrap.Modal(document.getElementById("miaModale"));
// let titoloModale = document.getElementById("titolo");
// let corpoModale = document.getElementById("corpo");

// let APIconsiderata = fetch("https://jsonplaceholder.typicode.com/posts")

// APIconsiderata.then(function(response_Grezza) {
//                         console.log(response_Grezza)
//                         return response_Grezza.json();
//                                               })
// .then(function(response_JS) {
//                 console.log(response_JS);
//                 response_JS.forEach(function(elencoPost) {
//                         let elencoPost_titolo = elencoPost.title;
//                         console.log(elencoPost_titolo);
//                         let item_lista_TitoliPost = document.createElement("li");
//                         item_lista_TitoliPost.classList.add("list-group-item");
//                         item_lista_TitoliPost.innerHTML = `${elencoPost_titolo} <i class="bi bi-arrows-fullscreen" attributo="${elencoPost.id}"></i>`;
//                         lista_TitoliPost.append(item_lista_TitoliPost);
//                                                         })
//                                                         lista_TitoliPost.addEventListener("click", function(event) {            
//                                                           if (event.target.hasAttribute("attributo")) {
//                                                           let iconaConsiderata = event.target.getAttribute("attributo"); 
//                                                           let postSpecifico = response_JS.find(function(elemento) {
//                                                           console.log(elemento.id);
//                                                           return elemento.id === Number(iconaConsiderata); 
//                                                           }) 
//                                                           titoloModale.innerHTML = postSpecifico.title;
//                                                           corpoModale.innerHTML = postSpecifico.body;
//                                   laMiaModale.show();
//                                                                         }
//                                                                               })
//                           });





// console.groupEnd();
// console.log("Fine programma.");




// RIFARE ESERCIZIO

console.group("Programma: Richiamo dei titoli dei post");


function richiamo_Titoli_NeiPost () {


let lista_TitoliPost = document.createElement("ul");
lista_TitoliPost.classList.add("list-group");
document.body.append(lista_TitoliPost);


let miaModale = document.getElementById("miaModale");
const myModal = new bootstrap.Modal(miaModale);
let titoloModale = document.getElementById("titolo");
let corpoModale = document.getElementById("corpo");


let APIconsiderata = fetch("https://jsonplaceholder.typicode.com/posts")

APIconsiderata.then(function(response_Grezza) {
                        console.log(response_Grezza)
                        return response_Grezza.json();
                      })
.then(function(response_JS) {
                console.log(response_JS);
                response_JS.forEach(function(elencoPost) {
                        let elencoPost_titolo = elencoPost.title;
                        console.log(elencoPost_titolo);
                        let item_lista_TitoliPost = document.createElement("li");
                        item_lista_TitoliPost.classList.add("list-group-item");
                        item_lista_TitoliPost.innerHTML = `${elencoPost_titolo} <i class="bi bi-arrows-fullscreen" attribute="${elencoPost.id}"></i>`;
                        lista_TitoliPost.append(item_lista_TitoliPost);
                })
                lista_TitoliPost.addEventListener("click", function(event){
                  if (event.target.hasAttribute("attribute")) {
                      let iconaSelezionata = event.target.getAttribute("attribute");
                      let postSelezionato = response_JS.find(function(post){
                        return post.id === +iconaSelezionata;
                      })
                      titoloModale.innerHTML = postSelezionato.title;
                      corpoModale.innerHTML = postSelezionato.body;
                      myModal.show();
                  }
                })
});



};

console.log(richiamo_Titoli_NeiPost());


console.groupEnd();
console.log("Fine programma.");













// Es - 79
// Dopo aver svolto l’esercizio precedente recupera i dati relativi all’autore del post e aggiungi alla modale una sezione dedicata all’autore subito sotto il contenuto post
// https://jsonplaceholder.typicode.com/guide/

































// STEP

// 1. INIZIARE IL PROGRAMMA.
// 2. INIZIALIZZARE LA FETCH.
// 3. DEFINIRE IL THEN.
// 4. DEFINIRE LA RESPONSE.
// 5. STAMPARE PROPRIETA' RICHIESTA.
// 6. SPERIMENTARE LA REJECT.
// 7. CONCLUDERE PROGRAMMA.



// 1.
// console.group("Inizio programma");

// 2. UTILIZZO DELLA FETCH.
/*
let richiamo_URL = fetch("https://jsonplaceholder.typicode.com/posts");

// 3. UTILIZZO DEL THEN.
// 4. DEFINIZIONE DELLA RESPONSE.



richiamo_URL
.then(function(response)        {
                                                console.log("Response: ", response);
return response.json()
                                            })
.then(function(response_ObjectJS)   {
                                                    console.log(response_ObjectJS);
                                                    response_ObjectJS.forEach(function(element) {
                                                                                                    console.log(element.title);
                                                                                                });
                                                })




console.groupEnd("Fine.");
*/



// Es - 77
// Dopo aver svolto l’esercizio precedente aggiungi accanto ad ogni titolo la seguente icona presa da bootstrap: 
// https://icons.getbootstrap.com/icons/arrows-fullscreen/

/*
console.group("Inizio programma");

let richiamo_URL = fetch("https://jsonplaceholder.typicode.com/posts");

let listaNome = document.createElement("ul");
listaNome.classList.add("list-group");
document.body.append(listaNome);

richiamo_URL
.then(function(response)        {
                                                console.log("Response: ", response);
return response.json()
                                            })
.then(function(response_ObjectJS)   {
                                                    console.log(response_ObjectJS);
                                                    response_ObjectJS.forEach(function(element) {
                                                                                                    console.log(element.title);
                                                                                                    let item_Lista = document.createElement("li");
                                                                                                    item_Lista.classList.add("list-group-item");
                                                                                                    item_Lista.innerHTML= `${element.title} <i class="bi bi-arrows-fullscreen"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                                                                                                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                                                                                                  </svg>`;
                                                                                                    listaNome.append(item_Lista);
                                                                                                });
                                                })

console.groupEnd("Fine.");
*/



// Es - 78
// Dopo aver svolto l’esercizio precedente fai in modo che ogni volta che venga cliccata l’icona venga aperta una modale di bootstrap che mostri tutto il titolo ed il contenuto del post
// https://getbootstrap.com/docs/5.3/components/modal/


// Es - 79
// Dopo aver svolto l’esercizio precedente recupera i dati relativi all’autore del post e aggiungi alla modale una sezione dedicata all’autore subito sotto il contenuto post
// https://jsonplaceholder.typicode.com/guide/


/*




  let modale = document.getElementById("IdModale");
  const laMiaModale = new bootstrap.Modal(modale);

  let listaPost = document.createElement("ul");
  listaPost.classList.add("list-group");
  document.body.append(listaPost);

  let titoloModale = document.getElementById("titolo");
  let corpoModale = document.getElementById("corpo");

  let sezioneAutore = document.getElementById("infoAutore");


//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function(response)        {
//                                                   console.log("Response: ", response);
//                                                   return response.json()
//                                               })
//               .then(function(response_ObjectJS)   {
//                                                     console.log("Response definitiva, convertita in JS: ", response_ObjectJS);
                                                  
// response_ObjectJS.forEach(function(element) {
// console.log(element.title);
// let item_Lista = document.createElement("li");
// item_Lista.classList.add("list-group-item");
// item_Lista.innerHTML= `${element.title} <i class="bi bi-arrows-fullscreen" data-id-articolo="${element.id}"></i>` ;
// listaPost.append(item_Lista);

//                                             });



                                            listaPost.addEventListener("click", function(event) {
                                              sezioneAutore.innerHTML = "";

                                              if (event.target.hasAttribute("data-id-articolo")) {
                                              let idElement = event.target.getAttribute("data-id-articolo"); //serve a creare una variabile per far corrispondere l'elemento icona HTML con il l'elemento specifico del post a cui si riferisce, mediante attributo del primo e id del secondo.
                                              let elementoo = response_ObjectJS.find(function(elemento) {
                                                return elemento.id === +idElement;
                                              })
                                              titoloModale.innerHTML = elementoo.title;
                                              corpoModale.innerHTML = elementoo.body;
                                              
                                              fetch("https://jsonplaceholder.typicode.com/users/" + elementoo.userId)
                                              .then(function(response) {
                                                                          console.log("Response: ", response);
                                                                          return response.json()
                                              })
                                              .then(function(userJS)   {
                                                                          console.log("Autore selezionato in formato JS: ", userJS);
                                                                          for(let nomeProp in userJS) {
                                                                            if (typeof userJS.nomeProp !== "object") {
                                                                                let listaProp = document.createElement("li");
                                                                                listaProp.innerHTML = `${nomeProp} : <b> ${userJS[nomeProp]} </b>`;
                                                                                sezioneAutore.append(listaProp);
                                                                            }
                                                                          }
                                                                        })

                                                                      

                                              laMiaModale.show()
                                              }
                                            })

  })










*/