/*Esercizio 51

Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili. 
Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.*/

let garage = {
    car: [
        {brand: "BMW", model: "320d"},
        {brand: "BMW", model: "X3"},
        {brand: "BMW", model: "X5"},
        {brand: "Audi", model: "Q5"},
        {brand: "Fiat", model: "Panda 4x4"},
        {brand: "Fiat", model: "Punto"},
        {brand: "Fiat", model: "Panda"}
    ],

    finder: function() {
        let brand = prompt("Che marca di auto stai cercando?")

        console.log(this.car.filter(x => {return x.brand === brand}))
    }
}

