import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import {
    Container,
    TextField,
    IconButton,
    FormControl
} from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


export const InputTask = () => {
    const {tasks, addTask } = useTasks();
    const [addText, setAddText] = useState('');

    const handleChange = (e) => {
        setAddText(e.target.value);
    }

    const handleAdd = () => {
        const time = new Date().getTime()
        const newTask = { 
            title: addText,
            id: time,
            isCompleted: 0
        };
        addTask(newTask)
        setAddText('')
    }
  return (
    <div>
        <Container 
                
                maxWidth='sm'
                sx={{
                    margin: '50px auto 5px auto'
                }}
                >
                <FormControl>
                    <TextField 
                        value={addText}
                        onChange={handleChange} 
                        multiline
                        
                        variant='standard'
                        placeholder='Що потрібно зробити?'
                        sx={{
                            width: '490px',
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
    </div>
  )
}


