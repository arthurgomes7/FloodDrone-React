import { useState } from 'react';
import '../App.css';
import droneLogo from '../assets/droneLogo.png'
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='p-3 md:pt-20'>
        <div className='flex justify-between md:justify-center md:gap-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-blue-400 font-bold text-xl py-2'>FloodDrone</h1>
                <img src={droneLogo} alt="" className='w-16'/>
            </div>
            <div>
                <h2 className='text-blue-400 font-bold text-lg py-2'>Caminhos</h2>
                <ul className="text-white text-center md:flex-col gap-10 md:text-start">
                    <li><a href="#" className='bg-gradient-to-r from-black to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]'><Link to='/dados'>Dados</Link></a></li>
                    <li><a href="#" className='bg-gradient-to-r from-black to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]'><Link to='/soluction'>Solução</Link></a></li>
                    <li><a href="#" className='bg-gradient-to-r from-black to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]'><Link to='tecno'>Tecnologia</Link></a></li>
                    <li><a href="#" className='bg-gradient-to-r from-black to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]'><Link to='sobre'>Sobre</Link></a></li>
                </ul>
            </div>
            <div>
                <h2 className='text-blue-400 font-bold text-lg py-2'>Redes Sociais</h2>
                <div className='flex flex-col text-white'>
                    <i class="fi fi-brands-instagram"> Instagram</i>
                    <i class="fi fi-brands-facebook"> Facebook</i>
                    <i class="fi fi-brands-twitter"> Twitter</i>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
