const toggleButton = document.querySelector(".toggleButton");
const stopButton = document.querySelector(".stopButton");
const toggleMuteButton = document.querySelector(".toggleMute");
const audio = new Audio("audio.mp3");

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

toggleButton.addEventListener("click", togglePlay);
audio.addEventListener("play", updateTogglePlay);
audio.addEventListener("pause", updateTogglePlay);
stopButton.addEventListener("click", stop);
toggleMuteButton.addEventListener("click", toggleMute);
audio.addEventListener("volumechange", updateToggleMute);