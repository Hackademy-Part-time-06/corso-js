"use strict"
/*

//Prendo l'elemento bottone (presente nel file html) con id bottonetest
let bottoneditest = document.getElementById("bottonetest1")

//Prendo l'elemento con id="contenitore-bottone" che contiene i bottoni tramite
let contenitoreBottone = document.getElementById("contenitore-bottone")

//Setto un console.log  all'evento click del contenitore del bottone
contenitoreBottone.addEventListener("click", function(event){
    console.log("contenitore premuto")

//Quando abbiamo un listener sul contenitore, possiamo evitare di aggiungere un addEventListener su ogni bottone tramite l'aggiunta di event.target. 
    console.log("Reale elemento cliccato", event.target)
    if(event.target.id === "bottonetest1"){
        console.log("premuto bottone1")
    }
    else if(event.target.id === "bottonetest2"){
        console.log("premuto bottone2")
    }
    else if (event.target.id === "bottonetest3"){
        console.log("premuto bottone3")
    }
})

//Posso settare l'evento al click del bottone tramite una funzione anonima
bottoneditest.addEventListener("click", function(){
    console.log("bottone premuto")
    //alert("sono stato cliccato")
})

//Altro esemoio con una funzione non anonima
function listenerperbottone(event){
    console.log("funzione non anonima eseguita")
    console.log("log di event", event)
}
bottoneditest.addEventListener("click", listenerperbottone)

//per rimuovere un evento, esso deve avere come funzione passata una non anonima.Se è anonima non posso passare nulla al secondo parametro.
bottoneditest.removeEventListener("click", listenerperbottone)

/*
Come funziona l'event listener.Nel documento Html il bottone è contenuto nel div.

<div id="contenitore-bottone">
    <button id="bottonetest">cliccami</button>
</div> 

Il browser "scendendo" cattura l'elemento che è stato cliccato ed esegue il suo listener. Se ci sono listener settati allo stesso tipo di evento (in questo caso "click"), in fase di risalita nel codice, verranno eseguiti anche quelli. Per questo motivo vediamo il console.log del bottone prima e poi quello del contenitore. event.stopPropagation per evitare questo comportamento di Javascript
*/

let bottone1 = document.getElementById("bottonetest1")
let bottone2 = document.getElementById("bottonetest2")
let bottone3 = document.getElementById("bottonetest3")
let contenitore = document.getElementById("contenitore-bottone")

contenitore.addEventListener("click", function(event){
    if(event.target.class.contains("bottonedacliccare")){
        event.stopPropagation()

        console.log(event.target.getAttribute("data"))
    }
})

//Prevenire un comportamento di default di un elemento Html per esempio di un anchor
let anchordabloccare = document.getElementById("linkdabloccare")
anchordabloccare.addEventListener("click", function(event){
    event.preventDefault()

    console.log("Anchor cliccato")
})

//Creare un evento custom 
let eventocustom = new CustomEvent("il-mio-evento-custom", {detail: "sono un valore custom passato ad un evento custom"})

//Setto il listener
document.addEventListener("il-mio-evento-custom", function(event){
    console.log("evento custom triggerato")
})
//per triggerare, spacciare l'evento custom
document.dispatchEvent(eventocustom)