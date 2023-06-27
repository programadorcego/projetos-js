const toggleButton = document.querySelector(".toggleButton");
const stopButton = document.querySelector(".stopButton");
const toggleMuteButton = document.querySelector(".toggleMute");
const video = document.querySelector("#video");
const progress = document.querySelector("#progress");
const progressBar = document.querySelector(".progressBar");
const sliders = document.querySelectorAll(".control-slider");
const toggleFullscreenButton = document.querySelector(".toggleFullscreen");
const playerContainer = document.querySelector("#player-container");


function togglePlay()
{
	if(video.paused || video.ended)
	{
		video.play();
	} else
	{
		video.pause();
	}
}

function updateTogglePlay()
{
	toggleButton.textContent = (video.paused) ? "►" : "❚❚";
	toggleButton.ariaLabel = (video.paused) ? "Tocar" : "Pausar";
}

function stop()
{
	if(!video.ended)
	{
		video.pause();
		video.currentTime = 0;
	}
}

function toggleMute()
{
	video.muted = !video.muted;
}

function updateToggleMute()
{
	toggleMuteButton.textContent = video.muted ? "🔊" : "🔈";
	toggleMuteButton.ariaLabel = video.muted ? "Reativar Som" : "Silenciar";
}

function handleProgress()
{
	const progressPercentage = Math.floor((video.currentTime / video.duration) * 100);
	progressBar.style.width = `${progressPercentage}%`;
	progressBar.setAttribute("aria-valuenow", progressPercentage);
}

function handleKeydown(e)
{
	switch(e.key)
	{
		case "ArrowRight" :
			e.preventDefault();
			
			if(video.currentTime < video.duration)
			{
				video.currentTime += 5;
			}
		break;
		
		case "ArrowLeft" :
			e.preventDefault();
			
			if(video.currentTime > 0)
			{
				video.currentTime -= 5;
			}
		break;
	}
}

function scrub(e)
{
	const scrubTime = Math.floor((e.offsetX / progress.offsetWidth) * video.duration);
	video.currentTime = scrubTime;
}

function updateSlider(e)
{
	video[e.target.name] = Number(e.target.value) / 100;
}

function toggleFullscreen()
{
	const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
	
	if(fullscreenElement)
	{
		exitFullscreen();
	} else
	{
		launchFullscreen();
	}
}

function launchFullscreen()
{
	if(playerContainer.requestFullscreen)
	{
		playerContainer.requestFullscreen();
	} else if(video.mozRequestFullScreen)
	{
		playerContainer.mozRequestFullScreen();
	} else if(playerContainer.webkitRequestFullscreen)
	{
		playerContainer.webkitRequestFullscreen();
	} else if(video.msRequestFullscreen)
	{
		playerContainer.msRequestFullscreen();
	} else
	{
		playerContainer.classList.toggleButton(".fullscreen");
	}
}

function exitFullscreen()
{
	if(document.exitFullscreen)
	{
		document.exitFullscreen();
	} else if(document.mozCancelFullScreen)
	{
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen)
	{
		document.webkitExitFullscreen();
	}
}

function updateToggleFullscreen()
{
	const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
	
	toggleFullscreenButton.textContent = fullscreenElement ? "▢" : "▣";
	toggleFullscreenButton.ariaLabel = fullscreenElement ? "Sair da tela inteira" : "Tela Inteira";
}

toggleButton.addEventListener("click", togglePlay);
video.addEventListener("play", updateTogglePlay);
video.addEventListener("pause", updateTogglePlay);
stopButton.addEventListener("click", stop);
toggleMuteButton.addEventListener("click", toggleMute);
video.addEventListener("volumechange", updateToggleMute);
video.addEventListener("timeupdate", handleProgress);
progressBar.addEventListener("keydown", handleKeydown);
progress.addEventListener("click", scrub);

sliders.forEach(slider => {
	slider.addEventListener("change", updateSlider);
});

toggleFullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", updateToggleFullscreen);