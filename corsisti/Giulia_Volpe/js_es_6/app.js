//ESERCIZIO 37
/*
let numCasuali = [13, 4, 98, 63, 18, 32, 13, 26, 6, 57];

let numRev = numCasuali.sort(function (a,b){
   return a-b

})
console.log(numRev.reverse()) //ordine decrescente 
console.log(numRev.reverse()) // ordine crescente
*/
 
//ESERCIZIO 38
/*
let listaNum1 = [3, 6, 9, 2, 4, 6, 8, 5, 7, 1];
let listaNum2 = [1, 7, 5, 8, 6, 4, 2, 9, 6, 3];
let sum = [];
let sub = [];
let mlt = [];
let div = [];

for(let i = 0; i < listaNum1.length; i++){
    sum.push(listaNum1[i]+listaNum2[i]);
    sub.push(listaNum1[i]-listaNum2[i]);
    mlt.push(listaNum1[i]*listaNum2[i]);
    div.push(listaNum1[i]/listaNum2[i]).toFixed(2);
}
console.log(sum);
console.log(sub);
console.log(mlt);
console.log(div);
*/
//ESERCIZIO 39
/*
let num = [3, 6, 2, 8, 4, 9];
let sum = num.reduce(function(a,b){
    return a+b;
})
console.log(sum);
let media = sum/num.length;
console.log(media.toFixed(1));
 
for(let i = 0; i<num.length; i++){
    if(num[i]<media){
        let minMedia = num[i];
        console.log(minMedia)
    }
}
*/

//ESERCIZIO 40
/*
function sonoDivisibili(arr, divisore){
    for(i = 0; i < arr.length; i++){
        if(arr[i] % divisore === 0){
        console.log(`Sono divisibili ${arr[i]}`)
        }
    }
    
};
console.log(sonoDivisibili([1, 3, 4, 6, 8, 5],2));
*/

//ESERCIZIO 41
/*
function checkElement(arr, valore){
    console.log(arr.includes(valore));
}
console.log(checkElement([34, 56, 78, 43, 3, "ciao"], 43));
*/

//ESERCIZIO 42
/*
function sumPositive(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > 0 ){
            sum += arr[i]

        }
    }
    console.log(sum)
}

console.log(sumPositive([-2, 3, 5, -6, 4, 3]))
*/

//ESERCIZIO 43
/*
let numDouble = []
function double(arr){
    for(let i = 0; i<arr.length; i++){
       numDouble.push(arr[i]*2);
    }
    console.log(numDouble)
}
console.log(double([2, 3, 4, 5, 6]))
*/

//ESERCIZIO 44
/*
function whoWonChampionship(arr){
    let result = []
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i][0]>arr[i][2]){
            sum += 3;
        }
        else if(arr[i][0]===arr[i][2]){
            sum += 1;
        }
        else{
            sum +=0;
        }
    }
    return sum;
}
console.log(whoWonChampionship(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(whoWonChampionship(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
console.log(whoWonChampionship(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
console.log(whoWonChampionship(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))
*/