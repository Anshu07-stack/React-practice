import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User from './User.jsx'
import OnchangeEVNt from './OnchangeEVNt.jsx'
import FormValidation from './FormValidation.jsx'
import HandleCheckbox from './HandleCheckbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <User/> */}
    {/* <OnchangeEVNt/> */}
    {/* <FormValidation/> */}
    <HandleCheckbox/>
  </StrictMode>,
)
