const items = Array.from(document.querySelectorAll(".treeitem"));

items.forEach(item => {
	item.addEventListener("keydown", handleKeydown);
});

function handleKeydown(e)
{
	const currentItem = e.target;
	const currentItemIndex = items.indexOf(currentItem);
	
	switch(e.key)
	{
		case "ArrowDown" :
			e.preventDefault();
			
			if(currentItemIndex < items.length - 1)
			{
				const item = (items[currentItemIndex + 1].parentElement.parentElement.ariaExpanded == "false") ? items[currentItemIndex + 1].parentElement.parentElement.nextElementSibling : items[currentItemIndex + 1];
				selectItem(item);
			}
		break;
		
		case "ArrowUp" :
			e.preventDefault();
			
			if(currentItemIndex > 0)
			{
				const item = (items[currentItemIndex - 1].parentElement.parentElement.ariaExpanded == "false") ? items[currentItemIndex - 1].parentElement.parentElement : items[currentItemIndex - 1];
				selectItem(item);
			}
		break;
		
		case "ArrowRight" :
			e.preventDefault();
			
			if(currentItem.ariaExpanded == "false")
			{
				toggleItem(currentItem, true, `${currentItem.querySelector(".subtree").scrollHeight}px`);
			}
		break;
		
		case "ArrowLeft" :
			e.preventDefault();
			
			if(currentItem.ariaExpanded == "true")
			{
				toggleItem(currentItem, false, 0);
			}
		break;
	}
}

function selectItem(item)
{
	items.forEach(item => {
		item.tabIndex = "-1";
	});
	
	item.tabIndex = "0";
	item.focus();
}

function toggleItem(item, expanded, height)
{
	item.ariaExpanded = expanded;
	item.querySelector(".subtree").classList.toggle("expanded");
	item.querySelector(".subtree").style.minhEight = height;
	item.querySelector(".caret").classList.toggle("caret-down");
}