const hourInput = document.querySelector("#hour");
const minuteInput = document.querySelector("#minute");
const setAlarmButton = document.querySelector("#setAlarmButton");
const countdown = document.querySelector("#countdown");
const alarmSound = new Audio("alarm.mp3");

let alarmTime;
let alarmInterval;

setAlarmButton.addEventListener("click", setAlarm);

function setAlarm()
{
	alarmSound.pause();
	alarmSound.currentTime = 0;
	
	const currentTime = new Date();
	alarmTime = new Date(
		currentTime.getFullYear(),
		currentTime.getMonth(),
		currentTime.getDate(),
		parseInt(hourInput.value),
		parseInt(minuteInput.value)
	).getTime();
	
	if(alarmTime < currentTime.getTime())
	{
		alarmTime += 24 * 1000 * 60 * 60;
	}
	
	alarmInterval = setInterval(updateTime, 1000);
}

function updateTime()
{
	const currentTime = new Date().getTime();
	const remainingTime = alarmTime - currentTime;
	
	if(remainingTime <= 0)
	{
		alarmSound.loop = true;
		alarmSound.play();
		countdown.textContent = "00:00:00";
		clearInterval(alarmInterval);
		return;
	}
	
	const hour = Math.floor((remainingTime / (1000 * 60 * 60)));
	const minute = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
	
	countdown.textContent = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(seconds)}`;
}

function formatTime(time)
{
	return time < 10 ? `0${time}` : time;
}