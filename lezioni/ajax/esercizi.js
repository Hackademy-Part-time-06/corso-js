"use strict"
/**
 *

 - Traccia esercizio -

     Scrivi un programma che crei un elenco di post dopo averli recuperati dal seguente link:

     https://jsonplaceholder.typicode.com/posts

     Per ogni post verrà stampato il titolo e la seguente icona presa da bootstrap.

     https://icons.getbootstrap.com/icons/arrows-fullscreen/

     Ogni volta che verrà cliccata l’icona dovrà essere aperta una modale di bootstrap che mostri titolo, contenuto ed autore del post

     https://getbootstrap.com/docs/5.2/components/modal/

     I dati relativi all’autore andranno recuperati dalla specifica api

 */

console.log("Js correttamente caricato");

// chiamata verso un'api attraverso la funzione "fetch"
console.log("chiamo il servizio remoto che mi deve ritornare la lista dei post");
fetch('https://jsonplaceholder.typicode.com/posts')

  // arrow function single line -> return implicito
  // il metodo "json()" mi converte il body (contenuto) della response in un oggetto js
  .then(response => response.json())

  // accedo al reale contenuto della response inviatomi dal server
  .then(function(listaPost) {
    console.log("lista dei post", listaPost);

    // prendo il contenitore della lista per aggiungergli successivamente l'ul che creo
    let contenitoreListaPost = document.getElementById("lista-post");

    // prendo l'elemento modale perchè lo dovrò passare a bootstrap per poterla usare via JS
    let elementoModaleInPagina = document.getElementById('exampleModal');

    // prendo l'elemento body della modale al quale cambierò il contenuto ad ogni click
    let elementoModaleBody = document.getElementById("contenuto-post-per-modale");

    // genero un nuovo oggetto modale di Bootstrap
    const modalePost = new bootstrap.Modal(elementoModaleInPagina);

    // creo un tag ul che conterrà i singoli post
    let elementoListaPostUL = document.createElement("ul");

    // aggiungo la classe di bootstrap
    elementoListaPostUL.classList.add("list-group")

    // ciclo la lista dei post col metodo forEach
    listaPost.forEach(function(singoloPost) {

      // creo una variabile col valore del title del post
      let titoloPost = singoloPost.title;

      // aggiungo l'icona come stringa -> tanto ci penserà l'innerHTML a renderizzarmela
      // la creazione della stringa è complessa quindi uso il template literl
      let titoloPostConIcona = `${titoloPost} <i class="bi bi-arrows-fullscreen" data-is-my-trigger="true" data-post-id="${singoloPost.id}" data-user-id="${singoloPost.userId}"></i>`;

      console.log("Titolo singolo post:", titoloPost);

      // creo l'elemento contenitore del titolo (e dell'icona) che aggiungerò all'ul
      let elementoSingoloPostLI = document.createElement("li");

      // aggiungo la classe di bootstrap
      elementoSingoloPostLI.classList.add("list-group-item")


      // renderizzo titolo e icona grazie all'innerHTML
      elementoSingoloPostLI.innerHTML = titoloPostConIcona;

      // appendo/aggiungo l'elemento li alla lista (UL)
      elementoListaPostUL.appendChild(elementoSingoloPostLI);
    });

    // aggiungo la lista dei post
    contenitoreListaPost.appendChild(elementoListaPostUL);

    // setto un listener a tutto il contenitore (EVENT DELEGATION)
    // in questo modo risparmio memoria e mi basterà filtrare per l'elemento realmente
    // scatenate per eseguire la mia logica - l'elemento che scatena l'evento lo
    // recupero con "event.target"
    contenitoreListaPost.addEventListener("click", function(evento) {

      // metto in una variabile l'elemento triggerante
      let elementoCliccato = evento.target;

      // controllo che l'elemento triggarante sia l'icona attraverso un data-attribute che gli
      // ho passato in fase di creazione
      if (elementoCliccato.hasAttribute("data-is-my-trigger")) {

        // prendo l'id del post che avevo storato nell'icona come data-attribute
        // NB: mettendolo come valore di un attributo diventa una stringa
        let postId = elementoCliccato.getAttribute("data-post-id");

        // converto il tipo valore da stringa a numero per poterlo usare in una comparazione
        // stretta
        postId = Number(postId);

        // cerco nella lista dei post il post corrispondente usando l'id come discriminante
        // attraverso il metodo "find" proprio degli array
        let postSelezionato = listaPost.find(function(singoloPost) {
          // se la comparazione mi torna true ritorno il post
          return singoloPost.id === postId;
        });

        // creo il contenuto come stringa
        let contenutoModale = `
                    <h3>${postSelezionato.title}</h3>
                    <hr/>
                    <p>${postSelezionato.body}</p>
                `;

        // appendo il contenuto come stringa al body della modale
        elementoModaleBody.innerHTML = contenutoModale;

        // mostro la modale tramite il metodo offertomi da bootstrap
        modalePost.show();


        // prendo l'id dell'autore (user) che avevo storato nell'icona come data-attribute
        let userId = elementoCliccato.getAttribute("data-user-id");
        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
          .then(response => response.json())
          .then(function (autore) {

            // creo il div che conterrà le info dell'autore
            let contenutoInfoAutore = document.createElement('div');
            
            // creo le info come string e le appendo come innerHTML
            contenutoInfoAutore.innerHTML = `
                    <div>
                        <hr/>
                        <h4>${autore.name} - alias: ${autore.username}</h4>
                        <ul>
                            <li><b>email:</b> ${autore.email}</li>
                            <li><b>phone:</b> ${autore.phone}</li>
                            <li><b>website:</b> ${autore.website}</li>
                        </ul>
                    </div>
                `;

            // appendo il contenuto alla modale
            elementoModaleBody.append(contenutoInfoAutore);
          })
          .catch(function (errore) {
            console.warn("Ops qualcosa non è andato come doveva nella chiamata per recuperare le info dell'autore");
            console.warn(errore);
          });
      }
    })
  })
  .catch(function (errore) {
    console.warn("Ops qualcosa non è andato come doveva nella chiamata per recuperare le info dei post");
    console.warn(errore);
  });

