let navLinks = document.getElementById("navLinks");

function openMenu() {
  navLinks.style.right = "0";
  let navLinks = (document.style.display = block);
}
function hideMenu() {
  let navLinks = (document.style.display = block);
  navLinks.style.right = "-200px";
}

let mhaxi = document.getElementById("mhaxi");
function mhaxiClass() {
  mhaxi.textContent = "Mhaxi University";
  mhaxi.style.color = "orangered";
}

const colors = ["black"];
let change = 0;
function clickMe() {
  document.body.style.backgroundColor = colors;
  change++;
  document.body.style.color = "white";
}
