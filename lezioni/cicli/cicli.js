"use strict"

console.log("I cicli");

/**
 *
 * FOR
 *
 */

/**
 *
 * let i = 0 -> dichiaro l'indice del for che andrò ad incrementare/decrementare
 * i < 10 -> condizione che finchè è vera fa continuare l'esecuzione del for
 * i++ -> incremento l'indice in modo da arrivare ad una condizione di invalidità della condizione e bloccare il ciclo
 *
 */

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// decrementale
for (let i = 10; i > 0; i--) {
  console.log(i)
}

// for innestato
for (let i = 0; i < 10; i++) {
  console.log("-", i);
  for (let x = 0; x < 10; x++) {
    console.log("---", x);
  }
}

// esempio
let frase = "Batman ";
for (let i = 0; i < 8; i++) {
    frase = frase + "na ";
    frase += "NA ";
}
console.log(frase)


/**
 *
 * WHILE
 *
 */
let i = 0;

while (i < 10) {
  console.log("while", i);
  i++; // incremento i fino a che non arriva a 10 e blocca l'esecuzione del while invalidando la condizione iniziale
}



/**
 *
 * DO WHILE
 * come il WHILE ma la prima iterazione viene sempre eseguita
 *
 */
let x = 0;
do {
  console.log("do while", x);
  x++;
}
while(x < 10);



/**
 *
 * OPERATORI DEI CICLI
 *
 */

// BREAK - interrompe il ciclo
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log("For con il BREAK", i);
}

// CONTINUE - salta l'iterazione in cui viene trovato passando alla successiva
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  console.log("For con il continue", i);
}


