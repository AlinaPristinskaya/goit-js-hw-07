const inputEl = document.querySelector("input");
console.log(inputEl.textContent);
const spanEl = document.querySelector("span");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value;
  if (spanEl.textContent === "") {
    spanEl.textContent = "незнакомец";
  }
}
