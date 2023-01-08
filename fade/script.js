document.querySelector('button').addEventListener('click', function(){
	let opacity = 0;
	const container = document.querySelector('.container');
	
	let fade = setInterval(() => {
		opacity = Number(getComputedStyle(container).getPropertyValue('opacity'));
		
		if(opacity < 1)
		{
			opacity += 0.1;
			container.style.opacity = opacity;
		} else{
			clearInterval(fade);
		}
	}, 200);
});