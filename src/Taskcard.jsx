import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';

export const TaskCard = ({ task }) => {
    const { deleteTask } = useContext(TaskContext);

    return <div className='bg-gray-900 p-4 rounded-md'>
        <h3 className='text-white text-2xl'>{task.title}</h3>
        <p className='text-sm mb-3 text-gray-400'>{task.description}</p>
        <button className='bg-red-600 p-1 text-sm text-white rounded-sm hover:bg-red-500' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
}
