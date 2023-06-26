const toggleButton = document.querySelector(".toggleButton");
const stopButton = document.querySelector(".stopButton");
const toggleMuteButton = document.querySelector(".toggleMute");
const audio = new Audio("audio.mp3");
const progress = document.querySelector("#progress");
const progressBar = document.querySelector(".progressBar");
const sliders = document.querySelectorAll(".control-slider");

function togglePlay()
{
	if(audio.paused || audio.ended)
	{
		audio.play();
	} else
	{
		audio.pause();
	}
}

function updateTogglePlay()
{
	toggleButton.textContent = (audio.paused) ? "►" : "❚❚";
	toggleButton.ariaLabel = (audio.paused) ? "Tocar" : "Pausar";
}

function stop()
{
	if(!audio.ended)
	{
		audio.pause();
		audio.currentTime = 0;
	}
}

function toggleMute()
{
	audio.muted = !audio.muted;
}

function updateToggleMute()
{
	toggleMuteButton.textContent = audio.muted ? "🔊" : "🔈";
	toggleMuteButton.ariaLabel = audio.muted ? "Reativar Som" : "Silenciar";
}

function handleProgress()
{
	const progressPercentage = Math.floor((audio.currentTime / audio.duration) * 100);
	progressBar.style.width = `${progressPercentage}%`;
	progressBar.setAttribute("aria-valuenow", progressPercentage);
}

function handleKeydown(e)
{
	switch(e.key)
	{
		case "ArrowRight" :
			e.preventDefault();
			
			if(audio.currentTime < audio.duration)
			{
				audio.currentTime += 5;
			}
		break;
		
		case "ArrowLeft" :
			e.preventDefault();
			
			if(audio.currentTime > 0)
			{
				audio.currentTime -= 5;
			}
		break;
	}
}

function scrub(e)
{
	const scrubTime = Math.floor((e.offsetX / progress.offsetWidth) * audio.duration);
	audio.currentTime = scrubTime;
}

function updateSlider(e)
{
	audio[e.target.name] = Number(e.target.value) / 100;
}

toggleButton.addEventListener("click", togglePlay);
audio.addEventListener("play", updateTogglePlay);
audio.addEventListener("pause", updateTogglePlay);
stopButton.addEventListener("click", stop);
toggleMuteButton.addEventListener("click", toggleMute);
audio.addEventListener("volumechange", updateToggleMute);
audio.addEventListener("timeupdate", handleProgress);
progressBar.addEventListener("keydown", handleKeydown);
progress.addEventListener("click", scrub);

sliders.forEach(slider => {
	slider.addEventListener("change", updateSlider);
});