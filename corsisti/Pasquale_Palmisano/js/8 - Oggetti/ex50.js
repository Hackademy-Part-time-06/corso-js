/*Esercizio 50

Definisci un oggetto rubrica che ha come proprietà gli utenti. Per ogni utente specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).
Quindi popolare la rubrica con dei dati a piacere. 
Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.*/

let rubrica = {
    utenti:[
        {
            nome: "Pasquale",
            cognome: "Palmisano",
            telefono: "3201931522",
            indirizzo: {
                via: "Via Benvenuto Cellini",
                civico: 21,
                cap: 72015,
                città: "Fasano",
                provincia: "Brindisi"
            }
        },

        {
            nome: "Alberto",
            cognome: "Di Clemente",
            telefono: "3492721364",
            indirizzo: {
                via: "Piazza Albanese",
                civico: 1,
                cap: 76125,
                città: "Trani",
                provincia: "BAT"
            }
        },

        {
            nome: "Emanuele",
            cognome: "Manera",
            telefono: "3333330774",
            indirizzo: {
                via: "Via Palestro",
                civico: "30/6",
                cap: 27035,
                città: "Mede",
                provincia: "Pavia"
            }
        }
    ]
}

console.log(rubrica.utenti);

delete rubrica.utenti[0].nome

console.log(rubrica.utenti);
