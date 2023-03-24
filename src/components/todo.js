import React, { useState } from 'react';
import {
    TextField,
    Card, 
    Typography,
    CardContent,
    Container,
    FormControl,
    Button,
    CardActions,
    IconButton,
    Box
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import LensTwoToneIcon from '@mui/icons-material/LensTwoTone';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
 
export const Todo = () => {
    const [addText, setAddText] = useState([])
    const handleChange = (e) => {
        setAddText(e.target.value);
    }
    const [tasks, setTasks] = useState([
        {
            title: 'test',
            id: 0,
            isCompleted: 0
        }
    ])

    const handleAdd = () => {
        const time = new Date().getTime()
     
        const newTask = { 
            title: addText,
            id: time,
            isCompleted: 0
        };
       
       
        setTasks(oldArray => [...oldArray, newTask  ] );
    }
    
    const handleDelete = ({currentTarget}) => {
        const { name: taskId } = currentTarget;
        setTasks(prev => prev.filter(task => task.id !== parseInt(taskId)))
    }

    const [color, setColor] = useState('grey');
    const handleCompleted = ({currentTarget}) => {
        const { name: taskId } = currentTarget;
        const taskIsCompleted = tasks.find(task => task.id == taskId)
        console.log(taskIsCompleted.isCompleted)
        const index = tasks.findIndex(task => task.id == taskId)
        const newState = [...tasks];
       if (taskIsCompleted.isCompleted === 1) {
            newState[index] = { 
                title: taskIsCompleted.title,
                id: taskIsCompleted.id,
                isCompleted: 0
            };
            setTasks(newState)
            // setColor('grey')
       } else {
            newState[index] = { 
                title: taskIsCompleted.title,
                id: taskIsCompleted.id,
                isCompleted: 1
            };
            setTasks(newState)
            // setColor('green')
       }
    }

    return(
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

        }}
        >
            <Container 
                maxWidth='sm'
                marginBottom='0'
                sx={{
                    height: '40px'
                }}
                >
                <FormControl>
                    <TextField 
                        onChange={handleChange} 
                        
                        variant='standard'
                        placeholder='Що потрібно зробити?'
                        // width='35%'
                        flexDirection='row'
                        sx={{
                            // width: '940px',
                            float: 'left',
                            marginBottom: '0'
                        }}
                    />      
                </FormControl>
                <IconButton onClick={handleAdd}
                    sx={{
                        float: 'right',
                        width: '25px'
                    }}
                >
                    <AddBoxOutlinedIcon />
                </IconButton>
            </Container>
            <Container maxWidth='sm' marginTop='0' sx={{
                // marginTop: '0'
            }}>
                { tasks.map((task) =>  <Card sx={{ margin: '0' }}>
                    <CardContent>
                        <Typography>
                            {task.title}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ float: 'left'}}>
                        <IconButton name={task.id}
                            sx={{
                                color: task.isCompleted === 0 ? 'grey' : 'green',

                                }} 
                            onClick={handleCompleted}
                        >
                            <LensTwoToneIcon/>
                        </IconButton>
                        </CardActions>
                        <CardActions sx={{ float: 'right'}}>
                        <IconButton name={task.id} onClick={handleDelete} sx={{
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
