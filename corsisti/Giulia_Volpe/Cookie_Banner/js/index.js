"use strict"

let cookieDiv = document.getElementById("cookie-banner");
let siBtn = document.getElementById("si-Btn");
let noBtn = document.getElementById("no-Btn");

function loadScript(url, succCallBack){
    let scriptAna = document.createElement("script");
    scriptAna.setAttribute("src", url)
    if(succCallBack){
        scriptAna.addEventListener("load", succCallBack);
    }
    document.body.append(scriptAna);
}

noBtn.addEventListener("click", function(event){
    cookieDiv.remove()
})

siBtn.addEventListener("click", function(event){
    cookieDiv.remove()
    loadScript("/js/analytics.js", function(){
        analytics.registraAzione("page view");
        loadScript("/js/adv.js")
    })
})