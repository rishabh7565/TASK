let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

const taskList = document.getElementById("taskList");
taskList.innerHTML = "";

tasks.forEach((task,index)=>{

const li = document.createElement("li");

li.innerHTML = `
${task}
<button onclick="deleteTask(${index})">Delete</button>
`;

taskList.appendChild(li);

});

}

function addTask(){

const input = document.getElementById("taskInput");

if(input.value.trim() === "") return;

tasks.push(input.value);

saveTasks();

renderTasks();

input.value="";
}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

renderTasks();

}

renderTasks();