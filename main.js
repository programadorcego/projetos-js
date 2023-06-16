const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const timer = document.querySelector("#timer");

let time = 0;
let timerInterval;

startBtn.addEventListener("click", () => {
	startBtn.disabled = true;
	stopBtn.disabled = false;
	timerInterval = setInterval(updateTimer, 1000);
});

stopBtn.addEventListener("click", () => {
	stopBtn.disabled = true;
	startBtn.disabled = false;
	
	clearInterval(timerInterval);
});

function updateTimer()
{
	time += 1000;
	
	const hours = Math.floor(time / (1000 * 60 * 60));
	const minutes = Math.floor((time % (1000 * 60 *60)) / (1000 * 60));
	const seconds = Math.floor((time % (1000 * 60)) / 1000);
	
	timer.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time)
{
	return time < 10 ? `0${time}` : time;
}