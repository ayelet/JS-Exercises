// <!-- ex22.2 - Checkbox - Ayelet Danieli -->

const check= document.querySelector('.check');

function displayImage(display) {
    let img = document.querySelector('.myImage');
    img.style.display = display? "block" : "none";
}

check.addEventListener('click', () => {
    displayImage(check.checked);
})