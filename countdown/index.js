const startBtn = document.querySelector('.btn-start');
const resetBtn = document.querySelector('.btn-reset');
const showTimer = document.querySelector('.timer');

let timer = 0;
let interval;
let isRunning = false;
let oneSecond = 1000;

const start = () => {
  isRunning = true;
  interval = setInterval(runTimer, oneSecond);
}

const pause = () => {
  isRunning = false;
  clearInterval(interval)
}

const reset = () => {
  timer = 0;
  showTimer.innerText = "00:00"
}

const pad = (number) => (number < 10) ? '0' + number : number;

const runTimer = () => {
  timer++;
  
  const countSeconds = pad(timer % 60);
  const countMinutes = pad(Math.floor(timer / 60));

  showTimer.innerText = `${countMinutes}:${countSeconds}`
}

startBtn.addEventListener('click', () => {
  !isRunning ? start() : pause();

  startBtn.innerText = isRunning ? 'Pause' : 'Play';
})

resetBtn.addEventListener('click', () => reset())

