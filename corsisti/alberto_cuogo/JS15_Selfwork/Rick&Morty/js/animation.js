"use strict"

let portalSpinner = document.getElementById("portal-spinner")
let containerBody = document.getElementById("container-body")

let spinner = {
    show: function() {
        portalSpinner.classList.remove("d-none")
        containerBody.classList.add("d-none")
    },
    hide: function() {
        portalSpinner.classList.add("d-none")
        containerBody.classList.remove("d-none")
    }
}

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
