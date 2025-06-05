import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className='flex flex-col gap-2 justify-center items-center xl:flex-row'>
        <div className='flex flex-col justify-center p-5 items-center gap-10 w-100'>
          <div className='text-white text-center pb-5 pt-5'>
            <h1 className='text-6xl font-semibold pb-3'>FloodDrone</h1>
            <p className='text-md text-gray-400'>Vendo a tempestade antes que ela vire tragédia.</p>
          </div>
          <div>
            <p className='text-gray-400 text-center text-lg'>O FloodDrone é uma solução inteligente que usa drones equipados com sensores climáticos para prever enchentes com mais agilidade e precisão. Coletando dados em tempo real diretamente nas áreas de risco, o sistema melhora a qualidade dos alertas e ajuda a salvar vidas, indo além das limitações dos métodos tradicionais.</p>
          </div>
          <div>
            <a href="#"><button className='flex bg-blue-500 text-white font-light p-2 rounded-xl text-base items-center gap-2'><i class="fi fi-sr-play"></i> Veja como Funciona</button></a>
          </div>
        </div>
        <div className='flex p-5 gap-2 xl:flex-col'>
          <div>
            <h2 className='text-xl text-white'>Previsão Precisa</h2>
            <p className='text-sm text-gray-500 font-semibold pl-1'>Drones com sensores climáticos voam sobre áreas de risco, coletando dados em tempo real e identificando sinais de enchentes antes que aconteçam.</p>
          </div>
          <div className='border-l-2 px-2 border-gray-300'>
            <h2 className='text-xl text-white'>Alerta Inteligente</h2>
            <p className='text-sm text-gray-500 font-semibold pl-2'>Com informações mais precisas e atualizadas, o sistema emite alertas rápidos e confiáveis, ajudando a população e autoridades a agirem com antecedência.</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App