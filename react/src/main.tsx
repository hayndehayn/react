import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import MyButton from './Button.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MyButton text="Click me" className="my-class" />
  </StrictMode>,
)
