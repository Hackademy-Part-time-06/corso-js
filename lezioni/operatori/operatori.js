"use strict"

console.log("Gli operatori");

/**
 *
 * Operatori di confronto
 *
 */
var x = 2;
var y = "2";
var z = 1;

// comparazione debole
console.log( x == y ) // true
console.log( x != y ) // false

// comparazione stretta -> oltre che il valore viene controllato anche la tipologia di dato
console.log( x === y ) // false
console.log( x !== y ) // true

console.log( x > z ) // true
console.log( x < z ) // false
console.log( x >= z ) // true
console.log( x <= z ) // false

/**
 *
 * Operatori aritmentici
 *
 */
x + z; // addizione
x - z; // sottrazione
x / z; //divisione
x * z; // moltiplicazione
x % z; // modulo o resto
x++; // forma contratta di x + 1
x--; // forma contratta di x - 1


/**
 *
 * Operatori logigi
 *
 */
x && y; // && -> "and"
x || y; // && -> "or"
!x; // ! -> "not"


/**
 *
 * Concatenare operatori
 *
 */

(5 > 2) && (3 != 4)  // true
true || (4 >= 6)     // true
!(5==5)              // false


/**
 *
 * typeof
 *
 */

typeof x; // ritorna il tipo di variabile (numeber, string, ecc..)