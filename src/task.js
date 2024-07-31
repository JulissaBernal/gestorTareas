let tasks=JSON.parse(localStorage.getItem('tasks')) || [];

export const addTask=(task)=>{
    const newTask={
        id:Date.now(),
        text:task,
        completed:false,
    }
    tasks.push(newTask);
    localStorage.setItem('tasks',JSON(tasks));
}

export const getTasks=()=> tasks;