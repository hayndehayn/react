import './App.css'
import ThemeProvider from './context/ThemeProvider'
import ThemeToggle from './components/ThemeToggle';

function App() {
    return (    
        <>
            <ThemeProvider>
                <div className='main'>
                    <ThemeToggle />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;