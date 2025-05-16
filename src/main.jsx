import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GetProvider } from './contexts/getContext.jsx'
import { ActiveProvider } from './contexts/ActiveLinks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GetProvider>
      <ActiveProvider>
         <App />
      </ActiveProvider>
    </GetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
