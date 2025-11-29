import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { measureWebVitals, measurePageLoadTime } from './utils/webVitals'

// Inicializar Web Vitals monitoring
measureWebVitals()
measurePageLoadTime()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
