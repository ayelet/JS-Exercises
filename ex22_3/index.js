// ex22_3 - Guess my letter - Ayelet Danieli
const abc = "abcdedfghijklmnopqrstuvwxyz";
let guess = document.querySelector(".guess");
let msg = document.querySelector(".msg");
let keysGuessed = document.querySelector(".keysGuessed");
const state = ["wrong-new", "wrong-old", "correct", "invalid"];
let letter = "";
let guessList = [];
generateRandomLetter = () => {
  const i = Math.floor(Math.random() * abc.length);
  console.log("letter that was chosen is", abc[i]);
  return abc[i];
};

window.addEventListener("load", (event) => {
  letter = generateRandomLetter();
});

function checkStatus(guess) {
  if (!abc.includes(guess.toLowerCase())) return state[3];
  if (guess === letter) return state[2];
  else if (guessList.includes(guess)) return state[1];

  return state[0];
}

function displayGuessLetters() {
  keysGuessed.innerHTML = "";
  guessList.forEach((letter) => {
    keysGuessed.innerHTML += letter;
    keysGuessed.innerHTML += " ";
  });
}

function playAgain() {
  let r = confirm("Congrats, You've guess correct! \nPlay again?");
  if (r === true) location.reload();
}

guess.addEventListener("keyup", () => {
  let currentLetter = guess.value;
  let currState = checkStatus(currentLetter);
  let color = "";
  let text = "";
  switch (currState) {
    case "wrong-old":
      color = "red";
      text = "Letter already guessed";
      break;
    case "wrong-new":
      color = "red";
      text = "Wrong! Try again";
      break;
    case "correct":
      text = "You've guessed right! Congrats!";
      color = "green";
      break;
    case "invalid":
      text = "Invalid input";
      color = "red";
      break;
  }
  if (!guessList.includes(currentLetter)) {
    guessList.push(currentLetter);
  }
  //   currentLetter = "";
  guess.value = "";
  msg.innerHTML = text;
  msg.style.color = color;
  displayGuessLetters();
  if (currState === state[2]) playAgain();
});
