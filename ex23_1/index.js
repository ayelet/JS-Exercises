// ex23.1 - Ayelet Danieli - Clock 

let tHour = document.querySelector(".hour");
let tMin = document.querySelector(".minute");
let tSec = document.querySelector(".second");
let armHour = document.querySelector(".clock-hour");
let armMin = document.querySelector(".clock-min");
let armSec = document.querySelector(".clock-sec");

window.addEventListener("load", (event) => {
  let time = new Date();
});

function displayClock() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
// console.log(hour, min, sec);
  tHour.innerHTML = hour > 9 ? hour : `0${hour}`;
  tMin.innerHTML = min > 9 ? min : `0${min}`;
  tSec.innerHTML = sec > 9 ? sec : `0${sec}`;
  let degH = (hour / 12) * 360;
  let degM = (min / 60) * 360;
  let degS = (sec / 60) * 360;
  armHour.style.transform = "rotate(" + degH + "deg)";
  armMin.style.transform = "rotate(" + degM + "deg)";
  armSec.style.transform = "rotate(" + degS + "deg)";
}

window.setInterval(displayClock, 1000);
