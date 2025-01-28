const button = document.querySelector("#btn-light-switch");
const body = document.querySelector("body");
const pageTitle = document.querySelector("title");

button.addEventListener("click", function (event) {
  button.classList.toggle("darkness");
  button.classList.toggle("button-dark");
  body.classList.toggle("darkness");

  if (button.classList.contains("darkness")) {
    pageTitle.innerText = "Good Night";
    button.innerText = "Turn light on";
  } else {
    pageTitle.innerText = "Good Morning";
    button.innerText = "Turn light off";
  }
});
