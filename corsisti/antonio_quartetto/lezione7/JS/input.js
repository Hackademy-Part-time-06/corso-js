
/*esercizio46*/


let frase = function(fraseArray) {
    let iniziali = [];
    fraseArray.forEach(item => {
        let paroleSingole = item.split(" ")

        //console.log(`Questa è ogni signola iniziale ${paroleSingole}`)

        paroleSingole.forEach(parola => {

            let singolaLettera = parola.charAt(0);

            iniziali.push(singolaLettera)
           
        })
        
    })
    return iniziali.join("")
}

console.log(`Queste sono le iniziali di ogni parola della frase --> ${frase(["Ciao sono un esercizio sui metodi avanzati degli array"])}`)


/*esercizio47*/

let unicoArray = function(arrayPrincipale){
    
   let unificazione = [];

    arrayPrincipale.forEach(item => {

       unificazione.push(item.join(" "))
        })
        

    return unificazione.join(" ")
}


console.log(`Questo è un unico Array --> ${unicoArray(
    [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
    ]
    )}`
)



/*esercizio48*/


let sommaDivisibili2 = function(array){
    let tot = 0;
    array.forEach(number => {

       if (number % 2 === 0){
            tot += number
        }
        
    })
    return tot 
}

console.log(`Questa è la somma dei numeri divisibili per 2 --> ${sommaDivisibili2([1, 2, 3, 4, 5, 6, 7, 8, 9])}`)


