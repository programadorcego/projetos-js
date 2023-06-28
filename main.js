const calendar = document.querySelector(".calendar");
const currentDate = new Date();
const calendarDate = new Date(
	currentDate.getFullYear(),
	currentDate.getMonth() + 1,
	0
);

calendar.querySelector(".month").innerHTML = `<h1>${calendarDate.toLocaleString("default", {month: "long"})}</h1>`;
const today = currentDate.getDate();
currentDate.setDate(1);
const weekDay = currentDate.getDay();

for(let i = 0; i < weekDay; i++)
{
	const div = document.createElement("div");
	div.classList.add("day");
	calendar.appendChild(div);
}

for(let i = 1; i <= calendarDate.getDate(); i++)
{
	const div = document.createElement("div");
	div.classList.add("day");
	
	if(today == i)
	{
		div.classList.add("today");
	}
	
	div.textContent = i;
	calendar.appendChild(div);
}