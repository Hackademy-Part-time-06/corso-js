/*Esercizio 39

Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.

    Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]*/

    let n = [10,15,20,54,88,100,6547]

    console.log(average(n));

    console.log(under_average(n, average(n)))

    function average(array) {
        let total = new Number
        
        array.forEach(x => {return total += x});

        return total / array.length
    }

    function under_average(array, average) {
        let under = []

        under = array.filter(x => {
            return x < average
        })

        return under
    }
   