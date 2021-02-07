// exercise 2.2 - Ayelet Danieli - Fortune teller

function tellFortune(jobTitle, location, partnerName, numChildren) {
    let str = "You will be a " + jobTitle + " in " + location + " and married to " +  partnerName + " with " +  numChildren + " children";
    return str;
}

let str1 = tellFortune("Designer", "Haifa", "Abigail", 3);

console.log(str1);