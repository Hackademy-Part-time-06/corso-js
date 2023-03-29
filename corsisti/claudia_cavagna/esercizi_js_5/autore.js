"use strict"

let userId = ""

let params = window.location.href.split("?")[1]
console.log(params)
params = params.split("=")

userId = params[1]

fetch(`https://jsonplaceholder.typicode.com/users?postId=${userId}`)
.then(function(response){
    return response.json()
})
.then(function(autore){
    console.log(autore)
})