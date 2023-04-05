/* Esercizio 38

Scrivi un programma che dati:

- 2 array di 10 elementi interi casuali compresi tra 1 e 10,
- il tipo di operazione aritmetica da effettuar tra una delle seguenti:
        addizione
        sottrazione
        moltiplicazione
        divisione

Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

    Esempio:
    Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15] */

    let arr1 = [1,2,3,4,5,6,7,8,9,10]
    let arr2 = [1,2,3,4,5,6,7,8,9,10]
    let result = []


    function operation(a1, a2, op) {
        let result = []

        switch (op) {
            case "+":
                result = a1.map((x,y) => {
                    return x + a2[y]
                })
                break
            case "-":
                result = a1.map((x,y) => {
                    return x - a2[y]
                })
                break
            case "*":
                result = a1.map((x,y) => {
                    return x * a2[y]
                })
                break  
            case "/":
                result = a1.map((x,y) => {
                    return x / a2[y]
                })
                break
        }

        return result
    }