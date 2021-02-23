let input = document.querySelector(".age");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
console.log(input);

input.addEventListener("keyup", () => {
  console.log(btn);
});

function validateInput(value) {
  console.log(Number.isNaN(value));
  if (Number.isNaN(Number.parseInt(value)) || value < 0) return false;
  return true;
}

function alertUser() {
  result.textContent = "Invalid input, try again";
}
btn.addEventListener("click", () => {
  let age = input.value;
  if (validateInput(age)) {
    let msg = "";
    msg = age >= 18 ? "You may dring alchohol" : "You're too young";
    result.textContent = msg;
  } else {
    alertUser();
  }
});
