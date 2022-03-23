let cookieNbr = 0;
let multiplierNbr = 1;
let multiplierPrice = 50;
let autoClickNbr = 0;
let autoClickPrice = 100;

function addCookie(cookieNbr, multiplierNbr) {
  cookieNbr = cookieNbr + multiplierNbr;
  return cookieNbr;
}

function autoClick() {
  cookieNbr = cookieNbr + autoClickNbr;
  document.querySelector(".counter").innerText = cookieNbr;
  document.querySelector(".title").innerText = cookieNbr + " cookies";
}

// Click sur le cookie
document.querySelector(".cookieButton").addEventListener("click", () => {
  cookieNbr = addCookie(cookieNbr, multiplierNbr);
  document.querySelector(".counter").innerText = cookieNbr;
  document.querySelector(".title").innerText = cookieNbr + " cookies";
});

// Multiplier
document.querySelector(".multiplierButton").addEventListener("click", () => {
  if (cookieNbr >= multiplierPrice) {
    cookieNbr = cookieNbr - multiplierPrice;
    multiplierNbr++;
    multiplierPrice = Math.floor(multiplierPrice * 2);
    document.querySelector(".multiplierButton").innerText =
      "LVL UP (" + multiplierPrice + ")";
    document.querySelector(".counter").innerText = cookieNbr;
    document.querySelector(".multiplierText").innerText =
      "Vous êtes niveau " +
      multiplierNbr +
      " et produisez " +
      multiplierNbr +
      " donut(s)/click";
    document.querySelector(".title").innerText = cookieNbr + " donuts";
  }
});

// Autoclick
document.querySelector(".autoClickButton").addEventListener("click", () => {
  if (cookieNbr >= autoClickPrice) {
    cookieNbr = cookieNbr - autoClickPrice;
    autoClickNbr++;
    autoClickPrice = Math.floor(autoClickPrice * 2);
    document.querySelector(".autoClickButton").innerText =
      "Acheter un booster (" + autoClickPrice + ")";
    document.querySelector(".counter").innerText = cookieNbr;
    document.querySelector(".autoClickText").innerText =
      "Vous avez " +
      autoClickNbr +
      " booster(s), produisant " +
      autoClickNbr +
      " donut(s)/seconde";
    document.querySelector(".title").innerText = cookieNbr + " cookies";
  }
});

setInterval(autoClick, 1000);
