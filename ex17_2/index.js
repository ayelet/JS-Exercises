// Ex17_2 - Ayelet Danieli - DOM - text area

const text1 = document.querySelector("#textarea");
text1.addEventListener("input", function () {
    let len = text1.value.length;
    // console.log("it works!");
    let alertUser = document.querySelector('.alert');
  if (len <= 100) {
    alertUser.textContent = `${len} : Please enter more than 100 characters`;
  } else {
    alertUser.textContent = "";
  }
});

function countChar(val){
    var len = val.value.length;
    if (len >= 500) {
             val.value = val.value.substring(0, 500);
    } else {
             $('#charNum').text(500 - len);
    }
};
