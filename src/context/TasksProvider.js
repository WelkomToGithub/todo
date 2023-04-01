import { createContext, useState } from 'react';

export const TasksContext = createContext();
export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const addTask = (newTask) => {
        setTasks(oldArray => [...oldArray, newTask  ] );
    }
    return (
        <TasksContext.Provider value={{tasks, setTasks, addTask}}>
            {children}
        </TasksContext.Provider>
    )
}
