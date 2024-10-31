import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home, About, Contact } from './components/Components';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;