// ex9.1 - Ayelet Danieli - Objects

// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.

function isString(str, myFunction) {
  if (typeof str === "string") myFunction(str);
}

function display(str) {
  console.log(str);
}

let a = "I am a string";
isString(a, display);
let b = 10;
isString(b, display);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
function firstWordUpperCase(str, callbackFunc) {
  if (typeof str === "string") {
    return callbackFunc(str.charAt(0).toUpperCase() + str.slice(1));
  }

  return "none";
}

const dashSentence = (s) => {
  if (typeof s !== "string") return "";
  
  let s1 = s.replace(/ /g, "-");

  return s1;
};


// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
let sentence = "the little red fox jumps over the fence";
console.log(firstWordUpperCase(sentence, dashSentence));

// 4. Create your own function that will receive from one of its
// arguments a callback function.
function firstWordLowerCase(str, callbackFunc) {
    if (typeof str === "string") {
      return callbackFunc(str.charAt(0).toLowerCase() + str.slice(1));
    }
  
    return "none";
  }
  
  const letterToDigits = (s) => {
    if (typeof s !== "string") return "";
    let s1 = s.replace(/o/g, "0");
    let s2 = s1.replace(/f/g, "9");
    let s3 = s2.replace(/i/g, "1");

    return s3;
  };

  console.log(firstWordLowerCase(sentence, letterToDigits));

