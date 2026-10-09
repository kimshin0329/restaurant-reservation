import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import { MemberProvider } from './context/MemberContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemberProvider>
   <App />
   </MemberProvider>
  </StrictMode>,
)
