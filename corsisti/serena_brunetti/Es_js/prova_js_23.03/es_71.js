let registrazione = {
    username: prompt("Inserisci il tuo username"),
    email: prompt("Inserisci la tua email"),
    password: prompt("Inserisci la tua password"),
}

modal(registrazione["username"], registrazione["email"]) //richiamo qui la funzione e ci passo per parametri l'oggetto con le proprietà

function modal (username, email) {
    let addDiv1 = document.createElement("div")
    addDiv1.classList.add("modal", "fade")
    addDiv1.setAttribute("tabindex", "-1")
    addDiv1.setAttribute("id", "exampleModal")
    addDiv1.setAttribute("aria-labelledby", "exampleModalLabel")
    addDiv1.setAttribute("aria-hidden", "true")

    let addDivDialog = document.createElement("div")
    addDiv1.append(addDivDialog)
    addDivDialog.classList.add("modal-dialog")

    let addDivContent = document.createElement("div")
    addDivDialog.append(addDivContent)
    addDivContent.classList.add("modal-content")

    let addDivHeader = document.createElement("div")
    addDivContent.append(addDivHeader)
    addDivHeader.classList.add("modal-header")
    
    let addh1 = document.createElement("h1")
    addDivHeader.append(addh1)
    addh1.classList.add("modal-title", "fs-5")
    addh1.setAttribute("id", "exampleModalLabel")
    addh1.innerText = `Registrazione Effettuata`

    let addButtonHeader = document.createElement("button")
    addDivHeader.append(addButtonHeader)
    addButtonHeader.setAttribute("type", "button")
    addButtonHeader.classList.add("btn-close")
    addButtonHeader.setAttribute("data-bs-dismiss", "modal")
    addButtonHeader.setAttribute("aria-label", "Close")

    let addDivBody = document.createElement("div")
    addDivContent.append(addDivBody)
    addDivBody.classList.add("modal-body")
    addDivBody.innerText = `Ciao ${username} (${email}), benvenuto nella tua area personale`

    let addDivFooter = document.createElement("div")
    addDivContent.append(addDivFooter)
    addDivFooter.classList.add("modal-footer")

    let addButtonClose = document.createElement("button")
    addDivFooter.append(addButtonClose)
    addButtonClose.classList.add("btn", "btn-secondary")
    addButtonHeader.setAttribute("type", "button")
    addButtonHeader.setAttribute("data-bs-dismiss", "modal")
    addButtonClose.innerText = "Chiudi"

    document.body.append(addDiv1)

    const MYMODAL = new bootstrap.Modal(addDiv1)
    MYMODAL.show()
} 
//le funzioni si mettono sempre alla fine