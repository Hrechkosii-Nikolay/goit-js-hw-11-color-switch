const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  bodyRef: document.querySelector("body"),
  btnStart: document.querySelector(".start"),
  btnStop: document.querySelector(".stop"),
};

let intervalId = null;
const DELAY_CHANGE_COLOR = 1000;

refs.btnStart.addEventListener("click", onCreateBodyColor);
refs.btnStop.addEventListener("click", onClearTimeoutlId);

function onCreateBodyColor() {
  refs.btnStart.disabled = true;

  intervalId = setInterval(() => {
    refs.bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, DELAY_CHANGE_COLOR);
}

function onClearTimeoutlId() {
  clearInterval(intervalId);
  refs.btnStart.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
