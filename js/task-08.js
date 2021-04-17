const opions = ["#757575", "#2196F3", "#3F5185"];
const inputEl = document.querySelector("input");
const buttonEl = document.querySelectorAll("button");
const boxEl = document.querySelectorAll("div");

inputEl.addEventListener("change", onAmount);

function onAmount(event) {
  event.currentTarget.value;
  return;
}

buttonEl[0].addEventListener("click", createBoxes);
function createBoxes(amount) {
  for (let i = 1; i < amount; i += 1) {
    const divElem = document.createElement("div");
    const randomEl = Math.floor(Math.random() * opions.length);
    const opponentMove = opions[randomEl];
    divElem.style.backgroundColor = opponentMove;
    divElem.style.width = "30px";
    divElem.style.height = "30px";
    boxEl[1].append(divElem);
  }
}
