"use strict"

console.log("orologio");

// mi conservo delle coordinate di default nel qual caso non possa accedere alla geolocalizzazione del browser
// posizioone di default: Roma
const coordinateDiDefault = {
  latitudine: 41.9100711,
  longitudine: 12.5359979
};

// prendo gli elementi html dei quali avrò bisogno per inserire i vari dati dell'orologio
const elementoTime = document.getElementById("time-content");
const elementoSecondi = document.getElementById("seconds-content");
const elementoCitta = document.getElementById("city");

const elementoGiornoLabel = document.querySelector(".day-container .d-label");
const elementoGiornoInfo = document.querySelector(".day-container .d-info");

const elementoMeseLabel = document.querySelector(".month-container .d-label");
const elementoMeseInfo = document.querySelector(".month-container .d-info");

const elementoAnnoInfo = document.querySelector(".year-container .d-info");

const elementoTemperatura = document.getElementById("temp-data");
const elementoIconaTemperatura = document.getElementById("temp-icon");



/**
 * Funzione che inserisce i dati nel DOM
 * 
 * @param datiMeteo 
 * 
 */
function inserisciDatiMeteoNelDom(datiMeteo) {

  // Inserisco i dati dentro l'orologio negli elementi html corrispondenti
  // uso un try/catch in modo che se la response della chiamata mi da qualche oggetto non valido posso inserire
  // un messaggio di errore
  try {
    elementoCitta.innerText = datiMeteo.location.name;

    // concateno la temperatura col simbolo dei gradi °
    elementoTemperatura.innerText = datiMeteo.current.temp_c + "°";

    // setto la source (src) dell'immagine dell'icona con quella fornitami dal webservice
    elementoIconaTemperatura.setAttribute("src", datiMeteo.current.condition.icon);
  }
  catch (e) {
    // in caso di errore inserisco un messaggio che avvisa l'utente che non l'informazione non è disponibile
    elementoCitta.innerText = "Servizio non disponibile"
  }
}



/**
 * Funzione che si occupa di chiamare l'api del meteo. Prende in input le coordinate da passare al webservice
 *
 * @param latitudine
 * @param longitudine
 */
function recuperaDatiMeteo(latitudine, longitudine) {

  // faccio la chiamata aggiungendo i dati dinamici, ossia latitudine e longitudine
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=ebbe456e8faa4b06a04102036231001&q=${latitudine},${longitudine}&days=1&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(function(data) {

      console.log(data);

      inserisciDatiMeteoNelDom(data);
    })
}

/**
 * Funzione per recuperare le coordinate tramite l'oggetto offertomi da browser:
 *
 *    navigator.geolocation
 *
 * Questo attraverso il metodo "getCurrentPosition" mi ritorna, ad una funzione di callback che gli passo come parametro,
 * un oggetto position con all'interno delle info, come per l'appunto le coordinate
 *
 */
function recuperaCoordinate() {

  // controllo che l'oggetto navigator abbia la proprità geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(

      /**
       * Callback alla quale viene passato il risultato della geolocalizzazione
       *
       * @param posizione: oggetto Position
       */
      function(posizione) {
        console.log("posizione", posizione);

        // eseguo la funzione che si occupa di recuperare i dati meteo passandogli le coordinate ritornatemi
        // dall'oggetto "navigator.geolocation"
        recuperaDatiMeteo(posizione.coords.latitude, posizione.coords.longitude);
      },

      /**
       * Callback di errore - eseguita in caso non vada a buon fine la geolocalizzazione
       */
      function () {

        // eseguo la funzione che si occupa di recuperare i dati meteo passandogli le coordinate di default
        recuperaDatiMeteo(coordinateDiDefault.latitudine, coordinateDiDefault.longitudine);
      });
  }
  // se la proprietà non è presente chiamo il servizio meteo con delle coordinate di default
  else {

    // eseguo la funzione che si occupa di recuperare i dati meteo passandogli le coordinate di default
    recuperaDatiMeteo(coordinateDiDefault.latitudine, coordinateDiDefault.longitudine);
  }
}

/**
 * Funzione che mi restituisce il numero della data/ora richiesto sempre a 2 cifre.
 * Aggiunge uno zero davanti alla cifra in caso sia minore di 10
 *
 * @param valoreNumerico
 * @returns {string}
 */
function aggiungiZero(valoreNumerico) {

  // controllo che il valore sia minore di 10
  if (valoreNumerico < 10) {

    // aggiungo uno "0" come stringa davanti al numero minore di 10
    valoreNumerico = "0" + valoreNumerico;
  }

  // ritorno il valore correttamente formattato
  return valoreNumerico
}

/**
 * Funzione che inserisce nel dom i dati relativi all'orario
 *
 * @param data
 */
function settaOrario(data) {
  // inserisco i secondi recuperandoli dalla data e passandoli alla funzione di formattazione
  elementoSecondi.innerText = aggiungiZero(data.getSeconds());

  // inserisco ore e minuti recuperando entrambi dalla data e passandoli alla funzione di formattazione
  elementoTime.innerText = aggiungiZero(data.getHours()) + ":" + aggiungiZero(data.getMinutes());

  // inserisco il giorno come numero recuperandolo dalla data e passandolo alla funzione di formattazione
  elementoGiornoInfo.innerText = aggiungiZero(data.getDate());

}


/**
 * Funzione che inserisce nel dom i dati relativi alla data
 *
 * @param data
 */
function settaData(data) {

  // utilizzo il metodo della data toLocaleDateString che mi permette di avere un valore testuale
  // per giorno e mese tradotto in una specifica lingua
  elementoGiornoLabel.innerText = data.toLocaleDateString('it-IT', { weekday: 'short' });
  elementoMeseLabel.innerText = data.toLocaleDateString('it-IT', { month: 'short' });

  // inserisco il mese come numero recuperandolo dalla data e passandolo alla funzione di formattazione
  elementoMeseInfo.innerText = aggiungiZero(data.getMonth() + 1);

  // utilizzo il metodo della data toLocaleDateString che mi permette di avere un valore di anno in 2 cifre
  elementoAnnoInfo.innerText = data.toLocaleDateString("it-IT", {year: "2-digit"});
}


/**
 * Funzione che gestisce l'orologio.
 * Verrà passata ad un setInterval che verrà eseguito ogni secondo
 */
function orologio() {
  // genero una nuova data corrispondente al momento stesso in cui è stata creata
  const data = new Date();

  settaData(data)
  settaOrario(data);
}



// eseguo la funzione recupera coordinate che si occupa di richiamre anche il servizio meteo
recuperaCoordinate();

// eseguo l'orologio immediatamente cosi da non aver l'orologio vuoto il primo secondo
orologio();

// faccio eseguire la funzione orologio dal setInterval ogni secondo, ossia ogni 1000 millisecondi
setInterval(orologio, 1000);

