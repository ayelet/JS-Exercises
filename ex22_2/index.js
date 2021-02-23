// <!-- ex22.2 - Checkbox - Ayelet Danieli -->

const check= document.querySelector('.check');

function displayImage(display) {
    console.log('display', display)
    let img = document.querySelector('.myImage');
    img.style.display = display? "none" : "block";
}

check.addEventListener('click', () => {
    console.log("onClick", check.checked);
    displayImage(check.checked);
})