"use strict"


function holaa(){
    let parametri = new URLSearchParams(window.location.search)
    console.log(parametri)
    fetch("https://jsonplaceholder.typicode.com/users/" + parametri.get("userId"))
    .then(function(response){
        return response.json()
    })
    .then(function(autore){
        console.log("autore : " , autore)
    })
    let guapa = new URLSearchParams(window.location.search)
    fetch(`https://jsonplaceholder.typicode.com/users/${guapa.get("userId")}/posts`)
    .then(function(response){
        return response.json()
    })
    .then(function(lista){
        console.log("lista" , lista)
    })
}
holaa()