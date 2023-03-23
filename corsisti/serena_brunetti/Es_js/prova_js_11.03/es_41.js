//Dato un array x e un valore y. Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.

function includes (x, y) {
    let bIncludes = false 
    if (x.includes(y)) {
        bIncludes = true
    }
    return bIncludes
}
let bIncludesOK = includes(["casa", "sasso", "cacca", "telecomando"], "cacca")
console.log(`Il valore indicato è incluso nell'array? ${bIncludesOK}`)