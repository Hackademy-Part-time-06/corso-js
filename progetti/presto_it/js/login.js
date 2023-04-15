"use strict"

let formLogin = document.getElementById("form-login");

/** 
 * E' TUTTO FAKEEEEEEE
 * 
 * nn possiamo fare una reale login -> la stiamo solo simulando 
*/
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form login submittato")


    /**
     * quando vi loggherete veramente dovrete passare i dati della 
     * form di login e passarli in POST
     * 
     * ADESSO E' TUTTO FAKE
     * 
     */
    fetch("/progetti/presto_it/fake-server/api/login.json")
    .then(response => response.json())
    .then(rispostaDellaLogin => {
        console.log("stato login:", rispostaDellaLogin)

        if (rispostaDellaLogin.status === "success") {

            // salvo l'informazione nel localStorage
            // nb: solitamente lo si fa coi cookie - il nostro è solo un esempio veloce
            localStorage.setItem("userStatus", "logged");

            // redirect verso la homepaghe
            window.location = "/progetti/presto_it/index.html";
        }
    })
})