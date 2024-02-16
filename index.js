// FIND THE VALUE WHEN CARD IS CLICKED
const cardElement = document.querySelectorAll(".card");
const totalPriceElement = document.getElementById("totalPrice");
let cardNumber = 1;
let totalPrice = 0;

for (const card of cardElement) {
  const cardH3 = card.querySelector("h3");
  const cardTitle = cardH3.innerText;

  const cardPriceText = card.querySelector("span").innerText;
  const splitCard = cardPriceText.split(" ");
  const cardValue = parseFloat(splitCard[1]);

  const displaytitle = document.getElementById("title-container");
  const p = document.createElement("p");

  card.addEventListener("click", function (e) {
    displaytitle.appendChild(p);
    p.innerText = cardNumber + "." + cardTitle;
    cardNumber++;
    // console.log("some one clicked me");
    totalPrice += cardValue;
    totalPriceElement.innerText = totalPrice;
  });
}
