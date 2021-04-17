const inputEl = document.querySelector("input");
console.log(inputEl.value);
const spanEl = document.querySelector("span");
console.log(spanEl.textContent);

inputEl.addEventListener("input", onSpanFont);
function onSpanFont(event) {
  
  console.log((spanEl.style.fontSize = `${event.currentTarget.value}px`));

 
}
