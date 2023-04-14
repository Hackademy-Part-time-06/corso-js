"use strict"
//esercizio 89

setInterval(function(){
    let orario = new Date()
    let ora = document.getElementById("ore")
    let minuti = document.getElementById("minuti")
    let secondi = document.getElementById("secondi")
    let hours= orario.getHours()
    let minuts = orario.getMinutes()
    let seconds= orario.getSeconds()
    
    if(hours<10){
        hours = `0${hours}`
    }
    if(minuts<10){
        minuts = `0${minuts}`
    }
    if(seconds<10){
        seconds = `0${seconds}`
    }
    ora.innerText = `${hours}:`
    minuti.innerText = `${minuts}:`
    secondi.innerText = seconds
},1000)
 
//esercizio 90

let data = new Date()
let giornoSettimana = document.getElementById("giornoSettimana")
let mese = document.getElementById("mese")
let millennio = document.getElementById("millennio")
let giorno= data.toLocaleDateString("it-IT",{
    weekday : "short",
})
giornoSettimana.innerText = giorno.toUpperCase()
let meseMaiuscolo = data.toLocaleDateString("it-IT",{
    month : "short",
})
mese.innerText = meseMaiuscolo.toUpperCase()
let cifreAnno = data.getFullYear()
millennio.innerText = String(cifreAnno).slice(0, 2);

let giornoMese = document.getElementById("giornoMese");
let meseNumero = document.getElementById("meseNumero");
let decennio = document.getElementById("decennio");
let giornoNumerico = data.getDate()
if (giornoNumerico<10){
    giornoNumerico = `0${giornoNumerico}`
}
let meseNumerico = data.getMonth()+1
if (meseNumerico<10){
    meseNumerico = `0${meseNumerico}`
}
let ultimeCifreAnno = String(cifreAnno).slice(-2);
giornoMese.innerText= `${giornoNumerico}/`
meseNumero.innerText= `${meseNumerico}/`
decennio.innerText= ultimeCifreAnno

//esercizio 91

fetch(`http://api.weatherapi.com/v1/current.json?key=e359162360cc4aca965143158230804&q=acireale&aqi=no`)
.then(function(responde){
    return responde.json()
})
.then(function(meteo){
    console.log(meteo)
    let citta = document.getElementById("citta")
    let gradi = document.getElementById("gradi")
    let icona = document.getElementById("icona")
    citta.innerText = `${meteo.location.name} -`
    gradi.innerText = `${meteo.current.temp_c} °`
    icona.setAttribute("src",meteo.current.condition.icon)
})