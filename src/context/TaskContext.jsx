import { useState, createContext, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // State Task
  const [tasks, setTasks] = useState([]);

  // Effect Task
  useEffect(() => {
    setTasks(data);
  }, []);

  // Create new task
  function createTask(title_task, desc_task) {
    setTasks([...tasks, { id: tasks.length, title: title_task, description: desc_task }]); // "[...tasks]" -> copy all tasks a new array
  }

  // Delete a task
  function deleteTask(id_task) {
    setTasks(tasks.filter(task => task.id !== id_task));
  }
  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}