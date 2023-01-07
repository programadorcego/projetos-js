function countDown()
{
	let now = new Date();
	
	let hours = parseInt(document.querySelector('#hour').value);
	let minutes = parseInt(document.querySelector('#minutes').value);
	
	let countDown = (hours <= now.getHours() && minutes <= now.getMinutes()) ? new Date(now.setDate(now.getDate() + 1)).setHours(hours, minutes, 0) : new Date().setHours(hours, minutes, 0);

	let x = setInterval(() => {
		now = new Date().getTime();
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