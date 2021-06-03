const Knap = document.querySelector("#burger_knap");
const listeLinks = document.querySelector(".navbar_links");

Knap.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("toggleMenu");
  listeLinks.classList.toggle("skjult");
}

// function sidenVises() {
//   console.log("sidenVises");

//   document.querySelector("#burger_knap").addEventListener("click", toogleMenu);
// }

// function toogleMenu() {
//   console.log("toogleMenu");

//   document.querySelector("#menu").classList.toggle("hidden");

// }
