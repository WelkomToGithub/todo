import React, { useState } from 'react';
import {
    Card, 
    Typography,
    CardContent,
    Container,
    CardActions,
    IconButton,
    Box
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import LensTwoToneIcon from '@mui/icons-material/LensTwoTone';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useTasks } from '../hooks/useTasks';

export const Todo = () => {
    const {tasks, setTasks} = useTasks();
    
    const handleDelete = ({currentTarget}) => {
        const { name: taskId } = currentTarget;
        setTasks(prev => prev.filter(task => task.id !== parseInt(taskId)))
    }

    const handleCompleted = ({currentTarget}) => {
        const { name: taskId } = currentTarget;
        const taskIsCompleted = tasks.find(task => task.id == taskId)
        const index = tasks.findIndex(task => task.id == taskId)
        const newState = [...tasks];
       if (taskIsCompleted.isCompleted === 1) {
            newState[index] = { 
                title: taskIsCompleted.title,
                id: taskIsCompleted.id,
                isCompleted: 0
            };
            setTasks(newState)
       } else {
            newState[index] = { 
                title: taskIsCompleted.title,
                id: taskIsCompleted.id,
                isCompleted: 1
            };
            setTasks(newState)
       }
    }

    return(
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            
            width: '600px',
            margin: '0 auto'
        }}
        >
                { tasks.map((task) =>  <Card sx={{ margin: '0 auto', width: '100%' }} key={task.id}>
                    <CardContent sx={{margin: '0 auto'}}>
                        <Typography sx={{margin: '0 auto'}}>
                            {task.title}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'left', margin: '0 auto'}}>
                        <IconButton name={task.id}
                            sx={{
                                color: task.isCompleted === 0 ? 'grey' : 'green',

                                }} 
                            onClick={handleCompleted}
                        >
                            <LensTwoToneIcon/>
                        </IconButton>
                        </CardActions>
                        <CardActions sx={{ float: 'right', margin: '0 auto'}}>
                        <IconButton name={task.id} onClick={handleDelete} sx={{
                            float: 'right'
                        }}>
                            <ClearIcon/>
                        </IconButton>
                    </CardActions>
                </Card>)}
        </Box>
    )
}
