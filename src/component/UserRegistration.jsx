// src/components/UserRegistration.js
import React, { useState } from 'react';

const UserRegistration = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (email && password) {
      onRegister(email, password);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Register for BeyondChats</h1>
        
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
        />
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
        />
        
        <button
          onClick={handleRegister}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
        
        <button className="w-full py-3 mt-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition">
          Continue with Google
        </button>

        {/* <p className="text-sm text-center mt-4">Check your email for verification code.</p> */}
      </div>
    </div>
  );
};

export default UserRegistration;