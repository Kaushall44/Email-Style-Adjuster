import React from 'react';

function StyleSelector({ 
  recipientType, 
  setRecipientType, 
  emailPurpose, 
  setEmailPurpose,
  selectedTone,
  setSelectedTone,
  onAdjustStyle
}) {
  const tones = [
    { id: 'formal', label: 'Formal', description: 'Professional and respectful', emoji: '👔', color: 'from-blue-400 to-indigo-600' },
    { id: 'friendly', label: 'Friendly', description: 'Warm and approachable', emoji: '😊', color: 'from-yellow-300 to-amber-500' },
    { id: 'neutral', label: 'Neutral', description: 'Balanced and straightforward', emoji: '🤝', color: 'from-green-400 to-teal-500' },
    { id: 'urgent', label: 'Urgent', description: 'Direct and time-sensitive', emoji: '⚡', color: 'from-red-400 to-pink-600' },
    { id: 'thankful', label: 'Thankful', description: 'Expressing gratitude', emoji: '🙏', color: 'from-purple-400 to-purple-600' },
    { id: 'apologetic', label: 'Apologetic', description: 'Communicating regret', emoji: '😔', color: 'from-gray-400 to-gray-600' }
  ];

  const recipientTypes = [
    { name: 'Colleague', emoji: '👩‍💼' },
    { name: 'Manager', emoji: '👨‍💼' },
    { name: 'Client', emoji: '🤵' },
    { name: 'Friend', emoji: '🙋' },
    { name: 'Service Provider', emoji: '👷' },
    { name: 'Other', emoji: '👤' }
  ];

  const purposes = [
    { name: 'Request', emoji: '🙋‍♂️' },
    { name: 'Information', emoji: 'ℹ️' },
    { name: 'Follow-up', emoji: '🔄' },
    { name: 'Feedback', emoji: '📝' },
    { name: 'Introduction', emoji: '👋' },
    { name: 'Other', emoji: '📌' }
  ];

  return (
    <div className="w-full mb-6 animate-fade-in">
      <div className="mb-6">
        <label className="flex items-center text-white text-lg font-semibold mb-3">
          <span className="mr-2">👥</span> Who is the recipient?
        </label>
        <select
          className="shadow border border-white border-opacity-30 bg-black bg-opacity-25 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-filter backdrop-blur-sm transition duration-300 ease-in-out hover:border-opacity-50"
          value={recipientType}
          onChange={(e) => setRecipientType(e.target.value)}
        >
          <option value="" className="bg-gray-800">Select recipient type...</option>
          {recipientTypes.map(type => (
            <option key={type.name} value={type.name} className="bg-gray-800">
              {type.emoji} {type.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="flex items-center text-white text-lg font-semibold mb-3">
          <span className="mr-2">🎯</span> What is the purpose of this email?
        </label>
        <select
          className="shadow border border-white border-opacity-30 bg-black bg-opacity-25 rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-filter backdrop-blur-sm transition duration-300 ease-in-out hover:border-opacity-50"
          value={emailPurpose}
          onChange={(e) => setEmailPurpose(e.target.value)}
        >
          <option value="" className="bg-gray-800">Select email purpose...</option>
          {purposes.map(purpose => (
            <option key={purpose.name} value={purpose.name} className="bg-gray-800">
              {purpose.emoji} {purpose.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="flex items-center text-white text-lg font-semibold mb-3">
          <span className="mr-2">🎭</span> Choose the tone for your email
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tones.map((tone) => (
            <div 
              key={tone.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 backdrop-filter backdrop-blur-sm hover-scale ${
                selectedTone === tone.id 
                  ? `bg-gradient-to-r ${tone.color} border-transparent shadow-lg transform scale-105` 
                  : 'border-white border-opacity-20 bg-black bg-opacity-25 hover:bg-opacity-40'
              }`}
              onClick={() => setSelectedTone(tone.id)}
            >
              <div className="text-center mb-2">
                <span className="text-2xl">{tone.emoji}</span>
              </div>
              <div className="font-medium text-center text-white">{tone.label}</div>
              <div className="text-xs text-center text-white text-opacity-80 mt-1">{tone.description}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mt-6 w-full transform transition-transform duration-200 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
        onClick={onAdjustStyle}
      >
        <span>✨</span>
        <span>Adjust Email Style</span>
        <span>✨</span>
      </button>
    </div>
  );
}

export default StyleSelector;