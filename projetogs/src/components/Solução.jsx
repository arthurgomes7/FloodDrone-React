import { useState } from 'react'
import '../App.css';
import alertas from '../assets/alertas.jpg'
import comunidade from '../assets/comunidade.jpg'
import enchente from '../assets/enchente.jpg'
import nuvems from '../assets/nuvens.jpg'

function Solucao() {
  

  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
        <h1 className='text-white text-4xl font-semibold text-start'>Sobre o Projeto</h1>
        <div className='flex flex-col gap-5'>
            <div className="relative h-64 w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 rounded-4xl"
                    style={{ backgroundImage: `url(${nuvems})` }}
                ></div>
                <div className="relative z-10 flex items-center justify-center h-full flex-col gap-3">
                    <h2 className="text-white text-2xl font-bold"><i class="fi fi-rr-bullseye-arrow text-red-400"></i> Objetivo Principal</h2>
                    <p className='text-white text-center'>O FloodDrone tem como missão prever enchentes e alagamentos antes que causem danos, ajudando a proteger vidas e patrimônios. A ideia é oferecer uma resposta antecipada e eficaz diante de eventos climáticos extremos.</p>
                </div>
            </div>
            <div className="relative h-64 w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 rounded-4xl"
                    style={{ backgroundImage: `url(${enchente})` }}
                ></div>
                <div className="relative z-10 flex items-center justify-center h-full flex-col gap-3">
                    <h2 className="text-white text-2xl font-bold"><i class="fi fi-rr-drone text-blue-400"></i> Como Funciona na Prática</h2>
                    <p className='text-white text-center'>Drones autônomos sobrevoam áreas vulneráveis e monitoram em tempo real as condições do clima e do ambiente. Com os dados coletados, o sistema identifica padrões que indicam risco iminente de fortes chuvas e inundações, permitindo uma análise mais rápida e precisa do que métodos fixos ou remotos..</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <div className="relative h-64 w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 rounded-4xl"
                    style={{ backgroundImage: `url(${alertas})` }}
                ></div>
                <div className="relative z-10 flex items-center justify-center h-full flex-col gap-3">
                    <h2 className="text-white text-2xl font-bold"><i class="fi fi-rr-engine-warning text-yellow-400"></i> Sistema de Alerta Antecipado</h2>
                    <p className='text-white text-center'>Quando há risco identificado, o sistema envia alertas para autoridades e, se necessário, diretamente à população. O foco está na agilidade e na confiabilidade, reduzindo alarmes falsos e garantindo tempo hábil para ações preventivas.</p>
                </div>
            </div>
            <div className="relative h-64 w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 rounded-4xl"
                    style={{ backgroundImage: `url(${comunidade})` }}
                ></div>
                <div className="relative z-10 flex items-center justify-center h-full flex-col gap-3">
                    <h2 className="text-white text-2xl font-bold"><i class="fi fi-rr-ranking-stars text-green-400"></i> Impacto Esperado</h2>
                    <p className='text-white text-center'>Com alertas mais eficientes, o projeto ajuda a evitar tragédias, reduz perdas materiais e fortalece a capacidade de resposta de comunidades e órgãos públicos. É uma nova forma de lidar com desastres naturais — mais tecnológica, preventiva e humana.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Solucao