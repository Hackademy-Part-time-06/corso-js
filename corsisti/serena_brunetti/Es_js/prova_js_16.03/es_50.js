/*Definisci un oggetto rubrica che ha come proprietà gli utenti. Per ogni utente specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).
Quindi popolare la rubrica con dei dati a piacere. 
Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.*/

let rubrica = {
    utente1: {
        nome: "Mario",
        cognome: "Rossi",
        telefono: 45214550,
        indirizzo: {
            via: "via delle Petunie",
            città: "Milano",
            cap: 45210,
        }
    },
    utente2: {
        nome: "John",
        cognome: "Smith",
        telefono: 0215000,
        indirizzo: {
            via: "via delle Magnolie",
            città: "Bari",
            cap: 1250,
        }
    },
    utente3: {
        nome: "Giovanni",
        cognome: "Lorusso",
        telefono: 256611,
        indirizzo: {
            via: "via dei Girasoli",
            città: "Bergamo",
            cap: 25660,
        }
    }
}
console.log(rubrica)
delete rubrica.utente2.nome
console.log("Dopo il delete: ", rubrica)
