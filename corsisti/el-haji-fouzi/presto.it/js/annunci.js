console.log("file annunci caricato");


function caricaAnnunci() {
    fetch("../server/annunci.json")
        .then(response => response)
        .then(listaAnnunci => {
            console.log("la lista delle annunci :", listaAnnunci);
        })



}
caricaAnnunci();