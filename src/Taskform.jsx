import { useContext, useState } from 'react'
import { TaskContext } from './context/TaskContext';

function Taskform() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createTask } = useContext(TaskContext); // Structure function of Context

    // Save Task Event
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length > 0 && description.length > 0) {
            createTask(title, description);
            setTitle('');
            setDescription('');
        }
    }

    return <form className='w-3/5 mx-auto bg-gray-700 p-2' onSubmit={handleSubmit}>
        <input className='d-block w-full p-4 rounded-md mb-3' placeholder='Titulo' onChange={e => setTitle(e.target.value)} value={title} /><br />
        <textarea className='d-block w-full p-4 rounded-md mb-2' placeholder='Descripción' onChange={e => setDescription(e.target.value)} value={description}></textarea><br />
        <button className='bg-red-600 text-white rounded-md p-2 hover:bg-red-500'>Guardar tarea</button>
    </form>
}

export default Taskform
