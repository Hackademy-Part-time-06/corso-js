const APIKEY = "e67a7cd2"
let URLapi = new URL(`http://www.omdbapi.com/?apikey=${APIKEY}&`)

let movie_finder = document.getElementById("movie_finder")
movie_finder.addEventListener("submit", event => {
    event.preventDefault()
    let title = document.getElementById("movie_title_search").value
    let card_container = document.getElementById("card_container")
    
    URLapi.searchParams.append("s", title)
    
    fetch(URLapi).then(res => res.json()).then(json => {
        console.log(json);
        json.Search.forEach(x => card_printer(x))
    })
})

function card_printer(movie) {
    const PLACEHOLDER = "https://placehold.co/600x400?text=image+not+present"
    let card_box = document.createElement("div")
    card_box.classList.add("col-4")

    let poster = new String
        
    if (movie.Poster === "N/A") {poster = PLACEHOLDER}
    else {poster = movie.Poster} 

    let movie_link = `./movie.html?id=${movie.imdbID}`

    card_box.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${poster}" class="card-img-top" alt="${movie.Title}">
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">${movie.Year}</p>
      <a href="${movie_link}" class="btn btn-primary">Vai alla scheda del film</a>
    </div>
  </div>`

  card_container.append(card_box)
}