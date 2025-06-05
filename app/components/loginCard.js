import { Card } from "./card";
import { useState } from "react";
import { Users, LogIn } from 'lucide-react';

export default function LoginCard() {
    const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log ('Formulaire soumis"')
  };
    return (
    <div className="login mt-2 flex flex-col items-center max-w-md mx-auto p-6 bg-white border rounded-md shadow">
      <h2 className="text-center font-bold w-full">Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label>Mon de passe </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
       <button id="button" type="submit" class="mt-5 gap-2 flex justify-center bg-emerald-600 shadow-xl hover:bg-emerald-500 text-white font-bold border rounded-xl shadow p-3 w-full"> <LogIn /> Se connecter</button>
        <button id="button" type="submit" class="mt-5 gap-2 flex justify-center bg-emerald-600 shadow-xl hover:bg-emerald-500 text-white font-bold border rounded-xl shadow p-3 w-full" >  <Users /> Gérer les bénévoles</button> 
        </div>
      </form>
    </div>
  );
}
