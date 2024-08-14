let tasks=JSON.parse(localStorage.getItem('tasks')) || [];

export const addTask=(task)=>{
    const newTask={
        id:Date.now(),
        text:task,
        completed:false,
    }
    tasks.push(newTask);
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

//funcion para poder traer la lista de tareas
export const getTasks=()=> tasks;
//funcion para eliminar una tarea
export const deleteTask=(id)=>{
    tasks=tasks.filter((task)=> task.id!== parseInt(id));
    localStorage.setItem('tasks',JSON.stringify(tasks));
};
//funcion para actualizar una tarea
export const updateTask=(id)=>{
    tasks=tasks.map((task)=>{
    if(task.id === parseInt(id)){
        task.completed = !task.completed;
    }
    return task;
});
localStorage.setItem('tasks',JSON.stringify(tasks));
};