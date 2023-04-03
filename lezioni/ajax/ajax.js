console.log("ajax");

// Programmazione asincrona - setTimeout esegue una funzione fuori dal flusso principale
console.log("Esecuzione 1");

setTimeout(function() {
  console.log("callback del setTimeout");
}, 3000);

console.log("Esecuzione 2");


/**
 *
 * PROMISE - prende in input una funzione che a sua volta prendere 2 function come parametri:
 *  - resolve
 *  - reject
 *
 *  Nella callback decidiamo noi quando la promessa è stata mantenuta o meno.
 *  In caso di mantenimento eseguiamo la "resolve", alla quale possiamo passare in input un valore,
 *  in caso contrario eseguiremo la "reject"
 *
 *  Simuliamo il caso di voler acquistare i biglietti per il concerto del nostro gruppo preferito.
 *  Non sappiamo quando i biglietti saranno disponibili quindi creo una promise e resterò in ascolto del suo
 *  mantenimento per poter acquistarli
 *
 */
let promessaPerComprareBiglietto = new Promise(function(resolve, reject) {
  console.log("callback promessa");

  // attendo che il link sia disponibile e mantengo la promessa avvisando chi mi ha chiesto questa informazione
  setTimeout(function () {

    // forzo il mantenimento della promessa a scopo dimostrativo
    if (true) {
      resolve({linkPerBiglietti: "www.acquistami.it/concerto-gruppo-preferito"})
    }
    else {
      reject("ops...qualcosa è andato storto");
    }
  }, 3000)

});

// preparo l'azione che eseguirò in caso di mantenimento della promessa
function acquistaBiglietto(linkPerAcquistare) {
  console.log("Grazie per aver mantenuto la promessa!");
  console.log("Vado a comprare il biglietto seguendo questo link", linkPerAcquistare.linkPerBiglietti);
}

// preparo l'azione che eseguirò in caso di NON mantenimento della promessa
function promessaNonMantenutaQuindiMiArrabbio(motivoDelNonMantenimento) {
  console.warn(motivoDelNonMantenimento);
  console.log("Peccato");
}

/**
 *
 * THEN - attraverso il metodo "then" ascolto la risoluzione della promessa
 * a questo posso passare 2 funzioni da eseguire in caso di mantenimento ed in caso di
 * non mantenimento della promessa
 *
 */
promessaPerComprareBiglietto
  .then(
    acquistaBiglietto,
    promessaNonMantenutaQuindiMiArrabbio
  )
  /**
   *
   * CATCH - col metodo "catch" posso passare un'azione generica che verrà eseguita in caso la promessa NON venga
   * mantenuta.
   * Se è presente la seconda funzione come parametro per il then, questa del catch non verrà eseguita
   *
   */
  .catch(function() {
    console.log("maledetto ma da catch");
  })


/**
 *
 * CHIAMATE VERSO UN ENDPOINT
 *
 *    - FETCH -
 *
 *    attraverso la fetch possiamo chiamare un endpoint (api) remoto passandoglila url da chiamare.
 *    La fetch è una funzione "promise based", quindi deve essere usata come una promise.
 *    Pertanto se vogliamo accedere alla risposta dell'endpoint dovremmo usare il THEN
 *
 */

// richiesta in GET.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  // gestisci il successo della chiamata
  .then(function(response) {
    /**
     * il paramentro "response" mi viene ritoranto dalla fetch e contiene delle info sulla risposta del server.
     * Info come lo stato della chiamata (status code: 1xx, 2xx, 3xx, 4xx, 5xx) ed il body che contiene il contenuto
     * della risposta.
     * Questo è in realta un "ReadableStream". Per rendere il suo contenuto usufribile dovrò usare dei metodi
     * offerti dalla response.
     *
     * In caso di un puro contenuto testuale potremmo usare il metodo ".text()"
     * In caso di json il metodo ".json()"
     * ecc..
     *
     * Questi metodi mi formattano il contenuto del body della response rendendomelo usufruibile.
     * Son tutti metodi "promise based", pertanto dovranno essere usati come una promise, ergo: per accedere al loro
     * contenuto dovremmo usare il "then"
     *
     */
    return response.json();
  })
  // ascolto la risoluzione di .json()
  .then(function(contenutoDellaRispotaComeOggetto) {

    // accedo al contenuto della risposta ma tradotto nel formato da me richiesto
    console.log(contenutoDellaRispotaComeOggetto);
  })
  // ascolto eventuali errori
  .catch(function(err) {
    console.error('Request Failed', err)
  } ); // gestisci gli errori


/**
 *
 * Fetch -> OPTIONS
 *
 */

let options = {
  method: 'POST', // verbo http tramite il quale fare la chiamata: *GET, POST, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({titolo: "Il signore degli anelli"}) // il contenuto che vogliamo passare all'endpoint
};


/**
 *
 * Fetch -> fare una chiamata in POST
 *
 */

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Il signore degli anelli',
    body: 'La avventure di Samvise',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error("Fetch error", error));


/**
 *
 * ASYNC - AWAIT
 *
 */

// "decoro" la funziona con "async"
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Esempio async/await. Promessa risolta!"), 1000)
  });

  // aspetto la risoluzione della promessa che mi restituirà il dato ritornato
  let result = await promise;

  // utilizzo il dato ritornato dalla promessa
  console.log(result);
}
f();


/**
 *
 * Async/Await + Fetch
 *
 */

// dichiaro una funzione di tipo async per poter usare l'await al suo interno
const getData = async function() {
  // aspetto la risoluzione della chiamata
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  // aspetto la generazione/formattazione del contenuto della response
  const data = await response.json()
  // uso il contenuto della response
  console.log(data)
};

getData();






/**
 * URL  
 * creare un oggetto URL per gestire la creazione/manipolazione di eventuali link
 * 
 */

let url = new URL('https://jsonplaceholder.typicode.com/posts');

url.searchParams.append("prova_parametro", "valore-parametro");
url.searchParams.append("altra-query-string", "suo-rispettivo-valore")

console.log(url.href) // https://jsonplaceholder.typicode.com/posts?prova_parametro=valore-parametro&altra-query-string=suo-rispettivo-valore