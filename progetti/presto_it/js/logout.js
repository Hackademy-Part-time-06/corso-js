"use strict";

let btnLogout = document.getElementById("logout");

btnLogout.addEventListener("click", (e) => {
  // rimuovo lo status dell'utente dal localStorage
  localStorage.removeItem("userStatus");

  // redirect verso la homepaghe
  window.location = "/progetti/presto_it/index.html";
});
