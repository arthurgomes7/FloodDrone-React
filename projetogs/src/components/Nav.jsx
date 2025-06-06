import { useState } from 'react';
import '../App.css';
import droneLogo from '../assets/droneLogo.png'
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white px-10 py-4 shadow-md relative">
      <div className="flex justify-between items-center">
        <div>
          <img src={droneLogo} alt="" className='w-16'/>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none text-blue-500 border rounded-2xl p-1"
          >
            ☰
          </button>
        </div>
        <ul className="hidden md:flex gap-10">
          <li><a href="#" className='bg-gradient-to-r from-black to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]'><Link to='/dados'>Dados</Link></a></li>
          <li><a href="#" className='bg-gradient-to-r from-black to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]'><Link to='/soluction'>Solução</Link></a></li>
          <li><a href="#" className='bg-gradient-to-r from-black to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]'><Link to='/tecno'>Tecnologia</Link></a></li>
          <li><a href="#" className='bg-gradient-to-r from-black to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]'><Link to='/sobre'>Sobre</Link></a></li>
        </ul>
          <div className="hidden md:block">
            <h5 className='bg-blue-600 text-center rounded-2xl px-5 py-1'><a href="">
              <Link to='/login'>Login</Link></a>
              </h5>
          </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden mt-4 bg-transparent shadow-lg rounded p-4">
          <ul className="flex flex-col gap-4 text-white font-extralight hover:text-blue-600">
            <li><a href="#"><Link to='/dados'>Dados</Link></a></li>
            <li><a href="#"><Link to='/soluction'>Solução</Link></a></li>
            <li><a href="#"><Link to='/tecno'>Tecnologias</Link></a></li>
            <li><a href="#"><Link to='/sobre'>Sobre</Link></a></li>
            <li className='bg-blue-600 text-center rounded-2xl'><a href="#"><Link to='/login'>Login</Link></a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
