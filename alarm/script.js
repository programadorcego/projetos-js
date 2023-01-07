function countDown()
{
	let hours = 0 * 60 * 60 * 1000;
	let minutes = 0 * 60 * 1000;
	let seconds = 10 * 1000;
	let countDown = new Date(new Date().getTime() + hours + minutes + seconds).getTime()

	let x = setInterval(() => {
		let now = new Date().getTime();
		let distance = countDown - now;
		
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		if(hours < 10) hours = '0' + hours;
		if(minutes < 10) minutes = '0' + minutes;
		if(seconds < 10) seconds = '0' + seconds;
		
		document.querySelector('.countdown').innerHTML = `${hours}:${minutes}:${seconds}`;
		
		if(distance <0)
		{
			clearInterval(x);
			document.querySelector('.countdown').innerHTML = '00:00:00';
			
			const alarm = new Audio('alarm.mp3');
			alarm.loop = true;
			alarm.play();
		}
	}, 1000);
}