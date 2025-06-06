import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Geral from './Geral.jsx';
import Login from './routes/Login.jsx';
import Error from './routes/Error.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Geral />} />
        <Route path="/login" element={<Login />} />
        <Route path="/erro" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);