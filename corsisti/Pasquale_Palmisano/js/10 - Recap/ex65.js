/*Esercizio 65

Scrivi un programma che preveda il passaggio in input dei seguenti parametri relativi ad un singolo libro:


- titolo
- autore
    

esempio 

- titolo ->           "Il Signore degli Anelli"
- autore ->           "Tolkien"
    

Dati questi valori genera una stringa che conterrà un tag anchor (non dovrà funzionare - sarà una sola e semplice stringa dentro una variabile) con un ipotetico link per una libreria. Le regole per la creazione della url sono le seguenti:

- la base della url dovrà essere:  www.lamiasuperlibreria.aulab/
- il nome dell’autore dovrà essere un nodo della url: quindi nomeautore/
- il titolo del libro sarà la parte finale
- tutte le lettere devono essere minuscole
- gli spazi devono essere sostituiti con il simbolo “-”
- la prima parte della url sarà il nome dell’autore e l’ultima il nome del libro unito a “.html”

esempio url: 

-  www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html

        
Una volta creata la url questa dovrà essere passata all’attributo href del tag anchor mentre il titolo del libro sarà il contenuto del tag stesso.
esempio tag anchor: 
        

- <a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>


NB: non dovete creare un vero e proprio tag da appende nel DOM, ma solo una stringa formattata come se fosse una url*/

let title = prompt("Come si chiama il libro?")
let author = prompt("Come si chiama l'autore?")

console.log(tag(title, author));

function tag(title, author) {
    let author_link = author.toLowerCase().replace(/ /g,"-")
    let title_link = title.toLowerCase().replace(/ /g,"-")

    return `<a href=”www.lamiasuperlibreria.aulab/${author_link}/${title_link}">${title}</a>`
}