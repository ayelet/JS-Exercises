// ex20.1 - Ayelet Danieli - DOM elements

const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;

div.innerHTML = ul;

const img = document.createElement('img');
img.src = ('https://source.unsplash.com/random/480x240');
img.classList.add('nice');
img.alt = ('random image');
div.appendChild(img);

const myHtml = `<div class="myDiv">
<p>This is paragraph one</p>
<p>This is paragraph two</p>
<p>This is paragraph three</p>
</div>`;

const ulElement = document.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHtml); 

const myDiv = document.querySelector('.myDiv');
myDiv.firstElementChild.remove();
myDiv.children[1].classList.add("warning");

function generatePlayerCard(name, age, height) {
const playerCard = `<div class="Player Card">
<h2>${name} - ${age}</h2>
<p>They are ${height} and ${age} year old.</p>
</div>`;
return playerCard;
}

const cards = document.createElement('div');
cards.classList.add('cards');
let cardsHtml = generatePlayerCard("Dido", 32, 150);
cardsHtml += generatePlayerCard("Eminem", 25, 187);
console.log(cardsHtml);

// cards.insertAdjacentHTML('afterbegin', cardsHtml);
cards.innerHTML = cardsHtml;
div.insertAdjacentElement('beforebegin', cards);