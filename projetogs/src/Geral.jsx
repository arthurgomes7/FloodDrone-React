import { useState } from 'react'
import './App.css'
import drone from './assets/drone.png'
import Nav from './components/Nav'
import Hero from './Hero'
import Dados from './components/Dados'
import Solucao from './components/Solução.jsx'
import Tecnologias from './components/Tecnologias.jsx'
import Footer from './components/Footer.jsx'

function Geral() {
  
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Dados></Dados>
      <Solucao></Solucao>
      <Tecnologias></Tecnologias>
      <Footer></Footer>
    </>
  )
}

export default Geral