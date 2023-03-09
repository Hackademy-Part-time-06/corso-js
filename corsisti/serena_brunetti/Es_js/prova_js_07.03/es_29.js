//Scrivi un programma che stampi le tabelline da 0 a 10 per tutti i numeri da 0 a 10! Cerca di farlo con soli 2 for (o while)

for (let tab=0; tab<=10; tab++) {
    let riga = ""
    for (let i=0;i<=10; i++) {
        let result = tab*i
        riga = riga + result
    }
    console.log(`la tabellina del ${tab} è ${riga}`)
}