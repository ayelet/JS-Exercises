// Ex 34.2 - Ayelet Danieli - Chuck Norris

function handleError(err) {
  console.log(err);
}

let randomJoke = document.querySelector(".random");
let categBtn = document.querySelector(".categories");
let dogImage = document.querySelector(".dog");
let dogButton = document.querySelector(".dogBtn");
let numImages = document.querySelector(".numImg");
let dogBreed = document.querySelector(".breed");
let imgWrapper= document.querySelector('.imgWrapper');

const randomJokeApi = "https://api.chucknorris.io/jokes/random";
const categoriesAPI = "https://api.chucknorris.io/jokes/categories";
// const randomJokeByCat = "https://api.chucknorris.io/jokes/random?category={category}";
const randomJokeByCat = "https://api.chucknorris.io/jokes/random?category=";
const randomDogImage = "https://dog.ceo/api/breeds/image/random";
const listDogBreeds = "https://dog.ceo/api/breeds/list/all";
const dogBreedImage = `https://dog.ceo/api/breed/`;
// const people = "/people";
// const planet = "/planet";
// let charactersArray = [];

async function fetchUrl(url) {
  return await fetch(url).catch((err) => {
    console.error("fetch failed", err);
  });
}

async function myFetch(url) {
  let response = fetchUrl(url);
  // let data = response.json();
  return response;
}
//////////////////////////////////////////////
// event handler
async function getJoke(url) {
  console.log("click!!!", url);
  let response = await myFetch(url);
  console.log(response.status);
  let data = await response.json();
  console.log(data);
  console.log(data.value);

  let jokeElement = document.querySelector(".joke");
  console.log(jokeElement);
  jokeElement.textContent = data.value;
  return data.value;
}
////////////////////////////////////////////
async function getJokeByCategory(e) {
  console.log(e.currentTarget.value);
  let category = e.currentTarget.value;
  endpoint = randomJokeByCat + `${category}`;
  console.log(endpoint);
  getJoke(endpoint);
}
////////////////////////////////////////////
async function getBreedByCategory(e) {
  console.log(e.currentTarget.value);
  let category = e.currentTarget.value;
  endpoint = randomDogByBreed + `${category}`;
  console.log(endpoint);
  getDogImage(endpoint);
}
/////////////////////////////////////////////
async function getCategoriesList() {
  let response = await myFetch(categoriesAPI);
  let data = await response.json();
  
  let optionHtml = ``;
  optionHtml = data.map((cat) => {
    return `<option value='${cat}'>${cat}</option>`;
  });
  categBtn.innerHTML = optionHtml;
  return data.value;
}
//////////////////////////////////////////
async function getRandomJoke() {
  endpoint = randomJokeApi;
  console.log(endpoint);
  getJoke(endpoint);
}
///////////////////////////////////////////
async function getDogImage(e) {
  let response='';
  if (e !== "")
  response = await myFetch(e);
  else
  response = await myFetch(randomDogImage);
  console.log(response);
  let data = await response.json();
  // console.log(data.message);
  dogImage.src = `${data.message}`;
  return data.message;
}
//////////////////////////////////////////
function loadSelectNumberButton() {
  let inner = "";
  for (let i = 1; i <= 50; i++) {
    inner += `<option value=${i}>${i}</option>`;
  }
  numImages.innerHTML = inner;
}
///////////////////////////////////////////
async function LoadDogImages(e) {
  try {
    let num = e.currentTarget.value;
    if (num < 0) throw "negative number not allowed";
    console.log(num);
    for (let i = 0; i < num; i++) {
      let src = await getDogImage("");
      // console.log("$$$ source", src);
      let dog = document.createElement(`img`);
      dog.src = `${src}`;
      imgWrapper.appendChild(dog);
    }
  } catch (err) {
    handleError(err);
  }
}
//////////////////////////////////////////
async function loadDogBreeds() {
  let response = await myFetch(listDogBreeds);
  let data = await response.json();
  let inner = Object.keys(data.message).map(breed => {
      return `<option value=${breed}>${breed}</option>`;
  });
  dogBreed.innerHTML = inner;  
}
async function getDogByBreed(e) {
  // console.log(e.currentTarget.value);
  let breed = e.currentTarget.value;
  dogBreedImageUrl = `${breed}/images/random`
  endpoint = dogBreedImage + dogBreedImageUrl;
  console.log("$$$$$$$",endpoint);
  getDogImage(endpoint); 
}
///////////////////////////////////////////
// fetch the joke
getCategoriesList();
loadSelectNumberButton();
loadDogBreeds();
categBtn.addEventListener("change", getJokeByCategory);
// randomJoke.addEventListener('click', getJoke(randomJokeApi));
randomJoke.addEventListener("click", getRandomJoke);
dogButton.addEventListener("click", getDogImage);
numImages.addEventListener("change", LoadDogImages);
dogBreed.addEventListener('change', getDogByBreed);
