import contadorP from "./contador";

const first = document.querySelector("#primera-frase");
const form = document.querySelector("#contar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstFrase = first.textContent;
  div.innerHTML = "<p>" + contadorP(firstFrase) + "</p>";
});
