import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import React from 'react'
import StarsCanvas from './Componants/animation/Stars.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarsCanvas/>
    <App />
  </StrictMode>,
)
