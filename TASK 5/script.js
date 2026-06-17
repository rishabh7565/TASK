let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput =
document.getElementById("taskInput");

const addBtn =
document.getElementById("addBtn");

const taskList =
document.getElementById("taskList");

const searchInput =
document.getElementById("search");

const filterSelect =
document.getElementById("filter");

function saveTasks(){
localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);
}

function updateStats(){

const total = tasks.length;

const completed =
tasks.filter(
task => task.completed
).length;

const pending =
total - completed;

document.getElementById("total").textContent =
total;

document.getElementById("completed").textContent =
completed;

document.getElementById("pending").textContent =
pending;

}

function renderTasks(){

taskList.innerHTML = "";

const searchText =
searchInput.value.toLowerCase();

const filterValue =
filterSelect.value;

let filteredTasks =
tasks.filter(task =>
task.text.toLowerCase().includes(searchText)
);

if(filterValue === "completed"){
filteredTasks =
filteredTasks.filter(
task => task.completed
);
}

if(filterValue === "pending"){
filteredTasks =
filteredTasks.filter(
task => !task.completed
);
}

filteredTasks.forEach((task,index)=>{

const li =
document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `

<span>${task.text}</span>

<div class="actions">

<button onclick="toggleTask(${index})">
✓
</button>

<button onclick="editTask(${index})">
Edit
</button>

<button onclick="deleteTask(${index})">
Delete
</button>

</div>

`;

taskList.appendChild(li);

});

updateStats();

}

function addTask() {
    const text = taskInput.value.trim();

    if(text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    console.log(tasks); // Debug

    saveTasks();
    renderTasks();

    taskInput.value = "";
}



function toggleTask(index){

tasks[index].completed =
!tasks[index].completed;

saveTasks();
renderTasks();

}

function editTask(index){

const updated =
prompt(
"Edit Task",
tasks[index].text
);

if(updated){

tasks[index].text = updated;

saveTasks();
renderTasks();

}

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();

}

addBtn.addEventListener(
"click",
addTask
);

searchInput.addEventListener(
"input",
renderTasks
);

filterSelect.addEventListener(
"change",
renderTasks
);

renderTasks();