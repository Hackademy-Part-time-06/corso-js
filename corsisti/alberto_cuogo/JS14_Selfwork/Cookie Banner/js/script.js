"use strict"

let cookieBanner = document.getElementById("cookie-banner")
let noBtn = document.getElementById("no")
let siBtn = document.getElementById("si")

let funziona = document.getElementById("funziona")

function loadScript(url, successCallback) {
    let script = document.createElement("script")
    script.src = url
    if (successCallback) {
        script.addEventListener("load", successCallback)
    }

    document.body.append(script)
}


noBtn.addEventListener("click", function() {
    cookieBanner.remove()
    funziona.classList.replace("d-none", "d-block")
})

siBtn.addEventListener("click", function() {
    cookieBanner.remove()
    funziona.classList.replace("d-none", "d-block")
    loadScript("/JS14_Selfwork/Cookie%20Banner/js/analitics.js", function() {
        analytics.registraAzione("page view")

        loadScript("/JS14_Selfwork/Cookie%20Banner/js/adv.js")
    })
})