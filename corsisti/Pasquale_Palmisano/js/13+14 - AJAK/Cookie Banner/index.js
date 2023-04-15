window.onload = (() => {
    document.body.style.backgroundColor = "grey"
    let cookie_banner = document.createElement("div")
    document.body.append(cookie_banner)
    cookie_banner.classList.add("bg-body-secondary")
    cookie_banner.setAttribute("id", "cookie-banner")
    cookie_banner.innerHTML = `<h4 style="display:flex; justify-content: center;">Cookie Banner</h4>
    <hr>
    <p style="text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ullam porro perferendis rerum deserunt excepturi odio libero? Quisquam adipisci, dolorem non quis omnis tenetur. Id, ab! Sed odit officia explicabo.</p>
    <div style="display: flex; justify-content: space-around; margin-top: 30px;">
        <button type="button" id="x" class="btn btn-success">Accetta</button>
        <button type="button" id="y" class="btn btn-danger">Rifiuta</button>
    </div>`

    remove_banner()
    
})

function remove_banner() {
    let x = document.getElementById("x")
    x.addEventListener("click", event => {
        
        let script = document.createElement("script")
        script.setAttribute("src", "analytics.js")
        document.body.append(script)

        let script2 = document.createElement("script")
        script2.setAttribute("src", "adv.js")
        document.body.append(script2)

        let banner = document.getElementById("cookie-banner")
        document.body.removeChild(banner)

        document.body.style.backgroundColor = "initial"
    })

    let y = document.getElementById("y")
    y.addEventListener("click", event => {
        let banner = document.getElementById("cookie-banner")
        document.body.removeChild(banner)

        document.body.style.backgroundColor = "initial"
    })
}
