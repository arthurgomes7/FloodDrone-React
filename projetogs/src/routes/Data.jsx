import { useState } from 'react'
import '../App.css'
import Dados from '../components/Dados';
import { Link } from 'react-router-dom';


function Data() {
  
  return (
    <>
    <div className='text-center text-white p-5 hover:text-blue-500'>
        <button>
            <Link to='/'>Página Inicial</Link>
        </button>
    </div>
    <Dados></Dados>
    </>
  )
}

export default Data