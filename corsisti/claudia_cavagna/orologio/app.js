"use strict"

setInterval (function(){
    let adesso = new Date()
    let ora = adesso.getHours()
    let minuti = adesso.getMinutes()
    let secondi = adesso.getSeconds()
    //console.log(`${ora} : ${minuti} : ${secondi}`)

    let spanOre = document.getElementById("ora")
    if (ora < 10) {
        spanOre.innerText = `0${ora}:`
    }
    else {
        spanOre.innerText = `${ora}:`
    }
    let spanMinuti = document.getElementById("minuti")
    if (minuti < 10) {
        spanMinuti.innerText = `0${minuti}:`
    }
    else {
        spanMinuti.innerText = `${minuti}:`
    }
    let spanSecondi = document.getElementById("secondi")
    if(secondi < 10) {
        spanSecondi.innerText = `0${secondi}`
    }
    else {
        spanSecondi.innerText = `${secondi}`
    }

    let giorno = adesso.getDate()
    let mese = adesso.getMonth()
    let anno = adesso.getFullYear()

    let spanGiorno = document.getElementById("giorno")
    if (giorno < 10){
        spanGiorno.innerText = `0${giorno}/`
    }
    else {
        spanGiorno.innerText = giorno
    }

    let spanMese = document.getElementById("mese")
    if (mese < 10){
        spanMese.innerText = `0${mese+1}/`
    }
    else {
        spanMese.innerText = mese+1
    }


    let day = adesso.toLocaleDateString("it-IT", {
        weekday: "short"
    })
    let spanGiornoLettere = document.getElementById("giornoLettere")
    spanGiornoLettere.innerText = day.toUpperCase()

    let month = adesso.toLocaleDateString("it-IT", {
        month: "short"
    })
    let spanMeseLettere = document.getElementById("meseLettere")
    spanMeseLettere.innerText = month.toUpperCase()

    let year = adesso.toLocaleDateString("it-IT", {
        year: "2-digit"
    })
    console.log(year)
    let spanAnno = document.getElementById("anno")
    spanAnno.innerText = year
    let anno20 = String(anno).substring(0, 2)
    let spanAnnoBoh = document.getElementById("annoBoh")
    spanAnnoBoh.innerText = anno20

}, 1000)



