import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ControlledForm from './components/ControlledForm'
import Fetcher from './components/Fetcher'
import UserComponent from './components/UserComponent'
import UncontrolledForm from './components/UncontrolledForm'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ControlledForm />
    <UncontrolledForm />
    <Fetcher />
    <UserComponent />
  </StrictMode>,
)
