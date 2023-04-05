let author_id = new URLSearchParams(window.location.search)

fetch("https://jsonplaceholder.typicode.com/users/" + author_id.get("id"))
    .then(response => response.json())
    .then(json => {
        let name = document.createElement("h1")
        document.body.append(name)
        name.classList.add("mx-3")
        name.innerText = json.name

        let username = document.createElement("h2")
        document.body.append(username)
        username.classList.add("mx-3", "text-secondary")
        username.innerText = `aka ${json.username}`

        let info = document.createElement("ul")
        document.body.append(info)
        info.classList.add("list-group")
        info.innerHTML = `
        <li class="list-group-item"><b>email</b>: ${json.email}</li>
        <li class="list-group-item"><b>Indirizzo</b>: ${json.address.street} Street, ${json.address.suite}</li>
        <li class="list-group-item"><b>Città</b>: ${json.address.city} ${json.address.zipcode}</li>
        <li class="list-group-item"><b>Coordinate</b>: ${json.address.geo.lat}, ${json.address.geo.lng}</li>
        <li class="list-group-item"><b>Telefono</b>: ${json.phone}</li>
        <li class="list-group-item"><b>Sito</b>: ${json.website}</li>
        <li class="list-group-item"><b>Azienda</b>: ${json.company.name} - <i>${json.company.catchPhrase}</i> (${json.company.bs})</li>
        `

        let hr = document.createElement("hr")
        document.body.append(hr)
    })
    
setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
        let list = document.createElement("ul")
        list.classList.add("list-group")
        document.body.append(list)

        json.forEach(x => {
            if (x.userId == author_id.get("id")) {
                let post = document.createElement("li")
                post.classList.add("list-group-item")
                list.append(post)
                post.innerText = `${x.title}`
            }
        })
    })
}, 100);
