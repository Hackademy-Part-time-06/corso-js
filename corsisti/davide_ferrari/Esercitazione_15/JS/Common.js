"use strict"



// IMPOSTAZIONE DELLA CLASSE ACTIVE SULLA NAVLINK CORRISPONDENTE ALLA PAGINA
function active_Navbar() {
    let linkActive;
    if (window.location.href.includes("Index.html")) // USO DI ELSE IF PER DISTINGUERE COMPLETAMENTE LE DUE CASISTICHE
    {
        console.log("Beh, funziona!")
        linkActive = document.getElementById("home");
        home.classList.add("active")
    }
    else if (window.location.href.includes("Annunci.html"))
    {
        console.log("Beh, ora parliamo di annunci!");
        linkActive = document.getElementById("annunci");
        annunci.classList.add("active");
    }
}


// INSERIMENTO DELLE VOCI DROPDOWN NELLA SEZIONE CATEGORIE DELLA NAVBAR
function dropdown_Categorie() {
    fetch("../api-mocked-data/categorie.json")
    .then(function(categorie_Grezze){
        return categorie_Grezze.json();
    })
    .then(function(categorie_JS){
        console.log("Le categorie da inserire nella dropdown: ", categorie_JS);
        let menuDropdown = document.getElementById("dropdownAnnunci")
        categorie_JS.forEach(function(categoria){
            let itemDropdown = document.createElement("li");
            itemDropdown.innerHTML = `<a class="dropdown-item" href="#">${categoria.name}</a>`;
            menuDropdown.append(itemDropdown);
        }) 
    })
}

active_Navbar()
dropdown_Categorie()