/*
//ESERCIZIO 37
let max = 10
let min = 0
const Arr = []
for (let i=1; i<=max; i++){
    let numeriCasuali = Arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
}
console.log(Arr)

/*
Arr.sort() viene utilizzato per ordinare gli elementi di un Array in ordine alfabetico nel caso si trattasse di stringhe. Tuttavia ,se i numeri sono "sortati" come stringhe, "25" risulterà più grande di "100" perchè "2" è più grande di "1". A causa di cio, il metodo sort() produrrà risultati incorretti quando "sortiamo" numeri.
Per evitare ciò utilizzo una funzione di comparazione

//Crescente
Arr.sort(function(a, b){
    return a - b
})
console.log(Arr)

//Decrescente
Arr.sort(function(a, b){
    return b - a
})
console.log(Arr)
*/
/*
//ESERCIZIO 38
const Arr1 = []
const Arr2 = []
const Arr3 = []
let max = 10
let min = 1
for (i=0;i<max;i++){
    let numeriArr1 = Arr1.push((Math.floor(Math.random() * (max - min + 1)) + min))
    let numeriArr2 = Arr2.push((Math.floor(Math.random() * (max - min + 1)) + min))
}
console.log(Arr1)
console.log(Arr2)
for(i=0;i<Arr1.length;i++){
    let risultato = (Arr1[i] * Arr2[i])
    Arr3.push(risultato)
    console.log(`${Arr1[i]} * ${Arr2[i]} = ${risultato}`)
}
console.log(Arr3)
*/
/*
//ESERCIZIO 39
const Arr1 = []
let max = 10
let min = 1
for (i=0;i<max;i++){
    let numeriArr1 = Arr1.push((Math.floor(Math.random() * (max - min + 1)) + min))
}
console.log(Arr1)
//Ordino gli elementi in maniera crescente
Arr1.sort(function(a, b){
    return a - b
})
console.log(Arr1)
//Utilizzo Arr1.slice() per estrarre i primi tre valori piu piccoli di Arr1 ed insierirli in un altro array
const Arr2 = Arr1.slice(0,3)
console.log(Arr2)
//Inizializzo la somma
let somma = 0
let somma1 = 0 
//Passo fra ogni elemento dell'array con un for oppure
for(let i=0;i<Arr1.length;i++){
    let numero = Arr1[i]
    somma = somma + numero //Si può scrivere anche somma += numero "somma + se stessa + numero"
}
console.log(`Media = ${somma/Arr1.length}, Valori minori= ${Arr2}`)
//con .forEach. Per ogni "numero1" dell'array "Arr1" la somma è uguale a somma + "numero1"
Arr1.forEach(numero1=>{
    somma1 = somma1 + numero1 //Si può scrivere anche somma1 += numero "somma1 + se stessa + numero"
})
//Console.log(Media e valori piu piccoli)
console.log(`Media = ${somma1/Arr1.length}, Valori minori= ${Arr2}`)
*/

//ESERCIZIO 40
/*
const Arr1 = [1,2,3,4,5,6,,7,8,9,10]
let divisore = 2
const Arr2 =[]

for(let i=0;i<Arr1.length;i++){
    let numero = Arr1[i]
  if(numero % divisore == 0){
    Arr2.push(numero)
  }
}
console.log(Arr2)

//Metodo2
Arr1.forEach(numero1 =>{
    if(numero1 % divisore == 0){
        Arr2.push(numero1)
    }
})
console.log(Arr2)

//Metodo 3
function ciao(array, numero){
    array.forEach(numero1 => {
      if(numero1 % numero == 0){
        Arr2.push(numero1)
      }
    })
}
ciao([1,2,3,4,5,6,,7,8,9,10], 2)
console.log(Arr2)
*/

/*
//ESERCIZIO 41

//Metodo 1
const Arr1 = ["Pesce", 3, 9, 10, "Mitico"]
let Y = "Great"
let X = 3
console.log(Arr1.includes(Y))
console.log(Arr1.includes(X))

//Metodo 2
function ciao(x, y){
    console.log(x.includes(y))
}
ciao(["BANANA", 3, "PESCE"], 3)
*/
/*
//ESERCIZIO 42
let somma = 0

function sumPositive(Arr){
    for(let i=0;i<Arr.length;i++){
        let numero = Arr[i]
        if(numero > 0){
            somma = somma + numero //Si può scrivere anche somma += numero "somma + se stessa + numero"
        }
    }
}
sumPositive([-1,3,-7,14])
console.log(somma)

function sumPositive(Arr){
    Arr.forEach(element => {
        if(element > 0){
            somma += element
        return somma
        }
    });
}
sumPositive([1,-4,7,12])
console.log(somma)
*/
/*
//ESERCIZIO 43
const Arr2 = []
function doppio(arr){
    arr.forEach(element => {
        Arr2.push(element * 2)
    });
}
doppio([1,2,3,4,5,6])
console.log(Arr2)
*/
/*
//ESERCIZIO 44
*/









































