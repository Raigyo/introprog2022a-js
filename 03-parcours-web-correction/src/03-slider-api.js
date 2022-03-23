// Exemple de Fetch avec une promise

// fetch("https://random.imagecdn.app/v1/image)
//   .then((response) => response.json( /* Do something */ ))
//   .catch((error) => console.log("Erreur : " + error));

//fct ta load images from API
let slide = [];
let fetchedPic;

// Promise
let getImg = () => {
  fetch("https://random.imagecdn.app/v1/image?width=500&height=150")
    .then((response) => {
      fetchedPic = response.url;
    })
    .then(() => (document.querySelector("#slide").src = fetchedPic))
    .catch((error) => console.log("Erreur : " + error));
};

// console.log(slide);

let number = 0;

function changeSlide(direction) {
  number = number + direction;
  if (number < 0) number = slide.length - 1;
  if (number > slide.length - 1) number = 0;
  getImg();
  console.log(fetchedPic);
}
// setInterval("changeSlide(1)", 1000);

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
