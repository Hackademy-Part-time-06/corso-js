"use strict";
console.log("It work!");
//ESERCIZIO 80-------------------------------
/*
Dopo aver svolto l’esercizio precedente rendi il nome dell’autore un link. Al click verrà aperta una nuova pagina con i dati dell’autore e l’elenco di tutti i post da lui creati 

HINT:
per passare dei dati da una pagina all’altra possiamo usare molti modi, ma in questo caso il metodo più comodo è usare delle query string!
*/
function programma() {
    //STEP1==> verrà aperta una nuova pagina (si presume con un url, quindi una query string)
    let searchParams = new URLSearchParams(window.location.search);
    //location.search è la dichiarazione della query, window invece è dove compare, ossia la finestra del broswer, quindi te la fai piacere
    let contenutoAutoreEl = document.getElementById("contenuto-autore");

    //STEP2==> hai creato un div con un contenitore per i post nell'html, ora crea un ul con la solita classe di bootstrap da appendere su di esso
    let ulEL = document.createElement("ul");
    ulEL.classList.add("list-group");
    document.getElementById("contenitore-posts").append(ulEL);

    //STEP3==> ora finalmente crea una fetch che ospiterà un ciclo che permetterà all'autore di iterare i post che ha generato


    //searchParams l'abbiamo dichiarato all inizio, è la nuova url dinamica in base all'userId (GET)
    fetch("https://jsonplaceholder.typicode.com/users/" + searchParams.get("userId"))
        .then((response) => response.json())
        .then((autore) => {
            console.log("autore:", autore);
            //il principio di questo for l'abbiamo già visto
            for (let nomeProp in autore) {
                if (typeof autore[nomeProp] !== 'object') {
                    let liProp = document.createElement("li");
                    liProp.innerHTML = `${nomeProp}: <b>${autore[nomeProp]}</b>`
                    contenutoAutoreEl.append(liProp)
                }
            }
        });


    fetch(`https://jsonplaceholder.typicode.com/users/${searchParams.get("userId")}/posts`)
        .then((response) => response.json())
        .then((listaPost) => {
            console.log("listaPost:", listaPost);

            for (let i = 0; i < listaPost.length; i++) {
                let articolo = listaPost[i];
                let liEL = document.createElement("li");
                liEL.classList.add("list-group-item")
                liEL.innerHTML = `${articolo.id} - ${articolo.title}`;

                ulEL.append(liEL)
            }
        });

    //questa fetch non funzionerà senza una seconda che appunto cicli i post autore per autore

    //e tutto il tricche e ballacche non si sorreggerà senza un "programma" che le unisca
}

programma();

