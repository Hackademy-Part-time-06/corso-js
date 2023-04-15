"use strict"
//a2df12b1d6d9404aad9125138230704

setInterval(orologio, 1000);

const coordinateDiDefault = {
    latitudine: 41.9100711,
    longitudine: 12.5359979
};

let hoursSpan = document.getElementById("hours");
let minutesSpan = document.getElementById("minutes");
let secondsSpan = document.getElementById("seconds");
let dayLet = document.getElementById("dayLet");
let monthLet = document.getElementById("monthLet");
let yearLet = document.getElementById("yearLet");
let dayNum = document.getElementById("dayNum");
let monthNum = document.getElementById("monthNum");
let yearNum = document.getElementById("yearNum");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let tempIcon = document.getElementById("tempIcon");


hoursSpan.innerHTML = "";
minutesSpan.innerHTML = "";
secondsSpan.innerHTML = "";

function orologio() {
    let oraCorrente = new Date();
    let hours = oraCorrente.getHours();
    let minutes = oraCorrente.getMinutes();
    let seconds = oraCorrente.getSeconds();

    hoursSpan.innerHTML = `${hours}:`
    minutesSpan.innerHTML = `${minutes}:`
    secondsSpan.innerHTML = `${seconds}`
}

function dataLet() {
    let dataOdierna = new Date();
    dayLet.innerHTML = dataOdierna.toLocaleDateString("it-IT", {
        weekday: "short"
    }).toUpperCase()
    monthLet.innerHTML = dataOdierna.toLocaleDateString("it-IT", {
        month: "short"
    }).toUpperCase()
    yearLet.innerHTML = dataOdierna.toLocaleDateString("it-IT", {
        year: "numeric"
    }).substring(0, 2)
    dayNum.innerHTML = `${dataOdierna.toLocaleString("it-IT", {
        day: "2-digit"
    })}/`
    monthNum.innerHTML = `${dataOdierna.toLocaleDateString("it-IT", {
        month: "2-digit"
    })}/`
    yearNum.innerText = `${dataOdierna.toLocaleDateString("it-IT", {
        year: "2-digit"
    })}`

}
dataLet()

function meteoInDom(datiMeteo){
    try{
        city.innerText = datiMeteo.location.name;
        temp.innerText = `${datiMeteo.current.temp_c}°`
        tempIcon.setAttribute("src", datiMeteo.current.condition.icon)
    }
    catch(error){
        city.innerText = "Momentaneamente fuori servizio";
    }
}

function meteoData(latitudine, longitudine){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=a2df12b1d6d9404aad9125138230704&q=${latitudine},${longitudine}&days=1&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(function (info){
        console.log(info)
        meteoInDom(info)
    })
}

function coordinate(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(posizione){
            console.log(posizione);
            meteoData(posizione.coords.latitude, posizione.coords.longitude)
        },
        function(){
            meteoData(coordinateDiDefault.latitudine, coordinateDiDefault.longitudine)
        })
    }
    else{
        meteoData(coordinateDiDefault.latitudine, coordinateDiDefault.longitudine)
    }
}
coordinate()