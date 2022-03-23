// Fetch exemple
// let apiUrl = "https://api.punkapi.com/v2/beers/";
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let apiUrl = "https://api.punkapi.com/v2/beers/";
let input = document.querySelector(".beer_id"); //id
let beerName = document.querySelector(".beer_name"); //name
let beerTagline = document.querySelector(".tagline"); //tagline
let beerBrewed = document.querySelector(".first_brewed"); //first_brewed
let beerImage = document.querySelector(".image_url"); //image_url

function getBeerData() {
  let getBeer = apiUrl + input.value;
  // .json returns a promise so you need to use .then to get the data from it synchronously
  fetch(getBeer)
    .then((response) => response.json())
    .then((data) => {
      beerName.innerHTML = data[0].name;
      beerTagline.innerHTML = data[0].tagline;
      beerBrewed.innerHTML = data[0].first_brewed;
      beerImage.src = data[0].image_url;
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

let button = document.querySelector(".beer-button");
button.addEventListener("click", getBeerData);
