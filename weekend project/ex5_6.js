// Ex5.6 - Mask
// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == ""
// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") ==
// "####################################man!"
console.log("*** ex 5.6 - Masking password ***");

let maskify = (str) => {
  // let repeatStr = (n,str) => new Array(n).fill(str).join('');
  let str1 = "";
  if (str.length < 5) str1 = str;
  else str1 = new Array(str.length - 4).fill("#").join("") + str.slice(-4);
  console.log(str1);
};
maskify("Skippy"); // == "##ippy"
maskify("4556364607935616"); // == "############5616"
maskify("64607935616"); // == "#######5616"
maskify("1"); // == "1"
maskify(""); // == ""


