import { useState } from 'react'
import '../App.css'
import Hero from '../Hero'
import { Link } from 'react-router-dom';


function Home() {
  
  return (
    <>
    <div className='text-center text-white p-5 hover:text-blue-500'>
        <button>
            <Link to='/'>Página Inicial</Link>
        </button>
    </div>
    <Hero></Hero>
    </>
  )
}

export default Home