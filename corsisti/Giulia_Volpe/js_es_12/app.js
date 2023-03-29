"use strict"
//ESERCIZIO 72
 //modo 1 
 /*
const dice = document.getElementById("lancia-dado")
const diceOutput = document.getElementById("dado")

dice.addEventListener("click", function (event) {
    let lancioDado = Math.floor(Math.random() * 6 + 1);
    diceOutput.append(`Il numero uscito è: ${lancioDado} `)
})
*/
// modo 2
function throwDice() {
    const dice = document.getElementById("lancia-dado")
    const diceOutput = document.getElementById("dado")

    dice.addEventListener("click", function (event) {
        let lancioDado = Math.floor(Math.random() * 6 + 1);
        diceOutput.append(`Il numero uscito è: ${lancioDado} `)
    })
}

throwDice()


//ESERCIZIO 73
const anchor = document.querySelector("a");
let contatore = 0;
anchor.addEventListener("click", function(event){
    contatore++
    if(contatore <= 3){
        event.preventDefault();
        alert("Cliccami ancora!")
    }
})


//ESERCIZIO 74

libreria()

function libreria(){
    const libri = [
        {
            titolo: "Il Signore degli Anelli",
            autore: "Tolkien",
            categoria: "fantasy",
        },
        {
            titolo: "Harry Potter",
            autore: "Rowling",
            categoria: "fantasy",
        },
        {
            titolo: "Il Conte di Montecristo",
            autore: "Dumas",
            categoria: "narrativa classica",
        },
        {
            titolo: "Dune",
            autore: "Herbert",
            categoria: "fantascienza",
        },
        {
            titolo: "Fight Club",
            autore: "Palahniuk",
            categoria: "narrativa moderna",
        }
    ];

    let targetContainer = document.getElementById("target-container");
    let listaLibri = document.createElement("ul");
    listaLibri.innerText = "Lista di libri"
    targetContainer.append(listaLibri)
    targetContainer.append(listaLibri)
    libri.forEach(libro =>{
        let listItem = document.createElement("li");
        listItem.innerText = libro.titolo
        targetContainer.append(listItem)
        let favButton = document.createElement("button");
        favButton.innerText = "Aggiungi ai preferiti";
        favButton.setAttribute("class", "m-2")
        listItem.append(favButton)
        targetContainer.addEventListener("click", function(event){
            if(event.target === favButton){
                alert("Il libro " + libro.titolo + " è stato aggiunto ai preferiti")
            }
        })
    })
        

}


// ESERCIZIO 75
calculator()
function calculator(){
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");
    let total = document.getElementById("total");
    let container = document.getElementById("operazioni")
//    let plus = document.getElementById("plus");
  //  let minus = document.getElementById("minus");
    //let multiply = document.getElementById("multiply");
    //let divide = document.getElementById("divide");
    container.addEventListener("click", function(event){
        if(event.target.hasAttribute("data-operazione")){
            let risultato = 0;
            let val1 = Number(num1.value);
            let val2 = Number(num2.value)
            const operazione = event.target.getAttribute("data-operazione");
            switch(operazione){
                case "plus": 
                risultato = val1+val2
                console.log(risultato);
                break
                case "minus": 
                risultato = val1-val2
                console.log(risultato);
                break
                case "multiply": 
                risultato = val1*val2
                console.log(risultato);
                break
                case "divide": 
                risultato = val1/val2
                console.log(risultato);
                break
                
            }
            total.value = risultato
        }
    })

}


