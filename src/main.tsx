import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { TaskInput } from './components/TaskInput.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <TaskInput/>
  </StrictMode>,
)
