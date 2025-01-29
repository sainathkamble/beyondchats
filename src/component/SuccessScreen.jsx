// src/components/SuccessScreen.js
import React from 'react';

const SuccessScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-6">🎉 Success! Your chatbot is live! 🎉</h1>

        <button
          onClick={() => alert('Explore Admin Panel')}
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg mb-4 hover:bg-green-600 transition"
        >
          Explore Admin Panel
        </button>

        <button
          onClick={() => alert('Start chatting with your chatbot')}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg mb-4 hover:bg-indigo-700 transition"
        >
          Start talking to your chatbot
        </button>

        <div className="flex space-x-4">
          <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Share on Facebook</button>
          <button className="py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">Share on Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
