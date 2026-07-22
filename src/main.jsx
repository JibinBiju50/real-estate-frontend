import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NavbarVisibilityProvider } from './context/NavbarVisibilityProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavbarVisibilityProvider>
  <App />
  </NavbarVisibilityProvider>
  </BrowserRouter>
)
