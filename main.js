const startBtn = document.querySelector("#start");
const progressBar = document.querySelector(".progressbar");

startBtn.addEventListener("click", move);

function move()
{
	let width = 0;
	progressBar.setAttribute("aria-valuenow", width);
	progressBar.style.width = `${width}%`;
	progressBar.textContent = `${width}%`;
	let interval = setInterval(frame, 100);
	
	function frame()
	{
		if(width >= 100)
		{
			return clearInterval(interval);
		}
		
		width += 1;
		progressBar.setAttribute("aria-valuenow", width);
		progressBar.style.width = `${width}%`;
		progressBar.textContent = `${width}%`;
	}
}