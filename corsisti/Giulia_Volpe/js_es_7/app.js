// ESERCIZIO 38
/*
function operazione(arr1, arr2, operatore){

   let result = [];

   result = arr1.map(function(x,idx){
        switch(operatore){
            case "+":
                x += arr2[idx]
            break;
            case "-":
                x -= arr2[idx]
            break;
            case "x":
                x *= arr2[idx]
            break;
            case ":":
                x /= arr2[idx]
            break;
        }

    return x
   })
   return result
}

console.log(operazione([1, 2, 3],[4, 5, 6],"+"));
*/
 //ESERCIZIO 39
/*
function media(arr){
    let total = 0
    arr.forEach(x => {
        return total += x
    });

    return total / arr.length
   
}
console.log(media([1, 2, 3, 4, 5]))

function minMedia(arr, media){
    let min = [];
    min = arr.filter(x =>{return x < media})
    return min
}
console.log(minMedia([1, 2, 3, 4, 5],media([1, 2, 3, 4, 5])))
*/
//ESERCIZIO 40
/*
function sonoDivisibili(num, div){
    let result = []
    result = num.filter(x => {return !(x % div)})
    return result
}
console.log(sonoDivisibili([1, 3, 4, 6, 8, 5],2))
*/
//ESERCIZIO 42
/*
function positiveSum(arr){
    let positive = arr.filter(num => {return num > 0})
    console.log("I numeri positivi sono: ", positive)
    let sumPos = positive.reduce((numer, x) => {return numer = numer + x},0)
    return sumPos
}
console.log("La somma dei positivi è: ", positiveSum([1,-4,7,12]))
*/

//ESERCIZIO 43
/*
function double(arr){
    let doubleArr =  arr.map(num => {return num*2})
    return doubleArr
}
console.log(double([1, 2, 3]))
*/

//ESERCIZIO 46
/*
let frase = "Ciao sono un esercizio sui metodi avanzati degli array"
let array = frase.split(" ")
console.log(array)

function justFirst(arr){
    let result = ""
    arr.forEach(parola => {
        console.log(parola)
        result += parola.charAt(0)
        
    })
    return result
}
console.log(justFirst(array))
*/

//ESERCIZIO 47
/*
let words = [
    ["abc", "gino", "aaa"], // prova per capire il meccanismo e riuscire a non dichiarare
    ["abc", "dino", 123],   // variabili prima della funzione
    ["aaa", "gino", 321]
]
*/
/*
function ridArray(arr){
    let arrRid = arr.reduce((item, num) =>{
        return item.concat(num)
    })
    return arrRid
};

console.log(ridArray([["abc", "gino", "aaa"],["abc", "dino", 123],["aaa", "gino", 321],["xyz", "klm", "aaa"]]));
*/
//ESERCIZIO 48

/*
let result = []
function sonoDivisibili(numbers){
    result = numbers.filter((num) => {return(num % 2 == 0)})

    return result
}
console.log("I numeri divisibili sono: " + sonoDivisibili([1, 2, 3, 4, 5, 6, 7, 8, 9]))
function sumDivisible(result){
    let somma = 0
    result.map(function (val) {
        return somma += val
    })
    return somma
}
console.log("La loro somma è: " + sumDivisible(result))
*/
