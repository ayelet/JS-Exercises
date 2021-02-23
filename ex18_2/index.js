// ex18.2 - Ayelet Danieli - create a web site with pure js

console.log("hi there");

const myHeader1 = document.createElement('h1');
myHeader1.textContent = "This is an HTML-Free web page"
const myHeader2 = document.createElement('h2');
myHeader2.textContent = "Isn't this cool?"
console.log(myHeader1);

const myList = document.createElement('ul');
const li1 = document.createElement('li');

li1.textContent = "My first list item";
const li2 = li1.cloneNode(true);
li2.textContent = "That li was cloned";
myList.appendChild(li1);
myList.appendChild(li2);

const myImg = document.createElement('img');
myImg.src = ('https://source.unsplash.com/random/480x360');
myImg.alt = "A random image";

const myDiv = document.createElement('div');

myDiv.classList.add("container");

myDiv.appendChild(myHeader1);
myDiv.appendChild(myHeader2);
myDiv.appendChild(myImg);
myDiv.appendChild(myList);

document.body.appendChild(myDiv);