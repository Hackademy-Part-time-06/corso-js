//Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili. Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}). Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

let garage = {
    auto1: {
        brand: "jeep",
        model: "renegade",
    },
    auto2: {
        brand: "jeep",
        model: "compass"
    },
    auto3: {
        brand: "fiat",
        model: "500x",
    },
    auto4: {
        brand: "fiat",
        model: "panda",
    },
    auto5: {
        brand: "renault",
        model: "twingo",
    },
    auto6: {
        brand: "renault",
        model: "megane",
    },
}

function automobili(brand) {
    if (brand === "jeep") {
        console.log(garage.auto1.model, garage.auto2.model)
    }
    else if (brand === "fiat") {
        console.log(garage.auto3.model, garage.auto4.model)
    }
    else if (brand === "renault") {
        console.log(garage.auto5.model, garage.auto6.model)
    }
    else {
        console.log("Inserisci una marca corretta")
    }
}
automobili(prompt("inserisci auto"))

//

let auto = {
    aumomobili: [{
        brand: "jeep",
        model: "renegade",
    }, {
        brand: "fiat",
        model: "500",
    }, {
        brand: "toyota",
        model: "yaris",
    }, {
        brand: "jeep",
        model: "compass"
    }],
    cercaAuto: function (nome) {
        let modelloInPossesso = garage.aumomobili.filter(function (auto, index) {
            return auto.brand === nome
        })
        console.log(modelloInPossesso)
    }
};
let nome = prompt("Inserisci il modello dell'auto")
garage.cercaAuto(nome)
