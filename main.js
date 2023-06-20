const tabs = Array.from(document.querySelectorAll(".tab"));
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
	
	tab.addEventListener("keydown", e => {
		let index = tabs.indexOf(e.target);
		
		switch(e.key)
		{
			case "ArrowLeft" :
				e.preventDefault();
				
				if(index > 0)
				{
					selectTab(tabs[--index]);
				}
			break;
			
			case "ArrowRight" :
				e.preventDefault();
				
				if(index < tabs.length - 1)
				{
					selectTab(tabs[++index]);
				}
			break;
		}
	});
});

function selectTab(tab)
{
	tabs.forEach(tab => {
		tab.tabIndex = "-1";
	});
	
	tab.tabIndex = "0";
	tab.focus();
}