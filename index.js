// FIND THE VALUE WHEN CARD IS CLICKED
const cardElement = document.querySelectorAll(".card");
const totalPriceElement = document.getElementById("totalPrice");
const discountPriceElement = document.getElementById("discountPrice");
const totalElement = document.getElementById("total");

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

// discound button section goes here
document.getElementById("apply-btn").addEventListener("click", function () {
  const inputElement = document.getElementById("input-field").value;
  const inputText = inputElement.split(" ").join("");
  const input = inputText.toUpperCase();
  if (totalPrice >= 200) {
    if (input === "SELL200") {
      const discount = totalPrice * 0.2;
      discountPriceElement.innerText = discount.toFixed(2);
      totalElement.innerText = totalPrice - discount;
    } else {
      alert("Please Insert Right Coupon Key");
    }
  } else {
    alert("Buy More Stuff");
  }
});
