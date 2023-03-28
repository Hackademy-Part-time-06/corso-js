"use strict"
console.log("Esercizio 49");
console.log("File JS caricato correttamnte");
/*
Definisci un oggetto playlist che contiene una proprietà canzoni.
Inserisci una o 2 canzoni e ciascuna deve avere le seguenti proprietà:
titolo
nomeCantante
anno

Dopo prevedi la possibilità di far inserire all’utente delle nuove canzoni.
Ad ogni canzone inserita stampa in console tutte le canzoni:
*/
/*
let playlist = {
    canzone_1 : {
        titolo : "La Mazurca di periferia",
        nomeCantante : "Bello Figo",
        anno : "2030",
    },

    canzone_2 : {
        titolo : "La Mazurca di periferia",
        nomeCantante : "Bello Figo",
        anno : "2030",
    },

};
*/

function Playlist (titolo, nomeCantante, anno){
    this.titolo = titolo;
    this.nomeCantante = nomeCantante;
    this.anno = anno;

    this.getTitolo = function(){
        return this.titolo;
    };

    this.getnomeCantante = function(){
        return this.nomeCantante;
    };

    this.getAnno = function(){
        return this.anno;
    };

}

let canzone1 = new Playlist("La Mazurca", "Bello Figo", "2030");
let canzone2 = new Playlist("La Polca", "Gino", "2035");
let canzone3 = new Playlist("Prova", "Ignazio", "1990");
let canzone4 = new Playlist(prompt("Titolo: "), prompt("Cantante: "), prompt("Anno: ") )

let canzoni = [canzone1, canzone2, canzone3, canzone4];
console.log(canzoni);
/*
Playlist(canzoni);
console.log(canzoni);
*/

