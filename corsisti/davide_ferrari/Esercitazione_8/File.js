// 49
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
let playlist =  {
                    canzoni :   [
                                    {
                                        titolo : "Renegades Of Funk",
                                        nomeCantante : "Rage Against The Machine",
                                        anno : "2000"
                                    },
                                    {
                                        titolo : "Hell on earth",
                                        nomeCantante : "Mobb Deep",
                                        anno : "1996"
                                    },
                                    {
                                        titolo : "People help the people",
                                        nomeCantante : "Birdy",
                                        anno : "2011"
                                    }
                                ],
                    inserireCanzone: function () 
                    {
                            this.canzoni.push({
                            titolo : prompt(""),
                            nomeCantante : prompt(""),
                            anno : prompt(""),
                        });
                    },
                    
                };
                    

console.log("Questa è la playlist creata: ", playlist);
playlist.inserireCanzone();

*/


// 50
/*
Definisci un oggetto rubrica che ha come proprietà gli utenti. Per ogni utente specificare altre proprietà: nome, cognome, telefono e indirizzo. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).
Quindi popolare la rubrica con dei dati a piacere. 
Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.
*/

/*
let rubrica =   {
                    utenti  :   [
                                    {
                                        nome : "Davide",
                                        cognome : "Ferrari",
                                        telefono : "3334445566",
                                        indirizzo : {
                                                        via : "Via dei puledri 10",
                                                        città : "Salerno",
                                                        cap : "70666"
                                                    }
                                    },
                                    {
                                        nome : "Daniele",
                                        cognome : "Capricorno",
                                        telefono : "0007779989",
                                        indirizzo : {
                                                        via : "Via dei mambroni 1",
                                                        città : "Bari",
                                                        cap : "70100"
                                                    }
                                    },
                                    {
                                        nome : "Roberto",
                                        cognome : "Massoni",
                                        telefono : "1111111111",
                                        indirizzo : {
                                                        via : "Via dei bomber 50",
                                                        città : "Firenze",
                                                        cap : "89888"
                                                    }
                                    }
                                ]
                };
console.log(rubrica);
rubrica.inserireContatto();
*/


/*



*/

//51
/*
Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili. 
Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
*/


// 52

/*
Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere una lista di giocatori che saranno formati dalle proprietà, nome e punteggi

Creare una funzione che calcoli il totale di ogni giocatore e estragga il vincitore della partita 
 */
