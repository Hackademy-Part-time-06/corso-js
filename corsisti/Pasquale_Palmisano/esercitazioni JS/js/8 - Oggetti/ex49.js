/*Esercizio 49

Definisci un oggetto playlist che contiene una proprietà canzoni.
Inserisci una o 2 canzoni e ciascuna deve avere le seguenti proprietà:
titolo
nomeCantante
anno

Dopo prevedi la possibilità di far inserire all’utente delle nuove canzoni.
Ad ogni canzone inserita stampa in console tutte le canzoni:*/

let playlist = {
    songs: [{
        title: "Clint Eastwood",
        artist: "Gorillaz",
        year: 2001
    }],

    add_song: function () {
        let title = prompt("Inserisci titolo")
        let artist = prompt("Inserisci artista")
        let year = Number(prompt("Inserisci anno"))
    
        this.songs.push(
            {
                title: title,
                artist: artist,
                year: year
            }
        )

        this.songs.forEach(function(song) {
            console.log(song);
        })
    }
}