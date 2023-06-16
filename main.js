const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach(button => {
	button.addEventListener("click", e => {
		buttons.forEach(button => {
			button.setAttribute("aria-expanded", false);
			button.classList = "accordion-button";
			
			const panel = document.querySelector(`#${button.getAttribute("aria-controls")}`);
			panel.style.minHeight = 0;
			panel.classList = "panel";
		});
		
		const targetElement = e.target;
		const panel = document.querySelector(`#${targetElement.getAttribute("aria-controls")}`);
		
		targetElement.classList.add("active");
		targetElement.setAttribute("aria-expanded", true);
		
		panel.classList.add("expanded");
		panel.style.minHeight = `${panel.scrollHeight}px`;
	});
});