console.log("ciao")

function ciaoBello(){
    let paramatri = new URLSearchParams(window.location.search)
    console.log(paramatri)
    fetch("https://jsonplaceholder.typicode.com/users/" + paramatri.get("userId"))
    .then(function(response){
        return response.json()
    })
    .then(function(autore){
        console.log("autore : " , autore)
        let ciao = document.createElement("ul")
        document.body.append(ciao)
        for (let singoloDato in autore) {
            let pezzoDiLi = document.createElement("li")
            pezzoDiLi.innerHTML= `<b>${singoloDato} : </b> ${autore[singoloDato]}` 
            ciao.append(pezzoDiLi)
        }

    })
    let coseScritte = new URLSearchParams(window.location.search)
    fetch(`https://jsonplaceholder.typicode.com/users/${coseScritte.get("userId")}/posts`)
    .then(function(response){
        return response.json()
    })
    .then(function(lista){
        console.log("lista" , lista)
    
    let ciao = document.createElement("ul")
    document.body.append(ciao)
      lista.forEach(function(dati){
          let singoloDato = document.createElement("li")
          ciao.append(singoloDato)
          singoloDato.innerText= `${dati.title} `
        })
    })
    
}
ciaoBello()