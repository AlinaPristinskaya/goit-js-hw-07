const counterValue = document.querySelector("span");

const action = document.querySelectorAll("button");

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};
const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
action[1].addEventListener("click", decrement);
action[0].addEventListener("click", increment);
