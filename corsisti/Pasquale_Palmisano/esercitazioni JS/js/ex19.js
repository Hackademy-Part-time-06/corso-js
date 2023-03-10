let pass = prompt("Metti la password")
let passlenght = true
let symbols = false
let number = false

if (pass.length < 6 || pass.length > 20) {
    passlenght = false
}

for (let i = 0; i < pass.length; i++) {
    if (pass.charAt(i) == "!" || pass.charAt(i) == "_" || pass.charAt(i) == "-") {
        symbols = true
    }
}

for (let i = 0; i < pass.length; i++) {
    if (!isNaN(pass.charAt(i))) {
        number = true
    }
}

if (passlenght && symbols && number) {
    console.log("Bravo, hai messo una password efficacie")
}

console.log("lunghezza", passlenght)
console.log("caratteri speciali", symbols)
console.log("numero", number)