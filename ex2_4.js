// exercise 2.4 - Ayelet Danieli - Circle Area

const WeekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getAdditive(date) {
    let additive = "th";
    switch (date) {
      case 1:
      case 31:
        additive = "st";
        break;
      case 2:
        additive = "nd";
        break;
      case 3:
        additive = "rd";
        break;
      default:
        additive = "th";
    }
    return additive;
}
function today() {
  let now = new Date();

  let day = now.getDate();
  let month = Month[now.getMonth()];
  let weekday = WeekDay[now.getDay()];
  let year = now.getUTCFullYear();
  let additive = getAdditive(now.getDate());
  let str1 = `Today is ${weekday}, the ${day}${additive} of ${month}, ${year}`;
  return str1;
}


console.log(today());
