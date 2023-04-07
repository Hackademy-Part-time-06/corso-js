/*Esercizio 71 - BONUS
La Registrazione

Chiedi all’utente i seguenti dati tramite 3 prompt:

- username
- email
- password

Una volta inseriti i dati mostra una modale col titolo “Registrazione Effettuata” e col testo:
“Ciao ${username} (${email}), benvenuto nella tua area personale”

La modale la devi creare tramite bootstrap: https://getbootstrap.com/docs/5.3/components/modal/*/

let user = {
    username: prompt("Inserire username:"),
    mail: prompt("Inserire indirizzo e-mail:"),
    password: prompt("Inserire password:")
}

modale(user.username, user.mail, user.password)

function modale(username, mail, password) {
    let modal = document.createElement("div")
    document.body.append(modal)
    modal.classList.add("modal", "fade")
    modal.setAttribute("id", "Modale")
    modal.setAttribute("tabindex", "-1")
    modal.setAttribute("aria-labelledby", "Modale")
    modal.setAttribute("aria-hidden", "true")

    let dialog = document.createElement("div")
    modal.append(dialog)
    dialog.classList.add("modal-dialog")

    let content = document.createElement("div")
    dialog.append(content)
    content.classList.add("modal-content")

    let header = document.createElement("div")
    content.append(header)
    header.classList.add("modal-header")

    let title = document.createElement("h1")
    header.append(title)
    title.classList.add("modal-title", "fs-5")
    title.setAttribute("id", "exampleModalLabel")
    title.innerText = "Registrazione Effettuata"

    let header_button = document.createElement("button")
    header.append(header_button)
    header_button.setAttribute("type", "button")
    header_button.classList.add("btn-close")
    header_button.setAttribute("data-bs-dismiss", "modal")
    header_button.setAttribute("aria-label", "Close")

    let content_body = document.createElement("div")
    content.append(content_body)
    content_body.classList.add("modal-body")
    content_body.innerText = `Ciao ${username} (${mail}), benvenuto nella tua area personale`

    let footer = document.createElement("div")
    content.append(footer)
    footer.classList.add("modal-footer")

    let footer_button_1 = document.createElement("button")
    footer.append(footer_button_1)
    footer_button_1.classList.add("btn", "btn-secondary")
    footer_button_1.setAttribute("data-bs-dismiss", "modal")
    footer_button_1.innerText = "Close"

    let footer_button_2 = document.createElement("button")
    footer.append(footer_button_2)
    footer_button_2.classList.add("btn", "btn-primary")
    footer_button_2.innerText = "Salva"

    const myModal = new bootstrap.Modal(modal)
    myModal.show()
}
