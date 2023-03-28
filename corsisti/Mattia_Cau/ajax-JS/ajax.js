 /*
            Es - 76
            Scrivi un programma che crei un elenco dei post dopo averli recuperati dal seguente link:
            https://jsonplaceholder.typicode.com/posts
            Per ogni post verrà stampato solo il titolo.
            La documentazione relativa alle api la trovate al seguente link:
            https://jsonplaceholder.typicode.com/
            
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(response){
                return response.json();
            })
            .then(function(listaCompleta){
                //console.log(listaCompleta);
                listaCompleta.forEach(element => {
                    let titolo = element.title
                    console.log(titolo);
                });
            })
            */
            /*
            Es - 77
            Dopo aver svolto l’esercizio precedente aggiungi accanto ad ogni titolo la seguente icona presa da bootstrap:
            
            https://icons.getbootstrap.com/icons/arrows-fullscreen/
            
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(response){
                return response.json();
            })
            .then(function(listaCompleta){
                //console.log(listaCompleta);
                let ul = document.createElement("ul")
                ul.classList.add("list-group")
                document.body.append(ul)
                
                listaCompleta.forEach(element => {
                    let titolo = element.title
                    console.log(titolo);
                    let li = document.createElement("li")
                    ul.append(li)
                    li.innerHTML= `<li> ${element.title} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                    </svg> </li>`
                });
                
            })
            */
            /*
            Es - 78
            Dopo aver svolto l’esercizio precedente fai in modo che ogni volta che venga cliccata l’icona venga aperta una modale di bootstrap che mostri tutto il titolo ed il contenuto del post
            
            https://getbootstrap.com/docs/5.3/components/modal/
            */
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(response){
                return response.json();
            })
            .then(function(listaCompleta){
                //console.log(listaCompleta);
                let ul = document.createElement("ul")
                ul.classList.add("list-group")
                document.body.append(ul)
                
                listaCompleta.forEach(element => {
                    let titolo = element.title
                    let id = element.id
                    let corpo = element.body
                    console.log(titolo);
                    let li = document.createElement("li")
                    ul.append(li)
                    li.innerHTML= `
                    <li>Titolo: ${titolo} 
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                    </svg>
                    </button>
                    </li>            
                    <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                    Titolo: ${titolo}
                    </div>
                    <div class="modal-body">
                     <hr>
                    ${corpo}
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>`
                });
            })
 