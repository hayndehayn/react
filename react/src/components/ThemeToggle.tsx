import { useTheme } from '../context/ThemeProvider';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    switch (theme) {
        case 'light':
            document.body.style.backgroundColor = '#fff';
            break;
        case 'dark':
            document.body.style.backgroundColor = '#000';
            break;
        default:
            document.body.style.backgroundColor = '#fff';
    }

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
};

export default ThemeToggle;