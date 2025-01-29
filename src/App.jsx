// src/App.js
import React, { useState } from 'react';
import UserRegistration from './component/UserRegistration';
import SetupOrganisation from './component/SetupOrganisation';
import ChatbotIntegration from './component/ChatbotIntegration';
import SuccessScreen from './component/SuccessScreen';

const App = () => {
  const [step, setStep] = useState(1);

  const handleRegister = (email, password) => {
    console.log('User Registered:', email);
    setStep(2);
  };

  const handleNext = () => {
    setStep(3);
  };

  const handleTestIntegration = () => {
    setStep(4);
  };

  return (
    <div className="font-sans">
      {step === 1 && <UserRegistration onRegister={handleRegister} />}
      {step === 2 && <SetupOrganisation onNext={handleNext} />}
      {step === 3 && <ChatbotIntegration onTestIntegration={handleTestIntegration} />}
      {step === 4 && <SuccessScreen />}
    </div>
  );
};

export default App;
