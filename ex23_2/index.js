
// ex23.2 - Ayelet Danieli - Stopwatch

let startSW = document.querySelector('.start');
let stopSW = document.querySelector('.stop');
let tMin = document.querySelector(".min");
let tSec = document.querySelector(".sec");
let tMilS = document.querySelector(".millisec");
let counter = 0;

let timer = 0; // timer id


function displayClock(timeStamp) {
    counter++;
   
    let millisec = Math.floor(counter%60);
    let sec = Math.floor(counter/60);
     let min =  Math.floor(counter/3600);

  console.log(typeof(counter), counter);

  tMilS.innerHTML = millisec > 9 ? millisec : `0${millisec}`;
  tSec.innerHTML = sec > 9 ? sec : `0${sec}`;
  tMin.innerHTML = min > 9 ? min : `0${min}`;
}

stopSW.addEventListener('click', () => {
    window.clearInterval(timer);
})

startSW.addEventListener('click', () => {
    timer = window.setInterval(displayClock, 1);
})
