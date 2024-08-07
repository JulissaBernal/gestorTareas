import { addTask } from "./task";
import { renderTasks } from "./ui"


document.addEventListener('DOMContentLoaded',()=>{
    //hicimos visible la lista de tareas
    renderTasks();
    //agregar el evento para la funcion para agregar tareas
    document.getElementById("task-form").addEventListener("submit",(e)=>{
        e.preventDefault();
        const taskInput=document.getElementById("task-input");
        if(taskInput.value !== ""){
            addTask(taskInput.value)
            renderTasks();
            document.getElementById("task-input").value="";
        }
    })
})