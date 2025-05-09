import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ActiveProvider } from './contexts/ActiveLinks.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ActiveProvider>
        <App />

      </ActiveProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
