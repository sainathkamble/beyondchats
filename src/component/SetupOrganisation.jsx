// src/components/SetupOrganisation.js
import React, { useState } from 'react';

const SetupOrganisation = ({ onNext }) => {
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [description, setDescription] = useState('');
  const [scrapedPages, setScrapedPages] = useState([
    { name: 'Home Page', status: 'scraped' },
    { name: 'About Us', status: 'pending' },
    { name: 'Contact', status: 'scraped' },
  ]);

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Setup Organisation</h1>
        
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="text"
          placeholder="Website URL"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea
          placeholder="Company Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Scraped Pages</h2>
          {scrapedPages.map((page, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{page.name}</span>
              <span className={`text-sm ${page.status === 'scraped' ? 'text-green-500' : 'text-yellow-500'}`}>
                {page.status === 'scraped' ? '✅ Scraped' : '⏳ Pending'}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SetupOrganisation;
