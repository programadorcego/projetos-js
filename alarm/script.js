let hours = 1 * 60 * 60;
let minutes = 0 * 60;
let seconds = 0;
let countDown = new Date(new Date().getTime() + ((hours + minutes + seconds) * 1000)).getTime();

let x = setInterval(() => {
	let now = new Date().getTime();
	let distance = countDown - now;
	
	hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	if(hours < 10) hours = hours + '0';
	if(minutes < 10) minutes = minutes + '0';
	if(seconds < 10) seconds = seconds + '0';
	
	document.querySelector('.countdown').innerHTML = `${hours}:${minutes}:${seconds}`;
	
	if(distance <0)
	{
		clearInterval(x);
		document.querySelector('.countdown').innerHTML = '00:00:00';
	}
}, 1000);