const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tabpanel");

tabs.forEach(tab => {
	tab.addEventListener("click", () => {
		let selected = (tab.getAttribute("aria-selected") == "true");
		
		if(!selected)
		{
			tabs.forEach(tab => {
				tab.setAttribute("aria-selected", selected);
				tab.classList = "tab";
			});
			
			panels.forEach(panel => {
				panel.classList = "tabpanel";
			});
			
			tab.setAttribute("aria-selected", true);
			tab.classList.add("active");
			
			panel = document.querySelector(`#${tab.getAttribute("aria-controls")}`);
			panel.classList.add("show");
		}
	});
});