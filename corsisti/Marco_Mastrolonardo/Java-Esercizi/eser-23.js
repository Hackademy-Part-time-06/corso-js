"use strict"

function aggiungoattributi(elemento, attributi){
    for(let key in attributi){
        elemento.setAttribute(key, attributi[key])
    }
}
function esercizio(){
  //Creo la lista ul che conterrà i title
  let ul = document.createElement("ul")
  aggiungoattributi(ul,{"class":"list-group"})
  document.body.append(ul)

  //Creo la modale
  let modale = document.getElementById("modale-post")
  const myModalAlternative = new bootstrap.Modal(modale)
  
  //Prendo i contenitori che mi servono dall'Html
  let titolo = document.getElementById("titolo-articolo")
  let contenuto = document.getElementById("contenuto-articolo")
  let ulautore = document.getElementById("contenuto-autore")

  //Prima richiesta
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(listapost => {
    console.log(listapost)

    //Setto un'evento al click della lista
    ul.addEventListener("click", function(event){
      
      //*2 Per resettare il contenuto della lista con le info degli autori dei post, evitando che si appendano dati su dati.
      ulautore.innerText = ""

      //Se l'event.target ha come attributo "data-id"*
      if(event.target.hasAttribute("data-id")){

      //idArticolo mi serve per ciclare sulla lista dei post
      let idArticolo = event.target.getAttribute("data-id")

      //recuperare il singolo articolo/post che ci interessa. Find è simile a filter.
      let articolo = listapost.find((post) => {
        return post.id === +idArticolo
        //+ perchè tutto ciò che arriva dal data attribute, arriva sotto forma di stringa.
      })
      titolo.innerText = `${articolo.id} - ${articolo.title}`
      contenuto.innerText = articolo.body

      //Un'altra richiesta per le info sugli autori
      fetch('https://jsonplaceholder.typicode.com/users/'+ articolo.userId)
      .then(response => response.json())
      .then(autore => {
        console.log("info autore", autore)

        //ciclo sulle proprietà dell'oggetto autore per filtrare gli oggetti interni.
        for(let key in autore){
          
          //se il valore della key non è un oggetto
          if(typeof autore[key] !== "object"){
            
            //*2 creo un listitem per ogni key dell'oggetto autore
            let liAutore = document.createElement("li")

            //Nel caso in cui la key dell'oggetto sia "name", faccio si che il nome sia un link 
            if(key === "name"){
              liAutore.innerHTML = `${key}: <a href="http://127.0.0.1:5500/Javascript/eser-23autore.html?userId=${articolo.userId}">${autore[key]}</a>`
            }
            else{
              liAutore.innerText = `${key}: ${autore[key]}`
            }
            
            ulautore.append(liAutore)
          }
        }
      })

      //Per mostrare la modale all'evento click
      myModalAlternative.show()
    }
})
    listapost.forEach(post => {
      let li = document.createElement("li")
      li.classList.add("list-group-item")

      //inserisco un attributo *data-id="${post.id}" per sapere quale dei post far visualizzare
      li.innerHTML = `Id: ${post.id}, title:${post.title}<i class="bi bi-arrows-fullscreen" data-id="${post.id}"></i>`
      ul.append(li)
    });
  })
}
esercizio()





