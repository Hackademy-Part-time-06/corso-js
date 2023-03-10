// esercizio 8

num1=10
num2=20
num3=35
num4=50
num5=70

somma= (num1+num2+num3+num4+num5)

console.log (somma)

media= (num1+num2+num3+num4+num5)/5

console.log (media)

//esercizio 9

nume1=prompt ("inserisci un numero")
nume2=prompt ("inserisci un numero")
nume3=prompt ("inserisci un numero")
nume4=prompt ("inserisci un numero")
nume5=prompt ("inserisci un numero")

nume1= +nume1
nume2= +nume2
nume3= +nume3
nume4= +nume4
nume5= +nume5
somma3= (nume1+nume2+nume3+nume4+nume5)

console.log (somma3)

media3= (nume1+nume2+nume3+nume4+nume5)/5

console.log (media3)


//esercizio 10

annoNascita= 1994
anno= 2023
età= (anno - annoNascita)
console.log (100-età)



//esercizio 11
let name= ("giovanni")
primaLettera= name.charAt(0)
letteraMaiuscola= primaLettera.toUpperCase(0)
nomeScomposto= name.slice(1)
nomeMaiuscolo= (letteraMaiuscola + nomeScomposto)


//esercizio 12

let numero= ("3823388024")

primeCifre= numero.slice(0,7)
ultimeCifre= numero.slice(7,10)

cifreNascoste= primeCifre.replace (primeCifre,"*******")
numeroNascoto= (cifreNascoste + ultimeCifre)
console.log (numeroNascoto)

//esercizio 13

numero1= 10
numero2= 20
numero3= 30
numero4= 40
numero5= 50

numeroMax= Math.max(numero1, numero2, numero3, numero4, numero5)
console.log (numeroMax)
numeroMin= Math.min(numero1, numero2, numero3, numero4, numero5)
console.log (numeroMin)

//esercizio 14

somma2= (0.1*10 + 0.2*10)/10

console.log (somma2)

//esercizio 15

numeroRandom= Math.ceil(Math.random()*6)
console.log (numeroRandom)

//esercizio 16

gatti= 44

gattiPerFila= 6

fileTot= gatti/gattiPerFila

file= Math.ceil(fileTot)

console.log (file)

gattiRimanenti= file*gattiPerFila-gatti

console.log (gattiRimanenti)

