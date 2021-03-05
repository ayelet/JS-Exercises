// Ex 34.3 - Ayelet Danieli - CORS and Recipes (PIZZA!!!)
const baseEndpoint = "http://www.recipepuppy.com/api/";
const randomJokeApi = "https://api.chucknorris.io/jokes/random";
const catFactrsApi = "https://apilist.fun/api/cat-facts";
const proxy =   "https://cors-anywhere.herokuapp.com/";

async function fetchOptions(url) {
  let req= new Request('OPTIONS');
  const res= await fetch(req)
  .then(res => res.json())
  // .then(console.log(res))
  .catch(err => { console.log("fetchOptions Error: ", err);}  )

  console.log("$$$$ Options:", res);
}

async function fetchUrl(url) {
  // let myUrl = 'http://127.0.0.1:5500/ex34.3-pizza/';
  const res = await fetch(url)
    .then((res) => res.json())
    // .then(res => console.log(res.Response)).
    // .then(res => console.log(res))
    // .then(res.setHeader("Access-Control-Allow-Origin", myUrl))
    // .then(res.header(
    //       "Access-Control-Allow-Headers",
    //       "Origin, X-Requested-With, Content-Type, Accept"
    //     ))
    .catch((err) => console.log("fetchUrl failed: ", err));

  console.log("@@@ response:", res);
  return res;
}

async function fetchRecipes(query) {
  try {
    console.log("Before fetch");
    const res = fetchUrl(`${baseEndpoint}q?=${query}`);
    console.log("after fetch", res);
    // const data = await res.json();
    // console.log(data);
    return res;
  } catch (err) {
    console.log("FetchRecipes failed:", err);
  }
}

function getCurrentPosition() {
  // async call
  navigator.geolocation.getCurrentPosition(
    (location) => console.log(location),
    (err) => console.log("error in geolocation: ", err),
    // configuration method: allows to set timeout for the request
    {
      // timeout: 1000, // set this to zero to test the error callback
    }
  );
}

function saveDataToLocalStorage(data) {}
fetchOptions(baseEndpoint);
fetchUrl(baseEndpoint);
//fetchUrl(randomJokeApi);
console.log("hey there");
// getCurrentPosition();
