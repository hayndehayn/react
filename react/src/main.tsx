import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UncontrolledForm from './components/UncontrolledForm'
import ControlledForm from './components/ControlledForm'
import Fetcher from './components/Fetcher'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UncontrolledForm />
    <ControlledForm />  
    <Fetcher />
  </StrictMode>,
)
