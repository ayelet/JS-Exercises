// Ex17_1 - Ayelet Danieli - DOM - font size

const btn_larger = document.querySelector(".larger");
const btn_smaller = document.querySelector(".smaller");
function setLargerFont() {
  const p = document.querySelector("p");
  let fontSize = window.getComputedStyle(p).fontSize;
  if (fontSize >= 100) return;
  fontSize += 2;
  p.style.fontSize = `${fontSize}px`;
}
function setSmallerFont() {
  const p = document.querySelector("p");
  let fontSize = window.getComputedStyle(p).fontSize;
  if (fontSize <= 6) return;
  fontSize -= 2;
  p.style.fontSize = `${fontSize}px`;
}

btn_larger.addEventListener("click", setLargerFont);
btn_smaller.addEventListener("click", setSmallerFont);
