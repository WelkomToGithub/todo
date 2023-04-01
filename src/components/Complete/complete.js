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
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export const Completed = () => {
    const {tasks, setTasks} = useTasks();
    const [completed, setCompleted] = useState();
    const [ filtered, setFiltered] = useState(tasks.filter(obj => {
        return obj.isCompleted === 1;
    }));
    // filtered = tasks.filter(obj => {
    //     return obj.isCompleted === 1;
    // });

    const handleDelete = ({currentTarget}) => {
        const { name: taskId } = currentTarget;
        setFiltered(prev => prev.filter(task => task.id !== parseInt(taskId)))
    }
    
    const handleNotCompleted = ({currentTarget}) => {
        const { name: taskId } = currentTarget;
        const taskIsCompleted = tasks.find(task => task.id == taskId)
        const index = tasks.findIndex(task => task.id == taskId)
        const newState = [...tasks];
        newState[index] = { 
            title: taskIsCompleted.title,
            id: taskIsCompleted.id,
            isCompleted: 0
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
                {filtered.map((complete) => <Card key={complete.id}>
                    <CardContent>
                        <Typography>
                            {complete.title}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'left'}}>
                        <IconButton 
                        name={complete.id}
                        sx={{
                            color: complete.isCompleted === 0 ? 'grey' : 'green',
                        }} 
                        onClick={handleNotCompleted}
                        >
                            <LensTwoToneIcon/>
                        </IconButton>
                    </CardActions>
                    <CardActions sx={{ float: 'right'}}>
                        <IconButton
                        name={complete.id} 
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


