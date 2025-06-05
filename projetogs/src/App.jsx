import { useState } from 'react'
import './App.css'
import drone from './assets/drone.png'

function App() {
  

  return (
    <>
      <div className='flex flex-col gap-2 justify-center items-center xl:flex-col'>
        <div className='flex flex-col justify-center items-center gap-10 p-5 md:p-16'>
          <div className='xl:flex flex-col gap-15'>
            <div className='text-white text-center pb-5 pt-5'>
              <h1 className='text-6xl font-semibold pb-3 md:text-7xl xl:text-9xl'>FloodDrone</h1>
              <p className='text-md text-gray-400 xl:text-2xl'>Vendo a tempestade antes que ela vire tragédia.</p>
            </div>
            <div className='flex flex-col gap-6 md:flex-row xl:items-center xl:flex-col'>
              <p className='text-gray-400 text-center text-xl md:text-start xl:text-2xl xl:text-center xl:w-256'>O FloodDrone é uma solução inteligente que usa drones equipados com sensores climáticos para prever enchentes com mais agilidade e precisão. Coletando dados em tempo real diretamente nas áreas de risco, o sistema melhora a qualidade dos alertas e ajuda a salvar vidas, indo além das limitações dos métodos tradicionais.</p>
              <img src={drone} alt="" className='mask-b-from-20% mask-b-to 100% rounded-3xl md:w-64 xl:w-256'/>
            </div>
          </div>
          <div>
            <a href="#"><button className='flex bg-blue-500 text-white font-light p-2 rounded-xl text-base items-center gap-2'><i class="fi fi-sr-play"></i> Veja como Funciona</button></a>
          </div>
        </div>
        <div className='flex p-5 gap-2 xl:px-50 xl:gap-10'>
          <div>
            <h2 className='text-xl text-white md:text-2xl'>Previsão Precisa</h2>
            <p className='text-base text-gray-500 font-semibold pl-1'>Drones com sensores climáticos voam sobre áreas de risco, coletando dados em tempo real e identificando sinais de enchentes antes que aconteçam.</p>
          </div>
          <div className='border-l-2 px-2 border-gray-900'>
            <h2 className='text-xl text-white md:text-2xl'>Alerta Inteligente</h2>
            <p className='text-base text-gray-500 font-semibold pl-2'>Com informações mais precisas e atualizadas, o sistema emite alertas rápidos e confiáveis, ajudando a população e autoridades a agirem com antecedência.</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App