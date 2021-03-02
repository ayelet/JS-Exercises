// Ex 34.1 - Ayelet Danieli - AJAX & CORS

// We are going to use this star wars api to get information.
// We want to get information of 10 characters.
// We want the following information:
// 1. Name
// 2. Height
// 3. Hair Color
// 4. Planet they came from
// 5. Planet population
// We want you to create an array of objects that will store all of this
// information.
// Create the object structure like this:

// Note:
// The value of the key Planet is an object.
// We want to place it dynamically into the DOM without using any HTML.
// Create a table using pure JavaScript and place the information there.


// Helper function
function createElementAndAppend(elementName, parent, innerHTML = "" ) {
  let el = document.createElement(elementName);
  el.innerHTML = innerHTML;
  parent.appendChild(el);
  return el;
}

function handleError(err) {
  console.log(err);
}

let wrapper = createElementAndAppend('div', document.body);
let swTable = createElementAndAppend('table', wrapper, "");
let tr1 = createElementAndAppend('tr', swTable);
let th1 = createElementAndAppend('th', tr1, "name");
let th2 = createElementAndAppend('th', tr1, "height");
let th3 = createElementAndAppend('th', tr1, "hair");
let th4 = createElementAndAppend('th', tr1, "planet name");
let th5 = createElementAndAppend('th', tr1, "planet population");


const endpoint = "https://swapi.dev/api";
const people = "/people";
const planet = "/planet";
let charactersArray = [];

async function fetchUrl(url) {
  return await fetch(url);
}

async function myFetch(url) {
  return await fetch(url)
  .then(response => response.json())
  .then(data => {
    data.results.forEach((p, i) => {
      let tr = createElementAndAppend('tr', swTable, "");
      createElementAndAppend('td', tr, p.name);
      createElementAndAppend('td', tr, p.height);
      createElementAndAppend('td', tr, p.hair_color);
     
      fetchUrl(p.homeworld)
      .then(response => response.json())
        .then(planet => {

          createElementAndAppend('td', tr, planet.name );
          createElementAndAppend('td', tr, planet.population);
       
        })
        .catch(handleError)      
      });
      return data.results;
    })
    .catch(err => {
      console.error('fetch failed', err);
    });
}

myFetch(endpoint+people);


