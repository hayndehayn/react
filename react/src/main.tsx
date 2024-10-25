import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ControlledForm from './components/ControlledForm'
import Fetcher from './components/Fetcher'
import MyComponent from './components/Axios'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ControlledForm />  
    <Fetcher />
    <MyComponent />
  </StrictMode>,
)
