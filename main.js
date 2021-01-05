let btnStart = document.querySelector("button");
let theTimer = document.querySelector("h1");

let timer = [0, 0, 0, 0];
let interval;
let timerRunning = false;

function changeButton() {
  if (btnStart.textContent === "Start") {
    btnStart.classList.remove("btn-success");
    btnStart.classList.add("btn-danger");
    btnStart.innerHTML = "Stop";

    timerRunning = true;
    interval = setInterval(runStopwatch, 10);
  } else {
    btnStart.classList.remove("btn-danger");
    btnStart.classList.add("btn-success");
    btnStart.innerHTML = "Start";

    clearInterval(interval);
  }
}

function runStopwatch() {
  let currentTime =
    leadingZero(timer[0]) +
    ":" +
    leadingZero(timer[1]) +
    ":" +
    leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }

  return time;
}

// Add Event Listener
btnStart.addEventListener("click", changeButton);
