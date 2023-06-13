const tasks = [];
const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const toDoList = document.querySelector("#toDoList");

addTaskButton.addEventListener("click", () => {
	tasks.push({
		text: taskInput.value,
		checked: false,
	});
	
	taskInput.value = "";
	renderTasks();
});

function renderTasks()
{
	toDoList.innerHTML = "";
	
	tasks.forEach((task, index) => {
		const li = document.createElement("li");
		
		if(task.checked)
		{
			li.classList = "checked";
		}
		
		const span = document.createElement("span");
		span.textContent = task.text;
		span.addEventListener("click", () => toggleChecked(index));
		
		const removeButton = document.createElement("span");
		removeButton.textContent = `\u00D7`;
		removeButton.setAttribute("role", "button");
		removeButton.setAttribute("aria-label", "Remover");
		removeButton.addEventListener("click", () => removeTask(index));
		
		li.append(span, removeButton);
		toDoList.append(li);
	});
}

function toggleChecked(index)
{
	tasks[index].checked = !tasks[index].checked;
	renderTasks();
}

function removeTask(index)
{
	tasks.splice(index, 1);
	renderTasks();
}