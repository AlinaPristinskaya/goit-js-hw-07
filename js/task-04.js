const counterValue = document.querySelector("#value");
let elemSpan = Number(counterValue.textContent);

const action = document.querySelectorAll("button");

const increment = () => {
  elemSpan -= 1;
  counterValue.textContent = elemSpan;
};
const decrement = () => {
  elemSpan += 1;
  counterValue.textContent = elemSpan;
};
action[1].addEventListener("click", decrement);
action[0].addEventListener("click", increment);
