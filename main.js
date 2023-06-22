const openBtn = document.querySelector("#openBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", e => {
	if(e.target == modal)
	{
		closeModal();
	}
});

modal.addEventListener("keydown", e => {
	if(e.key == "Escape")
	{
		e.preventDefault();
		closeModal();
	}
});

function openModal()
{
	modal.style.visibility = "visible";
	modal.style.opacity = "1";
}

function closeModal()
{
	modal.style.opacity = "0";
	setTimeout(() => {modal.style.visibility = "Hidden"}, 300);
	openBtn.focus();
}