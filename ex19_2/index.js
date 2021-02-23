// ex19_2 - Ayelet Danieli - Multiple inputs

let inputBox = document.querySelectorAll(".verify");
let alert = document.querySelector(".alert");
console.log(inputBox);

// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
inputBox.forEach((element) => {
  element.addEventListener("keyup", () => {
    element.nextElementSibling.focus();
  });
});

// 2. The user is allowed to paste the verification code.

inputBox[0].addEventListener("paste", (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  console.log(paste);
  inputBox.forEach((element, i) => {
    element.value = "";
    element.value = paste[i] || "";
  });
});

// verify that all inputs are filled
function validateData() {
  let isEmpty = false;
  inputBox.forEach((element) => {
    // console.log("is element empty?", (element.value === ""));
    isEmpty ||= element.value === "";
  });
  // console.log("is one of the fields empty? ", isEmpty);
  return !isEmpty;
}
let btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", () => {
  if (!validateData()) {
    alert.style.display = "block";
    alert.textContent = "Please fill all fields";
  } else alert.textContent = "";
});
