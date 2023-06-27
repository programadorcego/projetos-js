const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const prevSlide = document.querySelector(".prev");
const nextSlide = document.querySelector(".next");

prevSlide.addEventListener("click", e => {
	e.preventDefault();
	
	plusSlide(-1);
});

nextSlide.addEventListener("click", e => {
	e.preventDefault();
	
	plusSlide(1);
});

dots.forEach((dot, index) => {
	dot.addEventListener("click", e => {
		e.preventDefault();
		currentSlide(++index);
	});
});

function currentSlide(n)
{
	showSlide(slideIndex = n);
}

function plusSlide(n)
{
	showSlide(slideIndex += n);
}

let slideIndex = 1;
showSlide(slideIndex);

function showSlide(n)
{
	if(n > slides.length) slideIndex = 1;
	if(n < 1) slideIndex = slides.length;
	
	slides.forEach((slide, index) => {
		slide.style.display = "none";
		dots[index].classList.remove("active");
	});
	
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active");
	
	setTimeout(() => showSlide(++slideIndex), 5000);
}