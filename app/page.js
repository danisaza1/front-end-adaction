'use client';
import { useState } from 'react';
import { LogIn } from 'lucide-react';
import { Users } from 'lucide-react';

export default function Login() {
  const [firstname, setPrenom] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!firstname || !password) {
    setError('Tous les champs sont requis.');
    return;
  }

  const res = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstname, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    setError(data.error || 'Échec de la connexion');
  } else {
    // Connexion OK
    window.location.href = '/client/profil';
  }
};



  return (
    <div className=" m-8 min-h-screen flex items-center justify-center">
      <div className=" max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              Prénom *
            </label>
            <input
              id="firstname"
              type="text"
              className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={firstname}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe *
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
 className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
>            <LogIn className='flex'/>
            Se connecter
          </button>
        </form>
        <button
            type="submit"
          className="mt-4 flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
>  <Users className='flex'/>
             Gérer les bénévoles
          </button>
      </div>
    </div>
  );
}
