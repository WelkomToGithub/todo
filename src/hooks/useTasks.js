import {useContext} from 'react';
import { TasksContext } from '../context/TasksProvider';

export const useTasks = () => {
    return useContext(TasksContext);
}