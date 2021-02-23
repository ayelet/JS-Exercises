// ex19.1 - Ayelet Danieli - DOM Traversal

// Create a variable that holds the <li> element with the class “start-here”.
let myLi = document.querySelector('.start-here');
console.log(myLi);
// 1. Change the text from “title 2” to “main title”
myLi.textContent = "main title";
// 2. Add another sub title with the text “sub title 4”
let mySubLi = document.createElement('li');
mySubLi.innerHTML = "sub title 4";
myParent = myLi.parentNode;
// let get the list of all node (all li's)
let theNextLi = myLi.nextElementSibling;
let myUl = theNextLi.firstElementChild;
myUl.appendChild(mySubLi);
console.log(theNextLi);

// 3. Delete the last <li> element from the list.
theLastLi= myParent.lastElementChild;
theLastLi.remove();
// 4. Change the <title> element text to “Master Of The Dom”.
document.title = "Master of the DOM";
// 5. Change the text of the <p> element ot something else of your
let myDiv = myParent.nextElementSibling;
let myPara = myDiv.firstElementChild;
myPara.innerHTML = "The quick brown fox jumps over the fence";

