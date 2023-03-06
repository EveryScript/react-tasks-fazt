import { useContext } from "react"
import { TaskContext } from "./context/TaskContext"
import { TaskCard } from "./Taskcard"

export const Tasklist = () => { // Props 
    const {tasks} = useContext(TaskContext);

    if (tasks.length == 0) {
        return <p className="text-center text-gray-200 mt-4">No hay elementos en la lista</p>
    } else {
        return <section className="grid grid-cols-4 gap-2 mt-3">
            {tasks.map(task =>
                <TaskCard key={task.id} task={task} />
            )}
        </section>
    }
}