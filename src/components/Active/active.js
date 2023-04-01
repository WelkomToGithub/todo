import React, { useState } from 'react'
import { useTasks } from '../../hooks/useTasks';
import { 
    Button,
    Card,
    Box,
    CardActions,
    CardContent,
    Typography,
    IconButton,
    Container
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import LensTwoToneIcon from '@mui/icons-material/LensTwoTone';



export const Active = () => {
    const {tasks, setTasks} = useTasks();
    const [ filtered, setFiltered] = useState(tasks.filter(obj => {
        return obj.isCompleted === 0;
    }));
    // filtered = tasks.filter(obj => {
    //     return obj.isCompleted === 1;
    // });

    const handleDelete = ({currentTarget}) => {
        const { name: taskId } = currentTarget;
        setFiltered(prev => prev.filter(task => task.id !== parseInt(taskId)))
    }
    
    const handleCompleted = ({currentTarget}) => {
        const { name: taskId } = currentTarget;
        const taskIsCompleted = tasks.find(task => task.id == taskId)
        const index = tasks.findIndex(task => task.id == taskId)
        const newState = [...tasks];
        newState[index] = { 
            title: taskIsCompleted.title,
            id: taskIsCompleted.id,
            isCompleted: 1
        };
        setTasks(newState)
        console.log(tasks)
        setFiltered(prev => prev.filter(task => task.id !== parseInt(taskId)))
    }
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    }}
    >
        <Container
        maxWidth='sm'
        sx={{
            margin: '0 auto'
        }}
        >
            {filtered.map((active) => <Card key={active.id}>
                <CardContent>
                    <Typography>
                        {active.title}
                    </Typography>
                </CardContent>
                <CardActions sx={{ float: 'left'}}>
                    <IconButton 
                    name={active.id}
                    sx={{
                        color: active.isCompleted === 0 ? 'grey' : 'green',
                    }} 
                    onClick={handleCompleted}
                    >
                        <LensTwoToneIcon/>
                    </IconButton>
                </CardActions>
                <CardActions sx={{ float: 'right'}}>
                    <IconButton
                    name={active.id} 
                    onClick={handleDelete} 
                    sx={{
                        float: 'right'
                    }}>
                        <ClearIcon/>
                    </IconButton>
                </CardActions>
            </Card>)}
        </Container>
    </Box>
  )
}

