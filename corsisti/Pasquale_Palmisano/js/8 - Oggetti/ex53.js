/*Scrivi una funzione che conti le occorrenze dei singoli elementi presenti in array annidati:
es: 

    input:
        
        
    output: 
        {
            123: 1
            321: 1
            abc: 1
            gino:2
            dino:1
            aaa:3
            ccc:1
            ddd:2
        }*/

let prova = [
    ["abc", "gino", "aaa"],
    ["abc", "dino", 123],
    ["aaa", "gino", 321],
    ["xyz", "klm", "aaa"],
]

console.log(occorrenze(prova));

function occorrenze(array) {
    
    let result = new Object

    array.forEach(x => {
        x.forEach(y => {
            Object.defineProperty(result, y, {value: 0, writable: true})
        })
    });

    array.forEach(x => {
        x.forEach(y => {
            result[y] += 1
        })
    });
    
    return result
}