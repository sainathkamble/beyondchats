// src/components/ChatbotIntegration.js
import React, { useState } from 'react';

const ChatbotIntegration = ({ onTestIntegration }) => {
  const [integrationStatus, setIntegrationStatus] = useState('pending');

  const handleTestIntegration = () => {
    setIntegrationStatus('testing');
    setTimeout(() => setIntegrationStatus('success'), 2000); // Simulating API call
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Chatbot Integration & Testing</h1>

        <button
          onClick={() => alert('Test Chatbot functionality')}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg mb-4 hover:bg-blue-700 transition"
        >
          Test Chatbot
        </button>

        <h3 className="text-lg font-medium mb-4">Integration Status: {integrationStatus === 'pending' ? 'Not yet tested' : integrationStatus}</h3>

        {integrationStatus === 'success' && (
          <div className="text-center">
            <div className="text-green-500 font-semibold mb-4">Success! Chatbot integration completed.</div>
            <button
              onClick={onTestIntegration}
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg mb-4 hover:bg-green-600 transition"
            >
              Explore Admin Panel
            </button>
            <button
              onClick={() => alert('Start chatting with your chatbot')}
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Start talking to your chatbot
            </button>
          </div>
        )}

        <button
          onClick={handleTestIntegration}
          className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Test Integration
        </button>
      </div>
    </div>
  );
};

export default ChatbotIntegration;
