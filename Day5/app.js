// let inputTime = document.querySelector(".input_container input");
// let buttonShow = document.querySelector(".input_container button");
// let notification = document.querySelector(".notification");
// let second = document.querySelector(".second");
// buttonShow.addEventListener("click", function () {
//   let seconds = Number(inputTime.value);
//   if (seconds < 10 || m < 10 || h < 10) {
//     console.log("0" + seconds);
//     console.log("0" + m);
//   } else {
//     console.log(seconds);
//   }
//   //   callBack(seconds);
// });

// function callBack(seconds) {
//   setTimeout(function () {
//     second.innerText = inputTime.value;
//     notification.style.display = "block";
//     turnOfAfter(seconds);
//   }, seconds);
// }

// function turnOfAfter(seconds) {
//   setTimeout(function () {
//     notification.style.display = "none";
//   }, seconds);
// }

let h = document.querySelector(".hour");
let m = document.querySelector(".minute");
let s = document.querySelector(".second");
let startButton = document.querySelector(".start");
let pauseButton = document.querySelector(".pause");

let second = 0;
let minute = 0;
let hour = 0;
let running;

startButton.addEventListener("click", function () {
  running = setInterval(function () {
    second = second + 1;

    if (second < 10) {
      s.innerText = "0" + second;
    } else {
      s.innerText = second;
    }
    if (minute < 10) {
      m.innerText = "0" + minute;
    } else {
      m.innerText = minute;
    }
    if (hour < 10) {
      h.innerText = "0" + hour;
    } else {
      h.innerText = hour;
    }

    if (second == 60) {
      minute = minute + 1;
      m.innerText = minute;
      second = 0;
    }

    if (minute == 60) {
      h.innerText = hour;
      hour = hour + 1;
      minute = 0;
    }
  }, 50);
});

pauseButton.addEventListener("click", function () {
  clearInterval(running);
});
