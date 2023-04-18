<?php

/*esercizio 3 - variabili

$intero = 10;
$float = 10.67;
$stringa = 'Questa è una stringa';
$bool = true;
$null = null;

var_dump(gettype($intero));
var_dump(gettype($float));
var_dump(gettype($stringa));
var_dump(gettype($bool));
var_dump(gettype($null));
*/


/* esercizio 4 - costanti
const INTERO = 10;
const NUMEROFLOAT = 10.67;
const STRINGA = 'Questa è una stringa';
const BOOLEANO = true;
const NULLA = null;

echo INTERO;
echo NUMEROFLOAT;
echo STRINGA;
echo BOOLEANO;
echo NULLA;
*/

/* esercizio 5 - concatenare le stringhe

$text1 = "Marco"; 
$text2 = "hai"; 
$text3 = "sete"; 
$text4 = "?";
$text5 = "Perchè";
$text6 = "$text2";
$text7 = 'bevuto';
$text8 = "tutto";

$concateno_tutto = $text1." ".$text2." ".$text3.$text4." ".$text5." ".$text6." ".$text7." ".$text8;

var_dump($concateno_tutto);
*/

/* esercizio 6 - dati i seguenti array


$words1 = [
    'una',
    67,
    'vita',
    'colle',
    'mi',
    'rosso',
    [
        'oscura',
        'era',
        89,        
        [
            'mezzo',
            'del',
            [
                'cammin',
                'Nel',
                [
                    'selva',
                    'la',
                    'di',
                    [
                        'via',
                        'una',
                        true,
                    ]
                ],
            ]
        ],
        'ritrovai',
        'per'
    ],
    'diritta',
];
  
$words2 = [
    'elemento1' => 25.89,
    'elemento2' => 'nostra', 
    'elemento3' => [
        'Virgilio',
        'smarrita',
        'ché'
    ]
];
  
$results =  $words1[6][3][2][1]." ".$words1[6][3][0]." ".$words1[6][3][1]." ".$words1[6][3][2][0]." ".$words1[6][3][2][2][2]." ".$words2['elemento2']." ".$words1[2]." ".$words1[4]." ".$words1[6][4]." ".$words1[6][5]." ".$words1[6][3][2][2][3][1]." ".$words1[6][3][2][2][0]." ".$words1[6][0];
// fino ad oscura, da finire
echo $results;
*/

/* esercizio 7 - operazioni tra numeri interi e float

$x = 10;
$y = 18;
$z = 56.0;
$t = 0.8;


$somma = $x + $y;
$sottrazione = $z - $x;
$divisione = $z / $t;
$moltiplicazione = $x * $y;
$media = $z % $y;

echo "Somma:", $somma;
echo "Sottrazione:", $sottrazione;
echo "Divisione:", $divisione;
echo "Moltiplicazione:", $moltiplicazione;
echo "Media:", $media;
*/

// esesrcizio 8 - operatori logici

//Dicharazione Varabili
$a = false;
$b = true;
$c = true;
$d = false;


//Primo Blocco Esempio Completo
$ab = !$a && $b; //true
$ad = $a || $d; // false
$bc = $b && $c; //True
$bd = !$b || $d; //False
$cb = $c && $b; //True
$ca = !$c || $a; //false

//Secondo Blocco Da completare
$cabc = $ca && $bc; //false
$cbbc = $cb || $bc; //true
$bdab = $bd && $ab; //false
$bccb = !$bc && !$cb; //true
$bcab = !$bc || !$ab; //false
$bcca = $bc && !$ca; //true

//Terzo Blocco Da completare
$cbbccabc = $cbbc || $cabc; //true
$bccbbdab = $bccb && $bdab; //false
$cabcbcca = !$cabc && $bcca; //true
$bdabbccb = $bdab && $bccb; //false
$cbbcbccb = $cbbc || $bccb; //true
$cabcbccb = $cabc && $bccb; //false

//Output Esempio Completo
var_dump($cbbccabc); //True
var_dump($bccbbdab); //True
var_dump($cabcbcca); //False
var_dump($bdabbccb); //False
var_dump($cbbcbccb); //False
var_dump($cabcbccb); //True