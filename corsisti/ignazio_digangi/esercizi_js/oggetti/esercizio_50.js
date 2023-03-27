console.log("File caricato");

/*
Definisci un oggetto rubrica che ha come proprietà gli utenti. Per ogni utente specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).
Quindi popolare la rubrica con dei dati a piacere. 
Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.
*/


let rubrica = {
    utenti : {
        nome : "Ignazio",
        cognome : "Di Gangi",
        telefono : "999999",
        indirizzo : {
            via : "Via Col di Lana",
            città : "Seregno",
            provincia : "Monza e Brianza",
         
        }
    }
}

delete rubrica.utenti.telefono;
console.log(rubrica.utenti.telefono);