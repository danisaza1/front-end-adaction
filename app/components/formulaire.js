
'use client';
import React, { useState } from 'react';
// Formulaire component now accepts an `onClose` prop.
export default function Formulaire({ onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to an API).
    console.log('Form Submitted:', { firstName, lastName, email, password, location });
    // After successful submission, you might want to close the modal:
    onClose();
  };
  return (
    <div className="p-4 w-100"> {/* Added padding to the form container */}
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Ajouter un.e bénévole</h2>
      <form onSubmit={handleSubmit} className="space-y-4"> {/* Added spacing between form elements */}
        {/* Input fields */}
        <div>
          <label htmlFor="form-firstname" className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            id="form-firstname"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="form-lastname" className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            id="form-lastname"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="form-email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="form-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="form-password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input
            id="form-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="form-location" className="block text-sm font-medium text-gray-700">Localisation</label>
          <input
            id="form-location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex justify-center gap-3 mt-6"> {/* Buttons aligned to the right with gap */}
          <button
            type="submit"
            className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200"
          >
            Ajouter
          </button>
          <button
            type="button"
            onClick={onClose} // This button calls the onClose prop to close the modal.
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}







