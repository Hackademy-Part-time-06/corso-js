"use strict"

function esercizio(){
    let searchParams = new URLSearchParams(window.location.search)

    //Lista delle info dell'autore
    let ulautore = document.getElementById("contenuto-autore")

    //Lista per post degli utenti in base all'id
    let ul = document.createElement("ul")
    ul.classList.add("list-group")
    document.body.append(ul)

    fetch('https://jsonplaceholder.typicode.com/users/'+ searchParams.get("userId"))
    .then(response => response.json())
    .then(autore => {
        console.log("info autore", autore)

        //ciclo sulle proprietà dell'oggetto autore per filtrare gli oggetti interni.
        for(let key in autore){
          
            //se il valore della key non è un oggetto
            if(typeof autore[key] !== "object"){
              
              //*2 creo un listitem per ogni key dell'oggetto autore
              let liAutore = document.createElement("li")
              liAutore.innerText =`${key}: ${autore[key]}`
              ulautore.append(liAutore)
            }
        }
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${searchParams.get("userId")}/posts`)
    .then((response) => response.json())
    .then((listaPost) => {
        console.log("listaPost:", listaPost)
        listaPost.forEach(post => {
            let li = document.createElement("li")
            li.classList.add("list-group-item")
  
            //inserisco un attributo *data-id="${post.id}" per sapere quale dei post far visualizzare
            li.innerHTML = `Id: ${post.id}, title:${post.title}`
            ul.append(li)
      });
    })
}
esercizio()