
console.log("[ANALTYCS] analytics caricato")
const analytics = {
    registraAzione: function(azione) {
        console.log("[ANALTYCS] azione registrata:", azione);
    }
}

console.log("stocazzo")

analytics.registraAzione("page view")

let adv = document.createElement("script")
document.body.append(adv)
adv.setAttribute("src", "adv.js")