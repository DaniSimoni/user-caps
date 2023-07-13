import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './global.style.jsx'
import { AuthProvider } from './context/auth/auth.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
