// FIND THE VALUE WHEN CARD IS CLICKED
const cardElement = document.querySelectorAll(".card");

for (const card of cardElement) {
  const cardH3 = card.querySelector("h3");
  const cardTitle = cardH3.innerText;

  const displaytitle = document.getElementById("title-container");
  const p = document.createElement("p");
  p.innerText = cardTitle;

  card.addEventListener("click", function (e) {
    displaytitle.appendChild(p);
    console.log("some one clicked me");
  });
}
