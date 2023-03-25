"use strict"
//A MARGINE: QUANDO LAVORI CON BOOTSTRAP, INSERISCI IL SUO CODICE, COPIALO DALLA PAGINA WEB, ALTRIMENTI NON FUNZIONERA' MAI----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Esercizio 69-----------------------------------
/*La Rubrica

Data la seguente lista di persone
let persone = [
        {
                nome: ‘Gino’
                cognome: ‘Ginoli’,
                nuovoUtente: false
        },
        {
                nome: ‘Pino
                cognome: ‘Pinoli’,
                nuovoUtente: true
        }
]
Crea una lista da visualizzare in una pagina html. Per la lista utilizza il list-group di bootstrap:

https://getbootstrap.com/docs/5.3/components/list-group/

<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>


Se l’utente ha la proprietà nuovoUtente settata a true aggiungi un badge con la scritta new di fianco al suo nome (https://getbootstrap.com/docs/5.3/components/badge/)*/

let persone = [
        {
                nome: " Gino",
                cognome: " Ginoli",
                nuovoUtente: false,
        },
        {
                nome: " Pino",
                cognome: " Pinoli",
                nuovoUtente: true,
        },
]

//STEP 1: crea l'elemento ul- aggiungi la classe ed appendilo
let elementoUl = document.createElement("ul");
elementoUl.classList.add("list-group");//aggiungi una classe
console.log(elementoUl)//fai un console, giusto per vedere se funziona, non è determinante
document.body.append(elementoUl);//appendilo spudoratamente

//STEP 2: innesta un ciclo for per ciclare sia li che le classi (IMPORTANTE!! perchè altrimenti non "rivelerà" la griglia di bootstrap)


persone.forEach(function (persona) {

        let liAnnidato = document.createElement("li");
        liAnnidato.classList.add("list-group-item")
        liAnnidato.innerText = `${persona.nome} ${persona.cognome}`;
        elementoUl.prepend(liAnnidato);

                if (persona.nuovoUtente) {
                let contenutoAggiornato = liAnnidato.innerText + ' <span class="badge bg-secondary">New</span>'
                liAnnidato.innerHTML = contenutoAggiornato;
        }
})
//---------------------------------------------------------
for (let i =0 ; i < articoli.length; i++) {
        let articolo=articoli[i]
        let div = document.createElement("div")
        div.classList.add("card");
        document.body.append(div);
        let img = document.createElement("img")
        div.append(img)
        img.classList.add("card-img-top");
        img.setAttribute("src", articolo.immagine)
    
    
     
    }











