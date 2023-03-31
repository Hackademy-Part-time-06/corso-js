"use strict";
console.log("Ci sono!");


let bannerEl = document.getElementById("cookie-banner");
let noBtn = bannerEl.querySelector("#no");
let siBtn = bannerEl.querySelector("#si");

function laodScript(url, successCallback) {
    let script = document.createElement("script")
    script.setAttribute("src", url);
    if (successCallback) {
        script.addEventListener("load", successCallback)
    }

    document.body.append(script)
}

noBtn.addEventListener("click", function() {
    bannerEl.remove()
})

siBtn.addEventListener("click", function() {
    bannerEl.remove();
    laodScript(
        "/progetti/cookie_banner/analytics.js",
        function() {
            analytics.registraAzione("page view");

            laodScript("/progetti/cookie_banner/adv.js")
        }
    )
})
