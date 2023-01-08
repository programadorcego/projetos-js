let btn = document.querySelector('button');
let opacity = 0;
const container = document.querySelector('.container');

document.querySelector('.fade-in').addEventListener('click', function(){
	fadeIn();
});

function fadeIn()
{
	let fade = setInterval(() => {
		opacity = Number(getComputedStyle(container).getPropertyValue('opacity'));
		
		if(opacity < 1)
		{
			opacity += 0.1;
			container.style.opacity = opacity;
		} else{
			clearInterval(fade);
			btn.classList.add('fade-out');
			btn.classList.remove('fade-in');
			fadeOut();
		}
	}, 200);
}

function fadeOut()
{
	document.querySelector('.fade-out').addEventListener('click', function(){
		let fade = setInterval(() => {
		opacity = Number(getComputedStyle(container).getPropertyValue('opacity'));
		
		if(opacity > 0)
		{
			opacity -= 0.1;
			container.style.opacity = opacity;
		} else{
			clearInterval(fade);
			btn.classList.add('fade-in');
			btn.classList.remove('fade-out');
			
			document.querySelector('.fade-in').addEventListener('click', function(){
				fadeIn();
			});
		}
	}, 200);
	});
}