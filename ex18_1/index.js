// ex18.1 - Ayelet Danieli -DOM-Smileys

let num = document.querySelector(".numInput");
let btn = document.querySelector(".btn");

// input validation
function validateInputFromUser() {
    let number = num.value;
    if (Number.isNaN(Number(number))) {
        return false;
    }
    return true;
}

let alert = document.querySelector('.alert');
btn.addEventListener("click", () => {
    if (!validateInputFromUser()) {
        alert.innerHTML = "Not a valid input";
        return;
    }
    let number = num.value;
    let p = document.querySelector(".emojiParagraph");
    let text = ` &#128540 `.repeat(number);
    p.style.fontSize = "40px";
    p.innerHTML = text;
});

// Clear the warning message
num.addEventListener("input", () => {
    alert.innerHTML = "";
});