let rating = document.querySelector(".rating");
let rateSelected = document.querySelector(".rating__selected");
let rateBtn = document.querySelector(".rate__btn");
let cardStart = document.querySelector(".card--start");
let cardThanks = document.querySelector(".card--thanks");

rating.addEventListener("click", (event) => {
  let scoreSelected = event.target.innerText;
  rateSelected.innerText = scoreSelected;
  if (scoreSelected > 0 || scoreSelected <= 5) {
    rateBtn.addEventListener("click", (event) => {
      cardStart.style.display = "none";
      cardThanks.style.display = "flex";
    });
  }
});
