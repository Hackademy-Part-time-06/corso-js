"use strict"

/*
// ! OROLOGIO MANUALE
let ore = document.getElementById("ore")
let minuti = document.getElementById("minuti")
let secondi = document.getElementById("secondi")


let numeroOra = "HH"
ore.innerHTML = numeroOra

let numeroMinuti = "MM"
minuti.innerHTML = numeroMinuti

let numeroSecondi = "SS"
secondi.innerHTML = numeroSecondi


let form = document.getElementById("formOrologio")
let inputOre = document.getElementById("inputOre")
let inputMinuti = document.getElementById("inputMinuti")
let inputSecondi = document.getElementById("inputSecondi")


form.addEventListener("submit", function(event) {
    event.preventDefault()

    let inputOrario = document.getElementById("input-orario")
    inputOrario.classList.add("d-none")

    let oraInserita = inputOre.value
    let minutoInserito = inputMinuti.value
    let secondoInserito = inputSecondi.value

    numeroOra = oraInserita
    ore.innerHTML = numeroOra
    numeroMinuti = minutoInserito
    minuti.innerHTML = numeroMinuti
    numeroSecondi = secondoInserito
    secondi.innerHTML = numeroSecondi


    function intervalOrologio() {
        let intervalOra = setInterval(function() {
            numeroOra++
            ore.innerHTML = numeroOra
        
            console.log("Ore passate:", numeroOra)
        
            if (numeroOra === 24) {
                numeroOra = 0
                ore.innerHTML = numeroOra
        
                setInterval(intervalOra)
            }
        }, 3600000)

        let intervalMinuti = setInterval(function() {
            numeroMinuti++
            minuti.innerHTML = numeroMinuti
        
            console.log("Minuti passati:", numeroMinuti)
        
            if (numeroMinuti === 60) {
                numeroMinuti = 0
                minuti.innerHTML = numeroMinuti
        
                setInterval(intervalMinuti)
            }
        }, 60000)

        let intervalSecondi = setInterval(function() {
            numeroSecondi++
            secondi.innerHTML = numeroSecondi
        
            console.log("Secondi passati:", numeroSecondi)
        
            if (numeroSecondi === 60) {
                numeroSecondi = 0
                secondi.innerHTML = numeroSecondi
        
                setInterval(intervalSecondi)
            }
        }, 1000)

    }

    intervalOrologio()



})

*/


// ! OROLOGIO AUTOMATICO

function startTime() {
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()

    h = checkTime(h)
    m = checkTime(m)
    s = checkTime(s)

    let oreAutomatic = document.getElementById("ore-automatic")
    let minutiAutomatic = document.getElementById("minuti-automatic")
    let secondiAutomatic = document.getElementById("secondi-automatic")

    oreAutomatic.innerHTML = h
    minutiAutomatic.innerHTML = m
    secondiAutomatic.innerHTML = s

    setTimeout(startTime, 1000)
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i
  }

window.addEventListener("onload", startTime())


// ! DATA

function startDay() {
    let today = new Date()

    let giornoLet = document.getElementById("giorno-let")
    let meseLet = document.getElementById("mese-let")
    let annoLet = document.getElementById("anno-let")


    giornoLet.innerHTML = today.toLocaleDateString("it-IT", {
        weekday: "short"
    }).toUpperCase()

    meseLet.innerHTML = today.toLocaleDateString("it-IT", {
        month: "short"
    }).toUpperCase()

    annoLet.innerHTML = today.toLocaleDateString("it-IT", {
        year: "numeric"
    }).substring(0,2)


    let giornoNum = document.getElementById("giorno-num")
    let meseNum = document.getElementById("mese-num")
    let annoNum = document.getElementById("anno-num")

    giornoNum.innerHTML = today.toLocaleDateString("it-IT", {
        day: "numeric"
    }).toUpperCase()

    meseNum.innerHTML = today.toLocaleDateString("it-IT", {
        month: "numeric"
    }).toUpperCase()

    annoNum.innerHTML = today.toLocaleDateString("it-IT", {
        year: "2-digit"
    })

    
}

startDay()



// ! METEO

function startWeather() {
    let apiKey = "6505c2a5819847b686892202230604"

    let latitudine = "45.5505"
    let longitudine = "12.0722"

    let citta = document.getElementById("citta")
    let temperatura = document.getElementById("temperatura")
    let iconaMeteo = document.getElementById("icona-meteo")

    let urlAPI = new URL(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitudine},${longitudine}&days=1&aqi=no&alerts=no`)
    
    fetch(urlAPI)
    .then(function(response) {
        return response.json()})
    .then(function(meteo) {
        console.log(meteo)

        try {
            citta.innerText = meteo.location.name
            temperatura.innerText = meteo.current.temp_c + "°"
            iconaMeteo.src = meteo.current.condition.icon
        } 
        catch (error) {
            citta.innerText = "Servizio non disponibile"   
        }
    })
}

startWeather()
