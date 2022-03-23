// fonction qui fait les calculs
function operation(operator) {
  let inputOne = parseFloat(document.querySelector("#inputOne").value);
  let inputTwo = parseFloat(document.querySelector("#inputTwo").value);
  let resultOp = document.querySelector("#result");
  if (inputOne && inputTwo) {
    if (operator === "plus") {
      resultOp.value = inputOne + inputTwo;
    } else if (operator === "minus") {
      resultOp.value = inputOne - inputTwo;
    } else if (operator === "multiplier") {
      resultOp.value = inputOne * inputTwo;
    } else if (operator === "divider") {
      resultOp.value = inputOne / inputTwo;
    } else {
      console.log("Problem");
    }
  }
}

// Fonction qui écoute les actions sur les boutons et appelle operation(operator) pour réaliser les calculs
function listeners() {
  const plusBtn = document.querySelector("#plus");
  const minusBtn = document.querySelector("#minus");
  const multBtn = document.querySelector("#multiplier");
  const divideBtn = document.querySelector("#divider");
  // Fonctions
  plusBtn.addEventListener("click", function () {
    operation("plus");
  });
  minusBtn.addEventListener("click", function () {
    operation("minus");
  });
  multBtn.addEventListener("click", function () {
    operation("multiplier");
  });
  divideBtn.addEventListener("click", function () {
    operation("divider");
  });
}
listeners();
