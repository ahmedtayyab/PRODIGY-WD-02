let [ms, sec, min, hr] = [0, 0, 0, 0];
const timerDisplay = document.querySelector(".timer");
let intervalId = null;
let lapCount = 0;

alert("Welcome to the Timer App");

document.getElementById("start").addEventListener("click", () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(updateTimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(intervalId);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(intervalId);
    [ms, sec, min, hr] = [0, 0, 0, 0];
    timerDisplay.innerHTML = "00:00:00:000";
    document.getElementById("lap-list").innerHTML = ""; // Clear lap times
    lapCount = 0;
});

document.getElementById("lap").addEventListener("click", () => {
    lapCount++;
    const lapTime = formatTime(hr, min, sec, ms);
    const lapItem = document.createElement("li");
    const lapList = document.getElementById("lap-list");
    lapItem.innerHTML = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
});

function updateTimer() {
    ms += 10;
    if (ms >= 1000) {
        ms = 0;
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hr++;
            }
        }
    }
    timerDisplay.innerHTML = formatTime(hr, min, sec, ms);
}

function formatTime(hr, min, sec, ms) {
    let hours = hr < 10 ? `0${hr}` : hr;
    let minutes = min < 10 ? `0${min}` : min;
    let seconds = sec < 10 ? `0${sec}` : sec;
    let milliseconds = ms < 10 ? `00${ms}` : ms < 100 ? `0${ms}` : ms;
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
