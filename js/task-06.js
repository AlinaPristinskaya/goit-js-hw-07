const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", onIpnutBlur);

function onIpnutBlur(event) {
  const borderActiv = event.currentTarget;
  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? borderActiv.classList.add("valid")
    : borderActiv.classList.add("invalid");
}
