import { useState } from 'react'
import '../App.css'
import Tecnologias from '../components/Tecnologias';
import { Link } from 'react-router-dom';


function Tecno() {
  
  return (
    <>
    <div className='text-center text-white p-5 hover:text-blue-500'>
        <button>
            <Link to='/'>Página Inicial</Link>
        </button>
    </div>
    <Tecnologias></Tecnologias>
    </>
  )
}

export default Tecno