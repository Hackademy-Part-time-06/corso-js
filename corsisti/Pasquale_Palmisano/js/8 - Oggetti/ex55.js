/*Esercizio 55 

Il Calendario Settimanale

Scrivi un programma che generi un oggetto contenente i giorni della settimana.
Ogni giorno sarà un array al quale gli si potrà aggiungere un evento. 
L’evento sarà un oggetto contenente le chiavi

- nomeEvento
- inizioEvento (formato “08:00”)

esempio: 
{
nomeEvento: “Lezione”,
inizioEvento: “18:30”
}
Il programma dovrà permettere di:

- aggiungere singoli eventi per un determinato giorno: all’inserimento di questi bisognerà ordinare l’array in modo che l’orario di inizio sia una successione ordinata
- filtrare gli eventi di una specifica giornata
- cercare gli eventi per nome: questa funzione mi ritornerà le,eventuali, occorrenze dell’evento divise per giornata*/

let week = {
    monday: new Array,
    tuesday: new Array,
    wednesday: new Array,
    thursday: new Array,
    friday: new Array,
    saturday: new Array,
    sunday: new Array
}

function add_event(day, name, time) {
    week[`${day}`].push({name: `${name}`, time: `${time}`})
    order(`${day}`)
}

function order(day) {
    week[`${day}`].sort((x,y) => x.time - y.time)
}

//NON RIESCO A ORDINARE