// const imgs = require("../assets/img/cats");

let slide = new Array(
  "cat01.jpg",
  "cat02.jpg",
  "cat03.jpg",
  "cat04.jpg",
  "cat05.jpg",
  "cat06.jpg",
  "cat07.jpg",
  "cat08.jpg",
  "cat09.jpg",
  "cat10.jpg",
  "cat11.jpg",
  "cat12.jpg"
);

let number = 0;

function changeSlide(direction) {
  number = number + direction;
  if (number < 0) number = slide.length - 1;
  if (number > slide.length - 1) number = 0;
  let catPicture = "assets/img/cats/" + slide[number];
  document.querySelector("#slide").src = catPicture;
}
setInterval("changeSlide(1)", 4000);

function listeners() {
  let previousBtn = document.querySelector("#previous");
  let nextBtn = document.querySelector("#next");
  // Fonctions
  previousBtn.addEventListener("click", function () {
    changeSlide(-1);
  });
  nextBtn.addEventListener("click", function () {
    changeSlide(+1);
  });
}
listeners();
