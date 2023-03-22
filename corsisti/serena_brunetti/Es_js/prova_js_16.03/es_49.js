/*Definisci un oggetto playlist che contiene una proprietà canzoni.
Inserisci una o 2 canzoni e ciascuna deve avere le seguenti proprietà:
titolo
nomeCantante
anno
Dopo prevedi la possibilità di far inserire all’utente delle nuove canzoni.
Ad ogni canzone inserita stampa in console tutte le canzoni:*/

let playlist = {
    canzoni: {
        brano1: {
            titolo: "Ora basta",
            nomeCantante: "Giorgia",
            anno: 2007,
        },
        brano2: {
            titolo: "Luce",
            nomeCantante: "Giorgia",
            anno: 2001,
        },
        brano3: {
            titolo: prompt("Inserisci il titolo della canzone"),
            nomeCantante: prompt("Inserisci il nome del cantante"),
            anno: prompt("Inserisci l'anno della canzone"),
        },
        brano4: {
            titolo: prompt("Inserisci il titolo della canzone"),
            nomeCantante: prompt("Inserisci il nome del cantante"),
            anno: prompt("Inserisci l'anno della canzone"),
        }
    }
}

console.log("Le canzoni sono: ", playlist.canzoni)
