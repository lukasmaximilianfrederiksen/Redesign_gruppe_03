window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#burger_knap").addEventListener("click", toogleMenu);
}

function toogleMenu() {
  console.log("toogleMenu");

  document.querySelector("#menu").classList.toggle("hidden");
}
