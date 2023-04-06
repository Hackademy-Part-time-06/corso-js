"use strict";
console.log("Ci sono!");

let h1 = document.querySelector("h1");
let sinossi = document.getElementById("sinossi");
let poster = document.getElementById("poster");
let filmInfoUl = document.getElementById("film-info")

function getFilm() {
  let searchParams = new URLSearchParams(window.location.search);

  let url = new URL("http://www.omdbapi.com/?apikey=9f6ae0f5");
  url.searchParams.append("i", searchParams.get("filmId"))
  fetch(url)
    .then((response) => response.json())
    .then((film) => {
      console.log("film:", film);
      h1.innerText = film.Title
      sinossi.innerHTML = film.Plot

      let posterUrl = "https://placehold.co/600x400?text=image+not+present";
      if (film.Poster && film.Poster !== "N/A") {
        posterUrl = film.Poster;
      }
      poster.setAttribute("src", posterUrl);

      for (let k in film) {
        if (typeof k !== "object" && k !== "Title" && k !== "Poster") {
          let li = document.createElement("li");
          li.classList.add("list-group-item");
          li.innerHTML = `${k}: <b>${film[k]}</b>`;
          filmInfoUl.append(li)
        }
      }
    });
}

getFilm();
