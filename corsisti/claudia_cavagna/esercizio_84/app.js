let modale = new bootstrap.Modal(document.getElementById('exampleModal'))
modale.show()

let accetta = document.getElementById("accetta")

accetta.addEventListener("click", function(){
    let analytics = document.createElement("script")
    document.body.append(analytics)
    analytics.setAttribute("src", "analytics.js")

})
