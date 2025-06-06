import { useState } from 'react'
import '../App.css'



function Error() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página não encontrada</h2>
      <p className="text-gray-600 text-center mb-6">
        A página que você tentou acessar não existe ou foi movida.
      </p>
      <a
        href="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
      >
        Voltar para o início
      </a>
    </div>
    </>
  )
}

export default Error