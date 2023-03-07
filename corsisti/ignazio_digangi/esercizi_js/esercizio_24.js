console.log("Index Js caricato!");

let NomeMese;
let gennaio = "Gennaio", marzo = "Marzo", maggio = "Maggio", luglio = "Luglio", agosto = "Agosto", ottobre = "Ottobre", dicembre = "Dicembre";
let aprile = "Aprile", giugno = "Giugno", settembre = "Settembre", novembre = "Novembre";
let febbraio = 'Febbraio'

    NomeMese=prompt("Inserisci Mese");

    if (NomeMese == gennaio, marzo, maggio, luglio, agosto, ottobre, dicembre)
    {
        alert('Il Mese è formato da 31 giorni');
    }
    else if (NomeMese == aprile, giugno, settembre, novembre)
    {
        alert('Il Mese è formato da 30 giorni');
    }
    else if (NomeMese == febbraio)
    {
        alert('Il Mese è formato da 28 giorni');
    }