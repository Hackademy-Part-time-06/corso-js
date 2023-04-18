<?php

//esercizio 3
// $intero = 22;
// $float = 56.32;
// $string = "ciao";
// $bollean = true;
// $null = null;

// var_dump($intero);
// var_dump($float);
// var_dump($string);
// var_dump($bollean);
// var_dump($null);


//esercizio 4
// const INTERO = 22;
// const FLOAT = 56.32;
// const STRING = "ciao";
// const BOOLEAN = true;
// const NULLA = null;

// echo INTERO;
// echo FLOAT;
// echo STRING;
// echo BOOLEAN;
// echo NULLA;

// esercizio 5
// $text = "Marco"; 
// $text2 = "hai"; 
// $text3 = "sete"; 
// $text4 = "?";
// $text5 = "Perchè";
// $text6 = "$text2";
// $text7 = 'bevuto';
// $text8 = "tutto";

// echo $text . " " . $text2 ." ". $text3 . $text4 . " " . $text5 ." ".  $text6 . " " . $text7 . " " . $text8;

//esercizio 6

/*
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
        [
          'cammin',
          'Nel',
          [
            'selva',
            'la',
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
    'del',
  'diritta',
  'di',
  ','
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
//   var_dump($words1[6][3][1][1]);
//   var_dump($words1[6][3][0]);
//   var_dump($words1[7]);
//   var_dump($words1[6][3][1][0]);
//   var_dump($words1[9]);
//   var_dump($words2 ['elemento2']);
//   var_dump($words1 [2]);
//   var_dump($words1 [4]);
//   var_dump($words1[6][4]);
//   var_dump($words1[6][5]);
//   var_dump($words1[0]);
//   var_dump($words1[6][3][1][2][0]);
//   var_dump($words1[6][0]);
//   var_dump($words1[10]);
//   var_dump($words2 ['elemento3'][2]);
//   var_dump($words1[6][3][1][2][1]);
//   var_dump($words1[8]);
//   var_dump($words1[6][3][1][2][2][0]);
//   var_dump($words1[6][1]);
//   var_dump($words2 ['elemento3'][1]);


  $results =  $words1[6][3][1][1]." ". $words1[6][3][0]." ".$words1[7]." ".$words1[6][3][1][0]." ".$words1[9]." ".$words2 ['elemento2']." ".$words1 [2]." ".$words1 [4]." ".$words1[6][4]." ".$words1[6][5]." ".$words1[0]." ".$words1[6][3][1][2][0]." ".$words1[6][0].$words1[10]." ".$words2 ['elemento3'][2]." ".$words1[6][3][1][2][1]." ".$words1[8]." ".$words1[6][3][1][2][2][0]." ".$words1[6][1]." ".$words2 ['elemento3'][1];
  echo $results
*/

//esercizio 7


// $x = 10;
// $y = 18;
// $z = 56.0;
// $t = 0.8;


// echo $somma = $x + $y;
// echo $sottrazione = $z - $t;
// echo $divisone = $z / $x;
// echo $moltiplicazione = $y * $x;
//echo $media =( $x + $z + $y + $t) / 5;

//esercizio 8


$a = false;
$b = true;
$c = true;
$d = false;

//primo blocco

$ab = !$a && $b; //true
$ad = $a || $d; // false
$bc = $b && $c; //True
$bd = !$b || $d; //False
$cb = $c && $b; //True
$ca = !$c || $a; //false

//secondo blocco 
$cabc = !$ca && $bc; 
$cbbc = $cb && $bc; 
$bdab = $bd || $ab;
$bccb = $bc && !$cb; 
$bcab = !$bc || !$ab; 
$bcca = $bc || !$ca; 

// terzo blocco
$cbbccabc = $cbbc || $cabc;
$bccbbdab = !$bccd && $bdab;
$cabcbcca = $cabc && !$bcca;
$bdabbccb = $bdab && $bccb;
$cbbcbccb = !$cbbc || $bccb;
$cabcbccb = $cabc || !$bccb;

var_dump($cbbccabc); //True
var_dump($bccbbdab); //True
var_dump($cabcbcca); //False
var_dump($bdabbccb); //False
var_dump($cbbcbccb); //False
var_dump($cabcbccb); //True
?>