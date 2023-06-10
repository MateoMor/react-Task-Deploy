import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    // Se crea title con la posibilidad de ser modificiado con useState
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const { createTask } = useContext(TaskContext);

    // Con esto se crea una función que impide que el formulario actue por defecto y mostrará el contenido de title
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle("");
        setdescription("");
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input
                    placeholder="Escribe tu tarea"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    value={title}
                    autoFocus
                    className="bg-slate-300 p-3 w-full mb-2"
                />
                <textarea
                    placeholder="Escrible la descripción de la tarea"
                    onChange={(e) => {
                        setdescription(e.target.value);
                    }}
                    className="bg-slate-300 p-3 w-full mb-2"
                    value={description}
                ></textarea>
                <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm;
