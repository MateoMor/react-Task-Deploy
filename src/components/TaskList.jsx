import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

// TaskList recibe props que vendrían siendo los tasks
function TaskList() {

    const {tasks} = useContext(TaskContext)

    // Verifica si tasks tiene algo o no
    if (tasks.length === 0) {
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>;
    }

    // Por cada task devuelve su información
    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
}

export default TaskList;
