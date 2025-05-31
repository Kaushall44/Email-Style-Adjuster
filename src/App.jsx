import React, { useState, useEffect } from 'react';
import EmailInput from './components/EmailInput';
import StyleSelector from './components/StyleSelector';
import EmailOutput from './components/EmailOutput';
import EmailService from './services/EmailService';

function App() {
  const [email, setEmail] = useState('');
  const [recipientType, setRecipientType] = useState('');
  const [emailPurpose, setEmailPurpose] = useState('');
  const [selectedTone, setSelectedTone] = useState('');
  const [adjustedEmail, setAdjustedEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Set animation complete after 1 second
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAdjustStyle = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const result = await EmailService.adjustEmailStyle(
        email, 
        selectedTone, 
        recipientType, 
        emailPurpose
      );
      setAdjustedEmail(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg py-8 text-white">
      <div className={`container mx-auto px-4 max-w-5xl ${animationComplete ? 'animate-fade-in' : 'opacity-0'}`}>
        <header className="mb-8 text-center">
          <div className="animate-float inline-block mb-4">
            <span className="text-6xl">✉️</span>
            <span className="text-5xl ml-2">✨</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 animate-pulse-slow">Email Style Adjuster</h1>
          <p className="text-xl text-white mt-2 opacity-80">
            Adjust the tone and style of your emails based on recipient and purpose 🎯
          </p>
        </header>
        
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 mb-8 hover-scale animate-slide-up border border-white border-opacity-20">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <EmailInput 
                email={email} 
                setEmail={setEmail} 
              />
            </div>
            <div className="w-full md:w-1/2">
              <StyleSelector
                recipientType={recipientType}
                setRecipientType={setRecipientType}
                emailPurpose={emailPurpose}
                setEmailPurpose={setEmailPurpose}
                selectedTone={selectedTone}
                setSelectedTone={setSelectedTone}
                onAdjustStyle={handleAdjustStyle}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 hover-scale animate-slide-up border border-white border-opacity-20">
          <EmailOutput
            originalEmail={email}
            adjustedEmail={adjustedEmail}
            isLoading={isLoading}
            error={error}
          />
        </div>
        
        <footer className="mt-12 text-center text-white text-sm animate-fade-in">
          <p>Email Style Adjuster ✨ &copy; {new Date().getFullYear()} ✨</p>
        </footer>
      </div>
    </div>
  );
}

export default App;