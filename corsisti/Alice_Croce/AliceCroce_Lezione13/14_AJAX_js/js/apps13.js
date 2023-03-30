"use strict"
//Esercizio 76-----------------------------------------------------------------
/*Scrivi un programma che crei un elenco dei post dopo averli recuperati dal seguente link:
https://jsonplaceholder.typicode.com/posts
Per ogni post verrà stampato solo il titolo.
La documentazione relativa alle api la trovate al seguente link:
https://jsonplaceholder.typicode.com/*/

const ul = document.getElementById('posts');
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let posts = data;

        posts.forEach(function (singoloPost) {
            let li = document.createElement('li');
            let i = document.createElement('i');//esercizio 77
            li.setAttribute("class", "list-group-item");
            i.setAttribute("class", "bi bi-arrows-fullscreen");//esercizio 77
            i.setAttribute("style", "padding: 10px")
            li.innerHTML = `${singoloPost.title}`;
            ul.appendChild(li);
            li.appendChild(i);
            //console.log(singoloPost)
            i.addEventListener("click", function (evento) {
                alert("Ciao belli!") //prova tecnica

            })
        });
    })
    .catch(function (error) {
        console.log(error);
    });



//Esercizio 77-----------------------------------------------------------------
/*Dopo aver svolto l’esercizio precedente aggiungi accanto ad ogni titolo la seguente icona presa da bootstrap:*/
/*<i class="bi bi-arrows-fullscreen"></i>*/


//Esercizio 78-----------------------------------------------------------------
/*Dopo aver svolto l’esercizio precedente fai in modo che ogni volta che venga cliccata l’icona venga aperta una modale di bootstrap che mostri tutto il titolo ed il contenuto del post*/




