// Aquí se guarda el estado de la página

import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../components/data/tasks.js"; // as permite cambiarle el nombre a lo importado

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    // Se define tasks como vacio, se modificará con useState
    const [tasks, setTasks] = useState([]);

    // Esto significa que copia todo el arreglo de tareas y le agrega una tarea nueva
    function createTask(task) {
        setTasks([
            ...tasks,
            {
                title: task.title,
                id: tasks.length,
                description: task.description,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
