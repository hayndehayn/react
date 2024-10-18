import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Stateful from './Stateful/Stateful.tsx';
import Stateless from './Stateless/Stateless.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Stateful />
    <Stateless />
  </StrictMode>,
)
