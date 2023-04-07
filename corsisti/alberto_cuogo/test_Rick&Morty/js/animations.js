"use strict"

setTimeout(function() {
    let portalSpinner = document.getElementById("portal-spinner")
    portalSpinner.classList.add("d-none")
    let containerBody = document.getElementById("container-body")
    containerBody.classList.remove("d-none")
}, 0)


function scrollBackground(){
    if(document.documentElement.scrollTop > 100){
        let body = document.querySelector("body")
        body.classList.remove("bg-white")
        body.classList.add("bg-black")

        let subtitle = document.getElementById("subtitle")
        subtitle.classList.remove("text-black")
        subtitle.classList.add("text-light")
    }
    else{
        let body = document.querySelector("body")
        body.classList.remove("bg-black")
        body.classList.add("bg-white")

        let subtitle = document.getElementById("subtitle")
        subtitle.classList.remove("text-light")
        subtitle.classList.add("text-black")
    }
}

window.onscroll = function() {scrollBackground()};
