import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

function buttonClick() {
    alert('Prontinho, você está cadastrado!')
}

  return (

    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Cadastre-se</h2>
        <form onSubmit={handleLogin} className="space-y-4">
            <div>
                <label className="block mb-1 text-gray-700">Email</label>
                <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <div>
                <label className="block mb-1 text-gray-700">Confirme o seu Email</label>
                <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <div>
                <label className="block mb-1 text-gray-700">Senha</label>
                <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            </div>
            <button
            type="submit"
            onClick={buttonClick}
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Cadastre - se
          </button>
          <p className='text-center'>
            <Link to='/'>Home</Link>
            </p>
        </form>
    </div>
    </div>
  );

}



export default Cadastro;