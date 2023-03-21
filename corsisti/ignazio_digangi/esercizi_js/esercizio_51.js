console.log("File caricato");

/*
Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili. 
Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
*/


let garagedeiSogni = {
    auto_1 : {
        Marca : "BMW",
        Modello : "Serie 4",
        Versione : "M",
    },
    
    auto_2 : {
        Marca : "Alfa Romeo",
        Modello : "Stelvio",
        Versione : "Quadrifoglio",
    },

    auto_3 : {
        Marca : "Alfa Romeo",
        Modello : "Tonale",
        Versione : "Veloce",
    },


}

function stampaMarca(){
    let auto = prompt("Inserisci marca auto: ");

    if (auto === "BMW" && "bmw")
    console.log(garagedeiSogni.auto_1)

    else if (auto === "Alfa Romeo" && "alfa romeo")
    console.log("Le auto disponibili sono: ", garagedeiSogni.auto_2, garagedeiSogni.auto_3)

    else 
    console.log("Mi dispiace non c'è la marca disponibile")


}

stampaMarca();