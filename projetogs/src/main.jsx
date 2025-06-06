import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Geral from './Geral.jsx';
import Login from './routes/Login.jsx';
import Error from './routes/Error.jsx';
import Cadastro from './routes/Cadastrar.jsx';
import Home from './routes/Home.jsx';
import Sobre from './routes/Sobre.jsx';
import SolucaoRoute from './routes/Solucao.jsx';
import Data from './routes/Data.jsx';
import Tecno from './routes/Tecnologias.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Geral />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/soluction" element={<SolucaoRoute />} />
        <Route path="/dados" element={<Data />} />
        <Route path="/tecno" element={<Tecno />} />
        <Route path="*" element={<Error />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
);