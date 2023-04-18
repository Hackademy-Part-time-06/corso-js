"use strict"


function setting_ActiveNavbar() {
            if(window.location.href.includes("Index.html")) {
                            console.log("Questa è la pagina home!");
                            let classeActive = document.getElementById("linkHome");
                            classeActive.classList.add("active");
                        }
            else if(window.location.href.includes("Annunci.html")) {
                            console.log("Questa è la pagina degli annunci!");
                            let classeActive = document.getElementById("linkAnnunci");
                            classeActive.classList.add("active");
            }
}
setting_ActiveNavbar();