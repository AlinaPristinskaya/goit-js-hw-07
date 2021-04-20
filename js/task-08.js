const opions = ["#757575", "#2196F3", "#3F5185"];
const inputEl = document.querySelector("input");
const buttonEl = document.querySelectorAll("button");
console.log(buttonEl);
const boxEl = document.querySelectorAll("div");

inputEl.addEventListener("change", function fnB(event) {
  event.currentTarget.value;
  const amount = event.currentTarget.value;
  console.log(amount);

  buttonEl[0].addEventListener("click", createBoxes);
  console.log(amount);
  function createBoxes(amount) {
    console.log(amount.value);
    const array = [];
    console.log(amount);

    for (let i = 1; i < amount; i += 1) {
      const divElem = document.createElement("div");
      const randomEl = Math.floor(Math.random() * opions.length);
      const opponentMove = opions[randomEl];
      divElem.style.backgroundColor = opponentMove;
      divElem.style.width = "30px";
      divElem.style.height = "30px";
      array.push(divElem);
    }
    boxEl[1].append(...array);
  }
});
