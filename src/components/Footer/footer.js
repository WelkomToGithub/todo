import React from 'react'
import {
    Typography,
    Container,
    Button,
    Grid
} from '@mui/material';
import { useTasks } from '../../hooks/useTasks';
import { NavLink } from 'react-router-dom';


export const Footer = () => {
    const {tasks, setTasks} = useTasks();
  return (
    <div>
       <Container maxWidth='sm'>
                <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Grid>
                        <Typography>
                            Всього завдань: {tasks.length}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Button 
                        className='MuiButton-contained'
                        variant='filled'
                        component={NavLink} to="/">
                            Всі
                        </Button>
                    </Grid>
                    <Grid>
                        <Button 
                        className='MuiButton-contained'
                        variant='filled'
                        component={NavLink} to="/active">
                            Активні
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                        className='MuiButton-contained'
                        variant='filled'
                        component={NavLink} to="/completed"
                        >
                            Виконанi
                        </Button>
                    </Grid>
                </Grid>
            </Container>
    </div>
  )
}