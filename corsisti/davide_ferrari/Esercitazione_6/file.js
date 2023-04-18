// ESERCIZIO 38

/*

Scrivi un programma che dati:

- 2 array di 10 elementi interi casuali compresi tra 1 e 10,
- il tipo di operazione aritmetica da effettuar tra una delle seguenti:
- addizione
- sottrazione
- moltiplicazione
- divisione

Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

    Esempio:
    Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15]

*/


function operazioneAritmeticaTraArray(lista1, lista2, operazione) {
    let risultato = [];
    lista1 = [3, 7, 2, 5, 8];
    lista2 = [9, 3, 1, 4, 7];
                        for (let i =  0; i < lista1.length; i++) {    
                        operazione = lista1[i] + lista2[i];
                        risultato.push(operazione);
                        } 
                        return risultato;
                    }







// Esercizio 39

/*
Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

Esempio:
Input: a = [3, 5, 10, 2, 8]
Output: media = 5.6, valori minori = [3, 5, 2]
*/
/*

function calcolo_Media_E_Valori_Minori(array, somma, media, valori_Minori) {
    array = [3, 5, 10, 2, 8];
    somma = 0;
    media = 0;
    console.log(array);
    for (let i =  0; i < array.length; i++) {
                                                somma += array[i];
                                            }
    media = somma / array.length;
    return media;
}

*/




//Esercizio 46

/*
Scrivi una funzione che, data una frase, ritorni la prima lettera di ogni parola presente nella frase:
es: 
input: “Ciao sono un esercizio sui metodi avanzati degli array” 
output: Csuesmada
*/

function ritorno_Prima_Lettera_Di_Ogni_Parola (array)   {
    array = ["Ciao", "mi", "chiamo", "Davide"];
        for (let i =  0; i < array.length -1; i++) {
            array += array[0];
        }
    
            


    return array;
}








