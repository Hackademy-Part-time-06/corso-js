//Scrivi un programma chiamato “myLog” che ci permetta di loggare dei messaggi di testo con uno stile dinamico in base alla categoria specificata.

function titolo(title) {
    let titleC = title
    let titoloC1 = console.log(`%c${titleC}`, "background-color: blue; font-size: 30px; color: white")
    return titoloC1
}
titolo("Ciao amici")


function sottotitolo(subtitle) {
    let subtitleC = subtitle
    let sottotitoloC1 = console.log(`%c${subtitleC}`, "font-size: 20px; color: blue;")
    return sottotitoloC1
}
sottotitolo("Ciao amici")

function evidenziatore(highlight) {
    let highlightC = highlight
    let highlightC1 = console.log(`%c${highlightC}`, "background-color: orange")
    return highlightC1
}
evidenziatore("Ciao amici")

function disastro(disaster) {
    let disasterC = disaster
    let disasterC1 = console.log(`%c${disasterC}`, "background-color: red; font-size: 50px; color: white")
    return disasterC1
}
disastro("Ciao amici")




function myLog(message = "", style = "") {
    switch (style) {
        case "titolo":
            console.log(`%c${message}`, "background-color: blue; font-size: 30px; color: white")
            break;
        case "sottotitolo":
            console.log(`%c${message}`, "font-size: 20px; color: blue;")
            break;
        case "highlight":
            console.log(`%c${message}`, "background-color: orange")
            break;
        case "disastro":
            console.log(`%c${message}`, "background-color: red; font-size: 50px; color: white")
            break;
    }
}

myLog("Ciao amici, sono un testo grande con sfondo rosso", "titolo")
myLog("Ciao amici, sono un testo blu", "sottotitolo")
myLog("Ciao amici, sono un testo evidenziato di arancione", "highlight")
myLog("Ciao amici, sono un vero disastro", "disastro")
