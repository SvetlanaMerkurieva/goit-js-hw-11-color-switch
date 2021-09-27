import "./styles.css";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

let timerID = null;

startBtn.addEventListener('click', onStart);

function onStart() {
  const min = 0;
  const max = colors.length-1;
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  timerID = setInterval(() => {
   document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(min, max)]}`;
  }, 1000);
  startBtn.removeEventListener('click', onStart);
}
stopBtn.addEventListener('click', onStop);
function onStop() {
  clearInterval(timerID);
  startBtn.addEventListener('click', onStart);
};
