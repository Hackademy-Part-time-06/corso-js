"use strict"
console.log("[ANALTYCS] analytics caricato")
const analytics = {
    registraAzione: function(azione) {
        console.log("[ANALTYCS] azione registrata:", azione);
    }
}

analytics.registraAzione("page view");
let paginaNuova1 = document.createElement("script")
  document.body.append(paginaNuova1)
  paginaNuova1.setAttribute("src","javas/adv.js")
