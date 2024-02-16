// FIND THE VALUE WHEN CARD IS CLICKED
const cardElement = document.querySelectorAll(".card");
let cardNumber = 1;

for (const card of cardElement) {
  const cardH3 = card.querySelector("h3");
  const cardTitle = cardH3.innerText;

  const displaytitle = document.getElementById("title-container");
  const p = document.createElement("p");

  card.addEventListener("click", function (e) {
    displaytitle.appendChild(p);
    p.innerText = cardNumber + "." + cardTitle;
    cardNumber++;
    // console.log("some one clicked me");
  });
}
