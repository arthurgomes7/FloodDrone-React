import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './components/Nav.jsx'
import Dados from './components/Dados.jsx'
import Solucao from './components/Solução.jsx'
import Tecnologias from './components/Tecnologias.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav></Nav>
    <App />
    <Dados></Dados>
    <Solucao></Solucao>
    <Tecnologias></Tecnologias>
  </StrictMode>,
)
