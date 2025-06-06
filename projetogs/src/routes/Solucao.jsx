import { useState } from 'react'
import '../App.css'
import Solucao from '../components/Solução';
import Dados from '../components/Dados';
import Tecnologias from '../components/Tecnologias';
import { Link } from 'react-router-dom';


function SolucaoRoute() {
  
  return (
    <>
    <div className='text-center text-white p-5 hover:text-blue-500'>
        <button>
            <Link to='/'>Página Inicial</Link>
        </button>
    </div>
    <Solucao></Solucao>
    <Dados></Dados>
    <Tecnologias></Tecnologias>
    </>
  )
}

export default SolucaoRoute