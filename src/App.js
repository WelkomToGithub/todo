import './App.css';
import {Todo} from './components/todo'
import {
Routes,
Route
} from "react-router-dom";
import { Completed } from './components/Complete/complete';
import { TasksProvider } from './context/TasksProvider';
import { InputTask } from './components/InputTask/inputTask';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Footer } from './components/Footer/footer';
import { Active } from './components/Active/active';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#bfbfbf',
            contrastText: 'rgba(43,41,41,0.72)',
        },
        secondary: {
            main: '#bfbfbf',
        },
        backgroundColor: '#bfbfbf',
        background: {
            default: '#bfbfbf',
            paper: '#e2e2e2',
        },
        text: {
            hint: '#3f3e3f',
            primary: 'rgba(69,69,69,0.87)',
        },
    },
});
 const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline/>
            <TasksProvider>

                <div className="App">
                    <header className="App-header">
                        <InputTask />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<Todo />} />
                            <Route path="/completed" element={<Completed />} />
                            <Route path="/active" element={<Active />} />
                        </Routes> 
                    </main>
                    <Footer/>
                </div>
            </TasksProvider>
        </ThemeProvider>
    );
}

export default App;
