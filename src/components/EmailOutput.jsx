import React, { useState } from 'react';

function EmailOutput({ originalEmail, adjustedEmail, isLoading, error }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(adjustedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full animate-fade-in">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <h3 className="flex items-center text-white text-lg font-semibold mb-3">
            <span className="mr-2">📄</span> Original Email
          </h3>
          <div className="border border-white border-opacity-30 rounded-lg p-4 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm h-60 overflow-auto transition-all duration-300 hover:border-opacity-50">
            {originalEmail ? (
              <div className="whitespace-pre-wrap text-white">{originalEmail}</div>
            ) : (
              <div className="text-white text-opacity-50 italic">Your original email will appear here ✍️</div>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="flex items-center text-white text-lg font-semibold mb-3">
            <span className="mr-2">✨</span> Adjusted Email
          </h3>
          <div className="border border-white border-opacity-30 rounded-lg p-4 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm h-60 overflow-auto transition-all duration-300 hover:border-opacity-50 relative">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 border-blue-500 mb-3"></div>
                <div className="text-white">Transforming your email...</div>
              </div>
            ) : error ? (
              <div className="text-red-400 flex items-center">
                <span className="mr-2">⚠️</span> {error}
              </div>
            ) : adjustedEmail ? (
              <div className="whitespace-pre-wrap text-white animate-fade-in">{adjustedEmail}</div>
            ) : (
              <div className="text-white text-opacity-50 italic">Your adjusted email will appear here ✨</div>
            )}
          </div>
        </div>
      </div>
      
      {adjustedEmail && (
        <div className="mt-6 flex justify-center">
          <button
            className={`${copied ? 'bg-green-500' : 'bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600'} 
              text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 
              focus:ring-opacity-50 transform transition-all duration-300 hover:scale-105 
              shadow-lg flex items-center space-x-2`}
            onClick={handleCopy}
          >
            <span>{copied ? '✅ Copied!' : '📋 Copy to Clipboard'}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default EmailOutput;