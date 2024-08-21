import { addTask,deleteTask,updateTask } from "./task";
import { renderTasks } from "./ui"
import confetti from "canvas-confetti";


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
    //agregar el evento de los botones
    document.getElementById('task-list').addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete')){
            const taskId=e.target.parentElement.getAttribute('data-id');
            deleteTask(taskId);
            renderTasks();
        }
        if(e.target.classList.contains('toggle')){
            const taskId=e.target.parentElement.getAttribute('data-id');
            updateTask(taskId);
            renderTasks();
            if(e.target.innerHTML === "Completar"){
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                  });
            }
        }
    });
});